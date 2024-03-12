import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { ST_ROOT } from './../api.root';
import { StorageService } from './../../storage/storage.service';
import { moment } from './../../utils/moment/moment.service';

@Injectable({
  providedIn: 'root',
})
export class IncomeService {
  constructor(private http: HttpClient, private storage: StorageService) {}

  async getIncomeMonth(period: string): Promise<any> {
    const token = await this.storage.get('USER_TOKEN');
    const url = `${ST_ROOT.income}/salestools/income/incomemonth?periodpay=${period}`;
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', `Bearer ${token}`);

    return this.http.get(url, { headers }).toPromise();
  }

  async getIncomeDaily(period: string): Promise<any> {
    const token = await this.storage.get('USER_TOKEN');
    const url = `${ST_ROOT.income}/salestools/income/incomedaily?periodpay=${period}`;
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', `Bearer ${token}`);

    return this.http.get(url, { headers }).toPromise();
  }

  async getSummary(): Promise<any> {
    const token = await this.storage.get('USER_TOKEN');
    //const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbXBfaWQiOiI5NTQ0OCIsImlhdCI6MTY1MDM1NzU3NH0.Uy-60xvbg-yhc_qCka8HB3zbq4-KFDSJi4Gx0DVef8c';

    const url = `${ST_ROOT.income}/salestools/income/incomesummary`;
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', `Bearer ${token}`);

    return this.http.get(url, { headers }).toPromise();
  }

  async getIncomeDetail(period: string): Promise<any> {
    const token = await this.storage.get('USER_TOKEN');
    //const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbXBfaWQiOiI5NTQ0OCIsImlhdCI6MTY1MDM1NzU3NH0.Uy-60xvbg-yhc_qCka8HB3zbq4-KFDSJi4Gx0DVef8c';

    const url = `${ST_ROOT.income}/salestools/income/incomedetail?paydate=${period}`;
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', `Bearer ${token}`);
    console.log(url,headers);

    return this.http.get(url, { headers }).toPromise();
  }

  async requestSlip(period: string): Promise<any> {
    const token = await this.storage.get('USER_TOKEN');
    const url = `${ST_ROOT.income}/salestools/income/payslip/payslipdocument/${period}?output=pdf&sendmail=N`;
    //const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbXBfaWQiOiI5NTQ0OCIsImlhdCI6MTY1MDM1NzU3NH0.Uy-60xvbg-yhc_qCka8HB3zbq4-KFDSJi4Gx0DVef8c';
    //const url = `https://webapidev.icc.co.th:7116/salestools/payslip/payslipdocument/${period}?output=pdf&sendmail=N`;
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', `Bearer ${token}`);

    console.log(url);

    return this.http.get(url, { headers }).toPromise();
  }

  async getDirectToCustomer(period: string): Promise<any> {
    let begin_date = moment(period,'MMYYYY').startOf('month').format('DD/MM/YYYY');
    let end_date   = moment(period,'MMYYYY').endOf('month').format('DD/MM/YYYY');

    const token = await this.storage.get('USER_TOKEN');
    const url = `${ST_ROOT.income}/salestools/income/direct_to_customer?begin_date=${begin_date}&end_date=${end_date}`;
  // console.log('url=>', url)
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', `Bearer ${token}`);

    return this.http.get(url, { headers }).toPromise();
  }
}
