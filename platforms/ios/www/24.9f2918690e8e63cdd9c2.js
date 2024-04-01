(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[24],{

/***/ "hyvX":
/*!***********************************************************************!*\
  !*** ./src/app/pages/direct-to-customer/direct-to-customer.module.ts ***!
  \***********************************************************************/
/*! exports provided: DirectToCustomerPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DirectToCustomerPageModule", function() { return DirectToCustomerPageModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ion2_calendar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ion2-calendar */ "zTSL");
/* harmony import */ var ion2_calendar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ion2_calendar__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _direct_to_customer_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./direct-to-customer-routing.module */ "wsUZ");
/* harmony import */ var _direct_to_customer_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./direct-to-customer.page */ "pabr");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");







let DirectToCustomerPageModule = /*@__PURE__*/ (() => {
    class DirectToCustomerPageModule {
    }
    DirectToCustomerPageModule.ɵfac = function DirectToCustomerPageModule_Factory(t) { return new (t || DirectToCustomerPageModule)(); };
    DirectToCustomerPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: DirectToCustomerPageModule });
    DirectToCustomerPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _direct_to_customer_routing_module__WEBPACK_IMPORTED_MODULE_4__["DirectToCustomerPageRoutingModule"],
                ion2_calendar__WEBPACK_IMPORTED_MODULE_1__["CalendarModule"]
            ]] });
    return DirectToCustomerPageModule;
})();
(function () {
    (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](DirectToCustomerPageModule, { declarations: [_direct_to_customer_page__WEBPACK_IMPORTED_MODULE_5__["DirectToCustomerPage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _direct_to_customer_routing_module__WEBPACK_IMPORTED_MODULE_4__["DirectToCustomerPageRoutingModule"],
            ion2_calendar__WEBPACK_IMPORTED_MODULE_1__["CalendarModule"]] });
})();


/***/ }),

/***/ "pabr":
/*!*********************************************************************!*\
  !*** ./src/app/pages/direct-to-customer/direct-to-customer.page.ts ***!
  \*********************************************************************/
/*! exports provided: DirectToCustomerPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DirectToCustomerPage", function() { return DirectToCustomerPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _services_utils_moment_moment_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/utils/moment/moment.service */ "9cE+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_api_income_income_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/api/income/income.service */ "afkE");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var ion2_calendar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ion2-calendar */ "zTSL");
/* harmony import */ var ion2_calendar__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ion2_calendar__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");







function DirectToCustomerPage_h6_12_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Affiliate ID ", ctx_r0.affiliate_id, "");
    }
}
function DirectToCustomerPage_div_15_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
}
function DirectToCustomerPage_ion_item_18_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-thumbnail", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](14, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const data_r3 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", data_r3.image, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Order No. ", data_r3.order_id, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", data_r3.brand, " ", data_r3.product_sku, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](data_r3.product_name);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Amount: ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](14, 8, data_r3.netprice), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Estimate: ", data_r3.incentive_expect, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Incentive: ", data_r3.incentive_complete, "");
    }
}
let DirectToCustomerPage = /*@__PURE__*/ (() => {
    class DirectToCustomerPage {
        constructor(api) {
            this.api = api;
            this.dataApi = [];
            this.loadData = [];
            this.loadDataCalendar = [];
            this.monthYear = Object(_services_utils_moment_moment_service__WEBPACK_IMPORTED_MODULE_1__["moment"])().format('MMYYYY');
            this.dateSelect = Object(_services_utils_moment_moment_service__WEBPACK_IMPORTED_MODULE_1__["moment"])().format('DD/MM/YYYY');
            this.affiliate_id = '';
        }
        ngOnInit() {
        }
        ionViewDidEnter() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                this.getData(this.monthYear);
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
                    return (this.dateSelect == datas.order_create.substring(0, 10));
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
                this.getData(this.monthYear);
            });
        }
        getData(transDate) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                this.loaded = false;
                let response = yield this.api.getDirectToCustomer(transDate);
                this.dataApi = response.datas;
                /*
                this.dataApi = [
                  {
                    period: "202107_P1",
                    order_id: "19641",
                    order_status: "wait_receive",
                    order_status_desc: "จัดส่งแล้ว รอรับสินค้า สำหรับ order ที่รับชำระเงินผ่าน LnwPay",
                    order_create: "16/07/2021 15:27:13",
                    affiliate_id: "5993861",
                    emp_id: "58949",
                    emp_type: "OFFICE",
                    div_desc: "ฝ่าย H",
                    dept_id: "HWS",
                    dept_id2: "HWS",
                    emp_name: "น.ส.วรนาถ ลับบัวงาม",
                    completed_status: "Y",
                    brand_count: 1,
                    product_sku_count: 1,
                    comm_type_count: 1,
                    quantity: 1,
                    netprice: 630,
                    incentive_expect: 0,
                    incentive_complete: 12,
                    product_sku: "SAPKMIRFC1",
                    product_name: "BSC BIO PERFECT POWDER SPF 25 PA++ (Refiil ) บีเอสซี ไบโอ เพอร์เฟค พาวเดอร์ ฟาวเดชั่น (รีฟิล) C1 ผิวขาว",
                    pruduct_qty: 1,
                    price: 630,
                    discount: 0,
                    product_net_price: 630,
                    brand: "AHP-",
                    comm_amt: 12,
                    expect_comm: 0,
                    complete_comm: 12,
                    comm_type: "COMM_1",
                    set_brand: "%",
                    set_product_sku: "%",
                    set_date_start: "01/01/2021 00:00:00",
                    set_date_end: "Invalid date",
                    set_used: "R",
                    set_rate: 2,
                    set_amt: 0,
                    set_flag: "Y",
                    },
                    {
                    period: "202107_P1",
                    order_id: "19878",
                    order_status: "sent",
                    order_status_desc: "จัดส่งแล้ว สำหรับ order  ที่ไม่ได้รับชำระผ่าน LnwPay",
                    order_create: "16/07/2021 09:21:39",
                    affiliate_id: "6032169",
                    emp_id: "95835",
                    emp_type: "OFFICE",
                    div_desc: "ฝ่าย R",
                    dept_id: "RTA",
                    dept_id2: "RTA",
                    emp_name: "น.ส.พรทิพย์ สุขเลิศนันทกิจ",
                    completed_status: "Y",
                    brand_count: 1,
                    product_sku_count: 1,
                    comm_type_count: 1,
                    quantity: 1,
                    netprice: 1290,
                    incentive_expect: 0,
                    incentive_complete: 24,
                    product_sku: "BTSETA03",
                    product_name: "ชุดแคทเธอรีน+บุญทิพย์",
                    pruduct_qty: 1,
                    price: 1290,
                    discount: 0,
                    product_net_price: 1290,
                    brand: "ART-",
                    comm_amt: 24,
                    expect_comm: 0,
                    complete_comm: 24,
                    comm_type: "COMM_1",
                    set_brand: "%",
                    set_product_sku: "%",
                    set_date_start: "01/01/2021 00:00:00",
                    set_date_end: "Invalid date",
                    set_used: "R",
                    set_rate: 2,
                    set_amt: 0,
                    set_flag: "Y",
                    },
                    {
                    period: "202107_P1",
                    order_id: "20130",
                    order_status: "wait_receive",
                    order_status_desc: "จัดส่งแล้ว รอรับสินค้า สำหรับ order ที่รับชำระเงินผ่าน LnwPay",
                    order_create: "15/07/2021 08:46:01",
                    affiliate_id: "5993861",
                    emp_id: "58949",
                    emp_type: "OFFICE",
                    div_desc: "ฝ่าย H",
                    dept_id: "HWS",
                    dept_id2: "HWS",
                    emp_name: "น.ส.วรนาถ ลับบัวงาม",
                    completed_status: "N",
                    brand_count: 2,
                    product_sku_count: 2,
                    comm_type_count: 1,
                    quantity: 5,
                    netprice: 1338,
                    incentive_expect: 0,
                    incentive_complete: 25,
                    product_sku: "BAPKSBPFC1",
                    product_name: "BSC Pure Care แป้งเค้กควบคุมความมัน SHINE FREE POWDER C1 ผิวขาว",
                    pruduct_qty: 2,
                    price: 258,
                    discount: 0,
                    product_net_price: 258,
                    brand: "AHC-",
                    comm_amt: 5,
                    expect_comm: 0,
                    complete_comm: 5,
                    comm_type: "COMM_1",
                    set_brand: "%",
                    set_product_sku: "%",
                    set_date_start: "01/01/2021 00:00:00",
                    set_date_end: "Invalid date",
                    set_used: "R",
                    set_rate: 2,
                    set_amt: 0,
                    set_flag: "Y",
                    },
                    {
                    period: "202107_P1",
                    order_id: "20130",
                    order_status: "wait_receive",
                    order_status_desc: "จัดส่งแล้ว รอรับสินค้า สำหรับ order ที่รับชำระเงินผ่าน LnwPay",
                    order_create: "24/05/2021 08:46:01",
                    affiliate_id: "5993861",
                    emp_id: "58949",
                    emp_type: "OFFICE",
                    div_desc: "ฝ่าย H",
                    dept_id: "HWS",
                    dept_id2: "HWS",
                    emp_name: "น.ส.วรนาถ ลับบัวงาม",
                    completed_status: "Y",
                    brand_count: 2,
                    product_sku_count: 2,
                    comm_type_count: 1,
                    quantity: 5,
                    netprice: 1338,
                    incentive_expect: 0,
                    incentive_complete: 25,
                    product_sku: "SAPKHSR C2",
                    product_name: "BSC SUPER EXTRA COVER HIGH COVERAGE POWDER SPF30 PA+++ (REFILL) บีเอสซี ซุปเปอร์ เอ็กซ์ตร้า คัฟเวอร์ เอสพีเอฟ 30 พีเอ +++ (รีฟิล) C2 ผิวขาวเหลือง",
                    pruduct_qty: 3,
                    price: 1080,
                    discount: 0,
                    product_net_price: 1080,
                    brand: "AHP-",
                    comm_amt: 20,
                    expect_comm: 0,
                    complete_comm: 20,
                    comm_type: "COMM_1",
                    set_brand: "%",
                    set_product_sku: "%",
                    set_date_start: "01/01/2021 00:00:00",
                    set_date_end: "Invalid date",
                    set_used: "R",
                    set_rate: 2,
                    set_amt: 0,
                    set_flag: "Y",
                    }
                ]
               */
                this.dataApi = this.dataApi.map((datas) => (Object.assign(Object.assign({}, datas), { image: (datas.completed_status === 'Y') ? 'assets/images/direct-to-customer/checked.svg' : 'assets/images/direct-to-customer/clock.svg' })));
                // this.loadData = this.dataApi
                // console.log('-->',this.loadData)
                if (this.dataApi.length > 0) {
                    this.affiliate_id = this.dataApi[0].affiliate_id;
                }
                console.log(this.dateSelect);
                this.loadData = this.dataApi.filter((datas) => {
                    // console.log('xxx=',datas.order_create.substring(0,10))
                    return (this.dateSelect == datas.order_create.substring(0, 10));
                });
                console.log('loadData-->', this.loadData);
                let i = -1;
                let j = -1;
                let data = [];
                let oldDate = '';
                this.dataApi.forEach((e) => {
                    i++;
                    const dateC = Object(_services_utils_moment_moment_service__WEBPACK_IMPORTED_MODULE_1__["moment"])(e.order_create.substring(0, 10), 'DD/MM/YYYY').format(); //'MM-DD-YYYY');
                    if (oldDate != dateC || i == 0) {
                        j++;
                        data.push({
                            date: new Date(dateC),
                            cssClass: e.completed_status === 'Y'
                                ? 'custom-calendar workdayShow'
                                : 'custom-calendar holiday',
                            subTitle: null,
                        });
                    }
                    else {
                        console.log('xxx->' + j, data[j]);
                        data[j].cssClass = e.completed_status === 'Y'
                            ? 'custom-calendar workdayShow'
                            : 'custom-calendar holiday';
                    }
                    oldDate = dateC;
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
    }
    DirectToCustomerPage.ɵfac = function DirectToCustomerPage_Factory(t) { return new (t || DirectToCustomerPage)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_api_income_income_service__WEBPACK_IMPORTED_MODULE_3__["IncomeService"])); };
    DirectToCustomerPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: DirectToCustomerPage, selectors: [["app-direct-to-customer"]], decls: 19, vars: 7, consts: [[1, "ion-no-border"], ["slot", "start"], ["fullscreen", "true"], ["slot", "fixed", 3, "ionRefresh"], [1, "calendar"], [3, "type", "options", "format", "change", "monthChange"], [2, "text-align", "center"], [4, "ngIf"], ["style", "text-align: center;", 4, "ngIf"], [1, "card-list"], ["lines", "none"], [4, "ngFor", "ngForOf"], ["src", "./assets/images/loading/loading-spinner-transparent.svg", 2, "width", "80px"], [3, "src"], [1, "label"], [1, "label", 2, "color", "rgb(88, 88, 88)"], [2, "display", "flex", "flex-direction", "row"], [2, "flex-basis", "30%"], [2, "flex-basis", "10%"]], template: function DirectToCustomerPage_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-header", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-toolbar");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "ion-buttons", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "ion-back-button");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "ion-title");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Direct to Customer");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "ion-content", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "ion-refresher", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ionRefresh", function DirectToCustomerPage_Template_ion_refresher_ionRefresh_7_listener($event) { return ctx.doRefresh($event); });
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "ion-refresher-content");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "ion-calendar", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function DirectToCustomerPage_Template_ion_calendar_change_10_listener($event) { return ctx.getEventForDays($event); })("monthChange", function DirectToCustomerPage_Template_ion_calendar_monthChange_10_listener($event) { return ctx.getEventForMonths($event); });
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, DirectToCustomerPage_h6_12_Template, 2, 1, "h6", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "h6");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, DirectToCustomerPage_div_15_Template, 2, 0, "div", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "ion-list", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, DirectToCustomerPage_ion_item_18_Template, 24, 10, "ion-item", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("type", ctx.type)("options", ctx.optionsMulti)("format", "DD-MM-YYYY");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.affiliate_id !== "");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48 ", ctx.dateSelect, "");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.loaded === false);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.loadData);
            }
        }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonRefresher"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonRefresherContent"], ion2_calendar__WEBPACK_IMPORTED_MODULE_5__["CalendarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonList"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonThumbnail"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonLabel"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DecimalPipe"]], styles: [".calendar[_ngcontent-%COMP%] {\n  margin: 8px;\n  padding: 8px;\n  background: #ffffff;\n  border-radius: 8px;\n}\n\n.card-list[_ngcontent-%COMP%] {\n  margin: 8px;\n}\n\n.card-list[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%] {\n  --background: #ffffff;\n  --highlight-color-focused: transparent;\n  border-radius: 10px;\n  margin-bottom: 6px;\n  box-shadow: 0 1.2em 1.5em -0.9em #eeeeee;\n}\n\n.card-list[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-thumbnail[_ngcontent-%COMP%] {\n  --border-radius: 4px;\n  padding: 8px;\n}\n\n.card-list[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.card-list[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   p.label[_ngcontent-%COMP%] {\n  color: #111111;\n  font-size: 0.9rem;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: normal;\n  margin: 4px 0;\n}\n\n.card-list[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   p.price[_ngcontent-%COMP%] {\n  color: #111111;\n  font-size: 0.8rem;\n  font-weight: 600;\n  margin: 4px 0;\n}\n\n.card-list[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   p.price[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: red;\n  font-size: 1rem;\n}\n\n.card-list[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   p.ot[_ngcontent-%COMP%] {\n  text-align: right;\n}"] });
    return DirectToCustomerPage;
})();


/***/ }),

/***/ "wsUZ":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/direct-to-customer/direct-to-customer-routing.module.ts ***!
  \*******************************************************************************/
/*! exports provided: DirectToCustomerPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DirectToCustomerPageRoutingModule", function() { return DirectToCustomerPageRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _direct_to_customer_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./direct-to-customer.page */ "pabr");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    {
        path: '',
        component: _direct_to_customer_page__WEBPACK_IMPORTED_MODULE_1__["DirectToCustomerPage"]
    }
];
let DirectToCustomerPageRoutingModule = /*@__PURE__*/ (() => {
    class DirectToCustomerPageRoutingModule {
    }
    DirectToCustomerPageRoutingModule.ɵfac = function DirectToCustomerPageRoutingModule_Factory(t) { return new (t || DirectToCustomerPageRoutingModule)(); };
    DirectToCustomerPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: DirectToCustomerPageRoutingModule });
    DirectToCustomerPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
    return DirectToCustomerPageRoutingModule;
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](DirectToCustomerPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ })

}]);