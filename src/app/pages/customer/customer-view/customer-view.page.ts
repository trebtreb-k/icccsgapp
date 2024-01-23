import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';


import { AlertController } from '@ionic/angular';
import { AlertService } from './../../../services/utils/alert/alert.service';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { CustomerService } from './../../../services/api/customer/customer.service';
import { EmailComposer } from '@ionic-native/email-composer/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customer-view',
  templateUrl: './customer-view.page.html',
  styleUrls: ['./customer-view.page.scss'],
})
export class CustomerViewPage implements OnInit {
  state: any;
  formRating: FormGroup = null;
  isProcessing = false;

  constructor(
    private router: Router,
    private activedRoute: ActivatedRoute,
    private formBuild: FormBuilder,
    private alert: AlertService,
    private api: CustomerService,
    private callNumber: CallNumber,
    private emailComposer: EmailComposer,
    private alertController: AlertController,
    private iab: InAppBrowser,
    private photoViewer : PhotoViewer,
  ) {
    this.state = this.router.getCurrentNavigation()?.extras?.state || null;

    console.log('->',this.state);
  }

  

  ionViewDidEnter(): void {
    console.log('ionViewDidEnter')
    this.activedRoute.queryParams.subscribe(params => {
       console.log('params',params.emp_id)
       if(params.emp_id){
          this.state = params;
       }      
    });    
  }


  ngOnInit() {
    if (this.state) {
      this.formRating = this.formBuild.group({
       // rate: [this.state.rating],
        rate: this.state.rating.length,
      });
    }
  }


  editProfile(): void {
    console.log(this.state)
    this.router.navigate([`customer/customer-edit`], { state: { ...this.state } });
  }

  viewHistoryPurchase(data: any): void {
    this.router.navigate([`customer/customer-transaction`], { state: { ...this.state } });
  }

  async onRateChange(ev: any, customer_id: any): Promise<void> {
    this.process(ev);

    const body = { customer_id, rating: ev };

    await this.api.updateRatingCustomer(body);
  }

  process(e: any) {
    if (this.isProcessing) {
      console.log('wait please');
      return this.alert.basic('กรุณากดให้ช้าลง');
    }
    this.isProcessing = true;
    this.someSlowThing(() => {
      this.isProcessing = false; // <-- important that the happens in the callback
      console.log('done');
    });
    // don't try to set isProcessing here, it will happen too soon.
  }

  someSlowThing(cb: any) {
    const n = 10;
    let i = 0;
    const d: any = document.getElementById('rating-1');
    const itv = setInterval(() => {
      if (i > n) {
        clearInterval(itv);
        i = 0;
        return cb();
      }

      // console.log(i++);

      i++;

      // d.innerHTML = i++
    }, 50);
  }

  async callPhone(mobile: string) {
    if (mobile && mobile !== '-') {
      const alert = await this.alertController.create({
        mode: 'md',
        message: `
          <div class="body">
            <img class="icon" src="assets/images/customer/call.svg">
              <p class="title">ติดต่อลูกค้า</p>
              <p class="content">หมายเลข &nbsp; ${mobile} &nbsp; ใช่หรือไม่?</p>
          </div>
        `,
        cssClass: 'custom-alert-dialog',
        buttons: [
          {
            text: 'ยกเลิก',
            role: 'cancel',
            cssClass: 'secondary',
            handler: (blah) => {
              console.log('Confirm Cancel: blah');
            },
          },
          {
            text: 'ยืนยัน',
            handler: () => {
              this.callNumber
                .callNumber(mobile, true)
                .then((res) => console.log('Launched dialer!', res))
                .catch((err) => console.log('Error launching dialer', err));
            },
          },
        ],
      });

      await alert.present();
    } else {
      console.log('not found mobile phone');
    }
  }

  async callLine(id_line: string) {
    console.log(id_line);
    if (id_line && id_line !== '-') {
      const alert = await this.alertController.create({
        mode: 'md',
        message: `
          <div class="body">
            <img class="icon" src="assets/images/customer/line.svg">
              <p class="title">ติดต่อลูกค้า</p>
              <p class="content">ไลน์ &nbsp; ${id_line} &nbsp; ใช่หรือไม่?</p>
          </div>
        `,
        cssClass: 'custom-alert-dialog',
        buttons: [
          {
            text: 'ยกเลิก',
            role: 'cancel',
            cssClass: 'secondary',
            handler: (blah) => {
              console.log('Confirm Cancel: blah');
            },
          },
          {
            text: 'ยืนยัน',
            handler: () => {
              const url = this.iab.create(`http://line.me/ti/p/~` + `${id_line}`, `_system`);
              console.log('call line');
            },
          },
        ],
      });

      await alert.present();
    } else {
      console.log('not found idline');
    }
  }

  async callFB(facebook: string) {
    console.log(facebook);
    if (facebook && facebook !== '-') {
      const alert = await this.alertController.create({
        mode: 'md',
        message: `
          <div class="body">
            <img class="icon" src="assets/images/customer/facebook.svg">
              <p class="title">ติดต่อลูกค้า</p>
              <p class="content">เฟสบุ๊ก &nbsp; ${facebook} &nbsp; ใช่หรือไม่?</p>
          </div>
        `,
        cssClass: 'custom-alert-dialog',
        buttons: [
          {
            text: 'ยกเลิก',
            role: 'cancel',
            cssClass: 'secondary',
            handler: (blah) => {
              console.log('Confirm Cancel: blah');
            },
          },
          {
            text: 'ยืนยัน',
            handler: () => {
              const url = this.iab.create(`https://www.facebook.com/` + `${facebook}`, `_system`);
              console.log('call facebook');
            },
          },
        ],
      });

      await alert.present();
    } else {
      console.log('not found facebook');
    }
  }

  async sendEmail(emailCus: string) {
    if (emailCus && emailCus !== '-') {
      const alert = await this.alertController.create({
        mode: 'md',
        message: `
          <div class="body">
            <img class="icon" src="assets/images/customer/email.svg">
              <p class="title">ติดต่อลูกค้า</p>
              <p class="content">อีเมล &nbsp; ${emailCus} &nbsp; ใช่หรือไม่?</p>
          </div>
        `,
        cssClass: 'custom-alert-dialog',
        buttons: [
          {
            text: 'ยกเลิก',
            role: 'cancel',
            cssClass: 'secondary',
            handler: (blah) => {
              console.log('Confirm Cancel: blah');
            },
          },
          {
            text: 'ยืนยัน',
            handler: () => {
              this.emailComposer.isAvailable().then((available: boolean) => {
                if (available) {
                  console.log('hello email');

                  const email = {
                    to: emailCus,
                    // cc: 'erika@mustermann.de',
                    // bcc: ['john@doe.com', 'jane@doe.com'],
                    // attachments: [
                    //   'file://img/logo.png',
                    //   'res://icon.png',
                    //   'base64:icon.png//iVBORw0KGgoAAAANSUhEUg...',
                    //   'file://README.pdf',
                    // ],
                    subject: 'เรียนคุณลูกค้าสมาชิก His&Her',
                    // body: 'ทดสอบ',
                    isHtml: true,
                  };

                  // Send a text message using default options
                  this.emailComposer.open(email);
                }
              });
            },
          },
        ],
      });

      await alert.present();
    } else {
      console.log('not found email');
    }
  }


  getAvatar(event, customer){
      return event.target.src = customer.img_avatar
  }

  onViewImage(url: string | undefined): void {
    this.photoViewer.show(url);
  }

}
