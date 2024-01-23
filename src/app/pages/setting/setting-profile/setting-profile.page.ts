import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { API_RESPONSE_PROFILE } from './../../../services/authen/authen.model';
import { StorageService } from './../../../services/storage/storage.service';
import { API_CHECK_OTP, API_SEND_OTP, OtpService } from './../../../services/api/otp/otp.service';
import { LoadingService } from './../../../services/utils/loading/loading.service';
import { AlertService } from './../../../services/utils/alert/alert.service';
import { AuthenService } from './../../../services/authen/authen.service';

@Component({
  selector: 'app-setting-profile',
  templateUrl: './setting-profile.page.html',
  styleUrls: ['./setting-profile.page.scss'],
})
export class SettingProfilePage implements OnInit {

  // formProfile: FormGroup = this.formBuild.group({
  //   emp_id: [null, Validators.compose([Validators.required])],
  //   id_card: [null, Validators.compose([Validators.required, Validators.minLength(13)])],
  //   mobile_phone: [null, Validators.compose([Validators.required, Validators.minLength(10)])],
  // });

  formVerifyOtp: FormGroup = this.formBuild.group({
    otp: [null, Validators.compose([Validators.required, Validators.minLength(6)])],
  });

  user: API_RESPONSE_PROFILE;
  stepName : string = 'VIEW';
  userType : string = '';

  new_mobile = {
    mobile_phone : '',
    ref_code     : ''
  }


  constructor(
       private alertController : AlertController,
       private alert: AlertService,
       private storage: StorageService,
       private formBuild: FormBuilder,
       private otp: OtpService,
       private loading: LoadingService,
       private authenApi: AuthenService,
    ) { }

  async ngOnInit() {
    await this.getUserInfo();  
  }

  async ionViewDidEnter() {
    await this.getUserInfo();  
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
    this.userType = this.user.type;

    console.log('this.user',this.user)
  }


  async alertEditValue(dataField, dataType, dataTitle, dataValue){

    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: dataTitle,
      message: 'ข้อมูลปัจจุบัน '+dataValue,
      inputs: [
        {
          name: 'newValue',
          type: dataType,
          value: (dataField=='email')?dataValue:'',
          placeholder : dataTitle+'ใหม่',
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Ok',
          handler: (data) => {
            console.log('Confirm Okay');
            console.log(dataField+' '+data.newValue)


            if(dataField=='email'){
              if(!data.newValue){
                this.alert.basic('กรุณาใส่อีเมล์');
                return;
              }
              this.updateNewEmail(data.newValue);

            }else if (dataField=='mobile_phone'){
            //  this.stepName='FORM_VERIFY_OTP';
              if(!data.newValue){
                this.alert.basic('กรุณาใส่เบอร์มือถือ');
                return;
              }
              if(data.newValue==this.user.mobile_phone){
                this.alert.basic('เบอร์มือถือซ้ำกับเบอร์เดิม');
                return;
              }
              this.new_mobile.mobile_phone = data.newValue;

              if(this.user.type==='EMPLOYEE'){
                 this.stepVerifyOtp();
              }else{
                 this.updateMobileNotEmp(this.user.mobile_phone, this.new_mobile.mobile_phone);
              }


              
              //  this.user.mobile_phone = data.newValue;
            }

          }
        }
      ]
    });

    await alert.present();
  }


  async updateMobileNotEmp(oldMobile, newMobile): Promise<void> {
    try {
      await this.loading.present();     
      await this.authenApi.checkUpdateMobileNotEmp(newMobile);
      await this.authenApi.updateMobileNotEmp(oldMobile, newMobile);
      this.user.mobile_phone = newMobile;
      this.storage.set('USER_INFO',this.user);
      this.stepName = 'VIEW';     
     
    } catch (error) {
      this.alert.basic(error?.error?.error_message || error?.error?.message || '400');
    } finally {
      await this.loading.dismiss();
    }  
  }

  async updateNewEmail(newEmail:string): Promise<void> {
    try {
      await this.loading.present();
      if(this.user.type=='EMPLOYEE'){
        await this.authenApi.updateEmail(this.user.mobile_phone, newEmail);
      }else{
        await this.authenApi.updateEmailNotEmp(this.user.mobile_phone, newEmail);
      }
      
      this.user.email = newEmail
      this.storage.set('USER_INFO',this.user);

    } catch (error) {
      this.alert.basic(error?.error?.error_message || error?.error?.message || '400');
    } finally {
      await this.loading.dismiss();
    }
  }

  async stepVerifyOtp(): Promise<void> {
    try {
      await this.loading.present();

      const bodySendOTP: API_SEND_OTP = { mobile_phone : this.new_mobile.mobile_phone, type: 'CSG' };
      const fetchSendOtp = await this.otp.sendOTP(bodySendOTP);

      const { ref } = fetchSendOtp.data;

      const txtMobile = (m: string) => {
        const sub = m.substr(2, 4);
        return m.replace(sub, 'x xxx ');
      };


     // this.mobile = { text: txtMobile(mobile_phone), value: mobile_phone };
      this.new_mobile.ref_code = ref;

      this.stepName = 'FORM_VERIFY_OTP';
    } catch (error) {
      this.alert.basic(error?.error?.error_message || error?.error?.message || '400');
    } finally {
      await this.loading.dismiss();
    }
  }


    // * :: ------------------------------- :: * STEP : 2 : VERIFY OTP
    async submitVerifyOtp(): Promise<void> {
      const { otp } = this.formVerifyOtp.value;

      try {
        await this.loading.present();

        const body: API_CHECK_OTP = { mobile_phone: this.new_mobile.mobile_phone, otp, ref: this.new_mobile.ref_code };
        await this.otp.checkOTP(body);

        await this.authenApi.updateMobile(this.user.mobile_phone, this.new_mobile.mobile_phone);
        
        this.user.mobile_phone = this.new_mobile.mobile_phone;
        this.storage.set('USER_INFO',this.user);
        this.stepName = 'VIEW';

      } catch (error) {
        let error_message = error?.error?.error_message || error?.error?.message || 'Update Error';

        if(error_message.indexOf('ORA-00001') > 0){
          error_message = 'หมายเลขโทรศัพท์นี้ถูกใช้ลงทะเบียนแล้ว';
        }

        this.alert.basic(error_message);
        this.stepName = 'VIEW';
       // this.alert.basic(error?.error?.error_message || error?.error?.message || 'Update Error');
      } finally {
        await this.loading.dismiss();
      }
    }

}
