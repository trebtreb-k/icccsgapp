import { API_RESPONSE_ANNOUNCE, HomeService } from './../../services/api/home/home.service';
import { ActionSheetController, AlertController, Platform } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { API_RESPONSE_PROFILE } from './../../services/authen/authen.model';
import { AnnounceService } from './../../services/api/announce/announce.service';
import { AuthenService } from './../../services/authen/authen.service';
import { CheckInoutService } from './../../services/api/check-inout/check-inout.service';
import { CryptoService } from '../../services/crypto/crypto.service';
import { FcmService } from './../../services/fcm/fcm.service';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { PdpaService } from './../../services/api/pdpa/pdpa.service';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';
import { ST_ROOT } from 'src/app/services/api/api.root';
import { StorageService } from './../../services/storage/storage.service';
import { UniqueDeviceIdService } from './../../services/api/unique-device-id/unique-device-id.service';
import { environment as env } from './../../../environments/environment';
import { moment } from './../../services/utils/moment/moment.service';
import { CsgPlanService } from './../../services/api/csg-plan/csg-plan.service';


moment.locale('th');

interface Menus {
  id: string | undefined;
  title: string | undefined;
  title2?: string | undefined;
  logo: string | undefined;
  redirect?: string | undefined;
  link?: string | undefined;

  badge?: number | undefined;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  version = env.version;

  today: any;
  notAnnouncePopupDisplayAgain : boolean = false;

  timeToday = {
    checkIn  : '__:__',
    checkOut : '__:__',
  }

  menus: Menus[];

  newsData: API_RESPONSE_ANNOUNCE[] = [];

  newsOptions = {
    initialSlide: 0,
    speed: 400,
  };

  user: API_RESPONSE_PROFILE;

  state: any = null;
  version_picture: number = Math.floor(Math.random()*10000);
  cheked_unique_device_id: boolean;

  counter = {
    announce_wait_count: 0
  };


  constructor(
    private home: HomeService,
    private alertController: AlertController,
    private authen: AuthenService,
    private storage: StorageService,
    private router: Router,
    private activateRoute: ActivatedRoute,
    private checkInApi: CheckInoutService,
    private announceApi: AnnounceService,
    private platform: Platform,
    private actionSheetController: ActionSheetController,
    private photoViewer: PhotoViewer,
    private fcm: FcmService,
    private uniqueDeviceIdApi: UniqueDeviceIdService,
    private pdpaApi: PdpaService,
    private crypto: CryptoService,
    private iab: InAppBrowser,
    private api: CsgPlanService,
  ) {
  //  this.fcm.getToken();
    this.fcmListenToNotifications();

    this.cheked_unique_device_id = false;

    this.activateRoute.queryParams.subscribe((params: any) => {
        this.state = this.router.getCurrentNavigation()?.extras.state || null;

        this.getVersionPicture();
        // if(this.state){
        //     this.version_picture = Math.floor(Math.random()*10000);
        //     sessionStorage.setItem('version_picture',this.version_picture.toString());
        // }else{
        //     if(sessionStorage.getItem('version_picture')){
        //       this.version_picture =  parseInt(sessionStorage.getItem('version_picture'));
        //     }else {
        //       this.version_picture = Math.floor(Math.random()*10000);
        //       sessionStorage.setItem('version_picture',this.version_picture.toString());
        //     }
        // }
    });




    const today = () => {
      this.today = moment().format('LLLL [น.]');
    };

    setInterval(today, 1000);
  }

  async getVersionPicture(){
    if(this.state && this.state.refresh){
      this.version_picture = Math.floor(Math.random()*10000);
      sessionStorage.setItem('version_picture',this.version_picture.toString());
    }else{
        if(sessionStorage.getItem('version_picture')){
          this.version_picture =  parseInt(sessionStorage.getItem('version_picture'));
        }else {
          this.version_picture = Math.floor(Math.random()*10000);
          sessionStorage.setItem('version_picture',this.version_picture.toString());
        }
    }
  }


  async ngOnInit() {
    //this.getUserInfo();

    // try {
    //   const announce = await this.home.announce();
    //   this.newsData = await announce.data;
    // } catch (error) {
    //   console.log(error);
    // }
   
    
  }



  async ionViewDidEnter() {
    this.getConfig();
    this.getUserInfo();


    try {
        console.log('start get timetoday')
        const response = await this.checkInApi.getCheckInOutToday();
        console.log(response);
        if(response.datas){
            this.timeToday = {
              checkIn  : (!response.datas.timein)?'':response.datas.timein.substring(0,2)+':'+response.datas.timein.substring(2,4),
              checkOut : (!response.datas.timeout)?'':response.datas.timeout.substring(0,2)+':'+response.datas.timeout.substring(2,4),
            }
        }

        /* announce slider */
        const announce = await this.home.announce();
        console.log(announce);
        
        this.newsData = await announce.data;

        this.getAnnouncePopup();
        this.getAnnounceAllWaitCount();
    } catch (error) {
        console.log(error);
    }


    console.log(this.cheked_unique_device_id);
    if(!this.cheked_unique_device_id){

      try {
        const res = await this.uniqueDeviceIdApi.checkUniqueDeviceId();

        if(res.result){
          this.cheked_unique_device_id = true;
        }else{
          this.cheked_unique_device_id = false;
          await this.storage.clear();
          await alert('Error: '+res.error_message);
          this.router.navigate(['/login', {replaceUrl:true}]);
        }
       // alert('res='+JSON.stringify(res))
       // console.log('cheked_unique_device_id',this.cheked_unique_device_id)
       // alert(this.cheked_unique_device_id)

      } catch (e) {
       // alert(JSON.stringify(e))

      //  ------ คนทดสอบ
        if (this.user.emp_id === '90536' || this.user.emp_id === '46291') {
          //alert('treb')
        }  else{

          this.cheked_unique_device_id = false;
          await this.storage.clear();
          alert('Error: '+e.error?.e.error?.error_message)
          this.router.navigate(['/login', {replaceUrl:true}]);

        }
      }
    }



   this.loadPrivacyWaitAgree();



  }

  doRefresh(event) {
    setTimeout(() => {
        this.ionViewDidEnter();
        event.target.complete();
    }, 2000);
  }

  async getConfig(): Promise<void>{
     const response = await this.authen.config();
     console.log('getConfig',response)
     this.storage.set('CONFIG',response.data)
  }


  async getUserInfo(): Promise<void> {
    const info = await this.storage.get('USER_INFO');
    console.log(info);
    
    this.user = info;
    this.user.picture = this.user.picture+'?v='+this.version_picture.toString();


    console.log(info.company);
    
    // const monthV = moment().format('YYYYMM');
    // const callApi = await this.api.getCSGPlan(info.emp_id, monthV);
    // console.log(callApi);


    console.log(info.menus);

    // console.log(info.menus.findIndex(i => i.id === "WORKFLOW"));
    // const i = info.menus.findIndex(i => i.id === "WORKFLOW");

    // console.log(info.menus[i]);

    // info.menus[i].badge = 3;
    

    this.menus = info.menus;
    /*
    if(this.state){
      if(this.state.refresh){
        // this.user.picture = "assets/images/avatar-female.svg";
         this.user.picture = this.user.picture+'?v='+this.version_picture.toString();
      }
    } */

  }

  async logout(): Promise<void> {
    const alert = await this.alertController.create({
      header: 'ออกจากระบบ',
      message: 'คุณต้องการลงชื่อออกจากระบบ ?',
      cssClass: 'alert__box--danger',
      buttons: [
        {
          text: 'ตกลง',
          cssClass: 'alert__button--danger',
          handler: () => {
            this.cheked_unique_device_id = false;
            console.log('cheked_unique_device_id',this.cheked_unique_device_id)
            this.authen.logout();
          },
        },
      ],
    });

    await alert.present();
  }

  navigate(route: string, redirect: string): void {
    
    if(redirect=='PDPA'){
       this.openPDPA();

    }else{
      if(redirect!==''){
        this.router.navigate([route, { targetpage: redirect }]);
      }else{
        this.router.navigate([route]);
      }

    }

  }

  async openPDPA(){
    const user  = await this.storage.get('USER_INFO');
    const param = {
      system_id     : this.pdpaApi.getSystemId(),
      sub_system_id : this.pdpaApi.getSubSystemId(),
      user_id       : user.emp_id,
    }

    console.log(param);
    //alert('x')
    const data_encode =  this.crypto.encryptWithKey(JSON.stringify(param),'ICCPDPA');
    let url = ST_ROOT.pdpa_web+'?data='+data_encode;
    const browser = this.iab.create(url,'_system');
    browser.close();

  }


  async setting() {
      const actionSheet = await this.actionSheetController.create({
        header: 'Menu',
        cssClass: 'my-custom-class',
        buttons: [{
          text: 'Setting',
          icon: 'settings-outline',
          handler: () => {
            console.log('Setting clicked');
            this.navigate('/setting','')
          }
        }, {
          text: 'Logout',
          icon: 'log-out-outline',
          handler: () => {
            console.log('Logout clicked');
            this.logout();
          }
        }]
      });
      await actionSheet.present();

      const { role } = await actionSheet.onDidDismiss();
      console.log('onDidDismiss resolved with role', role);
  }

  onViewImage(url: string | undefined): void {
    this.photoViewer.show(url);
  }


  openLink(news){
    if(news.link){
      window.open(news.link)
    }
  }


  async getAnnouncePopup(){
    let period = moment().format('DD-MM-YYYY');
    console.log(period);

    try {
      let response = await this.announceApi.annoucementPopupUncheckRead(period);
      if(response.result){
        console.log(response)
        if(response.datas.length > 0){
           let announceId      = response.datas[0].announce_id
           let announceTitle   = response.datas[0].title
           let announcePicture = response.datas[0].picture1
           let announceContent = response.datas[0].description
           this.showAnnouncePopup(announceId, announceTitle, announcePicture, announceContent)
        }
     }

    } catch (error) {

    }

  }


  async showAnnouncePopup(announceId, title, pictureUrl, content){

      let announceImg = '<img src="'+pictureUrl+'">'
      let announceContent = ''
      announceContent += announceImg
      announceContent += '<br><div style="overflow-y:auto;max-height:240px;">'+content+'</div>'

      let message = '<div style="overflow-y:auto;height:240px; max-height:240px;">'+announceContent+'</div>'

      let alert = await this.alertController.create({
        header: title,
        message: message,
        inputs: [
          {
            name: 'checkNoRead',
            label: 'ไม่ต้องแสดงอีกในครั้งต่อไป',
            type: 'checkbox',
            checked : false,
            handler: (data) =>  {
              this.notAnnouncePopupDisplayAgain = true

            }
          }
        ],
        buttons: [
          { text: 'ปิดหน้าจอ',
            handler: data => {
                 console.log('Ok clicked');
                 if(this.notAnnouncePopupDisplayAgain){
                    console.log('not display again '+announceId)
                    this.announceApi.addReadAnnoucementPopup(announceId);
                    this.getAnnounceAllWaitCount();
                 }
            }
          }
        ]
      });
      await alert.present();
  }


  async getAnnounceAllWaitCount(){
    try {

      let response = await this.announceApi.announceAllWaitCount();

      console.log(' response.datas.total_count;', response.datas.total_count)
      if(response.result){
        //this.counter.announce_wait_count = response.datas.total_count;
        const idx = this.menus.findIndex((menu)=>{
          console.log(' menu.id',  menu.id)
           return  menu.id=== 'ANNOUNCE'
        });

        console.log('idx',idx)
        console.log(this.menus[idx].badge)
        this.menus[idx].badge = response.datas.total_count;
        console.log(this.menus[idx].badge)

     }

    } catch (error) {

    }

  }




    /***********************************/

    fcmListenToNotifications() {

      this.platform.ready().then(() => {

        this.fcm.getToken();
  
        try {
          this.fcm.listenToNotifications().subscribe((data) => {
            console.log(data);
  
            if (data.wasTapped) {
              console.log('Received in background');
            } else {
              console.log('Received in foreground');
              // alert(JSON.stringify(data))
              this.alertNotifyMessage(data);
            }
          });
        } catch (error) {
  
        }

      });

    }

    async alertNotifyMessage(data) {
      const alert = await this.alertController.create({
        header: 'Notify Message',
        message: '<img src="assets/images/png/info-blue-32.png">&nbsp;' + data.title + '<br/>' + data.body,
        buttons: [{ text: 'Ok' }],
      });
      await alert.present();
    }
    /***********************************/

  /***************** pdpa ******************/
  async loadPrivacyWaitAgree() {

    let flag : boolean = false;
    const config = await this.storage.get('CONFIG');
    if(config.pdpa.environment.mode==='PRODUCTION'){
       flag = true;
    }else{
       flag = config.pdpa.environment.users.indexOf(this.user.emp_id) >= 0;
    }
    if(flag){
      console.log('loadPrivacyWaitAgree');
      try {
        let response = await this.pdpaApi.privacyWaitAgree();
        if(response.result){
          console.log(response)
          if(response.datas.length > 0){
          // alert('ok')
            //this.OpenPage('PDPA_PRIVACY_NOTIFY');
            this.router.navigate(['/pdpa-privacy-notify']);
          }
        }
      } catch (error) {
        console.log(error)
        //alert(error);
      }
    }
  }
  /***************** pdpa ******************/
}
