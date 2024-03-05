import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarModule } from 'ion2-calendar';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DirectToCustomerPageRoutingModule } from './direct-to-customer-routing.module';

import { DirectToCustomerPage } from './direct-to-customer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DirectToCustomerPageRoutingModule,
    CalendarModule
  ],
  declarations: [DirectToCustomerPage]
})
export class DirectToCustomerPageModule {}
