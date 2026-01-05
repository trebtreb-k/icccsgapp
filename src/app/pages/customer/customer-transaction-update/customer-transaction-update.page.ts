
import { AlertController, NavController, PopoverController, ActionSheetController, ModalController } from '@ionic/angular';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { CustomerService } from './../../../services/api/customer/customer.service';
import { CustomerTransactionDetailComponent } from './../customer-transaction-detail/customer-transaction-detail.component';
import { LoadingService } from './../../../services/utils/loading/loading.service';
import { StorageService } from './../../../services/storage/storage.service';

@Component({
  selector: 'app-customer-transaction-update',
  templateUrl: './customer-transaction-update.page.html',
  styleUrls: ['./customer-transaction-update.page.scss'],
})
export class CustomerTransactionUpdatePage implements OnInit {

 
    state: any = null;
  
    filter = 'ทั้งหมด';
  
    hhId: any;
    cusId: any;
  
    initHeaders: any = [];
    headers: any = [];
    selectedItems: any;
  
    defaultCount = '365';
    countDateSelect: any;
  
    constructor(
      private router: Router,
      private api: CustomerService,
      private activatedRoute: ActivatedRoute,
      private alertController: AlertController,
      private loading: LoadingService,
      private modalController: ModalController,
      private storage: StorageService,
      public actionSheetController: ActionSheetController
    ) {
      this.state = this.router.getCurrentNavigation()?.extras?.state || null;
  
      console.log(this.state);
    }
  
    async ngOnInit() {
      this.cusId = this.state.emp_id;
      this.hhId = this.state.hh_id;
  
      await this.getTransHeader('1', 1);
    }
  
    async getTransHeader(countDate: string, row: number): Promise<void> {
      try {
        this.selectedItems = [];
        this.loading.present();
        this.countDateSelect = countDate;
  
        const getHeaderTrans = await this.api.getTransByEmpId(this.cusId,countDate);
  
          //this.selectedItems.push({emp_id:this.state.emp_id})

        console.log(getHeaderTrans);
          

        setTimeout(() => {
           this.headers = getHeaderTrans.data;
            this.initHeaders = getHeaderTrans.data;
            this.filter = `ดูย้อนหลัง ${countDate} วัน`;
      
            this.loading.dismiss();
        }, 1000);
       
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
            text: '1 วัน',
            icon: 'remove',
            handler: () => {
              this.getTransHeader('1', 50);
            },
          },
          {
            text: '3 วัน',
            icon: 'remove',
            handler: () => {
              this.getTransHeader('3', 50);
            },
          },
          {
            text: '5 วัน',
            icon: 'remove',
            handler: () => {
              this.getTransHeader('5', 50);
            },
          },
          {
            text: '7 วัน',
            icon: 'remove',
            handler: () => {
              this.getTransHeader('7', 50);
            },
          },
          {
            text: '14 วัน',
            icon: 'remove',
            handler: () => {
              this.getTransHeader('14', 50);
            },
          },
          {
            text: '30 วัน',
            icon: 'remove',
            handler: () => {
              this.getTransHeader('30', 50);
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
            item.tran_date.toLowerCase().indexOf(val.toLowerCase()) > -1 ||
            item.doc_no.toLowerCase().indexOf(val.toLowerCase()) > -1 ||
            item.cust_id.toLowerCase().indexOf(val.toLowerCase()) > -1 ||
            item.item_code.toLowerCase().indexOf(val.toLowerCase()) > -1 ||
            item.counter_id.indexOf(val) > -1
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

    async onSaveUpdate(): Promise<void> {

      
    
      
      this.selectedItems = this.headers.filter(h => h.checked === true);

      //this.headers.push({emp_id:this.state.emp_id})

      const selectedItems = {
        data: this.selectedItems.map(item => ({
          store_id: item.store_id,
          branch_id: item.branch_id,
          counter_id: item.counter_id,
          cust_id: item.cust_id,
          tran_date: item.tran_date,
          tran_type: item.tran_type,
          doc_no: item.doc_no,
          mobile: item.phone

        }))
      };
      

      console.log("รายการที่เลือก:", this.selectedItems);
      console.log("selectedItems:", selectedItems);

       
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'ยืนยันอัปเดตประวัติการซื้อ',
        message: 'จำนวนรายการที่เลือก: '+this.selectedItems.length+' รายการ <br>ต้องการอัปเดตข้อมูลใช่หรือไม่?',
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

              //console.log('Confirm Okay');
              this.updateCustomerTranSaction(selectedItems,this.state.emp_id);

            },
          },
        ],
      });
      await alert.present();
  

      
  
      
    }


    async onCheckChange(): Promise<void> {
      this.selectedItems = this.headers.filter(h => h.checked === true);
    
      this.selectedItems.forEach((item, index) => {
        this.selectedItems[index].emp_id  = this.state.emp_id;
        this.selectedItems[index].phone  = this.state.phone;

      });
      
      

    }
    


    async updateCustomerTranSaction(datas,emp_id) {

        console.log('updateCustomerTranSaction datas ',datas);
        console.log('updateCustomerTranSaction emp_id ',emp_id);
        
        const body = datas;
    
        console.log('body',body);
    
        const call = await this.api.updateCustomerTranSaction(body,emp_id);
        console.log(call.error_message);
        console.log(call);

        if (call.result !== true) {
          this.catchErrorResponse(call.error_message);
          return;
        }


        console.log("updateCustomerTranSaction countDateSelect" ,this.countDateSelect);
        
    
        await this.getTransHeader(this.countDateSelect, this.countDateSelect);
        // this.navCtrl.back();
    }

    catchErrorResponse(err) {
      this.alertController.create({
        header: 'เกิดข้อผิดพลาด',
        message: err?.message || 'กรุณาลองใหม่อีกครั้ง',
        buttons: ['ตกลง']
      }).then(res => res.present());
    }


  

  

}
