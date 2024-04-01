(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[18],{

/***/ "CoM/":
/*!***************************************************!*\
  !*** ./src/app/pages/csg-plan/csg-plan.module.ts ***!
  \***************************************************/
/*! exports provided: CsgPlanPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CsgPlanPageModule", function() { return CsgPlanPageModule; });
/* harmony import */ var ion2_calendar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ion2-calendar */ "zTSL");
/* harmony import */ var ion2_calendar__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ion2_calendar__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _csg_plan_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./csg-plan.page */ "inkA");
/* harmony import */ var _csg_plan_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./csg-plan-routing.module */ "OdNt");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var ngx_lottie__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-lottie */ "DPnb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");








let CsgPlanPageModule = /*@__PURE__*/ (() => {
    class CsgPlanPageModule {
    }
    CsgPlanPageModule.ɵfac = function CsgPlanPageModule_Factory(t) { return new (t || CsgPlanPageModule)(); };
    CsgPlanPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: CsgPlanPageModule });
    CsgPlanPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _csg_plan_routing_module__WEBPACK_IMPORTED_MODULE_3__["CsgPlanPageRoutingModule"], ion2_calendar__WEBPACK_IMPORTED_MODULE_0__["CalendarModule"], ngx_lottie__WEBPACK_IMPORTED_MODULE_6__["LottieModule"]]] });
    return CsgPlanPageModule;
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](CsgPlanPageModule, { declarations: [_csg_plan_page__WEBPACK_IMPORTED_MODULE_2__["CsgPlanPage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _csg_plan_routing_module__WEBPACK_IMPORTED_MODULE_3__["CsgPlanPageRoutingModule"], ion2_calendar__WEBPACK_IMPORTED_MODULE_0__["CalendarModule"], ngx_lottie__WEBPACK_IMPORTED_MODULE_6__["LottieModule"]] }); })();


/***/ }),

/***/ "OdNt":
/*!***********************************************************!*\
  !*** ./src/app/pages/csg-plan/csg-plan-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: CsgPlanPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CsgPlanPageRoutingModule", function() { return CsgPlanPageRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _csg_plan_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./csg-plan.page */ "inkA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    {
        path: '',
        component: _csg_plan_page__WEBPACK_IMPORTED_MODULE_1__["CsgPlanPage"],
    },
    {
        path: 'create-plan',
        loadChildren: () => __webpack_require__.e(/*! import() */ 17).then(__webpack_require__.bind(null, /*! ./create-plan/create-plan.module */ "DCyZ")).then((m) => m.CreatePlanPageModule),
    },
    {
        path: 'approver-detail',
        loadChildren: () => __webpack_require__.e(/*! import() */ 16).then(__webpack_require__.bind(null, /*! ./approver-detail/approver-detail.module */ "SzGm")).then((m) => m.ApproverDetailModule),
    }
];
let CsgPlanPageRoutingModule = /*@__PURE__*/ (() => {
    class CsgPlanPageRoutingModule {
    }
    CsgPlanPageRoutingModule.ɵfac = function CsgPlanPageRoutingModule_Factory(t) { return new (t || CsgPlanPageRoutingModule)(); };
    CsgPlanPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: CsgPlanPageRoutingModule });
    CsgPlanPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
    return CsgPlanPageRoutingModule;
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](CsgPlanPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "inkA":
/*!*************************************************!*\
  !*** ./src/app/pages/csg-plan/csg-plan.page.ts ***!
  \*************************************************/
/*! exports provided: CsgPlanPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CsgPlanPage", function() { return CsgPlanPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _services_utils_moment_moment_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/utils/moment/moment.service */ "9cE+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_storage_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/storage/storage.service */ "E2f4");
/* harmony import */ var _services_api_csg_plan_csg_plan_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/api/csg-plan/csg-plan.service */ "mj2v");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_utils_loading_loading_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../services/utils/loading/loading.service */ "YMUU");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ion2_calendar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ion2-calendar */ "zTSL");
/* harmony import */ var ion2_calendar__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(ion2_calendar__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "3Pt+");











function CsgPlanPage_ion_calendar_36_Template(rf, ctx) {
    if (rf & 1) {
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-calendar", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function CsgPlanPage_ion_calendar_36_Template_ion_calendar_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r3.startDate = $event; })("monthChange", function CsgPlanPage_ion_calendar_36_Template_ion_calendar_monthChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r5.getEventForMonths($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("type", ctx_r0.type)("ngModel", ctx_r0.startDate)("options", ctx_r0.optionsMulti)("format", "DD-MM-YYYY");
    }
}
function CsgPlanPage_ion_item_sliding_39_p_14_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\u0E40\u0E27\u0E25\u0E32\u0E1B\u0E0F\u0E34\u0E1A\u0E31\u0E15\u0E34\u0E07\u0E32\u0E19 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const v_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", v_r6.workfrom, " - ", v_r6.workto, "");
    }
}
function CsgPlanPage_ion_item_sliding_39_p_15_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\u0E40\u0E27\u0E25\u0E32\u0E17\u0E33 OT ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const v_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", v_r6.otfrom, " - ", v_r6.otto, "");
    }
}
function CsgPlanPage_ion_item_sliding_39_p_16_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const v_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" *\u0E01\u0E23\u0E38\u0E13\u0E32\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E43\u0E1A\u0E25\u0E32\u0E40\u0E02\u0E49\u0E32\u0E23\u0E30\u0E1A\u0E1A WorkFlow ", v_r6.status_leave, "");
    }
}
function CsgPlanPage_ion_item_sliding_39_p_17_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "OT");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
}
function CsgPlanPage_ion_item_sliding_39_ion_item_options_18_Template(rf, ctx) {
    if (rf & 1) {
        const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-item-options");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-item-option", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CsgPlanPage_ion_item_sliding_39_ion_item_options_18_Template_ion_item_option_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r18); const v_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r16.presentAlert(v_r6); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "\u0E22\u0E01\u0E40\u0E25\u0E34\u0E01");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
}
function CsgPlanPage_ion_item_sliding_39_ion_item_options_19_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-item-options");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-item-option", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "\u0E22\u0E01\u0E40\u0E25\u0E34\u0E01\u0E44\u0E21\u0E48\u0E44\u0E14\u0E49");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
}
function CsgPlanPage_ion_item_sliding_39_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-item-sliding");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "ion-thumbnail", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "p", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "B");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "p", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "p", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, CsgPlanPage_ion_item_sliding_39_p_14_Template, 4, 2, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, CsgPlanPage_ion_item_sliding_39_p_15_Template, 4, 2, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, CsgPlanPage_ion_item_sliding_39_p_16_Template, 2, 1, "p", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, CsgPlanPage_ion_item_sliding_39_p_17_Template, 2, 0, "p", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, CsgPlanPage_ion_item_sliding_39_ion_item_options_18_Template, 3, 0, "ion-item-options", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, CsgPlanPage_ion_item_sliding_39_ion_item_options_19_Template, 3, 0, "ion-item-options", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const v_r6 = ctx.$implicit;
        const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", v_r6.image, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](v_r6.date);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](v_r6.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](v_r6.custname);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", v_r6.counterid, " ", v_r6.countername, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", v_r6.workfrom);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", v_r6.otfrom);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", v_r6.worktype === "LE" && v_r6.satusleave !== "Y");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", v_r6.stateOt != "N");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", v_r6.typecancel === "Y" && ctx_r1.status_plan === "N");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", v_r6.typecancel === "N" && ctx_r1.status_plan === "N");
    }
}
function CsgPlanPage_ion_fab_button_41_Template(rf, ctx) {
    if (rf & 1) {
        const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-fab-button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CsgPlanPage_ion_fab_button_41_Template_ion_fab_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r19.presentAlert2(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "ion-icon", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
}
const _c0 = function (a1) { return { "status__item": true, disable: a1, bb: true }; };
const _c1 = function () { return { "status__item": true, disable: true }; };
_services_utils_moment_moment_service__WEBPACK_IMPORTED_MODULE_1__["moment"].locale('th');
let CsgPlanPage = /*@__PURE__*/ (() => {
    class CsgPlanPage {
        constructor(storage, api, router, alertController, modalController, route, loading) {
            // console.log(this.router);
            this.storage = storage;
            this.api = api;
            this.router = router;
            this.alertController = alertController;
            this.modalController = modalController;
            this.route = route;
            this.loading = loading;
            this.statusWorkspace = 'LOADING';
            this.dataAssigndate = [];
            this.handlerMessage = '';
            this.roleMessage = '';
            this.alertButtons = ['OK'];
            this.dataOtH = [];
            this.data = [];
            this.isModalOpen = false;
            this.current = 'WAIT';
            this.typeDisabled = true;
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
            // const state = this.router.getCurrentNavigation().extras.state;
            // console.log(state);
            // this.paramsMonthBefore = state;
            // if (this.paramsMonthBefore) {
            //   this.startDate =  moment(this.paramsMonthBefore.monthFromCreate,'YYYYMM').format('MM-DD-YYYY');
            // }
            // if (this.startDate) {
            //   this.monthCreate = moment(this.paramsMonthBefore.monthFromCreate,'YYYYMM').format('YYYYMM');
            // }else{
            //   this.monthCreate = moment().format('YYYYMM');
            // }
            //  if (this.router.getCurrentNavigation().extras.state && this.router.getCurrentNavigation().extras.state.monthFromCreate) {
            //    const paramMonth = this.router.getCurrentNavigation().extras.state.monthFromCreate;
            //    console.log('//////',paramMonth);
            //   }
        }
        ngOnInit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                // localStorage.setItem('monthBack', moment().format('YYYYMM'));
                this.monthCreate = Object(_services_utils_moment_moment_service__WEBPACK_IMPORTED_MODULE_1__["moment"])().format('YYYYMM');
                const historyState = history.state;
                console.log('////', historyState);
                if (historyState.monthFromCreate) {
                    this.monthCreate = historyState.monthFromCreate;
                }
                this.getUserInfo();
                // alert('sssss');
            });
        }
        setOpen(isOpen) {
            this.isModalOpen = isOpen;
        }
        presentAlert(v) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                const alert = yield this.alertController.create({
                    header: 'ต้องการยกเลิกแพลน',
                    message: `<span class="label"><B>${v.date}</B></span><br>${v.value}
      <br><span class="label">${v.custname}</span>
      <br><span class="label">${v.counterid} ${v.countername}</span>
      <br>${v.workfrom !== '' ? `<span class="label">เวลาปฏิบัติงาน ${v.workfrom} - ${v.workto}</span>` : ''}
      <br>${v.otfrom !== '' ? `<span class="label">เวลาทำ OT ${v.otfrom}- ${v.otto}</span>` : ``}`,
                    buttons: [
                        {
                            text: 'ปิด',
                            role: 'cancel',
                            handler: () => {
                                this.handlerMessage = 'Alert canceled';
                            },
                        },
                        {
                            text: 'ยืนยัน',
                            role: 'confirm',
                            handler: () => {
                                console.log(v);
                                // this.statusWorkspace = 'COMPLETED';
                                this.cancelPlan(v);
                                // this.presentAlertConfirm();
                                this.handlerMessage = 'Alert confirmed';
                            },
                        },
                    ],
                });
                yield alert.present();
            });
        }
        presentAlert2() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                const alert = yield this.alertController.create({
                    header: 'CSG PLAN',
                    // subHeader: 'Important message',
                    message: 'ท่านต้องการยืนยันการส่งแพลนเดือนนี้ให้ CM ใช่หรือไม่',
                    buttons: [
                        {
                            text: 'ไม่',
                            role: 'cancel',
                            handler: () => {
                                this.handlerMessage = 'Alert canceled';
                            },
                        },
                        {
                            text: 'ยืนยัน',
                            role: 'confirm',
                            handler: () => {
                                this.updateWorkplanstatus();
                                // this.statusWorkspace = 'COMPLETED';
                                // this.cancelPlan(v);
                                // this.presentAlertConfirm();
                                // this.handlerMessage = 'Alert confirmed';
                            },
                        },
                    ],
                });
                yield alert.present();
            });
        }
        updateWorkplanstatus() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                console.log(this.monthChange);
                const body = {
                    period: this.monthChange,
                    emp_id: this.empId,
                    status_old: 'N',
                    status_new: 'W',
                };
                console.log(body);
                const callApi = yield this.api.updateWorkPlanStatusCretae(body);
                console.log('???????', callApi);
                if (callApi.result === true) {
                    const alert = yield this.alertController.create({
                        cssClass: 'alert_success',
                        // header: 'ยืนยันการสร้างแพลนหรือไม่',
                        message: `<img src="${callApi.message === 'Success' ? ' ../../../assets/images/csg-plan/success.svg " alt="g-maps" style="border-radius: 2px"> <br>ส่งแพลนสำเร็จ' : '../../../assets/images/csg-plan/error.png" alt="g-maps" style="border-radius: 2px"> <br> ส่งแพลนไม่สำเร็จ'}`,
                    });
                    yield alert.present();
                    setTimeout(() => {
                        alert.dismiss();
                        // this.navCtrl.back();
                        // this.router.navigate(['csg-plan']);
                    }, 2000);
                }
                else {
                    alert('ไม่ได้');
                }
                const callApiPlan = yield this.api.getCSGPlan(this.empId, this.monthChange);
                this.g1_desc = callApiPlan.g1_desc;
                this.g1_color = callApiPlan.g1_color;
                this.g2_desc = callApiPlan.g2_desc;
                this.g2_color = callApiPlan.g2_color;
                this.g3_desc = callApiPlan.g3_desc;
                this.g3_color = callApiPlan.g3_color;
                this.status_plan = callApiPlan.status_plan;
            });
        }
        ;
        ionViewDidEnter() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                console.clear();
                // const monthV = moment().format('YYYYMM');
                const historyState = history.state;
                // this.monthChange = this.monthCreate;
                console.log(historyState.monthFromCreate);
                if (historyState.monthFromCreate) {
                    this.startDate = Object(_services_utils_moment_moment_service__WEBPACK_IMPORTED_MODULE_1__["moment"])(historyState.monthFromCreate, 'YYYYMM').format('MM-DD-YYYY');
                    this.monthCreate = historyState.monthFromCreate;
                }
                this.monthChange = this.monthCreate;
                console.log(this.monthCreate);
                // this.startDate =  moment(this.monthChange,'YYYYMM').format('MM-DD-YYYY');
                console.log(this.startDate);
                const callApiH = yield this.api.getHolidayCSGPlan(this.monthCreate);
                this.dataHolidayAPI = callApiH.datas;
                console.log('----', this.dataHolidayAPI);
                this.m = Object(_services_utils_moment_moment_service__WEBPACK_IMPORTED_MODULE_1__["moment"])().format('MM');
                const monthC = +this.m - 1;
                this.y = Object(_services_utils_moment_moment_service__WEBPACK_IMPORTED_MODULE_1__["moment"])().format('YYYY');
                this.d = Object(_services_utils_moment_moment_service__WEBPACK_IMPORTED_MODULE_1__["moment"])().format('D');
                console.log(this.y, monthC, this.d);
                this.dayStartFromM = monthC;
                this.dayStartFromD = +this.d;
                this.dayStartFromY = +this.y;
                console.log(this.dayStartFromY, this.dayStartFromM);
                // const monthV = this.monthCreate;
                const monthV = this.monthCreate;
                try {
                    console.log("-----", this.empId, monthV);
                    // this.startDate =  moment(monthV,'YYYYMM').format('MM-DD-YYYY');
                    const callApi = yield this.api.getCSGPlan(this.empId, monthV);
                    // const callDayPlanApi = await this.api.getDayPlanCSGPlan(monthV, this.empId);
                    // trebTreb 16-07-2021
                    //  this.dataCheckStatus = {
                    //    F1: 'G1',
                    //    F2: '2',
                    //  };
                    console.log('???????', callApi.g1_desc);
                    this.g1_desc = callApi.g1_desc;
                    this.g1_color = callApi.g1_color;
                    this.g2_desc = callApi.g2_desc;
                    this.g2_color = callApi.g2_color;
                    this.g3_desc = callApi.g3_desc;
                    this.g3_color = callApi.g3_color;
                    this.status_plan = callApi.status_plan;
                    this.dataAssigndate = callApi.datas;
                    console.log(this.dataAssigndate);
                    // this.dataAssigndate = callDayPlanApi.datas;
                    // trebTreb 16-07-2021
                    this.loadData = this.getDataDateM(this.dataAssigndate);
                    console.log('loadData', this.loadData);
                    for (let [index, item] of this.loadData.entries()) {
                        const date = (Object(_services_utils_moment_moment_service__WEBPACK_IMPORTED_MODULE_1__["moment"])(new Date()).format('DD/MM/YYYY'));
                        // console.log(this.loadData[index].date);
                        let date_res = Object(_services_utils_moment_moment_service__WEBPACK_IMPORTED_MODULE_1__["moment"])(this.loadData[index].date, "DD-MM-YYYY");
                        let this_day = Object(_services_utils_moment_moment_service__WEBPACK_IMPORTED_MODULE_1__["moment"])(date, "DD-MM-YYYY");
                        // console.log(date_res);
                        // console.log(this_day);
                        const diff = date_res.diff(this_day, "days");
                        const days = diff;
                        // console.log(days);
                        // if (days < 0) {
                        this.loadData[index].cssClass = days < 0 ? `${this.loadData[index].cssClass} oct` : `${this.loadData[index].cssClass}`;
                        // }else{
                        // }
                    }
                    this.optionsMulti = {
                        from: new Date(2000, 0, 1),
                        // from: new Date(this.dayStartFromY, this.dayStartFromM, this.dayStartFromD),
                        monthFormat: 'ปี YYYY เดือน MMM',
                        monthPickerFormat: ['ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย.', 'ก.ค.', 'ส.ค.', 'ก.ย.', 'ต.ค.', 'พ.ย.', 'ธ.ค.'],
                        weekdays: ['อา', 'จ', 'อ', 'พ', 'พฤ', 'ศ', 'ส'],
                        weekStart: 0,
                        showToggleButtons: true,
                        showMonthPicker: true,
                        daysConfig: this.loadData,
                    };
                    this.getdetailDay(this.dataAssigndate);
                }
                catch (error) {
                    this.dataAssigndate = [];
                    this.dataAssigndate = [];
                }
                if (historyState.monthFromCreate) {
                    console.log('////////', historyState.monthFromCreate);
                    this.startDate = Object(_services_utils_moment_moment_service__WEBPACK_IMPORTED_MODULE_1__["moment"])(historyState.monthFromCreate, 'YYYYMM').format('MM-DD-YYYY');
                    this.monthCreate = historyState.monthFromCreate;
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
                this.empId = info === null || info === void 0 ? void 0 : info.emp_id;
            });
        }
        onDetial(item) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                console.log(item);
            });
        }
        getDataDateM(dataApi) {
            this.data = [];
            this.sumOt = 0;
            this.dataOtH = [];
            dataApi.forEach((e) => {
                this.sumOt = this.sumOt + e.sumot;
                const dateC = Object(_services_utils_moment_moment_service__WEBPACK_IMPORTED_MODULE_1__["moment"])(e.assigndate, 'DD/MM/YYYY').format(); //'MM-DD-YYYY');
                // console.log(e);
                this.data.push({
                    date: new Date(dateC),
                    // cssClass: e.worktype!='W1' ? 'custom-calendar danger' : 'custom-calendar normal',
                    cssClass: e.worktype === 'W1'
                        ? 'custom-calendar workday'
                        : e.worktype === 'V1'
                            ? 'custom-calendar offday'
                            : e.worktype === 'W2'
                                ? 'custom-calendar workholiday'
                                : e.worktype === 'LE'
                                    ? 'custom-calendar expected-holiday'
                                    : '',
                    // subTitle: `${e.worktype} ${e.otfrom !== '' ? 'OT' : ''}`,
                    subTitle: e.workfrom === '' ? `${e.worktype}` : `${e.workfrom} ${e.otfrom !== '' ? 'OT' : ''}`,
                });
            });
            let hour = 0;
            hour = this.sumOt / 60;
            let minute = 0;
            // console.log(this.sumOt);
            minute = this.sumOt % 60;
            let date_day = 0;
            date_day = Math.floor(hour / 8);
            let date_hour = 0;
            date_hour = hour % 8;
            this.dataOtH.push({ hour, minute, date_day });
            return this.data;
            // return [
            //   {
            //     date: new Date('2020-04-01'),
            //     cssClass: 'custom-calendar danger',
            //     subTitle: '*OT',
            //   },
            // ];
        }
        getEventForMonths(events) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                // console.log(events.newMonth.string);
                const formatDate = Object(_services_utils_moment_moment_service__WEBPACK_IMPORTED_MODULE_1__["moment"])(events.newMonth.string).format('YYYYMM');
                this.startDate = Object(_services_utils_moment_moment_service__WEBPACK_IMPORTED_MODULE_1__["moment"])(formatDate, 'YYYYMM').format('MM-DD-YYYY');
                console.log('////////', formatDate);
                // console.log(formatDate);
                const monthV = Object(_services_utils_moment_moment_service__WEBPACK_IMPORTED_MODULE_1__["moment"])().format('YYYYMM');
                this.monthCreate = formatDate;
                this.monthChange = this.monthCreate;
                if (formatDate === monthV) {
                    const callApi = yield this.api.getDayPlanCSGPlan(monthV, this.empId);
                    this.dataAssigndate = callApi.datas;
                    console.log(this.dataAssigndate);
                    this.g1_desc = callApi.g1_desc;
                    this.g1_color = callApi.g1_color;
                    this.g2_desc = callApi.g2_desc;
                    this.g2_color = callApi.g2_color;
                    this.g3_desc = callApi.g3_desc;
                    this.g3_color = callApi.g3_color;
                    this.status_plan = callApi.status_plan;
                    this.loadData = yield this.getDataDateM(this.dataAssigndate);
                    // console.log(this.loadData);
                }
                else {
                    const callApi = yield this.api.getDayPlanCSGPlan(formatDate, this.empId);
                    this.g1_desc = callApi.g1_desc;
                    this.g1_color = callApi.g1_color;
                    this.g2_desc = callApi.g2_desc;
                    this.g2_color = callApi.g2_color;
                    this.g3_desc = callApi.g3_desc;
                    this.g3_color = callApi.g3_color;
                    this.status_plan = callApi.status_plan;
                    this.dataAssigndate = callApi.datas;
                    this.loadData = yield this.getDataDateM(this.dataAssigndate);
                    console.log(this.loadData);
                }
                for (let [index, item] of this.loadData.entries()) {
                    const date = (Object(_services_utils_moment_moment_service__WEBPACK_IMPORTED_MODULE_1__["moment"])(new Date()).format('DD/MM/YYYY'));
                    console.log(this.loadData[index].date);
                    let date_res = Object(_services_utils_moment_moment_service__WEBPACK_IMPORTED_MODULE_1__["moment"])(this.loadData[index].date, "DD-MM-YYYY");
                    let this_day = Object(_services_utils_moment_moment_service__WEBPACK_IMPORTED_MODULE_1__["moment"])(date, "DD-MM-YYYY");
                    console.log(date_res);
                    console.log(this_day);
                    const diff = date_res.diff(this_day, "days");
                    const days = diff;
                    console.log(days);
                    // if (days < 0) {
                    this.loadData[index].cssClass = days < 0 ? `${this.loadData[index].cssClass} oct` : `${this.loadData[index].cssClass}`;
                    // }else{
                    // }
                }
                this.optionsMulti = {
                    from: new Date(2000, 0, 1),
                    monthFormat: 'ปี YYYY เดือน MMM',
                    monthPickerFormat: ['ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย.', 'ก.ค.', 'ส.ค.', 'ก.ย.', 'ต.ค.', 'พ.ย.', 'ธ.ค.'],
                    weekdays: ['อา', 'จ', 'อ', 'พ', 'พฤ', 'ศ', 'ส'],
                    weekStart: 0,
                    showToggleButtons: true,
                    showMonthPicker: true,
                    daysConfig: this.loadData,
                };
                // cssClass: e.worktype!='W1' ? 'custom-calendar danger' : 'custom-calendar normal',
                console.log(this.dataAssigndate);
                this.getdetailDay(this.dataAssigndate);
                // this.editValue()
            });
        }
        getdetailDay(data) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                console.log(data);
                const valToMonths = [];
                for (let index = 0; index < this.dataAssigndate.length; index++) {
                    // for (let [index, item]  of this.loadData.entries()) {
                    const date = (Object(_services_utils_moment_moment_service__WEBPACK_IMPORTED_MODULE_1__["moment"])(new Date()).format('DD/MM/YYYY'));
                    // console.log(this.dataAssigndate[index].assigndate);
                    let date_res = Object(_services_utils_moment_moment_service__WEBPACK_IMPORTED_MODULE_1__["moment"])(this.dataAssigndate[index].assigndate, "DD-MM-YYYY");
                    let this_day = Object(_services_utils_moment_moment_service__WEBPACK_IMPORTED_MODULE_1__["moment"])(date, "DD-MM-YYYY");
                    // console.log(date_res);
                    // console.log(this_day);
                    const diff = date_res.diff(this_day, "days");
                    const days = diff;
                    // console.log(days);
                    // if (days < 0) {
                    this.dataAssigndate[index].typecancel = days < 0 ? `N` : `Y`;
                    // }else{
                    // }
                    // }
                    // console.log(this.dataAssigndate[index]);
                    valToMonths.push({
                        image: data[index].worktype === 'W1'
                            ? 'assets/images/csg-plan/calendar_w.png'
                            : data[index].worktype === 'W2'
                                ? 'assets/images/csg-plan/calendar_h.png'
                                : data[index].worktype === 'V1'
                                    ? 'assets/images/csg-plan/calendar_o.png'
                                    : data[index].worktype === 'LE'
                                        ? 'assets/images/csg-plan/calendar_o3.png'
                                        : 'assets/images/csg-plan/calendar_s.svg',
                        date: `${data[index].date_name.trim()} ${data[index].assigndate}`,
                        value: data[index].workdesc,
                        stateOt: data[index].sumot !== 0 && data[index].sumot != null ? 'Y' : 'N',
                        worktype: data[index].worktype,
                        workfrom: data[index].workfrom !== ''
                            ? data[index].workfrom.substring(0, 2) + '.' + data[index].workfrom.substring(2, 4)
                            : data[index].workfrom,
                        workto: data[index].workto !== ''
                            ? data[index].workto.substring(0, 2) + '.' + data[index].workto.substring(2, 4)
                            : data[index].workto,
                        otfrom: data[index].otfrom !== ''
                            ? data[index].otfrom.substring(0, 2) + '.' + data[index].otfrom.substring(2, 4)
                            : data[index].otfrom,
                        otto: data[index].otto !== ''
                            ? data[index].otto.substring(0, 2) + '.' + data[index].otto.substring(2, 4)
                            : data[index].otto,
                        custid: data[index].custid,
                        custname: data[index].custname,
                        counterid: data[index].counterid,
                        countername: data[index].countername,
                        typecancel: data[index].typecancel,
                        satusleave: data[index].status_leave,
                    });
                }
                console.log(valToMonths);
                this.values = valToMonths;
                return this.values;
            });
        }
        onChanges($event) {
            // console.log($event);
        }
        cancelPlan(v) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                console.log(Object(_services_utils_moment_moment_service__WEBPACK_IMPORTED_MODULE_1__["moment"])(v.date, 'DDMMYYYY').format('YYYYMM'));
                const dataset = [];
                console.log(v);
                dataset.push({
                    // flagdesc: s.type,
                    assigndate: v.date,
                    custid: v.custid,
                    counterid: v.counterid,
                    yearmonth: Object(_services_utils_moment_moment_service__WEBPACK_IMPORTED_MODULE_1__["moment"])(v.date, 'DDMMYYYY').format('YYYYMM'),
                    csgid: this.empId,
                    timetype: '',
                    timefrom: '',
                    timeto: '',
                    timeotfrom: '',
                    timeotto: '',
                    worktype: ''
                });
                // console.log('////',this.dataSelectDay);
                console.log('////@@@@@', dataset);
                // }
                const body = { dataset };
                // console.log(body);
                const call = yield this.api.insertCreatePlanCSGPlan(body);
                console.log(call.error_message);
                console.log(call);
                //   // if (call.error_message === 'SUCCESS') {
                this.presentAlertConfirm(call);
                // this.alertSuccess(call);
                // }else{
                // }
                // this.navCtrl.back();
            });
        }
        presentAlertConfirm(v) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                this.statusWorkspace = 'COMPLETED';
                console.log(v);
                let alert;
                if (v.error_message === 'SUCCESS') {
                    alert = yield this.alertController.create({
                        header: 'แจ้งเตือน',
                        // subHeader: 'Important message',
                        cssClass: 'alert_success',
                        message: `<img src="../../../../assets/images/csg-plan/success.svg"> <br> ยกเลิกแพลนสำเร็จ`,
                    });
                    setTimeout(() => {
                        alert.dismiss();
                        // this.router.navigate(['csg-plan']);
                        this.ionViewDidEnter();
                    }, 2000);
                }
                else {
                    alert = yield this.alertController.create({
                        header: 'แจ้งเตือน',
                        // subHeader: 'Important message',
                        message: `ยกเลิกแพลนไม่สำเร็จ`,
                    });
                }
                yield alert.present();
            });
        }
        createPlan() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                // const navigationExtras: NavigationExtras = {
                //   state: { name: 'trebtreb' },
                // };
                // this.router.navigate(['csg-plan/create-plan'], navigationExtras);
                // this.router.navigate(['/home']);
                // await this.loading.present();
                // this.router.navigate(['csg-plan/create-plan']);
                const navigationExtras = {
                    state: { monthToCreate: this.monthChange }
                };
                console.log(this.monthChange);
                this.router.navigate(['csg-plan/create-plan'], navigationExtras);
            });
        }
        approverDetail(dataYearmonth, dataCSGID) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                const navigationExtras = {
                    state: { yearmonth: dataYearmonth, csgid: dataCSGID }
                };
                console.log(navigationExtras);
                this.router.navigate(['csg-plan/approver-detail'], navigationExtras);
            });
        }
        back() {
            this.router.navigate(['/home']);
        }
    }
    CsgPlanPage.ɵfac = function CsgPlanPage_Factory(t) { return new (t || CsgPlanPage)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_api_csg_plan_csg_plan_service__WEBPACK_IMPORTED_MODULE_4__["CsgPlanService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_utils_loading_loading_service__WEBPACK_IMPORTED_MODULE_7__["LoadingService"])); };
    CsgPlanPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CsgPlanPage, selectors: [["app-csg-plan"]], decls: 44, vars: 25, consts: [[1, "ion-no-border"], ["slot", "start"], ["defaultHref", "/home"], ["fullscreen", "true"], ["slot", "fixed", 3, "ionRefresh"], [1, "card-list"], ["lines", "none"], [1, "status", 3, "click"], [1, "status__step"], [3, "ngClass"], [1, "status__item--image"], [3, "name", "color"], ["name", "arrow-forward-outline", 1, "arrow"], [1, "calendar", "calendar-plan"], [3, "type", "ngModel", "options", "format", "ngModelChange", "monthChange", 4, "ngIf"], [4, "ngFor", "ngForOf"], ["vertical", "bottom", "horizontal", "end", "slot", "fixed"], ["class", "fl mr-5 dt2", 3, "click", 4, "ngIf"], [1, "fl", "dt2", 3, "click"], ["name", "create-outline"], [3, "type", "ngModel", "options", "format", "ngModelChange", "monthChange"], [3, "src"], [1, "label"], [1, "textRight"], ["class", "label", 4, "ngIf"], ["class", "label c-red", 4, "ngIf"], ["slot", "end", "class", "ot", 4, "ngIf"], [4, "ngIf"], [1, "label", "c-red"], ["slot", "end", 1, "ot"], ["color", "danger", 3, "click"], ["color", "danger", "disabled", ""], [1, "fl", "mr-5", "dt2", 3, "click"], ["name", "send-outline"]], template: function CsgPlanPage_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-header", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-toolbar");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "ion-buttons", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "ion-back-button", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "ion-title");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "\u0E41\u0E1E\u0E25\u0E19\u0E07\u0E32\u0E19");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "ion-content", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "ion-refresher", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ionRefresh", function CsgPlanPage_Template_ion_refresher_ionRefresh_7_listener($event) { return ctx.doRefresh($event); });
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "ion-refresher-content");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "ion-list", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "ion-item-sliding");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "ion-label");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "\u0E02\u0E31\u0E49\u0E19\u0E15\u0E2D\u0E19\u0E01\u0E32\u0E23\u0E2D\u0E19\u0E38\u0E21\u0E31\u0E15\u0E34");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "section", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CsgPlanPage_Template_section_click_14_listener() { return ctx.status_plan === "X" ? "" : ctx.status_plan === "N" ? "" : ctx.approverDetail(ctx.monthCreate, ctx.empId); });
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "ion-icon", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "label");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "ion-icon", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](25, "ion-icon", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "label");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](29, "ion-icon", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](32, "ion-icon", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "label");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "div", 13);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](36, CsgPlanPage_ion_calendar_36_Template, 1, 4, "ion-calendar", 14);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "div", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "ion-list", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](39, CsgPlanPage_ion_item_sliding_39_Template, 20, 12, "ion-item-sliding", 15);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "ion-fab", 16);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](41, CsgPlanPage_ion_fab_button_41_Template, 2, 0, "ion-fab-button", 17);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "ion-fab-button", 18);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CsgPlanPage_Template_ion_fab_button_click_42_listener() { return ctx.createPlan(); });
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](43, "ion-icon", 19);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](16);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](17, _c0, ctx.status_plan === "X" ? true : false));
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("name", ctx.status_plan === "X" ? "time" : ctx.status_plan === "N" ? "time" : "checkmark-circle")("color", ctx.status_plan === "X" ? "warning" : ctx.status_plan === "N" ? "warning" : "success");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.g1_desc);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](19, _c1));
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](20, _c0, ctx.status_plan === "X" ? true : ctx.status_plan === "N" ? true : false));
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("name", ctx.status_plan === "S" ? "checkmark-circle" : "time")("color", ctx.status_plan === "N" ? "warning" : ctx.status_plan === "W" ? "warning" : ctx.status_plan === "S" ? "success" : "warning");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.g2_desc);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](22, _c1));
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](23, _c0, ctx.status_plan === "S" ? false : true));
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("name", ctx.status_plan === "S" ? "checkmark-circle" : "time")("color", ctx.status_plan === "S" ? "success" : "warning");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.g3_desc);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.loadData);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.values);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.status_plan === "N");
            }
        }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonRefresher"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonRefresherContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonList"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonItemSliding"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonLabel"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonFab"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonFabButton"], ion2_calendar__WEBPACK_IMPORTED_MODULE_9__["CalendarComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonThumbnail"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonItemOptions"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonItemOption"]], styles: ["ion-header[_ngcontent-%COMP%] {\n  --ion-background-color: #ffffff;\n}\nion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%] {\n  --border-color: transparent;\n  --border-style: none !important;\n}\nion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   ion-title[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 600;\n}\nion-content[_ngcontent-%COMP%] {\n  --ion-background-color: #f5f5f5;\n}\nion-content[_ngcontent-%COMP%]   .calendar[_ngcontent-%COMP%] {\n  margin: 8px;\n  padding: 8px;\n  background: #ffffff;\n  border-radius: 8px;\n}\nion-content[_ngcontent-%COMP%]   .card-list[_ngcontent-%COMP%] {\n  margin: 8px;\n}\nion-content[_ngcontent-%COMP%]   .card-list[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%] {\n  --background: #ffffff;\n  --highlight-color-focused: transparent;\n  border-radius: 10px;\n  margin-bottom: 6px;\n  box-shadow: 0 1.2em 1.5em -0.9em #eeeeee;\n}\nion-content[_ngcontent-%COMP%]   .card-list[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-thumbnail[_ngcontent-%COMP%] {\n  --border-radius: 4px;\n  padding: 8px;\n}\nion-content[_ngcontent-%COMP%]   .card-list[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\nion-content[_ngcontent-%COMP%]   .card-list[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   p.label[_ngcontent-%COMP%] {\n  color: #111111;\n  font-size: 0.9rem;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: normal;\n  margin: 4px 0;\n}\nion-content[_ngcontent-%COMP%]   .card-list[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   p.price[_ngcontent-%COMP%] {\n  color: #111111;\n  font-size: 0.8rem;\n  font-weight: 600;\n  margin: 4px 0;\n}\nion-content[_ngcontent-%COMP%]   .card-list[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   p.price[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: red;\n  font-size: 1rem;\n}\nion-content[_ngcontent-%COMP%]   .card-list[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   p.ot[_ngcontent-%COMP%] {\n  text-align: right;\n}\nion-content[_ngcontent-%COMP%]   .textRight[_ngcontent-%COMP%] {\n  float: right;\n}\nion-content[_ngcontent-%COMP%]   ion-thumbnail[_ngcontent-%COMP%] {\n  margin-top: 0px;\n}\n.img-alert[_ngcontent-%COMP%] {\n  width: 40px;\n}\n.mt-5[_ngcontent-%COMP%] {\n  margin-top: 5px;\n}\n.alert-message.sc-ion-alert-md[_ngcontent-%COMP%] {\n  max-height: 240px;\n  font-size: 16px;\n  text-align: center;\n}\n.bb[_ngcontent-%COMP%] {\n  width: 30%;\n  text-align: center;\n}\n.fl[_ngcontent-%COMP%] {\n  float: left;\n}\n.mr-5[_ngcontent-%COMP%] {\n  margin-right: 5px;\n}\n.dt[_ngcontent-%COMP%] {\n  opacity: 0.25;\n}\n.dt2[_ngcontent-%COMP%] {\n  opacity: 0.9;\n}\n.status[_ngcontent-%COMP%] {\n  background: #ffffff;\n  padding: 16px;\n  border-radius: 8px;\n  box-shadow: 0px 2px 25px -12px rgba(0, 0, 0, 0.15);\n}\n.status[_ngcontent-%COMP%]   .status__step[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: space-around;\n  align-items: center;\n  font-size: 0.75rem;\n}\n.status[_ngcontent-%COMP%]   .status__step[_ngcontent-%COMP%]   .status__item.disable[_ngcontent-%COMP%] {\n  opacity: 0.25;\n}\n.status[_ngcontent-%COMP%]   .status__step[_ngcontent-%COMP%]   .status__item[_ngcontent-%COMP%]   .status__item--image[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: -10px;\n}\n.status[_ngcontent-%COMP%]   .status__step[_ngcontent-%COMP%]   .status__item[_ngcontent-%COMP%]   .status__item--image[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 45px;\n  object-fit: cover;\n  border-radius: 50%;\n}\n.status[_ngcontent-%COMP%]   .status__step[_ngcontent-%COMP%]   .status__item[_ngcontent-%COMP%]   .status__item--text[_ngcontent-%COMP%] {\n  width: 65px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.status[_ngcontent-%COMP%]   .status__step[_ngcontent-%COMP%]   .status__item[_ngcontent-%COMP%]   .status__item--text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  text-align: center;\n  font-weight: 500;\n  margin: 0;\n}\n.status[_ngcontent-%COMP%]   .status__step[_ngcontent-%COMP%]   .status__item[_ngcontent-%COMP%]   .status__item--icon[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 50px;\n}\n.status[_ngcontent-%COMP%]   .status__step[_ngcontent-%COMP%]   .status__item[_ngcontent-%COMP%]   .status__item--icon[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n}\n.status[_ngcontent-%COMP%]   .status__step[_ngcontent-%COMP%]   .status__item[_ngcontent-%COMP%]   .status__item--icon[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  font-weight: 500;\n  margin: 0;\n  margin-bottom: 6px;\n}\n.cancel[_ngcontent-%COMP%] {\n  margin: 10px 10px;\n  padding: 16px;\n}\n.c-red[_ngcontent-%COMP%] {\n  color: red !important;\n}"] });
    return CsgPlanPage;
})();


/***/ })

}]);