import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { ForgotPasswordPage } from './forgot-password.page';
import { ForgotPasswordPageRoutingModule } from './forgot-password-routing.module';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, IonicModule, ForgotPasswordPageRoutingModule],
  declarations: [ForgotPasswordPage],
})
export class ForgotPasswordPageModule {}
