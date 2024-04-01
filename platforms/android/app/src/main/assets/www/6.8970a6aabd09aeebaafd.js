(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

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

/***/ "JA1H":
/*!***************************************************!*\
  !*** ./src/app/pages/customer/customer.module.ts ***!
  \***************************************************/
/*! exports provided: CustomerPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerPageModule", function() { return CustomerPageModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _customer_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./customer.page */ "Jxxq");
/* harmony import */ var _customer_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./customer-routing.module */ "oH7p");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");






let CustomerPageModule = /*@__PURE__*/ (() => {
    class CustomerPageModule {
    }
    CustomerPageModule.ɵfac = function CustomerPageModule_Factory(t) { return new (t || CustomerPageModule)(); };
    CustomerPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: CustomerPageModule });
    CustomerPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _customer_routing_module__WEBPACK_IMPORTED_MODULE_2__["CustomerPageRoutingModule"]]] });
    return CustomerPageModule;
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](CustomerPageModule, { declarations: [_customer_page__WEBPACK_IMPORTED_MODULE_1__["CustomerPage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _customer_routing_module__WEBPACK_IMPORTED_MODULE_2__["CustomerPageRoutingModule"]] }); })();


/***/ }),

/***/ "Jxxq":
/*!*************************************************!*\
  !*** ./src/app/pages/customer/customer.page.ts ***!
  \*************************************************/
/*! exports provided: CustomerPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerPage", function() { return CustomerPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _services_utils_moment_moment_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/utils/moment/moment.service */ "9cE+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_api_customer_customer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/api/customer/customer.service */ "zGUy");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_storage_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../services/storage/storage.service */ "E2f4");
/* harmony import */ var _services_utils_loading_loading_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../services/utils/loading/loading.service */ "YMUU");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");










function CustomerPage_ion_item_sliding_24_h2_5_Template(rf, ctx) {
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
function CustomerPage_ion_item_sliding_24_p_6_Template(rf, ctx) {
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
function CustomerPage_ion_item_sliding_24_p_7_Template(rf, ctx) {
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
function CustomerPage_ion_item_sliding_24_img_13_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 26);
    }
    if (rf & 2) {
        const i_r9 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("alt", i_r9);
    }
}
function CustomerPage_ion_item_sliding_24_Template(rf, ctx) {
    if (rf & 1) {
        const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-item-sliding", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CustomerPage_ion_item_sliding_24_Template_ion_item_sliding_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11); const customer_r1 = ctx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r10.viewDetail(customer_r1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "ion-avatar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("error", function CustomerPage_ion_item_sliding_24_Template_img_error_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11); const customer_r1 = ctx.$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r12.getAvatar($event, customer_r1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "ion-label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, CustomerPage_ion_item_sliding_24_h2_5_Template, 2, 1, "h2", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, CustomerPage_ion_item_sliding_24_p_6_Template, 2, 2, "p", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, CustomerPage_ion_item_sliding_24_p_7_Template, 2, 1, "p", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, CustomerPage_ion_item_sliding_24_img_13_Template, 1, 1, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "ion-item-options", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "ion-item-option", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CustomerPage_ion_item_sliding_24_Template_ion_item_option_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11); const customer_r1 = ctx.$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r13.removeCustomer(customer_r1.customer_id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "ion-icon", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const customer_r1 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", customer_r1.img_member, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", customer_r1.nickname);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", customer_r1.first_name);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", customer_r1.birthday_full);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", customer_r1 == null ? null : customer_r1.img_card, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](customer_r1 == null ? null : customer_r1.hh_id);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", customer_r1.rating);
    }
}
let CustomerPage = /*@__PURE__*/ (() => {
    class CustomerPage {
        constructor(router, api, actionSheetController, storage, loading) {
            this.router = router;
            this.api = api;
            this.actionSheetController = actionSheetController;
            this.storage = storage;
            this.loading = loading;
            this.customers = [];
            this.customersInit = [];
            this.searchTerm = '';
            this.ALLOW_CREATE_CONTACT = 'Y';
        }
        ngOnInit() {
            this.getUserInfo();
        }
        ionViewDidEnter() {
            this.init();
        }
        init() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                const config = yield this.storage.get('CONFIG');
                this.ALLOW_CREATE_CONTACT = config.hisher.allow_create_contact;
                try {
                    yield this.loading.present();
                    const customers = yield this.api.getCustomerByEmp(this.user.emp_id);
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
                        const rating = (count) => new Array(count);
                        const img_avatar = p.gender === 'M' ? 'assets/images/avatar-male.svg' : 'assets/images/avatar-female.svg';
                        let img_member = `https://iccapp-minio.icc.co.th:9000/hisher/profile/${p.hh_id}/${p.hh_id}.jpg?alt=media`;
                        if (p.line_picture) {
                            img_member = p.line_picture;
                        }
                        return Object.assign(Object.assign({}, p), { img_card: img(p.class_card), birthday_full: birthday(p.birthday), rating: rating(p.rating), img_avatar: img_avatar, img_member: img_member });
                    });
                    // console.log(datas);
                    this.customers = datas || [];
                    this.customersInit = datas || [];
                    this.loading.dismiss();
                }
                catch (error) {
                    console.log(error);
                    this.customers = [];
                    this.customersInit = [];
                    this.loading.dismiss();
                }
            });
        }
        doRefresh(event) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                setTimeout(() => {
                    this.init();
                    event.target.complete();
                }, 2000);
            });
        }
        getUserInfo() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                const info = yield this.storage.get('USER_INFO');
                this.user = info;
            });
        }
        addCustomer() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (this.ALLOW_CREATE_CONTACT === 'Y') {
                    const actionSheet = yield this.actionSheetController.create({
                        header: 'Menus',
                        cssClass: 'my-custom-class',
                        buttons: [
                            {
                                text: 'สร้างรายชื่อใหม่',
                                icon: 'add-circle-outline',
                                handler: () => {
                                    this.router.navigate(['customer/customer-new']);
                                },
                            },
                            {
                                text: 'เพิ่มจากรายชื่อสมาชิกที่เคยขาย',
                                icon: 'person-add-outline',
                                handler: () => {
                                    this.router.navigate(['customer/customer-add', { type: 'csg' }]);
                                },
                            },
                            {
                                text: 'เพิ่มจากรายชื่อสมาชิกจากร้านค้าที่ลงทะเบียน',
                                icon: 'person-add-outline',
                                handler: () => {
                                    this.router.navigate(['customer/customer-add', { type: 'register' }]);
                                },
                            },
                            {
                                text: 'ปิด',
                                icon: 'close',
                                role: 'cancel',
                                handler: () => {
                                    console.log('Cancel clicked');
                                },
                            },
                        ],
                    });
                    yield actionSheet.present();
                }
                else {
                    const actionSheet = yield this.actionSheetController.create({
                        header: 'Menus',
                        cssClass: 'my-custom-class',
                        buttons: [
                            {
                                text: 'เพิ่มจากรายชื่อสมาชิกที่เคยขาย',
                                icon: 'person-add-outline',
                                handler: () => {
                                    this.router.navigate(['customer/customer-add', { type: 'csg' }]);
                                },
                            },
                            {
                                text: 'เพิ่มจากรายชื่อสมาชิกจากร้านค้าที่ลงทะเบียน',
                                icon: 'person-add-outline',
                                handler: () => {
                                    this.router.navigate(['customer/customer-add', { type: 'register' }]);
                                },
                            },
                            {
                                text: 'ปิด',
                                icon: 'close',
                                role: 'cancel',
                                handler: () => {
                                    console.log('Cancel clicked');
                                },
                            },
                        ],
                    });
                    yield actionSheet.present();
                }
            });
        }
        removeCustomer(id) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                try {
                    const remove = yield this.api.deleteCustomer(id);
                    this.init();
                }
                catch (error) {
                    console.log(error);
                    this.loading.dismiss();
                }
            });
        }
        viewDetail(data) {
            console.log('data', data);
            this.router.navigate(['/customer/customer-view'], { state: Object.assign({}, data) });
        }
        getAvatar(event, customer) {
            //  console.log('error->',customer)
            return event.target.src = customer.img_avatar;
        }
        filterItems(searchTerm) {
            console.log(this.customersInit);
            console.log('searchTerm=>' + searchTerm);
            return this.customersInit.filter((item) => {
                return (item.nickname.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1 ||
                    item.first_name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1 ||
                    item.last_name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1);
            });
        }
        setFilteredItems() {
            this.customers = this.filterItems(this.searchTerm);
        }
    }
    CustomerPage.ɵfac = function CustomerPage_Factory(t) { return new (t || CustomerPage)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_api_customer_customer_service__WEBPACK_IMPORTED_MODULE_4__["CustomerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ActionSheetController"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_utils_loading_loading_service__WEBPACK_IMPORTED_MODULE_7__["LoadingService"])); };
    CustomerPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CustomerPage, selectors: [["app-customer"]], decls: 25, vars: 8, consts: [[1, "ion-no-border"], ["slot", "start"], ["fullscreen", "true"], ["slot", "fixed", 3, "ionRefresh"], ["refreshingSpinner", "crescent"], ["vertical", "bottom", "horizontal", "end", "slot", "fixed"], [3, "click"], ["name", "add"], [1, "section__search"], ["debounce", "500", "placeholder", "\u0E04\u0E49\u0E19\u0E2B\u0E32\u0E25\u0E39\u0E01\u0E04\u0E49\u0E32", "animated", "", 3, "ngModel", "ngModelChange", "ionChange"], [1, "section__list"], [1, "section__list__total"], [1, "right"], [1, "section__list__item"], ["lines", "none"], [3, "click", 4, "ngFor", "ngForOf"], [3, "src", "error"], [1, "info"], [4, "ngIf"], ["slot", "end"], [1, "hisher-info"], ["alt", "", 3, "src"], ["class", "rating", "src", "assets/images/customer/rating.svg", 3, "alt", 4, "ngFor", "ngForOf"], ["side", "end"], ["color", "danger", 3, "click"], ["slot", "icon-only", "name", "trash-outline"], ["src", "assets/images/customer/rating.svg", 1, "rating", 3, "alt"]], template: function CustomerPage_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-header", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-toolbar");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "ion-buttons", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "ion-back-button");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "ion-title");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "\u0E25\u0E39\u0E01\u0E04\u0E49\u0E32");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "ion-content", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "ion-refresher", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ionRefresh", function CustomerPage_Template_ion_refresher_ionRefresh_7_listener($event) { return ctx.doRefresh($event); });
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "ion-refresher-content", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "ion-fab", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "ion-fab-button", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CustomerPage_Template_ion_fab_button_click_10_listener() { return ctx.addCustomer(); });
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "ion-icon", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "section", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "ion-searchbar", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function CustomerPage_Template_ion_searchbar_ngModelChange_13_listener($event) { return ctx.searchTerm = $event; })("ionChange", function CustomerPage_Template_ion_searchbar_ionChange_13_listener() { return ctx.setFilteredItems(); });
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "section", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "p", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](20, "number");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](21, "number");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 13);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "ion-list", 14);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](24, CustomerPage_ion_item_sliding_24_Template, 17, 7, "ion-item-sliding", 15);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.searchTerm);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("\u0E41\u0E2A\u0E14\u0E07 ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](20, 4, ctx.customers.length), " \u0E08\u0E32\u0E01 ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](21, 6, ctx.customersInit.length), " \u0E23\u0E32\u0E22\u0E01\u0E32\u0E23");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.customers);
            }
        }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonRefresher"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonRefresherContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonFab"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonFabButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonSearchbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["TextValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonList"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonItemSliding"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonAvatar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonLabel"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonItemOptions"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonItemOption"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["DecimalPipe"]], styles: ["section.section__search[_ngcontent-%COMP%] {\n  margin: 10px;\n}\nsection.section__search[_ngcontent-%COMP%]   ion-searchbar[_ngcontent-%COMP%] {\n  --background: #ffffff;\n  --border-radius: 25px;\n  --box-shadow: none;\n}\nsection.section__list[_ngcontent-%COMP%] {\n  margin: 10px;\n  padding: 0 15px;\n}\nsection.section__list[_ngcontent-%COMP%]   .section__list__total[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: space-between;\n  width: 100%;\n}\nsection.section__list[_ngcontent-%COMP%]   .section__list__total[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  flex-basis: 50%;\n  font-size: 0.8rem;\n  font-weight: 500;\n}\nsection.section__list[_ngcontent-%COMP%]   .section__list__total[_ngcontent-%COMP%]   p.right[_ngcontent-%COMP%] {\n  text-align: right;\n}\nsection.section__list[_ngcontent-%COMP%]   .section__list__item[_ngcontent-%COMP%]   ion-item-sliding[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n}\nsection.section__list[_ngcontent-%COMP%]   .section__list__item[_ngcontent-%COMP%]   ion-item-sliding[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%] {\n  --background: #ffffff;\n  --border-radius: 12px;\n  --padding-top: 10px;\n  --padding-bottom: 10px;\n}\nsection.section__list[_ngcontent-%COMP%]   .section__list__item[_ngcontent-%COMP%]   ion-item-sliding[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\nsection.section__list[_ngcontent-%COMP%]   .section__list__item[_ngcontent-%COMP%]   ion-item-sliding[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n}\nsection.section__list[_ngcontent-%COMP%]   .section__list__item[_ngcontent-%COMP%]   ion-item-sliding[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   .hisher-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\nsection.section__list[_ngcontent-%COMP%]   .section__list__item[_ngcontent-%COMP%]   ion-item-sliding[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   .hisher-info[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 50px;\n  border-radius: 3px;\n}\nsection.section__list[_ngcontent-%COMP%]   .section__list__item[_ngcontent-%COMP%]   ion-item-sliding[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   .hisher-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  font-weight: 500;\n  margin: 0;\n}\nsection.section__list[_ngcontent-%COMP%]   .section__list__item[_ngcontent-%COMP%]   ion-item-sliding[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   img.rating[_ngcontent-%COMP%] {\n  width: 12px;\n}"] });
    return CustomerPage;
})();


/***/ }),

/***/ "oH7p":
/*!***********************************************************!*\
  !*** ./src/app/pages/customer/customer-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: CustomerPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerPageRoutingModule", function() { return CustomerPageRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _customer_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./customer.page */ "Jxxq");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    {
        path: '',
        component: _customer_page__WEBPACK_IMPORTED_MODULE_1__["CustomerPage"],
    },
    {
        path: 'customer-add',
        loadChildren: () => __webpack_require__.e(/*! import() */ 19).then(__webpack_require__.bind(null, /*! ./customer-add/customer-add.module */ "BesD")).then((m) => m.CustomerAddPageModule),
    },
    {
        path: 'customer-new',
        loadChildren: () => __webpack_require__.e(/*! import() */ 21).then(__webpack_require__.bind(null, /*! ./customer-new/customer-new.module */ "xGgW")).then(m => m.CustomerNewPageModule)
    },
    {
        path: 'customer-view',
        loadChildren: () => __webpack_require__.e(/*! import() */ 23).then(__webpack_require__.bind(null, /*! ./customer-view/customer-view.module */ "au34")).then(m => m.CustomerViewPageModule)
    },
    {
        path: 'customer-edit',
        loadChildren: () => __webpack_require__.e(/*! import() */ 20).then(__webpack_require__.bind(null, /*! ./customer-edit/customer-edit.module */ "oHZz")).then(m => m.CustomerEditPageModule)
    },
    {
        path: 'customer-transaction',
        loadChildren: () => __webpack_require__.e(/*! import() */ 22).then(__webpack_require__.bind(null, /*! ./customer-transaction/customer-transaction.module */ "LKdF")).then(m => m.CustomerTransactionPageModule)
    },
];
let CustomerPageRoutingModule = /*@__PURE__*/ (() => {
    class CustomerPageRoutingModule {
    }
    CustomerPageRoutingModule.ɵfac = function CustomerPageRoutingModule_Factory(t) { return new (t || CustomerPageRoutingModule)(); };
    CustomerPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: CustomerPageRoutingModule });
    CustomerPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
    return CustomerPageRoutingModule;
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](CustomerPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zGUy":
/*!***********************************************************!*\
  !*** ./src/app/services/api/customer/customer.service.ts ***!
  \***********************************************************/
/*! exports provided: CustomerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerService", function() { return CustomerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _api_root__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../api.root */ "ntc2");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




let CustomerService = /*@__PURE__*/ (() => {
    class CustomerService {
        constructor(http) {
            this.http = http;
        }
        getCustomerAll() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                const url = `${_api_root__WEBPACK_IMPORTED_MODULE_1__["ST_ROOT"].customer}/salestools/customers/all`;
                return this.http.get(url).toPromise();
            });
        }
        getCustomerByEmp(empId) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                const url = `${_api_root__WEBPACK_IMPORTED_MODULE_1__["ST_ROOT"].customer}/salestools/customers/getCustomer/${empId}`;
                return this.http.get(url).toPromise();
            });
        }
        getCustomerPurchaseByEmp(empId, day) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                const url = `${_api_root__WEBPACK_IMPORTED_MODULE_1__["ST_ROOT"].customer}/salestools/customers/GetCustomerPurchase`;
                return this.http.post(url, { csgid: empId, day: day }).toPromise();
            });
        }
        getCustomerPurchaseByEmpRegister(empId, day) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                const url = `${_api_root__WEBPACK_IMPORTED_MODULE_1__["ST_ROOT"].customer}/salestools/customers/GetCustomerPurchaseByRegister`;
                return this.http.post(url, { csgid: empId, day: day }).toPromise();
            });
        }
        createCustomer(body) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                const url = `${_api_root__WEBPACK_IMPORTED_MODULE_1__["ST_ROOT"].customer}/salestools/customers/create`;
                return this.http.post(url, body).toPromise();
            });
        }
        deleteCustomer(cutomerId) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                const url = `${_api_root__WEBPACK_IMPORTED_MODULE_1__["ST_ROOT"].customer}/salestools/customers/delete/${cutomerId}`;
                return this.http.delete(url).toPromise();
            });
        }
        updateRatingCustomer(body) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                const url = `${_api_root__WEBPACK_IMPORTED_MODULE_1__["ST_ROOT"].customer}/salestools/customers/updateRatingCustomer`;
                return this.http.patch(url, body).toPromise();
            });
        }
        getTransHeader(customerId, hisherId, date, row) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                const param = `customer_id=${customerId}&member_id=${hisherId}&last_date=${date}&r_end=${row}`;
                const url = `${_api_root__WEBPACK_IMPORTED_MODULE_1__["ST_ROOT"].customer}/salestools/transactions/header/?${param}`;
                return this.http.get(url).toPromise();
            });
        }
        getTransDetail(params) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                const param1 = `member_id=${params.hh_id}&docno_id=${params.docno}&transdate=${params.transdate}`;
                const param2 = `&store_id=${params.store_id}&branch_id=${params.branch_id}&counter_id=${params.counter_id}&cust_id=${params.cust_id}`;
                const url = `${_api_root__WEBPACK_IMPORTED_MODULE_1__["ST_ROOT"].customer}/salestools/transactions/detail/?${param1}${param2}`;
                return this.http.get(url).toPromise();
            });
        }
        updateCustomer(body) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                const url = `${_api_root__WEBPACK_IMPORTED_MODULE_1__["ST_ROOT"].customer}/salestools/customers/update`;
                return this.http.patch(url, body).toPromise();
            });
        }
    }
    CustomerService.ɵfac = function CustomerService_Factory(t) { return new (t || CustomerService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
    CustomerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: CustomerService, factory: CustomerService.ɵfac, providedIn: 'root' });
    return CustomerService;
})();


/***/ })

}]);