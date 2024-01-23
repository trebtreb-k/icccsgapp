import { AlertController, NavController, ActionSheetController} from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

import { CustomerService } from './../../../services/api/customer/customer.service';
import { LoadingService } from './../../../services/utils/loading/loading.service';
import { StorageService } from './../../../services/storage/storage.service';
import { moment } from './../../../services/utils/moment/moment.service';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.page.html',
  styleUrls: ['./customer-add.page.scss'],
})
export class CustomerAddPage implements OnInit {
  user: any;
  type: string = 'csg';
  title:string= '';
  titleDay:string= '';

  customers: any[] = [];
  customersInit: any[] = [];

  customersSelected: any[] = [];

  constructor(
    private api: CustomerService,
    private alertController: AlertController,
    private loading: LoadingService,
    private storage: StorageService,
    private navCtrl: NavController,
    private route: ActivatedRoute,
    public actionSheetController: ActionSheetController,
  ) {
    this.route.params.subscribe(params => {
      this.type = params["type"];      
      if(this.type=='csg'){
         this.title = 'เพิ่มจากสมาชิกที่เคยขาย';
      }else{
         this.title = 'เพิ่มจากสมาชิกในร้านค้าที่ลงทะเบียน';
      }
  });
  }


  async ngOnInit() {
     this.getCustomerPurchase(100);
  }

  async getCustomerPurchase(day) {
    try {
      await this.loading.present();

      await this.getUserInfo();

      this.titleDay = '(ย้อนหลัง '+day+' วัน)';

      let customers :any;
      if(this.type==='csg'){
         customers = await this.api.getCustomerPurchaseByEmp(this.user.emp_id, day);
      }else{
         customers = await this.api.getCustomerPurchaseByEmpRegister(this.user.emp_id, day);
      }

      //const customers = await this.api.getCustomerPurchaseByEmp(this.user.emp_id);
      const raws = customers.data || [];
      const datas = raws.map((p: any) => {
        const img = (tier: string | null) => {
          if (!tier) {
            return null;
          }
          const id = tier === 'PLATINUM' ? 'card-platinum' : tier === 'GOLD' ? 'card-gold' : tier === 'SILVER' ? 'card-silver' : 'card';
          return `https://firebasestorage.googleapis.com/v0/b/hisherapp.appspot.com/o/images%2Fpartners%2FHISHER%2F${id}.jpg?alt=media`;
        };
        const birthday = (date: string | null) => (!date ? null : moment(date, 'DD-MM-YYYY').format('DD MMMM YYYY'));

        return { ...p, img_card: img(p.class_card), birthday_full: birthday(p.birthday) };
      });

      this.customers = datas || [];
      this.customersInit = datas || [];
      this.loading.dismiss();
    } catch (error) {
      console.log(error);
      this.loading.dismiss();
    }
  }



  async getUserInfo(): Promise<void> {
    const info = await this.storage.get('USER_INFO');
    this.user = info;
  }

  checkEvent(customer: any) {
    const index = this.customersSelected.findIndex((p: any) => p.hisher_id === customer.hisher_id);

    if (index < 0) {
      this.customersSelected.push({ ...customer, isCheck: true });
    } else {
      this.customersSelected[index].isCheck = !this.customersSelected[index].isCheck;
    }

    const customers = this.customersSelected.filter((p: any) => p.isCheck);
    this.customersSelected = customers;
  }

  async onAddCustomer() {
    const body = this.customersSelected.map((p: any) => ({
      emp_id: this.user.emp_id,
      prefix: p.prefix1,
      firstname: p.first_name,
      lastname: p.last_name,
      nickname: p.nickname,
      gender: p.gender,
      birthday: p.birthday,
      email: p.email,
      phone: p.phone,
      line_id: p.line_id,
      facebook_id: p.facebook_id,
      status: p.status,
      description: p.description,
      hisher_id: p.hisher_id,
      img_profile: p.img_profile,
      img_avatar: p.img_avatar,
      code_avatar: p.birthday,
      store_id: this.user.store_id,
      branch_id: this.user.branch_id,
      counter_id: this.user.counter_id,
      cust_id: this.user.cust_id,
    }));

    try {
      await this.loading.present();
      const add = await this.api.createCustomer({ datas: body });
      this.loading.dismiss();
      this.navCtrl.back();
    } catch (error) {
      console.log(error);
      this.loading.dismiss();
    }
  }


  async selectDate() {
    const actionSheet = await this.actionSheetController.create({
      header: 'ดูย้อนหลัง',
      buttons: [
        {
          text: '30 วัน',
          icon: 'remove',
          handler: () => {
            this.getCustomerPurchase(30);
          },
        },
        {
          text: '60 วัน',
          icon: 'remove',
          handler: () => {
            this.getCustomerPurchase(60);
          },
        },
        {
          text: '90 วัน',
          icon: 'remove',
          handler: () => {
            this.getCustomerPurchase(90);
          },
        },
        {
          text: '180 วัน',
          icon: 'remove',
          handler: () => {
            this.getCustomerPurchase(180);
          },
        },
        {
          text: '365 วัน',
          icon: 'remove',
          handler: () => {
            this.getCustomerPurchase(365);
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


}



