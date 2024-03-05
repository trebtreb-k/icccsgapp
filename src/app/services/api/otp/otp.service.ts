import { HttpClient, HttpHeaders } from '@angular/common/http';

import { FB_ROOT } from './../api.root';
import { Injectable } from '@angular/core';

export interface API_SEND_OTP {
  mobile_phone: string | undefined;
  type?: string | null | undefined;
}

export interface API_CHECK_OTP {
  mobile_phone: string | undefined;
  ref: string | undefined;
  otp: string | null | undefined;
}

@Injectable({
  providedIn: 'root',
})
export class OtpService {
  constructor(private http: HttpClient) {}

  async sendOTP(params: API_SEND_OTP): Promise<any> {
    const { mobile_phone, type } = params;
    const vType = type || 'CSG';

    const url = `${FB_ROOT.otp}/getotp_csg`;

    console.log(url);
    console.log(params);
    console.log(vType);



    return this.http.post(url, { mobile_phone, type: vType }).toPromise();
  }

  async checkOTP(params: API_CHECK_OTP): Promise<any> {
    const { mobile_phone, ref, otp } = params;

    const url = `${FB_ROOT.otp}/checkotp`;
    console.log(url);
    console.log(params);


    return this.http.post(url, { mobile_phone, ref, otp }).toPromise();
  }
}
