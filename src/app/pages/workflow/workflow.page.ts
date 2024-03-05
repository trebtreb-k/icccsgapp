import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

import { AlertService } from './../../services/utils/alert/alert.service';
import { LoadingService } from './../../services/utils/loading/loading.service';
import { WorkflowService } from './../../services/api/workflow/workflow.service';
import { moment } from './../../services/utils/moment/moment.service';

moment.locale('th');

@Component({
  selector: 'app-workflow',
  templateUrl: './workflow.page.html',
  styleUrls: ['./workflow.page.scss'],
})
export class WorkflowPage implements OnInit {
  current: 'WAIT' | 'APPROVE' | 'CANCEL' = 'WAIT';

  a1: any = [];
  c1: any = [];
  g1: any = [];
  x1: any = [];

  menus = [
    { title: 'ลาป่วย', types: [{ name: 'ลาป่วย', code: 'A1' }], logo: 'assets/images/workflow/sick.svg' },
    {
      title: 'ลากิจ/กิจพิเศษ',
      types: [
        { name: 'ลากิจ', code: 'C1' },
        { name: 'ลากิจพิเศษ', code: 'C2' },
      ],
      logo: 'assets/images/workflow/employee.svg',
    },
    { title: 'ลาพักร้อน', types: [{ name: 'ลาพักร้อน', code: 'G1' }], logo: 'assets/images/workflow/holiday.svg' },
  ];

  lottiefiles = {
    loading: {
      options: { path: 'assets/lottiefiles/reload.json', loop: true },
      width: '80px',
      height: '80px',
    },
    warning: {
      options: { path: 'assets/lottiefiles/warning-map.json', loop: false },
      width: '150px',
      height: '150px',
    },
    noDocument: {
      options: { path: 'assets/lottiefiles/no-document.json', loop: false },
      width: '150px',
      height: '150px',
    },
  };

  constructor(private router: Router, private api: WorkflowService, private loading: LoadingService, private alert: AlertService) {}

  ngOnInit(): void {}

  ionViewDidEnter(): void {
    this.loadInit();
  }

  async loadInit(): Promise<void> {
    try {
      await this.loading.present();
      const lists = await this.api.workflowLists();

      const filterAbsentCode = (datas: any[], status: string) => datas.filter((data: any) => data.workflow_status === status);

      const dataLists = (datas: any[]) =>
        datas.map((data: any) => {
          const format = (date: any) => moment(date, 'DD/MM/YYYY').format('DD MMM YYYY');
          const showDate =
            data.start_date === data.end_date
              ? `${format(data.start_date)} ${data.start_time} - ${data.end_time}`
              : `${format(data.start_date)} ${data.start_time} - ${format(data.end_date)} ${data.end_time}`;

          return { ...data, show_date: showDate };
        });

      this.a1 = filterAbsentCode(dataLists(lists.datas || []), 'WAIT');
      this.c1 = filterAbsentCode(dataLists(lists.datas || []), 'APPROVE');
      this.x1 = filterAbsentCode(dataLists(lists.datas || []), 'CANCEL');
      this.g1 = filterAbsentCode(dataLists(lists.datas || []), 'NOTAPPROVE');

      this.loading.dismiss();
    } catch (error) {
      console.log(error);
      this.loading.dismiss();
    }
  }

  doRefresh(event: any) {
    setTimeout(() => {
      this.loadInit();
      this.current = 'WAIT';
      event.target.complete();
    }, 2000);
  }

  onCreate(): void {
    // const navigationExtras: NavigationExtras = { state: { ...param } };
    this.router.navigate(['workflow/create']);
  }

  onDetial(param: any): void {
    const navigationExtras: NavigationExtras = { state: { ...param } };
    this.router.navigate(['workflow/detial'], navigationExtras);
  }
}

// ? ###### ? : absent : A1 = ลาป่วย | C1 = ลากิจ | C2 = ลากิจพิเศษ | G1 = ลาพักร้อน
// ? ###### ? : workflow : ['WAIT', 'APPROVE', 'NOTAPPROVE', 'CANCEL', 'ANSWER']
