import { API_BODY_CHECKMOBILE, API_BODY_RESETPASSWORD } from './../../services/authen/authen.model';
import { API_CHECK_OTP, API_SEND_OTP, OtpService } from './../../services/api/otp/otp.service';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import { AlertController } from '@ionic/angular';
import { AlertService } from './../../services/utils/alert/alert.service';
import { AuthenService } from './../../services/authen/authen.service';
import { LoadingService } from './../../services/utils/loading/loading.service';
import { Router } from '@angular/router';

type StepForm = 'FORM_VERIFY_MOBILE' | 'FORM_VERIFY_OTP' | 'FORM_NEW_PASSWORD' | undefined;

interface MobileData {
  text: string | null | undefined;
  value: string | null | undefined;
}

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {
  step: StepForm = 'FORM_VERIFY_MOBILE';

  formVerifyMobile: FormGroup = this.formBuild.group({
    mobile_phone: [null, Validators.compose([Validators.required, Validators.minLength(10)])],
  });
  formVerifyOtp: FormGroup = this.formBuild.group({
    otp: [null, Validators.compose([Validators.required])],
  });
  formNewPassword: FormGroup = this.formBuild.group(
    {
      password: [null, Validators.compose([Validators.required, Validators.minLength(6)])],
      confirmPassword: [null, Validators.compose([Validators.required, Validators.minLength(6)])],
    },
    {
      validator: ForgotPasswordPage.formPasswordMatch,
    }
  );

  mobile: MobileData;
  token: string | null | undefined;
  ref: string | null | undefined;

  constructor(
    private formBuild: FormBuilder,
    private otp: OtpService,
    private alert: AlertService,
    private loading: LoadingService,
    private authen: AuthenService,
    private alertController: AlertController,
    private router: Router
  ) {}

  static formPasswordMatch(control: AbstractControl): ValidationErrors | null {
    return control.get('password').value !== control.get('confirmPassword').value ? { passwordNoMatch: true } : null;
  }

  ngOnInit() {}

  // * :: ------------------------------- :: * STEP : 1 : VERIFY MOBILE
  async submitVerifyMobile(): Promise<void> {
    const { mobile_phone } = this.formVerifyMobile.value;

    try {
      await this.loading.present();

      const bodyCheck: API_BODY_CHECKMOBILE = { mobile_phone };
      const fetchCheck = await this.authen.checkMobile(bodyCheck);

      const bodySendOtp: API_SEND_OTP = { mobile_phone, type: 'CSG' };
      const fetchSendOtp = await this.otp.sendOTP(bodySendOtp);

      const { token } = fetchCheck.data;
      const { ref } = fetchSendOtp.data;

      const txtMobile = (m: string) => {
        const sub = m.substr(2, 4);
        return m.replace(sub, 'x xxx ');
      };

      this.mobile = { text: txtMobile(mobile_phone), value: mobile_phone };
      this.token = token;
      this.ref = ref;

      this.step = 'FORM_VERIFY_OTP';
    } catch (error) {
      this.alert.basic(error?.error?.message || error?.error?.error_message || '400');
    } finally {
      await this.loading.dismiss();
    }
  }

  // * :: ------------------------------- :: * STEP : 2 : VERIFY OTP
  async submitVerifyOtp(): Promise<void> {
    const { otp } = this.formVerifyOtp.value;

    try {
      await this.loading.present();

      const body: API_CHECK_OTP = { mobile_phone: this.mobile.value, otp, ref: this.ref };
      await this.otp.checkOTP(body);

      this.step = 'FORM_NEW_PASSWORD';
    } catch (error) {
      this.alert.basic(error?.error?.message || error?.error?.error_message || '400');
    } finally {
      await this.loading.dismiss();
    }
  }

  // * :: ------------------------------- :: * STEP : 3 : NEW PASSWORD
  async submitNewPassword(): Promise<void> {
    const { password } = this.formNewPassword.value;

    try {
      await this.loading.present();

      const body: API_BODY_RESETPASSWORD = { password, token: this.token };
      await this.authen.resetPassword(body);

      await this.loading.dismiss();

      const alert = await this.alertController.create({
        cssClass: 'alert__box--basic',
        header: 'Update Success',
        message: 'เปลี่ยนรหัสผ่านเรียบร้อยแล้ว! กลับสู่หน้าลงชื่อเข้าใช้งาน',
        buttons: [
          {
            text: 'ตกลง',
            handler: () => {
              this.router.navigate(['login']);
            },
          },
        ],
      });

      await alert.present();

      const dismiss = await alert.onDidDismiss();
      if (dismiss.role === 'backdrop') {
        this.router.navigate(['login']);
      }
    } catch (error) {
      this.alert.basic(error?.error?.message || error?.error?.error_message || '400');
      await this.loading.dismiss();
    }
  }
}
