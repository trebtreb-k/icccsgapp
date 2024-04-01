(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[17],{

/***/ "DC7O":
/*!****************************************************************!*\
  !*** ./src/app/pages/csg-plan/create-plan/create-plan.page.ts ***!
  \****************************************************************/
/*! exports provided: CreatePlanPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatePlanPage", function() { return CreatePlanPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _create_plan_menu_popover_create_plan_menu_popover_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../create-plan-menu-popover/create-plan-menu-popover.component */ "LDIC");
/* harmony import */ var _services_utils_moment_moment_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../services/utils/moment/moment.service */ "9cE+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_storage_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../services/storage/storage.service */ "E2f4");
/* harmony import */ var _services_api_csg_plan_csg_plan_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../services/api/csg-plan/csg-plan.service */ "mj2v");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_utils_loading_loading_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../../services/utils/loading/loading.service */ "YMUU");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ion2_calendar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ion2-calendar */ "zTSL");
/* harmony import */ var ion2_calendar__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(ion2_calendar__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "3Pt+");












function CreatePlanPage_span_14_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " \u0E01\u0E23\u0E38\u0E13\u0E32\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E23\u0E49\u0E32\u0E19\u0E04\u0E49\u0E32 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }
}
function CreatePlanPage_span_21_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "\u0E01\u0E23\u0E38\u0E13\u0E32\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E40\u0E04\u0E32\u0E19\u0E4C\u0E40\u0E15\u0E2D\u0E23\u0E4C");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }
}
function CreatePlanPage_span_29_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleMapInterpolate1"]("background-color: #", ctx_r2.saveData.worktype.color, "; width: 20px; height: 20px; border-radius: 50%; float: left;");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r2.saveData.worktype.name);
    }
}
function CreatePlanPage_div_30_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "\u0E0A\u0E48\u0E27\u0E07\u0E40\u0E27\u0E25\u0E32\u0E17\u0E35\u0E48\u0E1B\u0E0E\u0E34\u0E1A\u0E31\u0E15\u0E34\u0E07\u0E32\u0E19");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }
}
function CreatePlanPage_ion_card_31_Template(rf, ctx) {
    if (rf & 1) {
        const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-card", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "ion-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "ion-col");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "ion-item", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "\u0E40\u0E23\u0E34\u0E48\u0E21\u0E07\u0E32\u0E19 : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "ion-datetime", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ionChange", function CreatePlanPage_ion_card_31_Template_ion_datetime_ionChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r9.timeFromClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "ion-col");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "ion-item", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "\u0E2A\u0E34\u0E49\u0E19\u0E2A\u0E38\u0E14\u0E07\u0E32\u0E19 : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "ion-datetime", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ionChange", function CreatePlanPage_ion_card_31_Template_ion_datetime_ionChange_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r11.timeToClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx_r4.timeFrom);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx_r4.timeTo)("min", ctx_r4.timeFrom);
    }
}
function CreatePlanPage_ion_item_32_Template(rf, ctx) {
    if (rf & 1) {
        const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "ion-checkbox", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ionChange", function CreatePlanPage_ion_item_32_Template_ion_checkbox_ionChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r12.checkEvent($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E0A\u0E48\u0E27\u0E07\u0E40\u0E27\u0E25\u0E32\u0E1B\u0E0F\u0E34\u0E1A\u0E31\u0E15\u0E34\u0E07\u0E32\u0E19 OT");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("checked", ctx_r5.eventcheck.detail.checked === true)("disabled", !ctx_r5.timeFrom);
    }
}
function CreatePlanPage_ion_card_33_Template(rf, ctx) {
    if (rf & 1) {
        const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-card", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "ion-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "ion-col");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "ion-item", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "\u0E40\u0E23\u0E34\u0E48\u0E21 OT : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "ion-datetime", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ionChange", function CreatePlanPage_ion_card_33_Template_ion_datetime_ionChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r14.timeOTFromClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "ion-col");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "ion-item", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "\u0E2A\u0E34\u0E49\u0E19\u0E2A\u0E38\u0E14 OT : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "ion-datetime", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ionChange", function CreatePlanPage_ion_card_33_Template_ion_datetime_ionChange_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r15); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r16.timeOTToClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("min", ctx_r6.timeTo)("value", ctx_r6.timeTo);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx_r6.otTo)("min", ctx_r6.timeTo);
    }
}
function CreatePlanPage_div_35_ion_button_2_Template(rf, ctx) {
    if (rf & 1) {
        const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-button", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CreatePlanPage_div_35_ion_button_2_Template_ion_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r23.selectAll(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E27\u0E31\u0E19\u0E17\u0E33\u0E07\u0E32\u0E19\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx_r17.status_plan === "N" ? false : ctx_r17.status_plan === "X" ? false : true);
    }
}
function CreatePlanPage_div_35_ion_button_3_Template(rf, ctx) {
    if (rf & 1) {
        const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-button", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CreatePlanPage_div_35_ion_button_3_Template_ion_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r26); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r25.reStartDays(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "img", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx_r18.status_plan === "N" ? false : ctx_r18.status_plan === "X" ? false : true);
    }
}
function CreatePlanPage_div_35_div_4_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "\u0E40\u0E2B\u0E25\u0E37\u0E2D\u0E43\u0E0A\u0E49\u0E27\u0E31\u0E19\u0E2B\u0E22\u0E38\u0E14\u0E07\u0E32\u0E19\u0E43\u0E19\u0E40\u0E14\u0E37\u0E2D\u0E19\u0E19\u0E35\u0E49\u0E2D\u0E35\u0E01 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, " \u0E27\u0E31\u0E19");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r19.countHoliday);
    }
}
function CreatePlanPage_div_35_div_5_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "\u0E40\u0E2B\u0E25\u0E37\u0E2D\u0E43\u0E0A\u0E49\u0E27\u0E31\u0E19 Holiday \u0E43\u0E19\u0E40\u0E14\u0E37\u0E2D\u0E19\u0E19\u0E35\u0E49\u0E2D\u0E35\u0E01 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, " \u0E27\u0E31\u0E19");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r20.countHoliday);
    }
}
function CreatePlanPage_div_35_ion_calendar_7_Template(rf, ctx) {
    if (rf & 1) {
        const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-calendar", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function CreatePlanPage_div_35_ion_calendar_7_Template_ion_calendar_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r28); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r27.startDate = $event; })("monthChange", function CreatePlanPage_div_35_ion_calendar_7_Template_ion_calendar_monthChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r28); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r29.getHolidayForMonths($event); })("change", function CreatePlanPage_div_35_ion_calendar_7_Template_ion_calendar_change_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r28); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r30.onChange2($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r21.startDate)("type", ctx_r21.type)("options", ctx_r21.optionsMulti2)("format", "DD-MM-YYYY");
    }
}
function CreatePlanPage_div_35_ion_item_sliding_10_p_14_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "\u0E40\u0E27\u0E25\u0E32\u0E1B\u0E0F\u0E34\u0E1A\u0E31\u0E15\u0E34\u0E07\u0E32\u0E19 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const v_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", v_r31.workfrom, " - ", v_r31.workto, "");
    }
}
function CreatePlanPage_div_35_ion_item_sliding_10_p_15_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "\u0E40\u0E27\u0E25\u0E32\u0E17\u0E33 OT ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const v_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", v_r31.otfrom, " - ", v_r31.otto, "");
    }
}
function CreatePlanPage_div_35_ion_item_sliding_10_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-item-sliding");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "ion-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "ion-thumbnail", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "img", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "p", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "B");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "span", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "p", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "p", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, CreatePlanPage_div_35_ion_item_sliding_10_p_14_Template, 4, 2, "p", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, CreatePlanPage_div_35_ion_item_sliding_10_p_15_Template, 4, 2, "p", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const v_r31 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", v_r31.image, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](v_r31.date);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](v_r31.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](v_r31.custname);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", v_r31.counterid, " ", v_r31.countername, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", v_r31.workfrom);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", v_r31.otfrom);
    }
}
function CreatePlanPage_div_35_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, CreatePlanPage_div_35_ion_button_2_Template, 2, 1, "ion-button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, CreatePlanPage_div_35_ion_button_3_Template, 2, 1, "ion-button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, CreatePlanPage_div_35_div_4_Template, 6, 1, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, CreatePlanPage_div_35_div_5_Template, 6, 1, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, CreatePlanPage_div_35_ion_calendar_7_Template, 1, 4, "ion-calendar", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "ion-list", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, CreatePlanPage_div_35_ion_item_sliding_10_Template, 16, 8, "ion-item-sliding", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r7.status == "W1");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r7.status == "W1");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r7.status == "V1");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r7.status == "W2");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r7.loadDataHoliday);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r7.values);
    }
}
function CreatePlanPage_ion_footer_36_ion_button_2_Template(rf, ctx) {
    if (rf & 1) {
        const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-button", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CreatePlanPage_ion_footer_36_ion_button_2_Template_ion_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r38); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r37.presentAlertConfirm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "ion-icon", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, " \u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01\u0E01\u0E32\u0E23\u0E2A\u0E23\u0E49\u0E32\u0E07");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }
}
function CreatePlanPage_ion_footer_36_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "ion-toolbar", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, CreatePlanPage_ion_footer_36_ion_button_2_Template, 4, 0, "ion-button", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r8.saveData.shop.value && ctx_r8.saveData.counter.value && ctx_r8.timeFrom && ctx_r8.timeTo !== null && ctx_r8.dataSelectDay.length !== 0);
    }
}
_services_utils_moment_moment_service__WEBPACK_IMPORTED_MODULE_2__["moment"].locale('th');
let CreatePlanPage = /*@__PURE__*/ (() => {
    class CreatePlanPage {
        constructor(storage, api, router, createPlanPopover, navCtrl, csgPlanPopover, alertController, loading) {
            this.storage = storage;
            this.api = api;
            this.router = router;
            this.createPlanPopover = createPlanPopover;
            this.navCtrl = navCtrl;
            this.csgPlanPopover = csgPlanPopover;
            this.alertController = alertController;
            this.loading = loading;
            this.check = false;
            this.dataHoliday = [];
            this.sss = [];
            this.tap = 'WorkDay';
            this.status = 'W1';
            this.statusType = '';
            this.countSelect = 0;
            this.countSelectHoliday = 0;
            this.flagcount = 'Y';
            this.saveData = {
                shop: { value: null, name: null },
                counter: { value: null, name: null },
                timetype: { value: null, name: null },
                worktype: { value: 'W1', name: 'วันทำงานปกติ', color: '008000' },
            };
            this.daysConfig = [];
            this.workday = [];
            this.dataSelectDay = [];
            this.showAllday = [];
            this.dataAssigndate = [];
            this.myColorVaraible = 'red';
            this.focused = false;
            const state = this.router.getCurrentNavigation().extras.state;
            console.log(state);
            this.paramsMonthBefore = state;
        }
        checkEvent(ev) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                console.log(ev);
                console.log(this.eventcheck);
                console.log(this.check);
                this.eventcheck = ev;
                console.log(this.eventcheck.detail.checked);
                this.check = this.eventcheck.detail.checked;
                if (this.check === false) {
                    this.timeOTFrom = '';
                    this.timeOTTo = '';
                    this.otType = '';
                    console.log('::::::111');
                }
                else {
                    console.log(this.otTo);
                    this.timeOTFrom = this.timeTo;
                    this.timeOTTo = this.otTo;
                    this.otType = 'OT';
                    // this.otTo = this.timeOTFrom;
                    console.log('::::::222');
                    console.log(this.timeTo);
                    console.log(this.timeOTTo);
                    // this.check = this.check === false ? true : false;
                }
                console.log(this.check);
                console.log(this.eventcheck.detail.checked);
                // this.check = this.check === false ? true : false;
                this.check = this.eventcheck.detail.checked === true ? true : false;
                console.log(this.check);
            });
        }
        ngOnInit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                // await this.loading.dismiss();
                // this.timeFrom = '10:00';
                // this.timeTo = '19:00';
                this.timeOTFrom = '19:00';
                this.timeOTTo = '19:00';
                // this.otFrom = '19:00';
                // this.otTo = '19:00';
                // alert('sssss');
                console.log(Object(_services_utils_moment_moment_service__WEBPACK_IMPORTED_MODULE_2__["moment"])(this.paramsMonthBefore.monthToCreate, 'YYYYMM').format('MM-DD-YYYY'));
                // moment(this.startDate.monthToCreate,'YYYYMM').format('YYYYMM')
                this.startDate = Object(_services_utils_moment_moment_service__WEBPACK_IMPORTED_MODULE_2__["moment"])(this.paramsMonthBefore.monthToCreate, 'YYYYMM').format('MM-DD-YYYY');
                // let myTag = this.el.nativeElement.querySelector("p");
                // alert("sss");
                this.check = false;
                this.eventcheck = { detail: { checked: false } };
                this.getUserInfo();
                // this.loadData = this.getDataDateM(this.dataAssigndate)
                if (this.startDate) {
                    // alert('มี')
                    this.monthCreate = Object(_services_utils_moment_moment_service__WEBPACK_IMPORTED_MODULE_2__["moment"])(this.paramsMonthBefore.monthToCreate, 'YYYYMM').format('YYYYMM');
                }
                else {
                    this.monthCreate = Object(_services_utils_moment_moment_service__WEBPACK_IMPORTED_MODULE_2__["moment"])().format('YYYYMM');
                }
                const callTimeDefaultApi = yield this.api.getTimeDefault();
                // this.timeTo = '19:00';
                console.log('--------------', callTimeDefaultApi);
                this.timeFrom = `${callTimeDefaultApi.datas[0].open_time.substring('0', '2')}:${callTimeDefaultApi.datas[0].open_time.substring('2', '4')}`;
                this.timeTo = `${callTimeDefaultApi.datas[0].close_time_cal.substring('0', '2')}:${callTimeDefaultApi.datas[0].close_time_cal.substring('2', '4')}`;
                this.otFrom = `${callTimeDefaultApi.datas[0].close_time_cal.substring('0', '2')}:${callTimeDefaultApi.datas[0].close_time_cal.substring('2', '4')}`;
                this.otTo = `${callTimeDefaultApi.datas[0].close_time.substring('0', '2')}:${callTimeDefaultApi.datas[0].close_time.substring('2', '4')}`;
                // this.m = moment().format('MM');
                this.m = Object(_services_utils_moment_moment_service__WEBPACK_IMPORTED_MODULE_2__["moment"])().format('MM');
                this.MDayCheck = this.m;
                const monthC = +this.m - 1;
                this.y = Object(_services_utils_moment_moment_service__WEBPACK_IMPORTED_MODULE_2__["moment"])().format('YYYY');
                this.d = Object(_services_utils_moment_moment_service__WEBPACK_IMPORTED_MODULE_2__["moment"])().format('D');
                console.log(this.y, monthC, this.d);
                // this.dayStart = this.moment.daysBefore('1','M');
                this.dayStartFromM = monthC;
                this.dayStartFromD = +this.d;
                this.dayStartFromY = +this.y;
                // const dayStartFrom = this.dayStart.substr(0, 5) + monthC + this.dayStart.substr(4);
                console.log(this.dayStartFromY, this.dayStartFromM);
            });
        }
        getDatasCSGCreatePlan(periodplan, custid, counterid) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                const dataCsgCreatePlan = [];
                // this.countHoliday = 0;
                // alert(this.countHoliday);
                // this.monthCreate = moment(events.newMonth.string).format('YYYYMM');
                this.counterid = counterid;
                console.log('/////', custid, counterid, this.empId, periodplan);
                // this.monthCreate = moment().format('YYYYMM');
                // this.m = moment().format('MM');
                // this.MDayCheck = this.m;
                // const monthC = +this.m - 1;
                // this.y = moment().format('YYYY');
                // this.d = moment().format('D');
                // console.log(this.y, monthC, this.d);
                // this.dayStart = this.moment.daysBefore('1','M');
                // this.dayStartFromM = monthC;
                // this.dayStartFromD = +this.d;
                // this.dayStartFromY = +this.y;
                // const dayStartFrom = this.dayStart.substr(0, 5) + monthC + this.dayStart.substr(4);
                // console.log(this.dayStartFromY, this.dayStartFromM);
                console.log('///////////////////////', this.daysConfig);
                const callApi = yield this.api.getHolidayCSGPlan(periodplan);
                this.dataHolidayAPI = callApi.datas;
                console.log('----', this.dataHolidayAPI);
                this.dateAll = callApi.datas;
                console.log(this.empId);
                console.log('this.monthCreate, this.empId', this.monthCreate, this.empId);
                console.log('periodplan, this.empId', periodplan, this.empId);
                const callApiCountHoliday = yield this.api.getCountHoliday(periodplan, this.empId);
                // const callApiCountHoliday = await this.api.getCountHoliday(this.monthCreate, '90536');
                console.log(callApiCountHoliday);
                if (callApiCountHoliday.datas.length !== 0) {
                    console.log('มีการกำหนดวันหยุดพิเศษเดือนนี้แล้ว');
                    this.countHolidayAPI = callApiCountHoliday.datas;
                    console.log(this.monthCreate);
                    console.log(this.countHolidayAPI);
                    // this.countSpecial = this.countHolidayAPI[0].special;
                }
                else {
                    console.log('*****ยังไม่มีการกำหนดวันหยุด');
                    callApiCountHoliday.datas.push({ sunday: 0, special: 0, holiday: 0 });
                    this.countHolidayAPI = callApiCountHoliday.datas;
                    console.log(this.countHolidayAPI);
                    // this.countSpecial = this.countHolidayAPI[0].special;
                }
                // this.countHolidayAPI = callApiCountHoliday.datas;
                this.countSpecial = this.countHolidayAPI[0].special + this.countHolidayAPI[0].sunday;
                this.countHoliday = this.countHolidayAPI[0].holiday;
                console.log(this.countHolidayAPI);
                this.loadDataHoliday = this.getDataHoliDay(this.dataHolidayAPI);
                const callApiGetCsgCreatePlanDetail = yield this.api.getCsgCreatePlanDetail(custid, counterid, this.empId, periodplan);
                console.log(callApiGetCsgCreatePlanDetail);
                console.log(this.saveData);
                console.log(this.daysConfig);
                console.log(callApiGetCsgCreatePlanDetail.datas);
                console.log('?????', this.dataHoliday);
                for (const data of callApiGetCsgCreatePlanDetail.datas) {
                    // console.log(data);
                    // console.log(this.dayStartFromY, this.dayStartFromM, this.dayStartFromD);
                    // $(".select-date-end-task-add").change(async function () {
                    //   const start = $(".select-date-start-task-add").val();
                    //   const end = $(this).val();
                    //   const days = await diffDate(start, end);
                    //   $(".project-task-day-add").val(days);
                    // });
                    // function diffDate(start, end) {
                    // try {
                    const date = Object(_services_utils_moment_moment_service__WEBPACK_IMPORTED_MODULE_2__["moment"])(new Date()).format('DD/MM/YYYY');
                    // console.log(date);
                    let date_res = Object(_services_utils_moment_moment_service__WEBPACK_IMPORTED_MODULE_2__["moment"])(data.date, 'DD-MM-YYYY');
                    let this_day = Object(_services_utils_moment_moment_service__WEBPACK_IMPORTED_MODULE_2__["moment"])(date, 'DD-MM-YYYY');
                    const diff = date_res.diff(this_day, 'days');
                    const days = diff;
                    // console.log(days);
                    // return days;
                    // } catch (error) {
                    //   console.error(error);
                    // }
                    // }
                    // console.log("??????",data);
                    let typecss;
                    if (days < 0) {
                        typecss =
                            data.worktype === 'W1'
                                ? 'custom-calendar workday oct'
                                : data.worktype === 'W2'
                                    ? 'custom-calendar workholiday oct'
                                    : data.worktype === 'V1'
                                        ? 'custom-calendar offday oct'
                                        : data.worktype === 'LE'
                                            ? 'custom-calendar expected-holiday oct'
                                            : '';
                    }
                    else {
                        typecss =
                            data.worktype === 'W1'
                                ? 'custom-calendar workday'
                                : data.worktype === 'W2'
                                    ? 'custom-calendar workholiday'
                                    : data.worktype === 'V1'
                                        ? 'custom-calendar offday'
                                        : data.worktype === 'LE'
                                            ? 'custom-calendar expected-holiday'
                                            : '';
                    }
                    console.log(data);
                    !data.timetype
                        ? ''
                        : dataCsgCreatePlan.push({
                            date: Object(_services_utils_moment_moment_service__WEBPACK_IMPORTED_MODULE_2__["moment"])(data.date, 'DD/MM/YYYY').format('YYYY-MM-DD'),
                            // "cssClass": days < 0 ? "custom-calendar workday oct" : "custom-calendar workday",
                            cssClass: `${typecss}`,
                            worktype: `${data.worktype}`,
                            // "subTitle": `${data.worktype} ${data.otfrom !== '' ? 'OT' : ''}`,
                            subTitle: `${data.timefrom === '' ? data.worktype : data.timefrom} ${data.otfrom !== '' ? 'OT' : ''}`,
                            timefrom: data.timefrom,
                            timeto: data.timeto,
                            timeotfrom: data.otfrom,
                            timeotto: data.otto,
                        });
                    // this.daysConfig.push({ ...data, date: moment(data.date).format('YYYY-MM-DD') });
                }
                this.daysConfig = dataCsgCreatePlan;
                //   this.daysConfig.push({
                //     "date": "2022-09-27",
                //     "cssClass": "custom-calendar workday",
                //     "subTitle": "A8"
                // });
                console.log('?????', this.daysConfig);
                this.dataSelectDay = this.daysConfig;
                console.log(dataCsgCreatePlan);
                console.log('?????', this.dataHoliday);
                console.log(dataCsgCreatePlan.length);
                for (const data of this.dataHoliday) {
                    // console.log('?????',data.date);
                    // console.log('?????',moment(data.date).format('YYYY-MM-DD'));
                    console.log('???', data);
                    // if (dataCsgCreatePlan.length === 0) {
                    data.date = Object(_services_utils_moment_moment_service__WEBPACK_IMPORTED_MODULE_2__["moment"])(data.date).format('YYYY-MM-DD');
                    console.log('??----', data);
                    // dataCsgCreatePlan.push(data);
                    const searchIndex = dataCsgCreatePlan.findIndex((i) => i.date === data.date);
                    console.log(searchIndex);
                    console.log(dataCsgCreatePlan[searchIndex]);
                    if (dataCsgCreatePlan[searchIndex]) {
                        if (dataCsgCreatePlan[searchIndex].worktype === '') {
                            dataCsgCreatePlan[searchIndex].cssClass = 'custom-calendar holiday';
                        }
                    }
                    else {
                        dataCsgCreatePlan.push(data);
                    }
                    // dataCsgCreatePlan[searchIndex].cssClass = dataCsgCreatePlan[searchIndex].worktype !== '' ? 'custom-calendar holiday' : '';
                    // }
                }
                console.log(dataCsgCreatePlan);
                let checkCountHoliday = 0;
                for (const item of dataCsgCreatePlan) {
                    console.log('????', item);
                    if (item.worktype === 'W2' || item.worktype === 'V1') {
                        checkCountHoliday++;
                    }
                }
                console.log(this.countHoliday);
                console.log(checkCountHoliday);
                this.countHoliday = this.countHolidayAPI[0].holiday - checkCountHoliday;
                console.log(this.dayStartFromY, this.dayStartFromM, this.dayStartFromD);
                const callApiPlan = yield this.api.getCSGPlan(this.empId, periodplan);
                this.status_plan = callApiPlan.status_plan;
                console.log(callApiPlan);
                this.dataAssigndate = callApiPlan.datas;
                // from: new Date(this.dayStartFromY, this.dayStartFromM, this.dayStartFromD),
                this.optionsMulti2 = {
                    from: new Date(this.dayStartFromY, this.dayStartFromM, this.dayStartFromD),
                    disableWeeks: this.status_plan === 'N' ? '' : this.status_plan === 'X' ? '' : [0, 1, 2, 3, 4, 5, 6],
                    monthFormat: 'ปี YYYY เดือน MMM',
                    monthPickerFormat: ['ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย.', 'ก.ค.', 'ส.ค.', 'ก.ย.', 'ต.ค.', 'พ.ย.', 'ธ.ค.'],
                    weekdays: ['อา', 'จ', 'อ', 'พ', 'พฤ', 'ศ', 'ส'],
                    weekStart: 0,
                    showToggleButtons: true,
                    showMonthPicker: true,
                    // pickMode: 'multi',
                    daysConfig: dataCsgCreatePlan,
                };
                this.getdetailDay(this.dataAssigndate);
                // await this.ssasds(datasTest);
                // this.values = valToMonths;
                // return this.dataHoliday;
                // this.editValue()
            });
        }
        getUserInfo() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                const info = yield this.storage.get('USER_INFO');
                this.empId = info === null || info === void 0 ? void 0 : info.emp_id;
                // this.loading.dismiss();
            });
        }
        segmentChanged(ev) {
            console.log(ev.detail.value);
            this.tap = ev.detail.value;
        }
        getDataHoliDay(dataApi) {
            this.dataHoliday = [];
            console.log('dataApi', dataApi);
            dataApi.forEach((e) => {
                // console.log(e);
                // const dateC = this.moment.formatDate(e.date, 'MM-DD-YYYY', 'th', 'DD/MM/YYYY');
                // const dateC = moment(e.date, 'DD/MM/YYYY').format('MM-DD-YYYY');
                const dateC = Object(_services_utils_moment_moment_service__WEBPACK_IMPORTED_MODULE_2__["moment"])(e.date, 'DD/MM/YYYY').format('YYYY-MM-DD');
                // console.log(e.dayofweek+"///"+dateC);
                if (e.iccholiday === '1' && e.dayofweek !== '1' && e.dayofweek !== '7') {
                    this.dataHoliday.push({
                        date: new Date(dateC),
                        cssClass: 'custom-calendar holiday',
                    });
                }
                // this.data.push({
                //   date: new Date(dateC),
                //   cssClass: e.worktype!='W1' ? 'custom-calendar danger' : 'custom-calendar normal',
                //   subTitle: e.sumot === 0 ? null : '*OT',
                // })
            });
            // console.log(this.dataHoliday);
            return this.dataHoliday;
        }
        getdetailDay(data) {
            console.log(this.daysConfig);
            console.log(data);
            // this.dataAssigndate = this.daysConfig;
            // return;
            const valToMonths = [];
            for (let index = 0; index < this.dataAssigndate.length; index++) {
                // for (let [index, item]  of this.loadData.entries()) {
                const date = Object(_services_utils_moment_moment_service__WEBPACK_IMPORTED_MODULE_2__["moment"])(new Date()).format('DD/MM/YYYY');
                console.log(this.dataAssigndate[index].assigndate);
                let date_res = Object(_services_utils_moment_moment_service__WEBPACK_IMPORTED_MODULE_2__["moment"])(this.dataAssigndate[index].assigndate, 'DD-MM-YYYY');
                let this_day = Object(_services_utils_moment_moment_service__WEBPACK_IMPORTED_MODULE_2__["moment"])(date, 'DD-MM-YYYY');
                console.log(date_res);
                console.log(this_day);
                const diff = date_res.diff(this_day, 'days');
                const days = diff;
                console.log(days);
                // if (days < 0) {
                this.dataAssigndate[index].typecancel = days < 0 ? `N` : `Y`;
                // }else{
                // }
                // }
                console.log(this.dataAssigndate[index]);
                console.log(this.counterMenu);
                if (this.dataAssigndate[index].counterid === this.counterMenu) {
                    valToMonths.push({
                        image: data[index].worktype === 'W1'
                            ? 'assets/images/csg-plan/calendar_w.png'
                            : data[index].worktype === 'W2'
                                ? 'assets/images/csg-plan/calendar_h.png'
                                : data[index].worktype === 'V1'
                                    ? 'assets/images/csg-plan/calendar_o.png'
                                    : data[index].worktype === 'LE'
                                        ? 'assets/images/csg-plan/calendar_o3.png'
                                        : 'assets/images/csg-plan/calendar_s.svg',
                        date: `${Object(_services_utils_moment_moment_service__WEBPACK_IMPORTED_MODULE_2__["moment"])(data[index].assigndate, 'DD/MM/YYYY').format('dd')} ${data[index].assigndate}`,
                        value: data[index].workdesc,
                        stateOt: data[index].sumot !== 0 && data[index].sumot != null ? 'Y' : 'N',
                        worktype: data[index].worktype,
                        workfrom: data[index].workfrom !== ''
                            ? data[index].workfrom.substring(0, 2) + '.' + data[index].workfrom.substring(2, 4)
                            : data[index].workfrom,
                        workto: data[index].workto !== '' ? data[index].workto.substring(0, 2) + '.' + data[index].workto.substring(2, 4) : data[index].workto,
                        otfrom: data[index].otfrom !== '' ? data[index].otfrom.substring(0, 2) + '.' + data[index].otfrom.substring(2, 4) : data[index].otfrom,
                        otto: data[index].otto !== '' ? data[index].otto.substring(0, 2) + '.' + data[index].otto.substring(2, 4) : data[index].otto,
                        custid: data[index].custid,
                        custname: data[index].custname,
                        counterid: data[index].counterid,
                        countername: data[index].countername,
                        typecancel: data[index].typecancel,
                    });
                }
            }
            console.log(valToMonths);
            this.values = valToMonths;
            // console.log(moment(this.values[0].date.substring(3), 'DD/MM/YYYY'));
            // console.log(this.values[0].date.substring(3));
            // const jj =  this.values.sort((a, b) => moment(b.date.substring(3), 'DD/MM/YYYY').unix() - moment(a.date.substring(3), 'DD/MM/YYYY').unix());
            // console.log(jj);
            return this.values;
        }
        getHolidayForMonths(events) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                // this.getDatasCSGCreatePlan(this.monthCreate, this.custid, this.counterMenu);
                this.countSelect = 0;
                this.dataHoliday = [];
                // this.monthCreate = moment(events.newMonth.string).format('YYYYMM');
                this.monthCreate = Object(_services_utils_moment_moment_service__WEBPACK_IMPORTED_MODULE_2__["moment"])(events.newMonth.string).format('YYYYMM');
                this.reStartDays();
                console.log(events.newMonth.string);
                // this.monthCreate = this.moment.formatDate(events.newMonth.string, 'YYYYMM');
                const callApiCountHoliday = yield this.api.getCountHoliday(this.monthCreate, this.empId);
                console.log(callApiCountHoliday.datas);
                console.log(callApiCountHoliday.datas.length);
                if (callApiCountHoliday.datas.length !== 0) {
                    console.log('มีการกำหนดวันหยุดพิเศษเดือนนี้แล้ว');
                    this.countHolidayAPI = callApiCountHoliday.datas;
                    console.log(this.monthCreate);
                    console.log(this.countHolidayAPI);
                    // this.countSpecial = this.countHolidayAPI[0].special;
                }
                else {
                    console.log('*****ยังไม่มีการกำหนดวันหยุด');
                    callApiCountHoliday.datas.push({ sunday: 0, special: 0, holiday: 0 });
                    this.countHolidayAPI = callApiCountHoliday.datas;
                    console.log(this.countHolidayAPI);
                    // this.countSpecial = this.countHolidayAPI[0].special;
                }
                this.countSpecial = this.countHolidayAPI[0].special + this.countHolidayAPI[0].sunday;
                this.countHoliday = this.countHolidayAPI[0].holiday;
                this.MDayCheck = Object(_services_utils_moment_moment_service__WEBPACK_IMPORTED_MODULE_2__["moment"])(events.newMonth.string).format('MM');
                console.log(this.monthCreate);
                const callApi = yield this.api.getHolidayCSGPlan(this.monthCreate);
                this.dataHolidayAPI = callApi.datas;
                // this.loadData = this.getDataDateM(this.dataHolidayAPI)
                console.log('?????', this.loadDataHoliday);
                const valToMonths = [];
                // cssClass: e.worktype!='W1' ? 'custom-calendar danger' : 'custom-calendar normal',
                console.log(this.dataHolidayAPI);
                this.dateAll = callApi.datas;
                for (const index in this.dataHolidayAPI.length) {
                    if (this.dataHolidayAPI[index].iccholiday === '1' &&
                        this.dataHolidayAPI[index].dayofweek !== '1' &&
                        this.dataHolidayAPI[index].dayofweek !== '7') {
                        console.log('<><><<><><><');
                        const dateC = Object(_services_utils_moment_moment_service__WEBPACK_IMPORTED_MODULE_2__["moment"])(this.dataHolidayAPI[index].date, 'DD/MM/YYYY').format('MM-DD-YYYY');
                        this.dataHoliday.push({
                            date: new Date(dateC),
                            cssClass: 'custom-calendar holiday',
                        });
                    }
                }
                console.log(this.dataHoliday);
                console.log(this.daysConfig);
                console.log('this.monthCreate', this.monthCreate);
                console.log('this.custid', this.custid);
                console.log('this.counterMenu', this.counterMenu);
                this.getDatasCSGCreatePlan(this.monthCreate, this.custid, this.counterMenu);
                // this.optionsMulti2 = {
                //   from: new Date(this.dayStartFromY, this.dayStartFromM, this.dayStartFromD),
                //   monthFormat: 'ปี YYYY เดือน MMM',
                //   monthPickerFormat: ['ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย.', 'ก.ค.', 'ส.ค.', 'ก.ย.', 'ต.ค.', 'พ.ย.', 'ธ.ค.'],
                //   weekdays: ['อา', 'จ', 'อ', 'พ', 'พฤ', 'ศ', 'ส'],
                //   weekStart: 0,
                //   showToggleButtons: true,
                //   showMonthPicker: true,
                //   // pickMode: 'multi',
                //   daysConfig: this.daysConfig,
                // };
                // this.values = valToMonths;
                return this.dataHoliday;
                // this.editValue()
            });
        }
        changeBT(v) {
            this.status = v.detail.value;
            console.log(v);
        }
        changeBT2(v) {
            this.statusType = v.detail.value;
            console.log(v);
            console.log(this.statusType);
        }
        onChange2(ev) {
            let checkCountHoliday = 0;
            console.log('onChange2', ev);
            console.log('????', this.status);
            // console.log('this.countHoliday',this.countHoliday);
            console.log('this.timeOTFrom----', this.timeOTFrom);
            console.log('this.timeOTTo----', this.timeOTTo);
            console.log('this.otType-----', this.otType);
            const value = Object(_services_utils_moment_moment_service__WEBPACK_IMPORTED_MODULE_2__["moment"])(ev._d, 'DD/MM/YYYY').format('YYYY-MM-DD');
            const MCheck = Object(_services_utils_moment_moment_service__WEBPACK_IMPORTED_MODULE_2__["moment"])(ev._d, 'DD/MM/YYYY').format('MM');
            const DCheck = Object(_services_utils_moment_moment_service__WEBPACK_IMPORTED_MODULE_2__["moment"])(ev._d, 'DD/MM/YYYY').format('DD');
            console.log(MCheck, this.MDayCheck);
            console.log(this.daysConfig);
            console.log(this.values);
            if (this.daysConfig.length === 0) {
                const init = this.dataHoliday;
                console.log('////', this.dataHoliday);
                for (const x of init) {
                    this.daysConfig.push(Object.assign(Object.assign({}, x), { date: Object(_services_utils_moment_moment_service__WEBPACK_IMPORTED_MODULE_2__["moment"])(x.date).format('YYYY-MM-DD') }));
                }
            }
            console.log(this.daysConfig);
            const searchIndex = this.daysConfig.findIndex((i) => i.date === value);
            console.log(this.status);
            console.log(searchIndex);
            console.log(this.statusType);
            console.log(this.check);
            // let gg = html(`<br>${searchIndex}`);
            if (searchIndex < 0) {
                this.countSelect++;
                // if (this.status === 'W2') {
                //   this.countHoliday--;
                //   checkCountHoliday = this.countHoliday;
                // }
                if (this.status === 'V1') {
                    this.daysConfig.push({
                        date: Object(_services_utils_moment_moment_service__WEBPACK_IMPORTED_MODULE_2__["moment"])(ev._d, 'DD/MM/YYYY').format('YYYY-MM-DD'),
                        cssClass: 'custom-calendar offday',
                        subTitle: `${this.status} `,
                        worktype: `${this.status}`,
                        timefrom: '',
                        timeto: '',
                        timeotfrom: '',
                        timeotto: '',
                    });
                }
                else if (this.status === 'LE') {
                    this.daysConfig.push({
                        date: Object(_services_utils_moment_moment_service__WEBPACK_IMPORTED_MODULE_2__["moment"])(ev._d, 'DD/MM/YYYY').format('YYYY-MM-DD'),
                        cssClass: 'custom-calendar expected-holiday',
                        subTitle: `${this.status} `,
                        worktype: `${this.status}`,
                        timefrom: '',
                        timeto: '',
                        timeotfrom: '',
                        timeotto: '',
                    });
                }
                else {
                    this.daysConfig.push({
                        date: Object(_services_utils_moment_moment_service__WEBPACK_IMPORTED_MODULE_2__["moment"])(ev._d, 'DD/MM/YYYY').format('YYYY-MM-DD'),
                        cssClass: this.status === 'W1'
                            ? 'custom-calendar workday'
                            : this.status === 'V1'
                                ? 'custom-calendar offday'
                                : this.status === 'W2'
                                    ? 'custom-calendar workholiday'
                                    : this.status === 'LE'
                                        ? 'custom-calendar expected-holiday'
                                        : '',
                        // subTitle: `${this.statusType} ${this.otType === 'OT' ? 'OT' : ''}`,
                        subTitle: `${this.timeFrom.substring('0', '2')}${this.timeFrom.substring('3')} ${this.otType === 'OT' ? 'OT' : ''}`,
                        worktype: `${this.status}`,
                        timefrom: `${this.timeFrom.substring('0', '2')}${this.timeFrom.substring('3')}`,
                        timeto: `${this.timeTo.substring('0', '2')}${this.timeTo.substring('3')}`,
                        timeotfrom: this.check === true ? `${this.timeOTFrom.substring('0', '2')}${this.timeOTFrom.substring('3')}` : '',
                        timeotto: this.check === true ? `${this.timeOTTo.substring('0', '2')}${this.timeOTTo.substring('3')}` : '',
                    });
                }
            }
            else if (searchIndex >= 0) {
                console.log(this.check);
                this.countSelect--;
                console.log(this.daysConfig[searchIndex].cssClass, this.status);
                console.log(this.daysConfig[searchIndex]);
                const fromTimeFrom = `${this.timeFrom.substring('0', '2')}${this.timeFrom.substring('3')}`;
                const fromTimeTo = `${this.timeTo.substring('0', '2')}${this.timeTo.substring('3')}`;
                const fromTimeOTFrom = this.check === true ? `${this.timeOTFrom.substring('0', '2')}${this.timeOTFrom.substring('3')}` : '';
                const fromTimeOTTo = this.check === true ? `${this.timeOTTo.substring('0', '2')}${this.timeOTTo.substring('3')}` : '';
                this.daysConfig[searchIndex].worktype = this.status;
                console.log('?????', this.daysConfig);
                console.log('?????', this.daysConfig[searchIndex]);
                console.log('?????', this.status);
                if (this.status === 'W1') {
                    console.log('TYPE W1');
                    console.log(this.daysConfig[searchIndex].cssClass);
                    if (this.daysConfig[searchIndex].cssClass === 'custom-calendar workday') {
                        console.log('cssClass = custom-calendar workday');
                        if (this.daysConfig[searchIndex].timefrom !== fromTimeFrom || this.daysConfig[searchIndex].timeto !== fromTimeTo) {
                            console.log(' !== fromTime ');
                            console.log('11111111111111111111');
                            console.log(this.daysConfig[searchIndex].timefrom, fromTimeFrom);
                            this.daysConfig[searchIndex].timefrom = fromTimeFrom;
                            this.daysConfig[searchIndex].timeto = fromTimeTo;
                            this.daysConfig[searchIndex].subTitle = `${fromTimeFrom} `;
                            if (this.check === true) {
                                this.daysConfig[searchIndex].timeotfrom = fromTimeOTFrom;
                                this.daysConfig[searchIndex].timeotto = fromTimeOTTo;
                                // this.daysConfig[searchIndex].subTitle = `${this.status} ${this.check === true ? 'OT' : ''}`;
                                this.daysConfig[searchIndex].subTitle = `${this.timeFrom.substring('0', '2')}${this.timeFrom.substring('3')} ${this.check === true ? 'OT' : ''}`;
                            }
                        }
                        else {
                            console.log('cssClass != custom-calendar workday');
                            if (this.check === true) {
                                if (this.daysConfig[searchIndex].timeotfrom !== fromTimeOTFrom || this.daysConfig[searchIndex].timeotto !== fromTimeOTTo) {
                                    console.log(' !== fromTime ');
                                    this.daysConfig[searchIndex].timeotfrom = fromTimeOTFrom;
                                    this.daysConfig[searchIndex].timeotto = fromTimeOTTo;
                                    // this.daysConfig[searchIndex].subTitle = `${this.status} ${this.check === true ? 'OT' : ''}`;
                                    this.daysConfig[searchIndex].subTitle = `${this.timeFrom.substring('0', '2')}${this.timeFrom.substring('3')} ${this.check === true ? 'OT' : ''}`;
                                }
                                else {
                                    this.daysConfig.splice(searchIndex, 1);
                                }
                            }
                            else {
                                // if (this.daysConfig[searchIndex].subTitle !== 'W1 OT') {
                                if (this.daysConfig[searchIndex].subTitle !== `${this.timeFrom.substring('0', '2')}${this.timeFrom.substring('3')} OT`) {
                                    this.daysConfig.splice(searchIndex, 1);
                                }
                                else {
                                    this.daysConfig[searchIndex].timeotfrom = fromTimeOTFrom;
                                    this.daysConfig[searchIndex].timeotto = fromTimeOTTo;
                                    // this.daysConfig[searchIndex].subTitle = `${this.status} `;
                                    this.daysConfig[searchIndex].subTitle = `${this.timeFrom.substring('0', '2')}${this.timeFrom.substring('3')} `;
                                }
                            }
                        }
                    }
                    else {
                        console.log('no workday');
                        this.daysConfig[searchIndex].cssClass = 'custom-calendar workday';
                        this.daysConfig[searchIndex].timefrom = fromTimeFrom;
                        this.daysConfig[searchIndex].timeto = fromTimeTo;
                        if (this.check === true) {
                            this.daysConfig[searchIndex].timeotfrom = fromTimeOTFrom;
                            this.daysConfig[searchIndex].timeotto = fromTimeOTTo;
                            // this.daysConfig[searchIndex].subTitle = `${this.status} ${this.check === true ? 'OT' : ''}`;
                            this.daysConfig[searchIndex].subTitle = `${this.timeFrom.substring('0', '2')}${this.timeFrom.substring('3')} ${this.check === true ? 'OT' : ''}`;
                        }
                        else {
                            this.daysConfig[searchIndex].timeotfrom = '';
                            this.daysConfig[searchIndex].timeotto = '';
                            // this.daysConfig[searchIndex].subTitle = `${this.status} `;
                            this.daysConfig[searchIndex].subTitle = `${this.timeFrom.substring('0', '2')}${this.timeFrom.substring('3')} `;
                        }
                    }
                }
                else if (this.status === 'W2') {
                    console.log('TYPE W2');
                    console.log(this.daysConfig[searchIndex].cssClass);
                    if (this.daysConfig[searchIndex].cssClass === 'custom-calendar workholiday') {
                        console.log('cssClass = custom-calendar workholiday');
                        if (this.daysConfig[searchIndex].timefrom !== fromTimeFrom || this.daysConfig[searchIndex].timeto !== fromTimeTo) {
                            console.log(' !== fromTime ');
                            this.daysConfig[searchIndex].timefrom = fromTimeFrom;
                            this.daysConfig[searchIndex].timeto = fromTimeTo;
                            if (this.check === true) {
                                this.daysConfig[searchIndex].timeotfrom = fromTimeOTFrom;
                                this.daysConfig[searchIndex].timeotto = fromTimeOTTo;
                                // this.daysConfig[searchIndex].subTitle = `${this.status} ${this.check === true ? 'OT' : ''}`;
                                this.daysConfig[searchIndex].subTitle = `${this.timeFrom.substring('0', '2')}${this.timeFrom.substring('3')} ${this.check === true ? 'OT' : ''}`;
                            }
                        }
                        else {
                            console.log('cssClass != custom-calendar workholiday');
                            if (this.check === true) {
                                if (this.daysConfig[searchIndex].timeotfrom !== fromTimeOTFrom || this.daysConfig[searchIndex].timeotto !== fromTimeOTTo) {
                                    console.log(' !== fromTime ');
                                    this.daysConfig[searchIndex].timeotfrom = fromTimeOTFrom;
                                    this.daysConfig[searchIndex].timeotto = fromTimeOTTo;
                                    // this.daysConfig[searchIndex].subTitle = `${this.status} ${this.check === true ? 'OT' : ''}`;
                                    this.daysConfig[searchIndex].subTitle = `${this.timeFrom.substring('0', '2')}${this.timeFrom.substring('3')} ${this.check === true ? 'OT' : ''}`;
                                }
                                else {
                                    this.daysConfig[searchIndex].timeotfrom = '';
                                    this.daysConfig[searchIndex].timeotto = '';
                                    this.daysConfig.splice(searchIndex, 1);
                                }
                            }
                            else {
                                // if (this.daysConfig[searchIndex].subTitle !== 'W2 OT') {
                                if (this.daysConfig[searchIndex].subTitle !== `${this.timeFrom.substring('0', '2')}${this.timeFrom.substring('3')} OT`) {
                                    this.daysConfig[searchIndex].timeotfrom = '';
                                    this.daysConfig[searchIndex].timeotto = '';
                                    this.daysConfig.splice(searchIndex, 1);
                                }
                                else {
                                    this.daysConfig[searchIndex].timeotfrom = fromTimeOTFrom;
                                    this.daysConfig[searchIndex].timeotto = fromTimeOTTo;
                                    // this.daysConfig[searchIndex].subTitle = `${this.status} `;
                                    this.daysConfig[searchIndex].subTitle = `${this.timeFrom.substring('0', '2')}${this.timeFrom.substring('3')} `;
                                }
                            }
                        }
                    }
                    else {
                        console.log('no workholiday');
                        this.daysConfig[searchIndex].cssClass = 'custom-calendar workholiday';
                        this.daysConfig[searchIndex].timefrom = fromTimeFrom;
                        this.daysConfig[searchIndex].timeto = fromTimeTo;
                        if (this.check === true) {
                            this.daysConfig[searchIndex].timeotfrom = fromTimeOTFrom;
                            this.daysConfig[searchIndex].timeotto = fromTimeOTTo;
                            // this.daysConfig[searchIndex].subTitle = `${this.status} ${this.check === true ? 'OT' : ''}`;
                            this.daysConfig[searchIndex].subTitle = `${this.timeFrom.substring('0', '2')}${this.timeFrom.substring('3')} ${this.check === true ? 'OT' : ''}`;
                        }
                        else {
                            this.daysConfig[searchIndex].timeotfrom = '';
                            this.daysConfig[searchIndex].timeotto = '';
                            // this.daysConfig[searchIndex].subTitle = `${this.status} `;
                            this.daysConfig[searchIndex].subTitle = `${this.timeFrom.substring('0', '2')}${this.timeFrom.substring('3')} `;
                        }
                    }
                }
                else if (this.status === 'V1') {
                    console.log(this.daysConfig[searchIndex].cssClass);
                    console.log(this.status);
                    if (this.daysConfig[searchIndex].cssClass !== 'custom-calendar offday') {
                        console.log('!= custom-calendar offday');
                        this.daysConfig[searchIndex].cssClass = 'custom-calendar offday';
                        this.daysConfig[searchIndex].timefrom = '';
                        this.daysConfig[searchIndex].timeto = '';
                        this.daysConfig[searchIndex].timeotfrom = '';
                        this.daysConfig[searchIndex].timeotto = '';
                        this.daysConfig[searchIndex].subTitle = `${this.status} `;
                        this.daysConfig[searchIndex].worktype = this.status;
                    }
                    else {
                        console.log('= custom-calendar offday');
                        this.daysConfig.splice(searchIndex, 1);
                    }
                }
                else if (this.status === 'LE') {
                    console.log(this.daysConfig[searchIndex].cssClass);
                    console.log(this.status);
                    if (this.daysConfig[searchIndex].cssClass !== 'custom-calendar expected-holiday') {
                        console.log('!= custom-calendar expected-holiday');
                        this.daysConfig[searchIndex].cssClass = 'custom-calendar expected-holiday';
                        this.daysConfig[searchIndex].timefrom = '';
                        this.daysConfig[searchIndex].timeto = '';
                        this.daysConfig[searchIndex].timeotfrom = '';
                        this.daysConfig[searchIndex].timeotto = '';
                        this.daysConfig[searchIndex].subTitle = `${this.status} `;
                        this.daysConfig[searchIndex].worktype = this.status;
                    }
                    else {
                        console.log('= custom-calendar expected-holiday');
                        this.daysConfig.splice(searchIndex, 1);
                    }
                }
                console.log(this.daysConfig);
                console.log(searchIndex);
                // if (this.values.length > 0) {
                //   const searchIndexInValue = this.values.findIndex((i) => i.date === moment(value,'YYYY-MM-DD').format('DD/MM/YYYY'));
                //   console.log(searchIndexInValue);
                // }
                // console.log(this.values);
            }
            console.log(this.daysConfig);
            console.log(this.daysConfig[0]);
            // console.log(this.daysConfig[searchIndex]);
            // this.sss = [{date: '2022-09-14', cssClass: 'custom-calendar workday', defaultSubtitle: 'W2'}];
            for (const item of this.daysConfig) {
                console.log('????', item);
                if (item.worktype === 'W2' || item.worktype === 'V1') {
                    checkCountHoliday++;
                }
            }
            console.log(this.countHoliday);
            console.log(checkCountHoliday);
            this.countHoliday = this.countHolidayAPI[0].holiday - checkCountHoliday;
            console.log('after', this.countHoliday);
            console.log('this.daysConfig', this.daysConfig);
            console.log('value', value);
            const searchIndexInDaysConfig = this.daysConfig.findIndex((i) => i.date === value);
            console.log(searchIndexInDaysConfig);
            console.log(value);
            // const searchIndexInValues = this.values.findIndex((i) => i.date === moment(value,'YYYY-MM-DD').format('DD/MM/YYYY'));
            // console.log(searchIndexInValues);
            if (this.countHoliday < 0) {
                console.log(this.daysConfig[searchIndexInDaysConfig]);
                this.daysConfig.splice(searchIndexInDaysConfig, 1);
                this.countHoliday = 0;
            }
            console.log('after this.daysConfig', this.daysConfig);
            // this.optionsMulti2 = {
            //   from: new Date(this.dayStartFromY, this.dayStartFromM, this.dayStartFromD),
            //   monthFormat: 'ปี YYYY เดือน MMM',
            //   monthPickerFormat: ['ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย.', 'ก.ค.', 'ส.ค.', 'ก.ย.', 'ต.ค.', 'พ.ย.', 'ธ.ค.'],
            //   weekdays: ['อา', 'จ', 'อ', 'พ', 'พฤ', 'ศ', 'ส'],
            //   weekStart: 0,
            //   showToggleButtons: true,
            //   showMonthPicker: true,
            //   // color: '#ffffff',
            //   // marked: true,
            //   // pickMode: 'multi',
            //   // disableWeeks: [0, 6],
            //   // defaultTitle: ['111'],
            //   // defaultSubtitle: ['11','22'],
            //   daysConfig: this.daysConfig,
            //   // daysConfig: this.sss,
            // };
            // const callApiPlan = await this.api.getCSGPlan(this.empId, this.monthCreate);
            // this.status_plan = callApiPlan.status_plan;
            // console.log(callApiPlan);
            // from: new Date(this.dayStartFromY, this.dayStartFromM, this.dayStartFromD),
            this.optionsMulti2 = {
                from: new Date(this.dayStartFromY, this.dayStartFromM, this.dayStartFromD),
                disableWeeks: this.status_plan === 'N' ? '' : this.status_plan === 'X' ? '' : [0, 1, 2, 3, 4, 5, 6],
                monthFormat: 'ปี YYYY เดือน MMM',
                monthPickerFormat: ['ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย.', 'ก.ค.', 'ส.ค.', 'ก.ย.', 'ต.ค.', 'พ.ย.', 'ธ.ค.'],
                weekdays: ['อา', 'จ', 'อ', 'พ', 'พฤ', 'ศ', 'ส'],
                weekStart: 0,
                showToggleButtons: true,
                showMonthPicker: true,
                // pickMode: 'multi',
                daysConfig: this.daysConfig,
            };
            console.log(this.dataSelectDay);
            console.log(this.daysConfig);
            this.dataSelectDay = [];
            for (const item of this.daysConfig) {
                console.log(item.cssClass);
                if (item.cssClass !== 'custom-calendar holiday') {
                    this.dataSelectDay.push(item);
                }
            }
            // if (this.daysConfig.length !== this.dataSelectDay.length) {
            // console.log(moment(this.dataSelectDay[1].date, 'DD/MM/YYYY').format('YYYY-MM-DD'));
            // }
            console.log(this.countHoliday);
            console.log(this.countHolidayAPI[0].holiday);
            console.log(this.daysConfig);
            console.log(this.values);
            this.values = [];
            for (const item of this.daysConfig) {
                if (item.subTitle && item.worktype !== '') {
                    console.log('มี');
                    console.log(Object(_services_utils_moment_moment_service__WEBPACK_IMPORTED_MODULE_2__["moment"])(item.date, 'YYYY-MM-DD').format('dd'));
                    this.values.push({
                        image: item.worktype === 'W1'
                            ? 'assets/images/csg-plan/calendar_w.png'
                            : item.worktype === 'W2'
                                ? 'assets/images/csg-plan/calendar_h.png'
                                : item.worktype === 'V1'
                                    ? 'assets/images/csg-plan/calendar_o.png'
                                    : item.worktype === 'LE'
                                        ? 'assets/images/csg-plan/calendar_o3.png'
                                        : '',
                        date: `${Object(_services_utils_moment_moment_service__WEBPACK_IMPORTED_MODULE_2__["moment"])(item.date, 'YYYY-MM-DD').format('dd')} ${Object(_services_utils_moment_moment_service__WEBPACK_IMPORTED_MODULE_2__["moment"])(item.date, 'YYYY-MM-DD').format('DD/MM/YYYY')}`,
                        value: item.worktype === 'W1'
                            ? 'วันทำงานปกติ'
                            : item.worktype === 'W2'
                                ? 'HOLIDAY'
                                : item.worktype === 'V1'
                                    ? 'วันหยุดประจำสัปดาห์'
                                    : item.worktype === 'LE'
                                        ? 'ลางาน'
                                        : '',
                        worktype: `${item.worktype}`,
                        workfrom: item.timefrom === '' ? '' : `${item.timefrom.substring('0', '2')}:${item.timefrom.substring('2')}`,
                        workto: item.timeto === '' ? '' : `${item.timeto.substring('0', '2')}:${item.timeto.substring('2')}`,
                        otfrom: item.timeotfrom === '' ? '' : `${item.timeotfrom.substring('0', '2')}:${item.timeotfrom.substring('2')}`,
                        otto: item.timeotto === '' ? '' : `${item.timeotto.substring('0', '2')}:${item.timeotto.substring('2')}`,
                        counterid: `${this.counterid}`,
                    });
                }
                else {
                    console.log('ไม่มี');
                }
            }
            // console.log(moment(this.values[0].date.substring(3), 'DD/MM/YYYY'));
            // console.log(this.values[0].date.substring(3));
            const jj = this.values.sort((b, a) => Object(_services_utils_moment_moment_service__WEBPACK_IMPORTED_MODULE_2__["moment"])(b.date.substring(3), 'DD/MM/YYYY').unix() - Object(_services_utils_moment_moment_service__WEBPACK_IMPORTED_MODULE_2__["moment"])(a.date.substring(3), 'DD/MM/YYYY').unix());
            console.log(jj);
            console.log(this.values);
        }
        cancelPlan() {
            console.log('cancelPlan');
            // const navigationExtras:NavigationExtras = {
            //   state: {name: "trebtreb"}
            // }
            this.router.navigate(['csg-plan']);
        }
        popoverShopMenu(ev) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                console.log(ev);
                console.log(this.custidMenu);
                console.log(this.counterMenu);
                const popover = yield this.createPlanPopover.create({
                    component: _create_plan_menu_popover_create_plan_menu_popover_component__WEBPACK_IMPORTED_MODULE_1__["CreatePlanMenuPopoverComponent"],
                    cssClass: 'popoverMenu',
                    componentProps: {
                        // props: { type: ev, dataCounter: !this.counters ? '' : this.counters },
                        props: { type: ev, dataCounter: !this.counters ? '' : this.counters, custid: !this.custid ? '' : this.custid },
                        props2: { counterid: !this.counterMenu ? '' : this.counterMenu },
                        props3: { time_from: '', time_to: '' },
                        props4: { worktype: '', worktypename: '', worktypecolor: '' },
                    },
                    event: ev,
                    translucent: true,
                });
                popover.onDidDismiss().then((param) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    if (param.role !== 'backdrop' && param.data.dismissed) {
                        const val = param.data;
                        console.log('----', val);
                        if (ev === 'shop') {
                            this.saveData.shop.value = val.value;
                            this.saveData.shop.name = val.name;
                            this.saveData.counter.value = null;
                            this.saveData.counter.name = null;
                            this.saveData.timetype.value = null;
                            this.saveData.timetype.name = null;
                            this.counters = val.counter;
                            this.custidMenu = val.name;
                            this.custid = val.value;
                            this.statusType = null;
                            // this.monthCreate = moment().format('YYYYMM');
                            if (this.startDate) {
                                this.monthCreate = Object(_services_utils_moment_moment_service__WEBPACK_IMPORTED_MODULE_2__["moment"])(this.paramsMonthBefore.monthToCreate, 'YYYYMM').format('YYYYMM');
                            }
                            else {
                                this.monthCreate = Object(_services_utils_moment_moment_service__WEBPACK_IMPORTED_MODULE_2__["moment"])().format('YYYYMM');
                            }
                            console.log('ssss');
                            console.log(this.empId, this.custid);
                            const callApi2 = yield this.api.getCouterShopCSGPlan(this.empId, this.custid);
                            console.log(callApi2);
                            console.log(callApi2.datas.length);
                            if (callApi2.datas.length === 1) {
                                this.saveData.counter.value = callApi2.datas[0].counterid;
                                this.saveData.counter.name = `${callApi2.datas[0].counterid} ${callApi2.datas[0].countername}`;
                                this.counterMenu = callApi2.datas[0].counterid;
                            }
                            else {
                                this.saveData.counter.value = null;
                                this.saveData.counter.name = null;
                            }
                            console.log(this.monthCreate, this.custid, this.counterMenu);
                            this.reStartDays();
                        }
                        console.log(this.custidMenu);
                        console.log('custid', this.custid);
                        if (ev === 'counter') {
                            console.log('////', val);
                            console.log('>>>>', this.saveData.counter);
                            this.saveData.counter.value = val.value;
                            this.saveData.counter.name = val.name;
                            this.counterMenu = val.value;
                            this.saveData.timetype.value = null;
                            this.saveData.timetype.name = null;
                            this.statusType = null;
                            this.countSelect = 0;
                            // this.reStartDays();
                            console.log(this.monthCreate, this.custid, this.counterMenu);
                            this.getDatasCSGCreatePlan(this.monthCreate, this.custid, this.counterMenu);
                        }
                        if (ev === 'timetype') {
                            console.log('////', val);
                            console.log('>>>>', this.saveData.timetype);
                            console.log('ev', ev);
                            this.saveData.timetype.value = val.value;
                            this.saveData.timetype.name = val.name;
                            // this.counterMenu = val.value;
                            this.statusType = val.value;
                            console.log(val.time_from.substring(0, 2));
                            console.log(val.time_from.substring(2));
                            console.log(`${val.time_from.substring(0, 2)}:${val.time_from.substring(2, 4)}`);
                            this.otFrom = `${val.time_from.substring(0, 2)}:${val.time_from.substring(2, 4)}`;
                            this.otTo = `${val.time_to.substring(0, 2)}:${val.time_to.substring(2, 4)}`;
                            if (this.check !== true) {
                                this.timeOTFrom = '';
                                this.timeOTTo = '';
                            }
                            else {
                                this.timeOTFrom = this.otFrom;
                                this.timeOTTo = this.otTo;
                            }
                            // this.timeOTFrom = this.otFrom;
                            // this.timeOTTo = this.otTo;
                            console.log('********************', this.monthCreate);
                            console.log('???????????', this.daysConfig);
                        }
                        if (ev === 'worktype') {
                            console.log('////');
                            console.log(val);
                            console.log(val.worktype);
                            console.log(this.saveData.worktype);
                            this.saveData.worktype.value = val.worktype;
                            this.saveData.worktype.name = val.worktypename;
                            this.saveData.worktype.color = val.worktypecolor;
                            this.status = val.worktype;
                            console.log('event ******* ', this.eventcheck);
                            console.log('??????', this.eventcheck.detail);
                            console.log('??????', this.eventcheck.detail.checked);
                            this.eventcheck.detail.checked = false;
                            this.checkEvent(this.eventcheck);
                            console.log('check ********* before', this.check);
                            // this.check = false;
                            console.log('check********* after', this.check);
                            // this.getDatasCSGCreatePlan();
                        }
                        console.log(this.saveData);
                        // const navigationExtras:NavigationExtras = {
                        //   state: {name}
                        // }
                        // this.router.navigate(["csg-plan/create-plan"],navigationExtras)
                    }
                }));
                return yield popover.present();
            });
        }
        timeOTFromClick($event) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                console.log($event);
                console.log($event.detail.value);
                // this.otTo = $event.detail.value;
                this.timeOTFrom = $event.detail.value;
                // console.log(this.otTo);
                console.log(this.timeOTFrom);
                // this.timeTo = $event.detail.value;
            });
        }
        timeOTToClick($event) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                console.log($event);
                console.log($event.detail.value);
                this.timeOTTo = $event.detail.value;
            });
        }
        timeFromClick($event) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                console.log($event);
                console.log($event.detail.value);
                console.log($event.detail.value.substr('0', '2'));
                console.log($event.detail.value.substr('0', '2'));
                console.log($event.detail.value.substr('3', '4'));
                this.calTimeTo($event.detail.value);
                this.timeFrom = $event.detail.value;
            });
        }
        timeToClick($event) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                console.log($event);
                console.log($event.detail.value);
                this.timeTo = $event.detail.value;
                console.log('????', this.timeTo);
            });
        }
        calTimeTo(timeFrom) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                // let cTimeFrom = parseInt(timeFrom.substr('0','2'));
                let cTimeFrom = parseInt(timeFrom.substr('0', '2'), 10);
                let cTimeTo = timeFrom.substr('3', '4');
                if (cTimeFrom < 15) {
                    console.log('////', cTimeFrom + 9);
                    console.log('////', cTimeTo);
                    this.timeTo = `${cTimeFrom + 9}:${cTimeTo}`;
                }
                else {
                    console.log('////', cTimeFrom + 9);
                    this.timeTo = `23:${cTimeTo}`;
                }
            });
        }
        createPlan() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                // console.log("this.dataSelectDay",this.dataSelectDay);
                console.log(this.daysConfig);
                console.log(this.saveData);
                console.log('******-', this.dateAll);
                console.log('***/***-', this.dataSelectDay);
                // console.log('this.monthCreate',this.monthCreate);
                // console.log('empid', this.empId);
                // console.log('flagcount',this.flagcount);
                const dataset = [];
                for (const dataAll of this.dateAll) {
                    // console.log(dataAll);
                    dataset.push({
                        // flagdesc: s.type,
                        assigndate: dataAll.date,
                        custid: this.saveData.shop.value,
                        counterid: this.saveData.counter.value,
                        yearmonth: this.monthCreate,
                        csgid: this.empId,
                        timetype: '',
                        timefrom: '',
                        timeto: '',
                        timeotfrom: '',
                        timeotto: '',
                        worktype: '',
                    });
                }
                console.log('////', this.dataSelectDay);
                console.log('////@@@@@', dataset);
                for (const dataSelectDay of this.dataSelectDay) {
                    console.log(dataSelectDay.day);
                    if (!dataSelectDay.day) {
                        let obj = dataset.find((x) => x.assigndate === Object(_services_utils_moment_moment_service__WEBPACK_IMPORTED_MODULE_2__["moment"])(dataSelectDay.date, 'YYYY-MM-DD').format('DD/MM/YYYY'));
                        console.log(obj);
                        // console.log(dataSelectDay);
                        obj.timetype = !dataSelectDay.subTitle ? '' : dataSelectDay.subTitle;
                        obj.worktype = !dataSelectDay.worktype ? '' : dataSelectDay.worktype;
                        obj.timefrom = !dataSelectDay.timefrom ? '' : dataSelectDay.timefrom;
                        obj.timeto = !dataSelectDay.timeto ? '' : dataSelectDay.timeto;
                        obj.timeotfrom = !dataSelectDay.timeotfrom ? '' : dataSelectDay.timeotfrom;
                        obj.timeotto = !dataSelectDay.timeotto ? '' : dataSelectDay.timeotto;
                        // obj.type = dataSelectDay.type;
                    }
                    else {
                        let obj = dataset.find((x) => x.assigndate === dataSelectDay.day);
                        console.log('////', obj);
                        // console.log(dataSelectDay);
                        obj.timetype = !dataSelectDay.timetype ? '' : dataSelectDay.timetype;
                        obj.worktype = dataSelectDay.worktype;
                        obj.timefrom = dataSelectDay.timefrom;
                        obj.timeto = dataSelectDay.timeto;
                        obj.timeotfrom = dataSelectDay.timeotfrom;
                        obj.timeotto = dataSelectDay.timeotto;
                        // obj.type = dataSelectDay.type;
                    }
                }
                // }
                const body = { dataset };
                console.log(body);
                const call = yield this.api.insertCreatePlanCSGPlan(body);
                console.log(call.error_message);
                // if (call.error_message === 'SUCCESS') {
                const result = this.dataSelectDay.find(({ worktype }) => worktype === 'LE');
                console.log(result);
                let statusLEDay = 'N';
                if (result) {
                    console.log('<<<<<<<<<<<<<<<<<<มี<<<<<<');
                    statusLEDay = 'Y';
                }
                else {
                    console.log('<<<<<<<<<<<<<<<<<<ไม่มี<<<<<<');
                    statusLEDay = 'N';
                }
                this.alertSuccess(call, statusLEDay);
                // }else{
                // }
                // this.navCtrl.back();
            });
        }
        // async presentPopover(ev: any) {
        //   console.log(ev);
        //   const popover = await this.csgPlanPopover.create({
        //     component: CsgPlanPopoverComponent,
        //     event: ev,
        //     translucent: true,
        //   });
        //   popover.onDidDismiss().then(async (param: any) => {
        //     if (param.role !== 'backdrop' && param.data.dismissed) {
        //       const type = param.data.type;
        //       console.log(type);
        //       const navigationExtras: NavigationExtras = {
        //         state: { type },
        //       };
        //       this.router.navigate(['csg-plan/create-plan'], navigationExtras);
        //     }
        //   });
        //   return await popover.present();
        // }
        selectAll() {
            var e_1, _a;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                this.daysConfig = [];
                const callApiGetCsgCreatePlanDetail = yield this.api.getCsgCreatePlanDetail(this.custid, this.counterMenu, this.empId, this.monthCreate);
                console.log(callApiGetCsgCreatePlanDetail);
                const fromTimeFrom = `${this.timeFrom.substring('0', '2')}${this.timeFrom.substring('3')}`;
                const fromTimeTo = `${this.timeTo.substring('0', '2')}${this.timeTo.substring('3')}`;
                const fromTimeOTFrom = this.check === true ? `${this.timeOTFrom.substring('0', '2')}${this.timeOTFrom.substring('3')}` : '';
                const fromTimeOTTo = this.check === true ? `${this.timeOTTo.substring('0', '2')}${this.timeOTTo.substring('3')}` : '';
                if (callApiGetCsgCreatePlanDetail.datas.length !== 0) {
                    callApiGetCsgCreatePlanDetail.datas.forEach((i) => {
                        console.log(i);
                        if (i.worktype !== '') {
                            console.log(this.dayStartFromD);
                            if (Object(_services_utils_moment_moment_service__WEBPACK_IMPORTED_MODULE_2__["moment"])(i.date, 'DD/MM/YYYY').format('MM') === this.m) {
                                if (Object(_services_utils_moment_moment_service__WEBPACK_IMPORTED_MODULE_2__["moment"])(i.date, 'DD/MM/YYYY').format('DD') >= this.dayStartFromD) {
                                    this.daysConfig.push({
                                        date: Object(_services_utils_moment_moment_service__WEBPACK_IMPORTED_MODULE_2__["moment"])(i.date, 'DD/MM/YYYY').format('YYYY-MM-DD'),
                                        cssClass: this.status === 'W1' ? 'custom-calendar workday' : this.status === 'V1' ? 'custom-calendar offday' : '',
                                        // subTitle: `${this.status} ${this.check === true ? 'OT' : ''}`,
                                        subTitle: `${fromTimeFrom} ${this.check === true ? 'OT' : ''}`,
                                        timefrom: fromTimeFrom,
                                        timeto: fromTimeTo,
                                        timeotfrom: this.check === true ? fromTimeOTFrom : '',
                                        timeotto: this.check === true ? fromTimeOTTo : '',
                                        worktype: this.status,
                                    });
                                }
                                else {
                                    this.daysConfig.push({
                                        date: Object(_services_utils_moment_moment_service__WEBPACK_IMPORTED_MODULE_2__["moment"])(i.date, 'DD/MM/YYYY').format('YYYY-MM-DD'),
                                        cssClass: i.worktype === 'W1'
                                            ? 'custom-calendar workday oct'
                                            : i.worktype === 'W2'
                                                ? 'custom-calendar workholiday oct'
                                                : i.worktype === 'V1'
                                                    ? 'custom-calendar offday oct'
                                                    : i.worktype === 'LE'
                                                        ? 'custom-calendar expected-holiday oct'
                                                        : '',
                                        // subTitle: `${i.worktype} ${i.otfrom !== '' ? 'OT' : ''}`,
                                        subTitle: `${i.timefrom} ${i.otfrom !== '' ? 'OT' : ''}`,
                                        // subTitle: `${i.timefrom} ${this.check === true ? 'OT' : ''}`,
                                        timefrom: i.timefrom,
                                        timeto: i.timeto,
                                        timeotfrom: i.otfrom,
                                        timeotto: i.otto,
                                        worktype: i.worktype,
                                    });
                                }
                            }
                            else if (Object(_services_utils_moment_moment_service__WEBPACK_IMPORTED_MODULE_2__["moment"])(i.date, 'DD/MM/YYYY').format('MM') > this.m) {
                                this.daysConfig.push({
                                    date: Object(_services_utils_moment_moment_service__WEBPACK_IMPORTED_MODULE_2__["moment"])(i.date, 'DD/MM/YYYY').format('YYYY-MM-DD'),
                                    cssClass: this.status === 'W1' ? 'custom-calendar workday' : this.status === 'V1' ? 'custom-calendar offday' : '',
                                    // subTitle: `${this.status} ${this.check === true ? 'OT' : ''}`,
                                    subTitle: `${fromTimeFrom} ${this.check === true ? 'OT' : ''}`,
                                    timefrom: fromTimeFrom,
                                    timeto: fromTimeTo,
                                    timeotfrom: this.check === true ? fromTimeOTFrom : '',
                                    timeotto: this.check === true ? fromTimeOTTo : '',
                                    worktype: this.status,
                                });
                            }
                        }
                        else {
                            console.log('?????????????11111<<<<<<<<<<<<<<<<<<<<<>>>>>>>');
                            if (Object(_services_utils_moment_moment_service__WEBPACK_IMPORTED_MODULE_2__["moment"])(i.date, 'DD/MM/YYYY').format('MM') === this.m) {
                                console.log('?????????????222222<<<<<<<<<<<<<<<<<<<<<>>>>>>>');
                                if (Object(_services_utils_moment_moment_service__WEBPACK_IMPORTED_MODULE_2__["moment"])(i.date, 'DD/MM/YYYY').format('DD') >= this.dayStartFromD) {
                                    console.log('?????????????3333333<<<<<<<<<<<<<<<<<<<<<>>>>>>>');
                                    this.daysConfig.push({
                                        date: Object(_services_utils_moment_moment_service__WEBPACK_IMPORTED_MODULE_2__["moment"])(i.date, 'DD/MM/YYYY').format('YYYY-MM-DD'),
                                        cssClass: this.status === 'W1' ? 'custom-calendar workday' : this.status === 'V1' ? 'custom-calendar offday' : '',
                                        subTitle: `${fromTimeFrom} ${this.check === true ? 'OT' : ''}`,
                                        // subTitle: `${this.status} ${this.check === true ? 'OT' : ''}`,
                                        timefrom: fromTimeFrom,
                                        timeto: fromTimeTo,
                                        timeotfrom: this.check === true ? fromTimeOTFrom : '',
                                        timeotto: this.check === true ? fromTimeOTTo : '',
                                        worktype: this.status,
                                    });
                                }
                            }
                            else if (Object(_services_utils_moment_moment_service__WEBPACK_IMPORTED_MODULE_2__["moment"])(i.date, 'DD/MM/YYYY').format('MM') > this.m) {
                                this.daysConfig.push({
                                    date: Object(_services_utils_moment_moment_service__WEBPACK_IMPORTED_MODULE_2__["moment"])(i.date, 'DD/MM/YYYY').format('YYYY-MM-DD'),
                                    cssClass: this.status === 'W1' ? 'custom-calendar workday' : this.status === 'V1' ? 'custom-calendar offday' : '',
                                    // subTitle: `${this.status} ${this.check === true ? 'OT' : ''}`,
                                    subTitle: `${fromTimeFrom} ${this.check === true ? 'OT' : ''}`,
                                    timefrom: fromTimeFrom,
                                    timeto: fromTimeTo,
                                    timeotfrom: this.check === true ? fromTimeOTFrom : '',
                                    timeotto: this.check === true ? fromTimeOTTo : '',
                                    worktype: this.status,
                                });
                            }
                        }
                    });
                }
                else {
                    for (const i in this.dataHolidayAPI) {
                        if (this.dataHolidayAPI[i].month === this.m) {
                            if (this.dataHolidayAPI[i].day >= this.dayStartFromD) {
                                this.daysConfig.push({
                                    date: Object(_services_utils_moment_moment_service__WEBPACK_IMPORTED_MODULE_2__["moment"])(this.dataHolidayAPI[i].date, 'DD/MM/YYYY').format('YYYY-MM-DD'),
                                    cssClass: this.status === 'W1' ? 'custom-calendar workday' : this.status === 'V1' ? 'custom-calendar offday' : '',
                                    // subTitle: `${this.status} ${this.check === true ? 'OT' : ''}`,
                                    subTitle: `${this.timeFrom.substring('0', '2')}${this.timeFrom.substring('3')} ${this.check === true ? 'OT' : ''}`,
                                    timefrom: fromTimeFrom,
                                    timeto: fromTimeTo,
                                    timeotfrom: this.check === true ? fromTimeOTFrom : '',
                                    timeotto: this.check === true ? fromTimeOTTo : '',
                                    worktype: this.status,
                                });
                            }
                        }
                        else {
                            this.daysConfig.push({
                                // date: this.moment.formatDate(this.dataHolidayAPI[i].date, 'YYYY-MM-DD', 'th', 'DD/MM/YYYY'),
                                date: Object(_services_utils_moment_moment_service__WEBPACK_IMPORTED_MODULE_2__["moment"])(this.dataHolidayAPI[i].date, 'DD/MM/YYYY').format('YYYY-MM-DD'),
                                cssClass: this.status === 'W1' ? 'custom-calendar workday' : this.status === 'V1' ? 'custom-calendar offday' : '',
                                // subTitle: `${this.status} ${this.check === true ? 'OT' : ''}`,
                                subTitle: `${this.timeFrom.substring('0', '2')}${this.timeFrom.substring('3')} ${this.check === true ? 'OT' : ''}`,
                                timefrom: fromTimeFrom,
                                timeto: fromTimeTo,
                                timeotfrom: this.check === true ? fromTimeOTFrom : '',
                                timeotto: this.check === true ? fromTimeOTTo : '',
                                worktype: this.status,
                            });
                        }
                    }
                }
                console.log(this.daysConfig);
                console.log(this.daysConfigAll);
                console.log('this.dataHoliday', this.dataHoliday);
                this.showAllday = [];
                if (this.dataHoliday.length !== 0) {
                    try {
                        for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__asyncValues"])(this.daysConfig), _c; _c = yield _b.next(), !_c.done;) {
                            const item = _c.value;
                            this.showAllday.push(item);
                        }
                    }
                    catch (e_1_1) {
                        e_1 = { error: e_1_1 };
                    }
                    finally {
                        try {
                            if (_c && !_c.done && (_a = _b.return))
                                yield _a.call(_b);
                        }
                        finally {
                            if (e_1)
                                throw e_1.error;
                        }
                    }
                    for (const item of this.dataHoliday) {
                        const obj = this.daysConfig.find((x) => x.date === Object(_services_utils_moment_moment_service__WEBPACK_IMPORTED_MODULE_2__["moment"])(item.day, 'YYYY-MM-DD').format('YYYY-MM-DD'));
                        if (!obj) {
                            console.log(item);
                            // this.showAllday.push(item);
                            this.daysConfig.push(item);
                            // const searchIndex = this.dataSelectDay.findIndex((i) => i.day === item.day);
                        }
                    }
                }
                console.log(this.showAllday);
                console.log('>>>>>>>>>', this.daysConfig);
                // from: new Date(this.dayStartFromY, this.dayStartFromM, this.dayStartFromD),
                this.optionsMulti2 = {
                    from: new Date(this.dayStartFromY, this.dayStartFromM, this.dayStartFromD),
                    disableWeeks: this.status_plan === 'N' ? '' : this.status_plan === 'X' ? '' : [0, 1, 2, 3, 4, 5, 6],
                    monthFormat: 'ปี YYYY เดือน MMM',
                    monthPickerFormat: ['ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย.', 'ก.ค.', 'ส.ค.', 'ก.ย.', 'ต.ค.', 'พ.ย.', 'ธ.ค.'],
                    weekdays: ['อา', 'จ', 'อ', 'พ', 'พฤ', 'ศ', 'ส'],
                    weekStart: 0,
                    showToggleButtons: true,
                    showMonthPicker: true,
                    // pickMode: 'multi',
                    daysConfig: this.daysConfig,
                };
                this.dataSelectDay = [];
                for (const item of this.daysConfig) {
                    console.log(item);
                    if (item.cssClass !== 'custom-calendar holiday') {
                        const valueDay = Object(_services_utils_moment_moment_service__WEBPACK_IMPORTED_MODULE_2__["moment"])(item.date, 'YYYY-MM-DD').format('DD/MM/YYYY');
                        console.log(valueDay);
                        // console.log(item);
                        // if (valueDay ) {
                        // }
                        console.log(item.date);
                        this.dataSelectDay.push({
                            day: valueDay,
                            type: item.cssClass === 'custom-calendar workday'
                                ? 'W1'
                                : item.cssClass === 'custom-calendar workday oct'
                                    ? 'W1'
                                    : item.cssClass === 'custom-calendar offday'
                                        ? 'V1'
                                        : item.cssClass === 'custom-calendar workday-holiday'
                                            ? 'W1'
                                            : item.cssClass === 'custom-calendar offday-holiday'
                                                ? 'W2'
                                                : item.cssClass === 'custom-calendar expected-holiday'
                                                    ? 'LE'
                                                    : '',
                            timetype: item.subTitle,
                            timefrom: item.timefrom,
                            timeto: item.timeto,
                            timeotfrom: item.timeotfrom,
                            timeotto: item.timeotto,
                            worktype: item.worktype,
                        });
                    }
                    else {
                        console.log(item);
                    }
                    this.values = [];
                    for (const item2 of this.daysConfig) {
                        if (item2.subTitle && item.worktype !== '') {
                            // console.log('มี');
                            // console.log( moment(item2.date, 'YYYY-MM-DD').format('dd'));
                            this.values.push({
                                image: item2.worktype === 'W1'
                                    ? 'assets/images/csg-plan/calendar_w.png'
                                    : item2.worktype === 'W2'
                                        ? 'assets/images/csg-plan/calendar_h.png'
                                        : item2.worktype === 'V1'
                                            ? 'assets/images/csg-plan/calendar_o.png'
                                            : item2.worktype === 'LE'
                                                ? 'assets/images/csg-plan/calendar_o3.png'
                                                : '',
                                date: `${Object(_services_utils_moment_moment_service__WEBPACK_IMPORTED_MODULE_2__["moment"])(item2.date, 'YYYY-MM-DD').format('dd')} ${Object(_services_utils_moment_moment_service__WEBPACK_IMPORTED_MODULE_2__["moment"])(item2.date, 'YYYY-MM-DD').format('DD/MM/YYYY')}`,
                                value: item2.worktype === 'W1'
                                    ? 'วันทำงานปกติ'
                                    : item2.worktype === 'W2'
                                        ? 'HOLIDAY'
                                        : item2.worktype === 'V1'
                                            ? 'วันหยุดประจำสัปดาห์'
                                            : item2.worktype === 'LE'
                                                ? 'ลางาน'
                                                : '',
                                worktype: `${item2.worktype}`,
                                workfrom: item2.timefrom === '' ? '' : `${item2.timefrom.substring('0', '2')}:${item2.timefrom.substring('2')}`,
                                workto: item2.timeto === '' ? '' : `${item2.timeto.substring('0', '2')}:${item2.timeto.substring('2')}`,
                                otfrom: item2.timeotfrom === '' ? '' : `${item2.timeotfrom.substring('0', '2')}:${item2.timeotfrom.substring('2')}`,
                                otto: item2.timeotto === '' ? '' : `${item2.timeotto.substring('0', '2')}:${item2.timeotto.substring('2')}`,
                                counterid: `${this.counterid}`,
                            });
                        }
                        else {
                            console.log('ไม่มี');
                        }
                    }
                    // console.log(moment(this.values[0].date.substring(3), 'DD/MM/YYYY'));
                    // console.log(this.values[0].date.substring(3));
                    const jj = this.values.sort((b, a) => Object(_services_utils_moment_moment_service__WEBPACK_IMPORTED_MODULE_2__["moment"])(b.date.substring(3), 'DD/MM/YYYY').unix() - Object(_services_utils_moment_moment_service__WEBPACK_IMPORTED_MODULE_2__["moment"])(a.date.substring(3), 'DD/MM/YYYY').unix());
                    // console.log(jj);
                    // console.log(this.values);
                }
                console.log(this.dataSelectDay);
                console.log(this.daysConfig);
            });
        }
        reStartDays() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                // this.monthCreate = this.moment.now('YYYYMM');
                // this.monthCreate = moment().format('YYYYMM');
                // // console.log(this.monthCreate);
                const callApi = yield this.api.getHolidayCSGPlan(this.monthCreate);
                this.dataHolidayAPI = callApi.datas;
                console.log(this.dataHolidayAPI);
                this.loadDataHoliday = this.getDataHoliDay(this.dataHolidayAPI);
                // this.optionsMulti2 = {
                //   from: new Date(this.dayStartFromY, this.dayStartFromM, this.dayStartFromD),
                //   monthFormat: 'ปี YYYY เดือน MMM',
                //   monthPickerFormat: ['ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย.', 'ก.ค.', 'ส.ค.', 'ก.ย.', 'ต.ค.', 'พ.ย.', 'ธ.ค.'],
                //   weekdays: ['อา', 'จ', 'อ', 'พ', 'พฤ', 'ศ', 'ส'],
                //   weekStart: 0,
                //   showToggleButtons: true,
                //   showMonthPicker: true,
                //   // pickMode: 'multi',
                //   daysConfig: this.loadDataHoliday,
                // };
                // this.daysConfig = [];
                // this.dataSelectDay = [];
                this.getDatasCSGCreatePlan(this.monthCreate, this.custid, this.counterMenu);
            });
        }
        presentAlertConfirm() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                const alert = yield this.alertController.create({
                    cssClass: 'my-custom-class',
                    header: 'ยืนยันการสร้างแผลนหรือไม่',
                    message: 'ข้อมูลต่างๆที่ท่านแผลนไว้จะถูกบันทึกและ จะนำไปแสดงในหน้าแสดงผลด้านหน้าในทันทีหากกดยืนยัน!!',
                    buttons: [
                        {
                            text: 'ปิด',
                            role: 'cancel',
                            cssClass: 'secondary',
                            handler: (blah) => {
                                // console.log('Confirm Cancel: blah');
                            },
                        },
                        {
                            text: 'ยืนยัน',
                            handler: () => {
                                // console.log(this.dataSelectDay);
                                // console.log('Confirm Okay');
                                this.createPlan();
                            },
                        },
                    ],
                });
                yield alert.present();
            });
        }
        alertSuccess(datas, statusLEDay) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                console.log(datas);
                console.log(statusLEDay);
                // datas.error_message = 'ERROR';
                const alert = yield this.alertController.create({
                    cssClass: 'alert_success',
                    // header: 'ยืนยันการสร้างแผลนหรือไม่',
                    message: `<img src="${datas.error_message === 'SUCCESS'
                        ? `../../../../assets/images/csg-plan/success.svg " alt="g-maps" style="border-radius: 2px"> <br> บันทึกการสร้างสำเร็จ <br> ${statusLEDay === 'Y'
                            ? `<div class="card-alert alert alert-danger mb-0">*เนื่องจากท่านมีการใช้ "ลางาน" กรุณา สร้าง ใบลา เข้า ระบบ WorkFlow</div>`
                            : ''}`
                        : '../../../../assets/images/csg-plan/error.png " alt="g-maps" style="border-radius: 2px"> <br> บันทึกการสร้างไม่สำเร็จ'}`,
                    buttons: [
                    // {
                    //   text: 'ปิด',
                    //   role: 'cancel',
                    //   cssClass: 'secondary',
                    //   handler: (blah) => {
                    //     this.navCtrl.back();
                    //     // console.log('Confirm Cancel: blah');
                    //   },
                    // },
                    //   {
                    //     text: 'ยืนยัน',
                    //     handler: () => {
                    //       // console.log(this.dataSelectDay);
                    //       // console.log('Confirm Okay');
                    //       this.createPlan();
                    //     },
                    //   },
                    ],
                });
                yield alert.present();
                setTimeout(() => {
                    alert.dismiss();
                    const navigationExtras = {
                        state: { monthFromCreate: this.monthCreate },
                    };
                    // this.navCtrl.navigateBack(['csg-plan'], navigationExtras);
                    this.navCtrl.navigateBack(['csg-plan'], navigationExtras);
                    // this.navCtrl.back();
                    // const navigationExtras: NavigationExtras = {
                    //   state: {name: 'trebtreb'}
                    // };
                    // this.navCtrl.navigateBack(['csg-plan'], navigationExtras);
                    // this.router.navigate(['csg-plan']);
                }, 4000);
            });
        }
        back() {
            // const navigationExtras: NavigationExtras = {
            //   state: {monthFromCreate: this.monthCreate}
            // };
            // localStorage.setItem('monthBack', this.monthCreate);
            // this.navCtrl.navigateBack(['csg-plan']);
            const navigationExtras = {
                state: { monthFromCreate: this.paramsMonthBefore.monthToCreate },
            };
            // console.log(this.monthCreate);
            this.router.navigate(['csg-plan'], navigationExtras);
            // this.router.navigate(['csg-plan']);
        }
    }
    CreatePlanPage.ɵfac = function CreatePlanPage_Factory(t) { return new (t || CreatePlanPage)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_api_csg_plan_csg_plan_service__WEBPACK_IMPORTED_MODULE_5__["CsgPlanService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_7__["PopoverController"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavController"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_7__["PopoverController"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_utils_loading_loading_service__WEBPACK_IMPORTED_MODULE_8__["LoadingService"])); };
    CreatePlanPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: CreatePlanPage, selectors: [["app-create-plan"]], decls: 37, vars: 11, consts: [[1, "ion-no-border"], ["slot", "start"], ["fullscreen", "true"], [1, "text-topic"], [1, "border-radius-25", 2, "color", "darkgray !important"], ["color", "white", 3, "click"], [2, "float", "right"], ["style", "color: darkgray", 4, "ngIf"], [1, "border-radius-25"], [1, "text-topic", "mt-10"], ["id", "sss", 1, "border-radius-25"], ["style", "float: right", 4, "ngIf"], ["class", "text-topic mt-10", 4, "ngIf"], ["style", "background-color: #fff0;border-radius: 25px;", 4, "ngIf"], [4, "ngIf"], ["style", "background-color: #fff0; border-radius: 25px;", 4, "ngIf"], [2, "height", "10px"], ["style", "height: 400px", 4, "ngIf"], [2, "color", "darkgray"], [2, "margin-left", "10px"], [2, "background-color", "#fff0", "border-radius", "25px"], ["color", "white"], ["displayFormat", "HH:mm", "minuteValues", "0,15,30,45", 3, "value", "ionChange"], ["displayFormat", "HH:mm", "minuteValues", "0,15,30,45", 3, "value", "min", "ionChange"], ["slot", "start", 3, "checked", "disabled", "ionChange"], ["displayFormat", "HH:mm", "minuteValues", "0,15,30,45", 3, "min", "value", "ionChange"], [2, "height", "400px"], [2, "background-color", "white", "position", "relative", "z-index", "99999", "display", "flex", "width", "93%", "margin-left", "15px"], ["color", "primary", 3, "disabled", "click", 4, "ngIf"], ["color", "light", "style", "margin: auto; margin-right: 0px;width: 15%;", 3, "disabled", "click", 4, "ngIf"], [1, "calendar", "calendar-create-plan"], [3, "ngModel", "type", "options", "format", "ngModelChange", "monthChange", "change", 4, "ngIf"], [1, "card-list"], ["lines", "none"], [4, "ngFor", "ngForOf"], ["color", "primary", 3, "disabled", "click"], ["color", "light", 2, "margin", "auto", "margin-right", "0px", "width", "15%", 3, "disabled", "click"], ["src", "../../../../assets/images/csg-plan/refresh-button.png", "alt", "", 2, "width", "40px"], [2, "margin-left", "3px", "color", "#d61c4b", "font-size", "large"], [2, "margin-left", "3px", "color", "#ff4500", "font-size", "large"], [3, "ngModel", "type", "options", "format", "ngModelChange", "monthChange", "change"], [3, "src"], [1, "label"], [1, "textRight"], ["class", "label", 4, "ngIf"], [2, "text-align", "center"], ["style", "margin-left: 5px;", 3, "click", 4, "ngIf"], [2, "margin-left", "5px", 3, "click"], ["name", "checkmark-circle-outline", 2, "color", "#08a838"]], template: function CreatePlanPage_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-header", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "ion-toolbar");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "ion-buttons", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "ion-back-button");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "ion-title");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E41\u0E1E\u0E25\u0E19\u0E07\u0E32\u0E19");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "ion-content", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E23\u0E49\u0E32\u0E19\u0E04\u0E49\u0E32-\u0E40\u0E04\u0E32\u0E19\u0E4C\u0E40\u0E15\u0E2D\u0E23\u0E4C");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "ion-card", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "ion-item", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CreatePlanPage_Template_ion_item_click_10_listener() { return ctx.popoverShopMenu("shop"); });
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "ion-label");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, " \u0E23\u0E49\u0E32\u0E19\u0E04\u0E49\u0E32 ");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "span", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, CreatePlanPage_span_14_Template, 2, 0, "span", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "ion-card", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "ion-item", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CreatePlanPage_Template_ion_item_click_17_listener() { return ctx.popoverShopMenu("counter"); });
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "ion-label");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, " \u0E40\u0E04\u0E32\u0E19\u0E4C\u0E40\u0E15\u0E2D\u0E23\u0E4C ");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "span", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](21, CreatePlanPage_span_21_Template, 2, 0, "span", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48\u0E08\u0E30\u0E43\u0E0A\u0E49");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "ion-card", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "ion-item", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CreatePlanPage_Template_ion_item_click_26_listener() { return ctx.popoverShopMenu("worktype"); });
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "ion-label");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, " \u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48\u0E40\u0E25\u0E37\u0E2D\u0E01 ");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](29, CreatePlanPage_span_29_Template, 4, 4, "span", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](30, CreatePlanPage_div_30_Template, 2, 0, "div", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](31, CreatePlanPage_ion_card_31_Template, 12, 3, "ion-card", 13);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](32, CreatePlanPage_ion_item_32_Template, 4, 2, "ion-item", 14);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](33, CreatePlanPage_ion_card_33_Template, 12, 4, "ion-card", 15);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](34, "div", 16);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](35, CreatePlanPage_div_35_Template, 11, 6, "div", 17);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](36, CreatePlanPage_ion_footer_36_Template, 3, 1, "ion-footer", 14);
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](14);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.saveData.shop.name);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.saveData.shop.name, " ");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.saveData.counter.name);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.saveData.counter.name, " ");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.saveData.worktype.value);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.saveData.worktype.value !== "V1" && ctx.saveData.worktype.value !== "LE");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.saveData.worktype.value !== "V1" && ctx.saveData.worktype.value !== "LE");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.saveData.worktype.value !== "V1" && ctx.saveData.worktype.value !== "LE");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.check === true && ctx.saveData.worktype.value !== "V1" && ctx.check === true && ctx.saveData.worktype.value !== "LE");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.saveData.shop.value !== null && ctx.saveData.counter.value !== null);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.saveData.shop.value && ctx.saveData.counter.value && ctx.timeFrom && ctx.timeTo !== null && ctx.dataSelectDay.length !== 0 && (ctx.status_plan === "N" || ctx.status_plan === "X"));
            }
        }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonCard"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonLabel"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonCol"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonDatetime"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["SelectValueAccessor"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonCheckbox"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["BooleanValueAccessor"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonList"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonButton"], ion2_calendar__WEBPACK_IMPORTED_MODULE_10__["CalendarComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgModel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonItemSliding"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonThumbnail"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonFooter"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonIcon"]], styles: [".imgSave[_ngcontent-%COMP%] {\n  max-width: 20px;\n}\n\n.imgCancel[_ngcontent-%COMP%] {\n  max-width: 20px;\n}\n\n.item-native[_ngcontent-%COMP%] {\n  background-color: white !important;\n}\n\n  .days-btn.next-month-day {\n  opacity: 0 !important;\n}\n\n  .days-btn.last-month-day {\n  opacity: 0 !important;\n}\n\n.calendar[_ngcontent-%COMP%] {\n  margin: 8px;\n  padding: 8px;\n  border-radius: 8px;\n  z-index: 999;\n  margin-bottom: -10px;\n}\n\nion-header[_ngcontent-%COMP%] {\n  --ion-background-color: #ffffff;\n}\n\nion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%] {\n  --border-color: transparent;\n  --border-style: none !important;\n}\n\nion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   ion-title[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 600;\n}\n\nion-content[_ngcontent-%COMP%] {\n  --ion-background-color: #f5f5f5;\n}\n\nion-content[_ngcontent-%COMP%]   .card-list[_ngcontent-%COMP%] {\n  margin: 8px;\n  padding: 8px;\n}\n\nion-content[_ngcontent-%COMP%]   .card-list[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%] {\n  --background: #ffffff;\n  --highlight-color-focused: transparent;\n  border-radius: 10px;\n  margin-bottom: 6px;\n  box-shadow: 0 1.2em 1.5em -0.9em #eeeeee;\n}\n\nion-content[_ngcontent-%COMP%]   .card-list[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-thumbnail[_ngcontent-%COMP%] {\n  --border-radius: 4px;\n  padding: 8px;\n}\n\nion-content[_ngcontent-%COMP%]   .card-list[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\nion-content[_ngcontent-%COMP%]   .card-list[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   p.label[_ngcontent-%COMP%] {\n  color: #111111;\n  font-size: 0.9rem;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: normal;\n  margin: 4px 0;\n}\n\nion-content[_ngcontent-%COMP%]   .card-list[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   p.price[_ngcontent-%COMP%] {\n  color: #111111;\n  font-size: 0.8rem;\n  font-weight: 600;\n  margin: 4px 0;\n}\n\nion-content[_ngcontent-%COMP%]   .card-list[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   p.price[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: red;\n  font-size: 1rem;\n}\n\nion-content[_ngcontent-%COMP%]   .card-list[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   p.ot[_ngcontent-%COMP%] {\n  text-align: right;\n}\n\nion-content[_ngcontent-%COMP%]   .textRight[_ngcontent-%COMP%] {\n  float: right;\n}\n\nion-content[_ngcontent-%COMP%]   ion-thumbnail[_ngcontent-%COMP%] {\n  margin-top: 0px;\n}\n\n.popover-content.sc-ion-popover-md[_ngcontent-%COMP%] {\n  top: 0px !important;\n}\n\n.border-radius-25[_ngcontent-%COMP%] {\n  border-radius: 25px;\n}\n\nhr.dashed[_ngcontent-%COMP%] {\n  border-top: 3px dashed #bbb;\n}\n\n.text-topic[_ngcontent-%COMP%] {\n  margin-left: 15px;\n  margin-right: 10px;\n  margin-bottom: -3px;\n  border-bottom: 2px solid #0000004a;\n}\n\n.mt-10[_ngcontent-%COMP%] {\n  margin-top: 25px;\n}\n\nion-checkbox[_ngcontent-%COMP%] {\n  --size: 25px;\n  --background-checked: #2c46bd;\n}\n\nion-checkbox[_ngcontent-%COMP%]::part(container) {\n  border-radius: 6px;\n  border: 2px solid #2c46bd;\n}\n\n.ion-color-white[_ngcontent-%COMP%] {\n  --ion-color-base: var(--ion-color-white, #fff) !important;\n  --ion-color-base-rgb: var(--ion-color-white-rgb, 61, 194, 255) !important;\n  --ion-color-contrast: var(--ion-color-white-contrast, rgb(1, 1, 1)) !important;\n  --ion-color-contrast-rgb: var(--ion-color-white-contrast-rgb, 255, 255, 255) !important;\n  --ion-color-shade: var(--ion-color-white-shade, #36abe0) !important;\n  --ion-color-tint: var(--ion-color-white-tint, #50c8ff) !important;\n  border-radius: 25px;\n}"] });
    return CreatePlanPage;
})();


/***/ }),

/***/ "DCyZ":
/*!******************************************************************!*\
  !*** ./src/app/pages/csg-plan/create-plan/create-plan.module.ts ***!
  \******************************************************************/
/*! exports provided: CreatePlanPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatePlanPageModule", function() { return CreatePlanPageModule; });
/* harmony import */ var ion2_calendar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ion2-calendar */ "zTSL");
/* harmony import */ var ion2_calendar__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ion2_calendar__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _create_plan_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create-plan.page */ "DC7O");
/* harmony import */ var _create_plan_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./create-plan-routing.module */ "GgAE");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");







let CreatePlanPageModule = /*@__PURE__*/ (() => {
    class CreatePlanPageModule {
    }
    CreatePlanPageModule.ɵfac = function CreatePlanPageModule_Factory(t) { return new (t || CreatePlanPageModule)(); };
    CreatePlanPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: CreatePlanPageModule });
    CreatePlanPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _create_plan_routing_module__WEBPACK_IMPORTED_MODULE_3__["CreatePlanPageRoutingModule"], ion2_calendar__WEBPACK_IMPORTED_MODULE_0__["CalendarModule"]]] });
    return CreatePlanPageModule;
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](CreatePlanPageModule, { declarations: [_create_plan_page__WEBPACK_IMPORTED_MODULE_2__["CreatePlanPage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _create_plan_routing_module__WEBPACK_IMPORTED_MODULE_3__["CreatePlanPageRoutingModule"], ion2_calendar__WEBPACK_IMPORTED_MODULE_0__["CalendarModule"]] }); })();


/***/ }),

/***/ "GgAE":
/*!**************************************************************************!*\
  !*** ./src/app/pages/csg-plan/create-plan/create-plan-routing.module.ts ***!
  \**************************************************************************/
/*! exports provided: CreatePlanPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatePlanPageRoutingModule", function() { return CreatePlanPageRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _create_plan_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-plan.page */ "DC7O");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    {
        path: '',
        component: _create_plan_page__WEBPACK_IMPORTED_MODULE_1__["CreatePlanPage"]
    }
];
let CreatePlanPageRoutingModule = /*@__PURE__*/ (() => {
    class CreatePlanPageRoutingModule {
    }
    CreatePlanPageRoutingModule.ɵfac = function CreatePlanPageRoutingModule_Factory(t) { return new (t || CreatePlanPageRoutingModule)(); };
    CreatePlanPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: CreatePlanPageRoutingModule });
    CreatePlanPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
    return CreatePlanPageRoutingModule;
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](CreatePlanPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ })

}]);