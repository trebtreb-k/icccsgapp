(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[29],{

/***/ "QFHj":
/*!*****************************************************!*\
  !*** ./src/app/pages/guest-home/guest-home.page.ts ***!
  \*****************************************************/
/*! exports provided: GuestHomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuestHomePage", function() { return GuestHomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../environments/environment */ "AytR");
/* harmony import */ var _services_utils_moment_moment_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/utils/moment/moment.service */ "9cE+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_api_home_home_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/api/home/home.service */ "Ygfv");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_authen_authen_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../services/authen/authen.service */ "jEmi");
/* harmony import */ var _services_storage_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../services/storage/storage.service */ "E2f4");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_api_check_inout_check_inout_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../../services/api/check-inout/check-inout.service */ "6Ghx");
/* harmony import */ var _services_api_announce_announce_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../../services/api/announce/announce.service */ "Yfl9");
/* harmony import */ var _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/photo-viewer/ngx */ "U3FU");
/* harmony import */ var _services_fcm_fcm_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./../../services/fcm/fcm.service */ "26ot");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "ofXK");














function GuestHomePage_div_34_p_6_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const menu_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](menu_r1.title2);
    }
}
function GuestHomePage_div_34_ion_badge_7_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-badge", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const menu_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](menu_r1.badge);
    }
}
function GuestHomePage_div_34_Template(rf, ctx) {
    if (rf & 1) {
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function GuestHomePage_div_34_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7); const menu_r1 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r6.navigate(menu_r1.link); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "p", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, GuestHomePage_div_34_p_6_Template, 2, 1, "p", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, GuestHomePage_div_34_ion_badge_7_Template, 2, 1, "ion-badge", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const menu_r1 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", menu_r1.logo, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](menu_r1.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", menu_r1.title2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", menu_r1.badge > 0);
    }
}
_services_utils_moment_moment_service__WEBPACK_IMPORTED_MODULE_2__["moment"].locale('th');
let GuestHomePage = /*@__PURE__*/ (() => {
    class GuestHomePage {
        constructor(home, alertController, authen, storage, router, activateRoute, checkInApi, announceApi, platform, actionSheetController, photoViewer, fcm) {
            // this.fcm.getToken();
            this.home = home;
            this.alertController = alertController;
            this.authen = authen;
            this.storage = storage;
            this.router = router;
            this.activateRoute = activateRoute;
            this.checkInApi = checkInApi;
            this.announceApi = announceApi;
            this.platform = platform;
            this.actionSheetController = actionSheetController;
            this.photoViewer = photoViewer;
            this.fcm = fcm;
            this.version = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].version;
            this.notAnnouncePopupDisplayAgain = false;
            this.timeToday = {
                checkIn: '__:__',
                checkOut: '__:__',
            };
            this.menus = [
                {
                    id: 'SETTING',
                    title: 'ตั้งค่า',
                    logo: 'assets/images/menus/settings.svg',
                    link: 'setting',
                    badge: 0,
                },
                {
                    id: 'CUSTOMER',
                    title: 'ลูกค้า',
                    logo: 'assets/images/menus/user.svg',
                    link: 'guest-customer',
                    badge: 0,
                },
            ];
            /*
            menus: Menus[] = [
              {
                id: 'CHECK-IN',
                title: 'ลงชื่อเข้า/ออก',
                logo: 'assets/images/menus/location.png',
                link: 'check-inout',
                badge : 0,
              },
              {
                id: 'SCAN-CHECKIN',
                title: 'สแกนเข้า/ออก',
                logo: 'assets/images/menus/qr-code-scan.png',
                link: 'scan-check-inout',
                badge : 0,
              },
              {
                id: 'CSG-PLAN',
                title: 'แพลนงาน',
                logo: 'assets/images/menus/calendar-pen.png',
                link: 'csg-plan',
                badge : 0,
              },
              {
                id: 'TIME-STAT',
                title: 'สถิติการทำงาน',
                logo: 'assets/images/menus/calendar-time.png',
                link: 'time-stat',
                badge : 0,
              },
              {
                id: 'CUSTOMER',
                title: 'ลูกค้า',
                logo: 'assets/images/menus/user.svg',
                link: 'customer',
                badge : 0,
              },
              {
                id: 'INCOME',
                title: 'รายได้',
                logo: 'assets/images/menus/thai-baht.png',
                link: 'income',
                badge : 0,
              },
              {
                id: 'WORKFLOW',
                title: 'ใบลา',
                logo: 'assets/images/menus/approve.png',
                link: 'workflow',
                badge : 0,
              },
              {
                id: 'DIRECT-TO-CUSTOMER',
                title: 'Direct to',
                title2: 'Customer',
                logo: 'assets/images/menus/bag.png',
                link: 'direct-to-customer',
                badge : 0,
              },
              {
                id: 'ANNOUNCE',
                title: 'ประกาศ',
                logo: 'assets/images/menus/megaphone-outline.svg',
                link: 'announce',
                badge: 0,
              },
            ];
            */
            this.newsData = [];
            this.newsOptions = {
                initialSlide: 0,
                speed: 400,
            };
            this.state = null;
            this.version_picture = Math.floor(Math.random() * 10000);
            this.counter = {
                announce_wait_count: 0
            };
            this.activateRoute.queryParams.subscribe((params) => {
                var _a;
                this.state = ((_a = this.router.getCurrentNavigation()) === null || _a === void 0 ? void 0 : _a.extras.state) || null;
                this.getVersionPicture();
            });
            const today = () => {
                this.today = Object(_services_utils_moment_moment_service__WEBPACK_IMPORTED_MODULE_2__["moment"])().format('LLLL [น.]');
            };
            setInterval(today, 1000);
        }
        getVersionPicture() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (this.state && this.state.refresh) {
                    this.version_picture = Math.floor(Math.random() * 10000);
                    sessionStorage.setItem('version_picture', this.version_picture.toString());
                }
                else {
                    if (sessionStorage.getItem('version_picture')) {
                        this.version_picture = parseInt(sessionStorage.getItem('version_picture'));
                    }
                    else {
                        this.version_picture = Math.floor(Math.random() * 10000);
                        sessionStorage.setItem('version_picture', this.version_picture.toString());
                    }
                }
            });
        }
        ngOnInit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                //this.getUserInfo();
                // try {
                //   const announce = await this.home.announce();
                //   this.newsData = await announce.data;
                // } catch (error) {
                //   console.log(error);
                // }
            });
        }
        ionViewDidEnter() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                this.getUserInfo();
                try {
                    console.log('start get timetoday');
                    const response = yield this.checkInApi.getCheckInOutToday();
                    console.log(response);
                    if (response.datas) {
                        this.timeToday = {
                            checkIn: (!response.datas.timein) ? '' : response.datas.timein.substring(0, 2) + ':' + response.datas.timein.substring(2, 4),
                            checkOut: (!response.datas.timeout) ? '' : response.datas.timeout.substring(0, 2) + ':' + response.datas.timeout.substring(2, 4),
                        };
                    }
                    /* announce slider */
                    //  const announce = await this.home.announce();
                    //  this.newsData = await announce.data;
                    //  this.getAnnouncePopup();
                    //  this.getAnnounceAllWaitCount();
                }
                catch (error) {
                    console.log(error);
                }
            });
        }
        doRefresh(event) {
            setTimeout(() => {
                this.ionViewDidEnter();
                event.target.complete();
            }, 2000);
        }
        getUserInfo() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                const info = yield this.storage.get('USER_INFO');
                this.user = info;
                this.user.picture = this.user.picture + '?v=' + this.version_picture.toString();
                /*
                if(this.state){
                  if(this.state.refresh){
                    // this.user.picture = "assets/images/avatar-female.svg";
                     this.user.picture = this.user.picture+'?v='+this.version_picture.toString();
                  }
                } */
            });
        }
        logout() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                const alert = yield this.alertController.create({
                    header: 'ออกจากระบบ',
                    message: 'คุณต้องการลงชื่อออกจากระบบ ?',
                    cssClass: 'alert__box--danger',
                    buttons: [
                        {
                            text: 'ตกลง',
                            cssClass: 'alert__button--danger',
                            handler: () => {
                                this.authen.logout();
                            },
                        },
                    ],
                });
                yield alert.present();
            });
        }
        navigate(route) {
            this.router.navigate([route]);
        }
        setting() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                const actionSheet = yield this.actionSheetController.create({
                    header: 'Menu',
                    cssClass: 'my-custom-class',
                    buttons: [{
                            text: 'Setting',
                            icon: 'settings-outline',
                            handler: () => {
                                console.log('Setting clicked');
                                this.navigate('/setting');
                            }
                        }, {
                            text: 'Logout',
                            icon: 'log-out-outline',
                            handler: () => {
                                console.log('Logout clicked');
                                this.logout();
                            }
                        }]
                });
                yield actionSheet.present();
                const { role } = yield actionSheet.onDidDismiss();
                console.log('onDidDismiss resolved with role', role);
            });
        }
        onViewImage(url) {
            this.photoViewer.show(url);
        }
        openLink(news) {
            if (news.link) {
                window.open(news.link);
            }
        }
        getAnnouncePopup() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                let period = Object(_services_utils_moment_moment_service__WEBPACK_IMPORTED_MODULE_2__["moment"])().format('DD-MM-YYYY');
                console.log(period);
                try {
                    let response = yield this.announceApi.annoucementPopupUncheckRead(period);
                    if (response.result) {
                        console.log(response);
                        if (response.datas.length > 0) {
                            let announceId = response.datas[0].announce_id;
                            let announceTitle = response.datas[0].title;
                            let announcePicture = response.datas[0].picture1;
                            let announceContent = response.datas[0].description;
                            this.showAnnouncePopup(announceId, announceTitle, announcePicture, announceContent);
                        }
                    }
                }
                catch (error) {
                }
            });
        }
        showAnnouncePopup(announceId, title, pictureUrl, content) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                let announceImg = '<img src="' + pictureUrl + '">';
                let announceContent = '';
                announceContent += announceImg;
                announceContent += '<br><div style="overflow-y:auto;max-height:240px;">' + content + '</div>';
                let message = '<div style="overflow-y:auto;height:240px; max-height:240px;">' + announceContent + '</div>';
                let alert = yield this.alertController.create({
                    header: title,
                    message: message,
                    inputs: [
                        {
                            name: 'checkNoRead',
                            label: 'ไม่ต้องแสดงอีกในครั้งต่อไป',
                            type: 'checkbox',
                            checked: false,
                            handler: (data) => {
                                this.notAnnouncePopupDisplayAgain = true;
                            }
                        }
                    ],
                    buttons: [
                        { text: 'ปิดหน้าจอ',
                            handler: data => {
                                console.log('Ok clicked');
                                if (this.notAnnouncePopupDisplayAgain) {
                                    console.log('not display again ' + announceId);
                                    this.announceApi.addReadAnnoucementPopup(announceId);
                                    this.getAnnounceAllWaitCount();
                                }
                            }
                        }
                    ]
                });
                yield alert.present();
            });
        }
        getAnnounceAllWaitCount() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                try {
                    let response = yield this.announceApi.announceAllWaitCount();
                    console.log(' response.datas.total_count;', response.datas.total_count);
                    if (response.result) {
                        //this.counter.announce_wait_count = response.datas.total_count;
                        const idx = this.menus.findIndex((menu) => {
                            console.log(' menu.id', menu.id);
                            return menu.id === 'ANNOUNCE';
                        });
                        console.log('idx', idx);
                        console.log(this.menus[idx].badge);
                        this.menus[idx].badge = response.datas.total_count;
                        console.log(this.menus[idx].badge);
                    }
                }
                catch (error) {
                }
            });
        }
    }
    GuestHomePage.ɵfac = function GuestHomePage_Factory(t) { return new (t || GuestHomePage)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_api_home_home_service__WEBPACK_IMPORTED_MODULE_4__["HomeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_authen_authen_service__WEBPACK_IMPORTED_MODULE_6__["AuthenService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_7__["StorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_api_check_inout_check_inout_service__WEBPACK_IMPORTED_MODULE_9__["CheckInoutService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_api_announce_announce_service__WEBPACK_IMPORTED_MODULE_10__["AnnounceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ActionSheetController"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_11__["PhotoViewer"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_fcm_fcm_service__WEBPACK_IMPORTED_MODULE_12__["FcmService"])); };
    GuestHomePage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: GuestHomePage, selectors: [["app-guest-home"]], decls: 38, vars: 7, consts: [[1, "ion-no-border"], ["slot", "start"], [3, "click"], ["name", "menu"], ["slot", "end"], ["slot", "icon-only", "name", "log-out-outline", "color", "dark"], ["fullscreen", "true"], ["slot", "fixed", 3, "ionRefresh"], [1, "profile"], [1, "profile__card"], [1, "profile__card--avatar"], ["onError", "this.src='assets/images/avatar-female.svg';", "alt", "", 3, "src", "click"], [1, "profile__card--info"], [1, "profile__card--info--id"], [1, "profile__card--info--name"], [1, "profile__card--info--dept"], [1, "static-timedate"], [1, "today"], [1, "menus"], [1, "topic"], [1, "mark"], [1, "menus__container"], ["class", "menus__container__item", 3, "click", 4, "ngFor", "ngForOf"], [1, "server-version"], [1, "menus__container__item", 3, "click"], [1, "menus__container__item--logo"], ["alt", "", 3, "src"], [1, "menus__container__item--title"], [2, "margin-top", "4px"], [4, "ngIf"], ["class", "badge-number", "item-end", "", "color", "danger", 4, "ngIf"], ["item-end", "", "color", "danger", 1, "badge-number"]], template: function GuestHomePage_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-header", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "ion-toolbar");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "ion-buttons", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "ion-button", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function GuestHomePage_Template_ion_button_click_3_listener() { return ctx.setting(); });
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "ion-icon", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "ion-title");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "ICC CSG APP - GUEST");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "ion-buttons", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "ion-button", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function GuestHomePage_Template_ion_button_click_8_listener() { return ctx.logout(); });
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "ion-icon", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "ion-content", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "ion-refresher", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ionRefresh", function GuestHomePage_Template_ion_refresher_ionRefresh_11_listener($event) { return ctx.doRefresh($event); });
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "ion-refresher-content");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "img", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function GuestHomePage_Template_img_click_16_listener() { return ctx.onViewImage(ctx.user == null ? null : ctx.user.picture); });
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "p", 13);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "p", 14);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "p", 15);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div", 16);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "div", 17);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "div", 18);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "div", 19);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](30, "div", 20);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "h3");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, "\u0E40\u0E21\u0E19\u0E39");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "div", 21);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](34, GuestHomePage_div_34_Template, 8, 4, "div", 22);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "div", 23);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](37);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](16);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx.user == null ? null : ctx.user.picture, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("\u0E23\u0E2B\u0E31\u0E2A\u0E1C\u0E39\u0E49\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19 : ", ctx.user == null ? null : ctx.user.emp_id, "");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.user == null ? null : ctx.user.name);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.user == null ? null : ctx.user.dept_desc);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.today);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.menus);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("version : ", ctx.version, "");
            }
        }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonRefresher"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonRefresherContent"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonBadge"]], styles: ["ion-content[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%] {\n  background-image: linear-gradient(109.6deg, #f7928b 11.2%, #ffafa9 91.1%);\n  border-radius: 26px;\n  margin: 8px 12px;\n  padding: 22px 16px;\n  box-shadow: 0px 8px 25px -10px rgba(0, 0, 0, 0.25);\n}\nion-content[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%]   .profile__card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: row nowrap;\n  align-items: center;\n}\nion-content[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%]   .profile__card[_ngcontent-%COMP%]   .profile__card--avatar[_ngcontent-%COMP%] {\n  width: 118px;\n}\nion-content[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%]   .profile__card[_ngcontent-%COMP%]   .profile__card--avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 88px;\n  height: 88px;\n  min-width: 88px;\n  min-height: 88px;\n  object-fit: cover;\n  border-radius: 50%;\n  display: block;\n  margin: auto;\n}\nion-content[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%]   .profile__card[_ngcontent-%COMP%]   .profile__card--info[_ngcontent-%COMP%] {\n  margin-left: 14px;\n}\nion-content[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%]   .profile__card[_ngcontent-%COMP%]   .profile__card--info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #3d3d3d;\n  font-size: 0.9rem;\n  margin: 5px 0;\n}\nion-content[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%]   .profile__card[_ngcontent-%COMP%]   .profile__card--info[_ngcontent-%COMP%]   p.profile__card--info--id[_ngcontent-%COMP%] {\n  color: #0d0d0d;\n  font-size: 0.9rem;\n  font-weight: 500;\n  margin: 0;\n}\nion-content[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%]   .profile__card[_ngcontent-%COMP%]   .profile__card--info[_ngcontent-%COMP%]   p.profile__card--info--name[_ngcontent-%COMP%] {\n  color: #1d1d1d;\n  font-size: 1rem;\n  font-weight: 500;\n}\nion-content[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%]   .profile__card[_ngcontent-%COMP%]   .profile__card--info[_ngcontent-%COMP%]   p.profile__card--info--dept[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  font-weight: 400;\n}\nion-content[_ngcontent-%COMP%]   .static-timedate[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  color: #222222;\n  font-size: 0.85rem;\n  font-weight: 500;\n}\nion-content[_ngcontent-%COMP%]   .static-timedate[_ngcontent-%COMP%]   .today[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n}\nion-content[_ngcontent-%COMP%]   .static-timedate[_ngcontent-%COMP%]   .today[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  margin-top: 18px;\n}\nion-content[_ngcontent-%COMP%]   .static-timedate[_ngcontent-%COMP%]   .timestamp[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: center;\n}\nion-content[_ngcontent-%COMP%]   .static-timedate[_ngcontent-%COMP%]   .timestamp[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  flex-basis: 50%;\n  display: flex;\n  justify-content: center;\n}\nion-content[_ngcontent-%COMP%]   .static-timedate[_ngcontent-%COMP%]   .timestamp[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   .in[_ngcontent-%COMP%] {\n  color: #41ad3e;\n}\nion-content[_ngcontent-%COMP%]   .static-timedate[_ngcontent-%COMP%]   .timestamp[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   .out[_ngcontent-%COMP%] {\n  color: #b63333;\n}\nion-content[_ngcontent-%COMP%]   .menus[_ngcontent-%COMP%] {\n  margin: 5px 20px 45px 20px;\n}\nion-content[_ngcontent-%COMP%]   .menus[_ngcontent-%COMP%]   .menus__container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: flex-start;\n}\nion-content[_ngcontent-%COMP%]   .menus[_ngcontent-%COMP%]   .menus__container[_ngcontent-%COMP%]   .menus__container__item[_ngcontent-%COMP%] {\n  flex-basis: 33.33%;\n  display: flex;\n  flex-flow: column nowrap;\n  align-items: center;\n  justify-content: start;\n  margin: 6px 0;\n  width: 110px;\n  height: 120px;\n  position: relative;\n}\nion-content[_ngcontent-%COMP%]   .menus[_ngcontent-%COMP%]   .menus__container[_ngcontent-%COMP%]   .menus__container__item[_ngcontent-%COMP%]   .badge-number[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0px;\n  right: 15px;\n  border-radius: 50%;\n  height: 22px;\n  width: 22px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\nion-content[_ngcontent-%COMP%]   .menus[_ngcontent-%COMP%]   .menus__container[_ngcontent-%COMP%]   .menus__container__item[_ngcontent-%COMP%]   .menus__container__item--logo[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  background: #ffffff;\n  box-shadow: 0px 8px 20px -10px rgba(0, 0, 0, 0.02);\n  border-radius: 50%;\n  display: flex;\n  flex-flow: column wrap;\n  align-items: center;\n  justify-content: center;\n}\nion-content[_ngcontent-%COMP%]   .menus[_ngcontent-%COMP%]   .menus__container[_ngcontent-%COMP%]   .menus__container__item[_ngcontent-%COMP%]   .menus__container__item--logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  object-fit: cover;\n}\nion-content[_ngcontent-%COMP%]   .menus[_ngcontent-%COMP%]   .menus__container[_ngcontent-%COMP%]   .menus__container__item[_ngcontent-%COMP%]   .menus__container__item--title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #2d2d2d;\n  font-size: 0.8rem;\n  font-weight: 500;\n  margin: 0px 0;\n}\nion-content[_ngcontent-%COMP%]   .news[_ngcontent-%COMP%] {\n  margin: 50px 20px;\n}\nion-content[_ngcontent-%COMP%]   .news[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-radius: 3px;\n  width: 100%;\n  height: 380px;\n  object-fit: cover;\n  box-shadow: 0px 8px 20px -10px rgba(0, 0, 0, 0.2);\n}\nion-content[_ngcontent-%COMP%]   .server-version[_ngcontent-%COMP%] {\n  margin: 0;\n}\nion-content[_ngcontent-%COMP%]   .server-version[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  text-align: center;\n}\n.topic[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n}\n.topic[_ngcontent-%COMP%]   .mark[_ngcontent-%COMP%] {\n  position: absolute;\n  background: #4d4d4d;\n  border-radius: 50%;\n  width: 8px;\n  height: 8px;\n  top: 10px;\n}\n.topic[_ngcontent-%COMP%]   .mark.primary[_ngcontent-%COMP%] {\n  background: #f88c83;\n}\n.topic[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #1d1d1d;\n  letter-spacing: 0.3px;\n  margin-left: 20px;\n  margin-top: 0px;\n}"] });
    return GuestHomePage;
})();


/***/ }),

/***/ "t/mA":
/*!*******************************************************!*\
  !*** ./src/app/pages/guest-home/guest-home.module.ts ***!
  \*******************************************************/
/*! exports provided: GuestHomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuestHomePageModule", function() { return GuestHomePageModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _guest_home_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./guest-home-routing.module */ "wR12");
/* harmony import */ var _guest_home_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./guest-home.page */ "QFHj");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");






let GuestHomePageModule = /*@__PURE__*/ (() => {
    class GuestHomePageModule {
    }
    GuestHomePageModule.ɵfac = function GuestHomePageModule_Factory(t) { return new (t || GuestHomePageModule)(); };
    GuestHomePageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: GuestHomePageModule });
    GuestHomePageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
                _guest_home_routing_module__WEBPACK_IMPORTED_MODULE_3__["GuestHomePageRoutingModule"]
            ]] });
    return GuestHomePageModule;
})();
(function () {
    (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](GuestHomePageModule, { declarations: [_guest_home_page__WEBPACK_IMPORTED_MODULE_4__["GuestHomePage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
            _guest_home_routing_module__WEBPACK_IMPORTED_MODULE_3__["GuestHomePageRoutingModule"]] });
})();


/***/ }),

/***/ "wR12":
/*!***************************************************************!*\
  !*** ./src/app/pages/guest-home/guest-home-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: GuestHomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuestHomePageRoutingModule", function() { return GuestHomePageRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _guest_home_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./guest-home.page */ "QFHj");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    {
        path: '',
        component: _guest_home_page__WEBPACK_IMPORTED_MODULE_1__["GuestHomePage"]
    }
];
let GuestHomePageRoutingModule = /*@__PURE__*/ (() => {
    class GuestHomePageRoutingModule {
    }
    GuestHomePageRoutingModule.ɵfac = function GuestHomePageRoutingModule_Factory(t) { return new (t || GuestHomePageRoutingModule)(); };
    GuestHomePageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: GuestHomePageRoutingModule });
    GuestHomePageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
    return GuestHomePageRoutingModule;
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](GuestHomePageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ })

}]);