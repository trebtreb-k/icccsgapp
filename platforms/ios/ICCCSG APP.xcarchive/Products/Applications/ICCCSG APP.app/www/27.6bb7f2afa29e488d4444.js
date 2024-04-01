(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[27],{

/***/ "4MQV":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/guest-customer/customer-new/customer-new-routing.module.ts ***!
  \**********************************************************************************/
/*! exports provided: CustomerNewPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerNewPageRoutingModule", function() { return CustomerNewPageRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _customer_new_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./customer-new.page */ "lcRz");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    {
        path: '',
        component: _customer_new_page__WEBPACK_IMPORTED_MODULE_1__["CustomerNewPage"]
    }
];
let CustomerNewPageRoutingModule = /*@__PURE__*/ (() => {
    class CustomerNewPageRoutingModule {
    }
    CustomerNewPageRoutingModule.ɵfac = function CustomerNewPageRoutingModule_Factory(t) { return new (t || CustomerNewPageRoutingModule)(); };
    CustomerNewPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: CustomerNewPageRoutingModule });
    CustomerNewPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
    return CustomerNewPageRoutingModule;
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](CustomerNewPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "lcRz":
/*!************************************************************************!*\
  !*** ./src/app/pages/guest-customer/customer-new/customer-new.page.ts ***!
  \************************************************************************/
/*! exports provided: CustomerNewPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerNewPage", function() { return CustomerNewPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _services_utils_moment_moment_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../services/utils/moment/moment.service */ "9cE+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_api_guest_customer_guest_customer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../services/api/guest-customer/guest-customer.service */ "4Ksx");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_utils_loading_loading_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../services/utils/loading/loading.service */ "YMUU");
/* harmony import */ var _services_storage_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../../services/storage/storage.service */ "E2f4");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");










const _c0 = function (a1) { return { "form__item--input": true, invalid: a1 }; };
const _c1 = function (a1) { return { "form__item--select": true, invalid: a1 }; };
const _c2 = function (a2) { return { "form__item--input": true, icon: true, invalid: a2 }; };
let CustomerNewPage = /*@__PURE__*/ (() => {
    class CustomerNewPage {
        constructor(formBuild, api, alertController, loading, storage, navCtrl) {
            this.formBuild = formBuild;
            this.api = api;
            this.alertController = alertController;
            this.loading = loading;
            this.storage = storage;
            this.navCtrl = navCtrl;
            this.formCustomer = this.formBuild.group({
                emp_id: [null],
                prefix: [null],
                firstname: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])],
                lastname: [null],
                nickname: [null],
                gender: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])],
                birthday: [null],
                email: [null],
                phone: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(10)])],
                line_id: [null],
                facebook_id: [null],
                status: [null],
                description: [null],
                hisher_id: [null],
                img_profile: [null],
                img_avatar: [null],
                code_avatar: [null],
                store_id: [null],
                branch_id: [null],
                counter_id: [null],
                cust_id: [null],
            });
        }
        ngOnInit() {
            this.getUserInfo();
        }
        getUserInfo() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                const info = yield this.storage.get('USER_INFO');
                this.user = info;
            });
        }
        onAddCustomer() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                const { birthday } = this.formCustomer.value;
                const body = Object.assign(Object.assign({}, this.formCustomer.value), { emp_id: this.user.emp_id, birthday: !this.formCustomer.value.birthday ? null : Object(_services_utils_moment_moment_service__WEBPACK_IMPORTED_MODULE_2__["moment"])(birthday).format('DD/MM/YYYY'), store_id: this.user.store_id, branch_id: this.user.branch_id, counter_id: this.user.counter_id, cust_id: this.user.cust_id });
                try {
                    const add = yield this.api.createCustomer({ datas: [Object.assign({}, body)] });
                    this.navCtrl.back();
                }
                catch (error) {
                    console.log(error);
                }
            });
        }
    }
    CustomerNewPage.ɵfac = function CustomerNewPage_Factory(t) { return new (t || CustomerNewPage)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_api_guest_customer_guest_customer_service__WEBPACK_IMPORTED_MODULE_4__["GuestCustomerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_utils_loading_loading_service__WEBPACK_IMPORTED_MODULE_6__["LoadingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_7__["StorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"])); };
    CustomerNewPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: CustomerNewPage, selectors: [["app-customer-new"]], decls: 74, vars: 11, consts: [[1, "ion-no-border"], ["slot", "start"], ["fullscreen", "true"], [1, "form", 3, "formGroup"], [1, "form__item"], [1, "form__item--label"], ["type", "text", "placeholder", "\u0E0A\u0E37\u0E48\u0E2D\u0E40\u0E25\u0E48\u0E19", "formControlName", "nickname", 1, "form__item--input"], ["placeholder", "\u0E04\u0E33\u0E19\u0E33\u0E2B\u0E19\u0E49\u0E32\u0E0A\u0E37\u0E48\u0E2D", "interface", "action-sheet", "formControlName", "prefix", 1, "form__item--select"], ["value", "\u0E19\u0E32\u0E22"], ["value", "\u0E19\u0E32\u0E07"], ["value", "\u0E19\u0E32\u0E07\u0E2A\u0E32\u0E27"], ["type", "text", "placeholder", "\u0E0A\u0E37\u0E48\u0E2D\u0E08\u0E23\u0E34\u0E07", "formControlName", "firstname", 3, "ngClass"], ["type", "text", "placeholder", "\u0E19\u0E32\u0E21\u0E2A\u0E01\u0E38\u0E25", "formControlName", "lastname", 1, "form__item--input"], ["placeholder", "\u0E40\u0E1E\u0E28", "interface", "action-sheet", "formControlName", "gender", 3, "ngClass"], ["value", "F"], ["value", "M"], ["name", "calendar-outline", 1, "form__item--icon", "right"], ["placeholder", "\u0E27\u0E31\u0E19\u0E40\u0E01\u0E34\u0E14", "displayFormat", "DD MMMM YYYY", "pickerFormat", "DD MMMM YYYY", "formControlName", "birthday", 1, "form__item--datetime"], ["type", "text", "placeholder", "\u0E23\u0E2B\u0E31\u0E2A\u0E2A\u0E21\u0E32\u0E0A\u0E34\u0E01 His&Her", "formControlName", "hisher_id", 1, "form__item--input"], [1, "form__item--image"], ["src", "assets/images/customer/call.svg", "alt", ""], ["type", "tel", "maxlength", "10", "placeholder", "\u0E40\u0E1A\u0E2D\u0E23\u0E4C\u0E42\u0E17\u0E23\u0E28\u0E31\u0E1E\u0E17\u0E4C", "formControlName", "phone", 3, "ngClass"], ["src", "assets/images/customer/email.svg", "alt", ""], ["type", "email", "placeholder", "\u0E2D\u0E35\u0E40\u0E21\u0E25", "formControlName", "email", 1, "form__item--input", "icon"], ["src", "assets/images/customer/facebook.svg", "alt", ""], ["type", "text", "placeholder", "\u0E1A\u0E31\u0E0D\u0E0A\u0E35 Facebook", "formControlName", "facebook_id", 1, "form__item--input", "icon"], ["src", "assets/images/customer/line.svg", "alt", ""], ["type", "text", "placeholder", "\u0E1A\u0E31\u0E0D\u0E0A\u0E35 Line", "formControlName", "line_id", 1, "form__item--input", "icon"], ["placeholder", "\u0E23\u0E32\u0E22\u0E25\u0E30\u0E40\u0E2D\u0E35\u0E22\u0E14\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E40\u0E15\u0E34\u0E21", "rows", "6", "formControlName", "description", 1, "form__item--textarea"], [1, "btn", "btn-primary", 3, "disabled", "click"]], template: function CustomerNewPage_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-header", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "ion-toolbar");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "ion-buttons", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "ion-back-button");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "ion-title");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E23\u0E32\u0E22\u0E0A\u0E37\u0E48\u0E2D\u0E43\u0E2B\u0E21\u0E48");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "ion-content", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "form", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "\u0E0A\u0E37\u0E48\u0E2D\u0E40\u0E25\u0E48\u0E19");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "input", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "\u0E04\u0E33\u0E19\u0E33\u0E2B\u0E19\u0E49\u0E32\u0E0A\u0E37\u0E48\u0E2D");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "ion-select", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "ion-select-option", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "\u0E19\u0E32\u0E22");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "ion-select-option", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "\u0E19\u0E32\u0E07");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "ion-select-option", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "\u0E19\u0E32\u0E07\u0E2A\u0E32\u0E27");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "\u0E0A\u0E37\u0E48\u0E2D\u0E08\u0E23\u0E34\u0E07");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](25, "input", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "div", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, "\u0E19\u0E32\u0E21\u0E2A\u0E01\u0E38\u0E25");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](29, "input", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "div", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "div", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, "\u0E40\u0E1E\u0E28");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "ion-select", 13);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "ion-select-option", 14);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35, "\u0E2B\u0E0D\u0E34\u0E07");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "ion-select-option", 15);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](37, "\u0E0A\u0E32\u0E22");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "div", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "div", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](40, "\u0E27\u0E31\u0E19\u0E40\u0E01\u0E34\u0E14");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](41, "ion-icon", 16);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](42, "ion-datetime", 17);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "div", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "div", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](45, "\u0E23\u0E2B\u0E31\u0E2A\u0E2A\u0E21\u0E32\u0E0A\u0E34\u0E01 His&Her");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](46, "input", 18);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](47, "br");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "div", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "div", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](50, "\u0E0A\u0E48\u0E2D\u0E07\u0E17\u0E32\u0E07\u0E15\u0E34\u0E14\u0E15\u0E48\u0E2D");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "div", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "div", 19);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](53, "img", 20);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](54, "input", 21);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "div", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](56, "div", 19);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](57, "img", 22);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](58, "input", 23);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](59, "div", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](60, "div", 19);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](61, "img", 24);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](62, "input", 25);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](63, "div", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](64, "div", 19);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](65, "img", 26);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](66, "input", 27);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](67, "br");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](68, "div", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](69, "div", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](70, "\u0E23\u0E32\u0E22\u0E25\u0E30\u0E40\u0E2D\u0E35\u0E22\u0E14\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E40\u0E15\u0E34\u0E21");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](71, "ion-textarea", 28);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](72, "button", 29);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CustomerNewPage_Template_button_click_72_listener() { return ctx.onAddCustomer(); });
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](73, "\u0E40\u0E1E\u0E34\u0E48\u0E21");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                let tmp_1_0 = null;
                let tmp_2_0 = null;
                let tmp_3_0 = null;
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.formCustomer);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](18);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](5, _c0, (tmp_1_0 = ctx.formCustomer.get("firstname")) == null ? null : tmp_1_0.invalid));
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](7, _c1, (tmp_2_0 = ctx.formCustomer.get("gender")) == null ? null : tmp_2_0.invalid));
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](21);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](9, _c2, (tmp_3_0 = ctx.formCustomer.get("phone")) == null ? null : tmp_3_0.invalid));
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](18);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx.formCustomer.valid);
            }
        }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonSelect"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["SelectValueAccessor"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonSelectOption"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonDatetime"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MaxLengthValidator"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonTextarea"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["TextValueAccessor"]], styles: [".form__item[_ngcontent-%COMP%] {\n  margin: 8px 0;\n}\n.form__item[_ngcontent-%COMP%]   .form__item--input[_ngcontent-%COMP%], .form__item[_ngcontent-%COMP%]   .form__item--textarea[_ngcontent-%COMP%], .form__item[_ngcontent-%COMP%]   .form__item--select[_ngcontent-%COMP%], .form__item[_ngcontent-%COMP%]   .form__item--datetime[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  background-color: #ffffff;\n  color: #000000;\n}"] });
    return CustomerNewPage;
})();


/***/ }),

/***/ "oByQ":
/*!**************************************************************************!*\
  !*** ./src/app/pages/guest-customer/customer-new/customer-new.module.ts ***!
  \**************************************************************************/
/*! exports provided: CustomerNewPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerNewPageModule", function() { return CustomerNewPageModule; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _customer_new_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./customer-new.page */ "lcRz");
/* harmony import */ var _customer_new_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./customer-new-routing.module */ "4MQV");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");






let CustomerNewPageModule = /*@__PURE__*/ (() => {
    class CustomerNewPageModule {
    }
    CustomerNewPageModule.ɵfac = function CustomerNewPageModule_Factory(t) { return new (t || CustomerNewPageModule)(); };
    CustomerNewPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: CustomerNewPageModule });
    CustomerNewPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _customer_new_routing_module__WEBPACK_IMPORTED_MODULE_3__["CustomerNewPageRoutingModule"]]] });
    return CustomerNewPageModule;
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](CustomerNewPageModule, { declarations: [_customer_new_page__WEBPACK_IMPORTED_MODULE_2__["CustomerNewPage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _customer_new_routing_module__WEBPACK_IMPORTED_MODULE_3__["CustomerNewPageRoutingModule"]] }); })();


/***/ })

}]);