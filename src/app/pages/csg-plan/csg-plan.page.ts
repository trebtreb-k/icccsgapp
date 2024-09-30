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

  optionsMulti2: any;

  type: 'string'; // 'string' | 'js-date' | 'moment' | 'time' | 'object'

  loadData: any;
  loadData2: any;

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

  dayEndFromM: any;
  dayEndFromD: any;
  dayEndFromY: any;

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

  period: any;
  startDate: any;
  startDate2: any;

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
    //    console.log('\\\',paramMonth);
    //  }
  }

  async ngOnInit() {
    //await this.loading.present();
    // localStorage.setItem('monthBack', moment().format('YYYYMM'));
    this.monthCreate = moment().format('YYYYMM');
    const historyState = history.state;
    console.log('\\\\',historyState);
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
      message: 'ท่านต้องการยืนยันการส่งแพลน ใช่หรือไม่',
      buttons: [
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
        {
          text: 'ไม่',
          cssClass: 'c-red',
          role: 'cancel',
          handler: () => {
            this.handlerMessage = 'Alert canceled';
          },
        }
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
    // console.clear();
    // await this.loading.present();
    // const monthV = moment().format('YYYYMM');
    
    const historyState = history.state;

   

    // this.monthCreate = '202409'
    



    this.monthChange = this.monthCreate;

    console.log(this.monthCreate);
    // this.startDate =  moment(this.monthChange,'YYYYMM').format('MM-DD-YYYY');
    this.startDate = moment(this.monthChange,'YYYYMM').subtract(1, 'month').format('MM-DD-YYYY');

    this.dayStartFromM = Number(moment(this.monthChange,'YYYYMM').format('MM')) - 1;

    this.dayStartFromD = Number(moment(this.monthChange,'YYYYMM').format('DD'));

    this.dayStartFromY = Number(moment(this.monthChange,'YYYYMM').format('YYYY'));

    this.startDate = new Date(this.dayStartFromY, this.dayStartFromM, this.dayStartFromD)

    console.log(this.startDate);

     // this.monthChange = this.monthCreate;
     console.log(historyState.monthFromCreate);
     if (historyState.monthFromCreate) {
       
       this.startDate =  moment(historyState.monthFromCreate,'YYYYMM').format('MM-DD-YYYY');
       this.monthCreate = historyState.monthFromCreate;
 
       this.dayStartFromM = Number(moment(historyState.monthFromCreate,'YYYYMM').format('MM')) - 1;
 
       this.dayStartFromD = Number(moment(historyState.monthFromCreate,'YYYYMM').format('DD'));
 
       this.dayStartFromY = Number(moment(historyState.monthFromCreate,'YYYYMM').format('YYYY'));
 
       this.startDate = new Date(this.dayStartFromY, this.dayStartFromM, this.dayStartFromD)
     }


    console.log(this.monthCreate);
   
    this.showCalendar(this.monthCreate)

  }

  doRefresh(event) {
    setTimeout(() => {
        this.ionViewDidEnter();
        event.target.complete();
    }, 2000);
  }

  
  async showCalendar(monthCalendar) {
    
    console.log("monthCalendar",monthCalendar);
    
    const callApiH = await this.api.getHolidayCSGPlan(monthCalendar);

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
    let monthV = monthCalendar;
    let daysConfigDatas2: any;

    try {

      console.log("---**--",this.empId, monthV);
      const callApi = await this.api.getCSGPlan(this.empId, monthV);
      
      this.period = moment(callApi.period,'YYYYMM').format('MM/YYYY');

      console.log('callApi ---- ',callApi);
      console.log(callApi.datas.length);
      
      if (callApi.datas.length === 1) {

        this.startDate = moment(callApi.date_start,'DD/MM/YYYY').format('MM-DD-YYYY');

        this.dayStartFromM = Number(moment(callApi.date_start, "DD/MM/YYYY").format('MM')) - 1;

        this.dayStartFromD = Number(moment(callApi.date_start, "DD/MM/YYYY").format('DD'));

        this.dayStartFromY = Number(moment(callApi.date_start, "DD/MM/YYYY").format('YYYY'));

        this.startDate = new Date(this.dayStartFromY, this.dayStartFromM, this.dayStartFromD)
        // this.startDate = moment(monthCalendar,'YYYYMM').format('MM-DD-YYYY');
      
        console.log('this.startDate',this.startDate);
        
      }else{

        this.startDate = moment(callApi.date_start,'DD/MM/YYYY').format('MM-DD-YYYY');

        this.dayStartFromM = Number(moment(callApi.date_start, "DD/MM/YYYY").format('MM')) - 1;

        this.dayStartFromD = Number(moment(callApi.date_start, "DD/MM/YYYY").format('DD'));

        this.dayStartFromY = Number(moment(callApi.date_start, "DD/MM/YYYY").format('YYYY'));

        this.startDate = new Date(this.dayStartFromY, this.dayStartFromM, this.dayStartFromD)

        this.startDate2 = moment(callApi.date_end,'DD/MM/YYYY').format('MM-DD-YYYY');
        // this.startDate2 = moment(callApi.date_end,'DD/MM/YYYY').format('YYYYMM');
        console.log('this.startDate2',this.startDate2);

        this.dayEndFromM = Number(moment(callApi.date_end, "DD/MM/YYYY").format('MM')) - 1;

        this.dayEndFromD = Number(moment(callApi.date_end, "DD/MM/YYYY").format('DD'));

        this.dayEndFromY = Number(moment(callApi.date_end, "DD/MM/YYYY").format('YYYY'));

        this.startDate2 = new Date(this.dayEndFromY, this.dayEndFromM, this.dayEndFromD)

      }
      

     
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

     this.dataAssigndate.forEach((datas, index) => {
      console.log(index);
      if (index === 0) {
        this.loadData = this.getDataDateM(datas.detail);
        console.log('loadData',this.loadData)
      }else if(index === 1){
        this.loadData2 = this.getDataDateM(datas.detail);
        
        console.log('loadData2',this.loadData2)

        console.log('daysConfigDatas2',daysConfigDatas2);
        
       // disable: true,
      }
      
     });


     
     console.log(this.dataAssigndate.length);
      // if (this.dataAssigndate.length === 1) {

        for (let [index, item]  of this.loadData.entries()) {

          const date = (moment(new Date()).format('DD/MM/YYYY'));
          // console.log(this.loadData[index].date);
          let date_res = moment(this.loadData[index].date, "DD-MM-YYYY");
          let this_day = moment(date, "DD-MM-YYYY");

          const diff = date_res.diff(this_day, "days");
          const days = diff;

          console.log("days ---",days);

          // if (days < 0) {
            //this.loadData[index].cssClass = days < 0 ? `${this.loadData[index].cssClass} oct` : `${this.loadData[index].cssClass}`;

            let dayss = moment(this.loadData[index].date).format("DD/MM/YYYY");
            console.log('dayss',dayss);
            console.log('this.dataHolidayAPI',this.dataHolidayAPI);

            const i = this.dataHolidayAPI.findIndex(x => String(x.date) === String(dayss));

            
            
            console.log(i);
            

            // this.loadData[index].disable = true;
          // }else{
          // }

        }

        console.log('loadData ****',this.loadData);
      
        this.dayStartFromM = Number(moment(callApi.date_start, "DD/MM/YYYY").format('MM')) - 1;

        this.dayStartFromD = Number(moment(callApi.date_start, "DD/MM/YYYY").format('DD'));

        this.dayStartFromY = Number(moment(callApi.date_start, "DD/MM/YYYY").format('YYYY'));
        
        console.log('dayStartFromM',this.dayStartFromM,'dayStartFromD',this.dayStartFromD,'dayStartFromY',this.dayStartFromY);
        
        console.log('this.dayStartFromY',this.dayStartFromY);
        console.log('this.dayStartFromM',this.dayStartFromM);
        console.log('this.dayStartFromD',this.dayStartFromD);
        console.log('this.monthCreate',this.monthCreate);

        this.optionsMulti = {
          from: new Date(2000, 0, 1),
          // from: new Date(this.dayStartFromY, this.dayStartFromM, this.dayStartFromD),
          // disableWeeks: [0, 1, 2, 3, 4, 5, 6],
          monthFormat: 'ปี YYYY เดือน MMM',
          monthPickerFormat: ['ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย.', 'ก.ค.', 'ส.ค.', 'ก.ย.', 'ต.ค.', 'พ.ย.', 'ธ.ค.'],
          weekdays: ['อา', 'จ', 'อ', 'พ', 'พฤ', 'ศ', 'ส'],
          weekStart: 0,
          showToggleButtons: true,
          showMonthPicker: true,
          color: 'transparent',
          daysConfig: this.loadData,
        };

        

      // }else{


        if (this.loadData2) {
          
          for (let [index, item]  of this.loadData2.entries()) {

            const date = (moment(new Date()).format('DD/MM/YYYY'));
            // console.log(this.loadData[index].date);
            let date_res = moment(this.loadData2[index].date, "DD-MM-YYYY");
            let this_day = moment(date, "DD-MM-YYYY");
  
            const diff = date_res.diff(this_day, "days");
            const days = diff;
           // if (days < 0) {
              // this.loadData2[index].cssClass = days < 0 ? `${this.loadData2[index].cssClass} oct` : `${this.loadData2[index].cssClass}`;
            // }else{
            // }
  
          }
  
          console.log('loadData2 ****',this.loadData2);
  
          this.dayEndFromM = Number(moment(callApi.date_end, "DD/MM/YYYY").format('MM')) - 1;
  
          this.dayEndFromD = Number(moment(callApi.date_end, "DD/MM/YYYY").format('DD'));
  
          this.dayEndFromY = Number(moment(callApi.date_end, "DD/MM/YYYY").format('YYYY'));
          
          console.log('dayEndFromM',this.dayEndFromM,'dayEndFromD',this.dayEndFromD,'dayEndFromY',this.dayEndFromY);
  
          this.optionsMulti2 = {
            from: new Date(this.dayStartFromY, this.dayStartFromM, this.dayStartFromD),
            // from: new Date(this.startDate),
            to: new Date(this.dayEndFromY, this.dayEndFromM, this.dayEndFromD),
            // disableWeeks: this.status_plan === 'N' ? '' : this.status_plan === 'X' ? '' : [0, 1, 2, 3, 4, 5, 6],
            // disableWeeks: [0, 1, 2, 3, 4, 5, 6],
            monthFormat: 'ปี YYYY เดือน MMM',
            monthPickerFormat: ['ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย.', 'ก.ค.', 'ส.ค.', 'ก.ย.', 'ต.ค.', 'พ.ย.', 'ธ.ค.'],
            weekdays: ['อา', 'จ', 'อ', 'พ', 'พฤ', 'ศ', 'ส'],
            weekStart: 0,
            showToggleButtons: false,
            showMonthPicker: false,
            color: 'transparent',
            // pickMode: 'multi',
            daysConfig: this.loadData2,
          };
        }

       

      // }
      // console.log(this.dataAssigndate);
   
      this.getdetailDay(this.dataAssigndate);
        // ---------- end loop get datas -----------------
        //this.loading.dismiss();
    } catch (error) {
      this.dataAssigndate = [];
      this.dataAssigndate = [];
    }

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

    console.log('dataApi',dataApi);
    

    dataApi.forEach((e: any) => {
      this.sumOt = this.sumOt + e.sumot;
      const dateC = moment(e.assigndate, 'DD/MM/YYYY').format();//'MM-DD-YYYY');

      // console.log(e);
      //if (e.custid) {
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
            : 'custom-calendar no-plan',
          // subTitle: `${e.worktype} ${e.otfrom !== '' ? 'OT' : ''}`,
          subTitle: e.workfrom === '' ? `${e.worktype}` : `${e.workfrom} ${e.otfrom !== '' ? 'OT' : ''}`,
          // disable: true,
        });
      //}
      



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



  async changeMonth(events: any) {

    console.log("this.loadData",this.loadData);
    console.log("this.loadData2",this.loadData2);
    console.log("this.dataAssigndate",this.dataAssigndate);
    

    const formatDate = moment(events.newMonth.string).format('YYYYMM');
    // this.startDate = moment(formatDate,'YYYYMM').format('MM-DD-YYYY');
    console.log(formatDate);

    
    // console.log(formatDate);
    const monthV = formatDate;
    this.monthCreate = formatDate;

    if (this.dataAssigndate.length === 1) {
       // this.monthChange = this.monthCreate;
      this.monthChange = moment(this.monthCreate,'YYYYMM').format('YYYYMM');
    }else{
       // this.monthChange = this.monthCreate;
      this.monthChange = moment(this.monthCreate,'YYYYMM').add(1, 'month').format('YYYYMM');
    }
   

    // this.startDate = moment(this.monthChange,'YYYYMM').subtract(1, 'month').format('MM-DD-YYYY');



    try {

      console.log('**changeMonth**',this.monthChange);

      
      this.showCalendar(this.monthChange)

        // ---------- end loop get datas -----------------

    } catch (error) {
      
      this.dataAssigndate = [];
      this.dataAssigndate = [];
    }
  }

  async getdetailDay(data: any) {

    console.log(data);

    const valToMonths = [];

    data.forEach((element1,index1) => {
      console.log(element1);
      element1.detail.forEach((element2,index2) => {
        
        // console.log(element2.assigndate);
        const date = (moment(new Date()).format('DD/MM/YYYY'));
        // console.log(this.dataAssigndate[index].assigndate);
        let date_res = moment(element2.assigndate, "DD-MM-YYYY");
        let this_day = moment(date, "DD-MM-YYYY");

        
        const diff = date_res.diff(this_day, "days");
        const days = diff;

        // console.log(days);

        element2.typecancel = days < 0 ? `N` : `Y`;

        // element2.typecancel = `Y`;

        console.log(element2);
        
        if (element2.custid && element2.worktype) {
          valToMonths.push({
            image:
            element2.worktype === 'W1'
                ? 'assets/images/csg-plan/calendar_w.png'
                : element2.worktype === 'W2'
                ? 'assets/images/csg-plan/calendar_h.png'
                : element2.worktype === 'V1'
                ? 'assets/images/csg-plan/calendar_o.png'
                : element2.worktype === 'LE'
                ? 'assets/images/csg-plan/calendar_o3.png'
                : 'assets/images/csg-plan/calendar_s.svg',
            date: `${element2.date_name.trim()} ${element2.assigndate}`,
            value: element2.workdesc,
            stateOt: element2.sumot !== 0 && element2.sumot != null ? 'Y' : 'N',
            worktype: element2.worktype,
            workfrom:
              element2.workfrom !== ''
                ? element2.workfrom.substring(0, 2) + '.' + element2.workfrom.substring(2, 4)
                : element2.workfrom,
            workto:
              element2.workto !== ''
                ? element2.workto.substring(0, 2) + '.' + element2.workto.substring(2, 4)
                : element2.workto,
            otfrom:
              element2.otfrom !== ''
                ? element2.otfrom.substring(0, 2) + '.' + element2.otfrom.substring(2, 4)
                : element2.otfrom,
            otto:
              element2.otto !== ''
                ? element2.otto.substring(0, 2) + '.' + element2.otto.substring(2, 4)
                : element2.otto,
            custid: element2.custid,
            custname: element2.custname,
            counterid: element2.counterid,
            countername: element2.countername,
            typecancel: element2.typecancel,
            satusleave: element2.status_leave,
          });
        }

        
        

      });
      
    });

    console.log(valToMonths);

    this.values = valToMonths;
    // this.loading.dismiss();
    return this.values;
  }


  onChanges($event: any) {
    // console.log($event);
  }

  async cancelPlan(v) {

    console.log(moment(v.date, 'DDMMYYYY').format('YYYYMM'));

    console.log(this.period);

    console.log(this.monthChange);
    
    

    const dataset = [];
      console.log(v);
        dataset.push({
        // flagdesc: s.type,
        assigndate: v.date,
        custid: v.custid,
        counterid: v.counterid,
        yearmonth: moment(this.monthChange, 'YYYYMM').format('YYYYMM'),
        csgid: this.empId,
        timetype: '',
        timefrom: '',
        timeto: '',
        timeotfrom: '',
        timeotto: '',
        worktype: ''
      });


    console.log(dataset);
    // }

    const body = { dataset };

    console.log(body);
      // return
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
        //history.pushState('monthFromCreate','',this.monthChange);

        this.monthCreate = this.monthChange;

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
    this.monthCreate = this.monthChange

    this.router.navigate(['csg-plan/create-plan'], navigationExtras);
  }

  async approverDetail(dataYearmonth,dataCSGID,status) {
    const navigationExtras: NavigationExtras = {
      state: {
        yearmonth: dataYearmonth,
        csgid: dataCSGID,
        step_status: status
      }
    };

    console.log(navigationExtras);


    this.router.navigate(['csg-plan/approver-detail'], navigationExtras);
  }

  back(): void {
    this.router.navigate(['/home']);
  }
}
