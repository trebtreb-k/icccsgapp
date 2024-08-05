import { API_BODY_CHECKEMPLOYEE, API_BODY_CHECKMOBILE, API_BODY_REGISTER, API_BODY_RESETPASSWORD } from './authen.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { AlertService } from './../utils/alert/alert.service';
import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { LoadingService } from './../utils/loading/loading.service';
import { Router } from '@angular/router';
import { ST_ROOT, ST_USER_PICTURE} from './../api/api.root';
import { StorageService } from './../storage/storage.service';
import { UniqueDeviceIdService } from './../../services/api/unique-device-id/unique-device-id.service';


@Injectable({
  providedIn: 'root',
})
export class AuthenService {
  authenticationState = new BehaviorSubject<string>('unknown');

  constructor(
    private http: HttpClient,
    private storage: StorageService,
    private router: Router,
    private loading: LoadingService,
    private alert: AlertService,
    private uniqueDeviceIdApi : UniqueDeviceIdService,
  ) {}

  async config(): Promise<any> {  
    const url = `${ST_ROOT.authen}/salestools/authen/config`;
    let headers = new HttpHeaders();
   // headers = headers.set('Authorization', `Bearer ${token}`);
    return this.http.post(url, {}, {}).toPromise();
  }

  async verifyToken(token: string): Promise<any> { 

    

    // ทดสอบ TWC 
    // const url = `https://webapidev.icc.co.th:7111/salestools/authen/verify`;
    // ------

    const url = `${ST_ROOT.authen}/salestools/authen/verify`;
    console.log('url-----',url);
    
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', `Bearer ${token}`);
    return this.http.post(url, {}, { headers }).toPromise();
  }

  async login(param: { username: string; password: string }): Promise<any> {
    const { username, password } = param;

    try {
      await this.loading.present();

      const url = `${ST_ROOT.authen}/salestools/authen/login`;
      const request: any = await this.http.post(url, { username, password }).toPromise();
      console.log('request=---=',request);
      const { token } = request?.data;

      const verify: any = await this.verifyToken(token);
      console.log('verify=---=',verify);
      const { profile } = verify?.data;

      console.log('profile--------',profile);
      await this.storage.set('USER_TOKEN', token);

      let picture;// = ST_USER_PICTURE+'/'+ profile.emp_id+'/'+profile.emp_id+'.jpg';
      if(profile.type==='EMPLOYEE'){
          picture = ST_USER_PICTURE+'/'+ profile.emp_id+'/'+profile.emp_id+'.jpg';
      }else{
          picture ='assets/images/avatar-female.svg';
      }

      await this.storage.set('USER_INFO', {...profile, picture});
      this.authenticationState.next('authorized');

      if(profile.type==='EMPLOYEE'){
        // await this.uniqueDeviceIdApi.checkUniqueDeviceId();

        //setTimeout(() => {
       //   const info = this.storage.get('USER_TOKEN');
        //  if(info){
            this.router.navigate(['/home'], {replaceUrl:true});
        //  }
        //}, 1000);

      }else{
        this.router.navigate(['/guest-home'], {replaceUrl:true});
      }

    } catch (error) {
      console.log(error);
      const message = error?.error?.error_message || 'error!';
      this.alert.basic(message);
      this.authenticationState.next('unauthorized');
    } finally {
      await this.loading.dismiss();
    }
  }

  async logout(): Promise<void> {
    await this.storage.clear();
    this.router.navigate(['/login']);
    this.authenticationState.next('unauthorized');
  }

  async register(param: API_BODY_REGISTER): Promise<any> {
    const { email, emp_id, id_card, mobile_phone, name, password, username } = param;

    const url = `${ST_ROOT.authen}/salestools/authen/create`;
    return this.http.post(url, { email, emp_id, id_card, mobile_phone, name, password, username }).toPromise();
  }

  async register_notemp(param: API_BODY_REGISTER): Promise<any> {
    const { email, emp_id, id_card, mobile_phone, name, password, username } = param;

    const url = `${ST_ROOT.authen}/salestools/authen/create_notemp`;
    return this.http.post(url, { email, emp_id, id_card, mobile_phone, name, password, username }).toPromise();
  }

  async checkMobile(param: API_BODY_CHECKMOBILE): Promise<any> {
    const { mobile_phone } = param;

    const url = `${ST_ROOT.authen}/salestools/authen/checkmobile`;
    return this.http.post(url, { mobile_phone }).toPromise();
  }

  async resetPassword(param: API_BODY_RESETPASSWORD): Promise<any> {
    const { password, token } = param;

    const url = `${ST_ROOT.authen}/salestools/authen/password/reset`;
    return this.http.post(url, { token, password }).toPromise();
  }

  async checkEmployee(param: API_BODY_CHECKEMPLOYEE): Promise<any> {
    const { emp_id, id_card, mobile_phone } = param;

    const url = `${ST_ROOT.authen}/salestools/authen/check`;
    return this.http.post(url, { emp_id, id_card, mobile_phone }).toPromise();
  }

  
  async checkNotEmployee(param: API_BODY_CHECKEMPLOYEE): Promise<any> {
    const { emp_id, mobile_phone } = param;

    const url = `${ST_ROOT.authen}/salestools/authen/check_notemp`;
    return this.http.post(url, { emp_id, mobile_phone }).toPromise();
  }

  
  

  nextAuthenticated(value: any): void {
    this.authenticationState.next(value);
  }

  isAuthenticated(): string {
    return this.authenticationState.value;
  }

  async updateFirebaseToken(firebaseToken: string, platform :string): Promise<any> {

    const url = `${ST_ROOT.authen}/salestools/authen/firebase_token`;
    const token = await this.storage.get('USER_TOKEN');
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', `Bearer ${token}`);
    let body = {
      firebase_token : firebaseToken,
      platform       : platform
    }
    return this.http.put(url, body,  { headers }).toPromise();
  }

  async updateEmail(mobile_phone: string, email :string): Promise<any> {

    const url = `${ST_ROOT.authen}/salestools/authen/email`;
    const token = await this.storage.get('USER_TOKEN');
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', `Bearer ${token}`);
    let body = {
      mobile_phone : mobile_phone,
      email       : email
    }
    return this.http.put(url, body,  { headers }).toPromise();
  }

  
  async updateEmailNotEmp(mobile_phone: string, email :string): Promise<any> {

    const url = `${ST_ROOT.authen}/salestools/authen/email_notemp`;
    const token = await this.storage.get('USER_TOKEN');
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', `Bearer ${token}`);
    let body = {
      mobile_phone : mobile_phone,
      email       : email
    }
    return this.http.put(url, body,  { headers }).toPromise();
  }

  async updateMobile(mobile_phone: string, new_mobile_phone :string): Promise<any> {

    const url = `${ST_ROOT.authen}/salestools/authen/mobile`;
    const token = await this.storage.get('USER_TOKEN');
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', `Bearer ${token}`);
    let body = {
      mobile_phone     : mobile_phone,
      new_mobile_phone : new_mobile_phone
    }
    return this.http.put(url, body,  { headers }).toPromise();
  }

  async updateMobileNotEmp(mobile_phone: string, new_mobile_phone :string): Promise<any> {

    const url = `${ST_ROOT.authen}/salestools/authen/mobile_notemp`;
    const token = await this.storage.get('USER_TOKEN');
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', `Bearer ${token}`);
    let body = {
      mobile_phone     : mobile_phone,
      new_mobile_phone : new_mobile_phone
    }
    return this.http.put(url, body,  { headers }).toPromise();
  }

  async checkUpdateMobileNotEmp(new_mobile_phone :string): Promise<any> {

    const url = `${ST_ROOT.authen}/salestools/authen/check_update_mobile_notemp/${new_mobile_phone}`;
    const token = await this.storage.get('USER_TOKEN');
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', `Bearer ${token}`);
    let body = {}
    return this.http.get(url, { headers }).toPromise();
  }
}


