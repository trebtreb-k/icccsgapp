import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { ST_ROOT } from './../api.root';
import { StorageService } from './../../storage/storage.service';

@Injectable({
  providedIn: 'root',
})
export class GuestPlanService {
  constructor(private http: HttpClient, private storage: StorageService) {}

  async getCSGPlan(empId: string, date: any): Promise<any> {
    const url = `${ST_ROOT.csgplan}/salestools/guest_plan/${date}/${empId}`;
    return this.http.get(url).toPromise();
  }

  async getHolidayCSGPlan(period: any): Promise<any> {
    const url = `${ST_ROOT.csgplan}/salestools/guest_plan/calendar/holiday/${period}`;
    return this.http.get(url).toPromise();
  }

  async getShopCounterCSGPlan(empid: any): Promise<any> {
    const url = `${ST_ROOT.csgplan}/salestools/guest_plan/custid/counter/${empid}`;
    return this.http.get(url).toPromise();
  }

  async insertCreatePlanCSGPlan(body: any): Promise<any> {
    const url = `${ST_ROOT.csgplan}/salestools/guest_plan/createplan`;
    return this.http.post(url, body).toPromise();
  }

  async getDayPlanCSGPlan(period: any, empID: any): Promise<any> {
    const url = `${ST_ROOT.csgplan}/salestools/guest_plan/${period}/${empID}`;
    return this.http.get(url).toPromise();
  }

  async searchCustID(custID: any, empID: any): Promise<any> {
    const url = `${ST_ROOT.csgplan}/salestools/guest_plan/custid/newcsg/${empID}/${custID}`;
    return this.http.get(url).toPromise();
  }

  async getCountHoliday(period: any, empID: any): Promise<any> {
    const url = `${ST_ROOT.csgplan}/salestools/guest_plan/countholiday/${period}/${empID}`;
    return this.http.get(url).toPromise();
  }
}
