import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { AuthenGuard } from './guard/authen.guard';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then((m) => m.HomePageModule),
    canActivate: [AuthenGuard],
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then((m) => m.LoginPageModule),
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./pages/forgot-password/forgot-password.module').then((m) => m.ForgotPasswordPageModule),
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then((m) => m.RegisterPageModule),
  },
  {
    path: 'check-inout',
    loadChildren: () => import('./pages/check-inout/check-inout.module').then((m) => m.CheckInoutPageModule),
  },
  {
    path: 'scan-check-inout',
    loadChildren: () => import('./pages/scan-check-inout/scan-check-inout.module').then((m) => m.ScanCheckInoutPageModule),
  },
  {
    path: 'csg-plan',
    loadChildren: () => import('./pages/csg-plan/csg-plan.module').then((m) => m.CsgPlanPageModule),
  },
  {
    path: 'customer',
    loadChildren: () => import('./pages/customer/customer.module').then((m) => m.CustomerPageModule),
  },
  {
    path: 'workflow',
    loadChildren: () => import('./pages/workflow/workflow.module').then((m) => m.WorkflowPageModule),
  },
  {
    path: 'income',
    loadChildren: () => import('./pages/income/income.module').then((m) => m.IncomePageModule),
  },
  {
    path: 'setting',
    loadChildren: () => import('./pages/setting/setting.module').then( m => m.SettingPageModule)
  },
  {
    path: 'time-stat',
    loadChildren: () => import('./pages/time-stat/time-stat.module').then( m => m.TimeStatPageModule)
  },
  {
    path: 'direct-to-customer',
    loadChildren: () => import('./pages/direct-to-customer/direct-to-customer.module').then( m => m.DirectToCustomerPageModule)
  },
  {
    path: 'announce',
    loadChildren: () => import('./pages/announce/announce.module').then( m => m.AnnouncePageModule)
  },
  {
    path: 'guest-home',
    loadChildren: () => import('./pages/guest-home/guest-home.module').then( m => m.GuestHomePageModule)
  },
  {
    path: 'guest-customer',
    loadChildren: () => import('./pages/guest-customer/guest-customer.module').then( m => m.GuestCustomerPageModule)
  },
  {
    path: 'guest-plan',
    loadChildren: () => import('./pages/guest-plan/guest-plan.module').then( m => m.GuestPlanPageModule)
  },
  {
    path: 'pincode',
    loadChildren: () => import('./pages/pincode/pincode.module').then( m => m.PincodePageModule)
  },
  {
    path: 'qrms-register',
    loadChildren: () => import('./pages/qrms-register/qrms-register.module').then( m => m.QrmsRegisterPageModule)
  },
  {
    path: 'pdpa-privacy-notify',
    loadChildren: () => import('./pages/pdpa-privacy-notify/pdpa-privacy-notify.module').then( m => m.PdpaPrivacyNotifyPageModule)
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
