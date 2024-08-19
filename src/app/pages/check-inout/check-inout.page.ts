import * as moment from 'moment';

import { AlertController, ModalController, Platform } from '@ionic/angular';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { CheckInoutService } from './../../services/api/check-inout/check-inout.service';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { LocationAccuracy } from '@ionic-native/location-accuracy/ngx';
import { Router } from '@angular/router';

import { AlertService } from './../../services/utils/alert/alert.service';

//import { AlertCheckInoutComponent } from './alert-check-inout/alert-check-inout.component';



declare let google: any;

type StatusContent = 'OK' | 'LOADING' | 'NOT_FOUND' | 'COMPLETED' | 'ERROR' | 'POSTING';

interface DataLocation {
  title: string | null | undefined;
  subTitle?:  string | null | undefined;
  brandName?: string | null | undefined;
  latitude: number | null | undefined;
  longitude: number | null | undefined;
  icon?: { url: string | null | undefined; scaledSize: any };
  server?: string | null | undefined;
  timeout?: number;
  storeId?: string | null | undefined;
  branchId?: string | null | undefined;
  counterId?: string | null | undefined;
  custId?: string | null | undefined;
}

@Component({
  selector: 'app-check-inout',
  templateUrl: './check-inout.page.html',
  styleUrls: ['./check-inout.page.scss'],
})
export class CheckInoutPage implements OnInit {
  @ViewChild('map', { read: ElementRef, static: false }) mapRef: ElementRef;

  map: any;

  statusMap: StatusContent = 'LOADING';
  statusWorkspace: StatusContent = 'LOADING';

  myLocation: DataLocation;
  workspaceLocation: DataLocation[];
  locationsSelected: any[] = [];


  countdownExpire = 60;
  countdownCompleted = 3;

  autoCheck: boolean;
  currentLocation: string;
  mobilePlatform: string;
  lottiefiles: any;



  result = {
    type         : '',
    title        : '',
    ship_no      : '',
    ship_name    : '',
    counter_id   : '',
    counter_name : '',
    time_stamp   : ''
  };

  constructor(private router: Router,
              private alertController: AlertController,
              private modalController: ModalController,
              private geolocation: Geolocation,
              private platform: Platform,
              private locationAccuracy:  LocationAccuracy,
              private checkInApi: CheckInoutService,
              private alert: AlertService) {}

  async ngOnInit() {
    await this.checkMobilePlatform();
    this.initMap();
  }

  async refreshMap(){
    this.initMap();
  }

  async checkMobilePlatform() {
    if (this.platform.is('ios')) {
      this.mobilePlatform = 'ios';
    } else if (this.platform.is('android')) {
      this.mobilePlatform = 'android';
    } else {
      this.mobilePlatform = 'cordova';
    }

    this.lottiefiles = {
      loadData: {
        options: { path: 'assets/lottiefiles/reload.json', loop: true },
        width: '80px',
        height: '80px',
      },
      completedData: {
        options: { path: this.mobilePlatform === 'ios' ? 'assets/lottiefiles/completed.json' : 'assets/lottiefiles/completed.json', loop: false },
        width: '170px',
        height: '170px',
      },
      loadingMap: {
        options: { path: 'assets/lottiefiles/loading-map.json', loop: true },
        width: '300px',
        height: '300px',
      },
      warningMap: {
        options: { path: 'assets/lottiefiles/warning-map.json', loop: false },
        width: '150px',
        height: '150px',
      },
      waiting: {
        options: { path: 'assets/lottiefiles/waiting.json', loop: false },
        width: '100px',
        height: '100px',
      },
    };
  }

  async initMap(): Promise<void> {
    try {

      this.myLocation = await this.getMyLocation();
     // alert( this.myLocation.latitude.toString())
      this.currentLocation = this.myLocation.latitude.toString()+' , '+this.myLocation.longitude.toString();
      //31-03-2022 this.showMap(this.myLocation);

      this.workspaceLocation = await this.getWorkLocation();
      //31-03-2022 this.showMap(this.myLocation);
      // for (const location of this.workspaceLocation) {
      //    this.addMarker(location);
      // }
     //(this.workspaceLocation.length)
      this.statusWorkspace = 'OK';
    } catch (error) {
      if (error.name === 'MY_LOCATION' && error.message === 'NOT_FOUND') {
        this.statusMap = 'NOT_FOUND';
      }
      this.statusWorkspace = 'NOT_FOUND';
    }
  }

  async getMyLocation(): Promise<DataLocation> {
    return new Promise(async (resolve, reject) => {
      try {

       // console.log('this.locationAccuracy.canRequest()')
      // alert('1')
       // const canRequest = await this.locationAccuracy.canRequest();

       // if(canRequest){
       //   console.log('canRequest')
       //   alert('2')
          // the accuracy option will be ignored by iOS
       //   await this.locationAccuracy.request(this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY)


       //alert('3')

          console.log('call getCurrentPosition');
          const resp = await this.geolocation.getCurrentPosition({enableHighAccuracy: true});

          //resp.coords.latitude = 13.686262;
          //resp.coords.longitude = 100.526466;

          resolve({
            title: 'My Location',
            latitude: resp.coords.latitude,
            longitude: resp.coords.longitude,
            icon: { url: 'assets/images/check-inout/my-marker.svg', scaledSize: new google.maps.Size(52, 52) },
          });

        //}

      } catch (error) {
        alert('err');
        console.log(error);
        reject({ name: 'MY_LOCATION', message: 'NOT_FOUND' });
      }
    });
  }

  async getWorkLocation(): Promise<DataLocation[]> {
    return new Promise(async(resolve, reject) => {

      const response = await this.checkInApi.getLocationNearMe(this.myLocation.latitude.toString(), this.myLocation.longitude.toString());

      let datas = [];

      response.datas.forEach(data => {
        datas.push({
          title     : data.location_name,
          subTitle  : data.custid+' '+data.location_name,
          brandName : data.brand_name,
          latitude  : data.lat,
          longitude : data.lng,
          storeId   : data.storeid,
          branchId  : data.branchid,
          counterId : data.counterid,
          custId    : data.custid,
          icon: { url: 'assets/images/check-inout/work-marker.svg', scaledSize: new google.maps.Size(52, 52) }
        })
      });
      console.log(datas)



      if(datas.length > 0){
        resolve(datas);
      }else{
        reject({name:'MY_LOCATION' , message : 'NOT_FOUND'})
      }

     // return;


   /*
      setTimeout(() => {
        resolve({
          title: 'ICC Location',
          latitude: 13.686192,
          longitude: 100.526157,
          icon: { url: 'assets/images/check-inout/work-marker.svg', scaledSize: new google.maps.Size(52, 52) },
        });

        // reject({ name: 'WORKSPACE_LOCATION', message: 'NOT_FOUND' });
      }, 1500);*/
    });
  }

  showMap(location: DataLocation) {
    const position = new google.maps.LatLng(location.latitude, location.longitude);
    const options = { center: position, zoom: 17, disableDefaultUI: true };

    this.map = new google.maps.Map(this.mapRef.nativeElement, options);
    this.addMarker(location);
  }

  addMarker(location: DataLocation): void {
    const { title, latitude, longitude, icon } = location;
    const position = new google.maps.LatLng(latitude, longitude);
    const animation = google.maps.Animation.BOUNCE;
    const mapMarker = new google.maps.Marker({ ...location, position, animation });
    mapMarker.setMap(this.map);
    console.log('add',latitude+' , '+longitude)
  }

  refresh() {
    this.statusMap = 'LOADING';
    this.statusWorkspace = 'LOADING';

    this.initMap();
  }

  submitCheck(type: 'IN' | 'OUT'): void {
    if (type === 'IN') {
      this.statusWorkspace = 'LOADING';
      setTimeout(() => {
        this.statusWorkspace = 'COMPLETED';
      }, 1000);
    }

    if (type === 'OUT') {
      this.statusWorkspace = 'COMPLETED';
    }
  }

  async expireCountdown(event: any) {
    if (event.action === 'done') {
      const header = 'Expiration Time';
      const message = 'หมดเวลา กรุณาลองใหม่อีกครั้ง';
      const cssClass = 'alert__box--basic';
      const buttons = [
        {
          text: 'ตกลง',
          handler: () => {
            this.router.navigate(['/home']);
          },
        },
      ];

      const alert = await this.alertController.create({ header, message, cssClass, buttons });
      await alert.present();

      const dismiss = await alert.onDidDismiss();
      if (dismiss.role === 'backdrop') {
        this.router.navigate(['/home']);
      }
    }
  }

  async completedCountdown(event: any) {
    if (event.action === 'done') {
      this.router.navigate(['/home']);
    }
  }

  async errorCheckInOut(event: any) {
    //if (event.action === 'done') {
      const header = 'Error Message';
      const message = event.error.error_message;
      const cssClass = 'alert__box--basic';
      const buttons = [
        {
          text: 'ปิด',
          handler: () => {
            this.refreshMap()
            //this.router.navigate(['/home']);
          },
        },
      ];

      const alert = await this.alertController.create({ header, message, cssClass, buttons });
      await alert.present();

      const dismiss = await alert.onDidDismiss();
      if (dismiss.role === 'backdrop') {
        this.router.navigate(['/home']);
      }
    //}
  }

  async alertModeCheckInOut(location){

    // const modal = await this.modalController.create({
    //   component: AlertCheckInoutComponent,
    //   cssClass: 'my-custom-class'
    // });
    // return await modal.present();

    let alert = await this.alertController.create({
      header: 'Check In / Out',
      message : location.subTitle+'<br>'+location.brandName,
      buttons: [
        {
          text: 'Check In',
          cssClass: 'alert__button--success2',
          handler: () => {
            console.log('Check In');
            this.checkInOut({
              storeid     : location.storeId,
              branchid    : location.branchId,
              counterid   : location.counterId,
              custid      : location.custId,
              custname    : location.subTitle.replace(location.custId,''),
              countername : location.brandName,
              lat         : location.latitude,
              lng         : location.longitude,
              type        : 'I'
            });
          }
        },
        {
          text: 'Check Out',
          cssClass: 'alert__button--danger2',
          handler: () => {
            console.log('Check Out ',location);
            this.checkInOut({
              storeid     : location.storeId,
              branchid    : location.branchId,
              counterid   : location.counterId,
              custid      : location.custId,
              custname    : location.subTitle.replace(location.custId,''),
              countername : location.brandName,
              lat         : location.latitude,
              lng         : location.longitude,
              type        : 'O'
            });
          }
        },
      ]
    });
    await alert.present();

  }


  async checkInOut(param:any){
    try {
      console.log(param)
      this.statusWorkspace = 'LOADING'

       const res = await this.checkInApi.postCheckInOut(
                          param.storeid, param.branchid, param.counterid, param.custid,
                          param.lat, param.lng, param.type);

      console.log('param',param)

      this.result = {
        type         : param.type,
        title        : (param.type=='I')?'ลงทะเบียนเข้าเรียบร้อย' : 'ลงทะเบียนออกเรียบร้อย',
        ship_no      : res.data.shop.id,
        ship_name    : param.custname,
        counter_id   : res.data.counter.id,
        counter_name : param.countername,
        time_stamp   : res.data.time_stamp
      }

      setTimeout(() => {
        this.statusWorkspace = 'COMPLETED';
      }, 200);

    } catch (error) {
      this.alert.basic(error.error.error_message);
      console.log(error);
    }

  }



  checkEventAll($event) {
    console.log($event.target.checked)
    this.autoCheck = true;
    if($event.target.checked){
      this.locationsSelected = []

      this.workspaceLocation.forEach(location => {
        this.locationsSelected.push({ ...location, isCheck: true, all:'Y' });
      });

    }else{
      this.locationsSelected = [];
    }

    console.log('this.locationsSelected',this.locationsSelected)

    setTimeout(() => {
      this.autoCheck = false;
    },100)

  }

  isCheck(location: any) {

    const index = this.locationsSelected.findIndex((p: any) => (p.custId===location.custId && p.counterId===location.counterId ) );
    return index
  }


  checkEvent(location: any,  $event) {

    console.log( $event)
    if(this.autoCheck===true){return;}

    const index = this.locationsSelected.findIndex((p: any) => (p.custId===location.custId && p.counterId===location.counterId ) );


    if (index < 0) {
      this.locationsSelected.push({ ...location, isCheck: true });
      location.isCheck = true
    } else {
      this.locationsSelected[index].isCheck = !this.locationsSelected[index].isCheck;
    }

    const locations = this.locationsSelected.filter((p: any) => p.isCheck);
    this.locationsSelected = locations;

    console.log(this.locationsSelected)
  }


  async alertModeAction(){

    let message = '';
    if(this.locationsSelected.length==1){
       message = this.locationsSelected[0].subTitle+'<br>'+this.locationsSelected[0].brandName;
    }else{
       message = 'จำนวน '+ this.locationsSelected.length + ' เค้าเตอร์';
    }


    let alert = await this.alertController.create({
      header: 'Check In / Out',
      message : message,
      buttons: [
        {
          text: 'Check In',
          cssClass: 'alert__button--success2',
          handler: async () => {
            console.log('Check In ',this.locationsSelected);
            await this.checkInOutLocations('I', this.locationsSelected) ;
          }
        },
        {
          text: 'Check Out',
          cssClass: 'alert__button--danger2',
          handler: async () => {
              console.log('Check Out ',this.locationsSelected);
              await this.checkInOutLocations('O', this.locationsSelected) ;
          }
        },
      ]
    });
    await alert.present();

  }


  async delayfunction():Promise<any> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
         return resolve({});
      }, 100);
    });
  }


  async checkInOutLocations(type:string , locationsSelected:any){
    try {
      console.log(locationsSelected)

      this.statusWorkspace = 'LOADING'
      console.log('xxxxxxxxxxxxxxxxxxxxxxxxx');
      let i=0;
      for(let location of locationsSelected) {

          if(type==='I'){
            console.log('Check In ',location);
          }else{
            console.log('Check Out ',location);
          }


          i++;
          console.log('i=',i);

          const param = {
            storeid     : location.storeId,
            branchid    : location.branchId,
            counterid   : location.counterId,
            custid      : location.custId,
            custname    : location.subTitle.replace(location.custId,''),
            countername : location.brandName,
            lat         : location.latitude,
            lng         : location.longitude,
            type        : type
          };
          console.log('param',param)


          const res = await this.checkInApi.postCheckInOut(
                          param.storeid, param.branchid, param.counterid, param.custid,
                          param.lat, param.lng, param.type);


          this.result = {
            type         : param.type,
            title        : (param.type=='I')?'ลงทะเบียนเข้า...' : 'ลงทะเบียนออก...',
            ship_no      : param.custid,
            ship_name    : param.custname,
            counter_id   : param.counterid,
            counter_name : param.countername,
            time_stamp   : moment().format('YYYY-MM-DD HH:mm:ss')  //res.data.time_stamp
          }
          this.statusWorkspace = 'POSTING'

          //await this.delayfunction();

      }  // for

      setTimeout(() => {
        console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaa', );
        this.statusWorkspace = 'COMPLETED';
      }, 1000);

    } catch (error) {
      //this.alert.basic(error.error.error_message);
      this.errorCheckInOut(error)
      console.log(error);

      
    }



  }





}
