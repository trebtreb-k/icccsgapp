(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

/***/ "0qLL":
/*!*****************************************************************!*\
  !*** ./src/app/services/upload-images/upload-images.service.ts ***!
  \*****************************************************************/
/*! exports provided: UploadImagesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadImagesService", function() { return UploadImagesService; });
/* harmony import */ var _api_api_root__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../api/api.root */ "ntc2");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "B7Rs");



let UploadImagesService = /*@__PURE__*/ (() => {
    class UploadImagesService {
        constructor(transfer) {
            this.transfer = transfer;
        }
        uploadImage(desc) {
            let url = _api_api_root__WEBPACK_IMPORTED_MODULE_0__["ST_ROOT"].authen + '/salestools/authen/upload';
            var targetPath = desc.image;
            var options = {
                fileKey: 'image',
                chunkedMode: false,
                mimeType: 'multipart/form-data',
                params: {
                    image: desc.image,
                    empid: desc.empid
                }
            };
            const fileTransfer = this.transfer.create();
            return fileTransfer.upload(targetPath, url, options);
        }
    }
    UploadImagesService.ɵfac = function UploadImagesService_Factory(t) { return new (t || UploadImagesService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_2__["FileTransfer"])); };
    UploadImagesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: UploadImagesService, factory: UploadImagesService.ɵfac, providedIn: 'root' });
    return UploadImagesService;
})();


/***/ }),

/***/ "hBK9":
/*!*************************************************!*\
  !*** ./src/app/pages/setting/setting.module.ts ***!
  \*************************************************/
/*! exports provided: SettingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingPageModule", function() { return SettingPageModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _setting_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./setting-routing.module */ "zhNF");
/* harmony import */ var _setting_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./setting.page */ "kSd7");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");






let SettingPageModule = /*@__PURE__*/ (() => {
    class SettingPageModule {
    }
    SettingPageModule.ɵfac = function SettingPageModule_Factory(t) { return new (t || SettingPageModule)(); };
    SettingPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: SettingPageModule });
    SettingPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
                _setting_routing_module__WEBPACK_IMPORTED_MODULE_3__["SettingPageRoutingModule"]
            ]] });
    return SettingPageModule;
})();
(function () {
    (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](SettingPageModule, { declarations: [_setting_page__WEBPACK_IMPORTED_MODULE_4__["SettingPage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
            _setting_routing_module__WEBPACK_IMPORTED_MODULE_3__["SettingPageRoutingModule"]] });
})();


/***/ }),

/***/ "kSd7":
/*!***********************************************!*\
  !*** ./src/app/pages/setting/setting.page.ts ***!
  \***********************************************/
/*! exports provided: SettingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingPage", function() { return SettingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_storage_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/storage/storage.service */ "E2f4");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "a/9d");
/* harmony import */ var _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/crop/ngx */ "hwGQ");
/* harmony import */ var _services_upload_images_upload_images_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../services/upload-images/upload-images.service */ "0qLL");
/* harmony import */ var _services_utils_loading_loading_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../services/utils/loading/loading.service */ "YMUU");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");










function SettingPage_div_15_Template(rf, ctx) {
    if (rf & 1) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SettingPage_div_15_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const menu_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r2.openPage(menu_r1.type, menu_r1.link, menu_r1.redirect); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const menu_r1 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", menu_r1.logo, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](menu_r1.title);
    }
}
let SettingPage = /*@__PURE__*/ (() => {
    class SettingPage {
        constructor(router, storage, actionSheetController, camera, crop, loadingController, imageService, loading) {
            this.router = router;
            this.storage = storage;
            this.actionSheetController = actionSheetController;
            this.camera = camera;
            this.crop = crop;
            this.loadingController = loadingController;
            this.imageService = imageService;
            this.loading = loading;
            this.menus_guest = [
                {
                    title: 'My Picture',
                    logo: 'assets/images/avatar-female.svg',
                    type: 'MY_PICTURE'
                },
                {
                    title: 'My Profile',
                    logo: 'assets/images/setting/emp-card.svg',
                    type: 'MY_PROFILE',
                    link: 'setting/setting-profile',
                    redirect: '',
                }
            ];
            this.menus_employee = [
                {
                    title: 'My Picture',
                    logo: 'assets/images/avatar-female.svg',
                    type: 'MY_PICTURE'
                },
                {
                    title: 'My Profile',
                    logo: 'assets/images/setting/emp-card.svg',
                    type: 'MY_PROFILE',
                    link: 'setting/setting-profile',
                    redirect: '',
                },
                {
                    title: 'My Pincode',
                    logo: 'assets/images/setting/password.svg',
                    type: 'MY_PINCODE',
                    link: 'pincode',
                    redirect: 'setting/setting-pincode',
                }
            ];
            this.menus = [];
        }
        ngOnInit() {
            this.getUserInfo();
        }
        getUserInfo() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                const info = yield this.storage.get('USER_INFO');
                this.user = info;
                console.log(this.user);
                if (this.user.type === 'EMPLOYEE') {
                    this.menus = this.menus_employee;
                }
                else {
                    this.menus = this.menus_guest;
                }
            });
        }
        navigate(route, redirect) {
            if (redirect !== '') {
                this.router.navigate([route, { targetpage: redirect }]);
            }
            else {
                this.router.navigate([route]);
            }
        }
        openPage(type, link, redirect) {
            if (link) {
                this.navigate(link, redirect);
            }
            else {
                if (type == 'MY_PICTURE') {
                    this.chooseUploadType();
                }
            }
        }
        chooseUploadType() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                const actionSheet = yield this.actionSheetController.create({
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
                yield actionSheet.present();
                const { role } = yield actionSheet.onDidDismiss();
                console.log('onDidDismiss resolved with role', role);
            });
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
        takePicture(sourceType) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
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
                    const resCamera = yield this.camera.getPicture(options);
                    const imagePath = resCamera;
                    const resCrop = yield this.cropImage(imagePath);
                    console.log('Success');
                    setTimeout(() => {
                        let navigationExtras = {
                            state: {
                                refresh: true
                            }
                        };
                        this.router.navigate(['/home'], navigationExtras);
                    }, 1000);
                }
                catch (error) {
                    console.log('Error: ', error);
                }
            });
        }
        cropImage(urlImage) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                let option = {
                    quality: 100,
                    targetHeight: 100,
                    targetWidth: 100
                };
                try {
                    const newImage = yield this.crop.crop(urlImage, option);
                    const desc = {
                        image: newImage,
                        empid: this.user.emp_id
                    };
                    // this.presentLoading();
                    this.loading.present();
                    const resUpload = yield this.imageService.uploadImage(desc);
                    this.loading.dismiss();
                    /*
                    let response = JSON.parse(resUpload.response)
                   // let resNewImage = response.data.url;
            
                    if(response.data.url.indexOf('?')>0){
                      response.data.url += '&v='+ Math.random()
                    }else{
                      response.data.url += '?v='+ Math.random()
                    } */
                }
                catch (error) {
                    console.log('Error: ', error);
                }
            });
        }
        presentLoading() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                const loading = yield this.loadingController.create({
                    message: 'Please wait...',
                    duration: 3000
                });
                yield loading.present();
            });
        }
    }
    SettingPage.ɵfac = function SettingPage_Factory(t) { return new (t || SettingPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__["Camera"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_6__["Crop"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_upload_images_upload_images_service__WEBPACK_IMPORTED_MODULE_7__["UploadImagesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_utils_loading_loading_service__WEBPACK_IMPORTED_MODULE_8__["LoadingService"])); };
    SettingPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SettingPage, selectors: [["app-setting"]], decls: 16, vars: 1, consts: [[1, "ion-no-border"], ["slot", "start"], ["fullscreen", "true"], [1, "menus"], [1, "topic"], [1, "mark"], [1, "menus__container"], ["class", "menus__container__item", 3, "click", 4, "ngFor", "ngForOf"], [1, "menus__container__item", 3, "click"], [1, "menus__container__item--logo"], ["alt", "", 3, "src"], [1, "menus__container__item--title"]], template: function SettingPage_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-toolbar");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-buttons", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "ion-back-button");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-title");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Settings");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-content");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ion-content", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "section");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "div", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "h3");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "\u0E40\u0E21\u0E19\u0E39");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, SettingPage_div_15_Template, 6, 2, "div", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.menus);
            }
        }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonContent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"]], styles: [".section__loading[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n}\n\n.section__completed[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.section__completed[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n}\n\n.section__completed[_ngcontent-%COMP%]   h1.in[_ngcontent-%COMP%] {\n  color: #41ad3e;\n}\n\n.section__completed[_ngcontent-%COMP%]   h1.out[_ngcontent-%COMP%] {\n  color: #b63333;\n}\n\n.section__completed[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n\n.section__completed[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #4d4d4d;\n  font-size: 0.9rem;\n}\n\nion-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n\nion-footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #5f5f5f;\n  font-size: 0.8rem;\n  font-weight: 400;\n}\n\n.menus[_ngcontent-%COMP%] {\n  margin: 25px 20px 45px 20px;\n}\n\n.menus[_ngcontent-%COMP%]   .menus__container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: flex-start;\n}\n\n.menus[_ngcontent-%COMP%]   .menus__container[_ngcontent-%COMP%]   .menus__container__item[_ngcontent-%COMP%] {\n  flex-basis: 33.33%;\n  display: flex;\n  flex-flow: column nowrap;\n  align-items: center;\n  justify-content: center;\n  margin: 6px 0;\n  width: 110px;\n  height: 110px;\n}\n\n.menus[_ngcontent-%COMP%]   .menus__container[_ngcontent-%COMP%]   .menus__container__item[_ngcontent-%COMP%]   .menus__container__item--logo[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  background: #e3e4e3;\n  box-shadow: 0px 8px 20px -10px rgba(0, 0, 0, 0.02);\n  border-radius: 50%;\n  display: flex;\n  flex-flow: column wrap;\n  align-items: center;\n  justify-content: center;\n}\n\n.menus[_ngcontent-%COMP%]   .menus__container[_ngcontent-%COMP%]   .menus__container__item[_ngcontent-%COMP%]   .menus__container__item--logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  object-fit: cover;\n}\n\n.menus[_ngcontent-%COMP%]   .menus__container[_ngcontent-%COMP%]   .menus__container__item[_ngcontent-%COMP%]   .menus__container__item--title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #2d2d2d;\n  font-size: 0.8rem;\n  font-weight: 500;\n  margin: 4px 0;\n}"] });
    return SettingPage;
})();


/***/ }),

/***/ "zhNF":
/*!*********************************************************!*\
  !*** ./src/app/pages/setting/setting-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: SettingPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingPageRoutingModule", function() { return SettingPageRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _setting_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setting.page */ "kSd7");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    {
        path: '',
        component: _setting_page__WEBPACK_IMPORTED_MODULE_1__["SettingPage"]
    },
    {
        path: 'setting-mypicture',
        loadChildren: () => __webpack_require__.e(/*! import() */ 37).then(__webpack_require__.bind(null, /*! ./setting-mypicture/setting-mypicture.module */ "aibZ")).then(m => m.SettingMypicturePageModule)
    },
    {
        path: 'setting-profile',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e(39)]).then(__webpack_require__.bind(null, /*! ./setting-profile/setting-profile.module */ "ZvdA")).then(m => m.SettingProfilePageModule)
    },
    {
        path: 'setting-pincode',
        loadChildren: () => __webpack_require__.e(/*! import() */ 38).then(__webpack_require__.bind(null, /*! ./setting-pincode/setting-pincode.module */ "gRwR")).then(m => m.SettingPincodePageModule)
    }
];
let SettingPageRoutingModule = /*@__PURE__*/ (() => {
    class SettingPageRoutingModule {
    }
    SettingPageRoutingModule.ɵfac = function SettingPageRoutingModule_Factory(t) { return new (t || SettingPageRoutingModule)(); };
    SettingPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: SettingPageRoutingModule });
    SettingPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
    return SettingPageRoutingModule;
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](SettingPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ })

}]);