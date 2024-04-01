(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[16],{

/***/ "FFBO":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/csg-plan/approver-detail/approver-detail-routing.module.ts ***!
  \**********************************************************************************/
/*! exports provided: ApproverDetailPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApproverDetailPageRoutingModule", function() { return ApproverDetailPageRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _approver_detail_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./approver-detail.page */ "o/yb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    {
        path: '',
        component: _approver_detail_page__WEBPACK_IMPORTED_MODULE_1__["ApproverDetailPage"]
    }
];
let ApproverDetailPageRoutingModule = /*@__PURE__*/ (() => {
    class ApproverDetailPageRoutingModule {
    }
    ApproverDetailPageRoutingModule.ɵfac = function ApproverDetailPageRoutingModule_Factory(t) { return new (t || ApproverDetailPageRoutingModule)(); };
    ApproverDetailPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: ApproverDetailPageRoutingModule });
    ApproverDetailPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
    return ApproverDetailPageRoutingModule;
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ApproverDetailPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "SzGm":
/*!**************************************************************************!*\
  !*** ./src/app/pages/csg-plan/approver-detail/approver-detail.module.ts ***!
  \**************************************************************************/
/*! exports provided: ApproverDetailModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApproverDetailModule", function() { return ApproverDetailModule; });
/* harmony import */ var _approver_detail_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./approver-detail.page */ "o/yb");
/* harmony import */ var _approver_detail_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./approver-detail-routing.module */ "FFBO");
/* harmony import */ var ion2_calendar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ion2-calendar */ "zTSL");
/* harmony import */ var ion2_calendar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ion2_calendar__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");
// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';







let ApproverDetailModule = /*@__PURE__*/ (() => {
    class ApproverDetailModule {
    }
    ApproverDetailModule.ɵfac = function ApproverDetailModule_Factory(t) { return new (t || ApproverDetailModule)(); };
    ApproverDetailModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: ApproverDetailModule });
    ApproverDetailModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _approver_detail_routing_module__WEBPACK_IMPORTED_MODULE_1__["ApproverDetailPageRoutingModule"], ion2_calendar__WEBPACK_IMPORTED_MODULE_2__["CalendarModule"]]] });
    return ApproverDetailModule;
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](ApproverDetailModule, { declarations: [_approver_detail_page__WEBPACK_IMPORTED_MODULE_0__["ApproverDetailPage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _approver_detail_routing_module__WEBPACK_IMPORTED_MODULE_1__["ApproverDetailPageRoutingModule"], ion2_calendar__WEBPACK_IMPORTED_MODULE_2__["CalendarModule"]] }); })();


/***/ }),

/***/ "o/yb":
/*!************************************************************************!*\
  !*** ./src/app/pages/csg-plan/approver-detail/approver-detail.page.ts ***!
  \************************************************************************/
/*! exports provided: ApproverDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApproverDetailPage", function() { return ApproverDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _services_utils_moment_moment_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../services/utils/moment/moment.service */ "9cE+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_storage_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../services/storage/storage.service */ "E2f4");
/* harmony import */ var _services_api_csg_plan_csg_plan_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../services/api/csg-plan/csg-plan.service */ "mj2v");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_utils_loading_loading_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../../services/utils/loading/loading.service */ "YMUU");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");









function ApproverDetailPage_ion_item_sliding_9_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-item-sliding");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "ion-thumbnail");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "B");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "\u0E1C\u0E39\u0E49\u0E2D\u0E19\u0E38\u0E21\u0E31\u0E15\u0E34\u0E25\u0E33\u0E14\u0E31\u0E1A\u0E17\u0E35\u0E48");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const v_r1 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate2"]("src", "https://iccapp-minio.icc.co.th:9000/icchrapp/profile/", v_r1.approve_id, "/", v_r1.approve_id, ".jpg", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](v_r1.approve_no);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](v_r1.approve_name);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](v_r1.approve_date);
    }
}
_services_utils_moment_moment_service__WEBPACK_IMPORTED_MODULE_1__["moment"].locale('th');
let ApproverDetailPage = /*@__PURE__*/ (() => {
    class ApproverDetailPage {
        constructor(storage, api, router, createPlanPopover, navCtrl, alertController, loading) {
            this.storage = storage;
            this.api = api;
            this.router = router;
            this.createPlanPopover = createPlanPopover;
            this.navCtrl = navCtrl;
            this.alertController = alertController;
            this.loading = loading;
            this.check = false;
            this.dataHoliday = [];
            this.sss = [];
            this.tap = 'WorkDay';
            this.status = 'W1';
            this.statusType = '';
            this.countSelect = 0;
            this.countSelectHoliday = 0;
            this.flagcount = 'Y';
            this.daysConfig = [];
            this.workday = [];
            this.dataSelectDay = [];
            this.showAllday = [];
            this.dataAssigndate = [];
            this.myColorVaraible = 'red';
            const state = this.router.getCurrentNavigation().extras.state;
            console.log(state);
            this.paramsMonthBefore = state;
        }
        ngOnInit() {
            this.loading.present();
            this.getDetailApprover(this.paramsMonthBefore.yearmonth, this.paramsMonthBefore.csgid);
        }
        ionViewDidEnter() {
            setTimeout(() => {
                this.loading.dismiss();
            }, 2000);
        }
        getDetailApprover(period, empID) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                const callApiApproverDetail = yield this.api.getApproverDetail(period, empID);
                // const callApiCountHoliday = await this.api.getApproverDetail('202306', '90536');
                console.log('????', callApiApproverDetail.datas);
                if (callApiApproverDetail.datas) {
                    this.values = callApiApproverDetail.datas;
                }
                this.loading.dismiss();
                // this.values = valToMonths;
                // return this.dataHoliday;
                // this.editValue()
            });
        }
    }
    ApproverDetailPage.ɵfac = function ApproverDetailPage_Factory(t) { return new (t || ApproverDetailPage)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_api_csg_plan_csg_plan_service__WEBPACK_IMPORTED_MODULE_4__["CsgPlanService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["PopoverController"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_utils_loading_loading_service__WEBPACK_IMPORTED_MODULE_7__["LoadingService"])); };
    ApproverDetailPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ApproverDetailPage, selectors: [["app-approver-detail"]], decls: 10, vars: 1, consts: [[1, "ion-no-border"], ["slot", "start"], ["fullscreen", "true"], [1, "card-list"], ["lines", "none"], [4, "ngFor", "ngForOf"], ["onerror", "this.src='assets/images/avatar-male.svg'", 2, "border-radius", "50%", 3, "src"], [1, "label"], [1, "textRight"]], template: function ApproverDetailPage_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-header", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-toolbar");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "ion-buttons", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "ion-back-button");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "ion-title");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Approver Detail");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "ion-content", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "ion-list", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, ApproverDetailPage_ion_item_sliding_9_Template, 14, 5, "ion-item-sliding", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.values);
            }
        }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonList"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonItemSliding"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonThumbnail"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonLabel"]], styles: [".imgSave[_ngcontent-%COMP%] {\n  max-width: 20px;\n}\n\n.imgCancel[_ngcontent-%COMP%] {\n  max-width: 20px;\n}\n\n.item-native[_ngcontent-%COMP%] {\n  background-color: white !important;\n}\n\n  .days-btn.next-month-day {\n  opacity: 0 !important;\n}\n\n  .days-btn.last-month-day {\n  opacity: 0 !important;\n}\n\n.calendar[_ngcontent-%COMP%] {\n  margin: 8px;\n  padding: 8px;\n  border-radius: 8px;\n  z-index: 999;\n  margin-bottom: -10px;\n}\n\nion-header[_ngcontent-%COMP%] {\n  --ion-background-color: #ffffff;\n}\n\nion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%] {\n  --border-color: transparent;\n  --border-style: none !important;\n}\n\nion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   ion-title[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 600;\n}\n\n.status[_ngcontent-%COMP%] {\n  background: #ffffff;\n  padding: 16px;\n  border-radius: 8px;\n  box-shadow: 0px 2px 25px -12px rgba(0, 0, 0, 0.15);\n}\n\n.status[_ngcontent-%COMP%]   .status__step[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: space-around;\n  align-items: center;\n}\n\n.status[_ngcontent-%COMP%]   .status__step[_ngcontent-%COMP%]   .status__item.disable[_ngcontent-%COMP%] {\n  opacity: 0.25;\n}\n\n.status[_ngcontent-%COMP%]   .status__step[_ngcontent-%COMP%]   .status__item[_ngcontent-%COMP%]   .status__item--image[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: -10px;\n}\n\n.status[_ngcontent-%COMP%]   .status__step[_ngcontent-%COMP%]   .status__item[_ngcontent-%COMP%]   .status__item--image[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 45px;\n  object-fit: cover;\n  border-radius: 50%;\n}\n\n.status[_ngcontent-%COMP%]   .status__step[_ngcontent-%COMP%]   .status__item[_ngcontent-%COMP%]   .status__item--text[_ngcontent-%COMP%] {\n  width: 65px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.status[_ngcontent-%COMP%]   .status__step[_ngcontent-%COMP%]   .status__item[_ngcontent-%COMP%]   .status__item--text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  text-align: center;\n  font-weight: 500;\n  margin: 0;\n}\n\n.status[_ngcontent-%COMP%]   .status__step[_ngcontent-%COMP%]   .status__item[_ngcontent-%COMP%]   .status__item--icon[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 50px;\n}\n\n.status[_ngcontent-%COMP%]   .status__step[_ngcontent-%COMP%]   .status__item[_ngcontent-%COMP%]   .status__item--icon[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n}\n\n.status[_ngcontent-%COMP%]   .status__step[_ngcontent-%COMP%]   .status__item[_ngcontent-%COMP%]   .status__item--icon[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  font-weight: 500;\n  margin: 0;\n  margin-bottom: 6px;\n}\n\nion-content[_ngcontent-%COMP%] {\n  --ion-background-color: #f5f5f5;\n}\n\nion-content[_ngcontent-%COMP%]   .card-list[_ngcontent-%COMP%] {\n  margin: 8px;\n  padding: 8px;\n}\n\nion-content[_ngcontent-%COMP%]   .card-list[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%] {\n  --background: #ffffff;\n  --highlight-color-focused: transparent;\n  border-radius: 10px;\n  margin-bottom: 6px;\n  box-shadow: 0 1.2em 1.5em -0.9em #eeeeee;\n}\n\nion-content[_ngcontent-%COMP%]   .card-list[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-thumbnail[_ngcontent-%COMP%] {\n  --border-radius: 4px;\n  padding: 8px;\n}\n\nion-content[_ngcontent-%COMP%]   .card-list[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\nion-content[_ngcontent-%COMP%]   .card-list[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   p.label[_ngcontent-%COMP%] {\n  color: #111111;\n  font-size: 0.9rem;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: normal;\n  margin: 4px 0;\n}\n\nion-content[_ngcontent-%COMP%]   .card-list[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   p.price[_ngcontent-%COMP%] {\n  color: #111111;\n  font-size: 0.8rem;\n  font-weight: 600;\n  margin: 4px 0;\n}\n\nion-content[_ngcontent-%COMP%]   .card-list[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   p.price[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: red;\n  font-size: 1rem;\n}\n\nion-content[_ngcontent-%COMP%]   .card-list[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   p.ot[_ngcontent-%COMP%] {\n  text-align: right;\n}\n\nion-content[_ngcontent-%COMP%]   .textRight[_ngcontent-%COMP%] {\n  float: right;\n}\n\nion-content[_ngcontent-%COMP%]   ion-thumbnail[_ngcontent-%COMP%] {\n  margin-top: 0px;\n}\n\n.popover-content.sc-ion-popover-md[_ngcontent-%COMP%] {\n  top: 0px !important;\n}\n\n.border-radius-25[_ngcontent-%COMP%] {\n  border-radius: 25px;\n}\n\nhr.dashed[_ngcontent-%COMP%] {\n  border-top: 3px dashed #bbb;\n}\n\n.text-topic[_ngcontent-%COMP%] {\n  margin-left: 15px;\n  margin-right: 10px;\n  margin-bottom: -3px;\n  border-bottom: 2px solid #0000004a;\n}\n\n.mt-10[_ngcontent-%COMP%] {\n  margin-top: 25px;\n}\n\nion-checkbox[_ngcontent-%COMP%] {\n  --size: 25px;\n  --background-checked: #2c46bd;\n}\n\nion-checkbox[_ngcontent-%COMP%]::part(container) {\n  border-radius: 6px;\n  border: 2px solid #2c46bd;\n}\n\n.ion-color-white[_ngcontent-%COMP%] {\n  --ion-color-base: var(--ion-color-white, #fff) !important;\n  --ion-color-base-rgb: var(--ion-color-white-rgb, 61, 194, 255) !important;\n  --ion-color-contrast: var(--ion-color-white-contrast, rgb(1, 1, 1)) !important;\n  --ion-color-contrast-rgb: var(--ion-color-white-contrast-rgb, 255, 255, 255) !important;\n  --ion-color-shade: var(--ion-color-white-shade, #36abe0) !important;\n  --ion-color-tint: var(--ion-color-white-tint, #50c8ff) !important;\n  border-radius: 25px;\n}"] });
    return ApproverDetailPage;
})();


/***/ })

}]);