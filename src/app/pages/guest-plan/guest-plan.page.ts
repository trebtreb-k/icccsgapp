
import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

import { CalendarComponentOptions } from 'ion2-calendar';
import { GuestPlanService } from './../../services/api/guest-plan/guest-plan.service';
import { StorageService } from './../../services/storage/storage.service';
import { moment } from './../../services/utils/moment/moment.service';

moment.locale('th');

@Component({
  selector: 'app-guest-plan',
  templateUrl: './guest-plan.page.html',
  styleUrls: ['./guest-plan.page.scss'],
})
export class GuestPlanPage implements OnInit {
  values: any;

  user: any;
  empId: string;
  dataAssigndate: any[] = [];

  type: 'string'; // 'string' | 'js-date' | 'moment' | 'time' | 'object'

  loadData: any;

  optionsMulti: any;
  sumOt: any;
  dataOtH = [];
  data = [];

  constructor(private storage: StorageService, 
              private api: GuestPlanService, 
              private router: Router) {
  }

  ngOnInit() {
    this.getUserInfo();
  }

  async ionViewDidEnter() {
    const monthV = moment().format('YYYYMM');
    const mmmm = moment('2020-06', 'YYYY-MM').daysInMonth();
    try {

      const callApi = await this.api.getCSGPlan(this.empId, monthV);
     // const callDayPlanApi = await this.api.getDayPlanCSGPlan(monthV, this.empId);
     // trebTreb 16-07-2021
      this.dataAssigndate = callApi.datas;
     // this.dataAssigndate = callDayPlanApi.datas;
     // trebTreb 16-07-2021

      this.loadData = this.getDataDateM(this.dataAssigndate);
      console.log('loadData',this.loadData)
      this.optionsMulti = {
        from: new Date(2000, 0, 1),
        monthFormat: 'ปี YYYY เดือน MMM',
        monthPickerFormat: ['ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย.', 'ก.ค.', 'ส.ค.', 'ก.ย.', 'ต.ค.', 'พ.ย.', 'ธ.ค.'],
        weekdays: ['อา', 'จ', 'อ', 'พ', 'พฤ', 'ศ', 'ส'],
        weekStart: 0,
        showToggleButtons: true,
        showMonthPicker: true,
        daysConfig: this.loadData,
      };
      this.getdetailDay(this.dataAssigndate);
    } catch (error) {
      this.dataAssigndate = [];
      this.dataAssigndate = [];
    }
  }

  doRefresh(event) {
    setTimeout(() => {
        this.ionViewDidEnter();
        event.target.complete();
    }, 2000);
  }



  async getUserInfo(): Promise<void> {
    const info = await this.storage.get('USER_INFO');
    this.user = info;
    this.empId = info?.emp_id;
  }

  getDataDateM(dataApi: any) {
    this.data = [];
    this.sumOt = 0;
    this.dataOtH = [];

    dataApi.forEach((e: any) => {
      this.sumOt = this.sumOt + e.sumot;
      const dateC = moment(e.assigndate, 'DD/MM/YYYY').format();//'MM-DD-YYYY');

      this.data.push({
        date: new Date(dateC),
        // cssClass: e.worktype!='W1' ? 'custom-calendar danger' : 'custom-calendar normal',
        cssClass:
          e.worktype === 'W1' && e.datatype === 'P'
            ? 'custom-calendar workdayShowPl'
            : e.worktype === 'W1'
            ? 'custom-calendar workdayShow'
            : e.worktype === 'W2' && e.datatype === 'P'
            ? 'custom-calendar holidaySelectPl'
            : e.worktype === 'W2'
            ? 'custom-calendar holidaySelect'
            : e.worktype === 'V1' && e.datatype === 'P'
            ? 'custom-calendar offdayShowPl'
            : e.worktype === 'V1'
            ? 'custom-calendar offdayShow'
            : 'custom-calendar urgent',
        subTitle: e.sumot === 0 || e.sumot === null ? null : '*OT',
      });
    });
    let hour = 0;
    hour = this.sumOt / 60;
    let minute = 0;
    // console.log(this.sumOt);

    minute = this.sumOt % 60;
    let date_day = 0;
    date_day = Math.floor(hour / 8);

    let date_hour = 0;
    date_hour = hour % 8;

    this.dataOtH.push({ hour, minute, date_day });

    return this.data;
    // return [
    //   {
    //     date: new Date('2020-04-01'),
    //     cssClass: 'custom-calendar danger',
    //     subTitle: '*OT',
    //   },
    // ];
  }

  editValue() {
    this.values = this.dummy();
  }

  ddd(v) {
    // console.log(v);
  }

  dummy() {
    return [
      {
        image: 'https://image.flaticon.com/icons/svg/428/428425.svg',
        title: '8 เมษายน 2563',
        value: 'วันหยุดประจำสัปดาห์',
        months: 4,
      },
    ];
  }

  async startEventForMonths(value: any) {
    const valToMonths = [];

    // for (let index = 0; index < this.dummy().length; index++) {
    //   console.log(this.dummy()[index].months, '////', value);
    //   if (this.dummy()[index].months == value) {
    //     console.log(this.dummy()[index]);
    //     valToMonths.push(this.dummy()[index]);
    //   }
    // }

    for (const index in this.dummy()) {
      if (this.dummy()[index].months === value) {
        // console.log('++++++++++++++++ ', index);
        // console.log(this.dummy()[index]);
        valToMonths.push(this.dummy()[index]);
      }
    }

    // console.log(valToMonths);

    this.values = valToMonths;
    return this.values;
    // this.editValue()
  }

  async getEventForMonths(events: any) {
    // console.log(events.newMonth.string);

    const formatDate = moment(events.newMonth.string).format('YYYYMM');
    // console.log(formatDate);
    const monthV = moment().format('YYYYMM');
    if (formatDate === monthV) {
      const callApi = await this.api.getDayPlanCSGPlan(monthV, this.empId);
      this.dataAssigndate = callApi.datas;
      // console.log(this.dataAssigndate);

      this.loadData = this.getDataDateM(this.dataAssigndate);
      // console.log(this.loadData);
    } else {
      const callApi = await this.api.getDayPlanCSGPlan(formatDate, this.empId);
      this.dataAssigndate = callApi.datas;
      this.loadData = this.getDataDateM(this.dataAssigndate);
      // console.log(this.loadData);
    }

    this.optionsMulti = {
      from: new Date(2000, 0, 1),
      monthFormat: 'ปี YYYY เดือน MMM',
      monthPickerFormat: ['ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย.', 'ก.ค.', 'ส.ค.', 'ก.ย.', 'ต.ค.', 'พ.ย.', 'ธ.ค.'],
      weekdays: ['อา', 'จ', 'อ', 'พ', 'พฤ', 'ศ', 'ส'],
      weekStart: 0,
      showToggleButtons: true,
      showMonthPicker: true,
      daysConfig: this.loadData,
    };

    // cssClass: e.worktype!='W1' ? 'custom-calendar danger' : 'custom-calendar normal',
    // console.log(this.dataAssigndate);
    this.getdetailDay(this.dataAssigndate);

    // this.editValue()
  }

  getdetailDay(data: any) {
    const valToMonths = [];
    for (let index = 0; index < this.dataAssigndate.length; index++) {
      valToMonths.push({
        image:
          data[index].worktype === 'W1'
            ? 'assets/images/csg-plan/calendar_n.svg'
            : data[index].worktype === 'W2'
            ? 'assets/images/csg-plan/calendar_h.svg'
            : data[index].worktype === 'V1'
            ? 'assets/images/csg-plan/calendar_o.svg'
            : 'assets/images/csg-plan/calendar_s.svg',
        title: data[index].assigndate,
        value: data[index].workdesc,
        stateOt: data[index].sumot !== 0 && data[index].sumot != null ? 'Y' : 'N',
        regfrom:
          data[index].regfrom != null
            ? data[index].regfrom.substring(0, 2) + '.' + data[index].regfrom.substring(2, 4)
            : data[index].regfrom,
        regto: data[index].regto != null ? data[index].regto.substring(0, 2) + '.' + data[index].regto.substring(2, 4) : data[index].regto,
        custname: data[index].custname,
      });
    }
    // console.log(valToMonths);

    this.values = valToMonths;
    return this.values;
  }

  onChanges($event: any) {
    // console.log($event);
  }


  createPlan() {
    const navigationExtras: NavigationExtras = {
      state: { name: 'guest' },
    };
    this.router.navigate(['guest-plan/create-plan'], navigationExtras);
  }
}


