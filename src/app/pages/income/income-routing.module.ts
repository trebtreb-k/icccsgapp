import { RouterModule, Routes } from '@angular/router';

import { IncomePage } from './income.page';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: '', component: IncomePage },
  {
    path: 'detial',
    loadChildren: () => import('./detial/detial.module').then((m) => m.DetialPageModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IncomePageRoutingModule {}
