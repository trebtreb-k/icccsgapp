(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[15],{

/***/ "hbbQ":
/*!******************************************************************************************!*\
  !*** ./src/app/pages/announce/announce-detail/announce-detail/announce-detail.module.ts ***!
  \******************************************************************************************/
/*! exports provided: AnnounceDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnnounceDetailPageModule", function() { return AnnounceDetailPageModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _announce_detail_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./announce-detail-routing.module */ "y+Pp");
/* harmony import */ var _announce_detail_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./announce-detail.page */ "oiYa");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");






let AnnounceDetailPageModule = /*@__PURE__*/ (() => {
    class AnnounceDetailPageModule {
    }
    AnnounceDetailPageModule.ɵfac = function AnnounceDetailPageModule_Factory(t) { return new (t || AnnounceDetailPageModule)(); };
    AnnounceDetailPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AnnounceDetailPageModule });
    AnnounceDetailPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
                _announce_detail_routing_module__WEBPACK_IMPORTED_MODULE_3__["AnnounceDetailPageRoutingModule"]
            ]] });
    return AnnounceDetailPageModule;
})();
(function () {
    (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AnnounceDetailPageModule, { declarations: [_announce_detail_page__WEBPACK_IMPORTED_MODULE_4__["AnnounceDetailPage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
            _announce_detail_routing_module__WEBPACK_IMPORTED_MODULE_3__["AnnounceDetailPageRoutingModule"]] });
})();


/***/ }),

/***/ "oiYa":
/*!****************************************************************************************!*\
  !*** ./src/app/pages/announce/announce-detail/announce-detail/announce-detail.page.ts ***!
  \****************************************************************************************/
/*! exports provided: AnnounceDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnnounceDetailPage", function() { return AnnounceDetailPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/photo-viewer/ngx */ "U3FU");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");




let AnnounceDetailPage = /*@__PURE__*/ (() => {
    class AnnounceDetailPage {
        constructor(router, photoViewer) {
            this.router = router;
            this.photoViewer = photoViewer;
            this.state = this.router.getCurrentNavigation().extras.state;
            console.log(' this.state', this.state);
            this.announce = this.state;
            //  this.title = this.state.title;
        }
        ngOnInit() {
        }
        onViewImage(url) {
            this.photoViewer.show(url);
        }
    }
    AnnounceDetailPage.ɵfac = function AnnounceDetailPage_Factory(t) { return new (t || AnnounceDetailPage)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_2__["PhotoViewer"])); };
    AnnounceDetailPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AnnounceDetailPage, selectors: [["app-announce-detail"]], decls: 15, vars: 6, consts: [[1, "ion-no-border"], ["slot", "start"], [1, "header-banner"], ["onError", "this.src='assets/imgs/icons/megaphone.svg';", "alt", "", 1, "announce-picture", 3, "src", "click"], [2, "text-align", "center"], [1, "announce-date"], [3, "innerHTML"]], template: function AnnounceDetailPage_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-header", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-toolbar");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-buttons", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "ion-back-button");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ion-title");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ion-content");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "img", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AnnounceDetailPage_Template_img_click_8_listener() { return ctx.onViewImage(ctx.announce.picture); });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h6");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "p", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.announce.title);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.announce.picture, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.announce.title);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48 ", ctx.announce.start_date, " - ", ctx.announce.end_date, "");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.announce.description, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
            }
        }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonContent"]], styles: ["page-announce-detail[_ngcontent-%COMP%]   .announce-date[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #a0a0a0;\n}"] });
    return AnnounceDetailPage;
})();


/***/ }),

/***/ "y+Pp":
/*!**************************************************************************************************!*\
  !*** ./src/app/pages/announce/announce-detail/announce-detail/announce-detail-routing.module.ts ***!
  \**************************************************************************************************/
/*! exports provided: AnnounceDetailPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnnounceDetailPageRoutingModule", function() { return AnnounceDetailPageRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _announce_detail_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./announce-detail.page */ "oiYa");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    {
        path: '',
        component: _announce_detail_page__WEBPACK_IMPORTED_MODULE_1__["AnnounceDetailPage"]
    }
];
let AnnounceDetailPageRoutingModule = /*@__PURE__*/ (() => {
    class AnnounceDetailPageRoutingModule {
    }
    AnnounceDetailPageRoutingModule.ɵfac = function AnnounceDetailPageRoutingModule_Factory(t) { return new (t || AnnounceDetailPageRoutingModule)(); };
    AnnounceDetailPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AnnounceDetailPageRoutingModule });
    AnnounceDetailPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
    return AnnounceDetailPageRoutingModule;
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AnnounceDetailPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ })

}]);