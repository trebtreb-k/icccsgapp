(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[37],{

/***/ "0aLJ":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/setting/setting-mypicture/setting-mypicture-routing.module.ts ***!
  \*************************************************************************************/
/*! exports provided: SettingMypicturePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingMypicturePageRoutingModule", function() { return SettingMypicturePageRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _setting_mypicture_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setting-mypicture.page */ "TcPW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    {
        path: '',
        component: _setting_mypicture_page__WEBPACK_IMPORTED_MODULE_1__["SettingMypicturePage"]
    }
];
let SettingMypicturePageRoutingModule = /*@__PURE__*/ (() => {
    class SettingMypicturePageRoutingModule {
    }
    SettingMypicturePageRoutingModule.ɵfac = function SettingMypicturePageRoutingModule_Factory(t) { return new (t || SettingMypicturePageRoutingModule)(); };
    SettingMypicturePageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: SettingMypicturePageRoutingModule });
    SettingMypicturePageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
    return SettingMypicturePageRoutingModule;
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](SettingMypicturePageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "TcPW":
/*!***************************************************************************!*\
  !*** ./src/app/pages/setting/setting-mypicture/setting-mypicture.page.ts ***!
  \***************************************************************************/
/*! exports provided: SettingMypicturePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingMypicturePage", function() { return SettingMypicturePage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "TEn/");


let SettingMypicturePage = /*@__PURE__*/ (() => {
    class SettingMypicturePage {
        constructor() { }
        ngOnInit() {
        }
    }
    SettingMypicturePage.ɵfac = function SettingMypicturePage_Factory(t) { return new (t || SettingMypicturePage)(); };
    SettingMypicturePage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SettingMypicturePage, selectors: [["app-setting-mypicture"]], decls: 7, vars: 0, consts: [[1, "ion-no-border"], ["slot", "start"]], template: function SettingMypicturePage_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-header", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-toolbar");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-buttons", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "ion-back-button");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ion-title");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Settings - My Picture");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "ion-content");
            }
        }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonContent"]], styles: [""] });
    return SettingMypicturePage;
})();


/***/ }),

/***/ "aibZ":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/setting/setting-mypicture/setting-mypicture.module.ts ***!
  \*****************************************************************************/
/*! exports provided: SettingMypicturePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingMypicturePageModule", function() { return SettingMypicturePageModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _setting_mypicture_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./setting-mypicture-routing.module */ "0aLJ");
/* harmony import */ var _setting_mypicture_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./setting-mypicture.page */ "TcPW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");






let SettingMypicturePageModule = /*@__PURE__*/ (() => {
    class SettingMypicturePageModule {
    }
    SettingMypicturePageModule.ɵfac = function SettingMypicturePageModule_Factory(t) { return new (t || SettingMypicturePageModule)(); };
    SettingMypicturePageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: SettingMypicturePageModule });
    SettingMypicturePageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
                _setting_mypicture_routing_module__WEBPACK_IMPORTED_MODULE_3__["SettingMypicturePageRoutingModule"]
            ]] });
    return SettingMypicturePageModule;
})();
(function () {
    (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](SettingMypicturePageModule, { declarations: [_setting_mypicture_page__WEBPACK_IMPORTED_MODULE_4__["SettingMypicturePage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
            _setting_mypicture_routing_module__WEBPACK_IMPORTED_MODULE_3__["SettingMypicturePageRoutingModule"]] });
})();


/***/ })

}]);