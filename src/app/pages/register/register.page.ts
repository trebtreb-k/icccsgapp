import { API_BODY_CHECKEMPLOYEE, API_BODY_REGISTER } from './../../services/authen/authen.model';
import { API_CHECK_OTP, API_SEND_OTP, OtpService } from './../../services/api/otp/otp.service';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import { AlertService } from './../../services/utils/alert/alert.service';
import { AuthenService } from './../../services/authen/authen.service';
import { LoadingService } from './../../services/utils/loading/loading.service';

type StepForm = 'FORM_VERIFY_MEMBER' | 'FORM_VERIFY_OTP' | 'FORM_NEW_MEMBER' | undefined;

interface MobileData {
  text: string | null | undefined;
  value: string | null | undefined;
}

interface EmpInfo {
  emp_id: string | null | undefined;
  name: string | null | undefined;
  id_card: string | null | undefined;
  mobile_phone: string | null | undefined;
}
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  step: StepForm = 'FORM_VERIFY_MEMBER';

  formVerifyMember: FormGroup = this.formBuild.group({
    emp_id: [null, Validators.compose([Validators.required, Validators.minLength(5)])],
    id_card: [null], //[null, Validators.compose([Validators.required, Validators.minLength(13)])],
    mobile_phone: [null, Validators.compose([Validators.required, Validators.minLength(10)])],
  });
  
  formVerifyOtp: FormGroup = this.formBuild.group({
    otp: [null, Validators.compose([Validators.required])],
  });

  formNewMember: FormGroup = this.formBuild.group(
    {
      password: [null, Validators.compose([Validators.required, Validators.minLength(6)])],
      confirmPassword: [null, Validators.compose([Validators.required, Validators.minLength(6)])],
      email: [null, Validators.compose([RegisterPage.emailValidator])],
    },
    {
      validator: RegisterPage.formPasswordMatch,
    }
  );

  empInfo: EmpInfo;
  mobile: MobileData;
  ref: string | null | undefined;

  constructor(
    private formBuild: FormBuilder,
    private otp: OtpService,
    private alert: AlertService,
    private loading: LoadingService,
    private authen: AuthenService
  ) {}

  static formPasswordMatch(control: AbstractControl): ValidationErrors | null {
    return control.get('password').value !== control.get('confirmPassword').value ? { passwordNoMatch: true } : null;
  }

  static emailValidator(formControl: FormControl) {
    const emailRegxp: any = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return emailRegxp.test(formControl.value) || !formControl.value ? null : { invalidEmail: true };
  }

  ngOnInit() {}

  // * :: ------------------------------- :: * STEP : 1 : VERIFY MEMBER
  async submitVerifyMember(): Promise<void> {
    const { emp_id, id_card, mobile_phone } = this.formVerifyMember.value;

    try {
      await this.loading.present();

      const bodyCheckEmployee: API_BODY_CHECKEMPLOYEE = { emp_id, id_card, mobile_phone };
      
     // const fetchCheck = await this.authen.checkEmployee(bodyCheckEmployee);
      let fetchCheck;
      if(id_card!=='' && id_card!==null){
          fetchCheck = await this.authen.checkEmployee(bodyCheckEmployee);
      }else{
          fetchCheck = await this.authen.checkNotEmployee(bodyCheckEmployee);
      }


      const bodySendOTP: API_SEND_OTP = { mobile_phone, type: 'CSG' };
      const fetchSendOtp = await this.otp.sendOTP(bodySendOTP);

      const { name } = fetchCheck.data;
      const { ref } = fetchSendOtp.data;

      const txtMobile = (m: string) => {
        const sub = m.substr(2, 4);
        return m.replace(sub, 'x xxx ');
      };

      this.empInfo = { emp_id, name, id_card, mobile_phone };
      this.mobile = { text: txtMobile(mobile_phone), value: mobile_phone };
      this.ref = ref;

      this.step = 'FORM_VERIFY_OTP';
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

      const body: API_CHECK_OTP = { mobile_phone: this.empInfo.mobile_phone, otp, ref: this.ref };
      await this.otp.checkOTP(body);

      this.step = 'FORM_NEW_MEMBER';
    } catch (error) {
      this.alert.basic(error?.error?.error_message || error?.error?.message || '400');
    } finally {
      await this.loading.dismiss();
    }
  }

  // * :: ------------------------------- :: * STEP : 3 : NEW MEMBER
  async submitNewMember(): Promise<void> {
    const { password, email } = this.formNewMember.value;
    const { emp_id, id_card, mobile_phone, name } = this.empInfo;

    try {
      await this.loading.present();

      const body: API_BODY_REGISTER = {
        username: mobile_phone,
        password,
        emp_id,
        name,
        mobile_phone,
        email,
        id_card,
      };

      if(id_card!=='' && id_card!==null){
         await this.authen.register(body);
      }else{
         await this.authen.register_notemp(body);
      }
      await this.authen.login({ username: emp_id, password });
    } catch (error) {
      this.alert.basic(error?.error?.error_message || error?.error?.message || '400');
    } finally {
      await this.loading.dismiss();
    }
  }
}
