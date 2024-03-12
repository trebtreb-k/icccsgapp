import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SettingMypicturePage } from './setting-mypicture.page';

const routes: Routes = [
  {
    path: '',
    component: SettingMypicturePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingMypicturePageRoutingModule {}
