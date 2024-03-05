import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TimeStatPage } from './time-stat.page';

const routes: Routes = [
  {
    path: '',
    component: TimeStatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TimeStatPageRoutingModule {}
