import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ST_ROOT } from './../api.root';
import { StorageService } from './../../storage/storage.service';


@Injectable({
  providedIn: 'root'
})
export class CheckInoutService {

  constructor(private http: HttpClient, private storage: StorageService) {}

  async getLocationNearMe(lat: string, lng: string): Promise<any> {
    const token = await this.storage.get('USER_TOKEN');
    const url = `${ST_ROOT.checkin }/salestools/checkin/locationnearme?lat=${lat}&lng=${lng}`;
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', `Bearer ${token}`);

    return this.http.get(url, { headers }).toPromise();
  }


  async postCheckInOut(storeid: string, branchid: string, counterid: string, custid: string,
            lat: string, lng: string, type: string ): Promise<any> {
    const body = { storeid, branchid, counterid, custid, lat, lng, type }
    const token = await this.storage.get('USER_TOKEN');
    const url = `${ST_ROOT.checkin }/salestools/checkin/checkinout`;
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', `Bearer ${token}`);

    return this.http.post(url,  body, { headers }).toPromise();
  }


  async getCheckInOutToday(): Promise<any> {
    const token = await this.storage.get('USER_TOKEN');
    const url = `${ST_ROOT.checkin }/salestools/checkin/checkinout_today`;
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', `Bearer ${token}`);

    return this.http.get(url, { headers }).toPromise();
  }



  async getCheckInOutDetail(trandate:string): Promise<any> {
    const token = await this.storage.get('USER_TOKEN');
    
    const url = `${ST_ROOT.checkin }/salestools/checkin/checkinout_detail?monthyear=${trandate}`;
    let headers = new HttpHeaders();

    
    headers = headers.set('Authorization', `Bearer ${token}`);

    return this.http.get(url, { headers }).toPromise();
  }


  async getRegisterQrms(trandate:string): Promise<any> {
    const token = await this.storage.get('USER_TOKEN');
    
    const url = `${ST_ROOT.checkin }/salestools/checkin/register_qrms?monthyear=${trandate}`;
    let headers = new HttpHeaders();

    
    headers = headers.set('Authorization', `Bearer ${token}`);

    return this.http.get(url, { headers }).toPromise();
  }

}
