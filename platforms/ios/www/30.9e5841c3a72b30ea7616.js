(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[30],{

/***/ "THOt":
/*!********************************************************************!*\
  !*** ./src/app/pages/guest-plan/create-plan/create-plan.module.ts ***!
  \********************************************************************/
/*! exports provided: CreatePlanPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatePlanPageModule", function() { return CreatePlanPageModule; });
/* harmony import */ var ion2_calendar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ion2-calendar */ "zTSL");
/* harmony import */ var ion2_calendar__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ion2_calendar__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _create_plan_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./create-plan-routing.module */ "gU/C");
/* harmony import */ var _create_plan_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./create-plan.page */ "nUNW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");







let CreatePlanPageModule = /*@__PURE__*/ (() => {
    class CreatePlanPageModule {
    }
    CreatePlanPageModule.ɵfac = function CreatePlanPageModule_Factory(t) { return new (t || CreatePlanPageModule)(); };
    CreatePlanPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: CreatePlanPageModule });
    CreatePlanPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _create_plan_routing_module__WEBPACK_IMPORTED_MODULE_4__["CreatePlanPageRoutingModule"],
                ion2_calendar__WEBPACK_IMPORTED_MODULE_0__["CalendarModule"]
            ]] });
    return CreatePlanPageModule;
})();
(function () {
    (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](CreatePlanPageModule, { declarations: [_create_plan_page__WEBPACK_IMPORTED_MODULE_5__["CreatePlanPage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _create_plan_routing_module__WEBPACK_IMPORTED_MODULE_4__["CreatePlanPageRoutingModule"],
            ion2_calendar__WEBPACK_IMPORTED_MODULE_0__["CalendarModule"]] });
})();


/***/ }),

/***/ "gU/C":
/*!****************************************************************************!*\
  !*** ./src/app/pages/guest-plan/create-plan/create-plan-routing.module.ts ***!
  \****************************************************************************/
/*! exports provided: CreatePlanPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatePlanPageRoutingModule", function() { return CreatePlanPageRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _create_plan_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-plan.page */ "nUNW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    {
        path: '',
        component: _create_plan_page__WEBPACK_IMPORTED_MODULE_1__["CreatePlanPage"]
    }
];
let CreatePlanPageRoutingModule = /*@__PURE__*/ (() => {
    class CreatePlanPageRoutingModule {
    }
    CreatePlanPageRoutingModule.ɵfac = function CreatePlanPageRoutingModule_Factory(t) { return new (t || CreatePlanPageRoutingModule)(); };
    CreatePlanPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: CreatePlanPageRoutingModule });
    CreatePlanPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
    return CreatePlanPageRoutingModule;
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](CreatePlanPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "nUNW":
/*!******************************************************************!*\
  !*** ./src/app/pages/guest-plan/create-plan/create-plan.page.ts ***!
  \******************************************************************/
/*! exports provided: CreatePlanPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatePlanPage", function() { return CreatePlanPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _guest_create_plan_menu_popover_guest_create_plan_menu_popover_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../guest-create-plan-menu-popover/guest-create-plan-menu-popover.component */ "y0xa");
/* harmony import */ var _guest_plan_popover_guest_plan_popover_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../guest-plan-popover/guest-plan-popover.component */ "w0G3");
/* harmony import */ var _services_utils_moment_moment_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../services/utils/moment/moment.service */ "9cE+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_storage_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../services/storage/storage.service */ "E2f4");
/* harmony import */ var _services_api_guest_plan_guest_plan_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../services/api/guest-plan/guest-plan.service */ "1wag");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ion2_calendar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ion2-calendar */ "zTSL");
/* harmony import */ var ion2_calendar__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(ion2_calendar__WEBPACK_IMPORTED_MODULE_10__);











function CreatePlanPage_span_13_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " \u0E01\u0E23\u0E38\u0E13\u0E32\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E23\u0E49\u0E32\u0E19\u0E04\u0E49\u0E32 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }
}
function CreatePlanPage_ion_card_15_span_6_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "\u0E01\u0E23\u0E38\u0E13\u0E32\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E40\u0E04\u0E32\u0E19\u0E4C\u0E40\u0E15\u0E2D\u0E23\u0E4C");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }
}
function CreatePlanPage_ion_card_15_Template(rf, ctx) {
    if (rf & 1) {
        const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "ion-item", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CreatePlanPage_ion_card_15_Template_ion_item_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r11.popoverShopMenu("counter"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "\u0E40\u0E04\u0E32\u0E19\u0E4C\u0E40\u0E15\u0E2D\u0E23\u0E4C");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, CreatePlanPage_ion_card_15_span_6_Template, 2, 0, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r1.saveData.counter.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r1.saveData.counter.name, " ");
    }
}
function CreatePlanPage_div_20_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "div", 30);
    }
}
function CreatePlanPage_div_21_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "div", 31);
    }
}
function CreatePlanPage_div_22_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "div", 32);
    }
}
function CreatePlanPage_ion_button_32_Template(rf, ctx) {
    if (rf & 1) {
        const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CreatePlanPage_ion_button_32_Template_ion_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r13.allSelect(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E27\u0E31\u0E19\u0E17\u0E33\u0E07\u0E32\u0E19\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }
}
function CreatePlanPage_ion_button_33_Template(rf, ctx) {
    if (rf & 1) {
        const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-button", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CreatePlanPage_ion_button_33_Template_ion_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r15.reStartDays(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "\u0E40\u0E04\u0E25\u0E35\u0E22\u0E23\u0E4C\u0E04\u0E48\u0E32");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }
}
function CreatePlanPage_div_34_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "\u0E40\u0E2B\u0E25\u0E37\u0E2D\u0E27\u0E31\u0E19\u0E2B\u0E22\u0E38\u0E14\u0E07\u0E32\u0E19\u0E2D\u0E35\u0E01 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, " \u0E27\u0E31\u0E19");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r7.countSpecial);
    }
}
function CreatePlanPage_div_35_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "\u0E40\u0E2B\u0E25\u0E37\u0E2D\u0E27\u0E31\u0E19 Holiday \u0E2D\u0E35\u0E01 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "span", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, " \u0E27\u0E31\u0E19");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r8.countHoliday);
    }
}
function CreatePlanPage_ion_calendar_37_Template(rf, ctx) {
    if (rf & 1) {
        const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-calendar", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("monthChange", function CreatePlanPage_ion_calendar_37_Template_ion_calendar_monthChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r17.getHolidayForMonths($event); })("change", function CreatePlanPage_ion_calendar_37_Template_ion_calendar_change_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r18); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r19.onChange2($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("type", ctx_r9.type)("options", ctx_r9.optionsMulti2)("format", "DD-MM-YYYY");
    }
}
_services_utils_moment_moment_service__WEBPACK_IMPORTED_MODULE_3__["moment"].locale('th');
let CreatePlanPage = /*@__PURE__*/ (() => {
    class CreatePlanPage {
        constructor(storage, api, router, createPlanPopover, navCtrl, csgPlanPopover, alertController) {
            this.storage = storage;
            this.api = api;
            this.router = router;
            this.createPlanPopover = createPlanPopover;
            this.navCtrl = navCtrl;
            this.csgPlanPopover = csgPlanPopover;
            this.alertController = alertController;
            this.dataHoliday = [];
            this.tap = 'WorkDay';
            this.status = 'W';
            this.flagcount = 'Y';
            this.saveData = { shop: { value: null, name: null }, counter: { value: null, name: null } };
            this.daysConfig = [];
            this.workday = [];
            this.dataSelectDay = [];
            const state = this.router.getCurrentNavigation().extras.state;
            console.log(state);
            this.params = state;
        }
        ngOnInit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                this.getUserInfo();
                // this.loadData = this.getDataDateM(this.dataAssigndate)
                this.monthCreate = Object(_services_utils_moment_moment_service__WEBPACK_IMPORTED_MODULE_3__["moment"])().format('YYYYMM');
                this.m = Object(_services_utils_moment_moment_service__WEBPACK_IMPORTED_MODULE_3__["moment"])().format('MM');
                this.MDayCheck = this.m;
                const monthC = +this.m - 1;
                this.y = Object(_services_utils_moment_moment_service__WEBPACK_IMPORTED_MODULE_3__["moment"])().format('YYYY');
                this.d = Object(_services_utils_moment_moment_service__WEBPACK_IMPORTED_MODULE_3__["moment"])().format('D');
                console.log(this.y, monthC, this.d);
                // this.dayStart = this.moment.daysBefore('1','M');
                this.dayStartFromM = monthC;
                this.dayStartFromD = +this.d;
                this.dayStartFromY = +this.y;
                // const dayStartFrom = this.dayStart.substr(0, 5) + monthC + this.dayStart.substr(4);
                console.log(this.dayStartFromY, this.dayStartFromM);
                const callApi = yield this.api.getHolidayCSGPlan(this.monthCreate);
                this.dataHolidayAPI = callApi.datas;
                console.log(this.dataHolidayAPI);
                const callApiCountHoliday = yield this.api.getCountHoliday(this.monthCreate, this.empId);
                this.countHolidayAPI = callApiCountHoliday.datas;
                this.countSpecial = this.countHolidayAPI[0].special;
                this.countHoliday = this.countHolidayAPI[0].holiday;
                console.log(this.countHolidayAPI);
                const gg = 5;
                this.loadDataHoliday = this.getDataHoliDay(this.dataHolidayAPI);
                this.optionsMulti2 = {
                    from: new Date(this.dayStartFromY, this.dayStartFromM, this.dayStartFromD),
                    monthFormat: 'ปี YYYY เดือน MMM',
                    monthPickerFormat: ['ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย.', 'ก.ค.', 'ส.ค.', 'ก.ย.', 'ต.ค.', 'พ.ย.', 'ธ.ค.'],
                    weekdays: ['อา', 'จ', 'อ', 'พ', 'พฤ', 'ศ', 'ส'],
                    weekStart: 0,
                    showToggleButtons: true,
                    showMonthPicker: true,
                    // pickMode: 'multi',
                    daysConfig: this.loadDataHoliday,
                };
            });
        }
        getUserInfo() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                const info = yield this.storage.get('USER_INFO');
                this.empId = info === null || info === void 0 ? void 0 : info.emp_id;
            });
        }
        segmentChanged(ev) {
            console.log(ev.detail.value);
            this.tap = ev.detail.value;
        }
        getDataHoliDay(dataApi) {
            this.dataHoliday = [];
            // console.log(dataApi);
            dataApi.forEach((e) => {
                // console.log(e);
                // const dateC = this.moment.formatDate(e.date, 'MM-DD-YYYY', 'th', 'DD/MM/YYYY');
                const dateC = Object(_services_utils_moment_moment_service__WEBPACK_IMPORTED_MODULE_3__["moment"])(e.date, 'DD/MM/YYYY').format('MM-DD-YYYY');
                // console.log(e.dayofweek+"///"+dateC);
                if (e.iccholiday === '1' && e.dayofweek !== '1' && e.dayofweek !== '7') {
                    this.dataHoliday.push({
                        date: new Date(dateC),
                        cssClass: 'custom-calendar holiday',
                    });
                }
                // this.data.push({
                //   date: new Date(dateC),
                //   cssClass: e.worktype!='W1' ? 'custom-calendar danger' : 'custom-calendar normal',
                //   subTitle: e.sumot === 0 ? null : '*OT',
                // })
            });
            // console.log(this.dataHoliday);
            return this.dataHoliday;
        }
        getHolidayForMonths(events) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                this.reStartDays();
                this.dataHoliday = [];
                console.log(events.newMonth.string);
                // this.monthCreate = this.moment.formatDate(events.newMonth.string, 'YYYYMM');
                this.monthCreate = Object(_services_utils_moment_moment_service__WEBPACK_IMPORTED_MODULE_3__["moment"])(events.newMonth.string).format('YYYYMM');
                const callApiCountHoliday = yield this.api.getCountHoliday(this.monthCreate, this.empId);
                this.countHolidayAPI = callApiCountHoliday.datas;
                console.log(this.monthCreate);
                console.log(this.countHolidayAPI);
                this.MDayCheck = Object(_services_utils_moment_moment_service__WEBPACK_IMPORTED_MODULE_3__["moment"])(events.newMonth.string).format('MM');
                const callApi = yield this.api.getHolidayCSGPlan(this.monthCreate);
                this.dataHolidayAPI = callApi.datas;
                // this.loadData = this.getDataDateM(this.dataHolidayAPI)
                console.log(this.loadDataHoliday);
                const valToMonths = [];
                // cssClass: e.worktype!='W1' ? 'custom-calendar danger' : 'custom-calendar normal',
                console.log(this.dataHolidayAPI);
                for (const index in this.dataHolidayAPI.length) {
                    if (this.dataHolidayAPI[index].iccholiday === '1' &&
                        this.dataHolidayAPI[index].dayofweek !== '1' &&
                        this.dataHolidayAPI[index].dayofweek !== '7') {
                        const dateC = Object(_services_utils_moment_moment_service__WEBPACK_IMPORTED_MODULE_3__["moment"])(this.dataHolidayAPI[index].date, 'DD/MM/YYYY').format('MM-DD-YYYY');
                        this.dataHoliday.push({
                            date: new Date(dateC),
                            cssClass: 'custom-calendar holiday',
                        });
                    }
                }
                console.log(this.daysConfig);
                this.optionsMulti2 = {
                    from: new Date(this.dayStartFromY, this.dayStartFromM, this.dayStartFromD),
                    monthFormat: 'ปี YYYY เดือน MMM',
                    monthPickerFormat: ['ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย.', 'ก.ค.', 'ส.ค.', 'ก.ย.', 'ต.ค.', 'พ.ย.', 'ธ.ค.'],
                    weekdays: ['อา', 'จ', 'อ', 'พ', 'พฤ', 'ศ', 'ส'],
                    weekStart: 0,
                    showToggleButtons: true,
                    showMonthPicker: true,
                    // pickMode: 'multi',
                    daysConfig: this.daysConfig,
                };
                // this.values = valToMonths;
                return this.dataHoliday;
                // this.editValue()
            });
        }
        changeBT(v) {
            this.status = v.detail.value;
            console.log(v);
        }
        hhh(ev) {
            console.log(ev);
            this.ggg = ev.detail.value;
        }
        onChange2(ev) {
            console.log('onChange2', ev);
            // console.clear();
            const value = Object(_services_utils_moment_moment_service__WEBPACK_IMPORTED_MODULE_3__["moment"])(ev._d, 'DD/MM/YYYY').format('YYYY-MM-DD');
            const MCheck = Object(_services_utils_moment_moment_service__WEBPACK_IMPORTED_MODULE_3__["moment"])(ev._d, 'DD/MM/YYYY').format('MM');
            console.log(MCheck, this.MDayCheck);
            // this.dataSelectDay.push({
            //   day: valueDay,
            //   flag: this.status==="W"?'W1':this.status==="O"?'V1':''
            // })
            // console.log(this.dataSelectDay);
            if (this.daysConfig.length === 0) {
                const init = this.dataHoliday;
                for (const x of init) {
                    this.daysConfig.push(Object.assign(Object.assign({}, x), { date: Object(_services_utils_moment_moment_service__WEBPACK_IMPORTED_MODULE_3__["moment"])(x.date).format('YYYY-MM-DD') }));
                }
            }
            const searchIndex = this.daysConfig.findIndex((i) => i.date === value);
            console.log(this.status);
            if (searchIndex < 0) {
                this.daysConfig.push({
                    date: Object(_services_utils_moment_moment_service__WEBPACK_IMPORTED_MODULE_3__["moment"])(ev._d, 'DD/MM/YYYY').format('YYYY-MM-DD'),
                    cssClass: this.status === 'W'
                        ? 'custom-calendar workday'
                        : this.status === 'O'
                            ? 'custom-calendar offday'
                            : this.status === 'H'
                                ? 'custom-calendar holidaySelect'
                                : '',
                });
            }
            else if (searchIndex >= 0) {
                if (this.daysConfig[searchIndex].cssClass === 'custom-calendar workday' && this.status === 'W') {
                    this.daysConfig.splice(searchIndex, 1);
                    // console.log("LL1");
                }
                else if (this.daysConfig[searchIndex].cssClass === 'custom-calendar offday' && this.status === 'O') {
                    this.daysConfig.splice(searchIndex, 1);
                }
                else if (this.daysConfig[searchIndex].cssClass === 'custom-calendar holidaySelect' && this.status === 'H') {
                    this.daysConfig.splice(searchIndex, 1);
                }
                else if (this.daysConfig[searchIndex].cssClass === 'custom-calendar holiday' && this.status === 'W') {
                    this.daysConfig[searchIndex].cssClass = 'custom-calendar workday-holiday';
                }
                else if (this.daysConfig[searchIndex].cssClass === 'custom-calendar holiday' && this.status === 'O') {
                    this.daysConfig[searchIndex].cssClass = 'custom-calendar offday-holiday';
                }
                else if (this.daysConfig[searchIndex].cssClass === 'custom-calendar holiday' && this.status === 'H') {
                    this.daysConfig[searchIndex].cssClass = 'custom-calendar holiday-holiday';
                }
                else if (this.daysConfig[searchIndex].cssClass === 'custom-calendar workday-holiday' && this.status === 'W') {
                    this.daysConfig[searchIndex].cssClass = 'custom-calendar holiday';
                }
                else if (this.daysConfig[searchIndex].cssClass === 'custom-calendar offday-holiday' && this.status === 'O') {
                    this.daysConfig[searchIndex].cssClass = 'custom-calendar holiday';
                }
                else if (this.daysConfig[searchIndex].cssClass === 'custom-calendar holiday-holiday' && this.status === 'H') {
                    this.daysConfig[searchIndex].cssClass = 'custom-calendar holiday';
                }
                else if (this.daysConfig[searchIndex].cssClass === 'custom-calendar workday-holiday' && this.status === 'O') {
                    this.daysConfig[searchIndex].cssClass = 'custom-calendar offday-holiday';
                }
                else if (this.daysConfig[searchIndex].cssClass === 'custom-calendar offday-holiday' && this.status === 'W') {
                    this.daysConfig[searchIndex].cssClass = 'custom-calendar workday-holiday';
                }
                else if (this.daysConfig[searchIndex].cssClass === 'custom-calendar offday-holiday' && this.status === 'H') {
                    this.daysConfig[searchIndex].cssClass = 'custom-calendar holiday-holiday';
                }
                else if (this.daysConfig[searchIndex].cssClass === 'custom-calendar workday-holiday' && this.status === 'H') {
                    this.daysConfig[searchIndex].cssClass = 'custom-calendar holiday-holiday';
                }
                else if (this.daysConfig[searchIndex].cssClass === 'custom-calendar holiday-holiday' && this.status === 'W') {
                    this.daysConfig[searchIndex].cssClass = 'custom-calendar workday-holiday';
                }
                else if (this.daysConfig[searchIndex].cssClass === 'custom-calendar holiday-holiday' && this.status === 'O') {
                    this.daysConfig[searchIndex].cssClass = 'custom-calendar offday-holiday';
                }
                else {
                    this.daysConfig[searchIndex].cssClass =
                        this.status === 'W'
                            ? 'custom-calendar workday'
                            : this.status === 'O'
                                ? 'custom-calendar offday'
                                : this.status === 'H'
                                    ? 'custom-calendar holidaySelect'
                                    : '';
                }
            }
            console.log(this.daysConfig);
            this.optionsMulti2 = {
                from: new Date(this.dayStartFromY, this.dayStartFromM, this.dayStartFromD),
                monthFormat: 'ปี YYYY เดือน MMM',
                monthPickerFormat: ['ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย.', 'ก.ค.', 'ส.ค.', 'ก.ย.', 'ต.ค.', 'พ.ย.', 'ธ.ค.'],
                weekdays: ['อา', 'จ', 'อ', 'พ', 'พฤ', 'ศ', 'ส'],
                weekStart: 0,
                showToggleButtons: true,
                showMonthPicker: true,
                // color: '#ffffff',
                // marked: true,
                // pickMode: 'multi',
                // disableWeeks: [0, 6],
                daysConfig: this.daysConfig,
            };
            this.dataSelectDay = [];
            for (const item of this.daysConfig) {
                if (item.cssClass !== 'custom-calendar holiday') {
                    const valueDay = Object(_services_utils_moment_moment_service__WEBPACK_IMPORTED_MODULE_3__["moment"])(item.date, 'YYYY-MM-DD').format('DD/MM/YYYY');
                    console.log(valueDay);
                    this.dataSelectDay.push({
                        day: valueDay,
                        type: item.cssClass === 'custom-calendar workday'
                            ? 'W1'
                            : item.cssClass === 'custom-calendar offday'
                                ? 'V1'
                                : item.cssClass === 'custom-calendar holidaySelect'
                                    ? 'W2'
                                    : item.cssClass === 'custom-calendar workday-holiday'
                                        ? 'W1'
                                        : item.cssClass === 'custom-calendar offday-holiday'
                                            ? 'V1'
                                            : item.cssClass === 'custom-calendar holiday-holiday'
                                                ? 'W2'
                                                : '',
                    });
                }
            }
            console.log(this.dataSelectDay);
            console.log(this.countHolidayAPI[0].special);
            let numS = 0;
            let numH = 0;
            this.countSpecial = this.countHolidayAPI[0].special;
            this.countHoliday = this.countHolidayAPI[0].holiday;
            // for (let i = 0; i < this.dataSelectDay.length; i++) {
            //   console.log(this.dataSelectDay[i]);
            //   if (this.dataSelectDay[i].type === 'V1') {
            //     console.log('1111');
            //     if (numS < this.countHolidayAPI[0].special) {
            //       numS++;
            //       this.countSpecial--;
            //     } else {
            //       if (numS <= this.countHolidayAPI[0].special) {
            //         this.onChange2(ev);
            //       }
            //     }
            //   } else if (this.dataSelectDay[i].type === 'W2') {
            //     console.log(this.countHoliday);
            //     if (numH < this.countHolidayAPI[0].holiday) {
            //       numH++;
            //       this.countHoliday--;
            //     } else {
            //       if (numS <= this.countHolidayAPI[0].holiday) {
            //         this.onChange2(ev);
            //       }
            //     }
            //   }
            // }
            for (const i in this.dataSelectDay) {
                if (this.dataSelectDay[i].type === 'V1') {
                    console.log('1111');
                    if (numS < this.countHolidayAPI[0].special) {
                        numS++;
                        this.countSpecial--;
                    }
                    else {
                        if (numS <= this.countHolidayAPI[0].special) {
                            this.onChange2(ev);
                        }
                    }
                }
                else if (this.dataSelectDay[i].type === 'W2') {
                    console.log(this.countHoliday);
                    if (numH < this.countHolidayAPI[0].holiday) {
                        numH++;
                        this.countHoliday--;
                    }
                    else {
                        if (numS <= this.countHolidayAPI[0].holiday) {
                            this.onChange2(ev);
                        }
                    }
                }
            }
        }
        cancelPlan() {
            console.log('cancelPlan');
            // const navigationExtras:NavigationExtras = {
            //   state: {name: "trebtreb"}
            // }
            this.router.navigate(['guest-plan']);
        }
        popoverShopMenu(ev) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                console.log('ev', ev);
                const popover = yield this.createPlanPopover.create({
                    component: _guest_create_plan_menu_popover_guest_create_plan_menu_popover_component__WEBPACK_IMPORTED_MODULE_1__["GuestCreatePlanMenuPopoverComponent"],
                    componentProps: {
                        props: { type: ev, dataCounter: !this.counters ? '' : this.counters },
                    },
                    event: ev,
                    translucent: true,
                });
                popover.onDidDismiss().then((param) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    if (param.role !== 'backdrop' && param.data.dismissed) {
                        const val = param.data;
                        console.log(val);
                        if (ev === 'shop') {
                            this.saveData.shop.value = val.value;
                            this.saveData.shop.name = val.name;
                            this.saveData.counter.value = null;
                            this.saveData.counter.name = null;
                            // this.counters = val.counter;
                            // this.custidMenu = val.name;
                        }
                        console.log(this.custidMenu);
                        if (ev === 'counter') {
                            console.log('////', val);
                            console.log('>>>>', this.saveData.counter);
                            this.saveData.counter.value = val.value;
                            this.saveData.counter.name = val.name;
                            this.counterMenu = val.value;
                        }
                        console.log(this.saveData);
                        // const navigationExtras:NavigationExtras = {
                        //   state: {name}
                        // }
                        // this.router.navigate(["csg-plan/create-plan"],navigationExtras)
                    }
                }));
                return yield popover.present();
            });
        }
        cretePlan() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                // console.log("this.dataSelectDay",this.dataSelectDay);
                // console.log(this.saveData);
                // console.log('this.monthCreate',this.monthCreate);
                // console.log('empid', this.empId);
                // console.log('flagcount',this.flagcount);
                const dataset = [];
                for (const s of this.dataSelectDay) {
                    dataset.push({
                        flagdesc: s.type,
                        assigndate: s.day,
                        custid: this.saveData.shop.value,
                        counterid: 'COUNTER',
                        yearmonth: this.monthCreate,
                        csgid: this.empId,
                        flagcount: 'Y',
                    });
                }
                const body = { dataset };
                console.log(body);
                const call = yield this.api.insertCreatePlanCSGPlan(body);
                console.log(call);
                this.navCtrl.back();
            });
        }
        presentPopover(ev) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                console.log(ev);
                const popover = yield this.csgPlanPopover.create({
                    component: _guest_plan_popover_guest_plan_popover_component__WEBPACK_IMPORTED_MODULE_2__["GuestPlanPopoverComponent"],
                    event: ev,
                    translucent: true,
                });
                popover.onDidDismiss().then((param) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    if (param.role !== 'backdrop' && param.data.dismissed) {
                        const type = param.data.type;
                        console.log(type);
                        const navigationExtras = {
                            state: { type },
                        };
                        this.router.navigate(['guest-plan/create-plan'], navigationExtras);
                    }
                }));
                return yield popover.present();
            });
        }
        allSelect() {
            this.daysConfig = [];
            console.log(this.dataHolidayAPI.day);
            console.log(this.dayStartFromD);
            // for (let i = 0; i < this.dataHolidayAPI.length; i++) {
            //   console.log(this.dataHolidayAPI[i].month, this.m);
            //   if (this.dataHolidayAPI[i].month == this.m) {
            //     if (this.dataHolidayAPI[i].day >= this.dayStartFromD) {
            //       this.daysConfig.push({
            //         date: this.moment.formatDate(this.dataHolidayAPI[i].date, 'YYYY-MM-DD', 'th', 'DD/MM/YYYY'),
            //         cssClass: this.status === 'W' ? 'custom-calendar workday' : this.status === 'O' ? 'custom-calendar offday' : '',
            //       });
            //     }
            //   } else {
            //     this.daysConfig.push({
            //       date: this.moment.formatDate(this.dataHolidayAPI[i].date, 'YYYY-MM-DD', 'th', 'DD/MM/YYYY'),
            //       cssClass: this.status === 'W' ? 'custom-calendar workday' : this.status === 'O' ? 'custom-calendar offday' : '',
            //     });
            //   }
            // }
            for (const i in this.dataHolidayAPI) {
                if (this.dataHolidayAPI[i].month === this.m) {
                    if (this.dataHolidayAPI[i].day >= this.dayStartFromD) {
                        this.daysConfig.push({
                            date: Object(_services_utils_moment_moment_service__WEBPACK_IMPORTED_MODULE_3__["moment"])(this.dataHolidayAPI[i].date, 'DD/MM/YYYY').format('YYYY-MM-DD'),
                            cssClass: this.status === 'W' ? 'custom-calendar workday' : this.status === 'O' ? 'custom-calendar offday' : '',
                        });
                    }
                }
                else {
                    this.daysConfig.push({
                        // date: this.moment.formatDate(this.dataHolidayAPI[i].date, 'YYYY-MM-DD', 'th', 'DD/MM/YYYY'),
                        date: Object(_services_utils_moment_moment_service__WEBPACK_IMPORTED_MODULE_3__["moment"])(this.dataHolidayAPI[i].date, 'DD/MM/YYYY').format('YYYY-MM-DD'),
                        cssClass: this.status === 'W' ? 'custom-calendar workday' : this.status === 'O' ? 'custom-calendar offday' : '',
                    });
                }
            }
            console.log(this.daysConfig);
            this.optionsMulti2 = {
                from: new Date(this.dayStartFromY, this.dayStartFromM, this.dayStartFromD),
                monthFormat: 'ปี YYYY เดือน MMM',
                monthPickerFormat: ['ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย.', 'ก.ค.', 'ส.ค.', 'ก.ย.', 'ต.ค.', 'พ.ย.', 'ธ.ค.'],
                weekdays: ['อา', 'จ', 'อ', 'พ', 'พฤ', 'ศ', 'ส'],
                weekStart: 0,
                showToggleButtons: true,
                showMonthPicker: true,
                // color: '#ffffff',
                // marked: true,
                // pickMode: 'multi',
                // disableWeeks: [0, 6],
                daysConfig: this.daysConfig,
            };
            this.dataSelectDay = [];
            for (const item of this.daysConfig) {
                if (item.cssClass !== 'custom-calendar holiday') {
                    const valueDay = Object(_services_utils_moment_moment_service__WEBPACK_IMPORTED_MODULE_3__["moment"])(item.date, 'YYYY-MM-DD').format('DD/MM/YYYY');
                    console.log(valueDay);
                    this.dataSelectDay.push({
                        day: valueDay,
                        type: item.cssClass === 'custom-calendar workday'
                            ? 'W1'
                            : item.cssClass === 'custom-calendar offday'
                                ? 'V1'
                                : item.cssClass === 'custom-calendar workday-holiday'
                                    ? 'W1'
                                    : item.cssClass === 'custom-calendar offday-holiday'
                                        ? 'V1'
                                        : '',
                    });
                }
            }
            console.log(this.dataSelectDay);
        }
        reStartDays() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                // this.monthCreate = this.moment.now('YYYYMM');
                this.monthCreate = Object(_services_utils_moment_moment_service__WEBPACK_IMPORTED_MODULE_3__["moment"])().format('YYYYMM');
                console.log(this.monthCreate);
                const callApi = yield this.api.getHolidayCSGPlan(this.monthCreate);
                this.dataHolidayAPI = callApi.datas;
                console.log(this.dataHolidayAPI);
                this.loadDataHoliday = this.getDataHoliDay(this.dataHolidayAPI);
                this.optionsMulti2 = {
                    from: new Date(this.dayStartFromY, this.dayStartFromM, this.dayStartFromD),
                    monthFormat: 'ปี YYYY เดือน MMM',
                    monthPickerFormat: ['ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย.', 'ก.ค.', 'ส.ค.', 'ก.ย.', 'ต.ค.', 'พ.ย.', 'ธ.ค.'],
                    weekdays: ['อา', 'จ', 'อ', 'พ', 'พฤ', 'ศ', 'ส'],
                    weekStart: 0,
                    showToggleButtons: true,
                    showMonthPicker: true,
                    // pickMode: 'multi',
                    daysConfig: this.loadDataHoliday,
                };
                this.daysConfig = [];
                this.dataSelectDay = [];
            });
        }
        presentAlertConfirm() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                const alert = yield this.alertController.create({
                    cssClass: 'my-custom-class',
                    header: 'ยืนยันการสร้างแผลนหรือไม่',
                    message: 'ข้อมูลต่างๆที่ท่านแผลนไว้จะถูกบันทึกและ จะนำไปแสดงในหน้าแสดงผลด้านหน้าในทันทีหากกดยืนยัน!!',
                    buttons: [
                        {
                            text: 'ปิด',
                            role: 'cancel',
                            cssClass: 'secondary',
                            handler: (blah) => {
                                // console.log('Confirm Cancel: blah');
                            },
                        },
                        {
                            text: 'ยืนยัน',
                            handler: () => {
                                // console.log('Confirm Okay');
                                this.cretePlan();
                            },
                        },
                    ],
                });
                yield alert.present();
            });
        }
    }
    CreatePlanPage.ɵfac = function CreatePlanPage_Factory(t) { return new (t || CreatePlanPage)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_api_guest_plan_guest_plan_service__WEBPACK_IMPORTED_MODULE_6__["GuestPlanService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_8__["PopoverController"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_8__["NavController"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_8__["PopoverController"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_8__["AlertController"])); };
    CreatePlanPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: CreatePlanPage, selectors: [["app-create-plan"]], decls: 60, vars: 11, consts: [[1, "ion-no-border"], ["slot", "start"], [3, "click"], [2, "float", "right"], ["style", "color: darkgray", 4, "ngIf"], [4, "ngIf"], ["style", "background-color: green; width: 20px; height: 20px; border-radius: 50%", 4, "ngIf"], ["style", "background-color: #d61c4b; width: 20px; height: 20px; border-radius: 50%", 4, "ngIf"], ["style", "background-color: #ff4500; width: 20px; height: 20px; border-radius: 50%", 4, "ngIf"], ["interface", "popover", "value", "W", 3, "ionChange"], ["value", "W"], ["value", "O"], ["value", "H"], [2, "height", "400px"], [2, "background-color", "white", "position", "relative", "z-index", "999", "display", "flex", "justify-content", "flex-end", "width", "93%", "margin-left", "15px"], ["color", "primary", 3, "click", 4, "ngIf"], ["color", "danger", 3, "click", 4, "ngIf"], [1, "calendar"], [3, "type", "options", "format", "monthChange", "change", 4, "ngIf"], [2, "height", "50px"], ["slot", "bottom", 2, "border-width", "0px 0px 0px 0px"], [2, "border-radius", "2%", "width", "100%", "box-shadow", "1px 7px 6px rgb(0, 0, 0)", 3, "click"], ["src", "assets/images/csg-plan/cancel.svg", 1, "imgCancel"], [2, "border-radius", "2%", "margin-left", "5px", "box-shadow", "1px 7px 6px rgb(0, 0, 0)", 3, "click"], ["src", "assets/images/csg-plan/save.svg", 1, "imgSave"], [2, "text-align", "center"], ["name", "close-circle-outline", 2, "color", "#d61c4b"], [2, "margin-left", "5px", 3, "click"], ["name", "checkmark-circle-outline", 2, "color", "#08a838"], [2, "color", "darkgray"], [2, "background-color", "green", "width", "20px", "height", "20px", "border-radius", "50%"], [2, "background-color", "#d61c4b", "width", "20px", "height", "20px", "border-radius", "50%"], [2, "background-color", "#ff4500", "width", "20px", "height", "20px", "border-radius", "50%"], ["color", "primary", 3, "click"], ["color", "danger", 3, "click"], [2, "margin-left", "3px", "color", "#d61c4b", "font-size", "large"], [2, "margin-left", "3px", "color", "#ff4500", "font-size", "large"], [3, "type", "options", "format", "monthChange", "change"]], template: function CreatePlanPage_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-header", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "ion-toolbar");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "ion-buttons", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "ion-back-button");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "ion-title");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Create Plan");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "ion-content");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "ion-card");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "ion-item", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CreatePlanPage_Template_ion_item_click_8_listener() { return ctx.popoverShopMenu("shop"); });
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "ion-label");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "b");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "\u0E23\u0E49\u0E32\u0E19\u0E04\u0E49\u0E32");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "span", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](13, CreatePlanPage_span_13_Template, 2, 0, "span", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](15, CreatePlanPage_ion_card_15_Template, 8, 2, "ion-card", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "ion-card");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "ion-item");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "ion-label");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "\u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48\u0E40\u0E25\u0E37\u0E2D\u0E01");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](20, CreatePlanPage_div_20_Template, 1, 0, "div", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](21, CreatePlanPage_div_21_Template, 1, 0, "div", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](22, CreatePlanPage_div_22_Template, 1, 0, "div", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "ion-select", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ionChange", function CreatePlanPage_Template_ion_select_ionChange_23_listener($event) { return ctx.changeBT($event); });
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "ion-select-option", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, "\u0E27\u0E31\u0E19\u0E17\u0E33\u0E07\u0E32\u0E19\u0E1B\u0E01\u0E15\u0E34");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "ion-select-option", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27, "\u0E27\u0E31\u0E19\u0E2B\u0E22\u0E38\u0E14\u0E07\u0E32\u0E19");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "ion-select-option", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29, "Holiday");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "div", 13);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "div", 14);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](32, CreatePlanPage_ion_button_32_Template, 2, 0, "ion-button", 15);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](33, CreatePlanPage_ion_button_33_Template, 2, 0, "ion-button", 16);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](34, CreatePlanPage_div_34_Template, 6, 1, "div", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](35, CreatePlanPage_div_35_Template, 6, 1, "div", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "div", 17);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](37, CreatePlanPage_ion_calendar_37_Template, 1, 3, "ion-calendar", 18);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](38, "div", 19);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "ion-tabs");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "ion-tab-bar", 20);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "ion-tab-button", 21);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CreatePlanPage_Template_ion_tab_button_click_41_listener() { return ctx.cancelPlan(); });
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](42, "img", 22);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "ion-label");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](44, "\u0E22\u0E01\u0E40\u0E25\u0E34\u0E01");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "ion-tab-button", 23);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CreatePlanPage_Template_ion_tab_button_click_45_listener() { return ctx.presentAlertConfirm(); });
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](46, "img", 24);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "ion-label");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](48, "\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01\u0E01\u0E32\u0E23\u0E2A\u0E23\u0E49\u0E32\u0E07");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](49, "div", 19);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](50, "ion-footer");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "ion-toolbar", 25);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](52, "ion-button", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CreatePlanPage_Template_ion_button_click_52_listener() { return ctx.cancelPlan(); });
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](53, "ion-icon", 26);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](54, "ion-label");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](55, " \u0E22\u0E01\u0E40\u0E25\u0E34\u0E01");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](56, "ion-button", 27);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CreatePlanPage_Template_ion_button_click_56_listener() { return ctx.presentAlertConfirm(); });
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](57, "ion-icon", 28);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](58, "ion-label");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](59, " \u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01\u0E01\u0E32\u0E23\u0E2A\u0E23\u0E49\u0E32\u0E07");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](13);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.saveData.shop.name);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.saveData.shop.name, " ");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.custidMenu && ctx.custidMenu !== "\u0E44\u0E21\u0E48\u0E21\u0E35\u0E23\u0E2B\u0E31\u0E2A\u0E23\u0E49\u0E32\u0E19\u0E04\u0E49\u0E32\u0E19\u0E35\u0E49");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.status == "W");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.status == "O");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.status == "H");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.status == "W");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.status == "W");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.status == "O");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.status == "H");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.loadDataHoliday);
            }
        }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonCard"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonLabel"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonSelect"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["SelectValueAccessor"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonSelectOption"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonTabs"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonTabBar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonTabButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonFooter"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonIcon"], ion2_calendar__WEBPACK_IMPORTED_MODULE_10__["CalendarComponent"]], styles: [".imgSave[_ngcontent-%COMP%] {\n  max-width: 20px;\n}\n\n.imgCancel[_ngcontent-%COMP%] {\n  max-width: 20px;\n}\n\n.item-native[_ngcontent-%COMP%] {\n  background-color: white !important;\n}\n\n  .days-btn.next-month-day {\n  opacity: 0 !important;\n}\n\n  .days-btn.last-month-day {\n  opacity: 0 !important;\n}\n\n.calendar[_ngcontent-%COMP%] {\n  margin: 8px;\n  padding: 8px;\n  border-radius: 8px;\n  position: absolute;\n  z-index: 999;\n}\n\nion-header[_ngcontent-%COMP%] {\n  --ion-background-color: #ffffff;\n}\n\nion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%] {\n  --border-color: transparent;\n  --border-style: none !important;\n}\n\nion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   ion-title[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 600;\n}\n\nion-content[_ngcontent-%COMP%] {\n  --ion-background-color: #f5f5f5;\n}\n\nion-footer[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%] {\n  border-radius: 2%;\n  --background: #ffffff !important;\n  --color: #000000 !important;\n}"] });
    return CreatePlanPage;
})();


/***/ })

}]);