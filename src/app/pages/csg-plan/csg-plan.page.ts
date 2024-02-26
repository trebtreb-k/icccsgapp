import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import { Component, OnInit, ViewChild } from '@angular/core';

import { CalendarComponentOptions } from 'ion2-calendar';
import { CsgPlanService } from './../../services/api/csg-plan/csg-plan.service';
import { LoadingService } from './../../services/utils/loading/loading.service';
import { StorageService } from './../../services/storage/storage.service';
import { moment } from './../../services/utils/moment/moment.service';

moment.locale('th');

type StatusContent = 'OK' | 'LOADING' | 'NOT_FOUND' | 'COMPLETED' | 'ERROR' | 'POSTING';


@Component({
  selector: 'app-csg-plan',
  templateUrl: './csg-plan.page.html',
  styleUrls: ['./csg-plan.page.scss'],
})
export class CsgPlanPage implements OnInit {

  statusWorkspace: StatusContent = 'LOADING';
  values: any;
  user: any;
  empId: string;
  dataAssigndate: any[] = [];
  handlerMessage = '';
  roleMessage = '';
  public alertButtons = ['OK'];

  type: 'string'; // 'string' | 'js-date' | 'moment' | 'time' | 'object'

  loadData: any;

  optionsMulti: any;
  sumOt: any;
  dataOtH = [];
  data = [];
  isModalOpen = false;

  mydate: any;
  today: any;
  m: string;
  y: string;
  d: string;
  dayStartFromM: any;
  dayStartFromD: any;
  dayStartFromY: any;
  monthCreate: any;
  dataHolidayAPI: any;
  dataCheckStatus: any;
  g1_desc:  any;
  g1_color: any;
  g2_desc:  any;
  g2_color: any;
  g3_desc:   any;
  g3_color: any;
  monthChange: any;
  paramsMonthBefore: any;

  current: 'WAIT' | 'APPROVE' | 'NOTAPPROVE' = 'WAIT';
  status_plan: any;
  typeDisabled = true;
  // testDate = '08-08-2023';

  startDate: any;

  lottiefiles = {
    loadData: {
      options: { path: 'assets/lottiefiles/reload.json', loop: true },
      width: '80px',
      height: '80px',
    },
    completedData: {
      options: { path: 'assets/lottiefiles/completed-2.json', loop: false },
      width: '170px',
      height: '170px',
    },
    loadingMap: {
      options: { path: 'assets/lottiefiles/loading-map.json', loop: true },
      width: '300px',
      height: '300px',
    },
    warningMap: {
      options: { path: 'assets/lottiefiles/warning-map.json', loop: false },
      width: '150px',
      height: '150px',
    },
    waiting: {
      options: { path: 'assets/lottiefiles/waiting.json', loop: false },
      width: '100px',
      height: '100px',
    },
  };


  constructor(
    private storage: StorageService,
    private api: CsgPlanService,
    private router: Router,
    private alertController: AlertController,
    private modalController: ModalController,
    private route: ActivatedRoute,
    private loading: LoadingService,
  ) {
    // console.log(this.router);

    // const state = this.router.getCurrentNavigation().extras.state;
    // console.log(state);
    // this.paramsMonthBefore = state;
    // if (this.paramsMonthBefore) {
    //   this.startDate =  moment(this.paramsMonthBefore.monthFromCreate,'YYYYMM').format('MM-DD-YYYY');
    // }
    // if (this.startDate) {
    //   this.monthCreate = moment(this.paramsMonthBefore.monthFromCreate,'YYYYMM').format('YYYYMM');
    // }else{
    //   this.monthCreate = moment().format('YYYYMM');
    // }

    //  if (this.router.getCurrentNavigation().extras.state && this.router.getCurrentNavigation().extras.state.monthFromCreate) {
    //    const paramMonth = this.router.getCurrentNavigation().extras.state.monthFromCreate;
    //    console.log('//////',paramMonth);
    //   }
  }

  async ngOnInit() {

    // localStorage.setItem('monthBack', moment().format('YYYYMM'));
    this.monthCreate = moment().format('YYYYMM');
    const historyState = history.state;
    console.log('////',historyState);

    if (historyState.monthFromCreate) {
      this.monthCreate = historyState.monthFromCreate;
    }
    this.getUserInfo();

    // alert('sssss');

  }

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  async presentAlert(v) {
    const alert = await this.alertController.create({
      header: 'ต้องการยกเลิกแพลน',
      message: `<span class="label"><B>${v.date}</B></span><br>${v.value}
      <br><span class="label">${ v.custname }</span>
      <br><span class="label">${ v.counterid } ${v.countername}</span>
      <br>${v.workfrom !== '' ? `<span class="label">เวลาปฏิบัติงาน ${v.workfrom} - ${v.workto}</span>` : '' }
      <br>${v.otfrom !== '' ? `<span class="label">เวลาทำ OT ${v.otfrom}- ${v.otto}</span>` : ``}`,
      buttons: [
        {
          text: 'ปิด',
          role: 'cancel',
          handler: () => {
            this.handlerMessage = 'Alert canceled';
          },
        },
        {
          text: 'ยืนยัน',
          role: 'confirm',
          handler: () => {
            console.log(v);
            // this.statusWorkspace = 'COMPLETED';
            this.cancelPlan(v);
            // this.presentAlertConfirm();
            this.handlerMessage = 'Alert confirmed';
          },
        },
      ],
    });

    await alert.present();

  }

  async presentAlert2() {
    const alert = await this.alertController.create({
      header: 'CSG PLAN',
      // subHeader: 'Important message',
      message: 'ท่านต้องการยืนยันการส่งแพลนเดือนนี้ให้ CM ใช่หรือไม่',
      buttons: [
        {
          text: 'ไม่',
          role: 'cancel',
          handler: () => {
            this.handlerMessage = 'Alert canceled';
          },
        },
        {
          text: 'ยืนยัน',
          role: 'confirm',
          handler: () => {
            this.updateWorkplanstatus();
            // this.statusWorkspace = 'COMPLETED';
            // this.cancelPlan(v);
            // this.presentAlertConfirm();
            // this.handlerMessage = 'Alert confirmed';
          },
        },
      ],
    });

    await alert.present();
  }

  async updateWorkplanstatus(){

    console.log(this.monthChange);


    const body = {
        period:     this.monthChange,
        emp_id:     this.empId,
        status_old: 'N',
        status_new: 'W',
     };

     console.log(body);


    const callApi = await this.api.updateWorkPlanStatusCretae(body);

    console.log('???????',callApi);
    if (callApi.result === true) {
      const alert = await this.alertController.create({
        cssClass: 'alert_success',
        // header: 'ยืนยันการสร้างแพลนหรือไม่',
        message: `<img src="${callApi.message === 'Success' ? ' ../../../assets/images/csg-plan/success.svg " alt="g-maps" style="border-radius: 2px"> <br>ส่งแพลนสำเร็จ' : '../../../assets/images/csg-plan/error.png" alt="g-maps" style="border-radius: 2px"> <br> ส่งแพลนไม่สำเร็จ'}`,
      });
      await alert.present();
      setTimeout(() => {
        alert.dismiss();
        // this.navCtrl.back();
        // this.router.navigate(['csg-plan']);
      }, 2000);

    }else{
      alert('ไม่ได้');
    }

    const callApiPlan = await this.api.getCSGPlan(this.empId, this.monthChange);

    this.g1_desc      = callApiPlan.g1_desc;
    this.g1_color     = callApiPlan.g1_color;
    this.g2_desc      = callApiPlan.g2_desc;
    this.g2_color     = callApiPlan.g2_color;
    this.g3_desc      = callApiPlan.g3_desc;
    this.g3_color     = callApiPlan.g3_color;
    this.status_plan  = callApiPlan.status_plan;



  };



  async ionViewDidEnter() {
    console.clear();
    // const monthV = moment().format('YYYYMM');
    const historyState = history.state;

    // this.monthChange = this.monthCreate;
    console.log(historyState.monthFromCreate);
    if (historyState.monthFromCreate) {
      this.startDate =  moment(historyState.monthFromCreate,'YYYYMM').format('MM-DD-YYYY');
      this.monthCreate = historyState.monthFromCreate;
    }

    this.monthChange = this.monthCreate;



    console.log(this.monthCreate);
    // this.startDate =  moment(this.monthChange,'YYYYMM').format('MM-DD-YYYY');
    console.log(this.startDate);

    const callApiH = await this.api.getHolidayCSGPlan(this.monthCreate);

    this.dataHolidayAPI = callApiH.datas;
    console.log('----',this.dataHolidayAPI);

    this.m = moment().format('MM');

    const monthC = +this.m - 1;

    this.y = moment().format('YYYY');
    this.d = moment().format('D');
    console.log(this.y, monthC, this.d);

    this.dayStartFromM = monthC;
    this.dayStartFromD = +this.d;
    this.dayStartFromY = +this.y;
    console.log(this.dayStartFromY, this.dayStartFromM);

    // const monthV = this.monthCreate;
    const monthV = this.monthCreate;

    try {


      console.log("-----",this.empId, monthV);
      // this.startDate =  moment(monthV,'YYYYMM').format('MM-DD-YYYY');

      const callApi = await this.api.getCSGPlan(this.empId, monthV);
     // const callDayPlanApi = await this.api.getDayPlanCSGPlan(monthV, this.empId);
     // trebTreb 16-07-2021
    //  this.dataCheckStatus = {
    //    F1: 'G1',
    //    F2: '2',
    //  };
    console.log('???????',callApi.g1_desc);

    this.g1_desc      = callApi.g1_desc;
    this.g1_color     = callApi.g1_color;
    this.g2_desc      = callApi.g2_desc;
    this.g2_color     = callApi.g2_color;
    this.g3_desc      = callApi.g3_desc;
    this.g3_color     = callApi.g3_color;
    this.status_plan  = callApi.status_plan;

      this.dataAssigndate = callApi.datas;
      console.log(this.dataAssigndate);

     // this.dataAssigndate = callDayPlanApi.datas;
     // trebTreb 16-07-2021


      this.loadData = this.getDataDateM(this.dataAssigndate);
      console.log('loadData',this.loadData)

      for (let [index, item]  of this.loadData.entries()) {

            const date = (moment(new Date()).format('DD/MM/YYYY'));
            // console.log(this.loadData[index].date);
            let date_res = moment(this.loadData[index].date, "DD-MM-YYYY");
            let this_day = moment(date, "DD-MM-YYYY");


            // console.log(date_res);
            // console.log(this_day);

            const diff = date_res.diff(this_day, "days");
            const days = diff;

            // console.log(days);

            // if (days < 0) {
              this.loadData[index].cssClass = days < 0 ? `${this.loadData[index].cssClass} oct` : `${this.loadData[index].cssClass}`;
            // }else{
            // }

      }

      this.optionsMulti = {
        from: new Date(2000, 0, 1),
        // from: new Date(this.dayStartFromY, this.dayStartFromM, this.dayStartFromD),
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



    if (historyState.monthFromCreate) {
      console.log('////////',historyState.monthFromCreate);

      this.startDate =  moment(historyState.monthFromCreate,'YYYYMM').format('MM-DD-YYYY');
      this.monthCreate = historyState.monthFromCreate;
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

  async onDetial(item): Promise<void> {
    console.log(item);
  }

  getDataDateM(dataApi: any) {
    this.data = [];
    this.sumOt = 0;
    this.dataOtH = [];

    dataApi.forEach((e: any) => {
      this.sumOt = this.sumOt + e.sumot;
      const dateC = moment(e.assigndate, 'DD/MM/YYYY').format();//'MM-DD-YYYY');

      // console.log(e);

      this.data.push({
        date: new Date(dateC),
        // cssClass: e.worktype!='W1' ? 'custom-calendar danger' : 'custom-calendar normal',
        cssClass:
          e.worktype === 'W1'
          ? 'custom-calendar workday'
          : e.worktype === 'V1'
          ? 'custom-calendar offday'
          : e.worktype === 'W2'
          ? 'custom-calendar workholiday'
          : e.worktype === 'LE'
          ? 'custom-calendar expected-holiday'
          : '',
        // subTitle: `${e.worktype} ${e.otfrom !== '' ? 'OT' : ''}`,
        subTitle: e.workfrom === '' ? `${e.worktype}` : `${e.workfrom} ${e.otfrom !== '' ? 'OT' : ''}`,
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



  async getEventForMonths(events: any) {
    // console.log(events.newMonth.string);
    const formatDate = moment(events.newMonth.string).format('YYYYMM');
    this.startDate = moment(formatDate,'YYYYMM').format('MM-DD-YYYY');
    console.log('////////',formatDate);

    // console.log(formatDate);
    const monthV = moment().format('YYYYMM');
    this.monthCreate = formatDate;
    this.monthChange = this.monthCreate;
    if (formatDate === monthV) {
      const callApi = await this.api.getDayPlanCSGPlan(monthV, this.empId);
      this.dataAssigndate = callApi.datas;
      console.log(this.dataAssigndate);
      this.g1_desc      = callApi.g1_desc;
      this.g1_color     = callApi.g1_color;
      this.g2_desc      = callApi.g2_desc;
      this.g2_color     = callApi.g2_color;
      this.g3_desc      = callApi.g3_desc;
      this.g3_color     = callApi.g3_color;
      this.status_plan  = callApi.status_plan;

      this.loadData = await this.getDataDateM(this.dataAssigndate);
      // console.log(this.loadData);
    } else {
      const callApi = await this.api.getDayPlanCSGPlan(formatDate, this.empId);
      this.g1_desc      = callApi.g1_desc;
      this.g1_color     = callApi.g1_color;
      this.g2_desc      = callApi.g2_desc;
      this.g2_color     = callApi.g2_color;
      this.g3_desc      = callApi.g3_desc;
      this.g3_color     = callApi.g3_color;
      this.status_plan  = callApi.status_plan;

      this.dataAssigndate = callApi.datas;
      this.loadData = await this.getDataDateM(this.dataAssigndate);
      console.log(this.loadData);
    }

    for (let [index, item]  of this.loadData.entries()) {

          const date = (moment(new Date()).format('DD/MM/YYYY'));
          console.log(this.loadData[index].date);
          let date_res = moment(this.loadData[index].date, "DD-MM-YYYY");
          let this_day = moment(date, "DD-MM-YYYY");


          console.log(date_res);
          console.log(this_day);

          const diff = date_res.diff(this_day, "days");
          const days = diff;

          console.log(days);

          // if (days < 0) {
            this.loadData[index].cssClass = days < 0 ? `${this.loadData[index].cssClass} oct` : `${this.loadData[index].cssClass}`;
          // }else{
          // }

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
    console.log(this.dataAssigndate);
    this.getdetailDay(this.dataAssigndate);

    // this.editValue()
  }

  async getdetailDay(data: any) {

    console.log(data);

    const valToMonths = [];
    for (let index = 0; index < this.dataAssigndate.length; index++) {
      // for (let [index, item]  of this.loadData.entries()) {

        const date = (moment(new Date()).format('DD/MM/YYYY'));
        // console.log(this.dataAssigndate[index].assigndate);
        let date_res = moment(this.dataAssigndate[index].assigndate, "DD-MM-YYYY");
        let this_day = moment(date, "DD-MM-YYYY");


        // console.log(date_res);
        // console.log(this_day);

        const diff = date_res.diff(this_day, "days");
        const days = diff;

        // console.log(days);

        // if (days < 0) {
          this.dataAssigndate[index].typecancel = days < 0 ? `N` : `Y`;
        // }else{
        // }

    // }
      // console.log(this.dataAssigndate[index]);

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
        date: `${data[index].date_name.trim()} ${data[index].assigndate}`,
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
        typecancel: data[index].typecancel,
        satusleave: data[index].status_leave,
      });
    }
    console.log(valToMonths);

    this.values = valToMonths;

    return this.values;
  }

  onChanges($event: any) {
    // console.log($event);
  }

  async cancelPlan(v) {

    console.log(moment(v.date, 'DDMMYYYY').format('YYYYMM'));
    const dataset = [];
      console.log(v);
        dataset.push({
        // flagdesc: s.type,
        assigndate: v.date,
        custid: v.custid,
        counterid: v.counterid,
        yearmonth: moment(v.date, 'DDMMYYYY').format('YYYYMM'),
        csgid: this.empId,
        timetype: '',
        timefrom: '',
        timeto: '',
        timeotfrom: '',
        timeotto: '',
        worktype: ''
      });


    // console.log('////',this.dataSelectDay);
    console.log('////@@@@@',dataset);
    // }

    const body = { dataset };

    // console.log(body);

      const call = await this.api.insertCreatePlanCSGPlan(body);
      console.log(call.error_message);
      console.log(call);
    //   // if (call.error_message === 'SUCCESS') {
        this.presentAlertConfirm(call);
        // this.alertSuccess(call);
      // }else{

      // }

    // this.navCtrl.back();
  }

  async presentAlertConfirm(v) {

    this.statusWorkspace = 'COMPLETED';

    console.log(v);
    let alert: any;
    if (v.error_message === 'SUCCESS' ) {
       alert = await this.alertController.create({
        header: 'แจ้งเตือน',
        // subHeader: 'Important message',
        cssClass: 'alert_success',
        message: `<img src="../../../../assets/images/csg-plan/success.svg"> <br> ยกเลิกแพลนสำเร็จ`,
        // buttons: ['OK'],
      });
      setTimeout(() => {
        alert.dismiss();
        // this.router.navigate(['csg-plan']);
        this.ionViewDidEnter();
      }, 2000);
    }else{
       alert = await this.alertController.create({
        header: 'แจ้งเตือน',
        // subHeader: 'Important message',
        message: `ยกเลิกแพลนไม่สำเร็จ`,
        // buttons: ['OK'],
      });
    }

    await alert.present();

  }


  async createPlan() {
    // const navigationExtras: NavigationExtras = {
    //   state: { name: 'trebtreb' },
    // };
    // this.router.navigate(['csg-plan/create-plan'], navigationExtras);
    // this.router.navigate(['/home']);
    // await this.loading.present();

    // this.router.navigate(['csg-plan/create-plan']);
    const navigationExtras: NavigationExtras = {
      state: {monthToCreate: this.monthChange}
    };

    console.log(this.monthChange);


    this.router.navigate(['csg-plan/create-plan'], navigationExtras);
  }

  async approverDetail(dataYearmonth,dataCSGID) {
    const navigationExtras: NavigationExtras = {
      state: {yearmonth: dataYearmonth,csgid: dataCSGID}
    };

    console.log(navigationExtras);


    this.router.navigate(['csg-plan/approver-detail'], navigationExtras);
  }

  back(): void {
    this.router.navigate(['/home']);
  }
}
