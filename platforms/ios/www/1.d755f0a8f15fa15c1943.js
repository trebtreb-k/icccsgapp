(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "26ot":
/*!*********************************************!*\
  !*** ./src/app/services/fcm/fcm.service.ts ***!
  \*********************************************/
/*! exports provided: FcmService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcmService", function() { return FcmService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var cordova_plugin_fcm_with_dependecy_updated_ionic_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! cordova-plugin-fcm-with-dependecy-updated/ionic/ngx */ "lOSq");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _authen_authen_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../authen/authen.service */ "jEmi");





let FcmService = /*@__PURE__*/ (() => {
    class FcmService {
        constructor(fcm, platform, authenApi) {
            this.fcm = fcm;
            this.platform = platform;
            this.authenApi = authenApi;
            //constructor() {}
            this.pushes = [];
            this.token = '';
            this.platform.ready()
                .then(() => {
                this.fcm.onNotification().subscribe(data => {
                    if (data.wasTapped) {
                        console.log("Received in background");
                    }
                    else {
                        console.log("Received in foreground");
                    }
                    ;
                });
                this.fcm.onTokenRefresh().subscribe(token => {
                    // Register your new token in your back-end if you want
                    // backend.registerToken(token);
                });
            });
        }
        getToken() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                console.log('start firebase gettoken');
                // alert('get token');
                // let token = await  this.fcm.getToken();
                // console.log('xxxxxxxxxxxxx')
                //  await this.authenApi.updateFirebaseToken('x123456', 'android');
                this.fcm.requestPushPermission().then((result) => {
                    alert(result.toString());
                });
                this.token = yield this.fcm.getToken();
                alert(this.token);
                if (this.platform.is('android')) {
                    //  alert(this.token)
                    yield this.authenApi.updateFirebaseToken(this.token, 'android');
                }
                if (this.platform.is('ios')) {
                    // this.fcm.requestPushPermissionIOS().then(()=>{})
                    // await this.fcm.grantPermission();
                    yield this.authenApi.updateFirebaseToken(this.token, 'ios');
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
            });
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
    FcmService.ɵfac = function FcmService_Factory(t) { return new (t || FcmService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](cordova_plugin_fcm_with_dependecy_updated_ionic_ngx__WEBPACK_IMPORTED_MODULE_2__["FCM"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_authen_authen_service__WEBPACK_IMPORTED_MODULE_4__["AuthenService"])); };
    FcmService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: FcmService, factory: FcmService.ɵfac, providedIn: 'root' });
    return FcmService;
})();


/***/ }),

/***/ "6Ghx":
/*!*****************************************************************!*\
  !*** ./src/app/services/api/check-inout/check-inout.service.ts ***!
  \*****************************************************************/
/*! exports provided: CheckInoutService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckInoutService", function() { return CheckInoutService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _api_root__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../api.root */ "ntc2");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _storage_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../storage/storage.service */ "E2f4");






let CheckInoutService = /*@__PURE__*/ (() => {
    class CheckInoutService {
        constructor(http, storage) {
            this.http = http;
            this.storage = storage;
        }
        getLocationNearMe(lat, lng) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                const token = yield this.storage.get('USER_TOKEN');
                const url = `${_api_root__WEBPACK_IMPORTED_MODULE_2__["ST_ROOT"].checkin}/salestools/checkin/locationnearme?lat=${lat}&lng=${lng}`;
                let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
                headers = headers.set('Authorization', `Bearer ${token}`);
                return this.http.get(url, { headers }).toPromise();
            });
        }
        postCheckInOut(storeid, branchid, counterid, custid, lat, lng, type) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                const body = { storeid, branchid, counterid, custid, lat, lng, type };
                const token = yield this.storage.get('USER_TOKEN');
                const url = `${_api_root__WEBPACK_IMPORTED_MODULE_2__["ST_ROOT"].checkin}/salestools/checkin/checkinout`;
                let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
                headers = headers.set('Authorization', `Bearer ${token}`);
                return this.http.post(url, body, { headers }).toPromise();
            });
        }
        getCheckInOutToday() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                const token = yield this.storage.get('USER_TOKEN');
                const url = `${_api_root__WEBPACK_IMPORTED_MODULE_2__["ST_ROOT"].checkin}/salestools/checkin/checkinout_today`;
                let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
                headers = headers.set('Authorization', `Bearer ${token}`);
                return this.http.get(url, { headers }).toPromise();
            });
        }
        getCheckInOutDetail(trandate) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                const token = yield this.storage.get('USER_TOKEN');
                const url = `${_api_root__WEBPACK_IMPORTED_MODULE_2__["ST_ROOT"].checkin}/salestools/checkin/checkinout_detail?monthyear=${trandate}`;
                let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
                headers = headers.set('Authorization', `Bearer ${token}`);
                return this.http.get(url, { headers }).toPromise();
            });
        }
        getRegisterQrms(trandate) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                const token = yield this.storage.get('USER_TOKEN');
                const url = `${_api_root__WEBPACK_IMPORTED_MODULE_2__["ST_ROOT"].checkin}/salestools/checkin/register_qrms?monthyear=${trandate}`;
                let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
                headers = headers.set('Authorization', `Bearer ${token}`);
                return this.http.get(url, { headers }).toPromise();
            });
        }
    }
    CheckInoutService.ɵfac = function CheckInoutService_Factory(t) { return new (t || CheckInoutService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_storage_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"])); };
    CheckInoutService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: CheckInoutService, factory: CheckInoutService.ɵfac, providedIn: 'root' });
    return CheckInoutService;
})();


/***/ }),

/***/ "9cE+":
/*!*********************************************************!*\
  !*** ./src/app/services/utils/moment/moment.service.ts ***!
  \*********************************************************/
/*! exports provided: moment, MomentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MomentService", function() { return MomentService; });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "moment", function() { return moment__WEBPACK_IMPORTED_MODULE_0__; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


let MomentService = /*@__PURE__*/ (() => {
    class MomentService {
        constructor() { }
        initial(param, options) {
            const { inp, strict, locale, format } = param;
            const { add, subtract } = options;
            return moment__WEBPACK_IMPORTED_MODULE_0__(inp || undefined, strict || undefined)
                .locale(locale || 'th')
                .format(format || 'YYYY-MM-DD');
        }
    }
    MomentService.ɵfac = function MomentService_Factory(t) { return new (t || MomentService)(); };
    MomentService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: MomentService, factory: MomentService.ɵfac, providedIn: 'root' });
    return MomentService;
})();



/***/ }),

/***/ "Yfl9":
/*!***********************************************************!*\
  !*** ./src/app/services/api/announce/announce.service.ts ***!
  \***********************************************************/
/*! exports provided: AnnounceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnnounceService", function() { return AnnounceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _api_root__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../api.root */ "ntc2");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _storage_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../storage/storage.service */ "E2f4");






let AnnounceService = /*@__PURE__*/ (() => {
    class AnnounceService {
        constructor(http, storage) {
            this.http = http;
            this.storage = storage;
        }
        announce() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                const url = `${_api_root__WEBPACK_IMPORTED_MODULE_2__["ST_ROOT"].announce}/salestools/announce/list`;
                return this.http.get(url).toPromise();
            });
        }
        announcePopupList() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                const url = `${_api_root__WEBPACK_IMPORTED_MODULE_2__["ST_ROOT"].announce}/salestools/announce/popup/list`;
                console.log(url);
                const token = yield this.storage.get('USER_TOKEN');
                let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
                headers = headers.set('Authorization', `Bearer ${token}`);
                return this.http.get(url, { headers }).toPromise();
            });
        }
        addReadAnnoucementPopup(announceId) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                const url = `${_api_root__WEBPACK_IMPORTED_MODULE_2__["ST_ROOT"].announce}/salestools/announce/popup/addReadAnnouncement`;
                const token = yield this.storage.get('USER_TOKEN');
                let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
                headers = headers.set('Authorization', `Bearer ${token}`);
                let body = {
                    announce_id: announceId,
                };
                return this.http.post(url, body, { headers }).toPromise();
            });
        }
        annoucementPopupUncheckRead(period) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                const url = `${_api_root__WEBPACK_IMPORTED_MODULE_2__["ST_ROOT"].announce}/salestools/announce/popup/uncheckread?period=${period}`;
                console.log(url);
                const token = yield this.storage.get('USER_TOKEN');
                let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
                headers = headers.set('Authorization', `Bearer ${token}`);
                return this.http.get(url, { headers }).toPromise();
            });
        }
        announceAllWaitCount() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                const url = `${_api_root__WEBPACK_IMPORTED_MODULE_2__["ST_ROOT"].announce}/salestools/announce/popup/countwaitread`;
                console.log(url);
                const token = yield this.storage.get('USER_TOKEN');
                let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
                headers = headers.set('Authorization', `Bearer ${token}`);
                return this.http.get(url, { headers }).toPromise();
            });
        }
    }
    AnnounceService.ɵfac = function AnnounceService_Factory(t) { return new (t || AnnounceService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_storage_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"])); };
    AnnounceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: AnnounceService, factory: AnnounceService.ɵfac, providedIn: 'root' });
    return AnnounceService;
})();


/***/ }),

/***/ "Ygfv":
/*!***************************************************!*\
  !*** ./src/app/services/api/home/home.service.ts ***!
  \***************************************************/
/*! exports provided: HomeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeService", function() { return HomeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _api_root__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../api.root */ "ntc2");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




let HomeService = /*@__PURE__*/ (() => {
    class HomeService {
        constructor(http) {
            this.http = http;
        }
        announce() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                const url = `${_api_root__WEBPACK_IMPORTED_MODULE_1__["ST_ROOT"].announce}/salestools/announce/lists`;
                return this.http.get(url).toPromise();
            });
        }
    }
    HomeService.ɵfac = function HomeService_Factory(t) { return new (t || HomeService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
    HomeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: HomeService, factory: HomeService.ɵfac, providedIn: 'root' });
    return HomeService;
})();


/***/ })

}]);