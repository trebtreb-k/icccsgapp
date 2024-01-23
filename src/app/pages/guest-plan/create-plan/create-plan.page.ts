import { AlertController, NavController, PopoverController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

import {GuestCreatePlanMenuPopoverComponent } from './../guest-create-plan-menu-popover/guest-create-plan-menu-popover.component';
import { GuestPlanPopoverComponent } from './../guest-plan-popover/guest-plan-popover.component';
import { GuestPlanService } from './../../../services/api/guest-plan/guest-plan.service';
import { StorageService } from './../../../services/storage/storage.service';
import { moment } from './../../../services/utils/moment/moment.service';

moment.locale('th');

@Component({
  selector: 'app-create-plan',
  templateUrl: './create-plan.page.html',
  styleUrls: ['./create-plan.page.scss'],
})
export class CreatePlanPage implements OnInit {

  dateMulti: string[];
  date: '2020-02-02';
  dayStart: any;
  params: any;
  loadData: any;
  optionsMulti2: any;
  dataHolidayAPI: any;
  countHolidayAPI: any;
  countSpecial: any;
  countHoliday: any;
  loadDataHoliday: any;
  dataHoliday = [];
  tap = 'WorkDay';
  ggg: any;
  status = 'W';
  type: 'string'; // 'string' | 'js-date' | 'moment' | 'time' | 'object'
  custidMenu: any;
  counterMenu: any;
  monthCreate: any;
  empId: any;
  flagcount = 'Y';
  saveData = { shop: { value: null, name: null }, counter: { value: null, name: null } };

  m: string;
  y: string;
  d: string;
  dayStartFromM: any;
  dayStartFromD: any;
  dayStartFromY: any;
  MDayCheck: any;

  daysConfig = [];
  workday = [];
  dataSelectDay = [];

  counters: any;

  constructor(
    private storage: StorageService,
    private api: GuestPlanService,
    private router: Router,
    private createPlanPopover: PopoverController,
    private navCtrl: NavController,
    private csgPlanPopover: PopoverController,
    private alertController: AlertController
  ) {
    const state = this.router.getCurrentNavigation().extras.state;
    console.log(state);
    this.params = state;
  }

  async ngOnInit() {
    this.getUserInfo();


    // this.loadData = this.getDataDateM(this.dataAssigndate)
    this.monthCreate = moment().format('YYYYMM');

    this.m = moment().format('MM');
    this.MDayCheck = this.m;

    const monthC = +this.m - 1;

    this.y = moment().format('YYYY');
    this.d = moment().format('D');
    console.log(this.y, monthC, this.d);

    // this.dayStart = this.moment.daysBefore('1','M');
    this.dayStartFromM = monthC;
    this.dayStartFromD = +this.d;
    this.dayStartFromY = +this.y;
    // const dayStartFrom = this.dayStart.substr(0, 5) + monthC + this.dayStart.substr(4);

    console.log(this.dayStartFromY, this.dayStartFromM);

    const callApi = await this.api.getHolidayCSGPlan(this.monthCreate);
    this.dataHolidayAPI = callApi.datas;
    console.log(this.dataHolidayAPI);
    const callApiCountHoliday = await this.api.getCountHoliday(this.monthCreate, this.empId);
    this.countHolidayAPI = callApiCountHoliday.datas;
    this.countSpecial = this.countHolidayAPI[0].special;
    this.countHoliday = this.countHolidayAPI[0].holiday;
    console.log(this.countHolidayAPI);
    const gg = 5;
    this.loadDataHoliday = this.getDataHoliDay(this.dataHolidayAPI);

    this.optionsMulti2 = {
      from: new Date(this.dayStartFromY, this.dayStartFromM, this.dayStartFromD),
      monthFormat: 'ปี YYYY เดือน MMM',
      monthPickerFormat: ['ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย.', 'ก.ค.', 'ส.ค.', 'ก.ย.', 'ต.ค.', 'พ.ย.', 'ธ.ค.'],
      weekdays: ['อา', 'จ', 'อ', 'พ', 'พฤ', 'ศ', 'ส'],
      weekStart: 0,
      showToggleButtons: true,
      showMonthPicker: true,
      // pickMode: 'multi',
      daysConfig: this.loadDataHoliday,
    };
  }

  async getUserInfo(): Promise<void> {
    const info = await this.storage.get('USER_INFO');
    this.empId = info?.emp_id;
  }

  segmentChanged(ev: any) {
    console.log(ev.detail.value);
    this.tap = ev.detail.value;
  }

  getDataHoliDay(dataApi: any) {
    this.dataHoliday = [];
    // console.log(dataApi);

    dataApi.forEach((e: any) => {
      // console.log(e);
      // const dateC = this.moment.formatDate(e.date, 'MM-DD-YYYY', 'th', 'DD/MM/YYYY');
      const dateC = moment(e.date, 'DD/MM/YYYY').format('MM-DD-YYYY');
      // console.log(e.dayofweek+"///"+dateC);
      if (e.iccholiday === '1' && e.dayofweek !== '1' && e.dayofweek !== '7') {
        this.dataHoliday.push({
          date: new Date(dateC),
          cssClass: 'custom-calendar holiday',
        });
      }
      // this.data.push({
      //   date: new Date(dateC),
      //   cssClass: e.worktype!='W1' ? 'custom-calendar danger' : 'custom-calendar normal',
      //   subTitle: e.sumot === 0 ? null : '*OT',
      // })
    });

    // console.log(this.dataHoliday);
    return this.dataHoliday;
  }

  async getHolidayForMonths(events) {
    this.reStartDays();
    this.dataHoliday = [];
    console.log(events.newMonth.string);
    // this.monthCreate = this.moment.formatDate(events.newMonth.string, 'YYYYMM');
    this.monthCreate = moment(events.newMonth.string).format('YYYYMM');
    const callApiCountHoliday = await this.api.getCountHoliday(this.monthCreate, this.empId);
    this.countHolidayAPI = callApiCountHoliday.datas;
    console.log(this.monthCreate);
    console.log(this.countHolidayAPI);

    this.MDayCheck = moment(events.newMonth.string).format('MM');
    const callApi = await this.api.getHolidayCSGPlan(this.monthCreate);
    this.dataHolidayAPI = callApi.datas;
    // this.loadData = this.getDataDateM(this.dataHolidayAPI)
    console.log(this.loadDataHoliday);

    const valToMonths = [];
    // cssClass: e.worktype!='W1' ? 'custom-calendar danger' : 'custom-calendar normal',
    console.log(this.dataHolidayAPI);

    for (const index in this.dataHolidayAPI.length) {
      if (
        this.dataHolidayAPI[index].iccholiday === '1' &&
        this.dataHolidayAPI[index].dayofweek !== '1' &&
        this.dataHolidayAPI[index].dayofweek !== '7'
      ) {
        const dateC = moment(this.dataHolidayAPI[index].date, 'DD/MM/YYYY').format('MM-DD-YYYY');
        this.dataHoliday.push({
          date: new Date(dateC),
          cssClass: 'custom-calendar holiday',
        });
      }
    }

    console.log(this.daysConfig);

    this.optionsMulti2 = {
      from: new Date(this.dayStartFromY, this.dayStartFromM, this.dayStartFromD),
      monthFormat: 'ปี YYYY เดือน MMM',
      monthPickerFormat: ['ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย.', 'ก.ค.', 'ส.ค.', 'ก.ย.', 'ต.ค.', 'พ.ย.', 'ธ.ค.'],
      weekdays: ['อา', 'จ', 'อ', 'พ', 'พฤ', 'ศ', 'ส'],
      weekStart: 0,
      showToggleButtons: true,
      showMonthPicker: true,
      // pickMode: 'multi',
      daysConfig: this.daysConfig,
    };

    // this.values = valToMonths;
    return this.dataHoliday;
    // this.editValue()
  }

  changeBT(v: any) {
    this.status = v.detail.value;
    console.log(v);
  }

  hhh(ev: any) {
    console.log(ev);
    this.ggg = ev.detail.value;
  }

  onChange2(ev: any) {
    console.log('onChange2', ev);

    // console.clear();

    const value = moment(ev._d, 'DD/MM/YYYY').format('YYYY-MM-DD');
    const MCheck = moment(ev._d, 'DD/MM/YYYY').format('MM');
    console.log(MCheck, this.MDayCheck);

    // this.dataSelectDay.push({
    //   day: valueDay,
    //   flag: this.status==="W"?'W1':this.status==="O"?'V1':''
    // })

    // console.log(this.dataSelectDay);

    if (this.daysConfig.length === 0) {
      const init = this.dataHoliday;
      for (const x of init) {
        this.daysConfig.push({ ...x, date: moment(x.date).format('YYYY-MM-DD') });
      }
    }

    const searchIndex = this.daysConfig.findIndex((i) => i.date === value);

    console.log(this.status);

    if (searchIndex < 0) {
      this.daysConfig.push({
        date: moment(ev._d, 'DD/MM/YYYY').format('YYYY-MM-DD'),
        cssClass:
          this.status === 'W'
            ? 'custom-calendar workday'
            : this.status === 'O'
            ? 'custom-calendar offday'
            : this.status === 'H'
            ? 'custom-calendar holidaySelect'
            : '',
      });
    } else if (searchIndex >= 0) {
      if (this.daysConfig[searchIndex].cssClass === 'custom-calendar workday' && this.status === 'W') {
        this.daysConfig.splice(searchIndex, 1);
        // console.log("LL1");
      } else if (this.daysConfig[searchIndex].cssClass === 'custom-calendar offday' && this.status === 'O') {
        this.daysConfig.splice(searchIndex, 1);
      } else if (this.daysConfig[searchIndex].cssClass === 'custom-calendar holidaySelect' && this.status === 'H') {
        this.daysConfig.splice(searchIndex, 1);
      } else if (this.daysConfig[searchIndex].cssClass === 'custom-calendar holiday' && this.status === 'W') {
        this.daysConfig[searchIndex].cssClass = 'custom-calendar workday-holiday';
      } else if (this.daysConfig[searchIndex].cssClass === 'custom-calendar holiday' && this.status === 'O') {
        this.daysConfig[searchIndex].cssClass = 'custom-calendar offday-holiday';
      } else if (this.daysConfig[searchIndex].cssClass === 'custom-calendar holiday' && this.status === 'H') {
        this.daysConfig[searchIndex].cssClass = 'custom-calendar holiday-holiday';
      } else if (this.daysConfig[searchIndex].cssClass === 'custom-calendar workday-holiday' && this.status === 'W') {
        this.daysConfig[searchIndex].cssClass = 'custom-calendar holiday';
      } else if (this.daysConfig[searchIndex].cssClass === 'custom-calendar offday-holiday' && this.status === 'O') {
        this.daysConfig[searchIndex].cssClass = 'custom-calendar holiday';
      } else if (this.daysConfig[searchIndex].cssClass === 'custom-calendar holiday-holiday' && this.status === 'H') {
        this.daysConfig[searchIndex].cssClass = 'custom-calendar holiday';
      } else if (this.daysConfig[searchIndex].cssClass === 'custom-calendar workday-holiday' && this.status === 'O') {
        this.daysConfig[searchIndex].cssClass = 'custom-calendar offday-holiday';
      } else if (this.daysConfig[searchIndex].cssClass === 'custom-calendar offday-holiday' && this.status === 'W') {
        this.daysConfig[searchIndex].cssClass = 'custom-calendar workday-holiday';
      } else if (this.daysConfig[searchIndex].cssClass === 'custom-calendar offday-holiday' && this.status === 'H') {
        this.daysConfig[searchIndex].cssClass = 'custom-calendar holiday-holiday';
      } else if (this.daysConfig[searchIndex].cssClass === 'custom-calendar workday-holiday' && this.status === 'H') {
        this.daysConfig[searchIndex].cssClass = 'custom-calendar holiday-holiday';
      } else if (this.daysConfig[searchIndex].cssClass === 'custom-calendar holiday-holiday' && this.status === 'W') {
        this.daysConfig[searchIndex].cssClass = 'custom-calendar workday-holiday';
      } else if (this.daysConfig[searchIndex].cssClass === 'custom-calendar holiday-holiday' && this.status === 'O') {
        this.daysConfig[searchIndex].cssClass = 'custom-calendar offday-holiday';
      } else {
        this.daysConfig[searchIndex].cssClass =
          this.status === 'W'
            ? 'custom-calendar workday'
            : this.status === 'O'
            ? 'custom-calendar offday'
            : this.status === 'H'
            ? 'custom-calendar holidaySelect'
            : '';
      }
    }

    console.log(this.daysConfig);
    this.optionsMulti2 = {
      from: new Date(this.dayStartFromY, this.dayStartFromM, this.dayStartFromD),
      monthFormat: 'ปี YYYY เดือน MMM',
      monthPickerFormat: ['ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย.', 'ก.ค.', 'ส.ค.', 'ก.ย.', 'ต.ค.', 'พ.ย.', 'ธ.ค.'],
      weekdays: ['อา', 'จ', 'อ', 'พ', 'พฤ', 'ศ', 'ส'],
      weekStart: 0,
      showToggleButtons: true,
      showMonthPicker: true,
      // color: '#ffffff',
      // marked: true,
      // pickMode: 'multi',
      // disableWeeks: [0, 6],
      daysConfig: this.daysConfig,
    };
    this.dataSelectDay = [];
    for (const item of this.daysConfig) {
      if (item.cssClass !== 'custom-calendar holiday') {
        const valueDay = moment(item.date, 'YYYY-MM-DD').format('DD/MM/YYYY');
        console.log(valueDay);
        this.dataSelectDay.push({
          day: valueDay,
          type:
            item.cssClass === 'custom-calendar workday'
              ? 'W1'
              : item.cssClass === 'custom-calendar offday'
              ? 'V1'
              : item.cssClass === 'custom-calendar holidaySelect'
              ? 'W2'
              : item.cssClass === 'custom-calendar workday-holiday'
              ? 'W1'
              : item.cssClass === 'custom-calendar offday-holiday'
              ? 'V1'
              : item.cssClass === 'custom-calendar holiday-holiday'
              ? 'W2'
              : '',
        });
      }
    }

    console.log(this.dataSelectDay);
    console.log(this.countHolidayAPI[0].special);
    let numS = 0;
    let numH = 0;
    this.countSpecial = this.countHolidayAPI[0].special;
    this.countHoliday = this.countHolidayAPI[0].holiday;
    // for (let i = 0; i < this.dataSelectDay.length; i++) {
    //   console.log(this.dataSelectDay[i]);
    //   if (this.dataSelectDay[i].type === 'V1') {
    //     console.log('1111');

    //     if (numS < this.countHolidayAPI[0].special) {
    //       numS++;
    //       this.countSpecial--;
    //     } else {
    //       if (numS <= this.countHolidayAPI[0].special) {
    //         this.onChange2(ev);
    //       }
    //     }
    //   } else if (this.dataSelectDay[i].type === 'W2') {
    //     console.log(this.countHoliday);

    //     if (numH < this.countHolidayAPI[0].holiday) {
    //       numH++;
    //       this.countHoliday--;
    //     } else {
    //       if (numS <= this.countHolidayAPI[0].holiday) {
    //         this.onChange2(ev);
    //       }
    //     }
    //   }
    // }

    for (const i in this.dataSelectDay) {
      if (this.dataSelectDay[i].type === 'V1') {
        console.log('1111');

        if (numS < this.countHolidayAPI[0].special) {
          numS++;
          this.countSpecial--;
        } else {
          if (numS <= this.countHolidayAPI[0].special) {
            this.onChange2(ev);
          }
        }
      } else if (this.dataSelectDay[i].type === 'W2') {
        console.log(this.countHoliday);

        if (numH < this.countHolidayAPI[0].holiday) {
          numH++;
          this.countHoliday--;
        } else {
          if (numS <= this.countHolidayAPI[0].holiday) {
            this.onChange2(ev);
          }
        }
      }
    }
  }

  cancelPlan() {
    console.log('cancelPlan');
    // const navigationExtras:NavigationExtras = {
    //   state: {name: "trebtreb"}
    // }
    this.router.navigate(['guest-plan']);
  }

  async popoverShopMenu(ev: any) {
    console.log('ev',ev);

    const popover = await this.createPlanPopover.create({
      component: GuestCreatePlanMenuPopoverComponent,
      componentProps: {
        props: { type: ev, dataCounter: !this.counters ? '' : this.counters },
      },
      event: ev,
      translucent: true,
    });
    popover.onDidDismiss().then(async (param: any) => {
      if (param.role !== 'backdrop' && param.data.dismissed) {
        const val = param.data;
        console.log(val);
        if (ev === 'shop') {
          this.saveData.shop.value = val.value;
          this.saveData.shop.name = val.name;

          this.saveData.counter.value = null;
          this.saveData.counter.name = null;

         // this.counters = val.counter;
         // this.custidMenu = val.name;
        }

        console.log(this.custidMenu);

        if (ev === 'counter') {
          console.log('////', val);
          console.log('>>>>', this.saveData.counter);

          this.saveData.counter.value = val.value;
          this.saveData.counter.name = val.name;
          this.counterMenu = val.value;
        }
        console.log(this.saveData);

        // const navigationExtras:NavigationExtras = {
        //   state: {name}
        // }
        // this.router.navigate(["csg-plan/create-plan"],navigationExtras)
      }
    });

    return await popover.present();
  }

  async cretePlan() {
    // console.log("this.dataSelectDay",this.dataSelectDay);
    // console.log(this.saveData);
    // console.log('this.monthCreate',this.monthCreate);
    // console.log('empid', this.empId);
    // console.log('flagcount',this.flagcount);

    const dataset = [];
    for (const s of this.dataSelectDay) {
      dataset.push({
        flagdesc: s.type,
        assigndate: s.day,
        custid: this.saveData.shop.value,
        counterid: 'COUNTER', //this.saveData.counter.value,
        yearmonth: this.monthCreate,
        csgid: this.empId,
        flagcount: 'Y',
      });
    }

    const body = { dataset };

    console.log(body);

    const call = await this.api.insertCreatePlanCSGPlan(body);
    console.log(call);
    this.navCtrl.back();
  }
  
  async presentPopover(ev: any) {
    console.log(ev);
    
    const popover = await this.csgPlanPopover.create({
      component: GuestPlanPopoverComponent,
      event: ev,
      translucent: true,
    });

    popover.onDidDismiss().then(async (param: any) => {
      if (param.role !== 'backdrop' && param.data.dismissed) {
        const type = param.data.type;
        console.log(type);

        const navigationExtras: NavigationExtras = {
          state: { type },
        };
        this.router.navigate(['guest-plan/create-plan'], navigationExtras);
      }
    });

    return await popover.present();
    
  }

  allSelect() {
    this.daysConfig = [];
    console.log(this.dataHolidayAPI.day);
    console.log(this.dayStartFromD);

    // for (let i = 0; i < this.dataHolidayAPI.length; i++) {
    //   console.log(this.dataHolidayAPI[i].month, this.m);

    //   if (this.dataHolidayAPI[i].month == this.m) {
    //     if (this.dataHolidayAPI[i].day >= this.dayStartFromD) {
    //       this.daysConfig.push({
    //         date: this.moment.formatDate(this.dataHolidayAPI[i].date, 'YYYY-MM-DD', 'th', 'DD/MM/YYYY'),
    //         cssClass: this.status === 'W' ? 'custom-calendar workday' : this.status === 'O' ? 'custom-calendar offday' : '',
    //       });
    //     }
    //   } else {
    //     this.daysConfig.push({
    //       date: this.moment.formatDate(this.dataHolidayAPI[i].date, 'YYYY-MM-DD', 'th', 'DD/MM/YYYY'),
    //       cssClass: this.status === 'W' ? 'custom-calendar workday' : this.status === 'O' ? 'custom-calendar offday' : '',
    //     });
    //   }
    // }

    for (const i in this.dataHolidayAPI) {
      if (this.dataHolidayAPI[i].month === this.m) {
        if (this.dataHolidayAPI[i].day >= this.dayStartFromD) {
          this.daysConfig.push({
            date: moment(this.dataHolidayAPI[i].date, 'DD/MM/YYYY').format('YYYY-MM-DD'),
            cssClass: this.status === 'W' ? 'custom-calendar workday' : this.status === 'O' ? 'custom-calendar offday' : '',
          });
        }
      } else {
        this.daysConfig.push({
          // date: this.moment.formatDate(this.dataHolidayAPI[i].date, 'YYYY-MM-DD', 'th', 'DD/MM/YYYY'),
          date: moment(this.dataHolidayAPI[i].date, 'DD/MM/YYYY').format('YYYY-MM-DD'),
          cssClass: this.status === 'W' ? 'custom-calendar workday' : this.status === 'O' ? 'custom-calendar offday' : '',
        });
      }
    }

    console.log(this.daysConfig);
    this.optionsMulti2 = {
      from: new Date(this.dayStartFromY, this.dayStartFromM, this.dayStartFromD),
      monthFormat: 'ปี YYYY เดือน MMM',
      monthPickerFormat: ['ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย.', 'ก.ค.', 'ส.ค.', 'ก.ย.', 'ต.ค.', 'พ.ย.', 'ธ.ค.'],
      weekdays: ['อา', 'จ', 'อ', 'พ', 'พฤ', 'ศ', 'ส'],
      weekStart: 0,
      showToggleButtons: true,
      showMonthPicker: true,
      // color: '#ffffff',
      // marked: true,
      // pickMode: 'multi',
      // disableWeeks: [0, 6],
      daysConfig: this.daysConfig,
    };

    this.dataSelectDay = [];
    for (const item of this.daysConfig) {
      if (item.cssClass !== 'custom-calendar holiday') {
        const valueDay = moment(item.date, 'YYYY-MM-DD').format('DD/MM/YYYY');
        console.log(valueDay);
        this.dataSelectDay.push({
          day: valueDay,
          type:
            item.cssClass === 'custom-calendar workday'
              ? 'W1'
              : item.cssClass === 'custom-calendar offday'
              ? 'V1'
              : item.cssClass === 'custom-calendar workday-holiday'
              ? 'W1'
              : item.cssClass === 'custom-calendar offday-holiday'
              ? 'V1'
              : '',
        });
      }
    }
    console.log(this.dataSelectDay);
  }

  async reStartDays() {
    // this.monthCreate = this.moment.now('YYYYMM');
    this.monthCreate = moment().format('YYYYMM');
    console.log(this.monthCreate);

    const callApi = await this.api.getHolidayCSGPlan(this.monthCreate);
    this.dataHolidayAPI = callApi.datas;
    console.log(this.dataHolidayAPI);

    this.loadDataHoliday = this.getDataHoliDay(this.dataHolidayAPI);
    this.optionsMulti2 = {
      from: new Date(this.dayStartFromY, this.dayStartFromM, this.dayStartFromD),
      monthFormat: 'ปี YYYY เดือน MMM',
      monthPickerFormat: ['ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย.', 'ก.ค.', 'ส.ค.', 'ก.ย.', 'ต.ค.', 'พ.ย.', 'ธ.ค.'],
      weekdays: ['อา', 'จ', 'อ', 'พ', 'พฤ', 'ศ', 'ส'],
      weekStart: 0,
      showToggleButtons: true,
      showMonthPicker: true,
      // pickMode: 'multi',
      daysConfig: this.loadDataHoliday,
    };
    this.daysConfig = [];
    this.dataSelectDay = [];
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'ยืนยันการสร้างแผลนหรือไม่',
      message: 'ข้อมูลต่างๆที่ท่านแผลนไว้จะถูกบันทึกและ จะนำไปแสดงในหน้าแสดงผลด้านหน้าในทันทีหากกดยืนยัน!!',
      buttons: [
        {
          text: 'ปิด',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            // console.log('Confirm Cancel: blah');
          },
        },
        {
          text: 'ยืนยัน',
          handler: () => {
            // console.log('Confirm Okay');
            this.cretePlan();
          },
        },
      ],
    });

    await alert.present();
  }
  
  // async popoverCounterMenu(ev: any) {

  //   console.log(this.counters);

  //   const popover = await this.createPlanPopover.create({
  //     component: CreatePlanMenuPopoverComponent,
  //     componentProps: {
  //       props: { type: ev , dataCounter: this.counters},
  //     },
  //     event: ev,
  //     translucent: true
  //   });
  //   popover.onDidDismiss().then(async (param: any) => {
  //     if (param.role !== 'backdrop' && param.data.dismissed) {
  //       const custid = param.data.custid;
  //       console.log(custid);
  //       this.custidMenu = custid;

  //       // const navigationExtras:NavigationExtras = {
  //       //   state: {name}
  //       // }
  //       // this.router.navigate(["csg-plan/create-plan"],navigationExtras)
  //     }
  //   });

  //   return await popover.present();
  // }
}
