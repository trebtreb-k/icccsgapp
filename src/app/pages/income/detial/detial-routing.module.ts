import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetialPage } from './detial.page';

const routes: Routes = [
  {
    path: '',
    component: DetialPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetialPageRoutingModule {}
