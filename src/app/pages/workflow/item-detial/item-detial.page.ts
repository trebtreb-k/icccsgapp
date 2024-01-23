import { AlertController, NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

import { LoadingService } from './../../../services/utils/loading/loading.service';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';
import { Router } from '@angular/router';
import { WorkflowService } from './../../../services/api/workflow/workflow.service';
import { moment } from './../../../services/utils/moment/moment.service';

moment.locale('th');

@Component({
  selector: 'app-item-detial',
  templateUrl: './item-detial.page.html',
  styleUrls: ['./item-detial.page.scss'],
})
export class ItemDetialPage implements OnInit {
  status: 'LOADING' | 'OK' | 'ERROR' = 'LOADING';

  state: any;

  statisData: any[] = [];
  statisLastProcess = null;

  statusData: any = null;
  statusCheck: any = null;

  attachFiles: string;

  constructor(
    private router: Router,
    private navCtrl: NavController,
    private loading: LoadingService,
    private api: WorkflowService,
    private photoViewer: PhotoViewer,
    private alertController: AlertController
  ) {
    this.state = this.router.getCurrentNavigation()?.extras?.state || null;

    console.log(this.state);
  }

  ngOnInit() {
    this.loadData();
  }

  async loadData(): Promise<void> {
    try {
      await this.loading.present();

      const period = moment(moment(new Date())).format('YYYY');

      const fetchStatus = await this.api.workflowDocDetail({ workflow_id: this.state?.workflow_id, doc_id: this.state?.doc_id });
      const dataStatus = fetchStatus.data || null;
      this.loadStatus(dataStatus);

      const fetchStatis = await this.api.workflowTimestat(period, dataStatus?.emp_id || '');
      const dataStatis = fetchStatis.datas || [];
      this.loadStatis(dataStatis, fetchStatis.lastprocess);

      this.attachFiles = dataStatus.attach_file; // `https://webapp7.icc.co.th/qrms/Letter/AttachFiles/256402/${this.state.workflow_id}/${this.state.workflow_id}.jpg`;

      this.status = 'OK';
      this.loading.dismiss();
    } catch (error) {
      this.status = 'ERROR';
      this.loading.dismiss();
    }
  }

  loadStatus(data: any): void {
    const check = (p: any) => {
      const status = p.workflow_status || null;
      const step = p.step_id || null;

      if (status === 'WAIT' && step === '10') {
        return {
          person: { value: 'รอรับทราบ', icon: 'time', color: 'warning', disable: false },
          approver: { value: 'รออนุมัติ', icon: 'time', color: 'warning', disable: true },
          officer: { value: 'รออนุมัติ', icon: 'time', color: 'warning', disable: true },
        };
      }

      if (status === 'WAIT' && step === '30') {
        return {
          person: { value: 'รับทราบ', icon: 'checkmark-circle', color: 'success', disable: false },
          approver: { value: 'รออนุมัติ', icon: 'time', color: 'warning', disable: false },
          officer: { value: 'รออนุมัติ', icon: 'time', color: 'warning', disable: true },
        };
      }

      if (status === 'WAIT' && step === '60') {
        return {
          person: { value: 'รับทราบ', icon: 'checkmark-circle', color: 'success', disable: false },
          approver: { value: 'อนุมัติ', icon: 'checkmark-circle', color: 'success', disable: false },
          officer: { value: 'รออนุมัติ', icon: 'time', color: 'warning', disable: false },
        };
      }

      if (status === 'APPROVE') {
        return {
          person: { value: 'รับทราบ', icon: 'checkmark-circle', color: 'success', disable: false },
          approver: { value: 'อนุมัติ', icon: 'checkmark-circle', color: 'success', disable: false },
          officer: { value: 'ผ่านอนุมัติ', icon: 'checkmark-circle', color: 'success', disable: false },
        };
      }

      if (status === 'CANCEL') {
        return {
          person: { value: 'รับทราบ', icon: 'checkmark-circle', color: 'warning', disable: true },
          approver: { value: 'รออนุมัติ', icon: 'checkmark-circle', color: 'warning', disable: true },
          officer: { value: 'รออนุมัติ', icon: 'checkmark-circle', color: 'warning', disable: true },
        };
      }

      if (status === 'NOTAPPROVE') {
          if(step === '' || step === null){
            return {
              person: { value: 'รับทราบ', icon: 'close-circle', color: 'warning', disable: true },
              approver: { value: 'รออนุมัติ', icon: 'close-circle', color: 'warning', disable: true },
              officer: { value: 'รออนุมัติ', icon: 'close-circle', color: 'warning', disable: true },
            };
          }else if(step === '10'){
            return {
              person: { value: 'ไม่อนุมัติ', icon: 'close-circle', color: 'danger', disable: false },
              approver: { value: 'รออนุมัติ', icon: 'time', color: 'warning', disable: true },
              officer: { value: 'รออนุมัติ', icon: 'time ', color: 'warning', disable: true },
            };
          }else if(step === '30'){
            return {
              person: { value: 'รับทราบ', icon: 'checkmark-circle', color: 'success', disable: false },
              approver: { value: 'ไม่อนุมัติ', icon: 'close-circle', color: 'danger', disable: false },
              officer: { value: 'รออนุมัติ', icon: 'time ', color: 'warning', disable: true },
            };
          }else if(step === '60'){
            return {
              person: { value: 'รับทราบ', icon: 'checkmark-circle', color: 'success', disable: false },
              approver: { value: 'อนุมัติ', icon: 'checkmark-circle', color: 'success', disable: false },
              officer: { value: 'ไม่อนุมัติ', icon: 'close-circle', color: 'danger', disable: false },
            };
          }

      }

    };

    this.statusData = data;
    this.statusCheck = check(data);
  }

  loadStatis(datas: any, lastprocess: any): void {
    const array = [];

    const find = (code: string) => datas.filter((param: any) => param.absentcode === code);
    const add = (row: number, code: string, text: string) => ({
      rowno: row,
      absentcode: code,
      description: text,
      amount_dd: 0,
      amount_hh: 0,
      amount_mm: 0,
      empid: null,
      amount: null,
      totamount: null,
      dayofyear: null,
    });

    const a1 = find('A1');
    array.push(a1.length === 0 ? add(1, 'A1', 'ลาป่วย') : array.push(a1[0]));
    const c1 = find('C1');
    array.push(c1.length === 0 ? add(2, 'C1', 'ลากิจ') : array.push(c1[0]));
    const c2 = find('C2');
    array.push(c2.length === 0 ? add(3, 'C2', 'ลากิจพิเศษ') : array.push(c2[0]));
    const g1 = find('G1');
    array.push(g1.length === 0 ? add(4, 'G1', 'ลาพักร้อน') : array.push(g1[0]));
    const h1 = find('H1');
    array.push(h1.length === 0 ? add(5, 'H1', 'ขาดงาน') : array.push(h1[0]));
    const l1 = find('L1');
    array.push(l1.length === 0 ? add(6, 'L1', 'สาย') : array.push(l1[0]));

    this.statisData = array;
    this.statisLastProcess = moment(lastprocess, 'DD/MM/YYYY').format('DD MMMM YYYY');
  }

  async onCancelWorkflow(): Promise<void> {
    const docid = this.state?.doc_id;

    const alert = await this.alertController.create({
      cssClass: 'alert__box--danger',
      header: 'Cancel',
      message: `คุณต้องการยกเลิกใบลา ${docid}`,
      buttons: [
        {
          text: 'ปิด',
          role: 'cancel',
          cssClass: 'alert__button--dark',
        },
        {
          text: 'ยืนยัน',
          cssClass: 'alert__button--danger',
          handler: async () => {
            try {
              await this.loading.present();

              await this.api.workflowCancelDoc(docid);

              this.loading.dismiss();
              this.navCtrl.back();
            } catch (error) {
              console.log(error);
              this.loading.dismiss();
            }
          },
        },
      ],
    });

    await alert.present();
  }

  onViewImage(url: string | undefined): void {
    this.photoViewer.show(url);
  }
}
