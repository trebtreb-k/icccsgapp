import { ActionSheetController, LoadingController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

import { Camera } from '@ionic-native/camera/ngx';
import { Crop } from '@ionic-native/crop/ngx';
import { LoadingService } from './../../services/utils/loading/loading.service';
import { StorageService } from './../../services/storage/storage.service';
import { UploadImagesService } from './../../services/upload-images/upload-images.service';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.page.html',
  styleUrls: ['./setting.page.scss'],
})
export class SettingPage implements OnInit {
  user : any;
  menus_guest = [
    {
      title: 'My Picture',
      logo : 'assets/images/avatar-female.svg',
      type : 'MY_PICTURE'
    },
    {
      title: 'My Profile',
      logo : 'assets/images/setting/emp-card.svg',
      type : 'MY_PROFILE',
      link : 'setting/setting-profile',
      redirect : '',
    }
  ];

  menus_employee = [
    {
      title: 'My Picture',
      logo : 'assets/images/avatar-female.svg',
      type : 'MY_PICTURE'
    },
    {
      title: 'My Profile',
      logo : 'assets/images/setting/emp-card.svg',
      type : 'MY_PROFILE',
      link : 'setting/setting-profile',
      redirect : '',
    },
    {
      title: 'My Pincode',
      logo : 'assets/images/setting/password.svg',
      type : 'MY_PINCODE',
      link : 'pincode',
      redirect : 'setting/setting-pincode',
    }
  ];

  menus = [];

  constructor(private router: Router,
              private storage: StorageService,
              private actionSheetController: ActionSheetController,
              private camera: Camera,
              private crop: Crop,
              private loadingController : LoadingController,
              private imageService: UploadImagesService,
              private loading : LoadingService) {

  }

  ngOnInit() {
    this.getUserInfo();
  }

  async getUserInfo(): Promise<void> {
    const info = await this.storage.get('USER_INFO');
    this.user = info;
    console.log(this.user)
    if(this.user.type==='EMPLOYEE'){
      this.menus = this.menus_employee
    }else{
      this.menus = this.menus_guest
    }


  }


  navigate(route: string, redirect: string): void {
    if(redirect!==''){
      this.router.navigate([route, { targetpage: redirect }]);
    }else{
       this.router.navigate([route]);
    }

  }

  openPage(type, link, redirect): void {
     if(link){
       this.navigate(link, redirect)
     }else{
      if(type=='MY_PICTURE'){
        this.chooseUploadType();
      }
    }
  }


  async chooseUploadType() {
    const actionSheet = await this.actionSheetController.create({
      header: 'เลือกที่อยู่ไฟล์ภาพ',
      cssClass: 'my-custom-class',
      buttons: [{
        text: 'ไลบรารี',
        handler: () => {
          console.log('Library clicked');

          // setTimeout(() => {
          //   let navigationExtras: NavigationExtras = {
          //     state: {
          //       refresh: true
          //     }
          //   };
          //   console.log(navigationExtras)
          //   this.router.navigate(['/home'],  navigationExtras);
          // }, 3000);
          // return;

          this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY);
        }
      }, {
        text: 'กล้อง',
        handler: () => {
          console.log('Camera clicked');
          this.takePicture(this.camera.PictureSourceType.CAMERA);
        }
      }]
    });
    await actionSheet.present();

    const { role } = await actionSheet.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  /*
  takePicture(sourceType) {
    // Create options for the Camera Dialog
    var options = {
      quality: 50,
      destinationType: this.camera.DestinationType.FILE_URI,
      sourceType: sourceType,
      saveToPhotoAlbum: false,
      correctOrientation: true
    };

    // Get the data of an image
    this.camera.getPicture(options)
      .then((imagePath) => {
        this.cropImage(imagePath)
      }, (err) => {
        console.log('Error: ', err);
      });
  }


  cropImage(urlImage) {
    let option = {
      quality: 100,
      targetHeight: 100,
      targetWidth: 100
    }
    this.crop.crop(urlImage, option)
      .then(newImage => {
        const desc = {
          image: newImage,
          empid: this.user.emp_id
        }


        this.imageService.uploadImage(desc)
          .then(res => {
             let response = JSON.parse(res.response)
             let newImage = response.data.url;

             if(response.data.url.indexOf('?')>0){
                response.data.url += '&v='+ Math.random()
             }else{
                response.data.url += '?v='+ Math.random()
             }
          }, err => {
            console.log( JSON.stringify(err) );
           // alert(JSON.stringify(err) )
          });
      }, err => {
        console.log(
          JSON.stringify(err)
        );
      })
  }
*/

  async takePicture(sourceType) {
    // Create options for the Camera Dialog
    var options = {
        quality: 50,
        destinationType: this.camera.DestinationType.FILE_URI,
        sourceType: sourceType,
        saveToPhotoAlbum: false,
        correctOrientation: true
    };
    
    
    // Get the data of an image
    try {
      const resCamera = await  this.camera.getPicture(options);

      
      const imagePath = resCamera;
      const resCrop  = await this.cropImage(imagePath);

      console.log('Success');
      setTimeout(() => {
        let navigationExtras: NavigationExtras = {
          state: {
            refresh: true
          }
        };
        this.router.navigate(['/home'], navigationExtras);
      }, 1000);


    } catch (error) {
      console.log('Error: ', error);
    }

  }



  async cropImage(urlImage) {

    let option = {
        quality: 100,
        targetHeight: 100,
        targetWidth: 100
    }

    try {
        const newImage =  await this.crop.crop(urlImage, option)
        const desc = {
            image: newImage,
            empid: this.user.emp_id
        }

       // this.presentLoading();
        this.loading.present();

        const resUpload = await this.imageService.uploadImage(desc)

        this.loading.dismiss();

        /*
        let response = JSON.parse(resUpload.response)
       // let resNewImage = response.data.url;

        if(response.data.url.indexOf('?')>0){
          response.data.url += '&v='+ Math.random()
        }else{
          response.data.url += '?v='+ Math.random()
        } */
    } catch (error) {
        console.log('Error: ', error);
    }
  }


  async presentLoading() {
    const loading  = await this.loadingController.create({
      message: 'Please wait...',
      duration: 3000
    });
    await loading.present();
  }




}
