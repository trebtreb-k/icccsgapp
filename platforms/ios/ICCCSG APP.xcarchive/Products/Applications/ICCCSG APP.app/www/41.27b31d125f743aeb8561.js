(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[41],{

/***/ "ilFo":
/*!******************************************************************!*\
  !*** ./src/app/pages/workflow/item-detial/item-detial.module.ts ***!
  \******************************************************************/
/*! exports provided: ItemDetialPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemDetialPageModule", function() { return ItemDetialPageModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _item_detial_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./item-detial-routing.module */ "nw7c");
/* harmony import */ var _item_detial_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./item-detial.page */ "zGA0");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");






let ItemDetialPageModule = /*@__PURE__*/ (() => {
    class ItemDetialPageModule {
    }
    ItemDetialPageModule.ɵfac = function ItemDetialPageModule_Factory(t) { return new (t || ItemDetialPageModule)(); };
    ItemDetialPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: ItemDetialPageModule });
    ItemDetialPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
                _item_detial_routing_module__WEBPACK_IMPORTED_MODULE_3__["ItemDetialPageRoutingModule"]
            ]] });
    return ItemDetialPageModule;
})();
(function () {
    (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](ItemDetialPageModule, { declarations: [_item_detial_page__WEBPACK_IMPORTED_MODULE_4__["ItemDetialPage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
            _item_detial_routing_module__WEBPACK_IMPORTED_MODULE_3__["ItemDetialPageRoutingModule"]] });
})();


/***/ }),

/***/ "nw7c":
/*!**************************************************************************!*\
  !*** ./src/app/pages/workflow/item-detial/item-detial-routing.module.ts ***!
  \**************************************************************************/
/*! exports provided: ItemDetialPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemDetialPageRoutingModule", function() { return ItemDetialPageRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _item_detial_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./item-detial.page */ "zGA0");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    {
        path: '',
        component: _item_detial_page__WEBPACK_IMPORTED_MODULE_1__["ItemDetialPage"]
    }
];
let ItemDetialPageRoutingModule = /*@__PURE__*/ (() => {
    class ItemDetialPageRoutingModule {
    }
    ItemDetialPageRoutingModule.ɵfac = function ItemDetialPageRoutingModule_Factory(t) { return new (t || ItemDetialPageRoutingModule)(); };
    ItemDetialPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: ItemDetialPageRoutingModule });
    ItemDetialPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
    return ItemDetialPageRoutingModule;
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ItemDetialPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zGA0":
/*!****************************************************************!*\
  !*** ./src/app/pages/workflow/item-detial/item-detial.page.ts ***!
  \****************************************************************/
/*! exports provided: ItemDetialPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemDetialPage", function() { return ItemDetialPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _services_utils_moment_moment_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../services/utils/moment/moment.service */ "9cE+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_utils_loading_loading_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../services/utils/loading/loading.service */ "YMUU");
/* harmony import */ var _services_api_workflow_workflow_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../services/api/workflow/workflow.service */ "QpGb");
/* harmony import */ var _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/photo-viewer/ngx */ "U3FU");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");









function ItemDetialPage_ion_content_6_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-content", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "section", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "ion-skeleton-text", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "ion-skeleton-text", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "ion-skeleton-text", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "section", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "ion-skeleton-text", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "ion-skeleton-text", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "section", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "ion-avatar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "ion-skeleton-text", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "ion-avatar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "ion-skeleton-text", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "ion-avatar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "ion-skeleton-text", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](23, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "section", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](25, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](26, "ion-skeleton-text", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](27, "ion-skeleton-text", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](28, "ion-skeleton-text", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](29, "ion-skeleton-text", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](30, "ion-skeleton-text", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](31, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
}
const _c0 = function (a0) { return { zero: a0 }; };
function ItemDetialPage_ion_content_7_div_82_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "p", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const data_r4 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](data_r4.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](7, _c0, data_r4.amount_dd === 0 ? true : false));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](data_r4.amount_dd);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](9, _c0, data_r4.amount_hh === 0 ? true : false));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](data_r4.amount_hh);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](11, _c0, data_r4.amount_mm === 0 ? true : false));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](data_r4.amount_mm);
    }
}
function ItemDetialPage_ion_content_7_section_83_Template(rf, ctx) {
    if (rf & 1) {
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ItemDetialPage_ion_content_7_section_83_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r5.onCancelWorkflow(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "\u0E22\u0E01\u0E40\u0E25\u0E34\u0E01\u0E43\u0E1A\u0E25\u0E32");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
}
const _c1 = function (a1) { return { "status__item": true, disable: a1 }; };
function ItemDetialPage_ion_content_7_Template(rf, ctx) {
    if (rf & 1) {
        const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-content", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "section", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Workflow : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Document : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48\u0E25\u0E32 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "section", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "\u0E40\u0E2B\u0E15\u0E38\u0E1C\u0E25 : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ItemDetialPage_ion_content_7_Template_img_click_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r7.onViewImage(ctx_r7.attachFiles); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "section", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](28, "ion-icon", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](32, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](39, "ion-icon", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](42, "ion-icon", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](46, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](51);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](53, "ion-icon", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](56, "ion-icon", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](58);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](60, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](63);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](65);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "section", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](69, "\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E2A\u0E16\u0E34\u0E15\u0E34\u0E2A\u0E30\u0E2A\u0E21\u0E17\u0E31\u0E49\u0E07\u0E1B\u0E35");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](71);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](73, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](74, "p", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](75, "\u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17\u0E01\u0E32\u0E23\u0E25\u0E32");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](76, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](77, "\u0E27\u0E31\u0E19");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](78, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](79, "\u0E0A\u0E31\u0E48\u0E27\u0E42\u0E21\u0E07");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](80, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](81, "\u0E19\u0E32\u0E17\u0E35");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](82, ItemDetialPage_ion_content_7_div_82_Template, 9, 13, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](83, ItemDetialPage_ion_content_7_section_83_Template, 3, 0, "section", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", (ctx_r1.state == null ? null : ctx_r1.state.workflow_id) || "", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", (ctx_r1.state == null ? null : ctx_r1.state.doc_id) || "", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", (ctx_r1.state == null ? null : ctx_r1.state.show_date) || "", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" (", (ctx_r1.state == null ? null : ctx_r1.state.time_count) || "", ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", (ctx_r1.state == null ? null : ctx_r1.state.absent_reason) || "", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r1.attachFiles, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](32, _c1, ctx_r1.statusCheck == null ? null : ctx_r1.statusCheck.person == null ? null : ctx_r1.statusCheck.person.disable));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("name", ctx_r1.statusCheck == null ? null : ctx_r1.statusCheck.person == null ? null : ctx_r1.statusCheck.person.icon)("color", ctx_r1.statusCheck == null ? null : ctx_r1.statusCheck.person == null ? null : ctx_r1.statusCheck.person.color);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.statusCheck == null ? null : ctx_r1.statusCheck.person == null ? null : ctx_r1.statusCheck.person.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r1.statusData == null ? null : ctx_r1.statusData.person == null ? null : ctx_r1.statusData.person.image, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.statusData == null ? null : ctx_r1.statusData.person == null ? null : ctx_r1.statusData.person.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("( ", ctx_r1.statusData == null ? null : ctx_r1.statusData.person == null ? null : ctx_r1.statusData.person.duty, " )");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](34, _c1, ctx_r1.statusCheck == null ? null : ctx_r1.statusCheck.approver == null ? null : ctx_r1.statusCheck.approver.disable));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](36, _c1, ctx_r1.statusCheck == null ? null : ctx_r1.statusCheck.approver == null ? null : ctx_r1.statusCheck.approver.disable));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("name", ctx_r1.statusCheck == null ? null : ctx_r1.statusCheck.approver == null ? null : ctx_r1.statusCheck.approver.icon)("color", ctx_r1.statusCheck == null ? null : ctx_r1.statusCheck.approver == null ? null : ctx_r1.statusCheck.approver.color);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.statusCheck == null ? null : ctx_r1.statusCheck.approver == null ? null : ctx_r1.statusCheck.approver.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r1.statusData == null ? null : ctx_r1.statusData.approver == null ? null : ctx_r1.statusData.approver.image, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.statusData == null ? null : ctx_r1.statusData.approver == null ? null : ctx_r1.statusData.approver.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("( ", ctx_r1.statusData == null ? null : ctx_r1.statusData.approver == null ? null : ctx_r1.statusData.approver.duty, " )");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](38, _c1, ctx_r1.statusCheck == null ? null : ctx_r1.statusCheck.officer == null ? null : ctx_r1.statusCheck.officer.disable));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](40, _c1, ctx_r1.statusCheck == null ? null : ctx_r1.statusCheck.officer == null ? null : ctx_r1.statusCheck.officer.disable));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("name", ctx_r1.statusCheck == null ? null : ctx_r1.statusCheck.officer == null ? null : ctx_r1.statusCheck.officer.icon)("color", ctx_r1.statusCheck == null ? null : ctx_r1.statusCheck.officer == null ? null : ctx_r1.statusCheck.officer.color);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.statusCheck == null ? null : ctx_r1.statusCheck.officer == null ? null : ctx_r1.statusCheck.officer.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r1.statusData == null ? null : ctx_r1.statusData.officer == null ? null : ctx_r1.statusData.officer.image, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.statusData == null ? null : ctx_r1.statusData.officer == null ? null : ctx_r1.statusData.officer.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("( ", ctx_r1.statusData == null ? null : ctx_r1.statusData.officer == null ? null : ctx_r1.statusData.officer.duty, " )");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("( \u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E16\u0E36\u0E07\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48 ", ctx_r1.statisLastProcess, " )");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r1.statisData);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx_r1.state == null ? null : ctx_r1.state.step_id) === "10");
    }
}
_services_utils_moment_moment_service__WEBPACK_IMPORTED_MODULE_1__["moment"].locale('th');
let ItemDetialPage = /*@__PURE__*/ (() => {
    class ItemDetialPage {
        constructor(router, navCtrl, loading, api, photoViewer, alertController) {
            var _a, _b;
            this.router = router;
            this.navCtrl = navCtrl;
            this.loading = loading;
            this.api = api;
            this.photoViewer = photoViewer;
            this.alertController = alertController;
            this.status = 'LOADING';
            this.statisData = [];
            this.statisLastProcess = null;
            this.statusData = null;
            this.statusCheck = null;
            this.state = ((_b = (_a = this.router.getCurrentNavigation()) === null || _a === void 0 ? void 0 : _a.extras) === null || _b === void 0 ? void 0 : _b.state) || null;
            console.log(this.state);
        }
        ngOnInit() {
            this.loadData();
        }
        loadData() {
            var _a, _b;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                try {
                    yield this.loading.present();
                    const period = Object(_services_utils_moment_moment_service__WEBPACK_IMPORTED_MODULE_1__["moment"])(Object(_services_utils_moment_moment_service__WEBPACK_IMPORTED_MODULE_1__["moment"])(new Date())).format('YYYY');
                    const fetchStatus = yield this.api.workflowDocDetail({ workflow_id: (_a = this.state) === null || _a === void 0 ? void 0 : _a.workflow_id, doc_id: (_b = this.state) === null || _b === void 0 ? void 0 : _b.doc_id });
                    const dataStatus = fetchStatus.data || null;
                    this.loadStatus(dataStatus);
                    const fetchStatis = yield this.api.workflowTimestat(period, (dataStatus === null || dataStatus === void 0 ? void 0 : dataStatus.emp_id) || '');
                    const dataStatis = fetchStatis.datas || [];
                    this.loadStatis(dataStatis, fetchStatis.lastprocess);
                    this.attachFiles = dataStatus.attach_file; // `https://webapp7.icc.co.th/qrms/Letter/AttachFiles/256402/${this.state.workflow_id}/${this.state.workflow_id}.jpg`;
                    this.status = 'OK';
                    this.loading.dismiss();
                }
                catch (error) {
                    this.status = 'ERROR';
                    this.loading.dismiss();
                }
            });
        }
        loadStatus(data) {
            const check = (p) => {
                const status = p.workflow_status || null;
                const step = p.step_id || null;
                if (status === 'WAIT' && step === '10') {
                    return {
                        person: { value: 'รอรับทราบ', icon: 'time', color: 'warning', disable: false },
                        approver: { value: 'รออนุมัติ', icon: 'time', color: 'warning', disable: true },
                        officer: { value: 'รออนุมัติ', icon: 'time', color: 'warning', disable: true },
                    };
                }
                if (status === 'WAIT' && step === '30') {
                    return {
                        person: { value: 'รับทราบ', icon: 'checkmark-circle', color: 'success', disable: false },
                        approver: { value: 'รออนุมัติ', icon: 'time', color: 'warning', disable: false },
                        officer: { value: 'รออนุมัติ', icon: 'time', color: 'warning', disable: true },
                    };
                }
                if (status === 'WAIT' && step === '60') {
                    return {
                        person: { value: 'รับทราบ', icon: 'checkmark-circle', color: 'success', disable: false },
                        approver: { value: 'อนุมัติ', icon: 'checkmark-circle', color: 'success', disable: false },
                        officer: { value: 'รออนุมัติ', icon: 'time', color: 'warning', disable: false },
                    };
                }
                if (status === 'APPROVE') {
                    return {
                        person: { value: 'รับทราบ', icon: 'checkmark-circle', color: 'success', disable: false },
                        approver: { value: 'อนุมัติ', icon: 'checkmark-circle', color: 'success', disable: false },
                        officer: { value: 'ผ่านอนุมัติ', icon: 'checkmark-circle', color: 'success', disable: false },
                    };
                }
                if (status === 'CANCEL') {
                    return {
                        person: { value: 'รับทราบ', icon: 'checkmark-circle', color: 'warning', disable: true },
                        approver: { value: 'รออนุมัติ', icon: 'checkmark-circle', color: 'warning', disable: true },
                        officer: { value: 'รออนุมัติ', icon: 'checkmark-circle', color: 'warning', disable: true },
                    };
                }
                if (status === 'NOTAPPROVE') {
                    if (step === '' || step === null) {
                        return {
                            person: { value: 'รับทราบ', icon: 'close-circle', color: 'warning', disable: true },
                            approver: { value: 'รออนุมัติ', icon: 'close-circle', color: 'warning', disable: true },
                            officer: { value: 'รออนุมัติ', icon: 'close-circle', color: 'warning', disable: true },
                        };
                    }
                    else if (step === '10') {
                        return {
                            person: { value: 'ไม่อนุมัติ', icon: 'close-circle', color: 'danger', disable: false },
                            approver: { value: 'รออนุมัติ', icon: 'time', color: 'warning', disable: true },
                            officer: { value: 'รออนุมัติ', icon: 'time ', color: 'warning', disable: true },
                        };
                    }
                    else if (step === '30') {
                        return {
                            person: { value: 'รับทราบ', icon: 'checkmark-circle', color: 'success', disable: false },
                            approver: { value: 'ไม่อนุมัติ', icon: 'close-circle', color: 'danger', disable: false },
                            officer: { value: 'รออนุมัติ', icon: 'time ', color: 'warning', disable: true },
                        };
                    }
                    else if (step === '60') {
                        return {
                            person: { value: 'รับทราบ', icon: 'checkmark-circle', color: 'success', disable: false },
                            approver: { value: 'อนุมัติ', icon: 'checkmark-circle', color: 'success', disable: false },
                            officer: { value: 'ไม่อนุมัติ', icon: 'close-circle', color: 'danger', disable: false },
                        };
                    }
                }
            };
            this.statusData = data;
            this.statusCheck = check(data);
        }
        loadStatis(datas, lastprocess) {
            const array = [];
            const find = (code) => datas.filter((param) => param.absentcode === code);
            const add = (row, code, text) => ({
                rowno: row,
                absentcode: code,
                description: text,
                amount_dd: 0,
                amount_hh: 0,
                amount_mm: 0,
                empid: null,
                amount: null,
                totamount: null,
                dayofyear: null,
            });
            const a1 = find('A1');
            array.push(a1.length === 0 ? add(1, 'A1', 'ลาป่วย') : array.push(a1[0]));
            const c1 = find('C1');
            array.push(c1.length === 0 ? add(2, 'C1', 'ลากิจ') : array.push(c1[0]));
            const c2 = find('C2');
            array.push(c2.length === 0 ? add(3, 'C2', 'ลากิจพิเศษ') : array.push(c2[0]));
            const g1 = find('G1');
            array.push(g1.length === 0 ? add(4, 'G1', 'ลาพักร้อน') : array.push(g1[0]));
            const h1 = find('H1');
            array.push(h1.length === 0 ? add(5, 'H1', 'ขาดงาน') : array.push(h1[0]));
            const l1 = find('L1');
            array.push(l1.length === 0 ? add(6, 'L1', 'สาย') : array.push(l1[0]));
            this.statisData = array;
            this.statisLastProcess = Object(_services_utils_moment_moment_service__WEBPACK_IMPORTED_MODULE_1__["moment"])(lastprocess, 'DD/MM/YYYY').format('DD MMMM YYYY');
        }
        onCancelWorkflow() {
            var _a;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                const docid = (_a = this.state) === null || _a === void 0 ? void 0 : _a.doc_id;
                const alert = yield this.alertController.create({
                    cssClass: 'alert__box--danger',
                    header: 'Cancel',
                    message: `คุณต้องการยกเลิกใบลา ${docid}`,
                    buttons: [
                        {
                            text: 'ปิด',
                            role: 'cancel',
                            cssClass: 'alert__button--dark',
                        },
                        {
                            text: 'ยืนยัน',
                            cssClass: 'alert__button--danger',
                            handler: () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                                try {
                                    yield this.loading.present();
                                    yield this.api.workflowCancelDoc(docid);
                                    this.loading.dismiss();
                                    this.navCtrl.back();
                                }
                                catch (error) {
                                    console.log(error);
                                    this.loading.dismiss();
                                }
                            }),
                        },
                    ],
                });
                yield alert.present();
            });
        }
        onViewImage(url) {
            this.photoViewer.show(url);
        }
    }
    ItemDetialPage.ɵfac = function ItemDetialPage_Factory(t) { return new (t || ItemDetialPage)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_utils_loading_loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_api_workflow_workflow_service__WEBPACK_IMPORTED_MODULE_6__["WorkflowService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_7__["PhotoViewer"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"])); };
    ItemDetialPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ItemDetialPage, selectors: [["app-item-detial"]], decls: 8, vars: 2, consts: [[1, "ion-no-border"], ["slot", "start"], ["fullscreen", "true", 4, "ngIf"], ["fullscreen", "true"], [1, "skeleton"], ["animated", "", 2, "width", "60%"], ["animated", "", 2, "width", "70%"], ["animated", "", 2, "width", "80%"], [1, "row"], ["animated", ""], [1, "header"], [1, "reason"], [1, "reason__description"], [1, "reason__attachfiles"], ["onError", "this.src='assets/images/workflow/nopicture.png'", "alt", "", 3, "src", "click"], [1, "status"], [1, "status__step"], [3, "ngClass"], [1, "status__item--icon"], [3, "name", "color"], [1, "status__item--image"], ["onError", "this.src='assets/images/workflow/user-default.svg'", "alt", "", 3, "src"], [1, "status__item--text"], ["name", "arrow-forward-outline", 1, "arrow"], [1, "statis"], [1, "statis__label"], [1, "statis__data"], [1, "statis__data__item"], [1, "first"], ["class", "statis__data__item body", 4, "ngFor", "ngForOf"], ["class", "cancel", 4, "ngIf"], [1, "statis__data__item", "body"], [1, "cancel"], [1, "btn", "btn-danger", 3, "click"]], template: function ItemDetialPage_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-header", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-toolbar");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "ion-buttons", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "ion-back-button");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "ion-title");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "\u0E23\u0E32\u0E22\u0E25\u0E30\u0E40\u0E2D\u0E35\u0E22\u0E14\u0E40\u0E2D\u0E01\u0E2A\u0E32\u0E23");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, ItemDetialPage_ion_content_6_Template, 32, 0, "ion-content", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, ItemDetialPage_ion_content_7_Template, 84, 42, "ion-content", 2);
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.status === "LOADING");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.status === "OK");
            }
        }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonTitle"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonSkeletonText"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonAvatar"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"]], styles: [".skeleton[_ngcontent-%COMP%] {\n  background: #ffffff;\n  margin: 10px 10px;\n  padding: 16px;\n  border-radius: 8px;\n  box-shadow: 0px 2px 25px -12px rgba(0, 0, 0, 0.15);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.skeleton[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  display: flex;\n}\n.skeleton[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   ion-avatar[_ngcontent-%COMP%] {\n  margin: 0 12px;\n}\n.header[_ngcontent-%COMP%] {\n  background: #ffffff;\n  margin: 10px 10px;\n  padding: 16px;\n  border-radius: 8px;\n  box-shadow: 0px 2px 25px -12px rgba(0, 0, 0, 0.15);\n}\n.header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #2d2d2d;\n  font-size: 0.9rem;\n  text-align: center;\n}\n.header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #4d4d4d;\n  font-size: 0.9rem;\n  text-align: center;\n}\n.header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  text-align: center;\n}\n.reason[_ngcontent-%COMP%] {\n  background: #ffffff;\n  margin: 10px 10px;\n  padding: 16px;\n  border-radius: 8px;\n  box-shadow: 0px 2px 25px -12px rgba(0, 0, 0, 0.15);\n  display: flex;\n  flex-flow: row nowrap;\n  align-items: center;\n}\n.reason[_ngcontent-%COMP%]   .reason__description[_ngcontent-%COMP%] {\n  flex-basis: 80%;\n}\n.reason[_ngcontent-%COMP%]   .reason__description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n}\n.reason[_ngcontent-%COMP%]   .reason__attachfiles[_ngcontent-%COMP%] {\n  flex-basis: 20%;\n}\n.reason[_ngcontent-%COMP%]   .reason__attachfiles[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 65px;\n  height: 65px;\n  object-fit: cover;\n  border-radius: 3px;\n}\n.status[_ngcontent-%COMP%] {\n  background: #ffffff;\n  margin: 10px 10px;\n  padding: 16px;\n  border-radius: 8px;\n  box-shadow: 0px 2px 25px -12px rgba(0, 0, 0, 0.15);\n}\n.status[_ngcontent-%COMP%]   .status__step[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: space-around;\n  align-items: center;\n}\n.status[_ngcontent-%COMP%]   .status__step[_ngcontent-%COMP%]   .status__item.disable[_ngcontent-%COMP%] {\n  opacity: 0.25;\n}\n.status[_ngcontent-%COMP%]   .status__step[_ngcontent-%COMP%]   .status__item[_ngcontent-%COMP%]   .status__item--image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 65px;\n  height: 65px;\n  object-fit: cover;\n  border-radius: 50%;\n}\n.status[_ngcontent-%COMP%]   .status__step[_ngcontent-%COMP%]   .status__item[_ngcontent-%COMP%]   .status__item--text[_ngcontent-%COMP%] {\n  width: 65px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.status[_ngcontent-%COMP%]   .status__step[_ngcontent-%COMP%]   .status__item[_ngcontent-%COMP%]   .status__item--text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  text-align: center;\n  font-weight: 500;\n  margin: 0;\n}\n.status[_ngcontent-%COMP%]   .status__step[_ngcontent-%COMP%]   .status__item[_ngcontent-%COMP%]   .status__item--icon[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 50px;\n}\n.status[_ngcontent-%COMP%]   .status__step[_ngcontent-%COMP%]   .status__item[_ngcontent-%COMP%]   .status__item--icon[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n}\n.status[_ngcontent-%COMP%]   .status__step[_ngcontent-%COMP%]   .status__item[_ngcontent-%COMP%]   .status__item--icon[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  font-weight: 500;\n  margin: 0;\n  margin-bottom: 6px;\n}\n.statis[_ngcontent-%COMP%] {\n  background: #ffffff;\n  margin: 10px 10px;\n  padding: 16px;\n  border-radius: 8px;\n  box-shadow: 0px 2px 25px -12px rgba(0, 0, 0, 0.15);\n}\n.statis[_ngcontent-%COMP%]   .statis__label[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.statis[_ngcontent-%COMP%]   .statis__label[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n.statis[_ngcontent-%COMP%]   .statis__label[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  font-weight: 400;\n}\n.statis[_ngcontent-%COMP%]   .statis__data[_ngcontent-%COMP%]   .statis__data__item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: center;\n  align-items: center;\n}\n.statis[_ngcontent-%COMP%]   .statis__data[_ngcontent-%COMP%]   .statis__data__item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  font-weight: 500;\n  text-align: center;\n  flex-basis: 15%;\n}\n.statis[_ngcontent-%COMP%]   .statis__data[_ngcontent-%COMP%]   .statis__data__item[_ngcontent-%COMP%]   p.first[_ngcontent-%COMP%] {\n  flex-basis: 55%;\n  text-align: left;\n}\n.statis[_ngcontent-%COMP%]   .statis__data[_ngcontent-%COMP%]   .statis__data__item[_ngcontent-%COMP%]   p.zero[_ngcontent-%COMP%] {\n  color: #d3d3d3;\n  font-weight: 400;\n}\n.statis[_ngcontent-%COMP%]   .statis__data[_ngcontent-%COMP%]   .statis__data__item.body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 3px auto;\n}\n.cancel[_ngcontent-%COMP%] {\n  margin: 10px 10px;\n  padding: 16px;\n}"] });
    return ItemDetialPage;
})();


/***/ })

}]);