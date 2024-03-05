import { AlertController, NavController, PopoverController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

import { CreatePlanMenuPopoverComponent } from './../create-plan-menu-popover/create-plan-menu-popover.component';
import { CsgPlanPopoverComponent } from './../csg-plan-popover/csg-plan-popover.component';
import { CsgPlanService } from './../../../services/api/csg-plan/csg-plan.service';
import { LoadingService } from './../../../services/utils/loading/loading.service';
import { StorageService } from './../../../services/storage/storage.service';
import { moment } from './../../../services/utils/moment/moment.service';

moment.locale('th');

@Component({
  selector: 'app-create-plan',
  templateUrl: './create-plan.page.html',
  styleUrls: ['./create-plan.page.scss'],
})

export class CreatePlanPage implements OnInit {
  check = false;
  dateMulti: string[];
  date: '2020-02-02';
  dayStart: any;
  dateAll: any;
  paramsMonthBefore: any;
  loadData: any;
  optionsMulti2: any;
  dataHolidayAPI: any;
  countHolidayAPI: any;
  countSpecial: any;
  countHoliday: any;
  loadDataHoliday: any;
  dataHoliday = [];
  sss = [];
  tap = 'WorkDay';
  status = 'W1';
  statusType = '';
  type: 'string'; // 'string' | 'js-date' | 'moment' | 'time' | 'object'
  custidMenu: any;
  custid: any;
  counterid: any;
  timeCounter: any;
  counterMenu: any;
  countSelect = 0;
  countSelectHoliday = 0;
  // monthCreate: any;
  daysConfigAll: any;
  monthCreate: any;
  empId: any;
  flagcount = 'Y';
  saveData = { shop: { value: null, name: null }, counter: { value: null, name: null }, timetype: { value: null, name: null }, worktype: { value: 'W1', name: 'วันทำงานปกติ', color: '008000' } };

  mydate: any;
  m: string;
  y: string;
  d: string;
  dayStartFromM: any;
  dayStartFromD: any;
  dayStartFromY: any;
  MDayCheck: any;

  otFrom: any;
  otTo: any;
  timeFrom: any;
  timeTo: any;
  timeOTFrom: any;
  timeOTTo: any;
  otType: any;


  daysConfig = [];
  workday = [];
  dataSelectDay = [];
  showAllday = [];

  counters: any;
  eventcheck: any;
  status_plan: any;

  values: any;
  dataAssigndate = [];



  startDate: any;
  myColorVaraible = 'red';
  focused = false;

  constructor(
    private storage: StorageService,
    private api: CsgPlanService,
    private router: Router,
    private createPlanPopover: PopoverController,
    private navCtrl: NavController,
    private csgPlanPopover: PopoverController,
    private alertController: AlertController,
    private loading: LoadingService
  ) {
    const state = this.router.getCurrentNavigation().extras.state;
    console.log(state);
    this.paramsMonthBefore = state;
  }

  async checkEvent(ev){
    console.log(ev);
    console.log(this.eventcheck);
    console.log(this.check);
    this.eventcheck = ev;
    console.log(this.eventcheck.detail.checked);

    this.check = this.eventcheck.detail.checked;
    if (this.check === false) {
      this.timeOTFrom = '';
      this.timeOTTo = '';
      this.otType = '';
      console.log('::::::111');
    }else{
      console.log(this.otTo);

      this.timeOTFrom = this.timeTo;
      this.timeOTTo = this.otTo;
      this.otType = 'OT';
      // this.otTo = this.timeOTFrom;
      console.log('::::::222');
      console.log(this.timeTo);
      console.log(this.timeOTTo);

      // this.check = this.check === false ? true : false;
    }
    console.log(this.check);
    console.log(this.eventcheck.detail.checked);

    // this.check = this.check === false ? true : false;
    this.check = this.eventcheck.detail.checked === true ? true : false;
    console.log(this.check);
  }


  async ngOnInit() {

    // await this.loading.dismiss();
    // this.timeFrom = '10:00';
    // this.timeTo = '19:00';
    this.timeOTFrom = '19:00';
    this.timeOTTo = '19:00';
    // this.otFrom = '19:00';
    // this.otTo = '19:00';

    // alert('sssss');
    console.log( moment(this.paramsMonthBefore.monthToCreate,'YYYYMM').format('MM-DD-YYYY'));

    // moment(this.startDate.monthToCreate,'YYYYMM').format('YYYYMM')

    this.startDate =  moment(this.paramsMonthBefore.monthToCreate,'YYYYMM').format('MM-DD-YYYY');


    // let myTag = this.el.nativeElement.querySelector("p");



    // alert("sss");
    this.check = false;
    this.eventcheck = {detail: {checked : false}};
    this.getUserInfo();

    // this.loadData = this.getDataDateM(this.dataAssigndate)
    if (this.startDate) {
      // alert('มี')
      this.monthCreate = moment(this.paramsMonthBefore.monthToCreate,'YYYYMM').format('YYYYMM');
    }else{
      this.monthCreate = moment().format('YYYYMM');
    }

    const callTimeDefaultApi = await this.api.getTimeDefault();

    // this.timeTo = '19:00';
    console.log('--------------',callTimeDefaultApi);
    this.timeFrom   = `${callTimeDefaultApi.datas[0].open_time.substring('0','2')}:${callTimeDefaultApi.datas[0].open_time.substring('2','4')}`;
    this.timeTo     = `${callTimeDefaultApi.datas[0].close_time_cal.substring('0','2')}:${callTimeDefaultApi.datas[0].close_time_cal.substring('2','4')}`;
    this.otFrom     = `${callTimeDefaultApi.datas[0].close_time_cal.substring('0','2')}:${callTimeDefaultApi.datas[0].close_time_cal.substring('2','4')}`;
    this.otTo       = `${callTimeDefaultApi.datas[0].close_time.substring('0','2')}:${callTimeDefaultApi.datas[0].close_time.substring('2','4')}`;


    // this.m = moment().format('MM');
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
  }


  async getDatasCSGCreatePlan(periodplan: any, custid: any, counterid: any) {
    const dataCsgCreatePlan = [];
    // this.countHoliday = 0;
    // alert(this.countHoliday);
    // this.monthCreate = moment(events.newMonth.string).format('YYYYMM');
    this.counterid = counterid;
    console.log('/////',custid,counterid,this.empId,periodplan);

    // this.monthCreate = moment().format('YYYYMM');

    // this.m = moment().format('MM');
    // this.MDayCheck = this.m;

    // const monthC = +this.m - 1;

    // this.y = moment().format('YYYY');
    // this.d = moment().format('D');
    // console.log(this.y, monthC, this.d);

    // this.dayStart = this.moment.daysBefore('1','M');
    // this.dayStartFromM = monthC;
    // this.dayStartFromD = +this.d;
    // this.dayStartFromY = +this.y;
    // const dayStartFrom = this.dayStart.substr(0, 5) + monthC + this.dayStart.substr(4);

    // console.log(this.dayStartFromY, this.dayStartFromM);

    console.log('///////////////////////',this.daysConfig);


    const callApi = await this.api.getHolidayCSGPlan(periodplan);
    this.dataHolidayAPI = callApi.datas;
    console.log('----',this.dataHolidayAPI);
    this.dateAll = callApi.datas;

    console.log(this.empId);



    console.log('this.monthCreate, this.empId',this.monthCreate, this.empId);
    console.log('periodplan, this.empId',periodplan, this.empId);

    const callApiCountHoliday = await this.api.getCountHoliday(periodplan, this.empId);
    // const callApiCountHoliday = await this.api.getCountHoliday(this.monthCreate, '90536');
    console.log(callApiCountHoliday);
    if (callApiCountHoliday.datas.length !== 0) {
      console.log('มีการกำหนดวันหยุดพิเศษเดือนนี้แล้ว');
      this.countHolidayAPI = callApiCountHoliday.datas;
      console.log(this.monthCreate);
      console.log(this.countHolidayAPI);
      // this.countSpecial = this.countHolidayAPI[0].special;
    }else{
      console.log('*****ยังไม่มีการกำหนดวันหยุด');
      callApiCountHoliday.datas.push({sunday: 0,
        special: 0,
        holiday: 0});
      this.countHolidayAPI = callApiCountHoliday.datas;
      console.log(this.countHolidayAPI);
      // this.countSpecial = this.countHolidayAPI[0].special;
    }
    // this.countHolidayAPI = callApiCountHoliday.datas;
    this.countSpecial = this.countHolidayAPI[0].special+this.countHolidayAPI[0].sunday;;
    this.countHoliday = this.countHolidayAPI[0].holiday;
    console.log(this.countHolidayAPI);
    this.loadDataHoliday = this.getDataHoliDay(this.dataHolidayAPI);



    const callApiGetCsgCreatePlanDetail = await this.api.getCsgCreatePlanDetail(custid,counterid,this.empId,periodplan);
    console.log(callApiGetCsgCreatePlanDetail);


    console.log(this.saveData);

    console.log(this.daysConfig);
    console.log(callApiGetCsgCreatePlanDetail.datas);

    console.log('?????',this.dataHoliday);

    for (const data of callApiGetCsgCreatePlanDetail.datas) {


      // console.log(data);
      // console.log(this.dayStartFromY, this.dayStartFromM, this.dayStartFromD);

      // $(".select-date-end-task-add").change(async function () {
      //   const start = $(".select-date-start-task-add").val();
      //   const end = $(this).val();
      //   const days = await diffDate(start, end);
      //   $(".project-task-day-add").val(days);
      // });

      // function diffDate(start, end) {
        // try {
          const date = (moment(new Date()).format('DD/MM/YYYY'));
          // console.log(date);
          let date_res = moment(data.date, "DD-MM-YYYY");
          let this_day = moment(date, "DD-MM-YYYY");

          const diff = date_res.diff(this_day, "days");
          const days = diff;
          // console.log(days);
          // return days;
        // } catch (error) {
        //   console.error(error);
        // }
      // }
      // console.log("??????",data);
      let typecss: any;
      if (days < 0) {
        typecss = data.worktype === 'W1' ? 'custom-calendar workday oct' : data.worktype === 'W2' ? 'custom-calendar workholiday oct' : data.worktype === 'V1' ? 'custom-calendar offday oct' : data.worktype === 'LE' ? 'custom-calendar expected-holiday oct' : '';
      }else{
        typecss = data.worktype === 'W1' ? 'custom-calendar workday' : data.worktype === 'W2' ? 'custom-calendar workholiday' : data.worktype === 'V1' ? 'custom-calendar offday' : data.worktype === 'LE' ? 'custom-calendar expected-holiday' : '';
      }

      console.log(data);

      !data.timetype ? '' :  dataCsgCreatePlan.push({
        "date": moment(data.date,'DD/MM/YYYY').format('YYYY-MM-DD'),
        // "cssClass": days < 0 ? "custom-calendar workday oct" : "custom-calendar workday",
        "cssClass": `${typecss}`,
        "worktype": `${data.worktype}`,
        // "subTitle": `${data.worktype} ${data.otfrom !== '' ? 'OT' : ''}`,
        "subTitle": `${data.timefrom === '' ? data.worktype : data.timefrom } ${data.otfrom !== '' ? 'OT' : ''}`,
        "timefrom": data.timefrom,
        "timeto"  : data.timeto,
        "timeotfrom": data.otfrom,
        "timeotto"  : data.otto,
      });
      // this.daysConfig.push({ ...data, date: moment(data.date).format('YYYY-MM-DD') });
    }
    this.daysConfig = dataCsgCreatePlan;

  //   this.daysConfig.push({
  //     "date": "2022-09-27",
  //     "cssClass": "custom-calendar workday",
  //     "subTitle": "A8"
  // });
    console.log('?????',this.daysConfig);
    this.dataSelectDay = this.daysConfig;

    console.log(dataCsgCreatePlan);
    console.log('?????',this.dataHoliday);
    console.log(dataCsgCreatePlan.length);
    for (const data of this.dataHoliday) {
      // console.log('?????',data.date);
      // console.log('?????',moment(data.date).format('YYYY-MM-DD'));
      console.log('???',data);

      // if (dataCsgCreatePlan.length === 0) {
        data.date = moment(data.date).format('YYYY-MM-DD');
        console.log('??----',data);

        // dataCsgCreatePlan.push(data);
        const searchIndex = dataCsgCreatePlan.findIndex((i) => i.date === data.date);

        console.log(searchIndex);
        console.log(dataCsgCreatePlan[searchIndex]);
        if (dataCsgCreatePlan[searchIndex]) {
          if (dataCsgCreatePlan[searchIndex].worktype === '') {
            dataCsgCreatePlan[searchIndex].cssClass = 'custom-calendar holiday';
          }
        }else{
          dataCsgCreatePlan.push(data);
        }

        // dataCsgCreatePlan[searchIndex].cssClass = dataCsgCreatePlan[searchIndex].worktype !== '' ? 'custom-calendar holiday' : '';
      // }
    }
    console.log(dataCsgCreatePlan);

    let checkCountHoliday = 0;
    for (const item of dataCsgCreatePlan) {
      console.log('????',item);
      if (item.worktype === 'W2' || item.worktype === 'V1') {
        checkCountHoliday++;
      }
    }

    console.log(this.countHoliday);

    console.log(checkCountHoliday);

    this.countHoliday = this.countHolidayAPI[0].holiday - checkCountHoliday;

    console.log(this.dayStartFromY, this.dayStartFromM, this.dayStartFromD);

    const callApiPlan = await this.api.getCSGPlan(this.empId, periodplan);
    this.status_plan = callApiPlan.status_plan;
    console.log(callApiPlan);
    this.dataAssigndate = callApiPlan.datas;


    // from: new Date(this.dayStartFromY, this.dayStartFromM, this.dayStartFromD),
    this.optionsMulti2 = {
      from: new Date(this.dayStartFromY, this.dayStartFromM, this.dayStartFromD),
      disableWeeks: this.status_plan === 'N' ? '' : this.status_plan === 'X' ? '' : [0,1,2,3,4,5,6],
      monthFormat: 'ปี YYYY เดือน MMM',
      monthPickerFormat: ['ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย.', 'ก.ค.', 'ส.ค.', 'ก.ย.', 'ต.ค.', 'พ.ย.', 'ธ.ค.'],
      weekdays: ['อา', 'จ', 'อ', 'พ', 'พฤ', 'ศ', 'ส'],
      weekStart: 0,
      showToggleButtons: true,
      showMonthPicker: true,
      // pickMode: 'multi',
      daysConfig: dataCsgCreatePlan,
    };

    this.getdetailDay(this.dataAssigndate);

    // await this.ssasds(datasTest);
    // this.values = valToMonths;
    // return this.dataHoliday;
    // this.editValue()
  }


  async getUserInfo(): Promise<void> {
    const info = await this.storage.get('USER_INFO');
    this.empId = info?.emp_id;
    // this.loading.dismiss();
  }

  segmentChanged(ev: any) {
    console.log(ev.detail.value);
    this.tap = ev.detail.value;
  }

  getDataHoliDay(dataApi: any) {
    this.dataHoliday = [];
    console.log('dataApi',dataApi);
    dataApi.forEach((e: any) => {
      // console.log(e);
      // const dateC = this.moment.formatDate(e.date, 'MM-DD-YYYY', 'th', 'DD/MM/YYYY');
      // const dateC = moment(e.date, 'DD/MM/YYYY').format('MM-DD-YYYY');
      const dateC = moment(e.date, 'DD/MM/YYYY').format('YYYY-MM-DD');
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



  getdetailDay(data: any) {


    console.log(this.daysConfig);
    console.log(data);


  // this.dataAssigndate = this.daysConfig;
    // return;
    const valToMonths = [];
    for (let index = 0; index < this.dataAssigndate.length; index++) {
      // for (let [index, item]  of this.loadData.entries()) {

        const date = (moment(new Date()).format('DD/MM/YYYY'));
        console.log(this.dataAssigndate[index].assigndate);
        let date_res = moment(this.dataAssigndate[index].assigndate, "DD-MM-YYYY");
        let this_day = moment(date, "DD-MM-YYYY");


        console.log(date_res);
        console.log(this_day);

        const diff = date_res.diff(this_day, "days");
        const days = diff;

        console.log(days);

        // if (days < 0) {
          this.dataAssigndate[index].typecancel = days < 0 ? `N` : `Y`;
        // }else{
        // }

    // }
      console.log(this.dataAssigndate[index]);

      console.log(this.counterMenu);


      if (this.dataAssigndate[index].counterid === this.counterMenu) {
        valToMonths.push({
          image:
            data[index].worktype === 'W1'
              ? 'assets/images/csg-plan/calendar_w.png'
              : data[index].worktype === 'W2'
              ? 'assets/images/csg-plan/calendar_h1.png'
              : data[index].worktype === 'V1'
              ? 'assets/images/csg-plan/calendar_o.png'
              : data[index].worktype === 'LE'
              ? 'assets/images/csg-plan/calendar_o3.png'
              : 'assets/images/csg-plan/calendar_s.svg',
          date: `${moment(data[index].assigndate, 'DD/MM/YYYY').format('dd')} ${data[index].assigndate}`,
          value: data[index].workdesc,
          stateOt: data[index].sumot !== 0 && data[index].sumot != null ? 'Y' : 'N',
          worktype: data[index].worktype,
          workfrom:
            data[index].workfrom !== ''
              ? data[index].workfrom.substring(0, 2) + '.' + data[index].workfrom.substring(2, 4)
              : data[index].workfrom,
          workto:
            data[index].workto !== ''
              ? data[index].workto.substring(0, 2) + '.' + data[index].workto.substring(2, 4)
              : data[index].workto,
          otfrom:
            data[index].otfrom !== ''
              ? data[index].otfrom.substring(0, 2) + '.' + data[index].otfrom.substring(2, 4)
              : data[index].otfrom,
          otto:
            data[index].otto !== ''
              ? data[index].otto.substring(0, 2) + '.' + data[index].otto.substring(2, 4)
              : data[index].otto,
          custid: data[index].custid,
          custname: data[index].custname,
          counterid: data[index].counterid,
          countername: data[index].countername,
          typecancel: data[index].typecancel
        });
      }

    }
    console.log(valToMonths);

    this.values = valToMonths;

    // console.log(moment(this.values[0].date.substring(3), 'DD/MM/YYYY'));
    // console.log(this.values[0].date.substring(3));

    // const jj =  this.values.sort((a, b) => moment(b.date.substring(3), 'DD/MM/YYYY').unix() - moment(a.date.substring(3), 'DD/MM/YYYY').unix());
    // console.log(jj);

    return this.values;
  }

  async getHolidayForMonths(events) {
    // this.getDatasCSGCreatePlan(this.monthCreate, this.custid, this.counterMenu);

    this.countSelect = 0;
    this.dataHoliday = [];
    // this.monthCreate = moment(events.newMonth.string).format('YYYYMM');
    this.monthCreate = moment(events.newMonth.string).format('YYYYMM');
    this.reStartDays();
    console.log(events.newMonth.string);
    // this.monthCreate = this.moment.formatDate(events.newMonth.string, 'YYYYMM');

    const callApiCountHoliday = await this.api.getCountHoliday(this.monthCreate, this.empId);
    console.log(callApiCountHoliday.datas);
    console.log(callApiCountHoliday.datas.length);
    if (callApiCountHoliday.datas.length !== 0) {
      console.log('มีการกำหนดวันหยุดพิเศษเดือนนี้แล้ว');
      this.countHolidayAPI = callApiCountHoliday.datas;
      console.log(this.monthCreate);
      console.log(this.countHolidayAPI);
      // this.countSpecial = this.countHolidayAPI[0].special;
    }else{
      console.log('*****ยังไม่มีการกำหนดวันหยุด');
      callApiCountHoliday.datas.push({sunday: 0,
        special: 0,
        holiday: 0});
      this.countHolidayAPI = callApiCountHoliday.datas;
      console.log(this.countHolidayAPI);
      // this.countSpecial = this.countHolidayAPI[0].special;
    }

    this.countSpecial = this.countHolidayAPI[0].special+this.countHolidayAPI[0].sunday;
    this.countHoliday = this.countHolidayAPI[0].holiday;


    this.MDayCheck = moment(events.newMonth.string).format('MM');


    console.log(this.monthCreate);

    const callApi = await this.api.getHolidayCSGPlan(this.monthCreate);
    this.dataHolidayAPI = callApi.datas;
    // this.loadData = this.getDataDateM(this.dataHolidayAPI)
    console.log('?????',this.loadDataHoliday);

    const valToMonths = [];
    // cssClass: e.worktype!='W1' ? 'custom-calendar danger' : 'custom-calendar normal',
    console.log(this.dataHolidayAPI);
    this.dateAll = callApi.datas;

    for (const index in this.dataHolidayAPI.length) {
      if (
        this.dataHolidayAPI[index].iccholiday === '1' &&
        this.dataHolidayAPI[index].dayofweek !== '1' &&
        this.dataHolidayAPI[index].dayofweek !== '7'
      ) {
        console.log('<><><<><><><');

        const dateC = moment(this.dataHolidayAPI[index].date, 'DD/MM/YYYY').format('MM-DD-YYYY');
        this.dataHoliday.push({
          date: new Date(dateC),
          cssClass: 'custom-calendar holiday',
        });
      }
    }
    console.log(this.dataHoliday);

    console.log(this.daysConfig);

    console.log('this.monthCreate',this.monthCreate);
    console.log('this.custid',this.custid);
    console.log('this.counterMenu',this.counterMenu);

    this.getDatasCSGCreatePlan(this.monthCreate, this.custid, this.counterMenu);


    // this.optionsMulti2 = {
    //   from: new Date(this.dayStartFromY, this.dayStartFromM, this.dayStartFromD),
    //   monthFormat: 'ปี YYYY เดือน MMM',
    //   monthPickerFormat: ['ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย.', 'ก.ค.', 'ส.ค.', 'ก.ย.', 'ต.ค.', 'พ.ย.', 'ธ.ค.'],
    //   weekdays: ['อา', 'จ', 'อ', 'พ', 'พฤ', 'ศ', 'ส'],
    //   weekStart: 0,
    //   showToggleButtons: true,
    //   showMonthPicker: true,
    //   // pickMode: 'multi',
    //   daysConfig: this.daysConfig,
    // };

    // this.values = valToMonths;
    return this.dataHoliday;
    // this.editValue()
  }

  changeBT(v: any) {
    this.status = v.detail.value;
    console.log(v);
  }

  changeBT2(v: any) {
    this.statusType = v.detail.value;
    console.log(v);
    console.log(this.statusType);
  }


  onChange2(ev: any) {
    let checkCountHoliday = 0;
    console.log('onChange2', ev);
    console.log('????',this.status);


      // console.log('this.countHoliday',this.countHoliday);

    console.log('this.timeOTFrom----',this.timeOTFrom);
    console.log('this.timeOTTo----',this.timeOTTo);
    console.log('this.otType-----',this.otType);

    const value = moment(ev._d, 'DD/MM/YYYY').format('YYYY-MM-DD');
    const MCheck = moment(ev._d, 'DD/MM/YYYY').format('MM');
    const DCheck = moment(ev._d, 'DD/MM/YYYY').format('DD');
    console.log(MCheck, this.MDayCheck);

    console.log(this.daysConfig);

    console.log(this.values);


    if (this.daysConfig.length === 0) {
      const init = this.dataHoliday;
      console.log('////',this.dataHoliday);

      for (const x of init) {
        this.daysConfig.push({ ...x, date: moment(x.date).format('YYYY-MM-DD') });
      }
    }
    console.log(this.daysConfig);
    const searchIndex = this.daysConfig.findIndex((i) => i.date === value);

    console.log(this.status);
    console.log(searchIndex);
    console.log(this.statusType);
    console.log(this.check);

    // let gg = html(`<br>${searchIndex}`);

    if (searchIndex < 0) {
      this.countSelect ++;


        // if (this.status === 'W2') {
        //   this.countHoliday--;
        //   checkCountHoliday = this.countHoliday;
        // }
      if (this.status === 'V1') {
        this.daysConfig.push({
          date: moment(ev._d, 'DD/MM/YYYY').format('YYYY-MM-DD'),
          cssClass: 'custom-calendar offday',
          subTitle: `${this.status} `,
          worktype: `${this.status}`,
          timefrom: '',
          timeto: '',
          timeotfrom: '',
          timeotto: '',
          // marked: true,
          // title: `A8 ${DCheck} OT`,
        });
      }else if(this.status === 'LE'){
        this.daysConfig.push({
          date: moment(ev._d, 'DD/MM/YYYY').format('YYYY-MM-DD'),
          cssClass: 'custom-calendar expected-holiday',
          subTitle: `${this.status} `,
          worktype: `${this.status}`,
          timefrom: '',
          timeto: '',
          timeotfrom: '',
          timeotto: '',
          // marked: true,
          // title: `A8 ${DCheck} OT`,
        });
      }else{
        this.daysConfig.push({
          date: moment(ev._d, 'DD/MM/YYYY').format('YYYY-MM-DD'),
          cssClass:
            this.status === 'W1'
              ? 'custom-calendar workday'
              : this.status === 'V1'
              ? 'custom-calendar offday'
              : this.status === 'W2'
              ? 'custom-calendar workholiday'
              : this.status === 'LE'
              ? 'custom-calendar expected-holiday'
              : '',
          // subTitle: `${this.statusType} ${this.otType === 'OT' ? 'OT' : ''}`,
          subTitle: `${this.timeFrom.substring('0','2')}${this.timeFrom.substring('3')} ${this.otType === 'OT' ? 'OT' : ''}`,
          worktype: `${this.status}`,
          timefrom: `${this.timeFrom.substring('0','2')}${this.timeFrom.substring('3')}`,
          timeto:   `${this.timeTo.substring('0','2')}${this.timeTo.substring('3')}`,
          timeotfrom: this.check === true ? `${this.timeOTFrom.substring('0','2')}${this.timeOTFrom.substring('3')}` : '',
          timeotto: this.check === true ? `${this.timeOTTo.substring('0','2')}${this.timeOTTo.substring('3')}` : '',
          // marked: true,
          // title: `A8 ${DCheck} OT`,
        });


      }

    } else if (searchIndex >= 0) {
      console.log(this.check);
      this.countSelect --;
      console.log(this.daysConfig[searchIndex].cssClass,this.status);
      console.log(this.daysConfig[searchIndex]);

      const fromTimeFrom = `${this.timeFrom.substring('0','2')}${this.timeFrom.substring('3')}`;
      const fromTimeTo = `${this.timeTo.substring('0','2')}${this.timeTo.substring('3')}`;

      const fromTimeOTFrom  = this.check === true ? `${this.timeOTFrom.substring('0','2')}${this.timeOTFrom.substring('3')}` : '';
      const fromTimeOTTo    = this.check === true ? `${this.timeOTTo.substring('0','2')}${this.timeOTTo.substring('3')}` : '';
      this.daysConfig[searchIndex].worktype = this.status;

      console.log('?????',this.daysConfig);
      console.log('?????',this.daysConfig[searchIndex]);



      console.log('?????',this.status);
      if (this.status === 'W1') {
        console.log('TYPE W1');
        console.log(this.daysConfig[searchIndex].cssClass);
        if (this.daysConfig[searchIndex].cssClass === 'custom-calendar workday') {
            console.log('cssClass = custom-calendar workday');
            if (this.daysConfig[searchIndex].timefrom !== fromTimeFrom || this.daysConfig[searchIndex].timeto !== fromTimeTo) {
              console.log(' !== fromTime ');
              console.log('11111111111111111111');
              console.log(this.daysConfig[searchIndex].timefrom,fromTimeFrom);

              this.daysConfig[searchIndex].timefrom = fromTimeFrom;
              this.daysConfig[searchIndex].timeto = fromTimeTo;
              this.daysConfig[searchIndex].subTitle = `${fromTimeFrom} `;
              if(this.check === true){
                this.daysConfig[searchIndex].timeotfrom = fromTimeOTFrom;
                this.daysConfig[searchIndex].timeotto = fromTimeOTTo;
                // this.daysConfig[searchIndex].subTitle = `${this.status} ${this.check === true ? 'OT' : ''}`;
                this.daysConfig[searchIndex].subTitle = `${this.timeFrom.substring('0','2')}${this.timeFrom.substring('3')} ${this.check === true ? 'OT' : ''}`;
              }
            }else{
              console.log('cssClass != custom-calendar workday');
              if(this.check === true){
                if (this.daysConfig[searchIndex].timeotfrom !== fromTimeOTFrom || this.daysConfig[searchIndex].timeotto !== fromTimeOTTo) {
                  console.log(' !== fromTime ');
                  this.daysConfig[searchIndex].timeotfrom = fromTimeOTFrom;
                  this.daysConfig[searchIndex].timeotto = fromTimeOTTo;
                  // this.daysConfig[searchIndex].subTitle = `${this.status} ${this.check === true ? 'OT' : ''}`;
                  this.daysConfig[searchIndex].subTitle = `${this.timeFrom.substring('0','2')}${this.timeFrom.substring('3')} ${this.check === true ? 'OT' : ''}`;
                }else{
                  this.daysConfig.splice(searchIndex, 1);
                }
              }else{
                // if (this.daysConfig[searchIndex].subTitle !== 'W1 OT') {
                if (this.daysConfig[searchIndex].subTitle !== `${this.timeFrom.substring('0','2')}${this.timeFrom.substring('3')} OT`) {

                  this.daysConfig.splice(searchIndex, 1);
                }else{

                  this.daysConfig[searchIndex].timeotfrom = fromTimeOTFrom;
                  this.daysConfig[searchIndex].timeotto = fromTimeOTTo;
                  // this.daysConfig[searchIndex].subTitle = `${this.status} `;
                  this.daysConfig[searchIndex].subTitle = `${this.timeFrom.substring('0','2')}${this.timeFrom.substring('3')} `;
                }
              }
            }
        }else{
            console.log('no workday');
            this.daysConfig[searchIndex].cssClass = 'custom-calendar workday';
            this.daysConfig[searchIndex].timefrom = fromTimeFrom;
              this.daysConfig[searchIndex].timeto = fromTimeTo;
              if(this.check === true){
                this.daysConfig[searchIndex].timeotfrom = fromTimeOTFrom;
                this.daysConfig[searchIndex].timeotto = fromTimeOTTo;
                // this.daysConfig[searchIndex].subTitle = `${this.status} ${this.check === true ? 'OT' : ''}`;
                this.daysConfig[searchIndex].subTitle = `${this.timeFrom.substring('0','2')}${this.timeFrom.substring('3')} ${this.check === true ? 'OT' : ''}`;
              }else{
                this.daysConfig[searchIndex].timeotfrom = '';
                this.daysConfig[searchIndex].timeotto = '';
                // this.daysConfig[searchIndex].subTitle = `${this.status} `;
                this.daysConfig[searchIndex].subTitle = `${this.timeFrom.substring('0','2')}${this.timeFrom.substring('3')} `;
              }
        }
      }else if (this.status === 'W2'){
        console.log('TYPE W2');
        console.log(this.daysConfig[searchIndex].cssClass);

        if (this.daysConfig[searchIndex].cssClass === 'custom-calendar workholiday') {
            console.log('cssClass = custom-calendar workholiday');
            if (this.daysConfig[searchIndex].timefrom !== fromTimeFrom || this.daysConfig[searchIndex].timeto !== fromTimeTo) {
              console.log(' !== fromTime ');
              this.daysConfig[searchIndex].timefrom = fromTimeFrom;
              this.daysConfig[searchIndex].timeto = fromTimeTo;
              if(this.check === true){
                this.daysConfig[searchIndex].timeotfrom = fromTimeOTFrom;
                this.daysConfig[searchIndex].timeotto = fromTimeOTTo;
                // this.daysConfig[searchIndex].subTitle = `${this.status} ${this.check === true ? 'OT' : ''}`;
                this.daysConfig[searchIndex].subTitle = `${this.timeFrom.substring('0','2')}${this.timeFrom.substring('3')} ${this.check === true ? 'OT' : ''}`;
              }
            }else{
              console.log('cssClass != custom-calendar workholiday');
              if(this.check === true){
                if (this.daysConfig[searchIndex].timeotfrom !== fromTimeOTFrom || this.daysConfig[searchIndex].timeotto !== fromTimeOTTo) {
                  console.log(' !== fromTime ');
                  this.daysConfig[searchIndex].timeotfrom = fromTimeOTFrom;
                  this.daysConfig[searchIndex].timeotto = fromTimeOTTo;
                  // this.daysConfig[searchIndex].subTitle = `${this.status} ${this.check === true ? 'OT' : ''}`;
                  this.daysConfig[searchIndex].subTitle = `${this.timeFrom.substring('0','2')}${this.timeFrom.substring('3')} ${this.check === true ? 'OT' : ''}`;
                }else{
                  this.daysConfig[searchIndex].timeotfrom = '';
                  this.daysConfig[searchIndex].timeotto = '';
                  this.daysConfig.splice(searchIndex, 1);
                }
              }else{
                // if (this.daysConfig[searchIndex].subTitle !== 'W2 OT') {
                if (this.daysConfig[searchIndex].subTitle !== `${this.timeFrom.substring('0','2')}${this.timeFrom.substring('3')} OT`) {
                  this.daysConfig[searchIndex].timeotfrom = '';
                  this.daysConfig[searchIndex].timeotto = '';
                  this.daysConfig.splice(searchIndex, 1);

                }else{
                  this.daysConfig[searchIndex].timeotfrom = fromTimeOTFrom;
                  this.daysConfig[searchIndex].timeotto = fromTimeOTTo;
                  // this.daysConfig[searchIndex].subTitle = `${this.status} `;
                  this.daysConfig[searchIndex].subTitle = `${this.timeFrom.substring('0','2')}${this.timeFrom.substring('3')} `;
                }
              }
            }
        }else{
            console.log('no workholiday');
            this.daysConfig[searchIndex].cssClass = 'custom-calendar workholiday';
            this.daysConfig[searchIndex].timefrom = fromTimeFrom;
              this.daysConfig[searchIndex].timeto = fromTimeTo;
              if(this.check === true){
                this.daysConfig[searchIndex].timeotfrom = fromTimeOTFrom;
                this.daysConfig[searchIndex].timeotto = fromTimeOTTo;
                // this.daysConfig[searchIndex].subTitle = `${this.status} ${this.check === true ? 'OT' : ''}`;
                this.daysConfig[searchIndex].subTitle = `${this.timeFrom.substring('0','2')}${this.timeFrom.substring('3')} ${this.check === true ? 'OT' : ''}`;
              }else{
                this.daysConfig[searchIndex].timeotfrom = '';
                this.daysConfig[searchIndex].timeotto = '';
                // this.daysConfig[searchIndex].subTitle = `${this.status} `;
                this.daysConfig[searchIndex].subTitle = `${this.timeFrom.substring('0','2')}${this.timeFrom.substring('3')} `;
              }

        }
      }else if (this.status === 'V1') {
        console.log(this.daysConfig[searchIndex].cssClass);
        console.log(this.status);

        if (this.daysConfig[searchIndex].cssClass !== 'custom-calendar offday') {
          console.log('!= custom-calendar offday');
          this.daysConfig[searchIndex].cssClass = 'custom-calendar offday';
          this.daysConfig[searchIndex].timefrom = '';
          this.daysConfig[searchIndex].timeto = '';
          this.daysConfig[searchIndex].timeotfrom = '';
          this.daysConfig[searchIndex].timeotto = '';
          this.daysConfig[searchIndex].subTitle = `${this.status} `;
          this.daysConfig[searchIndex].worktype = this.status;
        }else{
          console.log('= custom-calendar offday');
          this.daysConfig.splice(searchIndex, 1);
        }
      }else if (this.status === 'LE') {
        console.log(this.daysConfig[searchIndex].cssClass);
        console.log(this.status);

        if (this.daysConfig[searchIndex].cssClass !== 'custom-calendar expected-holiday') {
          console.log('!= custom-calendar expected-holiday');
          this.daysConfig[searchIndex].cssClass = 'custom-calendar expected-holiday';
          this.daysConfig[searchIndex].timefrom = '';
          this.daysConfig[searchIndex].timeto = '';
          this.daysConfig[searchIndex].timeotfrom = '';
          this.daysConfig[searchIndex].timeotto = '';
          this.daysConfig[searchIndex].subTitle = `${this.status} `;
          this.daysConfig[searchIndex].worktype = this.status;
        }else{
          console.log('= custom-calendar expected-holiday');
          this.daysConfig.splice(searchIndex, 1);
        }
      }




      console.log(this.daysConfig);
      console.log(searchIndex);
      // if (this.values.length > 0) {
      //   const searchIndexInValue = this.values.findIndex((i) => i.date === moment(value,'YYYY-MM-DD').format('DD/MM/YYYY'));
      //   console.log(searchIndexInValue);
      // }

      // console.log(this.values);
    }

    console.log(this.daysConfig);
    console.log(this.daysConfig[0]);
    // console.log(this.daysConfig[searchIndex]);

    // this.sss = [{date: '2022-09-14', cssClass: 'custom-calendar workday', defaultSubtitle: 'W2'}];


    for (const item of this.daysConfig) {
      console.log('????',item);
      if (item.worktype === 'W2' || item.worktype === 'V1') {
        checkCountHoliday++;
      }
    }

    console.log(this.countHoliday);

    console.log(checkCountHoliday);

    this.countHoliday = this.countHolidayAPI[0].holiday - checkCountHoliday;

    console.log('after',this.countHoliday);
    console.log('this.daysConfig',this.daysConfig);
    console.log('value',value);

    const searchIndexInDaysConfig = this.daysConfig.findIndex((i) => i.date === value);
    console.log(searchIndexInDaysConfig);

    console.log(value);


    // const searchIndexInValues = this.values.findIndex((i) => i.date === moment(value,'YYYY-MM-DD').format('DD/MM/YYYY'));

    // console.log(searchIndexInValues);
    if (this.countHoliday < 0) {
      console.log(this.daysConfig[searchIndexInDaysConfig]);
      this.daysConfig.splice(searchIndexInDaysConfig, 1);
      this.countHoliday = 0;
    }

    console.log('after this.daysConfig',this.daysConfig);

    // this.optionsMulti2 = {
    //   from: new Date(this.dayStartFromY, this.dayStartFromM, this.dayStartFromD),
    //   monthFormat: 'ปี YYYY เดือน MMM',
    //   monthPickerFormat: ['ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย.', 'ก.ค.', 'ส.ค.', 'ก.ย.', 'ต.ค.', 'พ.ย.', 'ธ.ค.'],
    //   weekdays: ['อา', 'จ', 'อ', 'พ', 'พฤ', 'ศ', 'ส'],
    //   weekStart: 0,
    //   showToggleButtons: true,
    //   showMonthPicker: true,
    //   // color: '#ffffff',
    //   // marked: true,
    //   // pickMode: 'multi',
    //   // disableWeeks: [0, 6],
    //   // defaultTitle: ['111'],
    //   // defaultSubtitle: ['11','22'],
    //   daysConfig: this.daysConfig,
    //   // daysConfig: this.sss,
    // };

    // const callApiPlan = await this.api.getCSGPlan(this.empId, this.monthCreate);
    // this.status_plan = callApiPlan.status_plan;
    // console.log(callApiPlan);

    // from: new Date(this.dayStartFromY, this.dayStartFromM, this.dayStartFromD),
    this.optionsMulti2 = {
      from: new Date(this.dayStartFromY, this.dayStartFromM, this.dayStartFromD),
      disableWeeks: this.status_plan === 'N' ? '' : this.status_plan === 'X' ? '' : [0,1,2,3,4,5,6],
      monthFormat: 'ปี YYYY เดือน MMM',
      monthPickerFormat: ['ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย.', 'ก.ค.', 'ส.ค.', 'ก.ย.', 'ต.ค.', 'พ.ย.', 'ธ.ค.'],
      weekdays: ['อา', 'จ', 'อ', 'พ', 'พฤ', 'ศ', 'ส'],
      weekStart: 0,
      showToggleButtons: true,
      showMonthPicker: true,
      // pickMode: 'multi',
      daysConfig: this.daysConfig,
    };



    console.log(this.dataSelectDay);
    console.log(this.daysConfig);
    this.dataSelectDay = [];
    for (const item of this.daysConfig) {
      console.log(item.cssClass);
      if (item.cssClass !== 'custom-calendar holiday') {
        this.dataSelectDay.push(item);
      }
    }
    // if (this.daysConfig.length !== this.dataSelectDay.length) {
      // console.log(moment(this.dataSelectDay[1].date, 'DD/MM/YYYY').format('YYYY-MM-DD'));
    // }
    console.log(this.countHoliday);
    console.log(this.countHolidayAPI[0].holiday);

    console.log(this.daysConfig);
    console.log(this.values);
    this.values = [];
    for (const item of this.daysConfig) {
      if (item.subTitle && item.worktype !== '') {
        console.log('มี');

        console.log( moment(item.date, 'YYYY-MM-DD').format('dd'));


        this.values.push({
          "image"   : item.worktype === 'W1'
          ? 'assets/images/csg-plan/calendar_w.png'
          : item.worktype === 'W2'
          ? 'assets/images/csg-plan/calendar_h1.png'
          : item.worktype === 'V1'
          ? 'assets/images/csg-plan/calendar_o.png'
          : item.worktype === 'LE'
          ? 'assets/images/csg-plan/calendar_o3.png'
          : '',
          "date"    :`${moment(item.date, 'YYYY-MM-DD').format('dd')} ${moment(item.date, 'YYYY-MM-DD').format('DD/MM/YYYY')}`,
          "value"   : item.worktype === 'W1'
          ? 'วันทำงานปกติ'
          : item.worktype === 'W2'
          ? 'HOLIDAY'
          : item.worktype === 'V1'
          ? 'วันหยุดประจำสัปดาห์'
          : item.worktype === 'LE'
          ? 'ลางาน'
          : '',
          "worktype": `${item.worktype}`,
          "workfrom": item.timefrom === '' ? '' : `${item.timefrom.substring('0','2')}:${item.timefrom.substring('2')}`,
          "workto"  : item.timeto === '' ? '' : `${item.timeto.substring('0','2')}:${item.timeto.substring('2')}`,
          "otfrom"  : item.timeotfrom === '' ? '' : `${item.timeotfrom.substring('0','2')}:${item.timeotfrom.substring('2')}`,
          "otto"    : item.timeotto === '' ? '' : `${item.timeotto.substring('0','2')}:${item.timeotto.substring('2')}`,
          "counterid": `${this.counterid}`,
        });
      }else{
        console.log('ไม่มี');

      }

    }

    // console.log(moment(this.values[0].date.substring(3), 'DD/MM/YYYY'));
    // console.log(this.values[0].date.substring(3));

    const jj =  this.values.sort((b, a) => moment(b.date.substring(3), 'DD/MM/YYYY').unix() - moment(a.date.substring(3), 'DD/MM/YYYY').unix());
    console.log(jj);

    console.log(this.values);
  }

  cancelPlan() {
    console.log('cancelPlan');
    // const navigationExtras:NavigationExtras = {
    //   state: {name: "trebtreb"}
    // }
    this.router.navigate(['csg-plan']);
  }

  async popoverShopMenu(ev: any) {
    console.log(ev);
    console.log(this.custidMenu);
    console.log(this.counterMenu);
      const popover = await this.createPlanPopover.create({
        component: CreatePlanMenuPopoverComponent,
        cssClass: 'popoverMenu',
        componentProps: {
          // props: { type: ev, dataCounter: !this.counters ? '' : this.counters },
          props: { type: ev, dataCounter: !this.counters ? '' : this.counters, custid: !this.custid ? '' : this.custid },
          props2: {counterid: !this.counterMenu ? '' : this.counterMenu},
          props3: {time_from: '', time_to: ''},
          props4: {worktype: '', worktypename: '', worktypecolor: ''},
        },
        event: ev,
        translucent: true,
      });

    popover.onDidDismiss().then(async (param: any) => {
      if (param.role !== 'backdrop' && param.data.dismissed) {
        const val = param.data;
        console.log('----',val);
        if (ev === 'shop') {
          this.saveData.shop.value = val.value;
          this.saveData.shop.name = val.name;

          this.saveData.counter.value = null;
          this.saveData.counter.name = null;

          this.saveData.timetype.value = null;
          this.saveData.timetype.name = null;

          this.counters = val.counter;
          this.custidMenu = val.name;
          this.custid = val.value;
          this.statusType = null;
          // this.monthCreate = moment().format('YYYYMM');
          if (this.startDate) {
            this.monthCreate = moment(this.paramsMonthBefore.monthToCreate,'YYYYMM').format('YYYYMM');
          }else{
            this.monthCreate = moment().format('YYYYMM');
          }
          console.log('ssss');

          console.log(this.empId,this.custid);

          const callApi2 = await this.api.getCouterShopCSGPlan(this.empId,this.custid);
          console.log(callApi2);
          console.log(callApi2.datas.length);


          if (callApi2.datas.length === 1) {
            this.saveData.counter.value = callApi2.datas[0].counterid;
            this.saveData.counter.name = `${callApi2.datas[0].counterid} ${callApi2.datas[0].countername}`;
            this.counterMenu = callApi2.datas[0].counterid;
          }else{
            this.saveData.counter.value = null;
            this.saveData.counter.name = null;
          }
          console.log(this.monthCreate, this.custid, this.counterMenu);
          this.reStartDays();
        }
        console.log(this.custidMenu);
        console.log('custid', this.custid);

        if (ev === 'counter') {
          console.log('////', val);
          console.log('>>>>', this.saveData.counter);

          this.saveData.counter.value = val.value;
          this.saveData.counter.name = val.name;
          this.counterMenu = val.value;

          this.saveData.timetype.value = null;
          this.saveData.timetype.name = null;
          this.statusType = null;
          this.countSelect = 0;
          // this.reStartDays();
          console.log(this.monthCreate, this.custid, this.counterMenu);


          this.getDatasCSGCreatePlan(this.monthCreate, this.custid, this.counterMenu);
        }

        if (ev === 'timetype') {

          console.log('////', val);
          console.log('>>>>', this.saveData.timetype);
          console.log('ev',ev);

          this.saveData.timetype.value = val.value;
          this.saveData.timetype.name = val.name;
          // this.counterMenu = val.value;
          this.statusType = val.value;

          console.log(val.time_from.substring(0, 2));
          console.log(val.time_from.substring(2));
          console.log(`${val.time_from.substring(0, 2)}:${val.time_from.substring(2, 4)}`);

          this.otFrom = `${val.time_from.substring(0, 2)}:${val.time_from.substring(2, 4)}`;
          this.otTo = `${val.time_to.substring(0, 2)}:${val.time_to.substring(2, 4)}`;

          if (this.check !== true) {
            this.timeOTFrom = '';
            this.timeOTTo = '';
          }else{
            this.timeOTFrom = this.otFrom;
            this.timeOTTo = this.otTo;
          }
          // this.timeOTFrom = this.otFrom;
          // this.timeOTTo = this.otTo;
          console.log('********************',this.monthCreate);
          console.log('???????????',this.daysConfig);
        }

        if (ev === 'worktype') {
          console.log('////');
          console.log(val);
          console.log(val.worktype);
          console.log(this.saveData.worktype);
          this.saveData.worktype.value  = val.worktype;
          this.saveData.worktype.name   = val.worktypename;
          this.saveData.worktype.color  = val.worktypecolor;
          this.status = val.worktype;
          console.log('event ******* ', this.eventcheck);
          console.log('??????',this.eventcheck.detail);
          console.log('??????',this.eventcheck.detail.checked);
          this.eventcheck.detail.checked = false;
          this.checkEvent(this.eventcheck);


          console.log('check ********* before', this.check);
          // this.check = false;
          console.log('check********* after', this.check);

          // this.getDatasCSGCreatePlan();
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

  async timeOTFromClick($event){
    console.log($event);
    console.log($event.detail.value);
    // this.otTo = $event.detail.value;
    this.timeOTFrom = $event.detail.value;
    // console.log(this.otTo);
    console.log(this.timeOTFrom);

    // this.timeTo = $event.detail.value;
  }
  async timeOTToClick($event){
    console.log($event);
    console.log($event.detail.value);
    this.timeOTTo = $event.detail.value;
  }
  async timeFromClick($event){
    console.log($event);
    console.log($event.detail.value);
    console.log($event.detail.value.substr('0','2'));
    console.log($event.detail.value.substr('0','2'));
    console.log($event.detail.value.substr('3','4'));
    this.calTimeTo($event.detail.value);
    this.timeFrom = $event.detail.value;
  }
  async timeToClick($event){
    console.log($event);
    console.log($event.detail.value);
    this.timeTo = $event.detail.value;
    console.log('????',this.timeTo);
  }

  async calTimeTo(timeFrom){
    // let cTimeFrom = parseInt(timeFrom.substr('0','2'));
    let cTimeFrom = parseInt(timeFrom.substr('0','2'), 10);
    let cTimeTo = timeFrom.substr('3','4');

      if (cTimeFrom<15) {
        console.log('////',cTimeFrom+9);
        console.log('////',cTimeTo);
        this.timeTo = `${cTimeFrom+9}:${cTimeTo}`;
      }else{
        console.log('////',cTimeFrom+9);
        this.timeTo = `23:${cTimeTo}`;
      }
  }

  async createPlan() {
    // console.log("this.dataSelectDay",this.dataSelectDay);
    console.log(this.daysConfig);
    console.log(this.saveData);
    console.log('******-',this.dateAll);
    console.log('***/***-',this.dataSelectDay);

    // console.log('this.monthCreate',this.monthCreate);
    // console.log('empid', this.empId);
    // console.log('flagcount',this.flagcount);
    const dataset = [];

    for (const dataAll of this.dateAll) {
      // console.log(dataAll);
      dataset.push({
        // flagdesc: s.type,
        assigndate: dataAll.date,
        custid: this.saveData.shop.value,
        counterid: this.saveData.counter.value,
        yearmonth: this.monthCreate,
        csgid: this.empId,
        timetype: '',
        timefrom: '',
        timeto: '',
        timeotfrom: '',
        timeotto: '',
        worktype: ''
      });

    }

    console.log('////',this.dataSelectDay);
    console.log('////@@@@@',dataset);
      for (const dataSelectDay of this.dataSelectDay) {

        console.log(dataSelectDay.day);
        if (!dataSelectDay.day) {
          let obj = dataset.find(x => x.assigndate === moment(dataSelectDay.date, 'YYYY-MM-DD').format('DD/MM/YYYY'));
          console.log(obj);
          // console.log(dataSelectDay);
          obj.timetype    = !dataSelectDay.subTitle   ? '' : dataSelectDay.subTitle;
          obj.worktype    = !dataSelectDay.worktype   ? '' : dataSelectDay.worktype;
          obj.timefrom    = !dataSelectDay.timefrom   ? '' : dataSelectDay.timefrom;
          obj.timeto      = !dataSelectDay.timeto     ? '' : dataSelectDay.timeto;
          obj.timeotfrom  = !dataSelectDay.timeotfrom ? '' : dataSelectDay.timeotfrom;
          obj.timeotto    = !dataSelectDay.timeotto   ? '' : dataSelectDay.timeotto;

          // obj.type = dataSelectDay.type;
        }else{
          let obj = dataset.find(x => x.assigndate === dataSelectDay.day);
          console.log('////',obj);
          // console.log(dataSelectDay);
          obj.timetype = !dataSelectDay.timetype   ? '' : dataSelectDay.timetype;
          obj.worktype = dataSelectDay.worktype;
          obj.timefrom = dataSelectDay.timefrom;
          obj.timeto = dataSelectDay.timeto;
          obj.timeotfrom = dataSelectDay.timeotfrom;
          obj.timeotto = dataSelectDay.timeotto;
          // obj.type = dataSelectDay.type;
        }


      }
    // }




    const body = { dataset };

    console.log(body);
      // return;
      const call = await this.api.insertCreatePlanCSGPlan(body);
      console.log(call.error_message);

      // if (call.error_message === 'SUCCESS') {
        const result = this.dataSelectDay.find(({ worktype }) => worktype === 'LE');
        console.log(result);
        let statusLEDay = 'N';
        if (result) {
          console.log('<<<<<<<<<<<<<<<<<<มี<<<<<<');

          statusLEDay = 'Y';
        }else{
          console.log('<<<<<<<<<<<<<<<<<<ไม่มี<<<<<<');
          statusLEDay = 'N';
        }
        this.alertSuccess(call,statusLEDay);
      // }else{

      // }

    // this.navCtrl.back();
  }


  // async presentPopover(ev: any) {
  //   console.log(ev);

  //   const popover = await this.csgPlanPopover.create({
  //     component: CsgPlanPopoverComponent,
  //     event: ev,
  //     translucent: true,
  //   });

  //   popover.onDidDismiss().then(async (param: any) => {
  //     if (param.role !== 'backdrop' && param.data.dismissed) {
  //       const type = param.data.type;
  //       console.log(type);

  //       const navigationExtras: NavigationExtras = {
  //         state: { type },
  //       };
  //       this.router.navigate(['csg-plan/create-plan'], navigationExtras);
  //     }
  //   });

  //   return await popover.present();
  // }

  async selectAll() {
    this.daysConfig = [];

    const callApiGetCsgCreatePlanDetail = await this.api.getCsgCreatePlanDetail(this.custid,this.counterMenu,this.empId,this.monthCreate);
    console.log(callApiGetCsgCreatePlanDetail);

    const fromTimeFrom = `${this.timeFrom.substring('0','2')}${this.timeFrom.substring('3')}`;
    const fromTimeTo = `${this.timeTo.substring('0','2')}${this.timeTo.substring('3')}`;

    const fromTimeOTFrom  = this.check === true ? `${this.timeOTFrom.substring('0','2')}${this.timeOTFrom.substring('3')}` : '';
    const fromTimeOTTo    = this.check === true ? `${this.timeOTTo.substring('0','2')}${this.timeOTTo.substring('3')}` : '';

    if (callApiGetCsgCreatePlanDetail.datas.length !== 0) {
      callApiGetCsgCreatePlanDetail.datas.forEach(i => {
        console.log(i);

        if (i.worktype !== '') {

          console.log( this.dayStartFromD);

          if (moment(i.date, 'DD/MM/YYYY').format('MM') === this.m) {
            if (moment(i.date, 'DD/MM/YYYY').format('DD') >= this.dayStartFromD) {
              this.daysConfig.push({
                date: moment(i.date, 'DD/MM/YYYY').format('YYYY-MM-DD'),
                cssClass: this.status === 'W1' ? 'custom-calendar workday' : this.status === 'V1' ? 'custom-calendar offday' : '',
                // subTitle: `${this.status} ${this.check === true ? 'OT' : ''}`,
                subTitle: `${fromTimeFrom} ${this.check === true ? 'OT' : ''}`,
                timefrom: fromTimeFrom,
                timeto: fromTimeTo,
                timeotfrom: this.check === true ? fromTimeOTFrom : '',
                timeotto:   this.check === true ? fromTimeOTTo : '',
                worktype: this.status,
              });
            }else{
              this.daysConfig.push({
                date: moment(i.date, 'DD/MM/YYYY').format('YYYY-MM-DD'),
                cssClass: i.worktype === 'W1' ? 'custom-calendar workday oct' : i.worktype === 'W2' ? 'custom-calendar workholiday oct' : i.worktype === 'V1' ? 'custom-calendar offday oct' : i.worktype === 'LE' ? 'custom-calendar expected-holiday oct' : '',
                // subTitle: `${i.worktype} ${i.otfrom !== '' ? 'OT' : ''}`,
                subTitle: `${i.timefrom} ${i.otfrom !== '' ? 'OT' : ''}`,
                // subTitle: `${i.timefrom} ${this.check === true ? 'OT' : ''}`,
                timefrom: i.timefrom,
                timeto: i.timeto,
                timeotfrom: i.otfrom,
                timeotto:   i.otto,
                worktype: i.worktype,
              });
            }
          }else if (moment(i.date, 'DD/MM/YYYY').format('MM') > this.m){
            this.daysConfig.push({
              date: moment(i.date, 'DD/MM/YYYY').format('YYYY-MM-DD'),
              cssClass: this.status === 'W1' ? 'custom-calendar workday' : this.status === 'V1' ? 'custom-calendar offday' : '',
              // subTitle: `${this.status} ${this.check === true ? 'OT' : ''}`,
              subTitle: `${fromTimeFrom} ${this.check === true ? 'OT' : ''}`,
              timefrom: fromTimeFrom,
              timeto: fromTimeTo,
              timeotfrom: this.check === true ? fromTimeOTFrom : '',
              timeotto:   this.check === true ? fromTimeOTTo : '',
              worktype: this.status,
            });
          }
        }else{
          console.log('?????????????11111<<<<<<<<<<<<<<<<<<<<<>>>>>>>');
          if (moment(i.date, 'DD/MM/YYYY').format('MM') === this.m) {
            console.log('?????????????222222<<<<<<<<<<<<<<<<<<<<<>>>>>>>');
            if (moment(i.date, 'DD/MM/YYYY').format('DD') >= this.dayStartFromD) {
              console.log('?????????????3333333<<<<<<<<<<<<<<<<<<<<<>>>>>>>');
              this.daysConfig.push({
                date: moment(i.date, 'DD/MM/YYYY').format('YYYY-MM-DD'),
                cssClass: this.status === 'W1' ? 'custom-calendar workday' : this.status === 'V1' ? 'custom-calendar offday' : '',
                subTitle: `${fromTimeFrom} ${this.check === true ? 'OT' : ''}`,
                // subTitle: `${this.status} ${this.check === true ? 'OT' : ''}`,
                timefrom: fromTimeFrom,
                timeto: fromTimeTo,
                timeotfrom: this.check === true ? fromTimeOTFrom : '',
                timeotto:   this.check === true ? fromTimeOTTo : '',
                worktype: this.status,
              });
            }
          }else if(moment(i.date, 'DD/MM/YYYY').format('MM') > this.m){
            this.daysConfig.push({
              date: moment(i.date, 'DD/MM/YYYY').format('YYYY-MM-DD'),
              cssClass: this.status === 'W1' ? 'custom-calendar workday' : this.status === 'V1' ? 'custom-calendar offday' : '',
              // subTitle: `${this.status} ${this.check === true ? 'OT' : ''}`,
              subTitle: `${fromTimeFrom} ${this.check === true ? 'OT' : ''}`,
              timefrom: fromTimeFrom,
              timeto: fromTimeTo,
              timeotfrom: this.check === true ? fromTimeOTFrom : '',
              timeotto:   this.check === true ? fromTimeOTTo : '',
              worktype: this.status,
            });
          }
        }
      });
    }else{
      for (const i in this.dataHolidayAPI) {
        if (this.dataHolidayAPI[i].month === this.m) {
          if (this.dataHolidayAPI[i].day >= this.dayStartFromD) {
            this.daysConfig.push({
              date: moment(this.dataHolidayAPI[i].date, 'DD/MM/YYYY').format('YYYY-MM-DD'),
              cssClass: this.status === 'W1' ? 'custom-calendar workday' : this.status === 'V1' ? 'custom-calendar offday' : '',
              // subTitle: `${this.status} ${this.check === true ? 'OT' : ''}`,
              subTitle: `${this.timeFrom.substring('0','2')}${this.timeFrom.substring('3')} ${this.check === true ? 'OT' : ''}`,
              timefrom: fromTimeFrom,
              timeto: fromTimeTo,
              timeotfrom: this.check === true ? fromTimeOTFrom : '',
              timeotto:   this.check === true ? fromTimeOTTo : '',
              worktype: this.status,
            });
          }
        } else {

          this.daysConfig.push({
            // date: this.moment.formatDate(this.dataHolidayAPI[i].date, 'YYYY-MM-DD', 'th', 'DD/MM/YYYY'),
            date: moment(this.dataHolidayAPI[i].date, 'DD/MM/YYYY').format('YYYY-MM-DD'),
            cssClass: this.status === 'W1' ? 'custom-calendar workday' : this.status === 'V1' ? 'custom-calendar offday' : '',
            // subTitle: `${this.status} ${this.check === true ? 'OT' : ''}`,
            subTitle: `${this.timeFrom.substring('0','2')}${this.timeFrom.substring('3')} ${this.check === true ? 'OT' : ''}`,
            timefrom: fromTimeFrom,
            timeto: fromTimeTo,
            timeotfrom: this.check === true ? fromTimeOTFrom : '',
            timeotto:   this.check === true ? fromTimeOTTo : '',
            worktype: this.status,
          });

        }
      }
    }

    console.log(this.daysConfig);
    console.log(this.daysConfigAll);
    console.log('this.dataHoliday',this.dataHoliday);
    this.showAllday = [];
    if (this.dataHoliday.length !== 0) {
      for await (const item of this.daysConfig) {
        this.showAllday.push(item);
      }
      for (const item of this.dataHoliday) {
        const obj = this.daysConfig.find(x => x.date === moment(item.day, 'YYYY-MM-DD').format('YYYY-MM-DD'));
        if (!obj) {
          console.log(item);
          // this.showAllday.push(item);
          this.daysConfig.push(item);
          // const searchIndex = this.dataSelectDay.findIndex((i) => i.day === item.day);
        }
      }

    }
    console.log(this.showAllday);

    console.log('>>>>>>>>>',this.daysConfig);

    // from: new Date(this.dayStartFromY, this.dayStartFromM, this.dayStartFromD),
    this.optionsMulti2 = {
      from: new Date(this.dayStartFromY, this.dayStartFromM, this.dayStartFromD),
      disableWeeks: this.status_plan === 'N' ? '' : this.status_plan === 'X' ? '' : [0,1,2,3,4,5,6],
      monthFormat: 'ปี YYYY เดือน MMM',
      monthPickerFormat: ['ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย.', 'ก.ค.', 'ส.ค.', 'ก.ย.', 'ต.ค.', 'พ.ย.', 'ธ.ค.'],
      weekdays: ['อา', 'จ', 'อ', 'พ', 'พฤ', 'ศ', 'ส'],
      weekStart: 0,
      showToggleButtons: true,
      showMonthPicker: true,
      // pickMode: 'multi',
      daysConfig: this.daysConfig,
    };


    this.dataSelectDay = [];
    for (const item of this.daysConfig) {
      console.log(item);

      if (item.cssClass !== 'custom-calendar holiday') {
        const valueDay = moment(item.date, 'YYYY-MM-DD').format('DD/MM/YYYY');
        console.log(valueDay);
        // console.log(item);
        // if (valueDay ) {

        // }

        console.log(item.date);

        this.dataSelectDay.push({
          day: valueDay,
          type:
            item.cssClass === 'custom-calendar workday'
              ? 'W1'
              : item.cssClass === 'custom-calendar workday oct'
              ? 'W1'
              : item.cssClass === 'custom-calendar offday'
              ? 'V1'
              : item.cssClass === 'custom-calendar workday-holiday'
              ? 'W1'
              : item.cssClass === 'custom-calendar offday-holiday'
              ? 'W2'
              : item.cssClass === 'custom-calendar expected-holiday'
              ? 'LE'
              : '',
              timetype: item.subTitle,
              timefrom: item.timefrom,
              timeto: item.timeto,
              timeotfrom: item.timeotfrom,
              timeotto: item.timeotto,
              worktype: item.worktype,
        });
      }else{
        console.log(item);
      }


      this.values = [];
    for (const item2 of this.daysConfig) {
      if (item2.subTitle && item.worktype !== '') {
        // console.log('มี');

        // console.log( moment(item2.date, 'YYYY-MM-DD').format('dd'));


        this.values.push({
          "image"   : item2.worktype === 'W1'
          ? 'assets/images/csg-plan/calendar_w.png'
          : item2.worktype === 'W2'
          ? 'assets/images/csg-plan/calendar_h1.png'
          : item2.worktype === 'V1'
          ? 'assets/images/csg-plan/calendar_o.png'
          : item2.worktype === 'LE'
          ? 'assets/images/csg-plan/calendar_o3.png'
          : '',
          "date"    :`${moment(item2.date, 'YYYY-MM-DD').format('dd')} ${moment(item2.date, 'YYYY-MM-DD').format('DD/MM/YYYY')}`,
          "value"   : item2.worktype === 'W1'
          ? 'วันทำงานปกติ'
          : item2.worktype === 'W2'
          ? 'HOLIDAY'
          : item2.worktype === 'V1'
          ? 'วันหยุดประจำสัปดาห์'
          : item2.worktype === 'LE'
          ? 'ลางาน'
          : '',
          "worktype": `${item2.worktype}`,
          "workfrom": item2.timefrom === '' ? '' : `${item2.timefrom.substring('0','2')}:${item2.timefrom.substring('2')}`,
          "workto"  : item2.timeto === '' ? '' : `${item2.timeto.substring('0','2')}:${item2.timeto.substring('2')}`,
          "otfrom"  : item2.timeotfrom === '' ? '' : `${item2.timeotfrom.substring('0','2')}:${item2.timeotfrom.substring('2')}`,
          "otto"    : item2.timeotto === '' ? '' : `${item2.timeotto.substring('0','2')}:${item2.timeotto.substring('2')}`,
          "counterid": `${this.counterid}`,
        });
      }else{
        console.log('ไม่มี');

      }

    }

    // console.log(moment(this.values[0].date.substring(3), 'DD/MM/YYYY'));
    // console.log(this.values[0].date.substring(3));

    const jj =  this.values.sort((b, a) => moment(b.date.substring(3), 'DD/MM/YYYY').unix() - moment(a.date.substring(3), 'DD/MM/YYYY').unix());
    // console.log(jj);

    // console.log(this.values);


    }
    console.log(this.dataSelectDay);
    console.log(this.daysConfig);


  }
  async deleteAll() {
    this.daysConfig = [];

    const callApiGetCsgCreatePlanDetail = await this.api.getCsgCreatePlanDetail(this.custid,this.counterMenu,this.empId,this.monthCreate);
    console.log(callApiGetCsgCreatePlanDetail);

    const fromTimeFrom = `${this.timeFrom.substring('0','2')}${this.timeFrom.substring('3')}`;
    const fromTimeTo = `${this.timeTo.substring('0','2')}${this.timeTo.substring('3')}`;

    const fromTimeOTFrom  = this.check === true ? `${this.timeOTFrom.substring('0','2')}${this.timeOTFrom.substring('3')}` : '';
    const fromTimeOTTo    = this.check === true ? `${this.timeOTTo.substring('0','2')}${this.timeOTTo.substring('3')}` : '';

    if (callApiGetCsgCreatePlanDetail.datas.length !== 0) {
      callApiGetCsgCreatePlanDetail.datas.forEach(i => {
        console.log(i);

        if (i.worktype !== '') {

          console.log( this.dayStartFromD);

          if (moment(i.date, 'DD/MM/YYYY').format('MM') === this.m) {
            if (moment(i.date, 'DD/MM/YYYY').format('DD') >= this.dayStartFromD) {
              this.daysConfig.push({
                date: moment(i.date, 'DD/MM/YYYY').format('YYYY-MM-DD'),
                cssClass: '',
                // subTitle: `${this.status} ${this.check === true ? 'OT' : ''}`,
                subTitle: '',
                timefrom: '',
                timeto: '',
                timeotfrom: '',
                timeotto:   '',
                worktype: '',
              });
            }else{
              this.daysConfig.push({
                date: moment(i.date, 'DD/MM/YYYY').format('YYYY-MM-DD'),
                cssClass: '',
                // subTitle: `${this.status} ${this.check === true ? 'OT' : ''}`,
                subTitle: '',
                timefrom: '',
                timeto: '',
                timeotfrom: '',
                timeotto:   '',
                worktype: '',
              });
            }
          }else if (moment(i.date, 'DD/MM/YYYY').format('MM') > this.m){
            this.daysConfig.push({
              date: moment(i.date, 'DD/MM/YYYY').format('YYYY-MM-DD'),
              cssClass: '',
              // subTitle: `${this.status} ${this.check === true ? 'OT' : ''}`,
              subTitle: '',
              timefrom: '',
              timeto: '',
              timeotfrom: '',
              timeotto:   '',
              worktype: '',
            });
          }
        }else{
          if (moment(i.date, 'DD/MM/YYYY').format('MM') === this.m) {
            console.log('?????????????222222<<<<<<<<<<<<<<<<<<<<<>>>>>>>');
            if (moment(i.date, 'DD/MM/YYYY').format('DD') >= this.dayStartFromD) {
              console.log('?????????????3333333<<<<<<<<<<<<<<<<<<<<<>>>>>>>');
              this.daysConfig.push({
                date: moment(i.date, 'DD/MM/YYYY').format('YYYY-MM-DD'),
                cssClass: '',
                subTitle:'',
                // subTitle: `${this.status} ${this.check === true ? 'OT' : ''}`,
                timefrom: '',
                timeto: '',
                timeotfrom: '',
                timeotto:   '',
                worktype: '',
              });
            }
          }else if(moment(i.date, 'DD/MM/YYYY').format('MM') > this.m){
            this.daysConfig.push({
              date: moment(i.date, 'DD/MM/YYYY').format('YYYY-MM-DD'),
              cssClass: '',
              subTitle:'',
              // subTitle: `${this.status} ${this.check === true ? 'OT' : ''}`,
              timefrom: '',
              timeto: '',
              timeotfrom: '',
              timeotto:   '',
              worktype: '',
            });
          }
        }
      });
    }else{
      for (const i in this.dataHolidayAPI) {
        if (this.dataHolidayAPI[i].month === this.m) {
          if (this.dataHolidayAPI[i].day >= this.dayStartFromD) {
            this.daysConfig.push({
              date: moment(this.dataHolidayAPI[i].date, 'DD/MM/YYYY').format('YYYY-MM-DD'),
              cssClass: '',
              // subTitle: `${this.status} ${this.check === true ? 'OT' : ''}`,
              subTitle: '',
              timefrom: '',
              timeto: '',
              timeotfrom: '',
              timeotto:   '',
              worktype: '',
            });
          }
        } else {

          this.daysConfig.push({
            // date: this.moment.formatDate(this.dataHolidayAPI[i].date, 'YYYY-MM-DD', 'th', 'DD/MM/YYYY'),
            date: moment(this.dataHolidayAPI[i].date, 'DD/MM/YYYY').format('YYYY-MM-DD'),
            cssClass: '',
            // subTitle: `${this.status} ${this.check === true ? 'OT' : ''}`,
            subTitle: '',
            timefrom: '',
            timeto: '',
            timeotfrom: '',
            timeotto:   '',
            worktype: '',
          });

        }
      }
    }

    console.log(this.daysConfig);
    console.log(this.daysConfigAll);
    console.log('this.dataHoliday',this.dataHoliday);
    this.showAllday = [];
    if (this.dataHoliday.length !== 0) {
      for await (const item of this.daysConfig) {
        this.showAllday.push(item);
      }
      for (const item of this.dataHoliday) {
        const obj = this.daysConfig.find(x => x.date === moment(item.day, 'YYYY-MM-DD').format('YYYY-MM-DD'));
        if (!obj) {
          console.log(item);
          // this.showAllday.push(item);
          this.daysConfig.push(item);
          // const searchIndex = this.dataSelectDay.findIndex((i) => i.day === item.day);
        }
      }

    }
    console.log(this.showAllday);

    console.log('>>>>>>>>>',this.daysConfig);

    // from: new Date(this.dayStartFromY, this.dayStartFromM, this.dayStartFromD),
    this.optionsMulti2 = {
      from: new Date(this.dayStartFromY, this.dayStartFromM, this.dayStartFromD),
      disableWeeks: this.status_plan === 'N' ? '' : this.status_plan === 'X' ? '' : [0,1,2,3,4,5,6],
      monthFormat: 'ปี YYYY เดือน MMM',
      monthPickerFormat: ['ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย.', 'ก.ค.', 'ส.ค.', 'ก.ย.', 'ต.ค.', 'พ.ย.', 'ธ.ค.'],
      weekdays: ['อา', 'จ', 'อ', 'พ', 'พฤ', 'ศ', 'ส'],
      weekStart: 0,
      showToggleButtons: true,
      showMonthPicker: true,
      // pickMode: 'multi',
      daysConfig: this.daysConfig,
    };


    this.dataSelectDay = [];
    for (const item of this.daysConfig) {
      console.log(item);

      if (item.cssClass !== 'custom-calendar holiday') {
        const valueDay = moment(item.date, 'YYYY-MM-DD').format('DD/MM/YYYY');
        console.log(valueDay);
        // console.log(item);
        // if (valueDay ) {

        // }

        console.log(item.date);

        this.dataSelectDay.push({
          day: valueDay,
          type:
            item.cssClass === 'custom-calendar workday'
              ? 'W1'
              : item.cssClass === 'custom-calendar workday oct'
              ? 'W1'
              : item.cssClass === 'custom-calendar offday'
              ? 'V1'
              : item.cssClass === 'custom-calendar workday-holiday'
              ? 'W1'
              : item.cssClass === 'custom-calendar offday-holiday'
              ? 'W2'
              : item.cssClass === 'custom-calendar expected-holiday'
              ? 'LE'
              : '',
              timetype: item.subTitle,
              timefrom: item.timefrom,
              timeto: item.timeto,
              timeotfrom: item.timeotfrom,
              timeotto: item.timeotto,
              worktype: item.worktype,
        });
      }else{
        console.log(item);
      }


      this.values = [];
    for (const item2 of this.daysConfig) {
      if (item2.subTitle && item.worktype !== '') {
        // console.log('มี');

        // console.log( moment(item2.date, 'YYYY-MM-DD').format('dd'));


        this.values.push({
          "image"   : item2.worktype === 'W1'
          ? 'assets/images/csg-plan/calendar_w.png'
          : item2.worktype === 'W2'
          ? 'assets/images/csg-plan/calendar_h1.png'
          : item2.worktype === 'V1'
          ? 'assets/images/csg-plan/calendar_o.png'
          : item2.worktype === 'LE'
          ? 'assets/images/csg-plan/calendar_o3.png'
          : '',
          "date"    :`${moment(item2.date, 'YYYY-MM-DD').format('dd')} ${moment(item2.date, 'YYYY-MM-DD').format('DD/MM/YYYY')}`,
          "value"   : item2.worktype === 'W1'
          ? 'วันทำงานปกติ'
          : item2.worktype === 'W2'
          ? 'HOLIDAY'
          : item2.worktype === 'V1'
          ? 'วันหยุดประจำสัปดาห์'
          : item2.worktype === 'LE'
          ? 'ลางาน'
          : '',
          "worktype": `${item2.worktype}`,
          "workfrom": item2.timefrom === '' ? '' : `${item2.timefrom.substring('0','2')}:${item2.timefrom.substring('2')}`,
          "workto"  : item2.timeto === '' ? '' : `${item2.timeto.substring('0','2')}:${item2.timeto.substring('2')}`,
          "otfrom"  : item2.timeotfrom === '' ? '' : `${item2.timeotfrom.substring('0','2')}:${item2.timeotfrom.substring('2')}`,
          "otto"    : item2.timeotto === '' ? '' : `${item2.timeotto.substring('0','2')}:${item2.timeotto.substring('2')}`,
          "counterid": `${this.counterid}`,
        });
      }else{
        console.log('ไม่มี');

      }

    }

    // console.log(moment(this.values[0].date.substring(3), 'DD/MM/YYYY'));
    // console.log(this.values[0].date.substring(3));

    const jj =  this.values.sort((b, a) => moment(b.date.substring(3), 'DD/MM/YYYY').unix() - moment(a.date.substring(3), 'DD/MM/YYYY').unix());
    // console.log(jj);

    // console.log(this.values);


    }
    console.log(this.dataSelectDay);
    console.log(this.daysConfig);


  }
  async reStartDays() {
    // this.monthCreate = this.moment.now('YYYYMM');

    // this.monthCreate = moment().format('YYYYMM');
    // // console.log(this.monthCreate);

    const callApi = await this.api.getHolidayCSGPlan(this.monthCreate);
    this.dataHolidayAPI = callApi.datas;
    console.log(this.dataHolidayAPI);

    this.loadDataHoliday = this.getDataHoliDay(this.dataHolidayAPI);


    // this.optionsMulti2 = {
    //   from: new Date(this.dayStartFromY, this.dayStartFromM, this.dayStartFromD),
    //   monthFormat: 'ปี YYYY เดือน MMM',
    //   monthPickerFormat: ['ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย.', 'ก.ค.', 'ส.ค.', 'ก.ย.', 'ต.ค.', 'พ.ย.', 'ธ.ค.'],
    //   weekdays: ['อา', 'จ', 'อ', 'พ', 'พฤ', 'ศ', 'ส'],
    //   weekStart: 0,
    //   showToggleButtons: true,
    //   showMonthPicker: true,
    //   // pickMode: 'multi',
    //   daysConfig: this.loadDataHoliday,
    // };
    // this.daysConfig = [];
    // this.dataSelectDay = [];

    this.getDatasCSGCreatePlan(this.monthCreate, this.custid, this.counterMenu);
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
            // console.log(this.dataSelectDay);

            // console.log('Confirm Okay');
            this.createPlan();
          },
        },
      ],
    });
    await alert.present();
  }


  async alertSuccess(datas,statusLEDay) {


    console.log(datas);
    console.log(statusLEDay);
    // datas.error_message = 'ERROR';
    const alert = await this.alertController.create({
      cssClass: 'alert_success',
      // header: 'ยืนยันการสร้างแผลนหรือไม่',
      message: `<img src="${datas.error_message === 'SUCCESS'
      ? `../../../../assets/images/csg-plan/success.svg " alt="g-maps" style="border-radius: 2px"> <br> บันทึกการสร้างสำเร็จ <br> ${statusLEDay === 'Y' ? `<div class="card-alert alert alert-danger mb-0">*เนื่องจากท่านมีการใช้ "ลางาน" กรุณา สร้าง ใบลา เข้า ระบบ WorkFlow</div>` : ''}`
      : '../../../../assets/images/csg-plan/error.png " alt="g-maps" style="border-radius: 2px"> <br> บันทึกการสร้างไม่สำเร็จ'}`,
      buttons: [
        // {
        //   text: 'ปิด',
        //   role: 'cancel',
        //   cssClass: 'secondary',
        //   handler: (blah) => {
        //     this.navCtrl.back();
        //     // console.log('Confirm Cancel: blah');
        //   },
        // },
      //   {
      //     text: 'ยืนยัน',
      //     handler: () => {
      //       // console.log(this.dataSelectDay);

      //       // console.log('Confirm Okay');
      //       this.createPlan();
      //     },
      //   },
      ],
    });
    await alert.present();
    setTimeout(() => {
      alert.dismiss();

      const navigationExtras: NavigationExtras = {
        state: {monthFromCreate: this.monthCreate}
      };

      // this.navCtrl.navigateBack(['csg-plan'], navigationExtras);

      this.navCtrl.navigateBack(['csg-plan'], navigationExtras);


      // this.navCtrl.back();


      // const navigationExtras: NavigationExtras = {
      //   state: {name: 'trebtreb'}
      // };
      // this.navCtrl.navigateBack(['csg-plan'], navigationExtras);
      // this.router.navigate(['csg-plan']);
    }, 4000);
  }

  back() {


    // const navigationExtras: NavigationExtras = {
    //   state: {monthFromCreate: this.monthCreate}
    // };

    // localStorage.setItem('monthBack', this.monthCreate);
    // this.navCtrl.navigateBack(['csg-plan']);

    const navigationExtras: NavigationExtras = {
      state: {monthFromCreate: this.paramsMonthBefore.monthToCreate}
    };

    // console.log(this.monthCreate);


    this.router.navigate(['csg-plan'], navigationExtras);
    // this.router.navigate(['csg-plan']);

  }


}
