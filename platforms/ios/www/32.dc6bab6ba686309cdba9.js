(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[32],{

/***/ "7BIM":
/*!**************************************************************!*\
  !*** ./src/app/pages/income/detial/detial-routing.module.ts ***!
  \**************************************************************/
/*! exports provided: DetialPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetialPageRoutingModule", function() { return DetialPageRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _detial_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./detial.page */ "I3ic");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    {
        path: '',
        component: _detial_page__WEBPACK_IMPORTED_MODULE_1__["DetialPage"]
    }
];
let DetialPageRoutingModule = /*@__PURE__*/ (() => {
    class DetialPageRoutingModule {
    }
    DetialPageRoutingModule.ɵfac = function DetialPageRoutingModule_Factory(t) { return new (t || DetialPageRoutingModule)(); };
    DetialPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: DetialPageRoutingModule });
    DetialPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
    return DetialPageRoutingModule;
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](DetialPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "BDYt":
/*!******************************************************!*\
  !*** ./src/app/pages/income/detial/detial.module.ts ***!
  \******************************************************/
/*! exports provided: DetialPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetialPageModule", function() { return DetialPageModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _detial_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./detial-routing.module */ "7BIM");
/* harmony import */ var _detial_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./detial.page */ "I3ic");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");






let DetialPageModule = /*@__PURE__*/ (() => {
    class DetialPageModule {
    }
    DetialPageModule.ɵfac = function DetialPageModule_Factory(t) { return new (t || DetialPageModule)(); };
    DetialPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: DetialPageModule });
    DetialPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
                _detial_routing_module__WEBPACK_IMPORTED_MODULE_3__["DetialPageRoutingModule"]
            ]] });
    return DetialPageModule;
})();
(function () {
    (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](DetialPageModule, { declarations: [_detial_page__WEBPACK_IMPORTED_MODULE_4__["DetialPage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
            _detial_routing_module__WEBPACK_IMPORTED_MODULE_3__["DetialPageRoutingModule"]] });
})();


/***/ }),

/***/ "I3ic":
/*!****************************************************!*\
  !*** ./src/app/pages/income/detial/detial.page.ts ***!
  \****************************************************/
/*! exports provided: DetialPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetialPage", function() { return DetialPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _services_api_api_root__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../services/api/api.root */ "ntc2");
/* harmony import */ var _services_utils_moment_moment_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../services/utils/moment/moment.service */ "9cE+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_api_income_income_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../services/api/income/income.service */ "afkE");
/* harmony import */ var _services_storage_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../services/storage/storage.service */ "E2f4");
/* harmony import */ var _services_utils_loading_loading_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../../services/utils/loading/loading.service */ "YMUU");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "m/P+");
/* harmony import */ var _ionic_native_document_viewer_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/document-viewer/ngx */ "LfQc");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/file/ngx */ "FAH8");
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "B7Rs");
/* harmony import */ var _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic-native/file-opener/ngx */ "te5A");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "ofXK");















function DetialPage_p_17_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "\u0E0A\u0E37\u0E48\u0E2D");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }
}
function DetialPage_p_18_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "\u0E0A\u0E37\u0E48\u0E2D");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }
}
function DetialPage_p_30_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r2.profile == null ? null : ctx_r2.profile.name);
    }
}
function DetialPage_p_31_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r3.profile == null ? null : ctx_r3.profile.name);
    }
}
function DetialPage_div_40_ion_row_4_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "ion-col", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "ion-col", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](7, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const desc_r16 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](desc_r16.inoutdesc);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](7, 2, desc_r16.amount));
    }
}
function DetialPage_div_40_div_5_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "div", 19);
    }
}
function DetialPage_div_40_div_6_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "div", 19);
    }
}
function DetialPage_div_40_ion_row_7_p_2_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r17.sumG2[0].groupdesc);
    }
}
function DetialPage_div_40_ion_row_7_p_4_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 1, ctx_r18.sumG2[0].groupdata[0].amount));
    }
}
function DetialPage_div_40_ion_row_7_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "ion-col", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, DetialPage_div_40_ion_row_7_p_2_Template, 3, 1, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "ion-col", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, DetialPage_div_40_ion_row_7_p_4_Template, 4, 3, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const i_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().index;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", i_r6 === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", i_r6 === 0);
    }
}
function DetialPage_div_40_ion_row_8_p_2_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r20.sumG4[0].groupdesc);
    }
}
function DetialPage_div_40_ion_row_8_p_4_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 1, ctx_r21.sumG4[0].groupdata[0].amount));
    }
}
function DetialPage_div_40_ion_row_8_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "ion-col", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, DetialPage_div_40_ion_row_8_p_2_Template, 3, 1, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "ion-col", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, DetialPage_div_40_ion_row_8_p_4_Template, 4, 3, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const i_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().index;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", i_r6 === 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", i_r6 === 1);
    }
}
function DetialPage_div_40_div_9_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "div", 19);
    }
}
function DetialPage_div_40_ion_row_10_p_2_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r23.sumG5[0].groupdesc);
    }
}
function DetialPage_div_40_ion_row_10_p_4_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 1, ctx_r24.sumG5[0].groupdata[0].amount));
    }
}
function DetialPage_div_40_ion_row_10_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "ion-col", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, DetialPage_div_40_ion_row_10_p_2_Template, 3, 1, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "ion-col", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, DetialPage_div_40_ion_row_10_p_4_Template, 4, 3, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const i_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().index;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", i_r6 === 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", i_r6 === 1);
    }
}
function DetialPage_div_40_hr_11_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "hr", 20);
    }
}
function DetialPage_div_40_hr_12_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "hr", 20);
    }
}
function DetialPage_div_40_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "ion-grid");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, DetialPage_div_40_ion_row_4_Template, 8, 4, "ion-row", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, DetialPage_div_40_div_5_Template, 1, 0, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, DetialPage_div_40_div_6_Template, 1, 0, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, DetialPage_div_40_ion_row_7_Template, 5, 2, "ion-row", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, DetialPage_div_40_ion_row_8_Template, 5, 2, "ion-row", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, DetialPage_div_40_div_9_Template, 1, 0, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, DetialPage_div_40_ion_row_10_Template, 5, 2, "ion-row", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, DetialPage_div_40_hr_11_Template, 1, 0, "hr", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, DetialPage_div_40_hr_12_Template, 1, 0, "hr", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const item_r5 = ctx.$implicit;
        const i_r6 = ctx.index;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r5 == null ? null : item_r5.groupdesc);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", item_r5.groupdata);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", i_r6 === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", i_r6 === 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", i_r6 === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", i_r6 === 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", i_r6 === 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", i_r6 === 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", i_r6 === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", i_r6 === 1);
    }
}
//declare var cordova :any;
let DetialPage = /*@__PURE__*/ (() => {
    class DetialPage {
        constructor(router, api, storage, loading, alertController, iab, document, file, transfer, fileOpener, platform) {
            var _a, _b;
            this.router = router;
            this.api = api;
            this.storage = storage;
            this.loading = loading;
            this.alertController = alertController;
            this.iab = iab;
            this.document = document;
            this.file = file;
            this.transfer = transfer;
            this.fileOpener = fileOpener;
            this.platform = platform;
            this.state = ((_b = (_a = this.router.getCurrentNavigation()) === null || _a === void 0 ? void 0 : _a.extras) === null || _b === void 0 ? void 0 : _b.state) || null;
            this.period = this.state.period;
        }
        ngOnInit() {
            this.getUserInfo();
            this.initial();
        }
        initial() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                try {
                    yield this.loading.present();
                    const fetch = yield this.api.getIncomeDetail(this.period);
                    this.nameLth = this.profile.name.length;
                    this.detail = fetch;
                    this.cardHeader = yield this.detail.data.filter((ele) => ele.datagroup !== 'G2' && ele.datagroup !== 'G4' && ele.datagroup !== 'G5');
                    this.sumG2 = yield this.detail.data.filter((sum) => sum.datagroup === 'G2');
                    this.sumG4 = yield this.detail.data.filter((sum) => sum.datagroup === 'G4');
                    this.sumG5 = yield this.detail.data.filter((sum) => sum.datagroup === 'G5');
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
                this.profile = info;
            });
        }
        alertConfirmRequestSlip() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                const flagSlip = 'Y'; //this.data_detail.slipflag;
                if (flagSlip === 'Y') {
                    const alert = yield this.alertController.create({
                        header: "Request Slip",
                        message: `ท่านต้องการขอสลิปเงินเดือน ${this.period}
        <br><br>ยืนยันใช่หรือไม่`,
                        buttons: [
                            {
                                text: "Cancel",
                                handler: () => {
                                    console.log("Cancel clicked");
                                },
                            },
                            {
                                text: "OK",
                                handler: () => {
                                    console.log("Ok clicked");
                                    //this.openLocalPdf();
                                    //return;
                                    this.requestSlip(this.period);
                                },
                            },
                        ],
                    });
                    yield alert.present();
                }
                else {
                    const alert = yield this.alertController.create({
                        header: "Warning Message",
                        message: "ไม่สามารถขอสลิปย้อนหลังที่เกิน 12 เดือนได้",
                        buttons: [
                            {
                                text: "OK",
                                handler: () => {
                                    console.log("Ok clicked");
                                },
                            },
                        ],
                    });
                    yield alert.present();
                }
            });
        }
        requestSlip(payDate) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                let reqPayDate = payDate.replace("/", "-").replace("/", "-");
                //  alert(reqPayDate)
                //this.viewSlip({period:reqPayDate});
                const response = yield this.api.requestSlip(reqPayDate);
                if (response.result) {
                    // cordova.InAppBrowser.open(response.pdf, "_system");
                    console.log(response);
                    this.downloadAndOpenPdf(response);
                    //const browser = this.iab.create('https://webapp5.icc.co.th/obsd/new');
                    // const browser = this.iab.create(response.pdf,"_system");
                    // browser.show()
                    // this.iab.create(response.pdf);
                }
                else {
                    alert(response.error_message);
                }
                // alert(response.pdf);
            });
        }
        /*
        viewSlip(data: any): void {
          const navigationExtras: NavigationExtras = { state: { ...data } };
          this.router.navigate(['income/slip'], navigationExtras);
        }
        */
        openLocalPdf() {
            const options = {
                title: 'My Slip'
            };
            this.document.viewDocument('assets/slip.pdf', 'application/pdf', options);
        }
        downloadAndOpenPdf(response) {
            //  const browser = this.iab.create('https://webapp5.icc.co.th/hr/icccsgapp/main/test.html');
            //  return;
            const pdf_url = response.pdf;
            /*
            let tmp     = pdf_url.replace("https://iccapp-minio.icc.co.th:9000/salestools/payslip/","");
            let data    = tmp.split('/');
            let empid   = data[0];
            let filename= data[1];
            */
            //  window.open('https://webapp5.icc.co.th/hr/icccsgapp/main/test.html','_system','location=yes');
            const currrent = Object(_services_utils_moment_moment_service__WEBPACK_IMPORTED_MODULE_2__["moment"])().format('DDMMYYYYHHmmss');
            const slip_url = _services_api_api_root__WEBPACK_IMPORTED_MODULE_1__["ST_SLIP_URL"] + "?empid=" + response.empid + "&period=" + response.period + "&filename=" + response.filename;
            //window.open(slip_url,'_system','location=yes');
            //alert(slip_url);
            const browser = this.iab.create(slip_url, '_system');
            browser.show();
            return;
            let path = null;
            if (this.platform.is('ios')) {
                path = this.file.documentsDirectory;
            }
            else {
                // path = this.file.dataDirectory;
                //  path = this.file.dataDirectory + "Download/";
                path = this.file.externalRootDirectory + "Download/";
                //   path = this.file.externalApplicationStorageDirectory + "Download/";
            }
            alert('path' + path);
            const transfer = this.transfer.create();
            transfer.download(pdf_url, path + 'slip.pdf', true, {}).then(entry => {
                let url = entry.toURL();
                alert(url);
                if (this.platform.is('ios')) {
                    this.document.viewDocument(url, 'application/pdf', {});
                }
                else { //android
                    this.document.viewDocument(url, 'application/pdf', {});
                    // this.file.moveFile(path,'slip.pdf',this.file.dataDirectory+'/','slip.pdf');
                    this.fileOpener.open(url, 'application/pdf')
                        .then(() => {
                        console.log('File is opened');
                        alert('File is opened');
                    })
                        .catch(e => {
                        console.log('Error openening file', e);
                        alert('Error openening file');
                    });
                }
            }).catch(error => {
                alert(error.message);
            });
        }
    }
    DetialPage.ɵfac = function DetialPage_Factory(t) { return new (t || DetialPage)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_api_income_income_service__WEBPACK_IMPORTED_MODULE_5__["IncomeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_utils_loading_loading_service__WEBPACK_IMPORTED_MODULE_7__["LoadingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_8__["AlertController"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_9__["InAppBrowser"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ionic_native_document_viewer_ngx__WEBPACK_IMPORTED_MODULE_10__["DocumentViewer"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_11__["File"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_12__["FileTransfer"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_13__["FileOpener"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_8__["Platform"])); };
    DetialPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: DetialPage, selectors: [["app-detial"]], decls: 52, vars: 11, consts: [[1, "ion-no-border"], ["slot", "start"], ["fullscreen", "true"], [1, "title"], [1, "card", "animated", "fadeIn", "delay-1s"], [1, "left"], [4, "ngIf"], ["style", "min-height: 50px", 4, "ngIf"], [1, "right"], ["class", "card animated fadeIn delay-1s", 4, "ngFor", "ngForOf"], [1, "footer-button-border"], [1, "footer-button"], ["color", "dark", "fill", "clear", 3, "click"], ["src", "assets/images/incomes/printer.svg"], [2, "min-height", "50px"], [4, "ngFor", "ngForOf"], ["class", "line-style-horizental", 4, "ngIf"], ["class", "style2", 4, "ngIf"], ["size", "8", 1, "left"], [1, "line-style-horizental"], [1, "style2"]], template: function DetialPage_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-header", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "ion-toolbar");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "ion-buttons", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "ion-back-button");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "ion-title");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "ion-content", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "p", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "\u0E43\u0E1A\u0E41\u0E08\u0E49\u0E07\u0E40\u0E07\u0E34\u0E19\u0E40\u0E14\u0E37\u0E2D\u0E19 Pay Slip");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "p", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "\u0E1A\u0E23\u0E34\u0E29\u0E31\u0E17 \u0E44\u0E2D.\u0E0B\u0E35.\u0E0B\u0E35.\u0E2D\u0E34\u0E19\u0E40\u0E15\u0E2D\u0E23\u0E4C\u0E40\u0E19\u0E0A\u0E31\u0E48\u0E19\u0E41\u0E19\u0E25 \u0E08\u0E33\u0E01\u0E31\u0E14(\u0E21\u0E2B\u0E32\u0E0A\u0E19)");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "ion-grid");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "ion-row");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "ion-col", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "\u0E23\u0E2B\u0E31\u0E2A");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, DetialPage_p_17_Template, 2, 0, "p", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, DetialPage_p_18_Template, 2, 0, "p", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "\u0E40\u0E25\u0E02\u0E1A\u0E31\u0E15\u0E23\u0E1B\u0E23\u0E30\u0E0A\u0E32\u0E0A\u0E19");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "\u0E40\u0E25\u0E02\u0E17\u0E35\u0E48\u0E1A\u0E31\u0E0D\u0E0A\u0E35");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "\u0E1B\u0E23\u0E30\u0E08\u0E33\u0E07\u0E27\u0E14");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48\u0E08\u0E48\u0E32\u0E22");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "ion-col", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](30, DetialPage_p_30_Template, 2, 1, "p", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](31, DetialPage_p_31_Template, 2, 1, "p", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](37);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](39);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](40, DetialPage_div_40_Template, 13, 10, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "ion-footer");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "ion-toolbar");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "div", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "ion-button", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DetialPage_Template_ion_button_click_45_listener() { return ctx.alertConfirmRequestSlip(); });
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](46, "ion-icon", 13);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](47, " \u00A0\u00A0\u00A0");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](49, "\u0E02\u0E2D\u0E2A\u0E25\u0E34\u0E1B\u0E40\u0E07\u0E34\u0E19\u0E40\u0E14\u0E37\u0E2D\u0E19 ");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "small");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](51, "(\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E02\u0E2D\u0E22\u0E49\u0E2D\u0E19\u0E2B\u0E25\u0E31\u0E07\u0E44\u0E14\u0E49 12 \u0E40\u0E14\u0E37\u0E2D\u0E19)");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("\u0E23\u0E32\u0E22\u0E25\u0E30\u0E40\u0E2D\u0E35\u0E22\u0E14\u0E23\u0E32\u0E22\u0E44\u0E14\u0E49\u0E02\u0E2D\u0E07\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48 ", ctx.state == null ? null : ctx.state.period, "");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.nameLth <= 20);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.nameLth > 20);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.detail == null ? null : ctx.detail.empid);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.nameLth <= 20);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.nameLth > 20);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.detail == null ? null : ctx.detail.idcard);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.detail == null ? null : ctx.detail.bankaccount);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.detail == null ? null : ctx.detail.period);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.detail == null ? null : ctx.detail.paydate);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.cardHeader);
            }
        }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonGrid"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonCol"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonFooter"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonIcon"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_14__["DecimalPipe"]], styles: ["div.card[_ngcontent-%COMP%] {\n  background: #fdfdfd;\n  border-radius: 12px;\n  padding: 4px 28px 4px 28px;\n  margin: 12px;\n  box-shadow: 0 1.2em 1.2em #eeeeee;\n}\n\np.title[_ngcontent-%COMP%] {\n  color: #2b2b2b;\n  font-size: 0.9rem;\n  font-weight: 600;\n  letter-spacing: 0.1px;\n  margin-top: 6px;\n  text-align: center;\n}\n\nion-col.left[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #2b2b2b;\n  font-size: 0.9rem;\n  font-weight: 500;\n  margin-top: 0.1px;\n}\n\nion-col.right[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #2b2b2b;\n  text-align: end;\n  font-size: 0.9rem;\n  margin-top: 0.1px;\n}\n\n.line-style-horizental[_ngcontent-%COMP%] {\n  width: 100%;\n  display: block;\n  margin: 0 auto;\n  background: #dddddd;\n  height: 1.5px;\n}\n\nhr.style2[_ngcontent-%COMP%] {\n  width: 100%;\n  display: block;\n  border-top: 3px double #a5a4a4;\n  margin-top: 0em;\n}"] });
    return DetialPage;
})();


/***/ })

}]);