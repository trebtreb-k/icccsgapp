import { AuthenService } from './../authen/authen.service';
import { FCM } from 'cordova-plugin-fcm-with-dependecy-updated/ionic/ngx';
// import { FCM } from '@ionic-native/fcm/ngx';
import { Injectable } from '@angular/core';
//import { Firebase } from '@ionic-native/firebase/ngx';
import { Platform } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class FcmService {
  //constructor() {}

  pushes: any = [];
  token: string = '';


  constructor(private fcm : FCM, public platform: Platform, private authenApi: AuthenService) {

    this.platform.ready()
      .then(() => {
        this.fcm.onNotification().subscribe(data => {
          if (data.wasTapped) {
            console.log("Received in background");
          } else {
            console.log("Received in foreground");
          };
        });

        this.fcm.onTokenRefresh().subscribe(token => {
          // Register your new token in your back-end if you want
          // backend.registerToken(token);
        });
      })
  }

  async getToken() {
    console.log('start firebase gettoken')
   // alert('get token');

   // let token = await  this.fcm.getToken();
   // console.log('xxxxxxxxxxxxx')
  //  await this.authenApi.updateFirebaseToken('x123456', 'android');
      this.fcm.requestPushPermission().then(()=>{});
      this.token = await this.fcm.getToken();

    if (this.platform.is('android')) {
      //  alert(this.token)
        await this.authenApi.updateFirebaseToken(this.token, 'android');

    }

    if (this.platform.is('ios')) {
        // this.fcm.requestPushPermissionIOS().then(()=>{})

        // await this.fcm.grantPermission();
        await this.authenApi.updateFirebaseToken(this.token, 'ios');
    }


   /*
    this.fcm.getToken().then(token => {
        console.log('firebase token', token)
        alert(token);
        // Register your new token in your back-end if you want
      // backend.registerToken(token);
    })
    .catch(error=>{
        alert(JSON.stringify(error))
    });*/
  }

  /*
  subscribeToTopic() {
    this.fcm.subscribeToTopic('enappd');
  }

  unsubscribeFromTopic() {
    this.fcm.unsubscribeFromTopic('enappd');
  }*/

  listenToNotifications() {
    return this.fcm.onNotification();
  }

}
