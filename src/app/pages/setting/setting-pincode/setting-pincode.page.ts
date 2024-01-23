import { Component, OnInit } from '@angular/core';
import { StorageService } from './../../../services/storage/storage.service';
import { Router  } from '@angular/router';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-setting-pincode',
  templateUrl: './setting-pincode.page.html',
  styleUrls: ['./setting-pincode.page.scss'],
})
export class SettingPincodePage implements OnInit {
  newpin: number
  newpin_confirm:number

  constructor(private storage: StorageService,
              private alertCtrl: AlertController,
              private router: Router) { }

  ngOnInit() {
  }


  async presentAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Warning',
      message: '<img src="assets/images/png/warning-32.png"> กรุณากำหนดตัวเลข 6 หลัก',
      buttons: ['OK']
    });

    await alert.present();
  }

    
  async presentAlertError() {
    const alert = await this.alertCtrl.create({
      header: 'Error',
      message: '<img src="assets/images/png/error-red-32.png"> Invalid Pincode not match.',
      buttons: ['OK']
    });

    await alert.present();
  }

    
  async presentAlertSuccess() {
    const alert = await this.alertCtrl.create({
      header: 'Success',
      message: '<img src="assets/images/png/checked-green-32.png"> Update Pincode Success',
      buttons: [{ text: 'Ok', 
      handler: ()=>{
         this.router.navigate(['home', {replaceUrl:true}])
        }
      }]
    });

    await alert.present();
  }  

  checkNewPinCode(){ 
    if(!this.newpin || String(this.newpin).length<6){
      this.presentAlert();
      return false    
    }

    if(!this.newpin_confirm || String(this.newpin_confirm).length<6){
      this.presentAlert();
      return false    
    }

    return true
  }

  async saveNewPin(){    
    if(!this.checkNewPinCode()){
        return
    }

    if(this.newpin!=this.newpin_confirm){
      this.presentAlertError();
    }else{
      await this.storage.set('USER_PINCODE',this.newpin);
      this.presentAlertSuccess();
    }
  }


}
