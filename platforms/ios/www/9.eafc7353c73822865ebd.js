(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

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

/***/ "IlP0":
/*!*********************************************************!*\
  !*** ./src/app/pages/check-inout/check-inout.module.ts ***!
  \*********************************************************/
/*! exports provided: CheckInoutPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckInoutPageModule", function() { return CheckInoutPageModule; });
/* harmony import */ var _check_inout_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./check-inout.page */ "gQtQ");
/* harmony import */ var _check_inout_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./check-inout-routing.module */ "Szbb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_countdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-countdown */ "z+xu");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var ngx_lottie__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-lottie */ "DPnb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");








let CheckInoutPageModule = /*@__PURE__*/ (() => {
    class CheckInoutPageModule {
    }
    CheckInoutPageModule.ɵfac = function CheckInoutPageModule_Factory(t) { return new (t || CheckInoutPageModule)(); };
    CheckInoutPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: CheckInoutPageModule });
    CheckInoutPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _check_inout_routing_module__WEBPACK_IMPORTED_MODULE_1__["CheckInoutPageRoutingModule"], ngx_countdown__WEBPACK_IMPORTED_MODULE_3__["CountdownModule"], ngx_lottie__WEBPACK_IMPORTED_MODULE_6__["LottieModule"]]] });
    return CheckInoutPageModule;
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](CheckInoutPageModule, { declarations: [_check_inout_page__WEBPACK_IMPORTED_MODULE_0__["CheckInoutPage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _check_inout_routing_module__WEBPACK_IMPORTED_MODULE_1__["CheckInoutPageRoutingModule"], ngx_countdown__WEBPACK_IMPORTED_MODULE_3__["CountdownModule"], ngx_lottie__WEBPACK_IMPORTED_MODULE_6__["LottieModule"]] }); })();


/***/ }),

/***/ "Szbb":
/*!*****************************************************************!*\
  !*** ./src/app/pages/check-inout/check-inout-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: CheckInoutPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckInoutPageRoutingModule", function() { return CheckInoutPageRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _check_inout_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./check-inout.page */ "gQtQ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    {
        path: '',
        component: _check_inout_page__WEBPACK_IMPORTED_MODULE_1__["CheckInoutPage"]
    }
];
let CheckInoutPageRoutingModule = /*@__PURE__*/ (() => {
    class CheckInoutPageRoutingModule {
    }
    CheckInoutPageRoutingModule.ɵfac = function CheckInoutPageRoutingModule_Factory(t) { return new (t || CheckInoutPageRoutingModule)(); };
    CheckInoutPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: CheckInoutPageRoutingModule });
    CheckInoutPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
    return CheckInoutPageRoutingModule;
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](CheckInoutPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "gQtQ":
/*!*******************************************************!*\
  !*** ./src/app/pages/check-inout/check-inout.page.ts ***!
  \*******************************************************/
/*! exports provided: CheckInoutPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckInoutPage", function() { return CheckInoutPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "Bfh1");
/* harmony import */ var _ionic_native_location_accuracy_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/location-accuracy/ngx */ "92l+");
/* harmony import */ var _services_api_check_inout_check_inout_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../services/api/check-inout/check-inout.service */ "6Ghx");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_countdown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-countdown */ "z+xu");
/* harmony import */ var ngx_lottie__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-lottie */ "DPnb");












const _c0 = ["map"];
function CheckInoutPage_ion_footer_17_p_8_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\u0E44\u0E21\u0E48\u0E1E\u0E1A\u0E15\u0E33\u0E41\u0E2B\u0E19\u0E48\u0E07 Location");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
}
function CheckInoutPage_ion_footer_17_div_17_Template(rf, ctx) {
    if (rf & 1) {
        const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "ion-checkbox", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ionChange", function CheckInoutPage_ion_footer_17_div_17_Template_ion_checkbox_ionChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10); const location_r7 = ctx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r9.checkEvent(location_r7, $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CheckInoutPage_ion_footer_17_div_17_Template_div_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10); const location_r7 = ctx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r11.alertModeCheckInOut(location_r7); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CheckInoutPage_ion_footer_17_div_17_Template_div_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10); const location_r7 = ctx.$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r12.alertModeCheckInOut(location_r7); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const location_r7 = ctx.$implicit;
        const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", ctx_r6.isCheck(location_r7) >= 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](location_r7.brandName.substring(0, 18));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](location_r7.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](location_r7.subTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](location_r7.counterId);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](location_r7.brandName);
    }
}
const _c1 = function (a0) { return { leftTime: a0, format: "s" }; };
function CheckInoutPage_ion_footer_17_Template(rf, ctx) {
    if (rf & 1) {
        const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "ion-checkbox", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ionChange", function CheckInoutPage_ion_footer_17_Template_ion_checkbox_ionChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r13.checkEventAll($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "All");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, CheckInoutPage_ion_footer_17_p_8_Template, 2, 0, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, " \u0E2B\u0E21\u0E14\u0E40\u0E27\u0E25\u0E32 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "countdown", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("event", function CheckInoutPage_ion_footer_17_Template_countdown_event_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r14); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r15.expireCountdown($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, " \u0E27\u0E34\u0E19\u0E32\u0E17\u0E35 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CheckInoutPage_ion_footer_17_Template_button_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r14); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r16.alertModeAction(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Check In/Out");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, CheckInoutPage_ion_footer_17_div_17_Template, 16, 6, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.workspaceLocation.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("config", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](4, _c1, ctx_r0.countdownExpire));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx_r0.locationsSelected.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.workspaceLocation);
    }
}
function CheckInoutPage_ion_footer_18_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "ng-lottie", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("width", ctx_r1.lottiefiles.loadData.width)("height", ctx_r1.lottiefiles.loadData.height)("options", ctx_r1.lottiefiles.loadData.options);
    }
}
function CheckInoutPage_ion_footer_19_Template(rf, ctx) {
    if (rf & 1) {
        const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "\u0E1E\u0E34\u0E01\u0E31\u0E14\u0E02\u0E2D\u0E07\u0E17\u0E48\u0E32\u0E19\u0E44\u0E21\u0E48\u0E15\u0E23\u0E07\u0E01\u0E31\u0E1A\u0E1E\u0E34\u0E01\u0E31\u0E14\u0E17\u0E35\u0E48\u0E01\u0E33\u0E2B\u0E19\u0E14");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "\u0E01\u0E23\u0E38\u0E13\u0E32\u0E1B\u0E34\u0E14/\u0E40\u0E1B\u0E34\u0E14 GPS");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "\u0E42\u0E1B\u0E23\u0E14\u0E25\u0E2D\u0E07\u0E43\u0E2B\u0E21\u0E48\u0E2D\u0E35\u0E01\u0E04\u0E23\u0E31\u0E49\u0E07 !");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "button", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CheckInoutPage_ion_footer_19_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r17.refresh(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Refresh");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
}
const _c2 = function (a0, a1) { return { in: a0, out: a1 }; };
function CheckInoutPage_ion_footer_20_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "ng-lottie", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h6", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("width", ctx_r3.lottiefiles.waiting.width)("height", ctx_r3.lottiefiles.waiting.height)("options", ctx_r3.lottiefiles.waiting.options);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](10, _c2, ctx_r3.result.type == "I", ctx_r3.result.type == "O"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx_r3.result.title, " !");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", ctx_r3.result.ship_no, " ", ctx_r3.result.ship_name, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", ctx_r3.result.counter_id, " ", ctx_r3.result.counter_name, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r3.result.time_stamp);
    }
}
function CheckInoutPage_ion_footer_21_Template(rf, ctx) {
    if (rf & 1) {
        const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "ng-lottie", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h6", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "p", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, " \u0E01\u0E33\u0E25\u0E31\u0E07\u0E01\u0E25\u0E31\u0E1A\u0E2A\u0E39\u0E48\u0E2B\u0E19\u0E49\u0E32\u0E41\u0E23\u0E01 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "countdown", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("event", function CheckInoutPage_ion_footer_21_Template_countdown_event_14_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r19.completedCountdown($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, " \u0E27\u0E34\u0E19\u0E32\u0E17\u0E35 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("width", ctx_r4.lottiefiles.completedData.width)("height", ctx_r4.lottiefiles.completedData.height)("options", ctx_r4.lottiefiles.completedData.options);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](11, _c2, ctx_r4.result.type == "I", ctx_r4.result.type == "O"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx_r4.result.title, " !");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", ctx_r4.result.ship_no, " ", ctx_r4.result.ship_name, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", ctx_r4.result.counter_id, " ", ctx_r4.result.counter_name, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r4.result.time_stamp);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("config", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](14, _c1, ctx_r4.countdownCompleted));
    }
}
let CheckInoutPage = /*@__PURE__*/ (() => {
    class CheckInoutPage {
        constructor(router, alertController, modalController, geolocation, locationAccuracy, checkInApi) {
            this.router = router;
            this.alertController = alertController;
            this.modalController = modalController;
            this.geolocation = geolocation;
            this.locationAccuracy = locationAccuracy;
            this.checkInApi = checkInApi;
            this.statusMap = 'LOADING';
            this.statusWorkspace = 'LOADING';
            this.locationsSelected = [];
            this.countdownExpire = 60;
            this.countdownCompleted = 3;
            this.currentLocation = '';
            this.lottiefiles = {
                loadData: {
                    options: { path: 'assets/lottiefiles/reload.json', loop: true },
                    width: '80px',
                    height: '80px',
                },
                completedData: {
                    options: { path: 'assets/lottiefiles/completed-2.json', loop: false },
                    width: '170px',
                    height: '170px',
                },
                loadingMap: {
                    options: { path: 'assets/lottiefiles/loading-map.json', loop: true },
                    width: '300px',
                    height: '300px',
                },
                warningMap: {
                    options: { path: 'assets/lottiefiles/warning-map.json', loop: false },
                    width: '150px',
                    height: '150px',
                },
                waiting: {
                    options: { path: 'assets/lottiefiles/waiting.json', loop: false },
                    width: '100px',
                    height: '100px',
                },
            };
            this.result = {
                type: '',
                title: '',
                ship_no: '',
                ship_name: '',
                counter_id: '',
                counter_name: '',
                time_stamp: ''
            };
        }
        ngOnInit() {
            this.initMap();
        }
        refreshMap() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                this.initMap();
            });
        }
        initMap() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                try {
                    this.myLocation = yield this.getMyLocation();
                    // alert( this.myLocation.latitude.toString())
                    this.currentLocation = this.myLocation.latitude.toString() + ' , ' + this.myLocation.longitude.toString();
                    //31-03-2022 this.showMap(this.myLocation);
                    this.workspaceLocation = yield this.getWorkLocation();
                    //31-03-2022 this.showMap(this.myLocation);
                    // for (const location of this.workspaceLocation) {
                    //    this.addMarker(location);
                    // }
                    //(this.workspaceLocation.length)
                    this.statusWorkspace = 'OK';
                }
                catch (error) {
                    if (error.name === 'MY_LOCATION' && error.message === 'NOT_FOUND') {
                        this.statusMap = 'NOT_FOUND';
                    }
                    this.statusWorkspace = 'NOT_FOUND';
                }
            });
        }
        getMyLocation() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                return new Promise((resolve, reject) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    try {
                        // console.log('this.locationAccuracy.canRequest()')
                        // alert('1')
                        // const canRequest = await this.locationAccuracy.canRequest();
                        // if(canRequest){
                        //   console.log('canRequest')
                        //   alert('2')
                        // the accuracy option will be ignored by iOS
                        //   await this.locationAccuracy.request(this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY)
                        //   alert('3')
                        console.log('call getCurrentPosition');
                        const resp = yield this.geolocation.getCurrentPosition({ enableHighAccuracy: true });
                        resolve({
                            title: 'My Location',
                            latitude: resp.coords.latitude,
                            longitude: resp.coords.longitude,
                            icon: { url: 'assets/images/check-inout/my-marker.svg', scaledSize: new google.maps.Size(52, 52) },
                        });
                        //}
                    }
                    catch (error) {
                        alert('err');
                        console.log(error);
                        reject({ name: 'MY_LOCATION', message: 'NOT_FOUND' });
                    }
                }));
            });
        }
        getWorkLocation() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                return new Promise((resolve, reject) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    const response = yield this.checkInApi.getLocationNearMe(this.myLocation.latitude.toString(), this.myLocation.longitude.toString());
                    let datas = [];
                    response.datas.forEach(data => {
                        datas.push({
                            title: data.location_name,
                            subTitle: data.custid + ' ' + data.location_name,
                            brandName: data.brand_name,
                            latitude: data.lat,
                            longitude: data.lng,
                            storeId: data.storeid,
                            branchId: data.branchid,
                            counterId: data.counterid,
                            custId: data.custid,
                            icon: { url: 'assets/images/check-inout/work-marker.svg', scaledSize: new google.maps.Size(52, 52) }
                        });
                    });
                    console.log(datas);
                    if (datas.length > 0) {
                        resolve(datas);
                    }
                    else {
                        reject({ name: 'MY_LOCATION', message: 'NOT_FOUND' });
                    }
                    // return;
                    /*
                       setTimeout(() => {
                         resolve({
                           title: 'ICC Location',
                           latitude: 13.686192,
                           longitude: 100.526157,
                           icon: { url: 'assets/images/check-inout/work-marker.svg', scaledSize: new google.maps.Size(52, 52) },
                         });
                 
                         // reject({ name: 'WORKSPACE_LOCATION', message: 'NOT_FOUND' });
                       }, 1500);*/
                }));
            });
        }
        showMap(location) {
            const position = new google.maps.LatLng(location.latitude, location.longitude);
            const options = { center: position, zoom: 17, disableDefaultUI: true };
            this.map = new google.maps.Map(this.mapRef.nativeElement, options);
            this.addMarker(location);
        }
        addMarker(location) {
            const { title, latitude, longitude, icon } = location;
            const position = new google.maps.LatLng(latitude, longitude);
            const animation = google.maps.Animation.BOUNCE;
            const mapMarker = new google.maps.Marker(Object.assign(Object.assign({}, location), { position, animation }));
            mapMarker.setMap(this.map);
            console.log('add', latitude + ' , ' + longitude);
        }
        refresh() {
            this.statusMap = 'LOADING';
            this.statusWorkspace = 'LOADING';
            this.initMap();
        }
        submitCheck(type) {
            if (type === 'IN') {
                this.statusWorkspace = 'LOADING';
                setTimeout(() => {
                    this.statusWorkspace = 'COMPLETED';
                }, 1000);
            }
            if (type === 'OUT') {
                this.statusWorkspace = 'COMPLETED';
            }
        }
        expireCountdown(event) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (event.action === 'done') {
                    const header = 'Expiration Time';
                    const message = 'หมดเวลา กรุณาลองใหม่อีกครั้ง';
                    const cssClass = 'alert__box--basic';
                    const buttons = [
                        {
                            text: 'ตกลง',
                            handler: () => {
                                this.router.navigate(['/home']);
                            },
                        },
                    ];
                    const alert = yield this.alertController.create({ header, message, cssClass, buttons });
                    yield alert.present();
                    const dismiss = yield alert.onDidDismiss();
                    if (dismiss.role === 'backdrop') {
                        this.router.navigate(['/home']);
                    }
                }
            });
        }
        completedCountdown(event) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (event.action === 'done') {
                    this.router.navigate(['/home']);
                }
            });
        }
        alertModeCheckInOut(location) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                // const modal = await this.modalController.create({
                //   component: AlertCheckInoutComponent,
                //   cssClass: 'my-custom-class'
                // });
                // return await modal.present();
                let alert = yield this.alertController.create({
                    header: 'Check In / Out',
                    message: location.subTitle + '<br>' + location.brandName,
                    buttons: [
                        {
                            text: 'Check In',
                            cssClass: 'alert__button--success2',
                            handler: () => {
                                console.log('Check In');
                                this.checkInOut({
                                    storeid: location.storeId,
                                    branchid: location.branchId,
                                    counterid: location.counterId,
                                    custid: location.custId,
                                    custname: location.subTitle.replace(location.custId, ''),
                                    countername: location.brandName,
                                    lat: location.latitude,
                                    lng: location.longitude,
                                    type: 'I'
                                });
                            }
                        },
                        {
                            text: 'Check Out',
                            cssClass: 'alert__button--danger2',
                            handler: () => {
                                console.log('Check Out ', location);
                                this.checkInOut({
                                    storeid: location.storeId,
                                    branchid: location.branchId,
                                    counterid: location.counterId,
                                    custid: location.custId,
                                    custname: location.subTitle.replace(location.custId, ''),
                                    countername: location.brandName,
                                    lat: location.latitude,
                                    lng: location.longitude,
                                    type: 'O'
                                });
                            }
                        },
                    ]
                });
                yield alert.present();
            });
        }
        checkInOut(param) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                try {
                    console.log(param);
                    this.statusWorkspace = 'LOADING';
                    const res = yield this.checkInApi.postCheckInOut(param.storeid, param.branchid, param.counterid, param.custid, param.lat, param.lng, param.type);
                    console.log('param', param);
                    this.result = {
                        type: param.type,
                        title: (param.type == 'I') ? 'ลงทะเบียนเข้าเรียบร้อย' : 'ลงทะเบียนออกเรียบร้อย',
                        ship_no: res.data.shop.id,
                        ship_name: param.custname,
                        counter_id: res.data.counter.id,
                        counter_name: param.countername,
                        time_stamp: res.data.time_stamp
                    };
                    setTimeout(() => {
                        this.statusWorkspace = 'COMPLETED';
                    }, 200);
                }
                catch (error) {
                    console.log(error);
                }
            });
        }
        checkEventAll($event) {
            console.log($event.target.checked);
            this.autoCheck = true;
            if ($event.target.checked) {
                this.locationsSelected = [];
                this.workspaceLocation.forEach(location => {
                    this.locationsSelected.push(Object.assign(Object.assign({}, location), { isCheck: true, all: 'Y' }));
                });
            }
            else {
                this.locationsSelected = [];
            }
            console.log('this.locationsSelected', this.locationsSelected);
            setTimeout(() => {
                this.autoCheck = false;
            }, 1000);
        }
        isCheck(location) {
            const index = this.locationsSelected.findIndex((p) => (p.custId === location.custId && p.counterId === location.counterId));
            return index;
        }
        checkEvent(location, $event) {
            console.log($event);
            if (this.autoCheck === true) {
                return;
            }
            const index = this.locationsSelected.findIndex((p) => (p.custId === location.custId && p.counterId === location.counterId));
            if (index < 0) {
                this.locationsSelected.push(Object.assign(Object.assign({}, location), { isCheck: true }));
                location.isCheck = true;
            }
            else {
                this.locationsSelected[index].isCheck = !this.locationsSelected[index].isCheck;
            }
            const locations = this.locationsSelected.filter((p) => p.isCheck);
            this.locationsSelected = locations;
            console.log(this.locationsSelected);
        }
        alertModeAction() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                let message = '';
                if (this.locationsSelected.length == 1) {
                    message = this.locationsSelected[0].subTitle + '<br>' + this.locationsSelected[0].brandName;
                }
                else {
                    message = 'จำนวน ' + this.locationsSelected.length + ' เค้าเตอร์';
                }
                let alert = yield this.alertController.create({
                    header: 'Check In / Out',
                    message: message,
                    buttons: [
                        {
                            text: 'Check In',
                            cssClass: 'alert__button--success2',
                            handler: () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                                console.log('Check In ', this.locationsSelected);
                                yield this.checkInOutLocations('I', this.locationsSelected);
                            })
                        },
                        {
                            text: 'Check Out',
                            cssClass: 'alert__button--danger2',
                            handler: () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                                console.log('Check Out ', this.locationsSelected);
                                yield this.checkInOutLocations('O', this.locationsSelected);
                            })
                        },
                    ]
                });
                yield alert.present();
            });
        }
        delayfunction() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        return resolve({});
                    }, 100);
                });
            });
        }
        checkInOutLocations(type, locationsSelected) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                try {
                    console.log(locationsSelected);
                    this.statusWorkspace = 'LOADING';
                    console.log('xxxxxxxxxxxxxxxxxxxxxxxxx');
                    let i = 0;
                    for (let location of locationsSelected) {
                        if (type === 'I') {
                            console.log('Check In ', location);
                        }
                        else {
                            console.log('Check Out ', location);
                        }
                        i++;
                        console.log('i=', i);
                        const param = {
                            storeid: location.storeId,
                            branchid: location.branchId,
                            counterid: location.counterId,
                            custid: location.custId,
                            custname: location.subTitle.replace(location.custId, ''),
                            countername: location.brandName,
                            lat: location.latitude,
                            lng: location.longitude,
                            type: type
                        };
                        console.log('param', param);
                        const res = yield this.checkInApi.postCheckInOut(param.storeid, param.branchid, param.counterid, param.custid, param.lat, param.lng, param.type);
                        this.result = {
                            type: param.type,
                            title: (param.type == 'I') ? 'ลงทะเบียนเข้า...' : 'ลงทะเบียนออก...',
                            ship_no: param.custid,
                            ship_name: param.custname,
                            counter_id: param.counterid,
                            counter_name: param.countername,
                            time_stamp: moment__WEBPACK_IMPORTED_MODULE_1__().format('YYYY-MM-DD HH:mm:ss') //res.data.time_stamp
                        };
                        this.statusWorkspace = 'POSTING';
                        yield this.delayfunction();
                    } // for
                    setTimeout(() => {
                        console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaa');
                        this.statusWorkspace = 'COMPLETED';
                    }, 1000);
                }
                catch (error) {
                    console.log(error);
                }
            });
        }
    }
    CheckInoutPage.ɵfac = function CheckInoutPage_Factory(t) { return new (t || CheckInoutPage)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_5__["Geolocation"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ionic_native_location_accuracy_ngx__WEBPACK_IMPORTED_MODULE_6__["LocationAccuracy"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_api_check_inout_check_inout_service__WEBPACK_IMPORTED_MODULE_7__["CheckInoutService"])); };
    CheckInoutPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CheckInoutPage, selectors: [["app-check-inout"]], viewQuery: function CheckInoutPage_Query(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 1, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]);
            }
            if (rf & 2) {
                let _t;
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.mapRef = _t.first);
            }
        }, decls: 22, vars: 6, consts: [[1, "ion-no-border"], ["slot", "start"], ["slot", "end"], [3, "click"], ["slot", "icon-only", "name", "refresh", "color", "dark"], ["fullscreen", "true"], [1, "section__location"], [1, "section__location_current_latlong"], ["size", "4"], ["size", "8"], ["class", "ion-no-border", 4, "ngIf"], [1, "section__content"], [1, "section__timeout"], [1, "section__timeout--check"], ["color", "dark", "slot", "start", 2, "margin-top", "11px", 3, "ionChange"], [2, "margin-top", "-0px"], [1, "section__timeout--text"], [4, "ngIf"], [3, "config", "event"], [1, "section__timeout--button"], [1, "btn", "btn-primary", 2, "padding", "15px", "height", "55px", 3, "disabled", "click"], ["class", "section__info", 4, "ngFor", "ngForOf"], [1, "section__info"], [1, "section__info--check"], ["color", "dark", "slot", "start", 3, "checked", "ionChange"], [1, "section__info--imageText", 3, "click"], [1, "img-text"], [1, "section__info--text", 3, "click"], [1, "section__loading"], [3, "width", "height", "options"], [1, "section__notfound"], [1, "btn-refresh", 3, "click"], [1, "section__completed"], [2, "margin-top", "15px", 3, "ngClass"], [2, "margin-top", "-15px", 3, "ngClass"], [1, "countdown"]], template: function CheckInoutPage_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-header", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-toolbar");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "ion-buttons", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "ion-back-button");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "ion-title");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "\u0E25\u0E07\u0E0A\u0E37\u0E48\u0E2D\u0E40\u0E02\u0E49\u0E32/\u0E2D\u0E2D\u0E01\u0E07\u0E32\u0E19");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "ion-buttons", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "ion-button", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CheckInoutPage_Template_ion_button_click_7_listener() { return ctx.refreshMap(); });
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "ion-icon", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "ion-content", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "ion-row");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "ion-col", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, " Current location ");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "ion-col", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, CheckInoutPage_ion_footer_17_Template, 18, 6, "ion-footer", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, CheckInoutPage_ion_footer_18_Template, 3, 3, "ion-footer", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, CheckInoutPage_ion_footer_19_Template, 10, 0, "ion-footer", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, CheckInoutPage_ion_footer_20_Template, 11, 13, "ion-footer", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](21, CheckInoutPage_ion_footer_21_Template, 16, 16, "ion-footer", 10);
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](16);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.currentLocation, " ");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.statusWorkspace === "OK");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.statusWorkspace === "LOADING");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.statusWorkspace === "NOT_FOUND");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.statusWorkspace === "POSTING");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.statusWorkspace === "COMPLETED");
            }
        }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCol"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonFooter"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCheckbox"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["BooleanValueAccessor"], ngx_countdown__WEBPACK_IMPORTED_MODULE_9__["CountdownComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], ngx_lottie__WEBPACK_IMPORTED_MODULE_10__["LottieComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"]], styles: ["ion-content[_ngcontent-%COMP%]   .section__location[_ngcontent-%COMP%] {\n  position: relative;\n  height: 110%;\n  margin: 3px;\n  margin-top: 0;\n  border-radius: 8px;\n}\nion-content[_ngcontent-%COMP%]   .section__location[_ngcontent-%COMP%]   .section__location_current_latlong[_ngcontent-%COMP%] {\n  text-align: center;\n}\nion-content[_ngcontent-%COMP%]   .section__location[_ngcontent-%COMP%]   .section__location--map[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 8px;\n  box-shadow: 0px 8px 25px -10px rgba(0, 0, 0, 0.25);\n}\nion-content[_ngcontent-%COMP%]   .section__location[_ngcontent-%COMP%]   .section__location--map[_ngcontent-%COMP%]   #map[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 8px;\n}\nion-content[_ngcontent-%COMP%]   .section__location[_ngcontent-%COMP%]   .section__location--map[_ngcontent-%COMP%]   .section__location--content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\nion-content[_ngcontent-%COMP%]   .section__location[_ngcontent-%COMP%]   .section__location--map[_ngcontent-%COMP%]   .section__location--content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  font-weight: 500;\n  text-align: center;\n  margin: 6px 0;\n}\nion-content[_ngcontent-%COMP%]   .section__location[_ngcontent-%COMP%]   .section__location--map[_ngcontent-%COMP%]   .section__location--content[_ngcontent-%COMP%]   p.sub[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  font-weight: 400;\n}\nion-footer[_ngcontent-%COMP%]   .section__info--image[_ngcontent-%COMP%] {\n  flex-basis: 35%;\n  display: flex;\n  justify-content: center;\n}\nion-footer[_ngcontent-%COMP%]   .section__info--image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 84px;\n  height: 84px;\n  object-fit: cover;\n  box-shadow: 0px 8px 25px -10px rgba(0, 0, 0, 0.25);\n  border-radius: 50%;\n}\nion-footer[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 35px 35px 0 0;\n  padding: 15px;\n  min-height: 80%;\n  max-height: 80%;\n  overflow-y: scroll;\n}\nion-footer[_ngcontent-%COMP%]   .section__content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: auto;\n}\nion-footer[_ngcontent-%COMP%]   .section__content[_ngcontent-%COMP%]   .section__info[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  margin-bottom: 25px;\n}\nion-footer[_ngcontent-%COMP%]   .section__content[_ngcontent-%COMP%]   .section__info[_ngcontent-%COMP%]   .section__info--image[_ngcontent-%COMP%] {\n  flex-basis: 35%;\n  display: flex;\n  justify-content: center;\n}\nion-footer[_ngcontent-%COMP%]   .section__content[_ngcontent-%COMP%]   .section__info[_ngcontent-%COMP%]   .section__info--image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 84px;\n  height: 84px;\n  object-fit: cover;\n  box-shadow: 0px 8px 25px -10px rgba(0, 0, 0, 0.25);\n  border-radius: 50%;\n}\nion-footer[_ngcontent-%COMP%]   .section__content[_ngcontent-%COMP%]   .section__info[_ngcontent-%COMP%]   .section__info--check[_ngcontent-%COMP%] {\n  flex-basis: 10%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\nion-footer[_ngcontent-%COMP%]   .section__content[_ngcontent-%COMP%]   .section__info[_ngcontent-%COMP%]   .section__info--check[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  margin: 0;\n}\nion-footer[_ngcontent-%COMP%]   .section__content[_ngcontent-%COMP%]   .section__info[_ngcontent-%COMP%]   .section__info--imageText[_ngcontent-%COMP%] {\n  flex-basis: 30%;\n  display: flex;\n  justify-content: center;\n}\nion-footer[_ngcontent-%COMP%]   .section__content[_ngcontent-%COMP%]   .section__info[_ngcontent-%COMP%]   .section__info--imageText[_ngcontent-%COMP%]   .img-text[_ngcontent-%COMP%] {\n  padding: 5px;\n  width: 84px;\n  height: 84px;\n  color: #ffffff;\n  background: #e70664;\n  border-radius: 50%;\n  display: flex;\n  flex-direction: center;\n  justify-content: center;\n  align-items: center;\n}\nion-footer[_ngcontent-%COMP%]   .section__content[_ngcontent-%COMP%]   .section__info[_ngcontent-%COMP%]   .section__info--imageText[_ngcontent-%COMP%]   .img-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-align: center;\n}\nion-footer[_ngcontent-%COMP%]   .section__content[_ngcontent-%COMP%]   .section__info[_ngcontent-%COMP%]   .section__info--text[_ngcontent-%COMP%] {\n  flex-basis: 60%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\nion-footer[_ngcontent-%COMP%]   .section__content[_ngcontent-%COMP%]   .section__info[_ngcontent-%COMP%]   .section__info--text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  margin: 0;\n  color: #252525;\n}\nion-footer[_ngcontent-%COMP%]   .section__content[_ngcontent-%COMP%]   .section__event[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: space-around;\n}\nion-footer[_ngcontent-%COMP%]   .section__content[_ngcontent-%COMP%]   .section__event[_ngcontent-%COMP%]   .btn-action[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  font-weight: 500;\n  text-transform: uppercase;\n  border: none;\n  border-radius: 25px;\n  padding: 18px;\n  margin: 10px auto;\n  width: auto;\n  min-width: 180px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\nion-footer[_ngcontent-%COMP%]   .section__content[_ngcontent-%COMP%]   .section__event[_ngcontent-%COMP%]   .btn-action.in[_ngcontent-%COMP%] {\n  color: #ffffff;\n  background: #1882fc;\n}\nion-footer[_ngcontent-%COMP%]   .section__content[_ngcontent-%COMP%]   .section__event[_ngcontent-%COMP%]   .btn-action.in[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 16px;\n  margin-right: 8px;\n}\nion-footer[_ngcontent-%COMP%]   .section__content[_ngcontent-%COMP%]   .section__event[_ngcontent-%COMP%]   .btn-action.out[_ngcontent-%COMP%] {\n  color: #ffffff;\n  background: #fd1b66;\n}\nion-footer[_ngcontent-%COMP%]   .section__content[_ngcontent-%COMP%]   .section__event[_ngcontent-%COMP%]   .btn-action.out[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 16px;\n  margin-left: 8px;\n}\nion-footer[_ngcontent-%COMP%]   .section__content[_ngcontent-%COMP%]   .section__timeout[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  \n}\nion-footer[_ngcontent-%COMP%]   .section__content[_ngcontent-%COMP%]   .section__timeout[_ngcontent-%COMP%]   .section__info--check[_ngcontent-%COMP%] {\n  flex-basis: 10%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\nion-footer[_ngcontent-%COMP%]   .section__content[_ngcontent-%COMP%]   .section__timeout[_ngcontent-%COMP%]   .section__info--check[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  margin: 0;\n}\nion-footer[_ngcontent-%COMP%]   .section__content[_ngcontent-%COMP%]   .section__timeout[_ngcontent-%COMP%]   .section__timeout--text[_ngcontent-%COMP%] {\n  flex-basis: 50%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\nion-footer[_ngcontent-%COMP%]   .section__content[_ngcontent-%COMP%]   .section__timeout[_ngcontent-%COMP%]   .section__timeout--text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #4b4b4b;\n  font-size: 0.9rem;\n  font-weight: 500;\n  text-align: center;\n}\nion-footer[_ngcontent-%COMP%]   .section__content[_ngcontent-%COMP%]   .section__timeout[_ngcontent-%COMP%]   .section__timeout--button[_ngcontent-%COMP%] {\n  flex-basis: 40%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\nion-footer[_ngcontent-%COMP%]   .section__loading[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n}\nion-footer[_ngcontent-%COMP%]   .section__notfound[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n}\nion-footer[_ngcontent-%COMP%]   .section__notfound[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  margin: 3px;\n  color: #202020;\n}\nion-footer[_ngcontent-%COMP%]   .section__notfound[_ngcontent-%COMP%]   .btn-refresh[_ngcontent-%COMP%] {\n  color: #ffffff;\n  background: #4d4d4d;\n  font-size: 0.9rem;\n  font-weight: 500;\n  border: none;\n  border-radius: 25px;\n  padding: 18px;\n  margin: 20px auto;\n  width: auto;\n  min-width: 180px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\nion-footer[_ngcontent-%COMP%]   .section__notfound[_ngcontent-%COMP%]   .btn-refresh[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 16px;\n  margin-left: 8px;\n}\nion-footer[_ngcontent-%COMP%]   .section__completed[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n}\nion-footer[_ngcontent-%COMP%]   .section__completed[_ngcontent-%COMP%]   .in[_ngcontent-%COMP%] {\n  color: #149e01 !important;\n}\nion-footer[_ngcontent-%COMP%]   .section__completed[_ngcontent-%COMP%]   .out[_ngcontent-%COMP%] {\n  color: #ec1919;\n}\nion-footer[_ngcontent-%COMP%]   .section__completed[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  font-weight: 500;\n  margin: 5px auto;\n}\nion-footer[_ngcontent-%COMP%]   .section__completed[_ngcontent-%COMP%]   p.message[_ngcontent-%COMP%] {\n  color: #111111;\n}\nion-footer[_ngcontent-%COMP%]   .section__completed[_ngcontent-%COMP%]   p.countdown[_ngcontent-%COMP%] {\n  color: #fc185c;\n}"] });
    return CheckInoutPage;
})();


/***/ })

}]);