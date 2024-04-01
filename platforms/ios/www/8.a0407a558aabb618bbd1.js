(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "86tH":
/*!***************************************************!*\
  !*** ./src/app/pages/workflow/workflow.module.ts ***!
  \***************************************************/
/*! exports provided: WorkflowPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkflowPageModule", function() { return WorkflowPageModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _item_list_item_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./item-list/item-list.component */ "YhFZ");
/* harmony import */ var ngx_lottie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-lottie */ "DPnb");
/* harmony import */ var _workflow_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./workflow.page */ "N/+o");
/* harmony import */ var _workflow_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./workflow-routing.module */ "kXT/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");








let WorkflowPageModule = /*@__PURE__*/ (() => {
    class WorkflowPageModule {
    }
    WorkflowPageModule.ɵfac = function WorkflowPageModule_Factory(t) { return new (t || WorkflowPageModule)(); };
    WorkflowPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: WorkflowPageModule });
    WorkflowPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"], _workflow_routing_module__WEBPACK_IMPORTED_MODULE_6__["WorkflowPageRoutingModule"], ngx_lottie__WEBPACK_IMPORTED_MODULE_4__["LottieModule"]]] });
    return WorkflowPageModule;
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](WorkflowPageModule, { declarations: [_workflow_page__WEBPACK_IMPORTED_MODULE_5__["WorkflowPage"], _item_list_item_list_component__WEBPACK_IMPORTED_MODULE_3__["ItemListComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"], _workflow_routing_module__WEBPACK_IMPORTED_MODULE_6__["WorkflowPageRoutingModule"], ngx_lottie__WEBPACK_IMPORTED_MODULE_4__["LottieModule"]] }); })();


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

/***/ "N/+o":
/*!*************************************************!*\
  !*** ./src/app/pages/workflow/workflow.page.ts ***!
  \*************************************************/
/*! exports provided: WorkflowPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkflowPage", function() { return WorkflowPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _services_utils_moment_moment_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/utils/moment/moment.service */ "9cE+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_api_workflow_workflow_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/api/workflow/workflow.service */ "QpGb");
/* harmony import */ var _services_utils_loading_loading_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../services/utils/loading/loading.service */ "YMUU");
/* harmony import */ var _services_utils_alert_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../services/utils/alert/alert.service */ "y7g3");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_lottie__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-lottie */ "DPnb");
/* harmony import */ var _item_list_item_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./item-list/item-list.component */ "YhFZ");












function WorkflowPage_div_30_div_2_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "ng-lottie", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "\u0E44\u0E21\u0E48\u0E1E\u0E1A\u0E40\u0E2D\u0E01\u0E2A\u0E32\u0E23");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("width", ctx_r3.lottiefiles.noDocument.width)("height", ctx_r3.lottiefiles.noDocument.height)("options", ctx_r3.lottiefiles.noDocument.options);
    }
}
function WorkflowPage_div_30_app_item_list_3_Template(rf, ctx) {
    if (rf & 1) {
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "app-item-list", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function WorkflowPage_div_30_app_item_list_3_Template_app_item_list_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7); const item_r5 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r6.onDetial(item_r5); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const item_r5 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("param", item_r5);
    }
}
function WorkflowPage_div_30_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, WorkflowPage_div_30_div_2_Template, 4, 3, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, WorkflowPage_div_30_app_item_list_3_Template, 1, 1, "app-item-list", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.a1.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.a1);
    }
}
function WorkflowPage_div_31_div_2_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "ng-lottie", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "\u0E44\u0E21\u0E48\u0E1E\u0E1A\u0E40\u0E2D\u0E01\u0E2A\u0E32\u0E23");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("width", ctx_r8.lottiefiles.noDocument.width)("height", ctx_r8.lottiefiles.noDocument.height)("options", ctx_r8.lottiefiles.noDocument.options);
    }
}
function WorkflowPage_div_31_app_item_list_3_Template(rf, ctx) {
    if (rf & 1) {
        const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "app-item-list", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function WorkflowPage_div_31_app_item_list_3_Template_app_item_list_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12); const item_r10 = ctx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r11.onDetial(item_r10); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const item_r10 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("param", item_r10);
    }
}
function WorkflowPage_div_31_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, WorkflowPage_div_31_div_2_Template, 4, 3, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, WorkflowPage_div_31_app_item_list_3_Template, 1, 1, "app-item-list", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.c1.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r1.c1);
    }
}
function WorkflowPage_div_32_div_2_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "ng-lottie", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "\u0E44\u0E21\u0E48\u0E1E\u0E1A\u0E40\u0E2D\u0E01\u0E2A\u0E32\u0E23");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("width", ctx_r13.lottiefiles.noDocument.width)("height", ctx_r13.lottiefiles.noDocument.height)("options", ctx_r13.lottiefiles.noDocument.options);
    }
}
function WorkflowPage_div_32_app_item_list_3_Template(rf, ctx) {
    if (rf & 1) {
        const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "app-item-list", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function WorkflowPage_div_32_app_item_list_3_Template_app_item_list_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r17); const item_r15 = ctx.$implicit; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r16.onDetial(item_r15); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const item_r15 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("param", item_r15);
    }
}
function WorkflowPage_div_32_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, WorkflowPage_div_32_div_2_Template, 4, 3, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, WorkflowPage_div_32_app_item_list_3_Template, 1, 1, "app-item-list", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.g1.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r2.g1);
    }
}
_services_utils_moment_moment_service__WEBPACK_IMPORTED_MODULE_1__["moment"].locale('th');
let WorkflowPage = /*@__PURE__*/ (() => {
    class WorkflowPage {
        constructor(router, api, loading, alert) {
            this.router = router;
            this.api = api;
            this.loading = loading;
            this.alert = alert;
            this.current = 'WAIT';
            this.a1 = [];
            this.c1 = [];
            this.g1 = [];
            this.x1 = [];
            this.menus = [
                { title: 'ลาป่วย', types: [{ name: 'ลาป่วย', code: 'A1' }], logo: 'assets/images/workflow/sick.svg' },
                {
                    title: 'ลากิจ/กิจพิเศษ',
                    types: [
                        { name: 'ลากิจ', code: 'C1' },
                        { name: 'ลากิจพิเศษ', code: 'C2' },
                    ],
                    logo: 'assets/images/workflow/employee.svg',
                },
                { title: 'ลาพักร้อน', types: [{ name: 'ลาพักร้อน', code: 'G1' }], logo: 'assets/images/workflow/holiday.svg' },
            ];
            this.lottiefiles = {
                loading: {
                    options: { path: 'assets/lottiefiles/reload.json', loop: true },
                    width: '80px',
                    height: '80px',
                },
                warning: {
                    options: { path: 'assets/lottiefiles/warning-map.json', loop: false },
                    width: '150px',
                    height: '150px',
                },
                noDocument: {
                    options: { path: 'assets/lottiefiles/no-document.json', loop: false },
                    width: '150px',
                    height: '150px',
                },
            };
        }
        ngOnInit() { }
        ionViewDidEnter() {
            this.loadInit();
        }
        loadInit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                try {
                    yield this.loading.present();
                    const lists = yield this.api.workflowLists();
                    const filterAbsentCode = (datas, status) => datas.filter((data) => data.workflow_status === status);
                    const dataLists = (datas) => datas.map((data) => {
                        const format = (date) => Object(_services_utils_moment_moment_service__WEBPACK_IMPORTED_MODULE_1__["moment"])(date, 'DD/MM/YYYY').format('DD MMM YYYY');
                        const showDate = data.start_date === data.end_date
                            ? `${format(data.start_date)} ${data.start_time} - ${data.end_time}`
                            : `${format(data.start_date)} ${data.start_time} - ${format(data.end_date)} ${data.end_time}`;
                        return Object.assign(Object.assign({}, data), { show_date: showDate });
                    });
                    this.a1 = filterAbsentCode(dataLists(lists.datas || []), 'WAIT');
                    this.c1 = filterAbsentCode(dataLists(lists.datas || []), 'APPROVE');
                    this.x1 = filterAbsentCode(dataLists(lists.datas || []), 'CANCEL');
                    this.g1 = filterAbsentCode(dataLists(lists.datas || []), 'NOTAPPROVE');
                    this.loading.dismiss();
                }
                catch (error) {
                    console.log(error);
                    this.loading.dismiss();
                }
            });
        }
        doRefresh(event) {
            setTimeout(() => {
                this.loadInit();
                this.current = 'WAIT';
                event.target.complete();
            }, 2000);
        }
        onCreate() {
            // const navigationExtras: NavigationExtras = { state: { ...param } };
            this.router.navigate(['workflow/create']);
        }
        onDetial(param) {
            const navigationExtras = { state: Object.assign({}, param) };
            this.router.navigate(['workflow/detial'], navigationExtras);
        }
    }
    WorkflowPage.ɵfac = function WorkflowPage_Factory(t) { return new (t || WorkflowPage)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_api_workflow_workflow_service__WEBPACK_IMPORTED_MODULE_4__["WorkflowService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_utils_loading_loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_utils_alert_alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"])); };
    WorkflowPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: WorkflowPage, selectors: [["app-workflow"]], decls: 33, vars: 5, consts: [[1, "ion-no-border"], ["slot", "start"], ["fullscreen", "true"], ["slot", "fixed", 3, "ionRefresh"], ["refreshingSpinner", "crescent"], ["vertical", "bottom", "horizontal", "end", "slot", "fixed"], [3, "click"], ["name", "add"], [1, "content"], [1, "content__label"], [3, "ngModel", "ngModelChange"], ["layout", "icon-top", "value", "WAIT"], ["name", "time", "color", "warning"], ["layout", "icon-top", "value", "APPROVE"], ["name", "checkmark-circle", "color", "success"], ["layout", "icon-top", "value", "NOTAPPROVE"], ["name", "close-circle", "color", "danger"], [3, "ngSwitch"], [4, "ngSwitchCase"], ["class", "notfound", 4, "ngIf"], [3, "param", "click", 4, "ngFor", "ngForOf"], [1, "notfound"], [3, "width", "height", "options"], [3, "param", "click"]], template: function WorkflowPage_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-header", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-toolbar");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "ion-buttons", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "ion-back-button");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "ion-title");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "\u0E43\u0E1A\u0E25\u0E32");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "ion-content", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "ion-refresher", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ionRefresh", function WorkflowPage_Template_ion_refresher_ionRefresh_7_listener($event) { return ctx.doRefresh($event); });
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "ion-refresher-content", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "ion-fab", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "ion-fab-button", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function WorkflowPage_Template_ion_fab_button_click_10_listener() { return ctx.onCreate(); });
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "ion-icon", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "section", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "p", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23\u0E43\u0E1A\u0E25\u0E32\u0E02\u0E2D\u0E07\u0E09\u0E31\u0E19");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "ion-toolbar");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "ion-segment", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function WorkflowPage_Template_ion_segment_ngModelChange_16_listener($event) { return ctx.current = $event; });
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "ion-segment-button", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "ion-icon", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "ion-label");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "\u0E23\u0E2D\u0E01\u0E32\u0E23\u0E2D\u0E19\u0E38\u0E21\u0E31\u0E15\u0E34 ");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "ion-segment-button", 13);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "ion-icon", 14);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "ion-label");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "\u0E1C\u0E48\u0E32\u0E19\u0E01\u0E32\u0E23\u0E2D\u0E19\u0E38\u0E21\u0E31\u0E15\u0E34");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "ion-segment-button", 15);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](26, "ion-icon", 16);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "ion-label");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "\u0E44\u0E21\u0E48\u0E1C\u0E48\u0E32\u0E19\u0E2D\u0E19\u0E38\u0E21\u0E31\u0E15\u0E34");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 17);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](30, WorkflowPage_div_30_Template, 4, 2, "div", 18);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](31, WorkflowPage_div_31_Template, 4, 2, "div", 18);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](32, WorkflowPage_div_32_Template, 4, 2, "div", 18);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](16);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.current);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitch", ctx.current);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", "WAIT");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", "APPROVE");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", "NOTAPPROVE");
            }
        }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonRefresher"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonRefresherContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonFab"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonFabButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonSegment"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["SelectValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonSegmentButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonLabel"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], ngx_lottie__WEBPACK_IMPORTED_MODULE_10__["LottieComponent"], _item_list_item_list_component__WEBPACK_IMPORTED_MODULE_11__["ItemListComponent"]], styles: [".header[_ngcontent-%COMP%]   .header__label[_ngcontent-%COMP%] {\n  text-align: center;\n  font-weight: 500;\n}\n.header[_ngcontent-%COMP%]   .header__menu[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: flex-start;\n}\n.header[_ngcontent-%COMP%]   .header__menu[_ngcontent-%COMP%]   .header__menu__item[_ngcontent-%COMP%] {\n  flex-basis: 33.33%;\n  display: flex;\n  flex-flow: column nowrap;\n  align-items: center;\n  justify-content: center;\n  margin: 6px 0;\n  width: 110px;\n  height: 110px;\n}\n.header[_ngcontent-%COMP%]   .header__menu[_ngcontent-%COMP%]   .header__menu__item[_ngcontent-%COMP%]   .header__menu__item--logo[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  background: #ffffff;\n  box-shadow: 0px 8px 20px -10px rgba(0, 0, 0, 0.02);\n  border-radius: 50%;\n  display: flex;\n  flex-flow: column wrap;\n  align-items: center;\n  justify-content: center;\n}\n.header[_ngcontent-%COMP%]   .header__menu[_ngcontent-%COMP%]   .header__menu__item[_ngcontent-%COMP%]   .header__menu__item--logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  object-fit: cover;\n}\n.header[_ngcontent-%COMP%]   .header__menu[_ngcontent-%COMP%]   .header__menu__item[_ngcontent-%COMP%]   .header__menu__item--title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #2d2d2d;\n  font-size: 0.8rem;\n  font-weight: 500;\n  margin: 4px 0;\n}\n.content[_ngcontent-%COMP%] {\n  background: #ffffff;\n  margin-top: 20px;\n  padding: 20px;\n  border-radius: 35px 35px 0 0;\n  min-height: 80%;\n}\n.content[_ngcontent-%COMP%]   .loading[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n}\n.content[_ngcontent-%COMP%]   .content__label[_ngcontent-%COMP%] {\n  text-align: center;\n  font-weight: 500;\n}\n.content[_ngcontent-%COMP%]   ion-segment[_ngcontent-%COMP%] {\n  --background: #ffffff;\n}\n.content[_ngcontent-%COMP%]   ion-segment[_ngcontent-%COMP%]   ion-segment-button[_ngcontent-%COMP%] {\n  --color: #4d4d4d;\n  \n  --color-checked: #ff0000;\n  --background-checked:#ffeaea;\n  \n  width: 33.3%;\n  letter-spacing: 0;\n  font-weight: 600;\n}\n.notfound[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.notfound[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: #969696;\n  font-weight: 400;\n}"] });
    return WorkflowPage;
})();


/***/ }),

/***/ "YhFZ":
/*!*****************************************************************!*\
  !*** ./src/app/pages/workflow/item-list/item-list.component.ts ***!
  \*****************************************************************/
/*! exports provided: ItemListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemListComponent", function() { return ItemListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



function ItemListComponent_ion_icon_22_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ion-icon", 11);
    }
}
function ItemListComponent_p_23_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u0E23\u0E2D\u0E01\u0E32\u0E23\u0E2D\u0E19\u0E38\u0E21\u0E31\u0E15\u0E34");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
}
function ItemListComponent_ion_icon_24_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ion-icon", 12);
    }
}
function ItemListComponent_p_25_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u0E1C\u0E48\u0E32\u0E19\u0E01\u0E32\u0E23\u0E2D\u0E19\u0E38\u0E21\u0E31\u0E15\u0E34");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
}
function ItemListComponent_ion_icon_26_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ion-icon", 13);
    }
}
function ItemListComponent_p_27_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u0E22\u0E01\u0E40\u0E25\u0E34\u0E01");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
}
function ItemListComponent_ion_icon_28_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ion-icon", 13);
    }
}
function ItemListComponent_p_29_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u0E44\u0E21\u0E48\u0E1C\u0E48\u0E32\u0E19\u0E2D\u0E19\u0E38\u0E21\u0E31\u0E15\u0E34");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
}
let ItemListComponent = /*@__PURE__*/ (() => {
    class ItemListComponent {
        constructor() { }
        ngOnInit() { }
    }
    ItemListComponent.ɵfac = function ItemListComponent_Factory(t) { return new (t || ItemListComponent)(); };
    ItemListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ItemListComponent, selectors: [["app-item-list"]], inputs: { param: "param" }, decls: 30, vars: 12, consts: [[1, "timedate"], [1, "timedate__icon"], ["name", "calendar-outline"], [1, "timedate__text"], [1, "content"], [1, "content__txt"], [1, "content__status"], ["name", "time", "color", "warning", 4, "ngIf"], [4, "ngIf"], ["name", "checkmark-circle", "color", "success", 4, "ngIf"], ["name", "close-circle", "color", "danger", 4, "ngIf"], ["name", "time", "color", "warning"], ["name", "checkmark-circle", "color", "success"], ["name", "close-circle", "color", "danger"]], template: function ItemListComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "ion-icon", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "strong");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48\u0E25\u0E32");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "strong");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "strong");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17: ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "strong");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\u0E40\u0E2B\u0E15\u0E38\u0E1C\u0E25: ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, ItemListComponent_ion_icon_22_Template, 1, 0, "ion-icon", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, ItemListComponent_p_23_Template, 2, 0, "p", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, ItemListComponent_ion_icon_24_Template, 1, 0, "ion-icon", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, ItemListComponent_p_25_Template, 2, 0, "p", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, ItemListComponent_ion_icon_26_Template, 1, 0, "ion-icon", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, ItemListComponent_p_27_Template, 2, 0, "p", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, ItemListComponent_ion_icon_28_Template, 1, 0, "ion-icon", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, ItemListComponent_p_29_Template, 2, 0, "p", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.param == null ? null : ctx.param.show_date, " \u0E19. ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" (", ctx.param == null ? null : ctx.param.time_count, ")");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.param == null ? null : ctx.param.absent_name);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.param == null ? null : ctx.param.absent_reason);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.param == null ? null : ctx.param.workflow_status) === "WAIT");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.param == null ? null : ctx.param.workflow_status) === "WAIT");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.param == null ? null : ctx.param.workflow_status) === "APPROVE");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.param == null ? null : ctx.param.workflow_status) === "APPROVE");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.param == null ? null : ctx.param.workflow_status) === "CANCEL");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.param == null ? null : ctx.param.workflow_status) === "CANCEL");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.param == null ? null : ctx.param.workflow_status) === "NOTAPPROVE");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.param == null ? null : ctx.param.workflow_status) === "CANCEL");
            }
        }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: ["section[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 14px;\n  border: solid 1.5px #f3f3f3;\n  box-shadow: 0px 2px 25px -12px rgba(0, 0, 0, 0.15);\n  padding: 12px;\n  margin: 10px auto;\n}\nsection[_ngcontent-%COMP%]   .timedate[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n}\nsection[_ngcontent-%COMP%]   .timedate[_ngcontent-%COMP%]   .timedate__icon[_ngcontent-%COMP%] {\n  flex-basis: 10%;\n  display: flex;\n  flex-flow: column wrap;\n  justify-content: center;\n  align-items: center;\n}\nsection[_ngcontent-%COMP%]   .timedate[_ngcontent-%COMP%]   .timedate__icon[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  margin-right: 10px;\n  font-size: 1rem;\n}\nsection[_ngcontent-%COMP%]   .timedate[_ngcontent-%COMP%]   .timedate__text[_ngcontent-%COMP%] {\n  flex-basis: 90%;\n  display: flex;\n  flex-flow: column wrap;\n  justify-content: center;\n  align-items: flex-start;\n}\nsection[_ngcontent-%COMP%]   .timedate[_ngcontent-%COMP%]   .timedate__text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n}\nsection[_ngcontent-%COMP%]   .timedate[_ngcontent-%COMP%]   .timedate__text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: red;\n  font-weight: 500;\n}\nsection[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n}\nsection[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .content__txt[_ngcontent-%COMP%] {\n  flex-basis: 80%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n}\nsection[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .content__txt[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  margin: 0;\n}\nsection[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .content__status[_ngcontent-%COMP%] {\n  flex-basis: 20%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\nsection[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .content__status[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n}\nsection[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .content__status[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  font-weight: 500;\n  margin: 0;\n}"] });
    return ItemListComponent;
})();


/***/ }),

/***/ "kXT/":
/*!***********************************************************!*\
  !*** ./src/app/pages/workflow/workflow-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: WorkflowPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkflowPageRoutingModule", function() { return WorkflowPageRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _workflow_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./workflow.page */ "N/+o");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    {
        path: '',
        component: _workflow_page__WEBPACK_IMPORTED_MODULE_1__["WorkflowPage"],
    },
    {
        path: 'detial',
        loadChildren: () => __webpack_require__.e(/*! import() */ 41).then(__webpack_require__.bind(null, /*! ./item-detial/item-detial.module */ "ilFo")).then((m) => m.ItemDetialPageModule),
    },
    {
        path: 'create',
        loadChildren: () => __webpack_require__.e(/*! import() */ 40).then(__webpack_require__.bind(null, /*! ./create-workflow/create-workflow.module */ "450w")).then((m) => m.CreateWorkflowPageModule),
    },
];
let WorkflowPageRoutingModule = /*@__PURE__*/ (() => {
    class WorkflowPageRoutingModule {
    }
    WorkflowPageRoutingModule.ɵfac = function WorkflowPageRoutingModule_Factory(t) { return new (t || WorkflowPageRoutingModule)(); };
    WorkflowPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: WorkflowPageRoutingModule });
    WorkflowPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
    return WorkflowPageRoutingModule;
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](WorkflowPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ })

}]);