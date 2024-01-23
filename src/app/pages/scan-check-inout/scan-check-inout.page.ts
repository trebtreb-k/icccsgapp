import { Component, OnInit } from '@angular/core';
//import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Router } from '@angular/router';
import { ScanCheckInoutService } from './../../services/api/scan-check-inout/scan-check-inout.service';
import { StorageService } from './../../services/storage/storage.service';
import { ThrowStmt } from '@angular/compiler';

declare let google: any;

type StatusContent =  'BEGIN' | 'OK' | 'LOADING' | 'NOT_FOUND' | 'COMPLETED' | 'ERROR';

interface DataLocation {
  title: string | null | undefined;
  latitude: number | null | undefined;
  longitude: number | null | undefined;
  icon?: { url: string | null | undefined; scaledSize: any };
  server?: string | null | undefined;
  timeout?: number;
}

@Component({
  selector: 'app-scan-check-inout',
  templateUrl: './scan-check-inout.page.html',
  styleUrls: ['./scan-check-inout.page.scss'],
})
export class ScanCheckInoutPage implements OnInit {
  status: StatusContent = 'BEGIN';
  key_manual :boolean = false;
  key_manual_title :string = '';
  key_manual_type :string = '';
  qrcode_text :string = '';

  countdownCompleted = 5;

  myLocation: DataLocation;

  result = {
    type         : '',
    title        : '',
    ship_no      : '',
    ship_name    : '',
    counter_id   : '',
    counter_name : '',
    time_stamp   : ''
  }

  lottiefiles = {
    loading: {
      options: { path: 'assets/lottiefiles/reload.json', loop: true },
      width: '80px',
      height: '80px',
    },
    completed: {
      options: { path: 'assets/lottiefiles/completed.json', loop: false },
      width: '250px',
      height: '250px',
    },
    warning: {
      options: { path: 'assets/lottiefiles/warning-map.json', loop: false },
      width: '150px',
      height: '150px',
    },
  };


  menus = [
    {
      title: 'สแกนเข้า',
      logo: 'assets/images/check-inout/in.svg',
      type: 'I'
    },    
    {
      title: 'สแกนเออก',
      logo: 'assets/images/check-inout/out.svg',
      type: 'O'
    },
  ];


  constructor(private router: Router,
              private barcodeScanner: BarcodeScanner,
              private geolocation: Geolocation,
              private scanApi : ScanCheckInoutService,
              private storage : StorageService
    ) {}

  async ngOnInit() {
    // try {
    //   const status: QRScannerStatus = await this.qrScanner.prepare();
    //   if (status.authorized) {
    //     const scanSub = this.qrScanner.scan().subscribe((text: string) => {
    //       this.qrScanner.hide();
    //       scanSub.unsubscribe();
    //     });
    //   }
    // } catch (error) {
    //   console.log(error);
    // }

    // setTimeout(() => {
    //   this.status = 'COMPLETED';
    // }, 2500);
    this.key_manual =  await this.storage.get('SCAN_CHECKIN_KEY_MANUAL');
    this.key_manual_title = (this.key_manual==true)?'Key':'Scan';
    //alert(this.key_manual_type)

  }

  async completedCountdown(event: any) {
    if (event.action === 'done') {
      this.router.navigate(['/home']);
    }
  }


  async getMyLocation(): Promise<DataLocation> {
    return new Promise(async (resolve, reject) => {
      try {
        const resp = await this.geolocation.getCurrentPosition();
        resolve({
          title: 'My Location',
          latitude: resp.coords.latitude,
          longitude: resp.coords.longitude,
          icon: { url: 'assets/images/check-inout/my-marker.svg', scaledSize: new google.maps.Size(52, 52) },
        });
      } catch (error) {
        console.log(error);
        reject({ name: 'MY_LOCATION', message: 'NOT_FOUND' });
      }
    });
  }


  async checkInOut(type:string){
    //this.key_manual  = false;
    this.qrcode_text = '';

    if(this.key_manual==true){
      this.key_manual_type = type;
      return;
    }


    let latitude  = '';
    let longitude = '';    

    try {
      this.myLocation = await this.getMyLocation();
      latitude  = this.myLocation.latitude.toString();
      longitude = this.myLocation.longitude.toString();      
    } catch (error) {
      latitude  = 'XX';
      longitude = 'XXX';
    }
    
    console.log(type)
    console.log(latitude+' '+longitude)
    //alert(latitude+' '+longitude)

    try {

      const resScanner = await this.barcodeScanner.scan();

   //   const res = await this.scanApi.postCheckInOut(resScanner.text, this.myLocation.latitude.toString(), this.myLocation.longitude.toString(),  type);
      const res = await this.scanApi.postCheckInOut(resScanner.text, latitude, longitude, type);

      this.result = {
        type         : type,
        title        : (type=='I')?'ลงทะเบียนเข้าเรียบร้อย' : 'ลงทะเบียนออกเรียบร้อย',
        ship_no      : res.data.shop.id,
        ship_name    : res.data.shop.name,
        counter_id   : res.data.counter.id,
        counter_name : res.data.counter.name,
        time_stamp   : res.data.time_stamp
      }

      setTimeout(() => {
        this.status = 'COMPLETED';
      }, 200);

      /*
      const status: QRScannerStatus = await this.qrScanner.prepare();
      if (status.authorized) {
        const scanSub = this.qrScanner.scan().subscribe(async (text: string) => {
          this.qrScanner.hide();
          scanSub.unsubscribe();

          const res = await this.scanApi.postCheckInOut(text, this.myLocation.latitude.toString(), this.myLocation.longitude.toString(),  type);

          this.result = {
            type         : type,
            title        : (type=='I')?'ลงทะเบียนเข้าเรียบร้อย' : 'ลงทะเบียนออกเรียบร้อย',
            ship_no      : res.data.shop.id,
            ship_name    : res.data.shop.name,
            counter_id   : res.data.counter.id,
            counter_name : res.data.counter.name,
            time_stamp   : res.data.time_stamp
          }

          setTimeout(() => {
            this.status = 'COMPLETED';
          }, 200);


        });
      }
        */
    } catch (error) {
      console.log(error);
     // alert(error)
      this.key_manual_type = type;
      this.key_manual = true;
    }
    /*
    try {
      const res = await  this.scanApi.postCheckInOut( 'QKZJTLW67T', this.myLocation.latitude.toString(), this.myLocation.longitude.toString(),  type);

      console.log('res',res)
      this.result = {
        type         : type,
        title        : (type=='I')?'ลงทะเบียนเข้าเรียบร้อย' : 'ลงทะเบียนออกเรียบร้อย',
        ship_no      : res.data.shop.id,
        ship_name    : res.data.shop.name,
        counter_id   : res.data.counter.id,
        counter_name : res.data.counter.name,
        time_stamp   : res.data.time_stamp
      }

      setTimeout(() => {
        this.status = 'COMPLETED';
      }, 1000);

    } catch (error) {
      console.log(error);
    } */
  }


  async checkInOutManual(type:string){
   // alert(type+ ' '+ this.qrcode_text.toUpperCase());

    if(this.qrcode_text == ''){
     //  alert( this.qrcode_text.toUpperCase() );
       return;
    }


    try {

      let latitude  = 'XX'; 
      let longitude = 'XXX';
      const res = await this.scanApi.postCheckInOut(this.qrcode_text.toUpperCase(), latitude, longitude, type);

      this.result = {
        type         : type,
        title        : (type=='I')?'ลงทะเบียนเข้าเรียบร้อย' : 'ลงทะเบียนออกเรียบร้อย',
        ship_no      : res.data.shop.id,
        ship_name    : res.data.shop.name,
        counter_id   : res.data.counter.id,
        counter_name : res.data.counter.name,
        time_stamp   : res.data.time_stamp
      }

      setTimeout(() => {
        this.status = 'COMPLETED';
      }, 200);

    } catch (error) {
      console.log(error);
      alert(error.error.message)
    }


  }


  async updateScanModeConfig(){
    this.key_manual_title = (this.key_manual===true)?'Key':'Scan';
    await this.storage.set('SCAN_CHECKIN_KEY_MANUAL', this.key_manual);
  }


}


