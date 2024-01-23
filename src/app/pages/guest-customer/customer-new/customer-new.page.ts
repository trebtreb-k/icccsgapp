import { AlertController, NavController} from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { API_RESPONSE_PROFILE } from './../../../services/authen/authen.model';
import { GuestCustomerService } from './../../../services/api/guest-customer/guest-customer.service';
import { LoadingService } from './../../../services/utils/loading/loading.service';
import { StorageService } from './../../../services/storage/storage.service';
import { moment } from './../../../services/utils/moment/moment.service';

@Component({
  selector: 'app-customer-new',
  templateUrl: './customer-new.page.html',
  styleUrls: ['./customer-new.page.scss'],
})
export class CustomerNewPage implements OnInit {
  user: API_RESPONSE_PROFILE;

  formCustomer: FormGroup = this.formBuild.group({
    emp_id: [null],
    prefix: [null],
    firstname: [null, Validators.compose([Validators.required])],
    lastname: [null],
    nickname: [null],
    gender: [null, Validators.compose([Validators.required])],
    birthday: [null],
    email: [null],
    phone: [null, Validators.compose([Validators.required, Validators.minLength(10)])],
    line_id: [null],
    facebook_id: [null],
    status: [null],
    description: [null],
    hisher_id: [null],
    img_profile: [null],
    img_avatar: [null],
    code_avatar: [null],
    store_id: [null],
    branch_id: [null],
    counter_id: [null],
    cust_id: [null],
  });

  constructor(
    private formBuild: FormBuilder,
    private api: GuestCustomerService,
    private alertController: AlertController,
    private loading: LoadingService,
    private storage: StorageService,
    private navCtrl: NavController
  ) {}

  ngOnInit() {
    this.getUserInfo();
  }

  async getUserInfo(): Promise<void> {
    const info = await this.storage.get('USER_INFO');
    this.user = info;
  }

  async onAddCustomer(): Promise<void> {
    const { birthday } = this.formCustomer.value;

    const body = {
      ...this.formCustomer.value,
      emp_id: this.user.emp_id,
      birthday: !this.formCustomer.value.birthday ? null : moment(birthday).format('DD/MM/YYYY'),
      store_id: this.user.store_id,
      branch_id: this.user.branch_id,
      counter_id: this.user.counter_id,
      cust_id: this.user.cust_id,
    };

    try {
      const add = await this.api.createCustomer({ datas: [{ ...body }] });

      this.navCtrl.back();
    } catch (error) {
      console.log(error);
    }
  }
}

