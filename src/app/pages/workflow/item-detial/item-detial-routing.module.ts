import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItemDetialPage } from './item-detial.page';

const routes: Routes = [
  {
    path: '',
    component: ItemDetialPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ItemDetialPageRoutingModule {}
