import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CustomerTransactionUpdatePageRoutingModule } from './customer-transaction-update-routing.module';

import { CustomerTransactionUpdatePage } from './customer-transaction-update.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CustomerTransactionUpdatePageRoutingModule
  ],
  declarations: [CustomerTransactionUpdatePage]
})
export class CustomerTransactionUpdatePageModule {}
