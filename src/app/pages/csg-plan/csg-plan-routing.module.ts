import { RouterModule, Routes } from '@angular/router';

import { CsgPlanPage } from './csg-plan.page';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: CsgPlanPage,
  },
  {
    path: 'create-plan',
    loadChildren: () => import('./create-plan/create-plan.module').then((m) => m.CreatePlanPageModule),
  },
  {
    path: 'approver-detail',
    loadChildren: () => import('./approver-detail/approver-detail.module').then((m) => m.ApproverDetailModule),
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CsgPlanPageRoutingModule {}
