import { AuthenService } from './services/authen/authen.service';
import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { StorageService } from './services/storage/storage.service';
import { ST_ROOT, ST_USER_PICTURE} from './services/api/api.root';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private router: Router,
    private authen: AuthenService,
    private storage: StorageService,
    private statusBar: StatusBar,
    private platform: Platform
  ) {
    this.watchAuthorization();

    this.platform.ready().then(() => {
      this.statusBar.overlaysWebView(false);
      this.statusBar.backgroundColorByHexString('#f7928b');
    });
  }

  async watchAuthorization(): Promise<void> {
    try {
      await this.storage.createStorage();

      const token = await this.storage.get('USER_TOKEN');
      const info = await this.storage.get('USER_INFO');

      const authen = token && info ? 'authorized' : 'unauthorized';

      console.log(authen);

      if (authen === 'unauthorized') {
        throw new Error('unauthorized');
      }

      // this.router.navigate(['/customer']);
      if (info.type === 'EMPLOYEE') {
       // alert(token)
        const verify: any = await this.authen.verifyToken(token);
        const { profile } = verify?.data;
        let picture;// = ST_USER_PICTURE+'/'+ profile.emp_id+'/'+profile.emp_id+'.jpg';
        if(profile.type==='EMPLOYEE'){
            picture = ST_USER_PICTURE+'/'+ profile.emp_id+'/'+profile.emp_id+'.jpg';
        }else{
            picture ='assets/images/avatar-female.svg';  
        }  
        await this.storage.set('USER_INFO', {...profile, picture});
       

        this.router.navigate(['/home']);
      } else {
        this.router.navigate(['/guest-home']);
      }

      this.authen.nextAuthenticated('authorized');
    } catch (error) {
      this.router.navigate(['/login']);
      this.authen.nextAuthenticated('unauthorized');
    }
  }
}
