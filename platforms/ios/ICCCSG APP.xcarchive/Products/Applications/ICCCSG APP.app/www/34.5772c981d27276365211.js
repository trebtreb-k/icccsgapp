(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[34],{

/***/ "J2LB":
/*!***********************************************************************!*\
  !*** ./src/app/pages/pdpa-privacy-notify/pdpa-privacy-notify.page.ts ***!
  \***********************************************************************/
/*! exports provided: PdpaPrivacyNotifyPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PdpaPrivacyNotifyPage", function() { return PdpaPrivacyNotifyPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_api_pdpa_pdpa_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/api/pdpa/pdpa.service */ "TTzW");
/* harmony import */ var _services_storage_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/storage/storage.service */ "E2f4");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "m/P+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");









function PdpaPrivacyNotifyPage_div_7_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
}
function PdpaPrivacyNotifyPage_div_8_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
}
function PdpaPrivacyNotifyPage_div_9_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
}
function PdpaPrivacyNotifyPage_ion_list_10_div_6_Template(rf, ctx) {
    if (rf & 1) {
        const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PdpaPrivacyNotifyPage_ion_list_10_div_6_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r9.viewPolicy(ctx_r9.privacy_notice_url); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", ctx_r6.privacy_notice_title, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
    }
}
function PdpaPrivacyNotifyPage_ion_list_10_ion_list_7_ion_item_1_Template(rf, ctx) {
    if (rf & 1) {
        const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-checkbox", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function PdpaPrivacyNotifyPage_ion_list_10_ion_list_7_ion_item_1_Template_ion_checkbox_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15); const data_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit; return data_r5.isItemChecked = $event; })("ionChange", function PdpaPrivacyNotifyPage_ion_list_10_ion_list_7_ion_item_1_Template_ion_checkbox_ionChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15); const data_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r16.checkConsent($event, data_r5); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "ion-label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const data_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", data_r5.isItemChecked);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", data_r5.consent_caption, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
    }
}
function PdpaPrivacyNotifyPage_ion_list_10_ion_list_7_ion_grid_2_Template(rf, ctx) {
    if (rf & 1) {
        const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-grid");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-col", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-checkbox", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function PdpaPrivacyNotifyPage_ion_list_10_ion_list_7_ion_grid_2_Template_ion_checkbox_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r21); const data_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit; return data_r5.isItemChecked = $event; })("ionChange", function PdpaPrivacyNotifyPage_ion_list_10_ion_list_7_ion_grid_2_Template_ion_checkbox_ionChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r21); const data_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit; const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r22.checkConsent($event, data_r5); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-label", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "\u0E22\u0E34\u0E19\u0E22\u0E2D\u0E21");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ion-col", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ion-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ion-checkbox", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function PdpaPrivacyNotifyPage_ion_list_10_ion_list_7_ion_grid_2_Template_ion_checkbox_ngModelChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r21); const data_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit; return data_r5.isItemNotChecked = $event; })("ionChange", function PdpaPrivacyNotifyPage_ion_list_10_ion_list_7_ion_grid_2_Template_ion_checkbox_ionChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r21); const data_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit; const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r26.checkConsentNot($event, data_r5); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ion-label", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "\u0E44\u0E21\u0E48\u0E22\u0E34\u0E19\u0E22\u0E2D\u0E21");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const data_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", data_r5.isItemChecked);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", data_r5.isItemNotChecked);
    }
}
function PdpaPrivacyNotifyPage_ion_list_10_ion_list_7_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, PdpaPrivacyNotifyPage_ion_list_10_ion_list_7_ion_item_1_Template, 3, 2, "ion-item", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, PdpaPrivacyNotifyPage_ion_list_10_ion_list_7_ion_grid_2_Template, 12, 2, "ion-grid", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const data_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", data_r5.type !== "CONSENT");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", data_r5.type === "CONSENT");
    }
}
function PdpaPrivacyNotifyPage_ion_list_10_ion_note_8_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-note", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const data_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r5.disagree_message);
    }
}
function PdpaPrivacyNotifyPage_ion_list_10_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-list", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-card", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-card-header", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "ion-card-title", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, PdpaPrivacyNotifyPage_ion_list_10_div_6_Template, 3, 1, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, PdpaPrivacyNotifyPage_ion_list_10_ion_list_7_Template, 3, 2, "ion-list", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, PdpaPrivacyNotifyPage_ion_list_10_ion_note_8_Template, 2, 1, "ion-note", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const data_r5 = ctx.$implicit;
        const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", data_r5.privacy_title, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", data_r5.privacy_content_thai, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", data_r5.type !== "CONSENT" && ctx_r3.privacy_notice_url !== "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", data_r5.show_checkbox_flag === "Y");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", data_r5.disagree_message);
    }
}
function PdpaPrivacyNotifyPage_ion_card_11_Template(rf, ctx) {
    if (rf & 1) {
        const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-card", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-checkbox", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function PdpaPrivacyNotifyPage_ion_card_11_Template_ion_checkbox_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r32); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r31.isItemCheckedAll = $event; })("ionChange", function PdpaPrivacyNotifyPage_ion_card_11_Template_ion_checkbox_ionChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r32); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r33.checkConsentAll($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-label", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\u0E22\u0E34\u0E19\u0E22\u0E2D\u0E21\u0E40\u0E07\u0E37\u0E48\u0E2D\u0E19\u0E44\u0E02\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r4.isItemCheckedAll);
    }
}
let PdpaPrivacyNotifyPage = /*@__PURE__*/ (() => {
    class PdpaPrivacyNotifyPage {
        constructor(pdpaApi, storage, router, iab) {
            this.pdpaApi = pdpaApi;
            this.storage = storage;
            this.router = router;
            this.iab = iab;
            this.buttonDisabled = true;
            this.showCheckAll = false;
            this.isItemCheckedAll = false;
            this.enableItemCheckedAll = true;
            this.canLeave = false;
            this.datas = [];
            this.title = '';
            this.type = '';
            this.button_label = '';
            this.check_agree_flag = '';
            this.privacy_notice_url = '';
            this.privacy_notice_title = '';
        }
        ngOnInit() {
        }
        ionViewDidEnter() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                this.loadPrivacyWaitAgree();
            });
        }
        doRefresh(refresher) {
            setTimeout(() => {
                this.loadPrivacyWaitAgree();
                refresher.target.complete();
            }, 2000);
        }
        /***************** pdpa ******************/
        loadPrivacyWaitAgree() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                console.log('loadPrivacyWaitAgree');
                try {
                    this.datas = [];
                    let response = yield this.pdpaApi.privacyWaitAgree();
                    if (response.result) {
                        console.log(response);
                        if (response.datas.length > 0) {
                            this.title = response.topic;
                            this.type = response.type;
                            this.button_label = (!response.button_label) ? 'ยอมรับเงื่อนไข' : response.button_label;
                            this.check_agree_flag = (!response.check_agree_flag) ? 'N' : response.check_agree_flag;
                            this.privacy_notice_url = response.privacy_notice_url;
                            this.privacy_notice_title = response.privacy_notice_title;
                            let checkedCount = 0;
                            this.datas = [];
                            let i = 0;
                            response.datas.forEach((data) => {
                                // data.show_checkbox_flag ='N';
                                // data.consent_flag       ='N';
                                i++;
                                //if(i==1){
                                this.datas.push({
                                    system_id: data.system_id,
                                    sub_system_id: data.sub_system_id,
                                    privacy_id: data.privacy_id,
                                    version_no: data.version_no,
                                    consent_flag: data.consent_flag,
                                    consent_caption: (data.consent_caption == '') ? 'ยินยอม' : data.consent_caption,
                                    privacy_content_thai: data.privacy_content_thai,
                                    privacy_content_eng: data.privacy_content_eng,
                                    privacy_title: data.privacy_title,
                                    privacy_version_name: data.privacy_version_name,
                                    version_date: data.version_date,
                                    active_flag: data.active_flag,
                                    isItemChecked: (data.consent_flag == 'Y') ? true : false,
                                    show_checkbox_flag: data.show_checkbox_flag,
                                    type: data.type,
                                    disagree_message: data.disagree_message,
                                });
                                if (data.consent_flag == 'Y') {
                                    checkedCount++;
                                }
                                else if (data.show_checkbox_flag == 'N') {
                                    // checkedCount++;
                                }
                                //}
                            });
                            console.log('checkedCount', checkedCount + ' ' + this.datas.length);
                            this.showCheckAll = (this.datas.length > 1) || (this.datas.length == 1 && this.datas[0].show_checkbox_flag == 'N');
                            if (checkedCount == this.datas.length) {
                                this.buttonDisabled = false;
                                this.isItemCheckedAll = true;
                            }
                            else {
                                this.buttonDisabled = true;
                                this.isItemCheckedAll = false;
                            }
                        }
                    }
                }
                catch (error) {
                    console.log(error);
                    // alert(error);
                }
            });
        }
        /***************** pdpa ******************/
        agreePrivacyPolicy() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                const token = yield this.storage.get('USER_TOKEN');
                const user = yield this.storage.get('USER_INFO');
                const datas_post = {
                    datas: [],
                };
                this.datas.forEach((data) => {
                    if (data.show_checkbox_flag == 'Y') {
                        data.consent_flag = (data.isItemChecked) ? 'Y' : 'N';
                    }
                    else {
                        data.consent_flag = 'Y';
                    }
                    datas_post.datas.push({
                        user_id: user.emp_id,
                        system_id: data.system_id,
                        sub_system_id: data.sub_system_id,
                        privacy_id: data.privacy_id,
                        version_no: data.version_no,
                        consent_flag: data.consent_flag,
                    });
                });
                console.log(datas_post);
                try {
                    const response = yield this.pdpaApi.updateAgreeConsent(datas_post);
                    console.log(response);
                    if (response.result) {
                        this.canLeave = true;
                        this.router.navigate(['/home', { replaceUrl: true }]);
                        return true;
                    }
                    else {
                        console.log('invalid');
                    }
                }
                catch (error) {
                    console.log(error);
                }
            });
        }
        logScrollEnd(event) {
            // console.log("logScrollEnd : When Scroll Ends", event);
            // this.buttonDisabled = false;
        }
        checkConsent(e, item) {
            console.log('checkConsent', e.target.checked);
            //  console.log(this.datas);
            if (item.type === 'CONSENT') {
                item.isItemNotChecked = !e.target.checked;
            }
            let checkedCount = 0;
            let checkedCountAgree = 0;
            this.datas.forEach((data) => {
                if (item.type !== 'CONSENT') {
                    if (data.isItemChecked) {
                        checkedCount++;
                    }
                }
                else {
                    if (data.isItemChecked || data.isItemNotChecked) {
                        checkedCount++;
                    }
                    if (data.isItemChecked) {
                        checkedCountAgree++;
                    }
                }
            });
            console.log(checkedCount + ' ' + this.datas.length);
            this.enableItemCheckedAll = false;
            if (this.check_agree_flag == 'N') {
                if (checkedCount == this.datas.length) {
                    this.buttonDisabled = false;
                    // this.isItemCheckedAll = true;
                }
                else {
                    this.buttonDisabled = true;
                    // this.isItemCheckedAll = false;
                }
            }
            else {
                if (checkedCountAgree == this.datas.length) {
                    this.buttonDisabled = false;
                }
                else {
                    this.buttonDisabled = true;
                }
            }
            console.log('this.buttonDisabled=>>', this.buttonDisabled);
            this.isItemCheckedAll = (checkedCountAgree === checkedCount);
            setTimeout(() => {
                this.enableItemCheckedAll = true;
            }, 500);
        }
        checkConsentNot(e, item) {
            console.log('not checkConsent', e);
            console.log('not checkConsent', e.target.checked);
            item.isItemChecked = !e.target.checked;
            let checkedCount = 0;
            let checkedCountAgree = 0;
            this.datas.forEach((data) => {
                if (data.isItemChecked || data.isItemNotChecked) {
                    checkedCount++;
                }
                if (data.isItemChecked) {
                    checkedCountAgree++;
                }
            });
            console.log(checkedCount + ' ' + this.datas.length);
            this.enableItemCheckedAll = false;
            if (this.check_agree_flag == 'N') {
                if (checkedCount == this.datas.length) {
                    this.buttonDisabled = false;
                }
                else {
                    this.buttonDisabled = true;
                }
            }
            else {
                if (checkedCountAgree == this.datas.length) {
                    this.buttonDisabled = false;
                }
                else {
                    this.buttonDisabled = true;
                }
            }
            console.log('this.buttonDisabled=>', this.buttonDisabled);
            this.isItemCheckedAll = (checkedCountAgree === checkedCount);
            setTimeout(() => {
                this.enableItemCheckedAll = true;
            }, 500);
        }
        checkConsentAll(e) {
            console.log('this.enableItemCheckedAll=', this.enableItemCheckedAll);
            if (this.enableItemCheckedAll == false) {
                return;
            }
            console.log('change', e);
            console.log('checkConsentAll', e.target.checked);
            // console.log(this.datas);
            this.datas.forEach((data) => {
                data.isItemChecked = e.target.checked;
            });
            let checkedCount = 0;
            this.datas.forEach((data) => {
                if (data.isItemChecked) {
                    checkedCount++;
                }
            });
            /*
            console.log(checkedCount+' '+this.datas.length);
            if(checkedCount==this.datas.length){
                this.buttonDisabled = false;
            }else{
                this.buttonDisabled = true;
            }
            */
        }
        viewPolicy(url) {
            const browser = this.iab.create(url, '_system');
            browser.show();
        }
    }
    PdpaPrivacyNotifyPage.ɵfac = function PdpaPrivacyNotifyPage_Factory(t) { return new (t || PdpaPrivacyNotifyPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_api_pdpa_pdpa_service__WEBPACK_IMPORTED_MODULE_2__["PdpaService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_5__["InAppBrowser"])); };
    PdpaPrivacyNotifyPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PdpaPrivacyNotifyPage, selectors: [["app-pdpa-privacy-notify"]], decls: 20, vars: 9, consts: [[3, "scrollEvents", "ionScrollEnd"], ["slot", "fixed", 3, "ionRefresh"], ["pullingIcon", "arrow-dropdown", "refreshingSpinner", "circles"], ["style", "text-align:center; margin-top:10px", 4, "ngIf"], ["class", "data-list", 4, "ngFor", "ngForOf"], ["style", "margin-top:0px", 4, "ngIf"], [1, "footer-button-border"], [1, "footer-button", 2, "text-align", "center", "padding-left", "10px", "padding-right", "10px"], ["color", "primary", "expand", "full", "shape", "round", 2, "height", "50px", 3, "disabled", "click"], ["src", "assets/images/png/checked-green-64.png", 2, "width", "28px"], [2, "text-align", "center", "margin-top", "10px"], ["src", "assets/images/png/privacy.png", 2, "width", "50px"], ["src", "assets/images/png/contract.png", 2, "width", "50px"], ["src", "assets/images/png/consent.png", 2, "width", "50px"], [1, "data-list"], [2, "margin-top", "-5px"], [2, "background-color", "#ffffff"], [3, "innerHTML"], ["style", "text-align:center", 3, "click", 4, "ngIf"], [4, "ngIf"], ["style", "--color:#ff0000", 4, "ngIf"], [2, "text-align", "center", 3, "click"], ["src", "assets/images/png/pdf.png", 2, "width", "50px"], ["color", "primary", 3, "ngModel", "ngModelChange", "ionChange"], [1, "ion-text-wrap", 2, "margin-left", "5px", 3, "innerHTML"], ["size", "6"], [1, "ion-text-wrap", 2, "margin-left", "5px"], [2, "--color", "#ff0000"], [2, "margin-top", "0px"], [1, "ion-text-wrap", 2, "margin-left", "5px", "font-size", "1.2rem"]], template: function PdpaPrivacyNotifyPage_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-toolbar");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-title");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-content", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionScrollEnd", function PdpaPrivacyNotifyPage_Template_ion_content_ionScrollEnd_4_listener($event) { return ctx.logScrollEnd($event); });
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-refresher", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionRefresh", function PdpaPrivacyNotifyPage_Template_ion_refresher_ionRefresh_5_listener($event) { return ctx.doRefresh($event); });
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "ion-refresher-content", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, PdpaPrivacyNotifyPage_div_7_Template, 2, 0, "div", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, PdpaPrivacyNotifyPage_div_8_Template, 2, 0, "div", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, PdpaPrivacyNotifyPage_div_9_Template, 2, 0, "div", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, PdpaPrivacyNotifyPage_ion_list_10_Template, 9, 5, "ion-list", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, PdpaPrivacyNotifyPage_ion_card_11_Template, 6, 1, "ion-card", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "ion-toolbar");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "ion-button", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PdpaPrivacyNotifyPage_Template_ion_button_click_15_listener() { return ctx.agreePrivacyPolicy(); });
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "img", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "br");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.title);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("scrollEvents", true);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.type === "PRIVACY");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.type === "CONTRACT");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.type === "CONSENT");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.datas);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showCheckAll === true);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("disabled", ctx.buttonDisabled);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\u00A0\u00A0", ctx.button_label, "\u00A0");
            }
        }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonRefresher"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonRefresherContent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonList"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonCard"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonCardHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonCardTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonCardContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonCheckbox"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["BooleanValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonGrid"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonCol"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonNote"]], styles: ["ion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%] {\n  --background: #ffafa9;\n  --ion-text-color: #ffffff;\n}\n\nion-footer[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  width: 40px;\n}\n\nion-footer[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n}\n\nion-button[_ngcontent-%COMP%] {\n  --background: #f7928b !important;\n}"] });
    return PdpaPrivacyNotifyPage;
})();


/***/ }),

/***/ "Qsp6":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/pdpa-privacy-notify/pdpa-privacy-notify-routing.module.ts ***!
  \*********************************************************************************/
/*! exports provided: PdpaPrivacyNotifyPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PdpaPrivacyNotifyPageRoutingModule", function() { return PdpaPrivacyNotifyPageRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _pdpa_privacy_notify_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pdpa-privacy-notify.page */ "J2LB");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    {
        path: '',
        component: _pdpa_privacy_notify_page__WEBPACK_IMPORTED_MODULE_1__["PdpaPrivacyNotifyPage"]
    }
];
let PdpaPrivacyNotifyPageRoutingModule = /*@__PURE__*/ (() => {
    class PdpaPrivacyNotifyPageRoutingModule {
    }
    PdpaPrivacyNotifyPageRoutingModule.ɵfac = function PdpaPrivacyNotifyPageRoutingModule_Factory(t) { return new (t || PdpaPrivacyNotifyPageRoutingModule)(); };
    PdpaPrivacyNotifyPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: PdpaPrivacyNotifyPageRoutingModule });
    PdpaPrivacyNotifyPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
    return PdpaPrivacyNotifyPageRoutingModule;
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](PdpaPrivacyNotifyPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "hEyS":
/*!*************************************************************************!*\
  !*** ./src/app/pages/pdpa-privacy-notify/pdpa-privacy-notify.module.ts ***!
  \*************************************************************************/
/*! exports provided: PdpaPrivacyNotifyPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PdpaPrivacyNotifyPageModule", function() { return PdpaPrivacyNotifyPageModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _pdpa_privacy_notify_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pdpa-privacy-notify-routing.module */ "Qsp6");
/* harmony import */ var _pdpa_privacy_notify_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pdpa-privacy-notify.page */ "J2LB");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");






let PdpaPrivacyNotifyPageModule = /*@__PURE__*/ (() => {
    class PdpaPrivacyNotifyPageModule {
    }
    PdpaPrivacyNotifyPageModule.ɵfac = function PdpaPrivacyNotifyPageModule_Factory(t) { return new (t || PdpaPrivacyNotifyPageModule)(); };
    PdpaPrivacyNotifyPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: PdpaPrivacyNotifyPageModule });
    PdpaPrivacyNotifyPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
                _pdpa_privacy_notify_routing_module__WEBPACK_IMPORTED_MODULE_3__["PdpaPrivacyNotifyPageRoutingModule"]
            ]] });
    return PdpaPrivacyNotifyPageModule;
})();
(function () {
    (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](PdpaPrivacyNotifyPageModule, { declarations: [_pdpa_privacy_notify_page__WEBPACK_IMPORTED_MODULE_4__["PdpaPrivacyNotifyPage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
            _pdpa_privacy_notify_routing_module__WEBPACK_IMPORTED_MODULE_3__["PdpaPrivacyNotifyPageRoutingModule"]] });
})();


/***/ })

}]);