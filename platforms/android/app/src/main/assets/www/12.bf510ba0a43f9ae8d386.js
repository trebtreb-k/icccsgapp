(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

/***/ "LMMZ":
/*!***************************************************************************!*\
  !*** ./src/app/pages/scan-check-inout/scan-check-inout-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: ScanCheckInoutPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScanCheckInoutPageRoutingModule", function() { return ScanCheckInoutPageRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _scan_check_inout_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scan-check-inout.page */ "qRfr");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    {
        path: '',
        component: _scan_check_inout_page__WEBPACK_IMPORTED_MODULE_1__["ScanCheckInoutPage"]
    }
];
let ScanCheckInoutPageRoutingModule = /*@__PURE__*/ (() => {
    class ScanCheckInoutPageRoutingModule {
    }
    ScanCheckInoutPageRoutingModule.ɵfac = function ScanCheckInoutPageRoutingModule_Factory(t) { return new (t || ScanCheckInoutPageRoutingModule)(); };
    ScanCheckInoutPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: ScanCheckInoutPageRoutingModule });
    ScanCheckInoutPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
    return ScanCheckInoutPageRoutingModule;
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ScanCheckInoutPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "f2eG":
/*!***************************************************************************!*\
  !*** ./src/app/services/api/scan-check-inout/scan-check-inout.service.ts ***!
  \***************************************************************************/
/*! exports provided: ScanCheckInoutService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScanCheckInoutService", function() { return ScanCheckInoutService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _api_root__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../api.root */ "ntc2");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _storage_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../storage/storage.service */ "E2f4");






let ScanCheckInoutService = /*@__PURE__*/ (() => {
    class ScanCheckInoutService {
        constructor(http, storage) {
            this.http = http;
            this.storage = storage;
        }
        postCheckInOut(qrcode, lat, lng, type) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                const body = { qrcode, lat, lng, type };
                const token = yield this.storage.get('USER_TOKEN');
                const url = `${_api_root__WEBPACK_IMPORTED_MODULE_2__["ST_ROOT"].checkin}/salestools/checkin/scan_checkinout`;
                let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
                headers = headers.set('Authorization', `Bearer ${token}`);
                return this.http.post(url, body, { headers }).toPromise();
            });
        }
    }
    ScanCheckInoutService.ɵfac = function ScanCheckInoutService_Factory(t) { return new (t || ScanCheckInoutService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_storage_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"])); };
    ScanCheckInoutService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: ScanCheckInoutService, factory: ScanCheckInoutService.ɵfac, providedIn: 'root' });
    return ScanCheckInoutService;
})();


/***/ }),

/***/ "gDYx":
/*!*******************************************************************!*\
  !*** ./src/app/pages/scan-check-inout/scan-check-inout.module.ts ***!
  \*******************************************************************/
/*! exports provided: ScanCheckInoutPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScanCheckInoutPageModule", function() { return ScanCheckInoutPageModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_countdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-countdown */ "z+xu");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var ngx_lottie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-lottie */ "DPnb");
/* harmony import */ var _scan_check_inout_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scan-check-inout.page */ "qRfr");
/* harmony import */ var _scan_check_inout_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./scan-check-inout-routing.module */ "LMMZ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");








let ScanCheckInoutPageModule = /*@__PURE__*/ (() => {
    class ScanCheckInoutPageModule {
    }
    ScanCheckInoutPageModule.ɵfac = function ScanCheckInoutPageModule_Factory(t) { return new (t || ScanCheckInoutPageModule)(); };
    ScanCheckInoutPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: ScanCheckInoutPageModule });
    ScanCheckInoutPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _scan_check_inout_routing_module__WEBPACK_IMPORTED_MODULE_6__["ScanCheckInoutPageRoutingModule"], ngx_countdown__WEBPACK_IMPORTED_MODULE_1__["CountdownModule"], ngx_lottie__WEBPACK_IMPORTED_MODULE_4__["LottieModule"]]] });
    return ScanCheckInoutPageModule;
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](ScanCheckInoutPageModule, { declarations: [_scan_check_inout_page__WEBPACK_IMPORTED_MODULE_5__["ScanCheckInoutPage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _scan_check_inout_routing_module__WEBPACK_IMPORTED_MODULE_6__["ScanCheckInoutPageRoutingModule"], ngx_countdown__WEBPACK_IMPORTED_MODULE_1__["CountdownModule"], ngx_lottie__WEBPACK_IMPORTED_MODULE_4__["LottieModule"]] }); })();


/***/ }),

/***/ "qRfr":
/*!*****************************************************************!*\
  !*** ./src/app/pages/scan-check-inout/scan-check-inout.page.ts ***!
  \*****************************************************************/
/*! exports provided: ScanCheckInoutPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScanCheckInoutPage", function() { return ScanCheckInoutPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/barcode-scanner/ngx */ "WdVq");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "Bfh1");
/* harmony import */ var _services_api_scan_check_inout_scan_check_inout_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../services/api/scan-check-inout/scan-check-inout.service */ "f2eG");
/* harmony import */ var _services_storage_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../services/storage/storage.service */ "E2f4");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ngx_lottie__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-lottie */ "DPnb");
/* harmony import */ var ngx_countdown__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-countdown */ "z+xu");












const _c0 = function (a1, a2) { return { "menus__container__item--logo": true, in: a1, out: a2 }; };
function ScanCheckInoutPage_section_7_div_7_Template(rf, ctx) {
    if (rf & 1) {
        const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ScanCheckInoutPage_section_7_div_7_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const menu_r8 = ctx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r9.checkInOut(menu_r8.type); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const menu_r8 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](3, _c0, menu_r8.type == "I", menu_r8.type == "O"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", menu_r8.logo, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](menu_r8.title);
    }
}
function ScanCheckInoutPage_section_7_div_8_button_6_Template(rf, ctx) {
    if (rf & 1) {
        const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ScanCheckInoutPage_section_7_div_8_button_6_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r13.checkInOutManual("I"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\u0E22\u0E37\u0E19\u0E22\u0E31\u0E19");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
}
function ScanCheckInoutPage_section_7_div_8_button_7_Template(rf, ctx) {
    if (rf & 1) {
        const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ScanCheckInoutPage_section_7_div_8_button_7_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r15.checkInOutManual("O"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\u0E22\u0E37\u0E19\u0E22\u0E31\u0E19");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
}
function ScanCheckInoutPage_section_7_div_8_Template(rf, ctx) {
    if (rf & 1) {
        const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-content", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Enter QR Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ScanCheckInoutPage_section_7_div_8_Template_ion_input_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r17.qrcode_text = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, ScanCheckInoutPage_section_7_div_8_button_6_Template, 2, 0, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, ScanCheckInoutPage_section_7_div_8_button_7_Template, 2, 0, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r7.qrcode_text);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r7.key_manual_type == "I");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r7.key_manual_type == "O");
    }
}
function ScanCheckInoutPage_section_7_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\u0E40\u0E21\u0E19\u0E39");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, ScanCheckInoutPage_section_7_div_7_Template, 6, 6, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, ScanCheckInoutPage_section_7_div_8_Template, 8, 3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.menus);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.key_manual == true && ctx_r0.key_manual_type !== "");
    }
}
function ScanCheckInoutPage_section_8_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "ng-lottie", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("width", ctx_r1.lottiefiles.loading.width)("height", ctx_r1.lottiefiles.loading.height)("options", ctx_r1.lottiefiles.loading.options);
    }
}
const _c1 = function (a0, a1) { return { in: a0, out: a1 }; };
function ScanCheckInoutPage_section_9_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "ng-lottie", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h1", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("width", ctx_r2.lottiefiles.completed.width)("height", ctx_r2.lottiefiles.completed.height)("options", ctx_r2.lottiefiles.completed.options);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](10, _c1, ctx_r2.result.type == "I", ctx_r2.result.type == "O"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx_r2.result.title, " !");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", ctx_r2.result.ship_no, " ", ctx_r2.result.ship_name, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", ctx_r2.result.counter_id, " ", ctx_r2.result.counter_name, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.result.time_stamp);
    }
}
const _c2 = function () { return { out: true }; };
function ScanCheckInoutPage_section_10_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "ng-lottie", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h1", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\u0E25\u0E07\u0E0A\u0E37\u0E48\u0E2D\u0E44\u0E21\u0E48\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08 !!!");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\u0E42\u0E1B\u0E23\u0E14\u0E25\u0E2D\u0E07\u0E43\u0E2B\u0E21\u0E48\u0E2D\u0E35\u0E01\u0E04\u0E23\u0E31\u0E49\u0E07");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("width", ctx_r3.lottiefiles.warning.width)("height", ctx_r3.lottiefiles.warning.height)("options", ctx_r3.lottiefiles.warning.options);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](4, _c2));
    }
}
const _c3 = function (a0) { return { leftTime: a0, format: "s" }; };
function ScanCheckInoutPage_ion_footer_11_Template(rf, ctx) {
    if (rf & 1) {
        const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " \u0E01\u0E33\u0E25\u0E31\u0E07\u0E01\u0E25\u0E31\u0E1A\u0E2A\u0E39\u0E48\u0E2B\u0E19\u0E49\u0E32\u0E41\u0E23\u0E01 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "countdown", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("event", function ScanCheckInoutPage_ion_footer_11_Template_countdown_event_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r19.completedCountdown($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " \u0E27\u0E34\u0E19\u0E32\u0E17\u0E35 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("config", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](1, _c3, ctx_r4.countdownCompleted));
    }
}
function ScanCheckInoutPage_ion_footer_12_Template(rf, ctx) {
    if (rf & 1) {
        const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-toggle", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ScanCheckInoutPage_ion_footer_12_Template_ion_toggle_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r21.key_manual = $event; })("ionChange", function ScanCheckInoutPage_ion_footer_12_Template_ion_toggle_ionChange_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r22); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r23.updateScanModeConfig(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Mode : ", ctx_r5.key_manual_title, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r5.key_manual);
    }
}
let ScanCheckInoutPage = /*@__PURE__*/ (() => {
    class ScanCheckInoutPage {
        constructor(router, barcodeScanner, geolocation, scanApi, storage) {
            this.router = router;
            this.barcodeScanner = barcodeScanner;
            this.geolocation = geolocation;
            this.scanApi = scanApi;
            this.storage = storage;
            this.status = 'BEGIN';
            this.key_manual = false;
            this.key_manual_title = '';
            this.key_manual_type = '';
            this.qrcode_text = '';
            this.countdownCompleted = 5;
            this.result = {
                type: '',
                title: '',
                ship_no: '',
                ship_name: '',
                counter_id: '',
                counter_name: '',
                time_stamp: ''
            };
            this.lottiefiles = {
                loading: {
                    options: { path: 'assets/lottiefiles/reload.json', loop: true },
                    width: '80px',
                    height: '80px',
                },
                completed: {
                    options: { path: 'assets/lottiefiles/completed.json', loop: false },
                    width: '250px',
                    height: '250px',
                },
                warning: {
                    options: { path: 'assets/lottiefiles/warning-map.json', loop: false },
                    width: '150px',
                    height: '150px',
                },
            };
            this.menus = [
                {
                    title: 'สแกนเข้า',
                    logo: 'assets/images/check-inout/in.svg',
                    type: 'I'
                },
                {
                    title: 'สแกนเออก',
                    logo: 'assets/images/check-inout/out.svg',
                    type: 'O'
                },
            ];
        }
        ngOnInit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                // try {
                //   const status: QRScannerStatus = await this.qrScanner.prepare();
                //   if (status.authorized) {
                //     const scanSub = this.qrScanner.scan().subscribe((text: string) => {
                //       this.qrScanner.hide();
                //       scanSub.unsubscribe();
                //     });
                //   }
                // } catch (error) {
                //   console.log(error);
                // }
                // setTimeout(() => {
                //   this.status = 'COMPLETED';
                // }, 2500);
                this.key_manual = yield this.storage.get('SCAN_CHECKIN_KEY_MANUAL');
                this.key_manual_title = (this.key_manual == true) ? 'Key' : 'Scan';
                //alert(this.key_manual_type)
            });
        }
        completedCountdown(event) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (event.action === 'done') {
                    this.router.navigate(['/home']);
                }
            });
        }
        getMyLocation() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                return new Promise((resolve, reject) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    try {
                        const resp = yield this.geolocation.getCurrentPosition();
                        resolve({
                            title: 'My Location',
                            latitude: resp.coords.latitude,
                            longitude: resp.coords.longitude,
                            icon: { url: 'assets/images/check-inout/my-marker.svg', scaledSize: new google.maps.Size(52, 52) },
                        });
                    }
                    catch (error) {
                        console.log(error);
                        reject({ name: 'MY_LOCATION', message: 'NOT_FOUND' });
                    }
                }));
            });
        }
        checkInOut(type) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                //this.key_manual  = false;
                this.qrcode_text = '';
                if (this.key_manual == true) {
                    this.key_manual_type = type;
                    return;
                }
                let latitude = '';
                let longitude = '';
                try {
                    this.myLocation = yield this.getMyLocation();
                    latitude = this.myLocation.latitude.toString();
                    longitude = this.myLocation.longitude.toString();
                }
                catch (error) {
                    latitude = 'XX';
                    longitude = 'XXX';
                }
                console.log(type);
                console.log(latitude + ' ' + longitude);
                //alert(latitude+' '+longitude)
                try {
                    const resScanner = yield this.barcodeScanner.scan();
                    //   const res = await this.scanApi.postCheckInOut(resScanner.text, this.myLocation.latitude.toString(), this.myLocation.longitude.toString(),  type);
                    const res = yield this.scanApi.postCheckInOut(resScanner.text, latitude, longitude, type);
                    this.result = {
                        type: type,
                        title: (type == 'I') ? 'ลงทะเบียนเข้าเรียบร้อย' : 'ลงทะเบียนออกเรียบร้อย',
                        ship_no: res.data.shop.id,
                        ship_name: res.data.shop.name,
                        counter_id: res.data.counter.id,
                        counter_name: res.data.counter.name,
                        time_stamp: res.data.time_stamp
                    };
                    setTimeout(() => {
                        this.status = 'COMPLETED';
                    }, 200);
                    /*
                    const status: QRScannerStatus = await this.qrScanner.prepare();
                    if (status.authorized) {
                      const scanSub = this.qrScanner.scan().subscribe(async (text: string) => {
                        this.qrScanner.hide();
                        scanSub.unsubscribe();
              
                        const res = await this.scanApi.postCheckInOut(text, this.myLocation.latitude.toString(), this.myLocation.longitude.toString(),  type);
              
                        this.result = {
                          type         : type,
                          title        : (type=='I')?'ลงทะเบียนเข้าเรียบร้อย' : 'ลงทะเบียนออกเรียบร้อย',
                          ship_no      : res.data.shop.id,
                          ship_name    : res.data.shop.name,
                          counter_id   : res.data.counter.id,
                          counter_name : res.data.counter.name,
                          time_stamp   : res.data.time_stamp
                        }
              
                        setTimeout(() => {
                          this.status = 'COMPLETED';
                        }, 200);
              
              
                      });
                    }
                      */
                }
                catch (error) {
                    console.log(error);
                    // alert(error)
                    this.key_manual_type = type;
                    this.key_manual = true;
                }
                /*
                try {
                  const res = await  this.scanApi.postCheckInOut( 'QKZJTLW67T', this.myLocation.latitude.toString(), this.myLocation.longitude.toString(),  type);
            
                  console.log('res',res)
                  this.result = {
                    type         : type,
                    title        : (type=='I')?'ลงทะเบียนเข้าเรียบร้อย' : 'ลงทะเบียนออกเรียบร้อย',
                    ship_no      : res.data.shop.id,
                    ship_name    : res.data.shop.name,
                    counter_id   : res.data.counter.id,
                    counter_name : res.data.counter.name,
                    time_stamp   : res.data.time_stamp
                  }
            
                  setTimeout(() => {
                    this.status = 'COMPLETED';
                  }, 1000);
            
                } catch (error) {
                  console.log(error);
                } */
            });
        }
        checkInOutManual(type) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                // alert(type+ ' '+ this.qrcode_text.toUpperCase());
                if (this.qrcode_text == '') {
                    //  alert( this.qrcode_text.toUpperCase() );
                    return;
                }
                try {
                    let latitude = 'XX';
                    let longitude = 'XXX';
                    const res = yield this.scanApi.postCheckInOut(this.qrcode_text.toUpperCase(), latitude, longitude, type);
                    this.result = {
                        type: type,
                        title: (type == 'I') ? 'ลงทะเบียนเข้าเรียบร้อย' : 'ลงทะเบียนออกเรียบร้อย',
                        ship_no: res.data.shop.id,
                        ship_name: res.data.shop.name,
                        counter_id: res.data.counter.id,
                        counter_name: res.data.counter.name,
                        time_stamp: res.data.time_stamp
                    };
                    setTimeout(() => {
                        this.status = 'COMPLETED';
                    }, 200);
                }
                catch (error) {
                    console.log(error);
                    alert(error.error.message);
                }
            });
        }
        updateScanModeConfig() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                this.key_manual_title = (this.key_manual === true) ? 'Key' : 'Scan';
                yield this.storage.set('SCAN_CHECKIN_KEY_MANUAL', this.key_manual);
            });
        }
    }
    ScanCheckInoutPage.ɵfac = function ScanCheckInoutPage_Factory(t) { return new (t || ScanCheckInoutPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_3__["BarcodeScanner"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__["Geolocation"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_api_scan_check_inout_scan_check_inout_service__WEBPACK_IMPORTED_MODULE_5__["ScanCheckInoutService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"])); };
    ScanCheckInoutPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ScanCheckInoutPage, selectors: [["app-scan-check-inout"]], decls: 13, vars: 6, consts: [[1, "ion-no-border"], ["slot", "start"], ["fullscreen", "true"], [4, "ngIf"], ["class", "section__loading", 4, "ngIf"], ["class", "section__completed", 4, "ngIf"], ["class", "ion-no-border", 4, "ngIf"], [1, "menus"], [1, "topic"], [1, "mark"], [1, "menus__container"], ["class", "menus__container__item", 3, "click", 4, "ngFor", "ngForOf"], [1, "menus__container__item", 3, "click"], [3, "ngClass"], ["alt", "", 3, "src"], [1, "menus__container__item--title"], [1, "ion-padding", 2, "height", "200px"], ["position", "stacked"], ["type", "text", "placeholder", "\u0E04\u0E35\u0E22\u0E4C\u0E42\u0E04\u0E4A\u0E14", 2, "text-transform", "uppercase", 3, "ngModel", "ngModelChange"], ["class", "btn btn-success", 3, "click", 4, "ngIf"], ["class", "btn btn-danger", 3, "click", 4, "ngIf"], [1, "btn", "btn-success", 3, "click"], [1, "btn", "btn-danger", 3, "click"], [1, "section__loading"], [3, "width", "height", "options"], [1, "section__completed"], [3, "config", "event"], ["ng-model", "customText", 3, "ngModel", "ngModelChange", "ionChange"]], template: function ScanCheckInoutPage_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-toolbar");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-buttons", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "ion-back-button");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-title");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\u0E2A\u0E41\u0E01\u0E19\u0E40\u0E02\u0E49\u0E32/\u0E2D\u0E2D\u0E01\u0E07\u0E32\u0E19");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-content", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, ScanCheckInoutPage_section_7_Template, 9, 2, "section", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, ScanCheckInoutPage_section_8_Template, 2, 3, "section", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, ScanCheckInoutPage_section_9_Template, 10, 13, "section", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, ScanCheckInoutPage_section_10_Template, 6, 5, "section", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, ScanCheckInoutPage_ion_footer_11_Template, 6, 3, "ion-footer", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, ScanCheckInoutPage_ion_footer_12_Template, 6, 2, "ion-footer", 6);
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.status === "BEGIN");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.status === "LOADING");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.status === "COMPLETED");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.status === "ERROR");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.status === "COMPLETED" || ctx.status === "ERROR");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.status !== "COMPLETED" && ctx.status !== "ERROR");
            }
        }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonContent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonInput"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["TextValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"], ngx_lottie__WEBPACK_IMPORTED_MODULE_10__["LottieComponent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonFooter"], ngx_countdown__WEBPACK_IMPORTED_MODULE_11__["CountdownComponent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonList"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonToggle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["BooleanValueAccessor"]], styles: [".section__loading[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n}\n\n.section__completed[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.section__completed[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n}\n\n.section__completed[_ngcontent-%COMP%]   h1.in[_ngcontent-%COMP%] {\n  color: #41ad3e;\n}\n\n.section__completed[_ngcontent-%COMP%]   h1.out[_ngcontent-%COMP%] {\n  color: #b63333;\n}\n\n.section__completed[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n\n.section__completed[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #4d4d4d;\n  font-size: 0.9rem;\n}\n\nion-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n\nion-footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #5f5f5f;\n  font-size: 0.8rem;\n  font-weight: 400;\n}\n\n.btn-success[_ngcontent-%COMP%] {\n  background: #149e01;\n}\n\n.btn-danger[_ngcontent-%COMP%] {\n  background: #ec1919;\n}\n\n.menus[_ngcontent-%COMP%] {\n  margin: 25px 20px 45px 20px;\n}\n\n.menus[_ngcontent-%COMP%]   .menus__container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: flex-start;\n}\n\n.menus[_ngcontent-%COMP%]   .menus__container[_ngcontent-%COMP%]   .menus__container__item[_ngcontent-%COMP%] {\n  flex-basis: 50%;\n  display: flex;\n  flex-flow: column nowrap;\n  align-items: center;\n  justify-content: center;\n  margin: 6px 0;\n  width: 110px;\n  height: 110px;\n}\n\n.menus[_ngcontent-%COMP%]   .menus__container[_ngcontent-%COMP%]   .menus__container__item[_ngcontent-%COMP%]   .menus__container__item--logo[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  box-shadow: 0px 8px 20px -10px rgba(0, 0, 0, 0.02);\n  border-radius: 50%;\n  display: flex;\n  flex-flow: column wrap;\n  align-items: center;\n  justify-content: center;\n}\n\n.menus[_ngcontent-%COMP%]   .menus__container[_ngcontent-%COMP%]   .menus__container__item[_ngcontent-%COMP%]   .menus__container__item--logo.in[_ngcontent-%COMP%] {\n  background: #149e01;\n}\n\n.menus[_ngcontent-%COMP%]   .menus__container[_ngcontent-%COMP%]   .menus__container__item[_ngcontent-%COMP%]   .menus__container__item--logo.out[_ngcontent-%COMP%] {\n  background: #ec1919;\n}\n\n.menus[_ngcontent-%COMP%]   .menus__container[_ngcontent-%COMP%]   .menus__container__item[_ngcontent-%COMP%]   .menus__container__item--logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  object-fit: cover;\n}\n\n.menus[_ngcontent-%COMP%]   .menus__container[_ngcontent-%COMP%]   .menus__container__item[_ngcontent-%COMP%]   .menus__container__item--title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #2d2d2d;\n  font-size: 0.8rem;\n  font-weight: 500;\n  margin: 4px 0;\n}"] });
    return ScanCheckInoutPage;
})();


/***/ })

}]);