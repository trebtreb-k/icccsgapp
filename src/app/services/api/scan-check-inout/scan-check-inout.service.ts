import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ST_ROOT } from './../api.root';
import { StorageService } from './../../storage/storage.service';


@Injectable({
  providedIn: 'root'
})
export class ScanCheckInoutService {

  constructor(private http: HttpClient, private storage: StorageService) {}

  async postCheckInOut(qrcode: string, lat: string, lng: string, type: string ): Promise<any> {
    const body = { qrcode, lat, lng, type }
    const token = await this.storage.get('USER_TOKEN');
    const url = `${ST_ROOT.checkin }/salestools/checkin/scan_checkinout`;
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', `Bearer ${token}`);

    return this.http.post(url,  body, { headers }).toPromise();
  }

}
