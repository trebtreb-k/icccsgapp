import { AlertController, ModalController, Platform } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { DocumentViewer, DocumentViewerOptions } from '@ionic-native/document-viewer/ngx';
import { FileTransfer, FileTransferObject, FileUploadOptions } from '@ionic-native/file-transfer/ngx'
import { NavigationExtras, Router } from '@angular/router';

import { File } from '@ionic-native/file/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { IncomeService } from './../../../services/api/income/income.service';
import { LoadingService } from './../../../services/utils/loading/loading.service';
import { ST_SLIP_URL } from './../../../services/api/api.root';
import { StorageService } from './../../../services/storage/storage.service';
import { moment } from './../../../services/utils/moment/moment.service';

//declare var cordova :any;

@Component({
  selector: 'app-detial',
  templateUrl: './detial.page.html',
  styleUrls: ['./detial.page.scss'],
})
export class DetialPage implements OnInit {
  state: any;
  period: any;
  profile: any;

  cardHeader: any;
  detail: any;
  sumG2: any;
  sumG4: any;
  sumG5: any;
  nameLth: any;

  constructor(
    private router: Router,
    private api: IncomeService,
    private storage: StorageService,
    private loading: LoadingService,
    private alertController: AlertController,
    private iab: InAppBrowser,
    private document: DocumentViewer,
    private file: File,
    private transfer: FileTransfer,
    private fileOpener :FileOpener,
    private platform: Platform,
  ) {
    this.state = this.router.getCurrentNavigation()?.extras?.state || null;
    this.period = this.state.period;
  }

  ngOnInit() {
    this.getUserInfo();
    this.initial();
  }

  async initial() {
    try {
      await this.loading.present();

      const fetch = await this.api.getIncomeDetail(this.period);

      this.nameLth = this.profile.name.length;
      this.detail = fetch;
      this.cardHeader = await this.detail.data.filter(
        (ele: any) => ele.datagroup !== 'G2' && ele.datagroup !== 'G4' && ele.datagroup !== 'G5'
      );
      this.sumG2 = await this.detail.data.filter((sum: any) => sum.datagroup === 'G2');
      this.sumG4 = await this.detail.data.filter((sum: any) => sum.datagroup === 'G4');
      this.sumG5 = await this.detail.data.filter((sum: any) => sum.datagroup === 'G5');

      this.loading.dismiss();
    } catch (error) {
      console.log(error);
      this.loading.dismiss();
    }
  }

  async getUserInfo(): Promise<void> {
    const info = await this.storage.get('USER_INFO');
    this.profile = info;
  }

  async alertConfirmRequestSlip() {
    const flagSlip = 'Y'; //this.data_detail.slipflag;

    if (flagSlip === 'Y') {
      const alert = await this.alertController.create({
        header: "Request Slip",
        message: `ท่านต้องการขอสลิปเงินเดือน ${this.period}
        <br><br>ยืนยันใช่หรือไม่`,
        buttons: [
          {
            text: "Cancel",
            handler: () => {
              console.log("Cancel clicked");
            },
          },
          {
            text: "OK",
            handler: () => {
              console.log("Ok clicked");
              //this.openLocalPdf();
              //return;
              this.requestSlip(this.period);
            },
          },
        ],
      });
      await alert.present();
    } else {
      const alert = await this.alertController.create({
        header: "Warning Message",
        message: "ไม่สามารถขอสลิปย้อนหลังที่เกิน 12 เดือนได้",
        buttons: [
          {
            text: "OK",
            handler: () => {
              console.log("Ok clicked");
            },
          },
        ],
      });
      await alert.present();
    }
  }

  async requestSlip(payDate) {
    let reqPayDate = payDate.replace("/", "-").replace("/", "-");

  //  alert(reqPayDate)
    //this.viewSlip({period:reqPayDate});

    const response = await this.api.requestSlip(reqPayDate);
    if(response.result){
     // cordova.InAppBrowser.open(response.pdf, "_system");

    console.log(response);
    this.downloadAndOpenPdf(response);


     //const browser = this.iab.create('https://webapp5.icc.co.th/obsd/new');
     // const browser = this.iab.create(response.pdf,"_system");
     // browser.show()
      // this.iab.create(response.pdf);
    }else{
       alert(response.error_message)
    }

   // alert(response.pdf);
  }

  /*
  viewSlip(data: any): void {
    const navigationExtras: NavigationExtras = { state: { ...data } };
    this.router.navigate(['income/slip'], navigationExtras);
  }
  */

  openLocalPdf(){
    const options : DocumentViewerOptions = {
      title : 'My Slip'
    }
    this.document.viewDocument('assets/slip.pdf', 'application/pdf', options);
  }

  downloadAndOpenPdf(response){
  //  const browser = this.iab.create('https://webapp5.icc.co.th/hr/icccsgapp/main/test.html');
  //  return;
   const pdf_url = response.pdf;

   /*
   let tmp     = pdf_url.replace("https://iccapp-minio.icc.co.th:9000/salestools/payslip/","");
   let data    = tmp.split('/');
   let empid   = data[0];
   let filename= data[1];
   */
//  window.open('https://webapp5.icc.co.th/hr/icccsgapp/main/test.html','_system','location=yes');

   const currrent = moment().format('DDMMYYYYHHmmss')
   const slip_url = ST_SLIP_URL+"?empid="+ response.empid+"&period="+ response.period+"&filename="+ response.filename;

   //window.open(slip_url,'_system','location=yes');
   //alert(slip_url);

   const browser = this.iab.create(slip_url, '_system');
   browser.show();

   return;


    let path = null;
    if(this.platform.is('ios')){
      path = this.file.documentsDirectory;
    }else{
     // path = this.file.dataDirectory;
    //  path = this.file.dataDirectory + "Download/";
       path = this.file.externalRootDirectory + "Download/";
   //   path = this.file.externalApplicationStorageDirectory + "Download/";
    }

    alert('path'+path);

    const transfer = this.transfer.create();
    transfer.download(pdf_url, path + 'slip.pdf', true, {}).then(entry => {
       let url = entry.toURL();

       alert(url)



       if(this.platform.is('ios')){
          this.document.viewDocument(url, 'application/pdf', {});
       }else{ //android
        this.document.viewDocument(url, 'application/pdf', {});
         // this.file.moveFile(path,'slip.pdf',this.file.dataDirectory+'/','slip.pdf');
          this.fileOpener.open(url, 'application/pdf')
        .then(() => {
          console.log('File is opened')
          alert('File is opened')
        })
        .catch(e => {
          console.log('Error openening file', e);
          alert('Error openening file')
        });
      }



    }).catch(error=>{
        alert(error.message)
    })

  }

  /*
  onMissingApp(appId, installer)
  {
      if(confirm("Do you want to install the free PDF Viewer App "
              + appId + " for Android?"))
      {
          installer();
      }
  }

  onError(error){
    window.console.log(error);
    alert("Sorry! Cannot view document.");
  }
  */
}
