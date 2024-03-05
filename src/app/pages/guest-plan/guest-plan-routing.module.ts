import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GuestPlanPage } from './guest-plan.page';

const routes: Routes = [
  {
    path: '',
    component: GuestPlanPage
  },
  {
    path: 'create-plan',
    loadChildren: () => import('./create-plan/create-plan.module').then( m => m.CreatePlanPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GuestPlanPageRoutingModule {}
