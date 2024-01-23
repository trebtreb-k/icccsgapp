import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ItemListComponent } from './item-list/item-list.component';
import { LottieModule } from 'ngx-lottie';
import { NgModule } from '@angular/core';
import { WorkflowPage } from './workflow.page';
import { WorkflowPageRoutingModule } from './workflow-routing.module';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, WorkflowPageRoutingModule, LottieModule],
  declarations: [WorkflowPage, ItemListComponent],
})
export class WorkflowPageModule {}
