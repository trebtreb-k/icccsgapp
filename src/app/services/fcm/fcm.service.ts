import { AuthenService } from './../authen/authen.service';
// import { FCM } from 'cordova-plugin-fcm-with-android-12-fix-v3/ionic/ngx';
// import { FCM } from 'cordova-plugin-fcm-with-dependecy-updated/ionic/ngx';
// import { FCM } from 'cordova-plugin-fcm-with-dependecy-updated-12/ionic/ngx';
// import { FCM } from '@ionic-native/fcm/ngx';
import { Injectable } from '@angular/core';
//import { Firebase } from '@ionic-native/firebase/ngx';
import { Platform } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class FcmService {
  pushes: any = [];
  token: string = '';

  constructor(public platform: Platform, private authenApi: AuthenService) {
    // FCM plugin removed - TODO: Add Capacitor Firebase Messaging later
    console.log('[FCM Service] Initialized without FCM plugin');
  }

  async getToken() {
    console.log('[FCM Service] getToken() - FCM plugin not available');
    // TODO: Implement with @capacitor-firebase/messaging
    return null;
  }

  listenToNotifications() {
    console.log('[FCM Service] listenToNotifications() - FCM plugin not available');
    // TODO: Implement with @capacitor-firebase/messaging
    return null;
  }

  /*
  // OLD FCM IMPLEMENTATION - COMMENTED OUT
  constructor(private fcm: FCM, public platform: Platform, private authenApi: AuthenService) {
    this.platform.ready().then(() => {
      this.fcm.onNotification().subscribe((data) => {
        if (data.wasTapped) {
          console.log('Received in background');
        } else {
          console.log('Received in foreground');
        }
      });

      this.fcm.onTokenRefresh().subscribe((token) => {
        // Register your new token in your back-end if you want
        // backend.registerToken(token);
      });
    });
  }

  async getToken() {
    console.log('start firebase gettoken');
    this.fcm.requestPushPermission().then(async (result) => {
      this.token = await this.fcm.getToken();

      if (this.platform.is('android')) {
        await this.authenApi.updateFirebaseToken(this.token, 'android');
      }

      if (this.platform.is('ios')) {
        await this.authenApi.updateFirebaseToken(this.token, 'ios');
      }
    });
  }

  listenToNotifications() {
    return this.fcm.onNotification();
  }
  */
}
