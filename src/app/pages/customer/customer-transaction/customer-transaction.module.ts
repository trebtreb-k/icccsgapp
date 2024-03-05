import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CustomerTransactionPageRoutingModule } from './customer-transaction-routing.module';

import { CustomerTransactionPage } from './customer-transaction.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CustomerTransactionPageRoutingModule
  ],
  declarations: [CustomerTransactionPage]
})
export class CustomerTransactionPageModule {}
