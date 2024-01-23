import { Component, OnInit } from '@angular/core';

import { API_RESPONSE_PROFILE } from './../../services/authen/authen.model';
import { ActionSheetController } from '@ionic/angular';
import { GuestCustomerService } from './../../services/api/guest-customer/guest-customer.service';
import { LoadingService } from './../../services/utils/loading/loading.service';
import { Router } from '@angular/router';
import { StorageService } from './../../services/storage/storage.service';
import { moment } from './../../services/utils/moment/moment.service';

@Component({
  selector: 'app-guest-customer',
  templateUrl: './guest-customer.page.html',
  styleUrls: ['./guest-customer.page.scss'],
})
export class GuestCustomerPage implements OnInit {
  user: API_RESPONSE_PROFILE;

  customers: any[] = [];
  customersInit: any[] = [];
  searchTerm: string = '';

  constructor(
    private router: Router,
    private api: GuestCustomerService,
    private actionSheetController: ActionSheetController,
    private storage: StorageService,
    private loading: LoadingService
  ) {}

  ngOnInit() {
    this.getUserInfo();
  }

  ionViewDidEnter(): void {
    this.init();
  }

  async init(): Promise<void> {

    try {
      await this.loading.present();
      const customers = await this.api.getCustomerByEmp(this.user.emp_id);

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
        const rating = (count: number) => new Array(count);

        const img_avatar = p.gender === 'M' ? 'assets/images/avatar-male.svg' : 'assets/images/avatar-female.svg';
        let img_member = `https://iccapp-minio.icc.co.th:9000/hisher/profile/${p.hh_id}/${p.hh_id}.jpg?alt=media`;
        if(p.line_picture){
           img_member = p.line_picture
        }
        return { ...p, img_card: img(p.class_card), birthday_full: birthday(p.birthday), rating: rating(p.rating) , img_avatar:img_avatar, img_member:img_member };
      });

      // console.log(datas);

      this.customers = datas || [];
      this.customersInit = datas || [];

      this.loading.dismiss();
    } catch (error) {
      console.log(error);
      this.customers = [];
      this.customersInit = [];
      this.loading.dismiss();
    }
  }

  async doRefresh(event: any) {
    setTimeout(() => {
      this.init();
      event.target.complete();
    }, 2000);
  }

  async getUserInfo(): Promise<void> {
    const info = await this.storage.get('USER_INFO');
    this.user = info;
  }

  async addCustomer(): Promise<void> {
    const actionSheet = await this.actionSheetController.create({
      header: 'Menus',
      cssClass: 'my-custom-class',
      buttons: [
        {
          text: 'สร้างรายชื่อใหม่',
          icon: 'add-circle-outline',
          handler: () => {
            this.router.navigate(['guest-customer/customer-new']);
          },
        },
        {
          text: 'ปิด',
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

  async removeCustomer(id: string | null | undefined): Promise<void> {
    try {
      const remove = await this.api.deleteCustomer(id);

      this.init();
    } catch (error) {
      console.log(error);
      this.loading.dismiss();
    }
  }

  viewDetail(data){
    console.log('data',data)
    this.router.navigate(['/guest-customer/customer-view'], {state:{...data} });
  }

  getAvatar(event, customer){
  //  console.log('error->',customer)
    return event.target.src = customer.img_avatar
  }

  
  
  filterItems(searchTerm){
    console.log( this.customersInit)
    console.log('searchTerm=>'+searchTerm)
    return this.customersInit.filter((item) => {
        return ( item.nickname.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1 ||
                 item.first_name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1 ||
                 item.last_name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1 
               );
    });
  }


  setFilteredItems() {
     this.customers = this.filterItems(this.searchTerm);
  }


}















