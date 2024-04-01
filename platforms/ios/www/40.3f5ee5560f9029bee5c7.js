(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[40],{

/***/ "450w":
/*!**************************************************************************!*\
  !*** ./src/app/pages/workflow/create-workflow/create-workflow.module.ts ***!
  \**************************************************************************/
/*! exports provided: CreateWorkflowPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateWorkflowPageModule", function() { return CreateWorkflowPageModule; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _create_workflow_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create-workflow.page */ "K91y");
/* harmony import */ var _create_workflow_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./create-workflow-routing.module */ "YJN9");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");






let CreateWorkflowPageModule = /*@__PURE__*/ (() => {
    class CreateWorkflowPageModule {
    }
    CreateWorkflowPageModule.ɵfac = function CreateWorkflowPageModule_Factory(t) { return new (t || CreateWorkflowPageModule)(); };
    CreateWorkflowPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: CreateWorkflowPageModule });
    CreateWorkflowPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _create_workflow_routing_module__WEBPACK_IMPORTED_MODULE_3__["CreateWorkflowPageRoutingModule"]]] });
    return CreateWorkflowPageModule;
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](CreateWorkflowPageModule, { declarations: [_create_workflow_page__WEBPACK_IMPORTED_MODULE_2__["CreateWorkflowPage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _create_workflow_routing_module__WEBPACK_IMPORTED_MODULE_3__["CreateWorkflowPageRoutingModule"]] }); })();


/***/ }),

/***/ "K91y":
/*!************************************************************************!*\
  !*** ./src/app/pages/workflow/create-workflow/create-workflow.page.ts ***!
  \************************************************************************/
/*! exports provided: CreateWorkflowPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateWorkflowPage", function() { return CreateWorkflowPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _pages_workflow_approvers_list_approvers_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../pages/workflow/approvers-list/approvers-list.component */ "IUM1");
/* harmony import */ var _services_utils_moment_moment_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../services/utils/moment/moment.service */ "9cE+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_api_workflow_workflow_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../services/api/workflow/workflow.service */ "QpGb");
/* harmony import */ var _services_storage_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../../services/storage/storage.service */ "E2f4");
/* harmony import */ var _services_utils_loading_loading_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../../services/utils/loading/loading.service */ "YMUU");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/ionic-webview/ngx */ "eHpL");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "a/9d");
/* harmony import */ var _services_utils_alert_alert_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./../../../services/utils/alert/alert.service */ "y7g3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "ofXK");















function CreateWorkflowPage_ion_row_79_h2_4_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "h2", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const approver_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](approver_r1.name);
    }
}
function CreateWorkflowPage_ion_row_79_h2_5_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "h2", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "\u0E44\u0E21\u0E48\u0E1E\u0E1A\u0E23\u0E32\u0E22\u0E0A\u0E37\u0E48\u0E2D");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }
}
function CreateWorkflowPage_ion_row_79_Template(rf, ctx) {
    if (rf & 1) {
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-row", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "ion-col", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "img", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "ion-col", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, CreateWorkflowPage_ion_row_79_h2_4_Template, 2, 1, "h2", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, CreateWorkflowPage_ion_row_79_h2_5_Template, 2, 0, "h2", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "p", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "ion-col", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CreateWorkflowPage_ion_row_79_Template_ion_col_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6); const approver_r1 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r5.clickAction(approver_r1.level); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const approver_r1 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", approver_r1.image, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", approver_r1.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !approver_r1.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](approver_r1.duty);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](approver_r1.event);
    }
}
_services_utils_moment_moment_service__WEBPACK_IMPORTED_MODULE_3__["moment"].locale('th');
let CreateWorkflowPage = /*@__PURE__*/ (() => {
    class CreateWorkflowPage {
        constructor(router, formBuild, api, storage, loading, modalController, actionSheetController, webview, camera, navCtrl, alert) {
            this.router = router;
            this.formBuild = formBuild;
            this.api = api;
            this.storage = storage;
            this.loading = loading;
            this.modalController = modalController;
            this.actionSheetController = actionSheetController;
            this.webview = webview;
            this.camera = camera;
            this.navCtrl = navCtrl;
            this.alert = alert;
            this.currentYear = new Date().getFullYear();
            this.dateNow = Object(_services_utils_moment_moment_service__WEBPACK_IMPORTED_MODULE_3__["moment"])().format('YYYY-MM-DD');
            this.approvers = [];
            this.flagUpdateApprover = false;
            this.titleReason = 'เหตุผลการลา';
            this.attachFile = { base64: null, preview: null, raw: null };
            this.formCreateWorkflow = this.formBuild.group({
                type: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])],
                reason: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])],
                phone: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])],
                startDate: [this.dateNow, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])],
                endDate: [this.dateNow, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])],
                startTime: ['10:00', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])],
                endTime: ['19:00', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])],
            });
        }
        ngOnInit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                yield this.loading.present();
                this.getUserInfo();
            });
        }
        ionViewDidEnter() {
            this.formCreateWorkflow.patchValue({
                phone: this.user.mobile_phone,
            });
            this.init();
        }
        getUserInfo() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                const info = yield this.storage.get('USER_INFO');
                this.user = info;
            });
        }
        init() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                try {
                    const fetchApproverInfo = yield this.api.workflowApproverInfo();
                    const { approver1, approver2, approver1Name, approver2Name, empid, telno } = fetchApproverInfo.data;
                    const approversRaw = [
                        { level: '1', id: approver1, name: approver1Name, person: empid, tel: telno, duty: 'ผู้รับทราบ' },
                        { level: '2', id: approver2, name: approver2Name, person: empid, tel: telno, duty: 'ผู้อนุมัติ' },
                    ];
                    const image = (id) => `https://iccapp-minio.icc.co.th:9000/icchrapp/profile/${id}/${id}.jpg?alt=media`;
                    const approversData = approversRaw.map((p) => (Object.assign(Object.assign({}, p), { image: image(p.id), event: p.id ? 'แก้ไข' : 'เพิ่ม' })));
                    this.approvers = approversData;
                    this.loading.dismiss();
                }
                catch (error) {
                    console.log(error);
                    this.loading.dismiss();
                }
            });
        }
        createLeaveRequest() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                const form = this.formCreateWorkflow.value;
                try {
                    yield this.loading.present();
                    if (this.flagUpdateApprover) {
                        for (const approver of this.approvers) {
                            console.log('🚀 ~ Do UpdateApprover ~', approver.level);
                            const level = approver.level === '1' ? 'L1' : 'L2';
                            const approverid = approver.id;
                            yield this.api.workflowUpdateApprover({ groupcode: 'S01', level, approverid });
                        }
                    }
                    /*************************************/
                    const params = {
                        groupcode: 'S01',
                        absentcode: form.type,
                        startdate: form.startDate,
                        enddate: form.endDate,
                        starttime: form.startTime.replace(':', ''),
                        endtime: form.endTime.replace(':', ''),
                        reason: form.reason,
                        attachfile: (this.attachFile.raw) ? 'Y' : 'N'
                    };
                    const create = yield this.api.workflowCreateDoc(params);
                    const { workflowno } = create.data;
                    /*************************************/
                    const attachFile = this.attachFile.raw;
                    if (attachFile) {
                        console.log('🚀 ~ Do attachFile ~');
                        const folderDate = Object(_services_utils_moment_moment_service__WEBPACK_IMPORTED_MODULE_3__["moment"])().add(543, 'years').format('YYYYMM');
                        const optionAttachFile = {
                            fileName: `${workflowno}.jpg`,
                            path: `qrms/Letter/AttachFiles/${folderDate}/${workflowno}`,
                        };
                        yield this.api.workflowUploadAttachFile(attachFile, optionAttachFile);
                    }
                    this.loading.dismiss();
                    this.navCtrl.back();
                }
                catch (error) {
                    console.log(error);
                    this.alert.basic(error.error.error_message);
                    this.loading.dismiss();
                }
            });
        }
        clickAction(level) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                try {
                    yield this.loading.present();
                    const deptId = this.user.dept_id;
                    const lists = yield this.api.workflowSearchApprover(level, deptId);
                    this.loading.dismiss();
                    const modal = yield this.modalController.create({
                        component: _pages_workflow_approvers_list_approvers_list_component__WEBPACK_IMPORTED_MODULE_2__["ApproversListComponent"],
                        cssClass: 'custom-modal-liff',
                        componentProps: {
                            props: {
                                level,
                                people: lists.datas,
                            },
                        },
                    });
                    modal.onDidDismiss().then((param) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                        if (param.role !== 'backdrop' && param.data.dismissed) {
                            const { empid, emp_name } = param.data.person;
                            const image = (id) => `https://iccapp-minio.icc.co.th:9000/icchrapp/profile/${id}/${id}.jpg?alt=media`;
                            if (level === '1') {
                                this.approvers[0].id = empid;
                                this.approvers[0].name = emp_name;
                                this.approvers[0].image = image(empid);
                                this.approvers[0].event = 'แก้ไข';
                            }
                            if (level === '2') {
                                this.approvers[1].id = empid;
                                this.approvers[1].name = emp_name;
                                this.approvers[1].image = image(empid);
                                this.approvers[1].event = 'แก้ไข';
                            }
                            this.flagUpdateApprover = true;
                        }
                    }));
                    return yield modal.present();
                }
                catch (error) {
                    console.log(error);
                    this.alert.basic(error.error.message);
                    this.loading.dismiss();
                }
            });
        }
        browserImage() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                const actionSheet = yield this.actionSheetController.create({
                    header: 'เลือกไฟล์เอกสาร/รูปภาพ',
                    buttons: [
                        {
                            text: 'ถ่ายภาพ',
                            icon: 'camera',
                            handler: () => {
                                const options = {
                                    quality: 70,
                                    destinationType: this.camera.DestinationType.FILE_URI,
                                    encodingType: this.camera.EncodingType.JPEG,
                                    mediaType: this.camera.MediaType.PICTURE,
                                };
                                return this.getImage(options);
                            },
                        },
                        {
                            text: 'เลือกจากอัลบั้ม',
                            icon: 'folder-open',
                            handler: () => {
                                const options = {
                                    quality: 70,
                                    destinationType: this.camera.DestinationType.FILE_URI,
                                    encodingType: this.camera.EncodingType.JPEG,
                                    mediaType: this.camera.MediaType.PICTURE,
                                    sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM,
                                };
                                return this.getImage(options);
                            },
                        },
                    ],
                });
                yield actionSheet.present();
            });
        }
        getImage(options) {
            this.camera.getPicture(options).then((imageData) => {
                const base64Image = 'data:image/jpeg;base64,' + imageData;
                const previewImage = this.webview.convertFileSrc(imageData);
                this.attachFile.base64 = base64Image;
                this.attachFile.preview = previewImage;
                this.attachFile.raw = imageData;
            }, (err) => {
                console.log('nativeCamera Error => ', err);
                // alert(err);
            });
        }
        dateChange(type) {
            setTimeout(() => {
                const sFormat = Object(_services_utils_moment_moment_service__WEBPACK_IMPORTED_MODULE_3__["moment"])(this.formCreateWorkflow.value.startDate).format('YYYYMMDD');
                const eFormat = Object(_services_utils_moment_moment_service__WEBPACK_IMPORTED_MODULE_3__["moment"])(this.formCreateWorkflow.value.endDate).format('YYYYMMDD');
                this.formCreateWorkflow.patchValue({
                    startDate: Object(_services_utils_moment_moment_service__WEBPACK_IMPORTED_MODULE_3__["moment"])(sFormat, 'YYYYMMDD').format('YYYY-MM-DD'),
                    endDate: Object(_services_utils_moment_moment_service__WEBPACK_IMPORTED_MODULE_3__["moment"])(eFormat, 'YYYYMMDD').format('YYYY-MM-DD'),
                });
                if (sFormat > eFormat) {
                    if (type === 'ENDDATE') {
                        console.warn('เปลี่ยนวันที่เริ่มต้นอัติโนมัติให้สอดคล้องกับวันที่สิ้นสุด!!!');
                        this.formCreateWorkflow.patchValue({
                            startDate: this.formCreateWorkflow.value.endDate,
                        });
                    }
                    else {
                        console.warn('เปลี่ยนวันที่สิ้นสุดอัติโนมัติให้สอดคล้องกับวันที่เริ่มต้น!!!');
                        this.formCreateWorkflow.patchValue({
                            endDate: this.formCreateWorkflow.value.startDate,
                        });
                    }
                }
            }, 500);
        }
        typeChange() {
            const form = this.formCreateWorkflow.value;
            if (form.type == '99') {
                this.titleReason = 'เหตุผลการแก้ไข';
            }
            else {
                this.titleReason = 'เหตุผลการลา';
            }
        }
    }
    CreateWorkflowPage.ɵfac = function CreateWorkflowPage_Factory(t) { return new (t || CreateWorkflowPage)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_api_workflow_workflow_service__WEBPACK_IMPORTED_MODULE_6__["WorkflowService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_7__["StorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_utils_loading_loading_service__WEBPACK_IMPORTED_MODULE_8__["LoadingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_9__["ModalController"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_9__["ActionSheetController"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_10__["WebView"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_11__["Camera"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_9__["NavController"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_utils_alert_alert_service__WEBPACK_IMPORTED_MODULE_12__["AlertService"])); };
    CreateWorkflowPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: CreateWorkflowPage, selectors: [["app-create-workflow"]], decls: 82, vars: 13, consts: [[1, "ion-no-border"], ["slot", "start"], ["fullscreen", "true"], [1, "workflow__form"], [1, "form", "custom-create-workflow", 3, "formGroup"], [1, "form__item"], [1, "form__item--label"], ["name", "document-text-outline", 1, "form__item--icon"], ["placeholder", "\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17\u0E01\u0E32\u0E23\u0E25\u0E32", "interface", "action-sheet", "cancelText", "\u0E1B\u0E34\u0E14", "formControlName", "type", 1, "form__item--select", "icon", 3, "ionChange"], ["value", "A1"], ["value", "C1"], ["value", "C2"], ["value", "G1"], ["value", "99"], ["name", "chatbox-outline", 1, "form__item--icon"], ["type", "text", "formControlName", "reason", 1, "form__item--input", "icon", 3, "placeholder"], [3, "click"], [1, "form__item--icon", 3, "name", "color"], ["type", "text", "readonly", "", 1, "form__item--input", "icon", 3, "placeholder"], ["size", "3", 1, "preview__section"], ["alt", "", 1, "preview__section__image", 3, "src"], ["name", "call-outline", 1, "form__item--icon"], ["type", "tel", "placeholder", "\u0E40\u0E1A\u0E2D\u0E23\u0E4C\u0E42\u0E17\u0E23\u0E15\u0E34\u0E14\u0E15\u0E48\u0E2D", "formControlName", "phone", 1, "form__item--input", "icon"], [2, "margin-right", "3px"], ["name", "calendar-outline", 1, "form__item--icon", "right"], ["placeholder", "\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48\u0E40\u0E23\u0E34\u0E48\u0E21\u0E15\u0E49\u0E19", "displayFormat", "DD/MM/YYYY", "pickerFormat", "DD MMMM YYYY", "formControlName", "startDate", 1, "form__item--datetime", 3, "min", "max", "ionChange"], [2, "margin-left", "3px"], ["placeholder", "\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48\u0E2A\u0E34\u0E49\u0E19\u0E2A\u0E38\u0E14", "displayFormat", "DD/MM/YYYY", "pickerFormat", "DD MMMM YYYY", "formControlName", "endDate", 1, "form__item--datetime", 3, "min", "max", "ionChange"], ["name", "time-outline", 1, "form__item--icon", "right"], ["placeholder", "\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E40\u0E27\u0E25\u0E32\u0E40\u0E23\u0E34\u0E48\u0E21\u0E15\u0E49\u0E19", "displayFormat", "HH:mm \u0E19.", "pickerFormat", "HH mm", "formControlName", "startTime", 1, "form__item--datetime"], ["placeholder", "\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E40\u0E27\u0E25\u0E32\u0E2A\u0E34\u0E49\u0E19\u0E2A\u0E38\u0E14", "displayFormat", "HH:mm \u0E19.", "pickerFormat", "HH mm", "formControlName", "endTime", 1, "form__item--datetime"], [2, "margin", "50px"], [1, "workflow__label"], ["class", "approver-name", 4, "ngFor", "ngForOf"], [1, "btn", "btn-primary", 3, "disabled", "click"], [1, "approver-name"], ["size", "2.5", 1, "thumbnail"], ["onerror", "this.src='assets/images/avatar-male.svg'", 3, "src"], [1, "name"], ["class", "title", 4, "ngIf"], ["class", "none", 4, "ngIf"], [1, "duty"], ["size", "1.5", 1, "edit", 3, "click"], [1, "title"], [1, "none"]], template: function CreateWorkflowPage_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-header", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "ion-toolbar");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "ion-buttons", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "ion-back-button");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "ion-title");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E43\u0E1A\u0E25\u0E32\u0E1C\u0E48\u0E32\u0E19 Workflow");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "ion-content", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "section", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "form", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "ion-grid");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "ion-row");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "ion-col");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17\u0E01\u0E32\u0E23\u0E25\u0E32");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](15, "ion-icon", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "ion-select", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ionChange", function CreateWorkflowPage_Template_ion_select_ionChange_16_listener() { return ctx.typeChange(); });
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "ion-select-option", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, "\u0E25\u0E32\u0E1B\u0E48\u0E27\u0E22");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "ion-select-option", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "\u0E25\u0E32\u0E01\u0E34\u0E08");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "ion-select-option", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, "\u0E25\u0E32\u0E01\u0E34\u0E08\u0E1E\u0E34\u0E40\u0E28\u0E29");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "ion-select-option", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, "\u0E25\u0E32\u0E1E\u0E31\u0E01\u0E23\u0E49\u0E2D\u0E19");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "ion-select-option", 13);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26, "\u0E1B\u0E23\u0E31\u0E1A\u0E1B\u0E23\u0E38\u0E07\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E15\u0E32\u0E21\u0E43\u0E1A\u0E41\u0E01\u0E49\u0E44\u0E02");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "ion-row");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "ion-col");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "div", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "div", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](32, "ion-icon", 14);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](33, "input", 15);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "ion-row", 16);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CreateWorkflowPage_Template_ion_row_click_34_listener() { return ctx.browserImage(); });
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "ion-col");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "div", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "div", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](38, "\u0E44\u0E1F\u0E25\u0E4C\u0E40\u0E2D\u0E01\u0E2A\u0E32\u0E23/\u0E23\u0E39\u0E1B\u0E20\u0E32\u0E1E");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](39, "ion-icon", 17);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](40, "input", 18);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "ion-col", 19);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](42, "img", 20);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "ion-row");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](44, "ion-col");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "div", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "div", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](47, "\u0E40\u0E1A\u0E2D\u0E23\u0E4C\u0E42\u0E17\u0E23\u0E15\u0E34\u0E14\u0E15\u0E48\u0E2D");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](48, "ion-icon", 21);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](49, "input", 22);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](50, "ion-row");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "ion-col", 23);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](52, "div", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](53, "div", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](54, "\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48\u0E40\u0E23\u0E34\u0E48\u0E21\u0E15\u0E49\u0E19");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](55, "ion-icon", 24);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](56, "ion-datetime", 25);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ionChange", function CreateWorkflowPage_Template_ion_datetime_ionChange_56_listener() { return ctx.dateChange("STARTDATE"); });
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](57, "ion-col", 26);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](58, "div", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](59, "div", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](60, "\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48\u0E2A\u0E34\u0E49\u0E19\u0E2A\u0E38\u0E14");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](61, "ion-icon", 24);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](62, "ion-datetime", 27);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ionChange", function CreateWorkflowPage_Template_ion_datetime_ionChange_62_listener() { return ctx.dateChange("ENDDATE"); });
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](63, "ion-row");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](64, "ion-col", 23);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](65, "div", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](66, "div", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](67, "\u0E40\u0E27\u0E25\u0E32\u0E40\u0E23\u0E34\u0E48\u0E21\u0E15\u0E49\u0E19");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](68, "ion-icon", 28);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](69, "ion-datetime", 29);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](70, "ion-col", 26);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](71, "div", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](72, "div", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](73, "\u0E40\u0E27\u0E25\u0E32\u0E2A\u0E34\u0E49\u0E19\u0E2A\u0E38\u0E14");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](74, "ion-icon", 28);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](75, "ion-datetime", 30);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](76, "div", 31);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](77, "p", 32);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](78, "\u0E0A\u0E37\u0E48\u0E2D\u0E1C\u0E39\u0E49\u0E2D\u0E19\u0E38\u0E21\u0E31\u0E15\u0E34");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](79, CreateWorkflowPage_ion_row_79_Template, 11, 5, "ion-row", 33);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](80, "button", 34);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CreateWorkflowPage_Template_button_click_80_listener() { return ctx.createLeaveRequest(); });
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](81, "\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E43\u0E1A\u0E25\u0E32");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.formCreateWorkflow);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](23);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.titleReason);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("placeholder", ctx.titleReason);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("name", !ctx.attachFile.preview ? "image-outline" : "checkmark-circle")("color", !ctx.attachFile.preview ? "" : "success");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("placeholder", !ctx.attachFile.preview ? "\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E17\u0E35\u0E48\u0E2D\u0E22\u0E39\u0E48\u0E44\u0E1F\u0E25\u0E4C" : "\u0E41\u0E19\u0E1A\u0E44\u0E1F\u0E25\u0E4C\u0E41\u0E25\u0E49\u0E27");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", !ctx.attachFile.preview ? "assets/images/workflow/add-image.svg" : ctx.attachFile.preview, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](14);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("min", ctx.currentYear - 1)("max", ctx.currentYear + 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("min", ctx.currentYear - 1)("max", ctx.currentYear + 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](17);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.approvers);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !ctx.formCreateWorkflow.valid);
            }
        }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonGrid"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonCol"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonSelect"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["SelectValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonDatetime"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"]], styles: [".custom-create-workflow[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\n.custom-create-workflow[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   .form__item[_ngcontent-%COMP%] {\n  margin: 3px 0;\n}\n.custom-create-workflow[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   .form__item[_ngcontent-%COMP%]   .form__item--input[_ngcontent-%COMP%], .custom-create-workflow[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   .form__item[_ngcontent-%COMP%]   .form__item--select[_ngcontent-%COMP%], .custom-create-workflow[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   .form__item[_ngcontent-%COMP%]   .form__item--datetime[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  background-color: #ffffff;\n  color: #000000;\n}\nion-row.approver-name[_ngcontent-%COMP%] {\n  color: #111111;\n  background: #fdfdfd;\n  box-shadow: 0 1em 0.8em -0.7em #eeeeee;\n  border-radius: 2px;\n  margin: 0 0 16px 0;\n  padding: 10px 0;\n}\nion-row.approver-name[_ngcontent-%COMP%]   ion-col.thumbnail[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\nion-row.approver-name[_ngcontent-%COMP%]   ion-col.thumbnail[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  object-fit: cover;\n}\nion-row.approver-name[_ngcontent-%COMP%]   ion-col.name[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100px;\n}\nion-row.approver-name[_ngcontent-%COMP%]   ion-col.name[_ngcontent-%COMP%]   h2.title[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  line-height: 26px;\n  font-weight: 600;\n  margin: 0;\n}\nion-row.approver-name[_ngcontent-%COMP%]   ion-col.name[_ngcontent-%COMP%]   h2.none[_ngcontent-%COMP%] {\n  color: #adadad;\n  font-size: 0.8rem;\n  font-style: italic;\n  line-height: 26px;\n  font-weight: 400;\n  margin: 0;\n}\nion-row.approver-name[_ngcontent-%COMP%]   ion-col.name[_ngcontent-%COMP%]   p.duty[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  font-weight: 500;\n  line-height: 26px;\n  margin: 0;\n}\nion-row.approver-name[_ngcontent-%COMP%]   ion-col.edit[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\nion-row.approver-name[_ngcontent-%COMP%]   ion-col.edit[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n}\nion-row.approver-name[_ngcontent-%COMP%]   ion-col.edit[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #eb930f;\n  font-size: 0.9rem;\n}\n.workflow__label[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  font-weight: 500;\n}\n.preview__section[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: flex-end;\n}\n.preview__section[_ngcontent-%COMP%]   img.preview__section__image[_ngcontent-%COMP%] {\n  width: 55px;\n  height: 55px;\n  border-radius: 6px;\n  object-fit: cover;\n}"] });
    return CreateWorkflowPage;
})();


/***/ }),

/***/ "YJN9":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/workflow/create-workflow/create-workflow-routing.module.ts ***!
  \**********************************************************************************/
/*! exports provided: CreateWorkflowPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateWorkflowPageRoutingModule", function() { return CreateWorkflowPageRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _create_workflow_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-workflow.page */ "K91y");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    {
        path: '',
        component: _create_workflow_page__WEBPACK_IMPORTED_MODULE_1__["CreateWorkflowPage"]
    }
];
let CreateWorkflowPageRoutingModule = /*@__PURE__*/ (() => {
    class CreateWorkflowPageRoutingModule {
    }
    CreateWorkflowPageRoutingModule.ɵfac = function CreateWorkflowPageRoutingModule_Factory(t) { return new (t || CreateWorkflowPageRoutingModule)(); };
    CreateWorkflowPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: CreateWorkflowPageRoutingModule });
    CreateWorkflowPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
    return CreateWorkflowPageRoutingModule;
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](CreateWorkflowPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ })

}]);