import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Platform, ToastController } from '@ionic/angular';

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ST_ROOT } from './../api.root';
import { StorageService } from './../../../services/storage/storage.service';
import { UniqueDeviceID } from '@ionic-native/unique-device-id/ngx';

@Injectable({
  providedIn: 'root'
})
export class UniqueDeviceIdService {

  mobilePlatform: string;

  constructor(private http: HttpClient,
              private storage: StorageService,
              private uniqueDeviceId: UniqueDeviceID,
              private platform: Platform,
              private toastController :ToastController,
              private router: Router) {

  }

  // getPermission(){
  //   this.androidPermissions.checkPermission(
  //     this.androidPermissions.PERMISSION.READ_PHONE_STATE
  //   ).then(res => {
  //     if(res.hasPermission){

  //     }else{
  //       this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.READ_PHONE_STATE).then(res => {
  //         alert("Persmission Granted Please Restart App!");
  //       }).catch(error => {
  //         alert("Error! "+error);
  //       });
  //     }
  //   }).catch(error => {
  //     alert("Error! "+error);
  //   });
  // }

  async checkMobilePlatform() {
    if (this.platform.is('ios')) {
      this.mobilePlatform = 'ios';
    } else if (this.platform.is('android')) {
      this.mobilePlatform = 'android';
    } else {
      this.mobilePlatform = 'cordova';
    }
  }

  async checkUniqueDeviceId(): Promise <any> {

    try {
        await this.platform.ready();
        await this.checkMobilePlatform();
        const userInfo = await this.storage.get('USER_INFO');

      //  await this.updateUniqueDeviceId('112233445566', userInfo.mobile_phone, this.mobilePlatform);

       // alert(this.mobilePlatform)
       
       if (this.mobilePlatform === 'android' || this.mobilePlatform === 'ios') {


           const uuid = await this.uniqueDeviceId.get();
           
           const res = await this.updateUniqueDeviceId(uuid, userInfo.mobile_phone, this.mobilePlatform);

           if(res.result){
             return { result : true };
           }else{
             return { result : false, error_message : res.error_message};
           }

       } else {
        
           return { result : true };
       }



       /*

        if (this.mobilePlatform === 'android' || this.mobilePlatform === 'ios') {
            this.uniqueDeviceId
            .get()
            .then((uuid: any) => {
                console.log('+++++++++++ UUID = ', uuid);
                this.callUpdateUniqueDeviceId(uuid, userInfo.mobile_phone, this.mobilePlatform);
                // this.updateUniqueDeviceId(uuid, userInfo.mobile_phone, this.mobilePlatform);
            })
            .catch((error: any) => {
                console.log('++++++++++++ ', error);
                console.log('Platform = ' + this.mobilePlatform);
                alert('Error: '+error.error_message);
            });
        }
        */

    } catch (e) {
      //  await alert('e='+JSON.stringify(e))

      //  await alert(e.error.error_message);

      //  console.log('Error',e.error?.e.error?.error_message)
      //  alert('Error: '+e.error?.e.error?.error_message);
        return { result : false, error_message : e.error.error_message} //e.error?.e.error?.error_message };
    }
  }


  async callUpdateUniqueDeviceId(device_id, mobile_phone, platform) {
    try {
        await this.updateUniqueDeviceId(device_id, mobile_phone, platform);
    } catch (e) {
        console.log('Error',e.error.error_message)
        await this.storage.clear();
        alert('Error: '+e.error.error_message);
       // this.presentToast(e.error.error_message);

        this.router.navigate(['/login',{replace:true}]);
    }
  }

  async presentToast(message) {
    const toast = await this.toastController.create({
      message: message,
      duration: 500
    });
    toast.present();
  }

  /********** DEVICE **********/
  async updateUniqueDeviceId(device_id, mobile_phone, platform): Promise<any> {
    const url = `${ST_ROOT.device }/salestools/authen/unique_device_id`;
    const body = {
      device_id    : device_id,
      mobile_phone : mobile_phone,
      platform     : platform,
    }
    let headers = new HttpHeaders();
    const token = await this.storage.get('USER_TOKEN');
    headers = headers.set('Authorization', `Bearer ${token}`);
    return this.http.put(url,  body, { headers }).toPromise();
  }
  /********** DEVICE **********/


}
