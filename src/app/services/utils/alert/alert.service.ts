import { AlertController } from '@ionic/angular';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  constructor(private alertController: AlertController) {}

  async basic(message: string): Promise<void> {
    const alert = await this.alertController.create({
      cssClass: 'alert__box--basic',
      header: 'เกิดข้อผิดพลาด',
      message,
      buttons: ['ปิด'],
    });

    await alert.present();
  }
}
