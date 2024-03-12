import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ItemDetialPageRoutingModule } from './item-detial-routing.module';

import { ItemDetialPage } from './item-detial.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ItemDetialPageRoutingModule
  ],
  declarations: [ItemDetialPage]
})
export class ItemDetialPageModule {}
