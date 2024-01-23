import { AlertController, NavController, PopoverController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

import { CsgPlanService } from './../../../services/api/csg-plan/csg-plan.service';
import { LoadingService } from './../../../services/utils/loading/loading.service';
import { StorageService } from './../../../services/storage/storage.service';
import { moment } from './../../../services/utils/moment/moment.service';

moment.locale('th');

@Component({
  selector: 'app-approver-detail',
  templateUrl: './approver-detail.page.html',
  styleUrls: ['./approver-detail.page.scss'],
})
export class ApproverDetailPage implements OnInit {
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
  current: any;

  constructor(
    private storage: StorageService,
    private api: CsgPlanService,
    private router: Router,
    private createPlanPopover: PopoverController,
    private navCtrl: NavController,
    private alertController: AlertController,
    private loading: LoadingService,
  ) {
    const state = this.router.getCurrentNavigation().extras.state;
    console.log(state);
    this.paramsMonthBefore = state;
  }

  ngOnInit() {
    this.loading.present();
    this.getDetailApprover(this.paramsMonthBefore.yearmonth, this.paramsMonthBefore.csgid);
  }


  ionViewDidEnter(): void {
    // setTimeout(() => {
    //   this.loading.dismiss();
    // }, 2000);
  }

  async getDetailApprover(period,empID) {

    const callApiApproverDetail = await this.api.getApproverDetail(period, empID);
    // const callApiCountHoliday = await this.api.getApproverDetail('202306', '90536');
    console.log(callApiApproverDetail.datas);

    if (callApiApproverDetail.datas) {
      this.values = callApiApproverDetail.datas;

    }
    this.loading.dismiss();
    // this.values = valToMonths;
    // return this.dataHoliday;
    // this.editValue()
  }



}
