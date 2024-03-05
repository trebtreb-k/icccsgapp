import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertController, Platform } from '@ionic/angular';
import { StorageService } from './../../services/storage/storage.service';
import { FingerprintAIO } from '@ionic-native/fingerprint-aio/ngx';

@Component({
  selector: 'app-pincode',
  templateUrl: './pincode.page.html',
  styleUrls: ['./pincode.page.scss'],
})
export class PincodePage implements OnInit {
  pincode = [];
  targetPage: string
  current_pincode:string = null
  invalidPincode:boolean = false
  securityVerify: string

  constructor(private router : Router,
              private activateRoute: ActivatedRoute,
              private alertCtrl: AlertController,
              private storage: StorageService,
              private faio: FingerprintAIO) { 
    
    this.targetPage =this.activateRoute.snapshot.paramMap.get('targetpage');
    console.log('targetPage',this.targetPage);  
    this.getPincode();

    
  }

  ngOnInit() {
  }

  async getPincode(){
     let pincode_info = await this.storage.get('USER_PINCODE');
     if(!pincode_info){
        this.router.navigate(['setting/setting-pincode'])
     }else{
        this.current_pincode = pincode_info;

        if(pincode_info==null){
           this.router.navigate(['setting/setting-pincode'])
           return;
        }else{
           this.securityVerify = await this.storage.get('SECURITY_VERIFY');
           if(this.securityVerify == 'FINGER'){
              this.fingerPrint()
           }
        }   
     }

  }

  OpenPage(page){ 
    this.router.navigate([page], {replaceUrl:true});
    /*   
    if(page=="MYINCOME"){
      this.router.navigate(['myincome'], {replaceUrl:true});
    }else if(page=="SETTING"){
      this.router.navigate(['setting'], {replaceUrl:true});
    }else if(page=="CHECKIN"){
      this.router.navigate(['checkin'], {replaceUrl:true});
    }else if(page=="SIGNUP_SETTING"){
      this.router.navigate(['signup-setting'], {replaceUrl:true});
    }
    */
  }




  inputPincode(pin){
    let len = this.pincode.length;

    if(len<6){
      this.invalidPincode = false
      this.pincode.push(pin);
      console.log(this.pincode)
    }

    len = this.pincode.length;
    if(len==6){
      this.validatePincode();
    }else{
     // pincode
    }



  }

  deletePincode(){
    let len = this.pincode.length;
    if(len > 0){
      var newArr = this.pincode.slice(0,-1);
      this.pincode = newArr;
    }

    len = this.pincode.length;
    if(len<6){
      this.invalidPincode = false
    }

  }

  async validatePincode(){
    var vPincode = this.pincode[0]+this.pincode[1]+this.pincode[2]+this.pincode[3]+this.pincode[4]+this.pincode[5];
   
    let current_pincode = await this.storage.get('USER_PINCODE');

    console.log('current_pincode', current_pincode)

    if(vPincode ==  current_pincode){
       console.log(this.targetPage)
       await this.storage.set('SECURITY_VERIFY','PIN');
       this.OpenPage(this.targetPage);
    }else{
      this.invalidPincode = true
    }
  }

    
  async presentAlert(header, message) {
    const alert = await this.alertCtrl.create({
      header: header,
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }

  

  async fingerPrint(){    
    try {
      let result = await this.faio.show({ disableBackup: true });
      await this.storage.set('SECURITY_VERIFY', 'FINGER');
      this.OpenPage(this.targetPage);

    } catch (error) {
        if( error.message.indexOf('SDK') > 0){
          alert('Mobile is not support'+ error.message)
        }else if(error.message=='BIOMETRIC_DISMISSED'){
              console.log('click cancel')
        }else{
              alert('Error : '+error.message)
        }    
    }
   
    /*
    alert('start finger')
    this.faio.show({
      disableBackup: true
    })
    .then((result: any) => {
      alert('after finger')
      console.log(result)    
      alert(result)
      //this.presentAlert('success','before set')
      this.storage.set('SECURITY_VERIFY', 'FINGER');
      //this.presentAlert('success','after set')
      this.OpenPage(this.targetPage);
    })
    .catch((error: any) => {
    ///   this.presentAlert('error','error')      
      
       if( error.message.indexOf('SDK') > 0){
            alert('Mobile is not support'+ error.message)
       }else if(error.message=='BIOMETRIC_DISMISSED'){
            console.log('click cancel')
           //  alert('cancel')
       }else{
            alert('Error : '+error.message)
       }
       
       console.log(error)
    });
    */
    
  }
  


}
