import { CommonModule } from '@angular/common';
import { CustomerPage } from './customer.page';
import { CustomerPageRoutingModule } from './customer-routing.module';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, CustomerPageRoutingModule],
  declarations: [CustomerPage],
})
export class CustomerPageModule {}
