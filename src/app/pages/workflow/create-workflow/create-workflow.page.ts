import { ActionSheetController, ModalController, NavController } from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { API_RESPONSE_PROFILE } from './../../../services/authen/authen.model';
import { AlertService } from './../../../services/utils/alert/alert.service';
import { ApproversListComponent } from './../../../pages/workflow/approvers-list/approvers-list.component';
import { LoadingService } from './../../../services/utils/loading/loading.service';
import { Router } from '@angular/router';
import { StorageService } from './../../../services/storage/storage.service';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { WorkflowService } from './../../../services/api/workflow/workflow.service';
import { moment } from './../../../services/utils/moment/moment.service';

moment.locale('th');
@Component({
  selector: 'app-create-workflow',
  templateUrl: './create-workflow.page.html',
  styleUrls: ['./create-workflow.page.scss'],
})
export class CreateWorkflowPage implements OnInit {
  currentYear: any = new Date().getFullYear();

  user: API_RESPONSE_PROFILE;
  dateNow = moment().format('YYYY-MM-DD');
  approvers: any = [];
  typeleaverequests: any = [];
  flagUpdateApprover = false;

  titleReason: string = 'เหตุผลการลา';

  attachFile = { base64: null, preview: null, raw: null };

  formCreateWorkflow: FormGroup = this.formBuild.group({
    type: [null, Validators.compose([Validators.required])],
    reason: [null, Validators.compose([Validators.required])],
    phone: [null, Validators.compose([Validators.required])],
    startDate: [this.dateNow, Validators.compose([Validators.required])],
    endDate: [this.dateNow, Validators.compose([Validators.required])],
    startTime: ['10:00', Validators.compose([Validators.required])],
    endTime: ['19:00', Validators.compose([Validators.required])],
  });

  constructor(
    private router: Router,
    private formBuild: FormBuilder,
    private api: WorkflowService,
    private storage: StorageService,
    private loading: LoadingService,
    private modalController: ModalController,
    private actionSheetController: ActionSheetController,
    private webview: WebView,
    private camera: Camera,
    private navCtrl: NavController,
    private alert: AlertService
  ) {}

  async ngOnInit(): Promise<void> {
    await this.loading.present();
    this.getUserInfo();
  }

  ionViewDidEnter(): void {
    this.formCreateWorkflow.patchValue({
      phone: this.user.mobile_phone,
    });

    this.init();
  }

  async getUserInfo(): Promise<void> {
    const info = await this.storage.get('USER_INFO');
    this.user = info;
  }

  async init(): Promise<void> {
    try {
      const fetchApproverInfo = await this.api.workflowApproverInfo();
      const config = await this.storage.get('CONFIG');
      console.log(config);
   
      const listsTypeLeave = await this.api.workflowTypeLeaverequest();
      

      this.typeleaverequests = listsTypeLeave.datas.filter((word) => word.flag_active === "Y");

      console.log('listsTypeLeave',listsTypeLeave);
      console.log('typeleaverequest',this.typeleaverequests);
      

      const { approver1, approver2, approver1Name, approver2Name, empid, telno } = fetchApproverInfo.data;
      const approversRaw = [
        { level: '1', id: approver1, name: approver1Name, person: empid, tel: telno, duty: 'ผู้รับทราบ' },
        { level: '2', id: approver2, name: approver2Name, person: empid, tel: telno, duty: 'ผู้อนุมัติ' },
      ];
      const image = (id: string) => `https://iccapp-minio.icc.co.th:9000/icchrapp/profile/${id}/${id}.jpg?alt=media`;
      const approversData = approversRaw.map((p: any) => ({ ...p, image: image(p.id), event: p.id ? 'แก้ไข' : 'เพิ่ม' }));

      
      
      this.approvers = approversData;

      this.loading.dismiss();
    } catch (error) {
      console.log(error);
      this.loading.dismiss();
    }
  }

  async createLeaveRequest(): Promise<void> {
    const form = this.formCreateWorkflow.value;

    try {
      await this.loading.present();

      if (this.flagUpdateApprover) {
        for (const approver of this.approvers) {
          console.log('🚀 ~ Do UpdateApprover ~', approver.level);
          const level = approver.level === '1' ? 'L1' : 'L2';
          const approverid = approver.id;
          await this.api.workflowUpdateApprover({ groupcode: 'S01', level, approverid });
        }
      }

      /*************************************/

      const params = {
        groupcode  : 'S01',
        absentcode : form.type,
        startdate  : form.startDate,
        enddate    : form.endDate,
        starttime  : form.startTime.replace(':', ''),
        endtime    : form.endTime.replace(':', ''),
        reason     : form.reason,
        attachfile : (this.attachFile.raw)?'Y':'N'
      };

      const create = await this.api.workflowCreateDoc(params);
      const { workflowno } = create.data;

      /*************************************/
      const attachFile = this.attachFile.raw;
      if (attachFile) {
        console.log('🚀 ~ Do attachFile ~');

        const folderDate = moment().add(543, 'years').format('YYYYMM');
        const optionAttachFile = {
          fileName: `${workflowno}.jpg`,
          path: `qrms/Letter/AttachFiles/${folderDate}/${workflowno}`,
        };
        await this.api.workflowUploadAttachFile(attachFile, optionAttachFile);
      }

      this.loading.dismiss();

      this.navCtrl.back();

      
    } catch (error) {
      console.log(error);
      this.alert.basic(error.error.error_message);
      this.loading.dismiss();
    }
  }

  async clickAction(level: string): Promise<void> {
    try {
      await this.loading.present();

      const deptId = this.user.dept_id;
      const lists = await this.api.workflowSearchApprover(level, deptId);
     

      this.loading.dismiss();

      const modal = await this.modalController.create({
        component: ApproversListComponent,
        cssClass: 'custom-modal-liff',
        componentProps: {
          props: {
            level,
            people: lists.datas,
          },
        },
      });

      modal.onDidDismiss().then(async (param: any) => {
        if (param.role !== 'backdrop' && param.data.dismissed) {
          const { empid, emp_name } = param.data.person;

          const image = (id: string) => `https://iccapp-minio.icc.co.th:9000/icchrapp/profile/${id}/${id}.jpg?alt=media`;

          if (level === '1') {
            this.approvers[0].id = empid;
            this.approvers[0].name = emp_name;
            this.approvers[0].image = image(empid);
            this.approvers[0].event = 'แก้ไข';
          }

          if (level === '2') {
            this.approvers[1].id = empid;
            this.approvers[1].name = emp_name;
            this.approvers[1].image = image(empid);
            this.approvers[1].event = 'แก้ไข';
          }

          this.flagUpdateApprover = true;
        }
      });

      return await modal.present();
    } catch (error) {
      console.log(error);
      this.alert.basic(error.error.message);
      this.loading.dismiss();
    }
  }

  async browserImage() {
    const actionSheet = await this.actionSheetController.create({
      header: 'เลือกไฟล์เอกสาร/รูปภาพ',
      buttons: [
        {
          text: 'ถ่ายภาพ',
          icon: 'camera',
          handler: () => {
            const options: CameraOptions = {
              quality: 70,
              destinationType: this.camera.DestinationType.FILE_URI,
              encodingType: this.camera.EncodingType.JPEG,
              mediaType: this.camera.MediaType.PICTURE,
            };
            return this.getImage(options);
          },
        },
        {
          text: 'เลือกจากอัลบั้ม',
          icon: 'folder-open',
          handler: () => {
            const options: CameraOptions = {
              quality: 70,
              destinationType: this.camera.DestinationType.FILE_URI,
              encodingType: this.camera.EncodingType.JPEG,
              mediaType: this.camera.MediaType.PICTURE,
              sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM,
            };
            return this.getImage(options);
          },
        },
      ],
    });
    await actionSheet.present();
  }

  getImage(options: CameraOptions) {
    this.camera.getPicture(options).then(
      (imageData) => {
        const base64Image = 'data:image/jpeg;base64,' + imageData;
        const previewImage = this.webview.convertFileSrc(imageData);
        this.attachFile.base64 = base64Image;
        this.attachFile.preview = previewImage;
        this.attachFile.raw = imageData;
      },
      (err) => {
        console.log('nativeCamera Error => ', err);
        // alert(err);
      }
    );
  }

  dateChange(type: string) {
    setTimeout(() => {
      const sFormat = moment(this.formCreateWorkflow.value.startDate).format('YYYYMMDD');
      const eFormat = moment(this.formCreateWorkflow.value.endDate).format('YYYYMMDD');

      this.formCreateWorkflow.patchValue({
        startDate: moment(sFormat, 'YYYYMMDD').format('YYYY-MM-DD'),
        endDate: moment(eFormat, 'YYYYMMDD').format('YYYY-MM-DD'),
      });

      if (sFormat > eFormat) {
        if (type === 'ENDDATE') {
          console.warn('เปลี่ยนวันที่เริ่มต้นอัติโนมัติให้สอดคล้องกับวันที่สิ้นสุด!!!');
          this.formCreateWorkflow.patchValue({
            startDate: this.formCreateWorkflow.value.endDate,
          });
        } else {
          console.warn('เปลี่ยนวันที่สิ้นสุดอัติโนมัติให้สอดคล้องกับวันที่เริ่มต้น!!!');
          this.formCreateWorkflow.patchValue({
            endDate: this.formCreateWorkflow.value.startDate,
          });
        }
      }
    }, 500);
  }

  typeChange(){
    const form = this.formCreateWorkflow.value;
    if(form.type=='99'){
       this.titleReason = 'เหตุผลการแก้ไข';
    }else{
       this.titleReason = 'เหตุผลการลา';
    }
  }
}
