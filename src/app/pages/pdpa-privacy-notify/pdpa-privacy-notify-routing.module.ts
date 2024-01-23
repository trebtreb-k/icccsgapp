import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PdpaPrivacyNotifyPage } from './pdpa-privacy-notify.page';

const routes: Routes = [
  {
    path: '',
    component: PdpaPrivacyNotifyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PdpaPrivacyNotifyPageRoutingModule {}
