import { API_RESPONSE_ANNOUNCE, HomeService } from './../../services/api/home/home.service';
import { Component, OnInit } from '@angular/core';
import { Platform, AlertController, ActionSheetController  } from '@ionic/angular';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';

import { API_RESPONSE_PROFILE } from './../../services/authen/authen.model';

import { AuthenService } from './../../services/authen/authen.service';
import { Router, ActivatedRoute } from '@angular/router';
import { StorageService } from './../../services/storage/storage.service';
import { environment as env } from './../../../environments/environment';
import { moment } from './../../services/utils/moment/moment.service';
import { CheckInoutService } from './../../services/api/check-inout/check-inout.service';
import { FcmService } from './../../services/fcm/fcm.service';
import { AnnounceService } from './../../services/api/announce/announce.service';

moment.locale('th');

interface Menus {
  id: string | undefined;
  title: string | undefined;
  title2?: string | undefined;
  logo: string | undefined;
  link?: string | undefined;
  badge?: number | undefined;
}

@Component({
  selector: 'app-guest-home',
  templateUrl: './guest-home.page.html',
  styleUrls: ['./guest-home.page.scss'],
})
export class GuestHomePage implements OnInit {
  version = env.version;

  today: any;
  notAnnouncePopupDisplayAgain : boolean = false;

  timeToday = {
    checkIn  : '__:__',
    checkOut : '__:__',
  }

  menus: Menus[] = [
    {
      id: 'SETTING',
      title: 'ตั้งค่า',
      logo: 'assets/images/menus/settings.svg',
      link: 'setting',
      badge : 0,
    },
    {
      id: 'CUSTOMER',
      title: 'ลูกค้า',
      logo: 'assets/images/menus/user.svg',
      link: 'guest-customer',
      badge : 0,
    },
  ];
  /*
  menus: Menus[] = [
    {
      id: 'CHECK-IN',
      title: 'ลงชื่อเข้า/ออก',
      logo: 'assets/images/menus/location.png',
      link: 'check-inout',
      badge : 0,
    },
    {
      id: 'SCAN-CHECKIN',
      title: 'สแกนเข้า/ออก',
      logo: 'assets/images/menus/qr-code-scan.png',
      link: 'scan-check-inout',
      badge : 0,
    },
    {
      id: 'CSG-PLAN',
      title: 'แพลนงาน',
      logo: 'assets/images/menus/calendar-pen.png',
      link: 'csg-plan',
      badge : 0,
    },
    {
      id: 'TIME-STAT',
      title: 'สถิติการทำงาน',
      logo: 'assets/images/menus/calendar-time.png',
      link: 'time-stat',
      badge : 0,
    },
    {
      id: 'CUSTOMER',
      title: 'ลูกค้า',
      logo: 'assets/images/menus/user.svg',
      link: 'customer',
      badge : 0,
    },
    {
      id: 'INCOME',
      title: 'รายได้',
      logo: 'assets/images/menus/thai-baht.png',
      link: 'income',
      badge : 0,
    },
    {
      id: 'WORKFLOW',
      title: 'ใบลา',
      logo: 'assets/images/menus/approve.png',
      link: 'workflow',
      badge : 0,
    },
    {
      id: 'DIRECT-TO-CUSTOMER',
      title: 'Direct to',
      title2: 'Customer',
      logo: 'assets/images/menus/bag.png',
      link: 'direct-to-customer',
      badge : 0,
    },
    {
      id: 'ANNOUNCE',
      title: 'ประกาศ',
      logo: 'assets/images/menus/megaphone-outline.svg',
      link: 'announce',
      badge: 0,
    },
  ];
  */

  newsData: API_RESPONSE_ANNOUNCE[] = [];

  newsOptions = {
    initialSlide: 0,
    speed: 400,
  };

  user: API_RESPONSE_PROFILE;

  state : any = null;
  version_picture : number = Math.floor(Math.random()*10000);


  counter = {
    announce_wait_count : 0
  }


  constructor(
    private home: HomeService,
    private alertController: AlertController,
    private authen: AuthenService,
    private storage: StorageService,
    private router: Router,
    private activateRoute : ActivatedRoute,
    private checkInApi: CheckInoutService,
    private announceApi : AnnounceService,
    private platform : Platform,
    private actionSheetController: ActionSheetController,
    private photoViewer : PhotoViewer,
    private fcm : FcmService,
  ) {
   // this.fcm.getToken();

    this.activateRoute.queryParams.subscribe((params: any) => {
        this.state = this.router.getCurrentNavigation()?.extras.state || null
        this.getVersionPicture();
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
    this.getUserInfo();

    try {
        console.log('start get timetoday')
        const response = await this.checkInApi.getCheckInOutToday();
        console.log(response)
        if(response.datas){
            this.timeToday = {
              checkIn  : (!response.datas.timein)?'':response.datas.timein.substring(0,2)+':'+response.datas.timein.substring(2,4),
              checkOut : (!response.datas.timeout)?'':response.datas.timeout.substring(0,2)+':'+response.datas.timeout.substring(2,4),
            }
        }

        /* announce slider */
      //  const announce = await this.home.announce();
      //  this.newsData = await announce.data;

      //  this.getAnnouncePopup();
      //  this.getAnnounceAllWaitCount();

    } catch (error) {
        console.log(error);
    }
  }

  doRefresh(event) {
    setTimeout(() => {
        this.ionViewDidEnter();
        event.target.complete();
    }, 2000);
  }


  async getUserInfo(): Promise<void> {
    const info = await this.storage.get('USER_INFO');
    this.user = info;
    this.user.picture = this.user.picture+'?v='+this.version_picture.toString();

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
            this.authen.logout();
          },
        },
      ],
    });

    await alert.present();
  }

  navigate(route: string): void {
    this.router.navigate([route]);
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
            this.navigate('/setting')
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
    console.log(period)

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


}
