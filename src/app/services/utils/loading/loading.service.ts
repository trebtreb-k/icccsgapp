import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  constructor(private loadingController: LoadingController) {}

  async present(): Promise<any> {
    const loading = await this.loadingController.create({
      mode: 'ios',
      spinner: 'crescent',
      showBackdrop: true,
      translucent: false,
      cssClass: 'loading__primary',
    });
    return await loading.present();
  }

  async dismiss(): Promise<any> {
    return await this.loadingController.dismiss();
  }
}
