import { NgModule } from '@angular/core';
import { CalendarModule } from 'ion2-calendar';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QrmsRegisterPageRoutingModule } from './qrms-register-routing.module';

import { QrmsRegisterPage } from './qrms-register.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QrmsRegisterPageRoutingModule,
    CalendarModule
  ],
  declarations: [QrmsRegisterPage]
})
export class QrmsRegisterPageModule {}
