import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { CustomerViewPage } from './customer-view.page';
import { CustomerViewPageRoutingModule } from './customer-view-routing.module';
import { IonicModule } from '@ionic/angular';
import { IonicRatingModule } from 'ionic4-rating';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, IonicModule, CustomerViewPageRoutingModule, IonicRatingModule],
  declarations: [CustomerViewPage],
})
export class CustomerViewPageModule {}
