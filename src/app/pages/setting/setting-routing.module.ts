import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SettingPage } from './setting.page';

const routes: Routes = [
  {
    path: '',
    component: SettingPage
  },
  {
    path: 'setting-mypicture',
    loadChildren: () => import('./setting-mypicture/setting-mypicture.module').then( m => m.SettingMypicturePageModule)
  },
  {
    path: 'setting-profile',
    loadChildren: () => import('./setting-profile/setting-profile.module').then( m => m.SettingProfilePageModule)
  },
  {
    path: 'setting-pincode',
    loadChildren: () => import('./setting-pincode/setting-pincode.module').then( m => m.SettingPincodePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingPageRoutingModule {}
