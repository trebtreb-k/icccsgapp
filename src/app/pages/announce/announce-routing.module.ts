import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnnouncePage } from './announce.page';

const routes: Routes = [
  {
    path: '',
    component: AnnouncePage
  },
  {
    path: 'announce-detail',
    loadChildren: () => import('./announce-detail/announce-detail/announce-detail.module').then( m => m.AnnounceDetailPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnnouncePageRoutingModule {}
