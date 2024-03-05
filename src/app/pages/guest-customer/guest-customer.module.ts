import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GuestCustomerPageRoutingModule } from './guest-customer-routing.module';

import { GuestCustomerPage } from './guest-customer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GuestCustomerPageRoutingModule
  ],
  declarations: [GuestCustomerPage]
})
export class GuestCustomerPageModule {}
