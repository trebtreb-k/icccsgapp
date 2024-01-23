import { HttpClient, HttpHeaders } from '@angular/common/http';

import { ST_ROOT } from './../api.root';
import { Injectable } from '@angular/core';
import { StorageService } from './../../storage/storage.service';



 
let PDPA_SYSTEM_ID = 'HR';
let PDPA_SUB_SYSTEM_ID = 'ALL';

@Injectable({
  providedIn: 'root'
})
export class PdpaService {

 
  constructor(private http: HttpClient, 
              private storage: StorageService) {  
      this.getConfig();
  }

  async getConfig(): Promise<any> {
    const config = await this.storage.get('CONFIG');
    PDPA_SYSTEM_ID = config.pdpa.system_id;
    PDPA_SUB_SYSTEM_ID = config.pdpa.sub_system_id;
  }

  getSystemId(){
    return PDPA_SYSTEM_ID;
  }

  getSubSystemId(){
    return PDPA_SUB_SYSTEM_ID;
  }

  /************ announcement *************/


  async privacyWaitAgree(): Promise<any> {
    const token = await this.storage.get('USER_TOKEN');
    const user  = await this.storage.get('USER_INFO');
    await this.getConfig();
    const empId = user.emp_id;
    const url = `${ST_ROOT.pdpa}/pdpa/privacy_consent/getprivacyconsentlist?system_id=${PDPA_SYSTEM_ID}&sub_system_id=${PDPA_SUB_SYSTEM_ID}&user_id=${empId}&exists_flag=N`;

    console.log(url)

    let headers = new HttpHeaders();
    headers = headers.set('Authorization', `Bearer ${token}`);

    return this.http.get(url, { headers }).toPromise();
  }
  
  // updateAgreeConsent(datas){
  //   const param = datas
  //   const url = `${ST_ROOT.pdpa}/pdpa/privacy_consent/updateprivacyconsent`

  //   let headers = new HttpHeaders();

  //   return this.http.post(url, param, this.globalfunc.getHeaderOption())
  // }



  async updateAgreeConsent(datas): Promise<any> {
    const url = `${ST_ROOT.pdpa}/pdpa/privacy_consent/updateprivacyconsent`;
    return this.http.post(url, datas).toPromise();
  }



}
