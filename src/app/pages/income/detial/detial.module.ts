import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetialPageRoutingModule } from './detial-routing.module';

import { DetialPage } from './detial.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetialPageRoutingModule
  ],
  declarations: [DetialPage]
})
export class DetialPageModule {}
