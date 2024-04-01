(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[35],{

/***/ "6g8t":
/*!*********************************************************!*\
  !*** ./src/app/pages/pincode/pincode-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: PincodePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PincodePageRoutingModule", function() { return PincodePageRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _pincode_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pincode.page */ "7HW3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    {
        path: '',
        component: _pincode_page__WEBPACK_IMPORTED_MODULE_1__["PincodePage"]
    }
];
let PincodePageRoutingModule = /*@__PURE__*/ (() => {
    class PincodePageRoutingModule {
    }
    PincodePageRoutingModule.ɵfac = function PincodePageRoutingModule_Factory(t) { return new (t || PincodePageRoutingModule)(); };
    PincodePageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: PincodePageRoutingModule });
    PincodePageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
    return PincodePageRoutingModule;
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](PincodePageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "7HW3":
/*!***********************************************!*\
  !*** ./src/app/pages/pincode/pincode.page.ts ***!
  \***********************************************/
/*! exports provided: PincodePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PincodePage", function() { return PincodePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_storage_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/storage/storage.service */ "E2f4");
/* harmony import */ var _ionic_native_fingerprint_aio_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/fingerprint-aio/ngx */ "59pt");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");







function PincodePage_h4_31_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h4", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "PIN CODE \u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
}
const _c0 = function (a0, a1) { return { "pincode_inactive": a0, "pincode_active": a1 }; };
let PincodePage = /*@__PURE__*/ (() => {
    class PincodePage {
        constructor(router, activateRoute, alertCtrl, storage, faio) {
            this.router = router;
            this.activateRoute = activateRoute;
            this.alertCtrl = alertCtrl;
            this.storage = storage;
            this.faio = faio;
            this.pincode = [];
            this.current_pincode = null;
            this.invalidPincode = false;
            this.targetPage = this.activateRoute.snapshot.paramMap.get('targetpage');
            console.log('targetPage', this.targetPage);
            this.getPincode();
        }
        ngOnInit() {
        }
        getPincode() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                let pincode_info = yield this.storage.get('USER_PINCODE');
                if (!pincode_info) {
                    this.router.navigate(['setting/setting-pincode']);
                }
                else {
                    this.current_pincode = pincode_info;
                    if (pincode_info == null) {
                        this.router.navigate(['setting/setting-pincode']);
                        return;
                    }
                    else {
                        this.securityVerify = yield this.storage.get('SECURITY_VERIFY');
                        if (this.securityVerify == 'FINGER') {
                            this.fingerPrint();
                        }
                    }
                }
            });
        }
        OpenPage(page) {
            this.router.navigate([page], { replaceUrl: true });
            /*
            if(page=="MYINCOME"){
              this.router.navigate(['myincome'], {replaceUrl:true});
            }else if(page=="SETTING"){
              this.router.navigate(['setting'], {replaceUrl:true});
            }else if(page=="CHECKIN"){
              this.router.navigate(['checkin'], {replaceUrl:true});
            }else if(page=="SIGNUP_SETTING"){
              this.router.navigate(['signup-setting'], {replaceUrl:true});
            }
            */
        }
        inputPincode(pin) {
            let len = this.pincode.length;
            if (len < 6) {
                this.invalidPincode = false;
                this.pincode.push(pin);
                console.log(this.pincode);
            }
            len = this.pincode.length;
            if (len == 6) {
                this.validatePincode();
            }
            else {
                // pincode
            }
        }
        deletePincode() {
            let len = this.pincode.length;
            if (len > 0) {
                var newArr = this.pincode.slice(0, -1);
                this.pincode = newArr;
            }
            len = this.pincode.length;
            if (len < 6) {
                this.invalidPincode = false;
            }
        }
        validatePincode() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                var vPincode = this.pincode[0] + this.pincode[1] + this.pincode[2] + this.pincode[3] + this.pincode[4] + this.pincode[5];
                let current_pincode = yield this.storage.get('USER_PINCODE');
                console.log('current_pincode', current_pincode);
                if (vPincode == current_pincode) {
                    console.log(this.targetPage);
                    yield this.storage.set('SECURITY_VERIFY', 'PIN');
                    this.OpenPage(this.targetPage);
                }
                else {
                    this.invalidPincode = true;
                }
            });
        }
        presentAlert(header, message) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                const alert = yield this.alertCtrl.create({
                    header: header,
                    message: message,
                    buttons: ['OK']
                });
                yield alert.present();
            });
        }
        fingerPrint() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                try {
                    let result = yield this.faio.show({ disableBackup: true });
                    yield this.storage.set('SECURITY_VERIFY', 'FINGER');
                    this.OpenPage(this.targetPage);
                }
                catch (error) {
                    if (error.message.indexOf('SDK') > 0) {
                        alert('Mobile is not support' + error.message);
                    }
                    else if (error.message == 'BIOMETRIC_DISMISSED') {
                        console.log('click cancel');
                    }
                    else {
                        alert('Error : ' + error.message);
                    }
                }
                /*
                alert('start finger')
                this.faio.show({
                  disableBackup: true
                })
                .then((result: any) => {
                  alert('after finger')
                  console.log(result)
                  alert(result)
                  //this.presentAlert('success','before set')
                  this.storage.set('SECURITY_VERIFY', 'FINGER');
                  //this.presentAlert('success','after set')
                  this.OpenPage(this.targetPage);
                })
                .catch((error: any) => {
                ///   this.presentAlert('error','error')
                  
                   if( error.message.indexOf('SDK') > 0){
                        alert('Mobile is not support'+ error.message)
                   }else if(error.message=='BIOMETRIC_DISMISSED'){
                        console.log('click cancel')
                       //  alert('cancel')
                   }else{
                        alert('Error : '+error.message)
                   }
                   
                   console.log(error)
                });
                */
            });
        }
    }
    PincodePage.ɵfac = function PincodePage_Factory(t) { return new (t || PincodePage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_native_fingerprint_aio_ngx__WEBPACK_IMPORTED_MODULE_5__["FingerprintAIO"])); };
    PincodePage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PincodePage, selectors: [["app-pincode"]], decls: 109, vars: 25, consts: [["slot", "start"], ["fullscreen", "true", 1, "body"], [1, "header-banner"], [2, "margin-top", "-10px"], [1, "ion-text-center"], ["padding", "", 2, "margin-top", "0px"], ["col-1", ""], [1, "pincode", 3, "ngClass"], ["class", "text-red", 4, "ngIf"], [1, "ion-no-border"], [1, "menu-pincode"], [1, "grid-pincode"], [1, "icon-menu-circle"], [3, "click"], ["src", "assets/images/pincode/fingerprint.svg", "alt", "", 1, "icon-menu"], ["src", "assets/images/pincode/backspace-arrow.svg", "alt", "", 1, "icon-menu"], [1, "text-red"]], template: function PincodePage_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-toolbar");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-buttons", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "ion-back-button");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-title");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Verify Pincode");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-content", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ion-row", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ion-col");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "h5");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "M Y \u00A0\u00A0 P I N C O D E");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "ion-row", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "ion-col", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "ion-col");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "div", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "ion-col");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "div", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "ion-col");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "div", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "ion-col");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "div", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "ion-col");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "div", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "ion-col");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "div", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "ion-col", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "ion-row", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "ion-col");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, PincodePage_h4_31_Template, 2, 0, "h4", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "ion-footer", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "ion-grid", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "ion-row");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "ion-col");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "ion-button", 13);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PincodePage_Template_ion_button_click_39_listener() { return ctx.inputPincode("1"); });
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "h2");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "1");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "ion-col");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "ion-button", 13);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PincodePage_Template_ion_button_click_45_listener() { return ctx.inputPincode("2"); });
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "h2");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "2");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "ion-col");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "ion-button", 13);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PincodePage_Template_ion_button_click_51_listener() { return ctx.inputPincode("3"); });
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "h2");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "3");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "ion-row");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "ion-col");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "div", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "ion-button", 13);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PincodePage_Template_ion_button_click_58_listener() { return ctx.inputPincode("4"); });
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "h2");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, "4");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "ion-col");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "div", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "div", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "ion-button", 13);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PincodePage_Template_ion_button_click_64_listener() { return ctx.inputPincode("5"); });
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "h2");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66, "5");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "ion-col");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "div", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "div", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "ion-button", 13);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PincodePage_Template_ion_button_click_70_listener() { return ctx.inputPincode("6"); });
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "h2");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72, "6");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "ion-row");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "ion-col");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "div", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "div", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "ion-button", 13);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PincodePage_Template_ion_button_click_77_listener() { return ctx.inputPincode("7"); });
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "h2");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](79, "7");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "ion-col");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "div", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "div", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "ion-button", 13);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PincodePage_Template_ion_button_click_83_listener() { return ctx.inputPincode("8"); });
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "h2");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](85, "8");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "ion-col");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "div", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "div", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "ion-button", 13);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PincodePage_Template_ion_button_click_89_listener() { return ctx.inputPincode("9"); });
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "h2");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](91, "9");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "ion-row");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "ion-col");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "div", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "div", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "ion-button", 13);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PincodePage_Template_ion_button_click_96_listener() { return ctx.fingerPrint(); });
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](97, "img", 14);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "ion-col");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "div", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "div", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "ion-button", 13);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PincodePage_Template_ion_button_click_101_listener() { return ctx.inputPincode("0"); });
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "h2");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](103, "0");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "ion-col");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "div", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](106, "div", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "ion-button", 13);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PincodePage_Template_ion_button_click_107_listener() { return ctx.deletePincode(); });
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](108, "img", 15);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](7, _c0, !ctx.pincode[0], ctx.pincode[0]));
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](10, _c0, !ctx.pincode[1], ctx.pincode[1]));
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](13, _c0, !ctx.pincode[2], ctx.pincode[2]));
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](16, _c0, !ctx.pincode[3], ctx.pincode[3]));
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](19, _c0, !ctx.pincode[4], ctx.pincode[4]));
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](22, _c0, !ctx.pincode[5], ctx.pincode[5]));
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.invalidPincode == true);
            }
        }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonCol"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonFooter"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonGrid"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonButton"]], styles: ["ion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%] {\n  --ion-text-color: #ffafa9;\n}\n\n.body[_ngcontent-%COMP%] {\n  background: #82aeff;\n}\n\n.header-banner[_ngcontent-%COMP%] {\n  height: 100%;\n  background: #f7928b;\n  color: #ffffff;\n}\n\n.pincode[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  margin-left: 5px !important;\n  background-color: #ffffff;\n  width: 25px;\n  height: 25px;\n}\n\n.pincode_inactive[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  margin-left: 5px !important;\n  background-color: #ffffff;\n  width: 25px;\n  height: 25px;\n}\n\n.pincode_active[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  margin-left: 5px !important;\n  background-color: #ee0f8a;\n  width: 25px;\n  height: 25px;\n}\n\n.icon-menu[_ngcontent-%COMP%] {\n  width: 40px !important;\n  margin-top: 12px;\n}\n\n.keyboard-pin[_ngcontent-%COMP%] {\n  position: fixed;\n  background-color: #fafafa;\n  bottom: 0px;\n  width: 100%;\n}\n\n.btn-pin[_ngcontent-%COMP%] {\n  background-color: #ffffff !important;\n  color: #000000;\n  padding: 5px;\n  border-radius: 12px;\n  height: 80px;\n}\n\n.btn-pin[_ngcontent-%COMP%]:active {\n  background-color: #d9d9ff !important;\n  color: #000000;\n}\n\n.text-red[_ngcontent-%COMP%] {\n  color: #ff0000;\n}\n\ndiv.menu-pincode[_ngcontent-%COMP%] {\n  margin-bottom: 0px;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n}\n\ndiv.menu-pincode[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\ndiv.menu-pincode[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   .icon-menu-circle[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background: #f6f6f6;\n  height: 80px;\n  width: 80px;\n  border-radius: 50%;\n}\n\ndiv.menu-pincode[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   .icon-menu-circle[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%] {\n  --background: #f6f6f6;\n  --background-activated: #c0c0c0;\n  --border-radius: 50%;\n  shape: round;\n  height: 80px;\n  width: 80px;\n  color: #000000;\n}\n\ndiv.menu-pincode[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   .icon-menu[_ngcontent-%COMP%] {\n  display: block;\n  margin: 0 auto !important;\n  width: 30px;\n  height: 30px;\n  margin-left: 5px;\n  margin-top: 5px;\n}"] });
    return PincodePage;
})();


/***/ }),

/***/ "RxmX":
/*!*************************************************!*\
  !*** ./src/app/pages/pincode/pincode.module.ts ***!
  \*************************************************/
/*! exports provided: PincodePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PincodePageModule", function() { return PincodePageModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _pincode_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pincode-routing.module */ "6g8t");
/* harmony import */ var _pincode_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pincode.page */ "7HW3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");






let PincodePageModule = /*@__PURE__*/ (() => {
    class PincodePageModule {
    }
    PincodePageModule.ɵfac = function PincodePageModule_Factory(t) { return new (t || PincodePageModule)(); };
    PincodePageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: PincodePageModule });
    PincodePageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
                _pincode_routing_module__WEBPACK_IMPORTED_MODULE_3__["PincodePageRoutingModule"]
            ]] });
    return PincodePageModule;
})();
(function () {
    (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](PincodePageModule, { declarations: [_pincode_page__WEBPACK_IMPORTED_MODULE_4__["PincodePage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
            _pincode_routing_module__WEBPACK_IMPORTED_MODULE_3__["PincodePageRoutingModule"]] });
})();


/***/ })

}]);