import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { CustomerAddPage } from './customer-add.page';
import { CustomerAddPageRoutingModule } from './customer-add-routing.module';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, IonicModule, CustomerAddPageRoutingModule],
  declarations: [CustomerAddPage],
})
export class CustomerAddPageModule {}
