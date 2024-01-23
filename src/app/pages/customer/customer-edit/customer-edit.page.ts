import { AlertController, NavController, ToastController} from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, NavigationExtras } from '@angular/router';

import { API_RESPONSE_PROFILE } from './../../../services/authen/authen.model';
import { CustomerService } from './../../../services/api/customer/customer.service';
import { LoadingService } from './../../../services/utils/loading/loading.service';
import { StorageService } from './../../../services/storage/storage.service';
import { moment } from './../../../services/utils/moment/moment.service';


@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.page.html',
  styleUrls: ['./customer-edit.page.scss'],
})
export class CustomerEditPage implements OnInit {
    user: API_RESPONSE_PROFILE;

    formCustomer: FormGroup = null;

    state : any;

    constructor(
      private formBuild: FormBuilder,
      private api: CustomerService,
      private alertController: AlertController,
      private loading: LoadingService,
      private storage: StorageService,
      private navCtrl: NavController,
      private router: Router,
      private toastController : ToastController,
    ) {

       this.state = this.router.getCurrentNavigation()?.extras?.state || null;

       console.log('this.state ',this.state )

    }

    ngOnInit() {
      this.formCustomer = this.formBuild.group({
        cus_id      : [this.state.customer_id],
        emp_id      : [this.state.emp_id],
        prefix      : [this.state.prefix],
        firstname   : [this.state.first_name, Validators.compose([Validators.required])],
        lastname    : [this.state.last_name],
        nickname    : [this.state.nickname],
        gender      : [this.state.gender, Validators.compose([Validators.required])],
        birthday    : [(!this.state.birthday)? null : moment(this.state.birthday,'DD-MM-YYYY').format()],
        email       : [this.state.email],
        phone       : [this.state.phone, Validators.compose([Validators.required, Validators.minLength(10)])],
        line_id     : [this.state.line_id],
        facebook_id : [this.state.facebook],
        status      : [null],
        description : [this.state.description],
        hisher_id   : [this.state.hh_id],
        img_profile : [this.state.img_profile],
        img_avatar  : [this.state.img_avatar],
        code_avatar : [this.state.code_avatar],
        store_id    : [null],
        branch_id   : [null],
        counter_id  : [null],
        cust_id     : [null],
      });

      this.getUserInfo();
    }

    async getUserInfo(): Promise<void> {
      const info = await this.storage.get('USER_INFO');
      this.user = info;
    }

    async presentToast(message) {
      const toast = await this.toastController.create({
        message: message,
        duration: 1000
      });
      toast.present();
    }

    async onSaveEditCustomer(): Promise<void> {
      const { birthday } = this.formCustomer.value;

      const body = {
        ...this.formCustomer.value,
        emp_id    : this.user.emp_id,
        birthday  : !this.formCustomer.value.birthday ? null : moment(birthday).format('DD/MM/YYYY'),
        store_id  : this.user.store_id,
        branch_id : this.user.branch_id,
        counter_id: this.user.counter_id,
        cust_id   : this.user.cust_id,
      };

      try {
        const resposne = await this.api.updateCustomer(body);

       // this.navCtrl.back();
  
         const navigationExtras: NavigationExtras = {
          queryParams: {  //state: {
              ...this.state,
              cus_id      : this.formCustomer.value.cus_id,
              emp_id      : this.formCustomer.value.emp_id,
              prefix      : this.formCustomer.value.prefix,
              first_name  : this.formCustomer.value.firstname,
              last_name   : this.formCustomer.value.lastname,
              nickname    : this.formCustomer.value.nickname,
              gender      : this.formCustomer.value.gender,
              birthday    : (!this.formCustomer.value.birthday)?'':moment(this.formCustomer.value.birthday).format('DD-MM-YYYY'),
              email       : this.formCustomer.value.email,
              phone       : this.formCustomer.value.phone,
              line_id     : this.formCustomer.value.line_id,
              facebook    : this.formCustomer.value.facebook_id,
              status      : this.formCustomer.value.status,
              description : this.formCustomer.value.description,
              hh_id       : this.formCustomer.value.hisher_id,
              img_profile : this.formCustomer.value.img_profile,
              img_avatar  : this.formCustomer.value.img_avatar,
              code_avatar : this.formCustomer.value.code_avatar,
              store_id    : this.formCustomer.value.store_id,
              branch_id   : this.formCustomer.value.branch_id,
              counter_id  : this.formCustomer.value.counter_id,
              cust_id     : this.formCustomer.value.cust_id,
           },
           replaceUrl : true
         };


         this.presentToast('บันทึกข้อมูลเรียบร้อย');
         this.router.navigate(['customer/customer-view'], navigationExtras);

      } catch (error) {
        console.log(error);
      }
    }
  }
