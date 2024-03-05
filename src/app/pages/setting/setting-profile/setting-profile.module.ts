import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SettingProfilePageRoutingModule } from './setting-profile-routing.module';

import { SettingProfilePage } from './setting-profile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SettingProfilePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [SettingProfilePage]
})
export class SettingProfilePageModule {}
