import { Component, Input, OnInit } from '@angular/core';
import { NavParams, PopoverController } from '@ionic/angular';
import { NavigationExtras, Router } from '@angular/router';

import { GuestPlanService } from './../../../services/api/guest-plan/guest-plan.service';
import { StorageService } from './../../../services/storage/storage.service';

@Component({
  selector: 'app-guest-create-plan-menu-popover',
  templateUrl: './guest-create-plan-menu-popover.component.html',
  styleUrls: ['./guest-create-plan-menu-popover.component.scss'],
})
export class GuestCreatePlanMenuPopoverComponent implements OnInit {
  @Input() props: any;
  dataShopCounterAPI: any;
  shopSe: any;
  dataCounterAPI: any;
  otherShop: any;
  otherCounters: any;
  empID: any;
  selectedIndex: any;
  selectedIndexC: any;

  constructor(
    private router: Router,
    private storage: StorageService,
    private CreatePlanPopover: PopoverController,
    private api: GuestPlanService,
    private navParams: NavParams
  ) {
    const type = this.navParams.get('props').type;
    const counters = this.navParams.get('props').dataCounter;
    console.log(this.navParams.get('props'));

    this.dataCounterAPI = counters;
  }

  async ngOnInit() {
    await this.getUserInfo();

    const DATAS = [
      {
        storeid: 'SHOP1',
        branchid: 'SHOP1',
        custid: 'SHOP1',
        custname: 'SHOP#1',
        counters: [
          {
            counterid: 'COUNTER',
            countername: 'COUNTER',
          },
        ],
      },
    ];

    this.dataShopCounterAPI = DATAS;
    //  this.dataShopCounterAPI = callApi.datas;
    //  this.dataShopCounterAPI = [
    //   {
    //     storeid  : 'SHOP1',
    //     branchid : 'SHOP1',
    //     custid   : 'SHOP1',
    //     custname : 'SHOP#1'
    //   },
    //   {
    //     storeid  : 'SHOP1',
    //     branchid : 'SHOP1',
    //     custid   : 'SHOP1',
    //     custname : 'SHOP#1'
    //   }
    //  ]

    // alert( this.dataShopCounterAPI.length );
    console.log('dataShopCounterAPI', this.dataShopCounterAPI);
  }

  ionViewDidEnter(): void {
    //
  }

  async getUserInfo(): Promise<void> {
    const info = await this.storage.get('USER_INFO');
    this.empID = info?.emp_id;
  }

  meClicked(event: any, data: any, type: string) {
    this.CreatePlanPopover.dismiss({
      dismissed: true,
      name: type === 'shop' ? data : data,
      value: type === 'shop' ? data : data,
      counter: type === 'shop' ? data : null,
    });
  }

  /*
  meClicked(event: any, data: any, type: string) {
    this.CreatePlanPopover.dismiss({
      dismissed: true,
      name: type === 'shop' ? `${data.custid} ${data.custname}` : `${data.counterid} ${data.countername}`,
      value: type === 'shop' ? data.custid : data.counterid,
      counter: type === 'shop' ? data.counters : null,
    });
  }
  */

  inputTextShop(ev: any) {
    this.otherShop = ev.detail.value;
    this.selectedIndex = 0;
    if (this.otherShop !== '') {
      // console.log('มีค่า');
      this.selectedIndex = 1;
    }
    console.log(this.otherShop);
  }
}
