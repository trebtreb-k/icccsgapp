import { Component, Input, OnInit } from '@angular/core';
import { NavParams, PopoverController } from '@ionic/angular';
import { NavigationExtras, Router } from '@angular/router';

import { CsgPlanService } from './../../../services/api/csg-plan/csg-plan.service';
import { StorageService } from './../../../services/storage/storage.service';

@Component({
  selector: 'app-create-plan-menu-popover',
  templateUrl: './create-plan-menu-popover.component.html',
  styleUrls: ['./create-plan-menu-popover.component.scss'],
})
export class CreatePlanMenuPopoverComponent implements OnInit {
  @Input() props: any;
  dataShopCounterAPI: any;
  dataTimeTypeAPI: any;
  type: any;
  custID: any;
  dataCounterAPI: any;
  dataWorkTypeAPI: any;
  otherShop: any;
  otherCounters: any;
  empID: any;
  counterID: any;
  selectedIndex: any;
  selectedIndexC: any;

  constructor(
    private router: Router,
    private storage: StorageService,
    private CreatePlanPopover: PopoverController,
    private api: CsgPlanService,
    private navParams: NavParams,
  ) {
    const type = this.navParams.get('props').type;
    const counters = this.navParams.get('props').dataCounter;
    const custid = this.navParams.get('props').custid;
    const counterid = this.navParams.get('props2').counterid;
    const time_from = this.navParams.get('props3').time_from;
    const time_to = this.navParams.get('props3').time_to;
    const work_type = this.navParams.get('props4').worktype;
    const work_type_name = this.navParams.get('props4').worktypename;
    const work_type_color = this.navParams.get('props4').worktypecolor;
    console.log(this.navParams.get('props4'));


    this.dataCounterAPI = counters;
    this.type = type;
    this.custID = custid;
    this.counterID = counterid;
    this.dataTimeTypeAPI = counterid;
    // this.dataWorkTypeAPI = counterid;
  }

  async ngOnInit() {

    await this.getUserInfo();

    //console.log(this.props);
    console.log(this.type);

    // const callApi = await this.api.getShopCounterCSGPlan(this.empID);
    if(this.type === 'counter'){
      console.log(this.custID);
        const callApi = !this.custID ? '' : await this.api.getCouterShopCSGPlan(this.empID,this.custID);
        this.dataCounterAPI = callApi.datas;

        console.log(this.dataCounterAPI);
    }else if(this.type === 'shop'){
      const callApi = await this.api.getShopCSGPlan(this.empID);
      this.dataShopCounterAPI = callApi.datas;
      console.log(this.dataShopCounterAPI);
    }else if(this.type === 'worktype'){
      const callApi = await this.api.getWorkTypeCSGPlan();
      this.dataWorkTypeAPI = callApi.datas;
      console.log('********',this.dataWorkTypeAPI);
    }else{
      const callApi = !this.custID ? '' : !this.counterID ? '' : await this.api.getTimeTypeCounterCSGPlan(this.custID,this.counterID);
      this.dataTimeTypeAPI = callApi.datas;
      console.log(this.dataTimeTypeAPI);
    }
    console.log(this.dataTimeTypeAPI);
  }

  async getUserInfo(): Promise<void> {
    const info = await this.storage.get('USER_INFO');
    this.empID = info?.emp_id;
  }

  meClicked(event: any, data: any, type: string) {

    console.log(type);

    this.CreatePlanPopover.dismiss({
      dismissed: true,
      name: type === 'shop' ? `${data.custid} ${data.custname}` : type === 'counter' ? `${data.counterid} ${data.countername}` : type === 'timetype' ? `${data.time_type} ( ${data.time_from} - ${data.time_to} )` : '',
      value: type === 'shop' ? data.custid :  type === 'counter' ? data.counterid : data.time_type,
      counter: type === 'shop' ? data.counters : null,
      worktype: type === 'worktype' ? data.work_type : '',
      worktypename: type === 'worktype' ? data.work_dexc : '',
      worktypecolor: type === 'worktype' ? data.work_color : '',
      time_from: type === 'timetype' ? data.time_to : '',
      time_to: type === 'timetype' ? data.time_to : '',
    });

    console.log(data);
    // if(type === 'shop'){

    //   console.log('????????????',this.empID,data.custid);

    //   const callApi2 = this.api.getCouterShopCSGPlan(this.empID,data.custid);
    //   //   this.dataCounterAPI = callApi.datas;

    //     console.log(callApi2);
    // }

  }


  // getCounter(){
  //   const callApi = await this.api.getCouterShopCSGPlan(this.empID);
  //   this.dataShopCounterAPI = callApi.datas;
  //   console.log(this.dataShopCounterAPI);
  // }

  inputTextShop(ev: any) {
    this.otherShop = ev.detail.value;
    this.selectedIndex = 0;
    if (this.otherShop !== '') {
      // console.log('มีค่า');
      this.selectedIndex = 1;
    }
    console.log(this.otherShop);
  }
  async addNewShopCounter(type: any) {
    const searchCustID = await this.api.searchCustID(this.otherShop, this.empID);
    // console.log(searchCustID);
    // console.log(searchCustID.datas[0].counters);
    console.log(searchCustID);

    this.CreatePlanPopover.dismiss({
      dismissed: true,
      // name: type === 'shop' ? `${this.otherShop} ${searchCustID.data.datas[0].custname}` :  `this.otherCounters`,
      name:
        type === 'shop' && searchCustID.datas.length === 1
          ? `${this.otherShop} ${searchCustID.datas[0].custname}`
          : type === 'shop'
          ? 'ไม่มีรหัสร้านค้านี้'
          : this.otherCounters,
      value:
        type === 'shop' && searchCustID.datas.length === 1 ? this.otherShop : type === 'shop' ? 'ไม่มีรหัสร้านค้านี้' : this.otherCounters,
      counter:
        type === 'shop' && searchCustID.datas.length === 1 ? searchCustID.datas[0].counters : type === 'shop' ? 'ไม่มีรหัสร้านค้านี้' : null,
    });
  }

  inputTextCounter(ev: any) {
    this.otherCounters = ev.detail.value;
    this.selectedIndexC = 0;
    if (this.otherCounters !== '') {
      // console.log('มีค่า');
      this.selectedIndexC = 1;
    }
  }

  closedPopover(){
    this.CreatePlanPopover.dismiss({
      dismissed: false,
    });
  }
}
