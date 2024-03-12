import { RouterModule, Routes } from '@angular/router';

import { ApproverDetailPage } from './approver-detail.page';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: ApproverDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApproverDetailPageRoutingModule {}
