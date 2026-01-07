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
    console.log('[App Constructor] App component initialized!');

    this.watchAuthorization();

    this.platform.ready().then(() => {
      console.log('[App Constructor] Platform ready!');
      this.statusBar.overlaysWebView(false);
      this.statusBar.backgroundColorByHexString('#f7928b');
    });
  }

  async watchAuthorization(): Promise<void> {
    try {
      console.log('[App Init] Starting authorization check...');
      await this.storage.createStorage();

      const token = await this.storage.get('USER_TOKEN');
      const info = await this.storage.get('USER_INFO');

      const authen = token && info ? 'authorized' : 'unauthorized';

      console.log('[App Init] Auth status:', authen);

      if (authen === 'unauthorized') {
        throw new Error('unauthorized');
      }

      // this.router.navigate(['/customer']);
      if (info.type === 'EMPLOYEE') {
       // alert(token)
        console.log('[App Init] Verifying employee token...');
        const verify: any = await this.authen.verifyToken(token);

        console.log('[App Init] Verify response:', verify);


        const { profile } = verify?.data;

        console.log('[App Init] Profile:', profile);



        let picture;// = ST_USER_PICTURE+'/'+ profile.emp_id+'/'+profile.emp_id+'.jpg';
        if(profile.type==='EMPLOYEE'){
            picture = ST_USER_PICTURE+'/'+ profile.emp_id+'/'+profile.emp_id+'.jpg';
        }else{
            picture ='assets/images/avatar-female.svg';
        }

        console.log('[App Init] Picture URL:', picture);



        await this.storage.set('USER_INFO', {...profile, picture});

        console.log('[App Init] Navigating to /home');
        this.router.navigate(['/home']);
      } else {
        console.log('[App Init] Navigating to /guest-home');
        this.router.navigate(['/guest-home']);
      }

      this.authen.nextAuthenticated('authorized');
    } catch (error) {
      console.error('[App Init] Error during authorization:', error);
      console.log('[App Init] Navigating to /login');
      this.router.navigate(['/login']);
      this.authen.nextAuthenticated('unauthorized');
    }
  }
}
