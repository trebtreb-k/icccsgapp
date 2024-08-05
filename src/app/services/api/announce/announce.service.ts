
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { ST_ROOT } from './../api.root';
import { StorageService } from './../../storage/storage.service';


@Injectable({
  providedIn: 'root',
})
export class AnnounceService {


  constructor(private http: HttpClient, private storage: StorageService) {}

  async announce(): Promise<any> {
    const url = `${ST_ROOT.announce}/salestools/announce/list`;
 
    const token = await this.storage.get('USER_TOKEN');
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', `Bearer ${token}`);
    console.log(headers);
    
    return this.http.get(url, { headers }).toPromise();
    
    //return this.http.get(url).toPromise();
  }


  async announcePopupList(): Promise<any> {
    const url = `${ST_ROOT.announce}/salestools/announce/popup/list`;
    console.log(url)

    const token = await this.storage.get('USER_TOKEN');
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', `Bearer ${token}`);

    return this.http.get(url, { headers }).toPromise();
  }

  async addReadAnnoucementPopup(announceId :string): Promise<any> {
    const url = `${ST_ROOT.announce}/salestools/announce/popup/addReadAnnouncement`;
    const token = await this.storage.get('USER_TOKEN');
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', `Bearer ${token}`);
    let body = {
      announce_id  : announceId,
    }
    return this.http.post(url, body, { headers }).toPromise();
  }

  async annoucementPopupUncheckRead(period): Promise<any> {
    const url = `${ST_ROOT.announce}/salestools/announce/popup/uncheckread?period=${period}`
    console.log(url)

    const token = await this.storage.get('USER_TOKEN');
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', `Bearer ${token}`);

    return this.http.get(url, { headers }).toPromise();
  }

  async announceAllWaitCount(): Promise<any> {
    const url = `${ST_ROOT.announce}/salestools/announce/popup/countwaitread`
    console.log(url)

    const token = await this.storage.get('USER_TOKEN');
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', `Bearer ${token}`);

    return this.http.get(url, { headers }).toPromise();
  }

}

