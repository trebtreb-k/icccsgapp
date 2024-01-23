import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { ST_ROOT } from './../api.root';

@Injectable({
  providedIn: 'root',
})
export class GuestCustomerService {
  constructor(private http: HttpClient) {}

  async getCustomerAll(): Promise<any> {
    const url = `${ST_ROOT.customer}/salestools/guest_customers/all`;
    return this.http.get(url).toPromise();
  }

  async getCustomerByEmp(empId: string): Promise<any> {
    const url = `${ST_ROOT.customer}/salestools/guest_customers/getCustomer/${empId}`;
    return this.http.get(url).toPromise();
  }

  async getCustomerPurchaseByEmp(empId: string): Promise<any> {
    const url = `${ST_ROOT.customer}/salestools/guest_customers/GetCustomerPurchase`;
    return this.http.post(url, { csgid: empId }).toPromise();
  }

  async createCustomer(body: any): Promise<any> {
    const url = `${ST_ROOT.customer}/salestools/guest_customers/create`;
    return this.http.post(url, body).toPromise();
  }

  async deleteCustomer(cutomerId: string): Promise<any> {
    const url = `${ST_ROOT.customer}/salestools/guest_customers/delete/${cutomerId}`;
    return this.http.delete(url).toPromise();
  }

  async updateRatingCustomer(body: any): Promise<any> {
    const url = `${ST_ROOT.customer}/salestools/guest_customers/updateRatingCustomer`;
    return this.http.patch(url, body).toPromise();
  }

  async getTransHeader(customerId: string, hisherId: string, date: string, row: number): Promise<any> {
    const param = `customer_id=${customerId}&member_id=${hisherId}&last_date=${date}&r_end=${row}`;

    const url = `${ST_ROOT.customer}/salestools/transactions/header/?${param}`;
    return this.http.get(url).toPromise();
  }

  async getTransDetail(params: any): Promise<any> {
    const param1 = `member_id=${params.hh_id}&docno_id=${params.docno}&transdate=${params.transdate}`;
    const param2 = `&store_id=${params.store_id}&branch_id=${params.branch_id}&counter_id=${params.counter_id}&cust_id=${params.cust_id}`;

    const url = `${ST_ROOT.customer}/salestools/transactions/detail/?${param1}${param2}`;
    return this.http.get(url).toPromise();
  }

  async updateCustomer(body: any): Promise<any> {
    const url = `${ST_ROOT.customer}/salestools/guest_customers/update`;
    return this.http.patch(url, body).toPromise();
  }

}


