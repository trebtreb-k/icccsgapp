import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AlertService } from './../../services/utils/alert/alert.service';
import { AuthenService } from './../../services/authen/authen.service';
import { Router } from '@angular/router';
import { StorageService } from './../../services/storage/storage.service';
import { environment as env } from './../../../environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  version = env.version;

  formAuthen: FormGroup = this.formBuild.group({
    username: [null, Validators.compose([Validators.required])],
    password: [null, Validators.compose([Validators.required])],
  });

  constructor(
    private formBuild: FormBuilder,
    private authen: AuthenService,
    private router: Router,
    private alert: AlertService,
    private storage: StorageService
  ) {}

  async ngOnInit() {}

  async ionViewDidEnter(){
    const token = await this.storage.get('USER_TOKEN');
    if(token){
       this.router.navigate(['/home']);
    }
  }

  ionViewDidLeave() {
    this.formAuthen.reset();
  }

  async login(): Promise<void> {
    const { username, password } = this.formAuthen.value;

    if (!username || !password) {
      return await this.alert.basic('กรุณาป้อนข้อมูลให้ครบถ้วน');
    }

    this.authen.login({ username, password });
  }

  forgotPassword(): void {
    this.router.navigate(['/forgot-password']);
  }

  newRegister(): void {
    this.router.navigate(['/register']);
  }
}
