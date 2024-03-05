import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';


import { IncomeService } from './../../services/api/income/income.service';
import { LoadingService } from './../../services/utils/loading/loading.service';
import { StorageService } from './../../services/storage/storage.service';
import { moment } from './../../services/utils/moment/moment.service';

moment.locale('th');

type TypeChart = 'line' | 'bar' | 'radar' | 'pie' | 'doughnut' | 'polarArea' | 'bubble' | 'scatter';

interface CalendarData {
  text: string | undefined;
  value: string | undefined;
}
@Component({
  selector: 'app-income',
  templateUrl: './income.page.html',
  styleUrls: ['./income.page.scss'],
})
export class IncomePage implements OnInit {
  current: 'ALL' | 'LIST' = 'ALL';

  user: any;

  currentCalendar: CalendarData;
  disableNextCalendar: boolean;

  incomeData: number;
  incomeProgress: any;
  incomeDataChart: any;
  incomeTypeChart: TypeChart = 'doughnut';
  incomeOptionsChart: any = {
    responsive: true,
    cutoutPercentage: 75,
    legend: {
      display: false,
    },
  };

  detialDate: string;
  detialDataChart: any;
  detialTypeChart: TypeChart = 'bar';
  detialOptionsChart: any = {
    responsive: true,
    cutoutPercentage: 75,
    legend: {
      display: true,
    },
    scales: {
      xAxes: [
        {
          gridLines: {
            offsetGridLines: true,
          },
        },
      ],
    },
  };

  summaryData: any = [];

  dailyDatas: any = [];

  lottiefiles = {
    warning: {
      options: { path: 'assets/lottiefiles/warning-map.json', loop: false },
      width: '150px',
      height: '150px',
    },
  };

  constructor(
    private storage: StorageService,
    private apiIncome: IncomeService,
    private loading: LoadingService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    const now = moment().format('YYYYMM');

    this.getUserInfo();
    this.initialCalendar();
    this.loadAllData(now);
  }

  ionViewDidEnter(): void {
    // const now = moment().format('YYYYMM');

    // this.getUserInfo();
    // this.initialCalendar();
    // this.loadAllData(now);
  }

  doRefresh(event) {
    setTimeout(() => {
        this.ngOnInit();
        event.target.complete();
    }, 2000);
  }

  async loadAllData(period: string): Promise<void> {
    try {
      await this.loading.present();

      const incomeDaily = await this.apiIncome.getIncomeDaily(period);
      const incomeMonth = await this.apiIncome.getIncomeMonth(period);

      const dailyDatas = incomeDaily?.datas || [];
      const monthDatas = incomeMonth?.datas || [];

      this.loadDoughnutChart(monthDatas);
      this.incomeProgress = monthDatas;
      this.loadBarChart(dailyDatas);

      this.dailyDatas =  [];

      for (const period of dailyDatas) {
          for(let i = 0; i < period.day.length; i++) {
            let day = (parseInt(period.day[i])<10)?'0'+period.day[i]: period.day[i];
            let period_date = period.periodtrans + day
            if(period.commission[i] !== null && period.incentive[i] !== null && period.ot[i] !== null && period.holiday[i] !== null){

              if(period.commission[i]+period.incentive[i]+period.ot[i]+period.holiday[i]>0){

                this.dailyDatas.push({ 
                  date       : moment(period_date,'YYYYMMDD').format('DD-MM-YYYY'),
                  commission : period.commission[i],
                  incentive  : period.incentive[i],
                  ot         : period.ot[i],
                  holiday    : period.holiday[i],
                });
              }
            }

          } 
          console.log(this.dailyDatas)
        
      }



      this.loading.dismiss();
    } catch (error) {
      console.error(error);
      this.loading.dismiss();
    }
  }

  async getUserInfo(): Promise<void> {
    const info = await this.storage.get('USER_INFO');
    this.user = info;
  }

  async segmentChange(ev: any) {
    const { value } = ev.detail;

    if (value === 'LIST') {
      try {
        await this.loading.present();
        const summary = await this.apiIncome.getSummary();
        const datas: any[] = summary.datas || [];
        const resp = datas.map((data: any) => ({
          ...data,
          _period: moment(data.period, 'DD/MM/YYYY').format('DD MMM YYYY'),
        }));

        this.summaryData = resp;
        this.loading.dismiss();
      } catch (error) {
        console.error(error);
        this.loading.dismiss();
      }
    }
  }

  initialCalendar(): void {
    const nowText = moment().format('MMMM YYYY');
    const nowValue = moment().format('YYYYMM');
    this.disableNextCalendar = false;
    this.currentCalendar = { text: nowText, value: nowValue };
  }

  async backCalendar(): Promise<void> {
    const now = moment().format('YYYYMM');
    const before = (v: string, f: string) => moment(v, 'YYYYMM').subtract(1, 'months').format(f);

    if (now >= before(this.currentCalendar.value, 'YYYYMM')) {
      this.disableNextCalendar = false;
    }

    this.currentCalendar = {
      text: before(this.currentCalendar.value, 'MMMM YYYY'),
      value: before(this.currentCalendar.value, 'YYYYMM'),
    };

    this.loadAllData(this.currentCalendar.value);
  }

  async nextCalendar(): Promise<void> {
    const now = moment().format('YYYYMM');
    const forward = (v: string, f: string) => moment(v, 'YYYYMM').add(1, 'months').format(f);

    if (now < forward(this.currentCalendar.value, 'YYYYMM')) {
      this.disableNextCalendar = true;
    }

    this.currentCalendar = {
      text: forward(this.currentCalendar.value, 'MMMM YYYY'),
      value: forward(this.currentCalendar.value, 'YYYYMM'),
    };

    this.loadAllData(this.currentCalendar.value);
  }

  loadDoughnutChart(params: any): void {
    this.incomeData = params.reduce((val: any, num: any) => val + num.amountpay, 0);
    const labels = params.map((val: any) => [val.incomecode]);
    const data = params.map((val: any) => [val.amountpay]);
    const backgroundColor = params.map((val: any) => [val.color]);


    this.incomeDataChart = {
      labels,
      datasets: [
        {
          label: 'My Income Chart',
          data,
          backgroundColor,
          borderAlign: 'center',
        },
      ],
    };
  }

  loadBarChart(params: any): void {
    const labels     = params[0].day.filter((d: any) => d);
    const commission = params[0].commission;
    const incentive  = params[0].incentive;
    const holiday    = params[0].holiday;
    const allowance  = params[0].allowance;
    const ot         = params[0].ot;
    const other      = params[0].other;

    this.detialDate = moment(params[0].periodtrans, 'YYYYMM').format('MMMM YYYY');
    this.detialDataChart = {
      labels,
      datasets: [
        {
          label: 'HOLIDAY',
          backgroundColor: 'rgba(125,142,159,0.8)',
          data: holiday,
          stack: 1,
        },
        {
          label: 'OT',
          backgroundColor: 'rgba(249,213,187,0.8)',
          data: ot,
          stack: 1,
        },
        {
          label: 'COMMISSION',
          backgroundColor: 'rgba(246,103,103,0.8)',
          data: commission,
          stack: 1,
        },
        {
          label: 'INCENTVE',
          backgroundColor: 'rgba(243,103,246,0.8)',
          data: incentive,
          stack: 1,
        },
        {
          label: 'ALLOWANCE',
          backgroundColor: 'rgba(0,102,204,0.8)',
          data: allowance,
          stack: 1,
        },
        {
          label: 'OTHER',
          backgroundColor: 'rgba(89,89,89,0.8)',
          data: other,
          stack: 1,
        },


      ],
    };
  }

  viewDetail(data: any): void {
    const navigationExtras: NavigationExtras = { state: { ...data } };
    this.router.navigate(['income/detial'], navigationExtras);
  }



}


