(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[19],{

/***/ "BesD":
/*!********************************************************************!*\
  !*** ./src/app/pages/customer/customer-add/customer-add.module.ts ***!
  \********************************************************************/
/*! exports provided: CustomerAddPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerAddPageModule", function() { return CustomerAddPageModule; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _customer_add_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./customer-add.page */ "tHbn");
/* harmony import */ var _customer_add_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./customer-add-routing.module */ "zF1E");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");






let CustomerAddPageModule = /*@__PURE__*/ (() => {
    class CustomerAddPageModule {
    }
    CustomerAddPageModule.ɵfac = function CustomerAddPageModule_Factory(t) { return new (t || CustomerAddPageModule)(); };
    CustomerAddPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: CustomerAddPageModule });
    CustomerAddPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _customer_add_routing_module__WEBPACK_IMPORTED_MODULE_3__["CustomerAddPageRoutingModule"]]] });
    return CustomerAddPageModule;
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](CustomerAddPageModule, { declarations: [_customer_add_page__WEBPACK_IMPORTED_MODULE_2__["CustomerAddPage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _customer_add_routing_module__WEBPACK_IMPORTED_MODULE_3__["CustomerAddPageRoutingModule"]] }); })();


/***/ }),

/***/ "tHbn":
/*!******************************************************************!*\
  !*** ./src/app/pages/customer/customer-add/customer-add.page.ts ***!
  \******************************************************************/
/*! exports provided: CustomerAddPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerAddPage", function() { return CustomerAddPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _services_utils_moment_moment_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../services/utils/moment/moment.service */ "9cE+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_api_customer_customer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../services/api/customer/customer.service */ "zGUy");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_utils_loading_loading_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../services/utils/loading/loading.service */ "YMUU");
/* harmony import */ var _services_storage_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../services/storage/storage.service */ "E2f4");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");









function CustomerAddPage_ion_item_22_h2_5_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const customer_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](customer_r1 == null ? null : customer_r1.nickname);
    }
}
function CustomerAddPage_ion_item_22_p_6_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const customer_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", customer_r1 == null ? null : customer_r1.first_name, " ", customer_r1 == null ? null : customer_r1.last_name, "");
    }
}
function CustomerAddPage_ion_item_22_p_7_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const customer_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("\u0E27\u0E31\u0E19\u0E40\u0E01\u0E34\u0E14 ", customer_r1 == null ? null : customer_r1.birthday_full, "");
    }
}
function CustomerAddPage_ion_item_22_Template(rf, ctx) {
    if (rf & 1) {
        const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-checkbox", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ionChange", function CustomerAddPage_ion_item_22_Template_ion_checkbox_ionChange_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9); const customer_r1 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r8.checkEvent(customer_r1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "ion-avatar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "ion-label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, CustomerAddPage_ion_item_22_h2_5_Template, 2, 1, "h2", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, CustomerAddPage_ion_item_22_p_6_Template, 2, 2, "p", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, CustomerAddPage_ion_item_22_p_7_Template, 2, 1, "p", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const customer_r1 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", customer_r1.gender === "M" ? "assets/images/avatar-male.svg" : "assets/images/avatar-female.svg", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", customer_r1.nickname);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", customer_r1.first_name);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", customer_r1.birthday_full);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", customer_r1 == null ? null : customer_r1.img_card, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](customer_r1 == null ? null : customer_r1.hisher_id);
    }
}
let CustomerAddPage = /*@__PURE__*/ (() => {
    class CustomerAddPage {
        constructor(api, alertController, loading, storage, navCtrl, route, actionSheetController) {
            this.api = api;
            this.alertController = alertController;
            this.loading = loading;
            this.storage = storage;
            this.navCtrl = navCtrl;
            this.route = route;
            this.actionSheetController = actionSheetController;
            this.type = 'csg';
            this.title = '';
            this.titleDay = '';
            this.customers = [];
            this.customersInit = [];
            this.customersSelected = [];
            this.route.params.subscribe(params => {
                this.type = params["type"];
                if (this.type == 'csg') {
                    this.title = 'เพิ่มจากสมาชิกที่เคยขาย';
                }
                else {
                    this.title = 'เพิ่มจากสมาชิกในร้านค้าที่ลงทะเบียน';
                }
            });
        }
        ngOnInit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                this.getCustomerPurchase(100);
            });
        }
        getCustomerPurchase(day) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                try {
                    yield this.loading.present();
                    yield this.getUserInfo();
                    this.titleDay = '(ย้อนหลัง ' + day + ' วัน)';
                    let customers;
                    if (this.type === 'csg') {
                        customers = yield this.api.getCustomerPurchaseByEmp(this.user.emp_id, day);
                    }
                    else {
                        customers = yield this.api.getCustomerPurchaseByEmpRegister(this.user.emp_id, day);
                    }
                    //const customers = await this.api.getCustomerPurchaseByEmp(this.user.emp_id);
                    const raws = customers.data || [];
                    const datas = raws.map((p) => {
                        const img = (tier) => {
                            if (!tier) {
                                return null;
                            }
                            const id = tier === 'PLATINUM' ? 'card-platinum' : tier === 'GOLD' ? 'card-gold' : tier === 'SILVER' ? 'card-silver' : 'card';
                            return `https://firebasestorage.googleapis.com/v0/b/hisherapp.appspot.com/o/images%2Fpartners%2FHISHER%2F${id}.jpg?alt=media`;
                        };
                        const birthday = (date) => (!date ? null : Object(_services_utils_moment_moment_service__WEBPACK_IMPORTED_MODULE_1__["moment"])(date, 'DD-MM-YYYY').format('DD MMMM YYYY'));
                        return Object.assign(Object.assign({}, p), { img_card: img(p.class_card), birthday_full: birthday(p.birthday) });
                    });
                    this.customers = datas || [];
                    this.customersInit = datas || [];
                    this.loading.dismiss();
                }
                catch (error) {
                    console.log(error);
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
        checkEvent(customer) {
            const index = this.customersSelected.findIndex((p) => p.hisher_id === customer.hisher_id);
            if (index < 0) {
                this.customersSelected.push(Object.assign(Object.assign({}, customer), { isCheck: true }));
            }
            else {
                this.customersSelected[index].isCheck = !this.customersSelected[index].isCheck;
            }
            const customers = this.customersSelected.filter((p) => p.isCheck);
            this.customersSelected = customers;
        }
        onAddCustomer() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                const body = this.customersSelected.map((p) => ({
                    emp_id: this.user.emp_id,
                    prefix: p.prefix1,
                    firstname: p.first_name,
                    lastname: p.last_name,
                    nickname: p.nickname,
                    gender: p.gender,
                    birthday: p.birthday,
                    email: p.email,
                    phone: p.phone,
                    line_id: p.line_id,
                    facebook_id: p.facebook_id,
                    status: p.status,
                    description: p.description,
                    hisher_id: p.hisher_id,
                    img_profile: p.img_profile,
                    img_avatar: p.img_avatar,
                    code_avatar: p.birthday,
                    store_id: this.user.store_id,
                    branch_id: this.user.branch_id,
                    counter_id: this.user.counter_id,
                    cust_id: this.user.cust_id,
                }));
                try {
                    yield this.loading.present();
                    const add = yield this.api.createCustomer({ datas: body });
                    this.loading.dismiss();
                    this.navCtrl.back();
                }
                catch (error) {
                    console.log(error);
                    this.loading.dismiss();
                }
            });
        }
        selectDate() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                const actionSheet = yield this.actionSheetController.create({
                    header: 'ดูย้อนหลัง',
                    buttons: [
                        {
                            text: '30 วัน',
                            icon: 'remove',
                            handler: () => {
                                this.getCustomerPurchase(30);
                            },
                        },
                        {
                            text: '60 วัน',
                            icon: 'remove',
                            handler: () => {
                                this.getCustomerPurchase(60);
                            },
                        },
                        {
                            text: '90 วัน',
                            icon: 'remove',
                            handler: () => {
                                this.getCustomerPurchase(90);
                            },
                        },
                        {
                            text: '180 วัน',
                            icon: 'remove',
                            handler: () => {
                                this.getCustomerPurchase(180);
                            },
                        },
                        {
                            text: '365 วัน',
                            icon: 'remove',
                            handler: () => {
                                this.getCustomerPurchase(365);
                            },
                        },
                        {
                            text: 'ยกเลิก',
                            icon: 'close',
                            role: 'cancel',
                            handler: () => {
                                console.log('Cancel clicked');
                            },
                        },
                    ],
                });
                yield actionSheet.present();
            });
        }
    }
    CustomerAddPage.ɵfac = function CustomerAddPage_Factory(t) { return new (t || CustomerAddPage)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_api_customer_customer_service__WEBPACK_IMPORTED_MODULE_3__["CustomerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_utils_loading_loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"])); };
    CustomerAddPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CustomerAddPage, selectors: [["app-customer-add"]], decls: 26, vars: 10, consts: [[1, "ion-no-border"], ["slot", "start"], ["slot", "end"], [3, "click"], ["slot", "icon-only", "name", "options-outline"], ["fullscreen", "true"], [1, "section__list"], [1, "section__list__total"], [1, "right"], [1, "section__list__item"], ["lines", "none"], [4, "ngFor", "ngForOf"], [1, "btn", "btn-primary", 3, "disabled", "click"], ["color", "dark", "slot", "start", 3, "ionChange"], [3, "src"], [1, "info"], [4, "ngIf"], [1, "hisher-info"], ["alt", "", 3, "src"]], template: function CustomerAddPage_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-header", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-toolbar");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "ion-buttons", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "ion-back-button");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "ion-title");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "br");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "ion-buttons", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "ion-button", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CustomerAddPage_Template_ion_button_click_9_listener() { return ctx.selectDate(); });
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "ion-icon", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "ion-content", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "section", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "p", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](18, "number");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](19, "number");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "ion-list", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](22, CustomerAddPage_ion_item_22_Template, 13, 6, "ion-item", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "ion-footer", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "button", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CustomerAddPage_Template_button_click_24_listener() { return ctx.onAddCustomer(); });
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "\u0E40\u0E1E\u0E34\u0E48\u0E21");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx.title, " ");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.titleDay);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("\u0E41\u0E2A\u0E14\u0E07 ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](18, 6, ctx.customers.length), " \u0E08\u0E32\u0E01 ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](19, 8, ctx.customersInit.length), " \u0E23\u0E32\u0E22\u0E01\u0E32\u0E23");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.customers);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx.customersSelected.length);
            }
        }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonList"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonFooter"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCheckbox"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["BooleanValueAccessor"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonAvatar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonLabel"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DecimalPipe"]], styles: ["section.section__list[_ngcontent-%COMP%] {\n  margin: 10px;\n  padding: 0 15px;\n}\nsection.section__list[_ngcontent-%COMP%]   .section__list__total[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: space-between;\n  width: 100%;\n}\nsection.section__list[_ngcontent-%COMP%]   .section__list__total[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  flex-basis: 50%;\n  font-size: 0.8rem;\n  font-weight: 500;\n}\nsection.section__list[_ngcontent-%COMP%]   .section__list__total[_ngcontent-%COMP%]   p.right[_ngcontent-%COMP%] {\n  text-align: right;\n}\nsection.section__list[_ngcontent-%COMP%]   .section__list__item[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%] {\n  --background: #ffffff;\n  --border-radius: 12px;\n  --padding-top: 10px;\n  --padding-bottom: 10px;\n  margin-bottom: 12px;\n}\nsection.section__list[_ngcontent-%COMP%]   .section__list__item[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\nsection.section__list[_ngcontent-%COMP%]   .section__list__item[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n}\nsection.section__list[_ngcontent-%COMP%]   .section__list__item[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   .hisher-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\nsection.section__list[_ngcontent-%COMP%]   .section__list__item[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   .hisher-info[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 50px;\n  border-radius: 3px;\n}\nsection.section__list[_ngcontent-%COMP%]   .section__list__item[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   .hisher-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  font-weight: 500;\n  margin: 0;\n}\nsection.section__list[_ngcontent-%COMP%]   .section__list__item[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   img.rating[_ngcontent-%COMP%] {\n  width: 12px;\n}\nion-footer[_ngcontent-%COMP%] {\n  padding: 0 25px;\n}"] });
    return CustomerAddPage;
})();


/***/ }),

/***/ "zF1E":
/*!****************************************************************************!*\
  !*** ./src/app/pages/customer/customer-add/customer-add-routing.module.ts ***!
  \****************************************************************************/
/*! exports provided: CustomerAddPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerAddPageRoutingModule", function() { return CustomerAddPageRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _customer_add_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./customer-add.page */ "tHbn");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    {
        path: '',
        component: _customer_add_page__WEBPACK_IMPORTED_MODULE_1__["CustomerAddPage"]
    }
];
let CustomerAddPageRoutingModule = /*@__PURE__*/ (() => {
    class CustomerAddPageRoutingModule {
    }
    CustomerAddPageRoutingModule.ɵfac = function CustomerAddPageRoutingModule_Factory(t) { return new (t || CustomerAddPageRoutingModule)(); };
    CustomerAddPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: CustomerAddPageRoutingModule });
    CustomerAddPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
    return CustomerAddPageRoutingModule;
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](CustomerAddPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ })

}]);