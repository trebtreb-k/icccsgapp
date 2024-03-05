
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { CustomerNewPage } from './customer-new.page';
import { CustomerNewPageRoutingModule } from './customer-new-routing.module';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, IonicModule, CustomerNewPageRoutingModule],
  declarations: [CustomerNewPage],
})
export class CustomerNewPageModule {}

