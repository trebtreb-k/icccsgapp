import { Component, OnInit } from '@angular/core';
import { moment } from './../../services/utils/moment/moment.service';
import { CheckInoutService } from './../../services/api/check-inout/check-inout.service';
import { WorkflowService } from './../../services/api/workflow/workflow.service';

@Component({
  selector: 'app-time-stat',
  templateUrl: './time-stat.page.html',
  styleUrls: ['./time-stat.page.scss'],
})
export class TimeStatPage implements OnInit {

  type: 'string'; // 'string' | 'js-date' | 'moment' | 'time' | 'object'

  timeStat: string = 'dailyStat';

  dataApi :any = [];
  loadData: any = [];
  loadDataCalendar :any = [];
  optionsMulti: any;
  monthYear :string = moment().format('MMYYYY');
  dateSelect :string = moment().format('DD/MM/YYYY');
  loaded : boolean;
  loadingMonth : boolean;
  loadingYear : boolean;

  loadDataMonthly: any = [];
  loadDataYearly: any = [];
  data_monthly_adjust: any;
  data_yearly_adjust: any;
  data_yearly_adjust_period: string;
  date_yearly_adjust_vacation_year: string;
  date_yearly_adjust_vacation_day: string;

  viewTitleYear : string;
  viewTitleMonth : string;

  constructor(private checkInOutApi :CheckInoutService,
              private timeStatApi: WorkflowService) { }

  ngOnInit() {
    this.viewTitleYear = moment().format('YYYY');
    this.viewTitleMonth = moment().format('MMMM YYYY');
  }

  async ionViewDidEnter() {
     this.getDataTimeStat(this.monthYear);

    //  this.loadYearlyAdjust('2021');
     this.loadYearlyAdjust(this.viewTitleYear);
     let period =  moment(this.viewTitleMonth, 'MMMM YYYY').format('MM/YYYY');
     this.loadMonthlyAdjust(period);
  }


  doRefresh(event) {
    setTimeout(() => {
        this.ionViewDidEnter();
        event.target.complete();
    }, 2000);
  }


  async getEventForDays(events: any) {
    console.log(events)
    this.dateSelect = moment(events._d).format('DD/MM/YYYY');
    console.log(this.dateSelect)

    this.loadData = this.dataApi.filter((datas:any)=>{
        return (this.dateSelect == datas.tran_date);
    });
  }

  async getEventForMonths(events: any) {
    console.log(events)
    //let moment(events.newMonth.string).format('DD/MM/YYYY'));
    if(events.newMonth.string.substring(0,7)==moment().format('YYYY-MM')){
      this.dateSelect = moment().format('DD/MM/YYYY');
    }else{
      if(events.newMonth.string < events.oldMonth.string) {
        this.dateSelect = moment(this.dateSelect,'DD/MM/YYYY').subtract(1, 'month').format('DD/MM/YYYY');
      }else{
        this.dateSelect = moment(this.dateSelect,'DD/MM/YYYY').add(1, 'month').format('DD/MM/YYYY');
      }
    }




    console.log('this.dateSelect',this.dateSelect)

    this.monthYear = moment(events.newMonth.string).format('MMYYYY');
    this.getDataTimeStat(this.monthYear);


  }

  async getDataTimeStat(transDate:string) {
    this.loaded = false;
    let response = await this.checkInOutApi.getCheckInOutDetail(transDate);
    this.dataApi = response.datas;

    this.dataApi = this.dataApi.map((datas:any)=>({...datas,image: (datas.time_in!=''&&datas.time_out!='')?'assets/images/csg-plan/calendar_n.svg':'assets/images/csg-plan/calendar_o.svg'}))
    this.loadData = this.dataApi
    console.log(this.loadData)

    this.loadData = this.dataApi.filter((datas:any)=>{
        return (this.dateSelect == datas.tran_date);
    });


    let i = -1;
    let j = -1;
    let data = [];
    let oldDate = '';
    this.dataApi.forEach((e: any) => {
      i++;

      const dateC = moment(e.tran_date, 'DD/MM/YYYY').format();//'MM-DD-YYYY');


      if(oldDate != dateC || i==0) {
        j++;
        data.push({
          date: new Date(dateC),
          cssClass:
            e.time_in !== '' && e.time_out !== ''
              ? 'custom-calendar workdayShow'
              : 'custom-calendar urgent',
          subTitle: null,
          timeIn  : e.time_in,
          timeOut : e.time_out
        });
      }else{
        console.log('xxx->'+j,data[j]);

        if(e.time_in !== '' && data[j].timeIn==''){
           data[j].timeIn = e.time_in;
        }
        if(e.time_out !== '' && data[j].timeOut==''){
          data[j].timeOut = e.time_out;
        }
        data[j].cssClass =  data[j].timeIn !== '' && data[j].timeOut !== ''
        ? 'custom-calendar workdayShow'
        : 'custom-calendar urgent'

        /*
        data[j].cssClass =  e.time_in !== '' && e.time_out !== ''
                              ? 'custom-calendar workdayShow'
                              : 'custom-calendar urgent'
                              */
      }

      oldDate = dateC;
    //  console.log( e.time_in +' && '+ e.time_out);
    //  console.log( data)
    });


    this.loadDataCalendar =  data;
    console.log('loadDataCalendar',this.loadDataCalendar)
    this.loaded = true;



    this.optionsMulti = {
      from: new Date(2000, 0, 1),
      monthFormat: 'ปี YYYY เดือน MMM',
      monthPickerFormat: ['ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย.', 'ก.ค.', 'ส.ค.', 'ก.ย.', 'ต.ค.', 'พ.ย.', 'ธ.ค.'],
      weekdays: ['อา', 'จ', 'อ', 'พ', 'พฤ', 'ศ', 'ส'],
      weekStart: 0,
      showToggleButtons: true,
      showMonthPicker: true,
      daysConfig: this.loadDataCalendar,
    };
  }






  /****************************************/
  async loadMonthlyAdjust(period) {
    this.loadingMonth = true;

    console.log('period',period);
    const res = await this.timeStatApi.monthlyAdjust(period);
    this.loadDataMonthly = res.datas;
    this.loadingMonth = false;

    
    

    console.log('loadMonthlyAdjust',res);
    
  }

  async loadYearlyAdjust(period) {
    this.loadingYear = true;
    const res = await this.timeStatApi.yearlyAdjust(period);
    this.loadDataYearly = res.datas;
    this.data_yearly_adjust_period = res.lastprocess;
    this.date_yearly_adjust_vacation_year = (!res.vacation)?'':res.vacation.year;
    this.date_yearly_adjust_vacation_day  = (!res.vacation)?'':res.vacation.day;
    this.loadingYear = false;

    console.log('loadYearlyAdjust',this.loadDataYearly);
    
  }



  prevYear() {
    this.viewTitleYear = moment(this.viewTitleYear, 'YYYY').subtract(1, 'year').format('YYYY');
    this.loadYearlyAdjust(this.viewTitleYear);
  }

  nextYear() {
    this.viewTitleYear = moment(this.viewTitleYear, 'YYYY').add(1, 'year').format('YYYY');
    this.loadYearlyAdjust(this.viewTitleYear);
  }

  prevMonth() {
    this.viewTitleMonth = moment(this.viewTitleMonth, 'MMMM YYYY').subtract(1, 'month').format('MMMM YYYY');
    let period =  moment(this.viewTitleMonth, 'MMMM YYYY').format('MM/YYYY');
    this.loadMonthlyAdjust(period);
  }

  nextMonth() {
    this.viewTitleMonth = moment(this.viewTitleMonth, 'MMMM YYYY').add(1, 'month').format('MMMM YYYY');
    let period =  moment(this.viewTitleMonth, 'MMMM YYYY').format('MM/YYYY');
    this.loadMonthlyAdjust(period);
  }

}
