import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SettingMypicturePageRoutingModule } from './setting-mypicture-routing.module';

import { SettingMypicturePage } from './setting-mypicture.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SettingMypicturePageRoutingModule
  ],
  declarations: [SettingMypicturePage]
})
export class SettingMypicturePageModule {}
