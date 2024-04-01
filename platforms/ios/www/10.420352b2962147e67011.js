(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

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

/***/ "GJ6Q":
/*!*******************************************************!*\
  !*** ./src/app/pages/income/income-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: IncomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncomePageRoutingModule", function() { return IncomePageRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _income_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./income.page */ "yjdf");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    { path: '', component: _income_page__WEBPACK_IMPORTED_MODULE_1__["IncomePage"] },
    {
        path: 'detial',
        loadChildren: () => __webpack_require__.e(/*! import() */ 32).then(__webpack_require__.bind(null, /*! ./detial/detial.module */ "BDYt")).then((m) => m.DetialPageModule),
    },
];
let IncomePageRoutingModule = /*@__PURE__*/ (() => {
    class IncomePageRoutingModule {
    }
    IncomePageRoutingModule.ɵfac = function IncomePageRoutingModule_Factory(t) { return new (t || IncomePageRoutingModule)(); };
    IncomePageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: IncomePageRoutingModule });
    IncomePageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
    return IncomePageRoutingModule;
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](IncomePageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "mTXl":
/*!***********************************************!*\
  !*** ./src/app/pages/income/income.module.ts ***!
  \***********************************************/
/*! exports provided: IncomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncomePageModule", function() { return IncomePageModule; });
/* harmony import */ var angular2_chartjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular2-chartjs */ "z+eI");
/* harmony import */ var angular2_chartjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(angular2_chartjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _income_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./income.page */ "yjdf");
/* harmony import */ var _income_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./income-routing.module */ "GJ6Q");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var ngx_lottie__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-lottie */ "DPnb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");








let IncomePageModule = /*@__PURE__*/ (() => {
    class IncomePageModule {
    }
    IncomePageModule.ɵfac = function IncomePageModule_Factory(t) { return new (t || IncomePageModule)(); };
    IncomePageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: IncomePageModule });
    IncomePageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _income_routing_module__WEBPACK_IMPORTED_MODULE_4__["IncomePageRoutingModule"], angular2_chartjs__WEBPACK_IMPORTED_MODULE_0__["ChartModule"], ngx_lottie__WEBPACK_IMPORTED_MODULE_6__["LottieModule"]]] });
    return IncomePageModule;
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](IncomePageModule, { declarations: [_income_page__WEBPACK_IMPORTED_MODULE_3__["IncomePage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _income_routing_module__WEBPACK_IMPORTED_MODULE_4__["IncomePageRoutingModule"], angular2_chartjs__WEBPACK_IMPORTED_MODULE_0__["ChartModule"], ngx_lottie__WEBPACK_IMPORTED_MODULE_6__["LottieModule"]] }); })();


/***/ }),

/***/ "yjdf":
/*!*********************************************!*\
  !*** ./src/app/pages/income/income.page.ts ***!
  \*********************************************/
/*! exports provided: IncomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncomePage", function() { return IncomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _services_utils_moment_moment_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/utils/moment/moment.service */ "9cE+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_storage_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/storage/storage.service */ "E2f4");
/* harmony import */ var _services_api_income_income_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/api/income/income.service */ "afkE");
/* harmony import */ var _services_utils_loading_loading_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../services/utils/loading/loading.service */ "YMUU");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_lottie__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-lottie */ "DPnb");
/* harmony import */ var angular2_chartjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! angular2-chartjs */ "z+eI");
/* harmony import */ var angular2_chartjs__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(angular2_chartjs__WEBPACK_IMPORTED_MODULE_11__);












function IncomePage_div_18_section_6_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "ng-lottie", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "\u0E44\u0E21\u0E48\u0E1E\u0E1A\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("width", ctx_r2.lottiefiles.warning.width)("height", ctx_r2.lottiefiles.warning.height)("options", ctx_r2.lottiefiles.warning.options);
    }
}
function IncomePage_div_18_section_7_div_9_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](7, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "ion-progress-bar", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const data_r6 = ctx.$implicit;
        const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", data_r6.incomecode, " (", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](4, 6, data_r6.amountpay / ctx_r4.incomeData * 100, "1.2-2"), "%)");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](7, 9, data_r6.amountpay));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](data_r6.incomecode);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", data_r6.amountpay / ctx_r4.incomeData * 100 / 100);
    }
}
const _c0 = function (a0, a1) { return { "color_black": a0, "color_gray": a1 }; };
function IncomePage_div_18_section_7_ion_item_20_ion_row_6_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-row", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-col", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "p", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Commission");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "ion-col", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "p", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](7, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const data_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](4, _c0, data_r7.commission > 0, data_r7.commission == 0));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](7, 2, data_r7.commission));
    }
}
function IncomePage_div_18_section_7_ion_item_20_ion_row_7_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-row", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-col", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "p", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Incentive");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "ion-col", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "p", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](7, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const data_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](4, _c0, data_r7.incentive > 0, data_r7.incentive == 0));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](7, 2, data_r7.incentive));
    }
}
function IncomePage_div_18_section_7_ion_item_20_ion_row_8_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-row", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-col", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "p", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Holiday");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "ion-col", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "p", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](7, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const data_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](4, _c0, data_r7.holiday > 0, data_r7.holiday == 0));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](7, 2, data_r7.holiday));
    }
}
function IncomePage_div_18_section_7_ion_item_20_ion_row_9_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-row", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-col", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "p", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "OT");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "ion-col", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "p", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](7, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const data_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](4, _c0, data_r7.ot > 0, data_r7.ot == 0));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](7, 2, data_r7.ot));
    }
}
function IncomePage_div_18_section_7_ion_item_20_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-row", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "ion-col", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "p", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "ion-col", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, IncomePage_div_18_section_7_ion_item_20_ion_row_6_Template, 8, 7, "ion-row", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, IncomePage_div_18_section_7_ion_item_20_ion_row_7_Template, 8, 7, "ion-row", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, IncomePage_div_18_section_7_ion_item_20_ion_row_8_Template, 8, 7, "ion-row", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, IncomePage_div_18_section_7_ion_item_20_ion_row_9_Template, 8, 7, "ion-row", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const data_r7 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](data_r7.date);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", data_r7.commission >= 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", data_r7.incentive >= 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", data_r7.holiday >= 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", data_r7.ot >= 0);
    }
}
function IncomePage_div_18_section_7_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "p", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](7, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "chart", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, IncomePage_div_18_section_7_div_9_Template, 9, 11, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "hr", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "\u0E23\u0E32\u0E22\u0E25\u0E30\u0E40\u0E2D\u0E35\u0E22\u0E14\u0E23\u0E32\u0E22\u0E44\u0E14\u0E49");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "chart", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "hr", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "ion-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, IncomePage_div_18_section_7_ion_item_20_Template, 10, 5, "ion-item", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r3.incomeData && "\u0E23\u0E32\u0E22\u0E44\u0E14\u0E49\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14" || "\u0E44\u0E21\u0E48\u0E1E\u0E1A\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](7, 11, ctx_r3.incomeData));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("type", ctx_r3.incomeTypeChart)("data", ctx_r3.incomeDataChart)("options", ctx_r3.incomeOptionsChart);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r3.incomeProgress);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("\u0E40\u0E14\u0E37\u0E2D\u0E19 ", ctx_r3.detialDate, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("type", ctx_r3.detialTypeChart)("data", ctx_r3.detialDataChart)("options", ctx_r3.detialOptionsChart);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r3.dailyDatas);
    }
}
const _c1 = function (a1) { return { "calendar__icon": true, "disable": a1 }; };
function IncomePage_div_18_Template(rf, ctx) {
    if (rf & 1) {
        const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "ion-icon", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function IncomePage_div_18_Template_ion_icon_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r16.backCalendar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "ion-icon", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function IncomePage_div_18_Template_ion_icon_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r17); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r18.nextCalendar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, IncomePage_div_18_section_6_Template, 4, 3, "section", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, IncomePage_div_18_section_7_Template, 21, 13, "section", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("\u0E40\u0E14\u0E37\u0E2D\u0E19 ", ctx_r0.currentCalendar.text, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](4, _c1, ctx_r0.disableNextCalendar));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.incomeData === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.incomeData > 0);
    }
}
function IncomePage_div_19_ion_item_11_Template(rf, ctx) {
    if (rf & 1) {
        const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-item", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function IncomePage_div_19_ion_item_11_Template_ion_item_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r22); const data_r20 = ctx.$implicit; const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r21.viewDetail(data_r20); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-row", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "ion-col", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "p", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "ion-col", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "p", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](8, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "ion-col", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "ion-icon", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const data_r20 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](data_r20._period);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](8, 2, data_r20.income));
    }
}
function IncomePage_div_19_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "ion-col");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "p", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48\u0E08\u0E48\u0E32\u0E22");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "ion-col");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "p", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "\u0E23\u0E32\u0E22\u0E23\u0E31\u0E1A\u0E2A\u0E38\u0E17\u0E18\u0E34");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "ion-col", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "ion-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, IncomePage_div_19_ion_item_11_Template, 11, 4, "ion-item", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r1.summaryData);
    }
}
_services_utils_moment_moment_service__WEBPACK_IMPORTED_MODULE_1__["moment"].locale('th');
let IncomePage = /*@__PURE__*/ (() => {
    class IncomePage {
        constructor(storage, apiIncome, loading, router) {
            this.storage = storage;
            this.apiIncome = apiIncome;
            this.loading = loading;
            this.router = router;
            this.current = 'ALL';
            this.incomeTypeChart = 'doughnut';
            this.incomeOptionsChart = {
                responsive: true,
                cutoutPercentage: 75,
                legend: {
                    display: false,
                },
            };
            this.detialTypeChart = 'bar';
            this.detialOptionsChart = {
                responsive: true,
                cutoutPercentage: 75,
                legend: {
                    display: true,
                },
                scales: {
                    xAxes: [
                        {
                            gridLines: {
                                offsetGridLines: true,
                            },
                        },
                    ],
                },
            };
            this.summaryData = [];
            this.dailyDatas = [];
            this.lottiefiles = {
                warning: {
                    options: { path: 'assets/lottiefiles/warning-map.json', loop: false },
                    width: '150px',
                    height: '150px',
                },
            };
        }
        ngOnInit() {
            const now = Object(_services_utils_moment_moment_service__WEBPACK_IMPORTED_MODULE_1__["moment"])().format('YYYYMM');
            this.getUserInfo();
            this.initialCalendar();
            this.loadAllData(now);
        }
        ionViewDidEnter() {
            // const now = moment().format('YYYYMM');
            // this.getUserInfo();
            // this.initialCalendar();
            // this.loadAllData(now);
        }
        doRefresh(event) {
            setTimeout(() => {
                this.ngOnInit();
                event.target.complete();
            }, 2000);
        }
        loadAllData(period) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                try {
                    yield this.loading.present();
                    const incomeDaily = yield this.apiIncome.getIncomeDaily(period);
                    const incomeMonth = yield this.apiIncome.getIncomeMonth(period);
                    const dailyDatas = (incomeDaily === null || incomeDaily === void 0 ? void 0 : incomeDaily.datas) || [];
                    const monthDatas = (incomeMonth === null || incomeMonth === void 0 ? void 0 : incomeMonth.datas) || [];
                    this.loadDoughnutChart(monthDatas);
                    this.incomeProgress = monthDatas;
                    this.loadBarChart(dailyDatas);
                    this.dailyDatas = [];
                    for (const period of dailyDatas) {
                        for (let i = 0; i < period.day.length; i++) {
                            let day = (parseInt(period.day[i]) < 10) ? '0' + period.day[i] : period.day[i];
                            let period_date = period.periodtrans + day;
                            if (period.commission[i] !== null && period.incentive[i] !== null && period.ot[i] !== null && period.holiday[i] !== null) {
                                if (period.commission[i] + period.incentive[i] + period.ot[i] + period.holiday[i] > 0) {
                                    this.dailyDatas.push({
                                        date: Object(_services_utils_moment_moment_service__WEBPACK_IMPORTED_MODULE_1__["moment"])(period_date, 'YYYYMMDD').format('DD-MM-YYYY'),
                                        commission: period.commission[i],
                                        incentive: period.incentive[i],
                                        ot: period.ot[i],
                                        holiday: period.holiday[i],
                                    });
                                }
                            }
                        }
                        console.log(this.dailyDatas);
                    }
                    this.loading.dismiss();
                }
                catch (error) {
                    console.error(error);
                    this.loading.dismiss();
                }
            });
        }
        getUserInfo() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                const info = yield this.storage.get('USER_INFO');
                this.user = info;
            });
        }
        segmentChange(ev) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                const { value } = ev.detail;
                if (value === 'LIST') {
                    try {
                        yield this.loading.present();
                        const summary = yield this.apiIncome.getSummary();
                        const datas = summary.datas || [];
                        const resp = datas.map((data) => (Object.assign(Object.assign({}, data), { _period: Object(_services_utils_moment_moment_service__WEBPACK_IMPORTED_MODULE_1__["moment"])(data.period, 'DD/MM/YYYY').format('DD MMM YYYY') })));
                        this.summaryData = resp;
                        this.loading.dismiss();
                    }
                    catch (error) {
                        console.error(error);
                        this.loading.dismiss();
                    }
                }
            });
        }
        initialCalendar() {
            const nowText = Object(_services_utils_moment_moment_service__WEBPACK_IMPORTED_MODULE_1__["moment"])().format('MMMM YYYY');
            const nowValue = Object(_services_utils_moment_moment_service__WEBPACK_IMPORTED_MODULE_1__["moment"])().format('YYYYMM');
            this.disableNextCalendar = false;
            this.currentCalendar = { text: nowText, value: nowValue };
        }
        backCalendar() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                const now = Object(_services_utils_moment_moment_service__WEBPACK_IMPORTED_MODULE_1__["moment"])().format('YYYYMM');
                const before = (v, f) => Object(_services_utils_moment_moment_service__WEBPACK_IMPORTED_MODULE_1__["moment"])(v, 'YYYYMM').subtract(1, 'months').format(f);
                if (now >= before(this.currentCalendar.value, 'YYYYMM')) {
                    this.disableNextCalendar = false;
                }
                this.currentCalendar = {
                    text: before(this.currentCalendar.value, 'MMMM YYYY'),
                    value: before(this.currentCalendar.value, 'YYYYMM'),
                };
                this.loadAllData(this.currentCalendar.value);
            });
        }
        nextCalendar() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                const now = Object(_services_utils_moment_moment_service__WEBPACK_IMPORTED_MODULE_1__["moment"])().format('YYYYMM');
                const forward = (v, f) => Object(_services_utils_moment_moment_service__WEBPACK_IMPORTED_MODULE_1__["moment"])(v, 'YYYYMM').add(1, 'months').format(f);
                if (now < forward(this.currentCalendar.value, 'YYYYMM')) {
                    this.disableNextCalendar = true;
                }
                this.currentCalendar = {
                    text: forward(this.currentCalendar.value, 'MMMM YYYY'),
                    value: forward(this.currentCalendar.value, 'YYYYMM'),
                };
                this.loadAllData(this.currentCalendar.value);
            });
        }
        loadDoughnutChart(params) {
            this.incomeData = params.reduce((val, num) => val + num.amountpay, 0);
            const labels = params.map((val) => [val.incomecode]);
            const data = params.map((val) => [val.amountpay]);
            const backgroundColor = params.map((val) => [val.color]);
            this.incomeDataChart = {
                labels,
                datasets: [
                    {
                        label: 'My Income Chart',
                        data,
                        backgroundColor,
                        borderAlign: 'center',
                    },
                ],
            };
        }
        loadBarChart(params) {
            const labels = params[0].day.filter((d) => d);
            const commission = params[0].commission;
            const incentive = params[0].incentive;
            const holiday = params[0].holiday;
            const allowance = params[0].allowance;
            const ot = params[0].ot;
            const other = params[0].other;
            this.detialDate = Object(_services_utils_moment_moment_service__WEBPACK_IMPORTED_MODULE_1__["moment"])(params[0].periodtrans, 'YYYYMM').format('MMMM YYYY');
            this.detialDataChart = {
                labels,
                datasets: [
                    {
                        label: 'HOLIDAY',
                        backgroundColor: 'rgba(125,142,159,0.8)',
                        data: holiday,
                        stack: 1,
                    },
                    {
                        label: 'OT',
                        backgroundColor: 'rgba(249,213,187,0.8)',
                        data: ot,
                        stack: 1,
                    },
                    {
                        label: 'COMMISSION',
                        backgroundColor: 'rgba(246,103,103,0.8)',
                        data: commission,
                        stack: 1,
                    },
                    {
                        label: 'INCENTVE',
                        backgroundColor: 'rgba(243,103,246,0.8)',
                        data: incentive,
                        stack: 1,
                    },
                    {
                        label: 'ALLOWANCE',
                        backgroundColor: 'rgba(0,102,204,0.8)',
                        data: allowance,
                        stack: 1,
                    },
                    {
                        label: 'OTHER',
                        backgroundColor: 'rgba(89,89,89,0.8)',
                        data: other,
                        stack: 1,
                    },
                ],
            };
        }
        viewDetail(data) {
            const navigationExtras = { state: Object.assign({}, data) };
            this.router.navigate(['income/detial'], navigationExtras);
        }
    }
    IncomePage.ɵfac = function IncomePage_Factory(t) { return new (t || IncomePage)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_api_income_income_service__WEBPACK_IMPORTED_MODULE_4__["IncomeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_utils_loading_loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"])); };
    IncomePage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: IncomePage, selectors: [["app-income"]], decls: 20, vars: 4, consts: [[1, "ion-no-border"], ["slot", "start"], ["fullscreen", "true"], ["slot", "fixed", 3, "ionRefresh"], ["scrollable", "", 3, "ngModel", "ngModelChange", "ionChange"], ["value", "ALL"], ["value", "LIST"], [1, "segment__main", 3, "ngSwitch"], ["class", "segment__primary", 4, "ngSwitchCase"], ["class", "segment__secondary", 4, "ngSwitchCase"], [1, "segment__primary"], [1, "section__calendar"], ["name", "chevron-back-outline", 1, "calendar__icon", 3, "click"], ["name", "chevron-forward-outline", 3, "ngClass", "click"], ["class", "handle__error", 4, "ngIf"], [4, "ngIf"], [1, "handle__error"], [3, "width", "height", "options"], [1, "section__chart"], [1, "section__chart--value"], [1, "value"], [1, "section__chart--doughnut", 3, "type", "data", "options"], ["class", "section__progress", 4, "ngFor", "ngForOf"], [1, "hr--style"], [1, "section__chart--bar", 3, "type", "data", "options"], [1, "hr--style", 2, "margin-top", "20px", "margin-bottom", "10px"], [4, "ngFor", "ngForOf"], [1, "section__progress"], [1, "section__progress--label"], [3, "value"], [2, "width", "100%", "height", "auto", "margin-top", "-12px", "margin-bottom", "25px", "font-size", "0.8rem"], ["size", "4"], [1, "center"], ["size", "8", 2, "padding", "0"], ["style", "width:100%;", 3, "ngClass", 4, "ngIf"], ["style", "width:100%;height:20px", 3, "ngClass", 4, "ngIf"], [2, "width", "100%", 3, "ngClass"], ["size", "6", 2, "height", "20px"], [2, "text-align", "right"], [2, "width", "100%", "height", "20px", 3, "ngClass"], ["size", "6"], [1, "segment__secondary"], [1, "label", "center"], ["size", "1"], [3, "click", 4, "ngFor", "ngForOf"], [3, "click"], [2, "width", "100%"], ["size", "5"], ["size", "2", 2, "text-align", "right"], ["name", "document-text-outline", 2, "font-size", "1.2rem"]], template: function IncomePage_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-header", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-toolbar");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "ion-buttons", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "ion-back-button");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "ion-title");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "\u0E23\u0E32\u0E22\u0E44\u0E14\u0E49");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "ion-content", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "ion-refresher", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ionRefresh", function IncomePage_Template_ion_refresher_ionRefresh_7_listener($event) { return ctx.doRefresh($event); });
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "ion-refresher-content");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "ion-toolbar");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "ion-segment", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function IncomePage_Template_ion_segment_ngModelChange_10_listener($event) { return ctx.current = $event; })("ionChange", function IncomePage_Template_ion_segment_ionChange_10_listener($event) { return ctx.segmentChange($event); });
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "ion-segment-button", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "ion-label");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "\u0E20\u0E32\u0E1E\u0E23\u0E27\u0E21 ");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "ion-segment-button", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "ion-label");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "\u0E23\u0E32\u0E22\u0E40\u0E14\u0E37\u0E2D\u0E19");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, IncomePage_div_18_Template, 8, 6, "div", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, IncomePage_div_19_Template, 12, 1, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.current);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitch", ctx.current);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", "ALL");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", "LIST");
            }
        }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonRefresher"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonRefresherContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonSegment"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["SelectValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonSegmentButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonLabel"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgSwitchCase"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], ngx_lottie__WEBPACK_IMPORTED_MODULE_10__["LottieComponent"], angular2_chartjs__WEBPACK_IMPORTED_MODULE_11__["ChartComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonList"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonProgressBar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonCol"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["DecimalPipe"]], styles: ["ion-segment[_ngcontent-%COMP%] {\n  --background: #fafafa;\n  border-radius: 14px;\n  margin: 0 8px 12px 8px;\n  padding: 18px 12px;\n}\nion-segment[_ngcontent-%COMP%]   ion-segment-button[_ngcontent-%COMP%] {\n  --color-checked: #000000;\n  --indicator-color: #f66767;\n  --indicator-height: 2px;\n}\n.hr--style[_ngcontent-%COMP%] {\n  width: 88%;\n  margin: 35px auto;\n  background-color: #fff;\n  border-top: 1.5px dashed #f66767;\n}\n.segment__main[_ngcontent-%COMP%] {\n  background: #fafafa;\n  border-radius: 14px;\n  margin: 0 8px 8px 8px;\n  padding: 12px;\n}\n.segment__primary[_ngcontent-%COMP%]   .section__calendar[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: space-between;\n  margin: 15px 10px;\n}\n.segment__primary[_ngcontent-%COMP%]   .section__calendar[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  font-weight: 500;\n  margin: 0;\n}\n.segment__primary[_ngcontent-%COMP%]   .section__calendar[_ngcontent-%COMP%]   .calendar__icon[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n}\n.segment__primary[_ngcontent-%COMP%]   .section__calendar[_ngcontent-%COMP%]   .calendar__icon.disable[_ngcontent-%COMP%] {\n  cursor: no-drop;\n  pointer-events: none;\n  opacity: 0.2;\n}\n.segment__primary[_ngcontent-%COMP%]   .section__chart[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.segment__primary[_ngcontent-%COMP%]   .section__chart[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  font-weight: 500px;\n}\n.segment__primary[_ngcontent-%COMP%]   .section__chart[_ngcontent-%COMP%]   .section__chart--value[_ngcontent-%COMP%] {\n  position: absolute;\n}\n.segment__primary[_ngcontent-%COMP%]   .section__chart[_ngcontent-%COMP%]   .section__chart--value[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #2d2d2d;\n  font-size: 0.8rem;\n  font-weight: 400;\n  text-align: center;\n  margin: 5px 0;\n}\n.segment__primary[_ngcontent-%COMP%]   .section__chart[_ngcontent-%COMP%]   .section__chart--value[_ngcontent-%COMP%]   p.value[_ngcontent-%COMP%] {\n  color: #23a6da;\n  font-size: 1.1rem;\n  font-weight: 500;\n}\n.segment__primary[_ngcontent-%COMP%]   .section__chart[_ngcontent-%COMP%]   .section__chart--doughnut[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 20px 10px;\n}\n.segment__primary[_ngcontent-%COMP%]   .section__chart[_ngcontent-%COMP%]   .section__chart--bar[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.segment__primary[_ngcontent-%COMP%]   .section__progress[_ngcontent-%COMP%] {\n  padding: 3px 20px;\n}\n.segment__primary[_ngcontent-%COMP%]   .section__progress[_ngcontent-%COMP%]   .section__progress--label[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: space-between;\n}\n.segment__primary[_ngcontent-%COMP%]   .section__progress[_ngcontent-%COMP%]   .section__progress--label[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  margin: 5px;\n}\n.segment__primary[_ngcontent-%COMP%]   .section__progress[_ngcontent-%COMP%]   ion-progress-bar[_ngcontent-%COMP%] {\n  --background: #e9e9e9;\n  --progress-background: #f66767;\n  width: 100%;\n  padding: 10px;\n  border-radius: 25px;\n}\n.segment__primary[_ngcontent-%COMP%]   .section__progress[_ngcontent-%COMP%]   ion-progress-bar.COMMISSION[_ngcontent-%COMP%] {\n  --progress-background: #f66767;\n}\n.segment__primary[_ngcontent-%COMP%]   .section__progress[_ngcontent-%COMP%]   ion-progress-bar.INCENTIVE[_ngcontent-%COMP%] {\n  --progress-background: #ea67f6;\n}\n.segment__primary[_ngcontent-%COMP%]   .section__progress[_ngcontent-%COMP%]   ion-progress-bar.ALLOWANCE[_ngcontent-%COMP%] {\n  --progress-background:#0066cc;\n}\n.segment__primary[_ngcontent-%COMP%]   .section__progress[_ngcontent-%COMP%]   ion-progress-bar.HOLIDAY[_ngcontent-%COMP%] {\n  --progress-background: #c9d6df;\n}\n.segment__primary[_ngcontent-%COMP%]   .section__progress[_ngcontent-%COMP%]   ion-progress-bar.OT[_ngcontent-%COMP%] {\n  --progress-background: #f9d5bb;\n}\n.segment__primary[_ngcontent-%COMP%]   .section__progress[_ngcontent-%COMP%]   ion-progress-bar.SALARY[_ngcontent-%COMP%] {\n  --progress-background: #ffd31d;\n}\n.segment__primary[_ngcontent-%COMP%]   .section__progress[_ngcontent-%COMP%]   ion-progress-bar.OTHER[_ngcontent-%COMP%] {\n  --progress-background: #595959;\n}\n.segment__secondary[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  text-align: left;\n  margin: 0;\n}\n.segment__secondary[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   p.label[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n.segment__secondary[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   p.center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.segment__secondary[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   p.justify[_ngcontent-%COMP%] {\n  text-align: justify;\n}\n.segment__secondary[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.handle__error[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 25px;\n}\n.handle__error[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 500;\n}\n.color_black[_ngcontent-%COMP%] {\n  color: #000000;\n}\n.color_gray[_ngcontent-%COMP%] {\n  color: #919191;\n}"] });
    return IncomePage;
})();


/***/ })

}]);