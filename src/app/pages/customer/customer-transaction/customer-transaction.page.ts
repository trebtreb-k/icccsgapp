import { ActionSheetController, ModalController } from '@ionic/angular';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { CustomerService } from './../../../services/api/customer/customer.service';
import { CustomerTransactionDetailComponent } from './../customer-transaction-detail/customer-transaction-detail.component';
import { LoadingService } from './../../../services/utils/loading/loading.service';
import { StorageService } from './../../../services/storage/storage.service';

@Component({
  selector: 'app-customer-transaction',
  templateUrl: './customer-transaction.page.html',
  styleUrls: ['./customer-transaction.page.scss'],
})
export class CustomerTransactionPage implements OnInit {
  state: any = null;

  filter = 'ทั้งหมด';

  hhId: any;
  cusId: any;

  initHeaders: any = [];
  headers: any = [];

  defaultCount = '365';

  constructor(
    private router: Router,
    private api: CustomerService,
    private activatedRoute: ActivatedRoute,
    private loading: LoadingService,
    private modalController: ModalController,
    private storage: StorageService,
    public actionSheetController: ActionSheetController
  ) {
    this.state = this.router.getCurrentNavigation()?.extras?.state || null;

    console.log(this.state);
  }

  async ngOnInit() {
    this.cusId = this.state.customer_id;
    this.hhId = this.state.hh_id;

    await this.getTransHeader('30', 50);
  }

  async getTransHeader(countDate: string, row: number): Promise<void> {
    try {
      this.loading.present();

      const getHeaderTrans = await this.api.getTransHeader(this.cusId, this.hhId, countDate, row);

      this.headers = getHeaderTrans.data;
      this.initHeaders = getHeaderTrans.data;
      this.filter = `ดูย้อนหลัง ${countDate} วัน`;

      this.loading.dismiss();
    } catch (error) {
      console.log(error);

      this.headers = [];
      this.initHeaders = [];
      this.filter = `ดูย้อนหลัง ${countDate} วัน`;

      this.loading.dismiss();
    }
  }

  async getUserInfo(): Promise<void> {
    const info = await this.storage.get('USER_INFO');
    this.cusId = info.cust_id;
  }

  async selectDate() {
    const actionSheet = await this.actionSheetController.create({
      header: 'ดูย้อนหลัง',
      buttons: [
        {
          text: '30 วัน',
          icon: 'remove',
          handler: () => {
            this.getTransHeader('30', 50);
          },
        },
        {
          text: '60 วัน',
          icon: 'remove',
          handler: () => {
            this.getTransHeader('60', 50);
          },
        },
        {
          text: '90 วัน',
          icon: 'remove',
          handler: () => {
            this.getTransHeader('90', 50);
          },
        },
        {
          text: '180 วัน',
          icon: 'remove',
          handler: () => {
            this.getTransHeader('180', 50);
          },
        },
        {
          text: '365 วัน',
          icon: 'remove',
          handler: () => {
            this.getTransHeader('365', 50);
          },
        },
        {
          text: 'ยกเลิก',
          icon: 'close',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          },
        },
      ],
    });
    await actionSheet.present();
  }

  searchTrans(ev: any) {
    const val = ev.target.value;

    if (val && val.trim() !== '') {
      const res = this.initHeaders.filter(
        (item: any) =>
          item.docno.toLowerCase().indexOf(val.toLowerCase()) > -1 ||
          item.storeid.toLowerCase().indexOf(val.toLowerCase()) > -1 ||
          item.ship_name.toLowerCase().indexOf(val.toLowerCase()) > -1 ||
          item.transdate.indexOf(val) > -1
      );

      this.headers = res;
    } else {
      this.headers = this.initHeaders;
      // this.filter = 'ทั้งหมด';
    }
  }

  async selectTrans(header: any): Promise<void> {
    try {
      this.loading.present();
      const bodyReq = {
        hh_id: this.hhId,
        docno: header.docno,
        transdate: header.transdate,
        store_id: header.storeid,
        branch_id: header.branchid,
        counter_id: header.counterid,
        cust_id: header.custid,
      };

      const response = await this.api.getTransDetail(bodyReq);
      const body = response.datas || [];

      this.loading.dismiss();

      const modal = await this.modalController.create({
        component: CustomerTransactionDetailComponent,
        cssClass: 'custom-modal-full',
        componentProps: {
          state: { header, body },
        },
      });

      modal.onDidDismiss().then(async (param: any) => {
        if (param.role !== 'backdrop' && param.data.dismissed) {
          // const { empid, emp_name } = param.data.person;
        }
      });

      return await modal.present();
    } catch (error) {
      console.log(error);
      this.loading.dismiss();
    }
  }
}
