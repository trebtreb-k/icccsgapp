(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[28],{

/***/ "3Cjt":
/*!**************************************************************************!*\
  !*** ./src/app/pages/guest-customer/customer-view/customer-view.page.ts ***!
  \**************************************************************************/
/*! exports provided: CustomerViewPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerViewPage", function() { return CustomerViewPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _services_utils_alert_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../services/utils/alert/alert.service */ "y7g3");
/* harmony import */ var _services_api_guest_customer_guest_customer_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../services/api/guest-customer/guest-customer.service */ "4Ksx");
/* harmony import */ var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/call-number/ngx */ "Wwn5");
/* harmony import */ var _ionic_native_email_composer_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/email-composer/ngx */ "aaed");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "m/P+");
/* harmony import */ var _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/photo-viewer/ngx */ "U3FU");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ionic4_rating__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ionic4-rating */ "Xcyb");













function CustomerViewPage_div_10_p_7_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\u0E27\u0E31\u0E19\u0E40\u0E01\u0E34\u0E14 : ", ctx_r1.state == null ? null : ctx_r1.state.birthday, "");
    }
}
function CustomerViewPage_div_10_form_8_Template(rf, ctx) {
    if (rf & 1) {
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "rating", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("rateChange", function CustomerViewPage_div_10_form_8_Template_rating_rateChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r5.onRateChange($event, ctx_r5.state == null ? null : ctx_r5.state.customer_id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r2.formRating);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("readonly", false);
    }
}
function CustomerViewPage_div_10_div_42_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 22);
    }
    if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", "<p>-</p>", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
    }
}
function CustomerViewPage_div_10_div_43_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 22);
    }
    if (rf & 2) {
        const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", ctx_r4.state == null ? null : ctx_r4.state.description, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
    }
}
function CustomerViewPage_div_10_Template(rf, ctx) {
    if (rf & 1) {
        const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("error", function CustomerViewPage_div_10_Template_img_error_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r7.getAvatar($event, ctx_r7.state); })("click", function CustomerViewPage_div_10_Template_img_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r9.onViewImage(ctx_r9.state.img_member); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, CustomerViewPage_div_10_p_7_Template, 2, 1, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, CustomerViewPage_div_10_form_8_Template, 2, 2, "form", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ion-list", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ion-list-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "\u0E0A\u0E48\u0E2D\u0E07\u0E17\u0E32\u0E07\u0E15\u0E34\u0E14\u0E15\u0E48\u0E2D");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "ion-item", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CustomerViewPage_div_10_Template_ion_item_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r10.callPhone(!(ctx_r10.state == null ? null : ctx_r10.state.phone) ? null : ctx_r10.state == null ? null : ctx_r10.state.phone); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "ion-thumbnail", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "ion-item", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CustomerViewPage_div_10_Template_ion_item_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r11.sendEmail(!(ctx_r11.state == null ? null : ctx_r11.state.email) ? null : ctx_r11.state == null ? null : ctx_r11.state.email); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "ion-thumbnail", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "ion-item", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CustomerViewPage_div_10_Template_ion_item_click_26_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r12.callFB(!(ctx_r12.state == null ? null : ctx_r12.state.facebook) ? null : ctx_r12.state == null ? null : ctx_r12.state.facebook); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "ion-thumbnail", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "ion-item", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CustomerViewPage_div_10_Template_ion_item_click_32_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r13.callLine(!(ctx_r13.state == null ? null : ctx_r13.state.line_id) ? null : ctx_r13.state == null ? null : ctx_r13.state.line_id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "ion-thumbnail", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "ion-list-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E40\u0E15\u0E34\u0E21");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](42, CustomerViewPage_div_10_div_42_Template, 1, 1, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](43, CustomerViewPage_div_10_div_43_Template, 1, 1, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](44, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r0.state.img_member, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.state == null ? null : ctx_r0.state.nickname);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", ctx_r0.state == null ? null : ctx_r0.state.first_name, " ", ctx_r0.state == null ? null : ctx_r0.state.last_name, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.state == null ? null : ctx_r0.state.birthday);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.formRating);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](!(ctx_r0.state == null ? null : ctx_r0.state.phone) ? "-" : ctx_r0.state == null ? null : ctx_r0.state.phone);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](!(ctx_r0.state == null ? null : ctx_r0.state.email) ? "-" : ctx_r0.state == null ? null : ctx_r0.state.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](!(ctx_r0.state == null ? null : ctx_r0.state.facebook) ? "-" : ctx_r0.state == null ? null : ctx_r0.state.facebook);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](!(ctx_r0.state == null ? null : ctx_r0.state.line_id) ? "-" : ctx_r0.state == null ? null : ctx_r0.state.line_id);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !(ctx_r0.state == null ? null : ctx_r0.state.description));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.state == null ? null : ctx_r0.state.description);
    }
}
let CustomerViewPage = /*@__PURE__*/ (() => {
    class CustomerViewPage {
        constructor(router, activedRoute, formBuild, alert, api, callNumber, emailComposer, alertController, iab, photoViewer) {
            var _a, _b;
            this.router = router;
            this.activedRoute = activedRoute;
            this.formBuild = formBuild;
            this.alert = alert;
            this.api = api;
            this.callNumber = callNumber;
            this.emailComposer = emailComposer;
            this.alertController = alertController;
            this.iab = iab;
            this.photoViewer = photoViewer;
            this.formRating = null;
            this.isProcessing = false;
            this.state = ((_b = (_a = this.router.getCurrentNavigation()) === null || _a === void 0 ? void 0 : _a.extras) === null || _b === void 0 ? void 0 : _b.state) || null;
            console.log('---->', this.state);
        }
        ionViewDidEnter() {
            console.log('ionViewDidEnter');
            this.activedRoute.queryParams.subscribe(params => {
                console.log('params', params.emp_id);
                if (params.emp_id) {
                    this.state = params;
                }
            });
        }
        ngOnInit() {
            console.log('ngOnInit');
            if (this.state) {
                this.formRating = this.formBuild.group({
                    // rate: [this.state.rating],
                    rate: this.state.rating.length,
                });
            }
        }
        editProfile() {
            console.log(this.state);
            this.router.navigate([`guest-customer/customer-edit`], { state: Object.assign({}, this.state) });
        }
        viewHistoryPurchase(data) {
            // this.router.navigate([`customer/customer-transaction`], { state: { ...this.state } });
        }
        onRateChange(ev, customer_id) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                this.process(ev);
                const body = { customer_id, rating: ev };
                yield this.api.updateRatingCustomer(body);
            });
        }
        process(e) {
            if (this.isProcessing) {
                console.log('wait please');
                return this.alert.basic('กรุณากดให้ช้าลง');
            }
            this.isProcessing = true;
            this.someSlowThing(() => {
                this.isProcessing = false; // <-- important that the happens in the callback
                console.log('done');
            });
            // don't try to set isProcessing here, it will happen too soon.
        }
        someSlowThing(cb) {
            const n = 10;
            let i = 0;
            const d = document.getElementById('rating-1');
            const itv = setInterval(() => {
                if (i > n) {
                    clearInterval(itv);
                    i = 0;
                    return cb();
                }
                // console.log(i++);
                i++;
                // d.innerHTML = i++
            }, 50);
        }
        callPhone(mobile) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (mobile && mobile !== '-') {
                    const alert = yield this.alertController.create({
                        mode: 'md',
                        message: `
          <div class="body">
            <img class="icon" src="assets/images/customer/call.svg">
              <p class="title">ติดต่อลูกค้า</p>
              <p class="content">หมายเลข &nbsp; ${mobile} &nbsp; ใช่หรือไม่?</p>
          </div>
        `,
                        cssClass: 'custom-alert-dialog',
                        buttons: [
                            {
                                text: 'ยกเลิก',
                                role: 'cancel',
                                cssClass: 'secondary',
                                handler: (blah) => {
                                    console.log('Confirm Cancel: blah');
                                },
                            },
                            {
                                text: 'ยืนยัน',
                                handler: () => {
                                    this.callNumber
                                        .callNumber(mobile, true)
                                        .then((res) => console.log('Launched dialer!', res))
                                        .catch((err) => console.log('Error launching dialer', err));
                                },
                            },
                        ],
                    });
                    yield alert.present();
                }
                else {
                    console.log('not found mobile phone');
                }
            });
        }
        callLine(id_line) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                console.log(id_line);
                if (id_line && id_line !== '-') {
                    const alert = yield this.alertController.create({
                        mode: 'md',
                        message: `
          <div class="body">
            <img class="icon" src="assets/images/customer/line.svg">
              <p class="title">ติดต่อลูกค้า</p>
              <p class="content">ไลน์ &nbsp; ${id_line} &nbsp; ใช่หรือไม่?</p>
          </div>
        `,
                        cssClass: 'custom-alert-dialog',
                        buttons: [
                            {
                                text: 'ยกเลิก',
                                role: 'cancel',
                                cssClass: 'secondary',
                                handler: (blah) => {
                                    console.log('Confirm Cancel: blah');
                                },
                            },
                            {
                                text: 'ยืนยัน',
                                handler: () => {
                                    const url = this.iab.create(`http://line.me/ti/p/~` + `${id_line}`, `_system`);
                                    console.log('call line');
                                },
                            },
                        ],
                    });
                    yield alert.present();
                }
                else {
                    console.log('not found idline');
                }
            });
        }
        callFB(facebook) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                console.log(facebook);
                if (facebook && facebook !== '-') {
                    const alert = yield this.alertController.create({
                        mode: 'md',
                        message: `
          <div class="body">
            <img class="icon" src="assets/images/customer/facebook.svg">
              <p class="title">ติดต่อลูกค้า</p>
              <p class="content">เฟสบุ๊ก &nbsp; ${facebook} &nbsp; ใช่หรือไม่?</p>
          </div>
        `,
                        cssClass: 'custom-alert-dialog',
                        buttons: [
                            {
                                text: 'ยกเลิก',
                                role: 'cancel',
                                cssClass: 'secondary',
                                handler: (blah) => {
                                    console.log('Confirm Cancel: blah');
                                },
                            },
                            {
                                text: 'ยืนยัน',
                                handler: () => {
                                    const url = this.iab.create(`https://www.facebook.com/` + `${facebook}`, `_system`);
                                    console.log('call facebook');
                                },
                            },
                        ],
                    });
                    yield alert.present();
                }
                else {
                    console.log('not found facebook');
                }
            });
        }
        sendEmail(emailCus) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (emailCus && emailCus !== '-') {
                    const alert = yield this.alertController.create({
                        mode: 'md',
                        message: `
          <div class="body">
            <img class="icon" src="assets/images/customer/email.svg">
              <p class="title">ติดต่อลูกค้า</p>
              <p class="content">อีเมล &nbsp; ${emailCus} &nbsp; ใช่หรือไม่?</p>
          </div>
        `,
                        cssClass: 'custom-alert-dialog',
                        buttons: [
                            {
                                text: 'ยกเลิก',
                                role: 'cancel',
                                cssClass: 'secondary',
                                handler: (blah) => {
                                    console.log('Confirm Cancel: blah');
                                },
                            },
                            {
                                text: 'ยืนยัน',
                                handler: () => {
                                    this.emailComposer.isAvailable().then((available) => {
                                        if (available) {
                                            console.log('hello email');
                                            const email = {
                                                to: emailCus,
                                                // cc: 'erika@mustermann.de',
                                                // bcc: ['john@doe.com', 'jane@doe.com'],
                                                // attachments: [
                                                //   'file://img/logo.png',
                                                //   'res://icon.png',
                                                //   'base64:icon.png//iVBORw0KGgoAAAANSUhEUg...',
                                                //   'file://README.pdf',
                                                // ],
                                                subject: 'เรียนคุณลูกค้าสมาชิก His&Her',
                                                // body: 'ทดสอบ',
                                                isHtml: true,
                                            };
                                            // Send a text message using default options
                                            this.emailComposer.open(email);
                                        }
                                    });
                                },
                            },
                        ],
                    });
                    yield alert.present();
                }
                else {
                    console.log('not found email');
                }
            });
        }
        getAvatar(event, customer) {
            return event.target.src = customer.img_avatar;
        }
        onViewImage(url) {
            this.photoViewer.show(url);
        }
    }
    CustomerViewPage.ɵfac = function CustomerViewPage_Factory(t) { return new (t || CustomerViewPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_utils_alert_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_api_guest_customer_guest_customer_service__WEBPACK_IMPORTED_MODULE_5__["GuestCustomerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_6__["CallNumber"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_native_email_composer_ngx__WEBPACK_IMPORTED_MODULE_7__["EmailComposer"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_8__["AlertController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_9__["InAppBrowser"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_10__["PhotoViewer"])); };
    CustomerViewPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CustomerViewPage, selectors: [["app-customer-view"]], decls: 11, vars: 1, consts: [[1, "ion-no-border"], ["slot", "start"], ["slot", "end"], [3, "click"], ["slot", "icon-only", "size", "large", "name", "create-outline"], ["fullscreen", "true"], ["class", "card", 4, "ngIf"], [1, "card"], [1, "circular--portrait"], ["alt", "", 3, "src", "error", "click"], [1, "nickname"], [1, "fullname"], ["class", "fullname", 4, "ngIf"], [3, "formGroup", 4, "ngIf"], ["lines", "none"], ["src", "assets/images/customer/call.svg"], ["src", "assets/images/customer/email.svg"], ["src", "assets/images/customer/facebook.svg"], ["src", "assets/images/customer/line.svg"], [3, "innerHTML", 4, "ngIf"], [3, "formGroup"], ["id", "rating-1", "formControlName", "rate", "size", "default", 3, "readonly", "rateChange"], [3, "innerHTML"]], template: function CustomerViewPage_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-toolbar");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-buttons", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "ion-back-button");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-buttons", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-button", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CustomerViewPage_Template_ion_button_click_5_listener() { return ctx.editProfile(); });
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "ion-icon", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ion-title");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "\u0E25\u0E39\u0E01\u0E04\u0E49\u0E32");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ion-content", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, CustomerViewPage_div_10_Template, 45, 12, "div", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.state);
            }
        }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonContent"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonList"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonListHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonThumbnail"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], ionic4_rating__WEBPACK_IMPORTED_MODULE_12__["RatingComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"]], styles: ["div.circular--portrait[_ngcontent-%COMP%] {\n  display: block;\n  margin: 0 auto;\n  padding: 0;\n  position: relative;\n  width: 110px;\n  height: 110px;\n  overflow: hidden;\n  border-radius: 50%;\n  background: #eeeeee;\n}\ndiv.circular--portrait[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  display: block;\n  margin: auto;\n}\ndiv[_ngcontent-%COMP%] {\n  background: #fdfdfd;\n  border-radius: 12px;\n  padding: 28px;\n  margin: 12px;\n}\ndiv[_ngcontent-%COMP%]   p.nickname[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  color: #000000;\n  text-align: center;\n}\ndiv[_ngcontent-%COMP%]   p.fullname[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: #2b2b2b;\n  text-align: center;\n}\ndiv[_ngcontent-%COMP%]   p.id[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: #2b2b2b;\n  text-align: center;\n}\ndiv[_ngcontent-%COMP%]   .star[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\ndiv[_ngcontent-%COMP%]   .star[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  margin: 0 2px;\n}\ndiv[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%] {\n  background: #fdfdfd;\n  margin: 0;\n}\ndiv[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%] {\n  --background: #ffffff;\n  --border-radius: 2px;\n  --highlight-color-focused: transparent;\n}\ndiv[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-thumbnail[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: block;\n  margin: 0 auto;\n  padding: 10px;\n}\nion-button.btn-action[_ngcontent-%COMP%] {\n  height: 48px;\n  --background: #f7928b;\n  --background-hover: #ffaaa5;\n}"] });
    return CustomerViewPage;
})();


/***/ }),

/***/ "YFd1":
/*!****************************************************************************!*\
  !*** ./src/app/pages/guest-customer/customer-view/customer-view.module.ts ***!
  \****************************************************************************/
/*! exports provided: CustomerViewPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerViewPageModule", function() { return CustomerViewPageModule; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _customer_view_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./customer-view.page */ "3Cjt");
/* harmony import */ var _customer_view_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./customer-view-routing.module */ "pIzX");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var ionic4_rating__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ionic4-rating */ "Xcyb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");







let CustomerViewPageModule = /*@__PURE__*/ (() => {
    class CustomerViewPageModule {
    }
    CustomerViewPageModule.ɵfac = function CustomerViewPageModule_Factory(t) { return new (t || CustomerViewPageModule)(); };
    CustomerViewPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: CustomerViewPageModule });
    CustomerViewPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _customer_view_routing_module__WEBPACK_IMPORTED_MODULE_3__["CustomerViewPageRoutingModule"], ionic4_rating__WEBPACK_IMPORTED_MODULE_5__["IonicRatingModule"]]] });
    return CustomerViewPageModule;
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](CustomerViewPageModule, { declarations: [_customer_view_page__WEBPACK_IMPORTED_MODULE_2__["CustomerViewPage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _customer_view_routing_module__WEBPACK_IMPORTED_MODULE_3__["CustomerViewPageRoutingModule"], ionic4_rating__WEBPACK_IMPORTED_MODULE_5__["IonicRatingModule"]] }); })();


/***/ }),

/***/ "pIzX":
/*!************************************************************************************!*\
  !*** ./src/app/pages/guest-customer/customer-view/customer-view-routing.module.ts ***!
  \************************************************************************************/
/*! exports provided: CustomerViewPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerViewPageRoutingModule", function() { return CustomerViewPageRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _customer_view_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./customer-view.page */ "3Cjt");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    {
        path: '',
        component: _customer_view_page__WEBPACK_IMPORTED_MODULE_1__["CustomerViewPage"]
    }
];
let CustomerViewPageRoutingModule = /*@__PURE__*/ (() => {
    class CustomerViewPageRoutingModule {
    }
    CustomerViewPageRoutingModule.ɵfac = function CustomerViewPageRoutingModule_Factory(t) { return new (t || CustomerViewPageRoutingModule)(); };
    CustomerViewPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: CustomerViewPageRoutingModule });
    CustomerViewPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
    return CustomerViewPageRoutingModule;
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](CustomerViewPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ })

}]);