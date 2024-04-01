(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

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

/***/ "U0n4":
/*!*********************************************************************!*\
  !*** ./src/app/pages/qrms-register/qrms-register-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: QrmsRegisterPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QrmsRegisterPageRoutingModule", function() { return QrmsRegisterPageRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _qrms_register_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./qrms-register.page */ "hMEJ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    {
        path: '',
        component: _qrms_register_page__WEBPACK_IMPORTED_MODULE_1__["QrmsRegisterPage"]
    }
];
let QrmsRegisterPageRoutingModule = /*@__PURE__*/ (() => {
    class QrmsRegisterPageRoutingModule {
    }
    QrmsRegisterPageRoutingModule.ɵfac = function QrmsRegisterPageRoutingModule_Factory(t) { return new (t || QrmsRegisterPageRoutingModule)(); };
    QrmsRegisterPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: QrmsRegisterPageRoutingModule });
    QrmsRegisterPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
    return QrmsRegisterPageRoutingModule;
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](QrmsRegisterPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "hMEJ":
/*!***********************************************************!*\
  !*** ./src/app/pages/qrms-register/qrms-register.page.ts ***!
  \***********************************************************/
/*! exports provided: QrmsRegisterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QrmsRegisterPage", function() { return QrmsRegisterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _services_utils_moment_moment_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/utils/moment/moment.service */ "9cE+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_api_check_inout_check_inout_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/api/check-inout/check-inout.service */ "6Ghx");
/* harmony import */ var _services_api_workflow_workflow_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/api/workflow/workflow.service */ "QpGb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ion2_calendar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ion2-calendar */ "zTSL");
/* harmony import */ var ion2_calendar__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ion2_calendar__WEBPACK_IMPORTED_MODULE_7__);








function QrmsRegisterPage_div_10_div_6_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
}
function QrmsRegisterPage_div_10_ion_item_9_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-thumbnail", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "p", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "p", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "p", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const data_r5 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", data_r5.image, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](data_r5.source_id);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", data_r5.cust_id, " ", data_r5.cust_name, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", data_r5.counter_id, " \u00A0", data_r5.counter_name, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](data_r5.tran_date);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("IN: ", data_r5.time_in == "" ? "" : data_r5.time_in.substring(0, 2) + ":" + data_r5.time_in.substring(2, 4), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("OUT: ", data_r5.time_out == "" ? "" : data_r5.time_out.substring(0, 2) + ":" + data_r5.time_out.substring(2, 4), "");
    }
}
function QrmsRegisterPage_div_10_Template(rf, ctx) {
    if (rf & 1) {
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "ion-calendar", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function QrmsRegisterPage_div_10_Template_ion_calendar_change_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r6.getEventForDays($event); })("monthChange", function QrmsRegisterPage_div_10_Template_ion_calendar_monthChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r8.getEventForMonths($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, QrmsRegisterPage_div_10_div_6_Template, 2, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "ion-list", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, QrmsRegisterPage_div_10_ion_item_9_Template, 19, 9, "ion-item", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("type", ctx_r0.type)("options", ctx_r0.optionsMulti)("format", "DD-MM-YYYY");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48 ", ctx_r0.dateSelect, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.loaded === false);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.loadData);
    }
}
function QrmsRegisterPage_div_11_div_14_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
}
function QrmsRegisterPage_div_11_ion_card_15_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-card-header", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "ion-card-title", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "ion-card-content", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "ion-grid");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "ion-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "ion-col", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "ion-col", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "ion-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "ion-col", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "\u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "ion-col", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "ion-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "ion-col", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "\u0E27\u0E31\u0E19.\u0E0A\u0E21.\u0E19\u0E32\u0E17\u0E35");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "ion-col", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "ion-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "ion-col", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "\u0E08\u0E33\u0E19\u0E27\u0E19\u0E04\u0E23\u0E31\u0E49\u0E07");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "ion-col", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const i_r11 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](i_r11.dateadjust_t);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](i_r11.dateadjust_t);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](i_r11.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](i_r11.amtadj);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](i_r11.cntlate);
    }
}
function QrmsRegisterPage_div_11_Template(rf, ctx) {
    if (rf & 1) {
        const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "ion-grid", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "ion-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "ion-col", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "ion-button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function QrmsRegisterPage_div_11_Template_ion_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r12.prevMonth(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "ion-icon", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "ion-col", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "ion-col", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "ion-button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function QrmsRegisterPage_div_11_Template_ion_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r13); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r14.nextMonth(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "ion-icon", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, QrmsRegisterPage_div_11_div_14_Template, 2, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, QrmsRegisterPage_div_11_ion_card_15_Template, 27, 5, "ion-card", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.viewTitleMonth);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.loadingMonth === true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r1.loadDataMonthly);
    }
}
function QrmsRegisterPage_div_12_div_14_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
}
function QrmsRegisterPage_div_12_h5_18_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" \u0E2A\u0E34\u0E17\u0E18\u0E34\u0E1E\u0E31\u0E01\u0E23\u0E49\u0E2D\u0E19 \u0E1B\u0E35 ", ctx_r16.date_yearly_adjust_vacation_year, " = ", ctx_r16.date_yearly_adjust_vacation_day, " \u0E27\u0E31\u0E19 ");
    }
}
function QrmsRegisterPage_div_12_ion_item_23_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-item", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-grid");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "ion-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "ion-col", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "\u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "ion-col", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "ion-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "ion-col", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "\u0E27\u0E31\u0E19.\u0E0A\u0E21.\u0E19\u0E32\u0E17\u0E35");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "ion-col", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "ion-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "ion-col", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "\u0E08\u0E33\u0E19\u0E27\u0E19\u0E04\u0E23\u0E31\u0E49\u0E07");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "ion-col", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const i_r18 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](i_r18.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](i_r18.amount);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](i_r18.dayofyear);
    }
}
function QrmsRegisterPage_div_12_Template(rf, ctx) {
    if (rf & 1) {
        const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "ion-grid", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "ion-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "ion-col", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "ion-button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function QrmsRegisterPage_div_12_Template_ion_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r19.prevYear(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "ion-icon", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "ion-col", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "ion-col", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "ion-button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function QrmsRegisterPage_div_12_Template_ion_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r20); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r21.nextYear(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "ion-icon", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, QrmsRegisterPage_div_12_div_14_Template, 2, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "ion-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "ion-card-header", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "ion-card-title", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, QrmsRegisterPage_div_12_h5_18_Template, 2, 2, "h5", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "ion-card-content", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "ion-list", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](23, QrmsRegisterPage_div_12_ion_item_23_Template, 17, 3, "ion-item", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r2.viewTitleYear);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.loadingYear === true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.date_yearly_adjust_vacation_year && ctx_r2.date_yearly_adjust_vacation_day);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E2A\u0E16\u0E34\u0E15\u0E34\u0E2A\u0E30\u0E2A\u0E21\u0E17\u0E31\u0E49\u0E07\u0E1B\u0E35\u0E16\u0E36\u0E07\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48 ", ctx_r2.data_yearly_adjust_period, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r2.loadDataYearly);
    }
}
let QrmsRegisterPage = /*@__PURE__*/ (() => {
    class QrmsRegisterPage {
        constructor(checkInOutApi, timeStatApi) {
            this.checkInOutApi = checkInOutApi;
            this.timeStatApi = timeStatApi;
            this.timeStat = 'dailyStat';
            this.dataApi = [];
            this.loadData = [];
            this.loadDataCalendar = [];
            this.monthYear = Object(_services_utils_moment_moment_service__WEBPACK_IMPORTED_MODULE_1__["moment"])().format('MMYYYY');
            this.dateSelect = Object(_services_utils_moment_moment_service__WEBPACK_IMPORTED_MODULE_1__["moment"])().format('DD/MM/YYYY');
            this.loadDataMonthly = [];
            this.loadDataYearly = [];
        }
        ngOnInit() {
            this.viewTitleYear = Object(_services_utils_moment_moment_service__WEBPACK_IMPORTED_MODULE_1__["moment"])().format('YYYY');
            this.viewTitleMonth = Object(_services_utils_moment_moment_service__WEBPACK_IMPORTED_MODULE_1__["moment"])().format('MMMM YYYY');
        }
        ionViewDidEnter() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                this.getDataTimeStat(this.monthYear);
                this.loadYearlyAdjust('2021');
                this.loadMonthlyAdjust(this.viewTitleYear);
            });
        }
        doRefresh(event) {
            setTimeout(() => {
                this.ionViewDidEnter();
                event.target.complete();
            }, 2000);
        }
        getEventForDays(events) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                console.log(events);
                this.dateSelect = Object(_services_utils_moment_moment_service__WEBPACK_IMPORTED_MODULE_1__["moment"])(events._d).format('DD/MM/YYYY');
                console.log(this.dateSelect);
                this.loadData = this.dataApi.filter((datas) => {
                    return (this.dateSelect == datas.tran_date);
                });
            });
        }
        getEventForMonths(events) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                console.log(events);
                //let moment(events.newMonth.string).format('DD/MM/YYYY'));
                if (events.newMonth.string.substring(0, 7) == Object(_services_utils_moment_moment_service__WEBPACK_IMPORTED_MODULE_1__["moment"])().format('YYYY-MM')) {
                    this.dateSelect = Object(_services_utils_moment_moment_service__WEBPACK_IMPORTED_MODULE_1__["moment"])().format('DD/MM/YYYY');
                }
                else {
                    if (events.newMonth.string < events.oldMonth.string) {
                        this.dateSelect = Object(_services_utils_moment_moment_service__WEBPACK_IMPORTED_MODULE_1__["moment"])(this.dateSelect, 'DD/MM/YYYY').subtract(1, 'month').format('DD/MM/YYYY');
                    }
                    else {
                        this.dateSelect = Object(_services_utils_moment_moment_service__WEBPACK_IMPORTED_MODULE_1__["moment"])(this.dateSelect, 'DD/MM/YYYY').add(1, 'month').format('DD/MM/YYYY');
                    }
                }
                console.log('this.dateSelect', this.dateSelect);
                this.monthYear = Object(_services_utils_moment_moment_service__WEBPACK_IMPORTED_MODULE_1__["moment"])(events.newMonth.string).format('MMYYYY');
                this.getDataTimeStat(this.monthYear);
            });
        }
        getDataTimeStat(transDate) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                this.loaded = false;
                let response = yield this.checkInOutApi.getRegisterQrms(transDate);
                this.dataApi = response.datas;
                this.dataApi = this.dataApi.map((datas) => (Object.assign(Object.assign({}, datas), { image: (datas.time_in != '' && datas.time_out != '') ? 'assets/images/csg-plan/calendar_n.svg' : 'assets/images/csg-plan/calendar_o.svg' })));
                this.loadData = this.dataApi;
                console.log(this.loadData);
                this.loadData = this.dataApi.filter((datas) => {
                    return (this.dateSelect == datas.tran_date);
                });
                let i = -1;
                let j = -1;
                let data = [];
                let oldDate = '';
                this.dataApi.forEach((e) => {
                    i++;
                    const dateC = Object(_services_utils_moment_moment_service__WEBPACK_IMPORTED_MODULE_1__["moment"])(e.tran_date, 'DD/MM/YYYY').format(); //'MM-DD-YYYY');
                    if (oldDate != dateC || i == 0) {
                        j++;
                        data.push({
                            date: new Date(dateC),
                            cssClass: e.time_in !== '' && e.time_out !== ''
                                ? 'custom-calendar workdayShow'
                                : 'custom-calendar urgent',
                            subTitle: null,
                            timeIn: e.time_in,
                            timeOut: e.time_out
                        });
                    }
                    else {
                        console.log('xxx->' + j, data[j]);
                        if (e.time_in !== '' && data[j].timeIn == '') {
                            data[j].timeIn = e.time_in;
                        }
                        if (e.time_out !== '' && data[j].timeOut == '') {
                            data[j].timeOut = e.time_out;
                        }
                        data[j].cssClass = data[j].timeIn !== '' && data[j].timeOut !== ''
                            ? 'custom-calendar workdayShow'
                            : 'custom-calendar urgent';
                        /*
                        data[j].cssClass =  e.time_in !== '' && e.time_out !== ''
                                              ? 'custom-calendar workdayShow'
                                              : 'custom-calendar urgent'
                                              */
                    }
                    oldDate = dateC;
                    //  console.log( e.time_in +' && '+ e.time_out);
                    //  console.log( data)    
                });
                this.loadDataCalendar = data;
                console.log('loadDataCalendar', this.loadDataCalendar);
                this.loaded = true;
                this.optionsMulti = {
                    from: new Date(2000, 0, 1),
                    monthFormat: 'ปี YYYY เดือน MMM',
                    monthPickerFormat: ['ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย.', 'ก.ค.', 'ส.ค.', 'ก.ย.', 'ต.ค.', 'พ.ย.', 'ธ.ค.'],
                    weekdays: ['อา', 'จ', 'อ', 'พ', 'พฤ', 'ศ', 'ส'],
                    weekStart: 0,
                    showToggleButtons: true,
                    showMonthPicker: true,
                    daysConfig: this.loadDataCalendar,
                };
            });
        }
        /****************************************/
        loadMonthlyAdjust(period) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                this.loadingMonth = true;
                const res = yield this.timeStatApi.monthlyAdjust(period);
                this.loadDataMonthly = res.datas;
                this.loadingMonth = false;
            });
        }
        loadYearlyAdjust(period) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                this.loadingYear = true;
                const res = yield this.timeStatApi.yearlyAdjust(period);
                this.loadDataYearly = res.datas;
                this.data_yearly_adjust_period = res.lastprocess;
                this.date_yearly_adjust_vacation_year = (!res.vacation) ? '' : res.vacation.year;
                this.date_yearly_adjust_vacation_day = (!res.vacation) ? '' : res.vacation.day;
                this.loadingYear = false;
            });
        }
        prevYear() {
            this.viewTitleYear = Object(_services_utils_moment_moment_service__WEBPACK_IMPORTED_MODULE_1__["moment"])(this.viewTitleYear, 'YYYY').subtract(1, 'year').format('YYYY');
            this.loadYearlyAdjust(this.viewTitleYear);
        }
        nextYear() {
            this.viewTitleYear = Object(_services_utils_moment_moment_service__WEBPACK_IMPORTED_MODULE_1__["moment"])(this.viewTitleYear, 'YYYY').add(1, 'year').format('YYYY');
            this.loadYearlyAdjust(this.viewTitleYear);
        }
        prevMonth() {
            this.viewTitleMonth = Object(_services_utils_moment_moment_service__WEBPACK_IMPORTED_MODULE_1__["moment"])(this.viewTitleMonth, 'MMMM YYYY').subtract(1, 'month').format('MMMM YYYY');
            let period = Object(_services_utils_moment_moment_service__WEBPACK_IMPORTED_MODULE_1__["moment"])(this.viewTitleMonth, 'MMMM YYYY').format('MM/YYYY');
            this.loadMonthlyAdjust(period);
        }
        nextMonth() {
            this.viewTitleMonth = Object(_services_utils_moment_moment_service__WEBPACK_IMPORTED_MODULE_1__["moment"])(this.viewTitleMonth, 'MMMM YYYY').add(1, 'month').format('MMMM YYYY');
            let period = Object(_services_utils_moment_moment_service__WEBPACK_IMPORTED_MODULE_1__["moment"])(this.viewTitleMonth, 'MMMM YYYY').format('MM/YYYY');
            this.loadMonthlyAdjust(period);
        }
    }
    QrmsRegisterPage.ɵfac = function QrmsRegisterPage_Factory(t) { return new (t || QrmsRegisterPage)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_api_check_inout_check_inout_service__WEBPACK_IMPORTED_MODULE_3__["CheckInoutService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_api_workflow_workflow_service__WEBPACK_IMPORTED_MODULE_4__["WorkflowService"])); };
    QrmsRegisterPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: QrmsRegisterPage, selectors: [["app-qrms-register"]], decls: 13, vars: 4, consts: [[1, "ion-no-border"], ["slot", "start"], ["fullscreen", "true"], ["slot", "fixed", 3, "ionRefresh"], [3, "ngSwitch"], [4, "ngSwitchCase"], [1, "calendar"], [3, "type", "options", "format", "change", "monthChange"], [2, "text-align", "center"], ["style", "text-align: center;", 4, "ngIf"], [1, "card-list"], ["lines", "none"], [4, "ngFor", "ngForOf"], ["src", "./assets/images/loading/loading-spinner-transparent.svg", 2, "width", "80px"], ["slot", "start", 2, "padding", "0", "text-align", "center"], [2, "width", "40px", "height", "40px", 3, "src"], [2, "font-size", "0.7rem", "margin-top", "-7px", "text-align", "center", "color", "#818181"], [1, "label"], [2, "display", "flex", "flex-direction", "row"], [2, "flex-basis", "55%"], [2, "width", "95px"], [2, "display", "flex", "justify-content", "flex-end"], [2, "width", "80px", "color", "#008c00"], [2, "width", "80px", "color", "#ff0000"], [1, "calendar-header"], ["size", "2"], ["fill", "clear", "size", "small", 3, "click"], ["name", "arrow-back"], ["size", "8"], [1, "ion-text-center", 2, "margin-top", "5px"], [1, "ion-text-right"], ["name", "arrow-forward"], [1, "titleStat"], [1, "ion-text-center"], [2, "background", "#ffffff"], ["size", "4", 2, "color", "#484848"], [1, "data-row", 2, "color", "#000000"], [4, "ngIf"], ["style", "--background:#ffffff", 4, "ngFor", "ngForOf"], [2, "--background", "#ffffff"], [1, "data-row"]], template: function QrmsRegisterPage_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-header", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-toolbar");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "ion-buttons", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "ion-back-button");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "ion-title");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "\u0E25\u0E07\u0E17\u0E30\u0E40\u0E1A\u0E35\u0E22\u0E19 QRMS");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "ion-content", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "ion-refresher", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ionRefresh", function QrmsRegisterPage_Template_ion_refresher_ionRefresh_7_listener($event) { return ctx.doRefresh($event); });
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "ion-refresher-content");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, QrmsRegisterPage_div_10_Template, 10, 6, "div", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, QrmsRegisterPage_div_11_Template, 16, 3, "div", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, QrmsRegisterPage_div_12_Template, 24, 5, "div", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitch", ctx.timeStat);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", "dailyStat");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", "monthlyStat");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", "yearlyStat");
            }
        }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonRefresher"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonRefresherContent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgSwitchCase"], ion2_calendar__WEBPACK_IMPORTED_MODULE_7__["CalendarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonList"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonThumbnail"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonGrid"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonCol"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonCard"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonCardHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonCardTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonCardContent"]], styles: [".calendar[_ngcontent-%COMP%] {\n  margin: 8px;\n  padding: 8px;\n  background: #ffffff;\n  border-radius: 8px;\n}\n\n.card-list[_ngcontent-%COMP%] {\n  margin: 8px;\n}\n\n.card-list[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%] {\n  --background: #ffffff;\n  --highlight-color-focused: transparent;\n  border-radius: 10px;\n  margin-bottom: 6px;\n  box-shadow: 0 1.2em 1.5em -0.9em #eeeeee;\n}\n\n.card-list[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-thumbnail[_ngcontent-%COMP%] {\n  --border-radius: 4px;\n  padding: 8px;\n}\n\n.card-list[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.card-list[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   p.label[_ngcontent-%COMP%] {\n  color: #111111;\n  font-size: 0.9rem;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: normal;\n  margin: 4px 0;\n}\n\n.card-list[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   p.price[_ngcontent-%COMP%] {\n  color: #111111;\n  font-size: 0.8rem;\n  font-weight: 600;\n  margin: 4px 0;\n}\n\n.card-list[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   p.price[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: red;\n  font-size: 1rem;\n}\n\n.card-list[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   p.ot[_ngcontent-%COMP%] {\n  text-align: right;\n}\n\n.titleStat[_ngcontent-%COMP%] {\n  background-color: #ffafa9 !important;\n}"] });
    return QrmsRegisterPage;
})();


/***/ }),

/***/ "og0J":
/*!*************************************************************!*\
  !*** ./src/app/pages/qrms-register/qrms-register.module.ts ***!
  \*************************************************************/
/*! exports provided: QrmsRegisterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QrmsRegisterPageModule", function() { return QrmsRegisterPageModule; });
/* harmony import */ var ion2_calendar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ion2-calendar */ "zTSL");
/* harmony import */ var ion2_calendar__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ion2_calendar__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _qrms_register_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./qrms-register-routing.module */ "U0n4");
/* harmony import */ var _qrms_register_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./qrms-register.page */ "hMEJ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");







let QrmsRegisterPageModule = /*@__PURE__*/ (() => {
    class QrmsRegisterPageModule {
    }
    QrmsRegisterPageModule.ɵfac = function QrmsRegisterPageModule_Factory(t) { return new (t || QrmsRegisterPageModule)(); };
    QrmsRegisterPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: QrmsRegisterPageModule });
    QrmsRegisterPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _qrms_register_routing_module__WEBPACK_IMPORTED_MODULE_4__["QrmsRegisterPageRoutingModule"],
                ion2_calendar__WEBPACK_IMPORTED_MODULE_0__["CalendarModule"]
            ]] });
    return QrmsRegisterPageModule;
})();
(function () {
    (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](QrmsRegisterPageModule, { declarations: [_qrms_register_page__WEBPACK_IMPORTED_MODULE_5__["QrmsRegisterPage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _qrms_register_routing_module__WEBPACK_IMPORTED_MODULE_4__["QrmsRegisterPageRoutingModule"],
            ion2_calendar__WEBPACK_IMPORTED_MODULE_0__["CalendarModule"]] });
})();


/***/ })

}]);