(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[38],{

/***/ "dtIr":
/*!***********************************************************************!*\
  !*** ./src/app/pages/setting/setting-pincode/setting-pincode.page.ts ***!
  \***********************************************************************/
/*! exports provided: SettingPincodePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingPincodePage", function() { return SettingPincodePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_storage_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../services/storage/storage.service */ "E2f4");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");






const _c0 = function () { return { standalone: true }; };
let SettingPincodePage = /*@__PURE__*/ (() => {
    class SettingPincodePage {
        constructor(storage, alertCtrl, router) {
            this.storage = storage;
            this.alertCtrl = alertCtrl;
            this.router = router;
        }
        ngOnInit() {
        }
        presentAlert() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                const alert = yield this.alertCtrl.create({
                    header: 'Warning',
                    message: '<img src="assets/images/png/warning-32.png"> กรุณากำหนดตัวเลข 6 หลัก',
                    buttons: ['OK']
                });
                yield alert.present();
            });
        }
        presentAlertError() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                const alert = yield this.alertCtrl.create({
                    header: 'Error',
                    message: '<img src="assets/images/png/error-red-32.png"> Invalid Pincode not match.',
                    buttons: ['OK']
                });
                yield alert.present();
            });
        }
        presentAlertSuccess() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                const alert = yield this.alertCtrl.create({
                    header: 'Success',
                    message: '<img src="assets/images/png/checked-green-32.png"> Update Pincode Success',
                    buttons: [{ text: 'Ok',
                            handler: () => {
                                this.router.navigate(['home', { replaceUrl: true }]);
                            }
                        }]
                });
                yield alert.present();
            });
        }
        checkNewPinCode() {
            if (!this.newpin || String(this.newpin).length < 6) {
                this.presentAlert();
                return false;
            }
            if (!this.newpin_confirm || String(this.newpin_confirm).length < 6) {
                this.presentAlert();
                return false;
            }
            return true;
        }
        saveNewPin() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (!this.checkNewPinCode()) {
                    return;
                }
                if (this.newpin != this.newpin_confirm) {
                    this.presentAlertError();
                }
                else {
                    yield this.storage.set('USER_PINCODE', this.newpin);
                    this.presentAlertSuccess();
                }
            });
        }
    }
    SettingPincodePage.ɵfac = function SettingPincodePage_Factory(t) { return new (t || SettingPincodePage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
    SettingPincodePage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SettingPincodePage, selectors: [["app-setting-pincode"]], decls: 27, vars: 6, consts: [["slot", "start"], ["no-padding", ""], ["padding", ""], [1, "ion-text-center"], ["input-field", ""], ["src", "assets/imgs/icons/pincode.svg", "slot", "start"], ["type", "tel", "maxlength", "6", "placeholder", "New Pincode", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["type", "tel", "maxlength", "6", "placeholder", "Confirm New Pincode", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["col-12", "", "no-padding", ""], [1, "textDescription", "ion-text-center"], ["shape", "round", "expand", "full", "text-uppercase", "", 1, "btn-save", 3, "click"]], template: function SettingPincodePage_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-toolbar");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-buttons", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "ion-back-button");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-title");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Setting Pincode");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-content", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "h5");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "\u0E15\u0E31\u0E49\u0E07\u0E04\u0E48\u0E32 PIN CODE");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "ion-row");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "ion-col");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "ion-item");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "ion-icon", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "ion-input", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SettingPincodePage_Template_ion_input_ngModelChange_16_listener($event) { return ctx.newpin = $event; });
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "ion-item");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "ion-icon", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "ion-input", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SettingPincodePage_Template_ion_input_ngModelChange_19_listener($event) { return ctx.newpin_confirm = $event; });
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "br");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "ion-row");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "ion-col", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Pin Code \u0E15\u0E31\u0E27\u0E40\u0E25\u0E02 6 \u0E2B\u0E25\u0E31\u0E01");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "ion-button", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SettingPincodePage_Template_ion_button_click_25_listener() { return ctx.saveNewPin(); });
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Save");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.newpin)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](4, _c0));
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.newpin_confirm)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](5, _c0));
            }
        }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonCol"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonInput"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["TextValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonButton"]], styles: ["ion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%] {\n  --background: #ffafa9;\n  --ion-text-color: #ffffff;\n}\n\n.icon-menu[_ngcontent-%COMP%] {\n  width: 24px;\n}\n\nion-button[_ngcontent-%COMP%] {\n  height: 50px;\n  --background: #f7928b;\n}"] });
    return SettingPincodePage;
})();


/***/ }),

/***/ "gRwR":
/*!*************************************************************************!*\
  !*** ./src/app/pages/setting/setting-pincode/setting-pincode.module.ts ***!
  \*************************************************************************/
/*! exports provided: SettingPincodePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingPincodePageModule", function() { return SettingPincodePageModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _setting_pincode_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./setting-pincode-routing.module */ "uqG6");
/* harmony import */ var _setting_pincode_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./setting-pincode.page */ "dtIr");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");






let SettingPincodePageModule = /*@__PURE__*/ (() => {
    class SettingPincodePageModule {
    }
    SettingPincodePageModule.ɵfac = function SettingPincodePageModule_Factory(t) { return new (t || SettingPincodePageModule)(); };
    SettingPincodePageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: SettingPincodePageModule });
    SettingPincodePageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
                _setting_pincode_routing_module__WEBPACK_IMPORTED_MODULE_3__["SettingPincodePageRoutingModule"]
            ]] });
    return SettingPincodePageModule;
})();
(function () {
    (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](SettingPincodePageModule, { declarations: [_setting_pincode_page__WEBPACK_IMPORTED_MODULE_4__["SettingPincodePage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
            _setting_pincode_routing_module__WEBPACK_IMPORTED_MODULE_3__["SettingPincodePageRoutingModule"]] });
})();


/***/ }),

/***/ "uqG6":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/setting/setting-pincode/setting-pincode-routing.module.ts ***!
  \*********************************************************************************/
/*! exports provided: SettingPincodePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingPincodePageRoutingModule", function() { return SettingPincodePageRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _setting_pincode_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setting-pincode.page */ "dtIr");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    {
        path: '',
        component: _setting_pincode_page__WEBPACK_IMPORTED_MODULE_1__["SettingPincodePage"]
    }
];
let SettingPincodePageRoutingModule = /*@__PURE__*/ (() => {
    class SettingPincodePageRoutingModule {
    }
    SettingPincodePageRoutingModule.ɵfac = function SettingPincodePageRoutingModule_Factory(t) { return new (t || SettingPincodePageRoutingModule)(); };
    SettingPincodePageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: SettingPincodePageRoutingModule });
    SettingPincodePageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
    return SettingPincodePageRoutingModule;
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](SettingPincodePageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ })

}]);