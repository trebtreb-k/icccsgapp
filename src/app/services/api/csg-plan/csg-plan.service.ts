import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { ST_ROOT } from './../api.root';
import { StorageService } from './../../storage/storage.service';

@Injectable({
  providedIn: 'root',
})
export class CsgPlanService {
  constructor(private http: HttpClient, private storage: StorageService) {}

  async getCSGPlan(empId: string, date: any): Promise<any> {
    // ------------- ใช้ปัจจุบัน -----------
    // const url = `${ST_ROOT.csgplan}/salestools/csg_plan/${date}/${empId}`;
    // ------------- ใช้ปัจจุบัน -----------

    // ------------- แบบใหม่ -----------
    const url = `${ST_ROOT.csgplan}/salestools/csg_plan/data_plan_csg/${date}/${empId}`;
    // ------------- แบบใหม่ -----------
    console.log('????--?????',url);

    return this.http.get(url).toPromise();
  }

  async getHolidayCSGPlan(period: any): Promise<any> {
    const url = `${ST_ROOT.csgplan}/salestools/csg_plan/calendar/holiday/${period}`;
    console.log('getHolidayCSGPlan',url);

    return this.http.get(url).toPromise();
  }

  async getTimeDefault(): Promise<any> {
    const url = `${ST_ROOT.csgplan}/salestools/csg_plan/timedefault`;
    console.log('getTimeDefault',url);

    return this.http.get(url).toPromise();
  }

  async getShopCounterCSGPlan(empid: any): Promise<any> {
    const url = `${ST_ROOT.csgplan}/salestools/csg_plan/custid/counter/${empid}`;
    console.log(url);
    return this.http.get(url).toPromise();
  }

  async getShopCSGPlan(empid: any): Promise<any> {
    const url = `${ST_ROOT.csgplan}/salestools/csg_plan/custid/storecsg/${empid}`;
    console.log(url);
    return this.http.get(url).toPromise();
  }

  async getCouterShopCSGPlan(empid: any, custID: any,): Promise<any> {
    const url = `${ST_ROOT.csgplan}/salestools/csg_plan/custid/counterstore/${empid}/${custID}`;
    console.log(url);
    return this.http.get(url).toPromise();
  }

  async getTimeTypeCounterCSGPlan(custID: any, counterID: any): Promise<any> {
    const url = `${ST_ROOT.csgplan}/salestools/csg_plan/custid/timetypecounterstore/${custID}/${counterID}`;
    console.log(url);
    return this.http.get(url).toPromise();
  }

  async getCsgCreatePlanDetail(custID: any, counterID: any, csgID: any, period: any): Promise<any> {
    // const url = `${ST_ROOT.csgplan}/salestools/csg_plan/CsgCreatePlanDetail/${csgID}/${period}/${custID}/${counterID}`;
    const url = `${ST_ROOT.csgplan}/salestools/csg_plan/CsgCreatePlanDetail/data_plan_csg/${csgID}/${period}/${custID}/${counterID}`;
    console.log(url);
    return this.http.get(url).toPromise();
  }


  async insertCreatePlanCSGPlan(body: any): Promise<any> {
    const url = `${ST_ROOT.csgplan}/salestools/csg_plan/createplan`;
    console.log(url);
    console.log(body);
    return this.http.post(url, body).toPromise();
  }

  async updateWorkPlanStatusCretae(body: any): Promise<any> {
    const url = `${ST_ROOT.csgplan}/salestools/csg_plan/updateWorkplanstatus`;
    console.log(url);
    console.log(body);
    return this.http.post(url, body).toPromise();
  }

  async getDayPlanCSGPlan(period: any, empID: any): Promise<any> {
    const url = `${ST_ROOT.csgplan}/salestools/csg_plan/${period}/${empID}`;
    console.log('?????*******',url);

    return this.http.get(url).toPromise();
  }

  async getWorkTypeCSGPlan(): Promise<any> {
    const url = `${ST_ROOT.csgplan}/salestools/csg_plan/worktype`;
    console.log(url);
    
    return this.http.get(url).toPromise();
  }

  async searchCustID(custID: any, empID: any): Promise<any> {
    const url = `${ST_ROOT.csgplan}/salestools/csg_plan/custid/newcsg/${empID}/${custID}`;
    return this.http.get(url).toPromise();
  }

  async getCountHoliday(period: any, empID: any): Promise<any> {
    const url = `${ST_ROOT.csgplan}/salestools/csg_plan/countholiday/${period}/${empID}`;
    console.log(url);

    return this.http.get(url).toPromise();
  }

  async getApproverDetail(period: any, empID: any): Promise<any> {
    const url = `${ST_ROOT.csgplan}/salestools/csg_plan/statusapprove?yearmonth=${period}&csgid=${empID}`;
    console.log(url);

    return this.http.get(url).toPromise();
  }
}
