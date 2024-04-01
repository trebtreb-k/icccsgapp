(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "74mu":
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/theme-ff3fc52f.js ***!
  \*************************************************************/
/*! exports provided: c, g, h, o */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createColorClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getClassMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hostContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return openURL; });
const hostContext = (selector, el) => {
  return el.closest(selector) !== null;
};
/**
 * Create the mode and color classes for the component based on the classes passed in
 */
const createColorClasses = (color, cssClassMap) => {
  return (typeof color === 'string' && color.length > 0) ? Object.assign({ 'ion-color': true, [`ion-color-${color}`]: true }, cssClassMap) : cssClassMap;
};
const getClassList = (classes) => {
  if (classes !== undefined) {
    const array = Array.isArray(classes) ? classes : classes.split(' ');
    return array
      .filter(c => c != null)
      .map(c => c.trim())
      .filter(c => c !== '');
  }
  return [];
};
const getClassMap = (classes) => {
  const map = {};
  getClassList(classes).forEach(c => map[c] = true);
  return map;
};
const SCHEME = /^[a-z][a-z0-9+\-.]*:/;
const openURL = async (url, ev, direction, animation) => {
  if (url != null && url[0] !== '#' && !SCHEME.test(url)) {
    const router = document.querySelector('ion-router');
    if (router) {
      if (ev != null) {
        ev.preventDefault();
      }
      return router.push(url, direction, animation);
    }
  }
  return false;
};




/***/ }),

/***/ "QpGb":
/*!***********************************************************!*\
  !*** ./src/app/services/api/workflow/workflow.service.ts ***!
  \***********************************************************/
/*! exports provided: WorkflowService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkflowService", function() { return WorkflowService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _api_root__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../api.root */ "ntc2");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _storage_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../storage/storage.service */ "E2f4");
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "B7Rs");







let WorkflowService = /*@__PURE__*/ (() => {
    class WorkflowService {
        constructor(http, storage, transfer) {
            this.http = http;
            this.storage = storage;
            this.transfer = transfer;
        }
        workflowLists() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                const token = yield this.storage.get('USER_TOKEN');
                const url = `${_api_root__WEBPACK_IMPORTED_MODULE_2__["ST_ROOT"].workflow}/salestools/leaverequest/lists`;
                let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
                headers = headers.set('Authorization', `Bearer ${token}`);
                return this.http.get(url, { headers }).toPromise();
            });
        }
        workflowDocDetail(body) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                const token = yield this.storage.get('USER_TOKEN');
                const url = `${_api_root__WEBPACK_IMPORTED_MODULE_2__["ST_ROOT"].workflow}/salestools/leaverequest/lists/detail`;
                let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
                headers = headers.set('Authorization', `Bearer ${token}`);
                return this.http.post(url, body, { headers }).toPromise();
            });
        }
        workflowTimestat(period, empid) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                const token = yield this.storage.get('USER_TOKEN');
                const url = `${_api_root__WEBPACK_IMPORTED_MODULE_2__["ST_ROOT"].workflow}/salestools/timestat/yearlyadjust?period=${period}&empid=${empid}`;
                let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
                headers = headers.set('Authorization', `Bearer ${token}`);
                return this.http.get(url, { headers }).toPromise();
            });
        }
        workflowCancelDoc(docid) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                const token = yield this.storage.get('USER_TOKEN');
                const url = `${_api_root__WEBPACK_IMPORTED_MODULE_2__["ST_ROOT"].workflow}/salestools/leaverequest/canceldoc/${docid}`;
                let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
                headers = headers.set('Authorization', `Bearer ${token}`);
                return this.http.delete(url, { headers }).toPromise();
            });
        }
        workflowApproverInfo() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                const token = yield this.storage.get('USER_TOKEN');
                const url = `${_api_root__WEBPACK_IMPORTED_MODULE_2__["ST_ROOT"].workflow}/salestools/leaverequest/approverinfo`;
                let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
                headers = headers.set('Authorization', `Bearer ${token}`);
                return this.http.get(url, { headers }).toPromise();
            });
        }
        workflowSearchApprover(level, deptId) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                const token = yield this.storage.get('USER_TOKEN');
                const url = `${_api_root__WEBPACK_IMPORTED_MODULE_2__["ST_ROOT"].workflow}/salestools/leaverequest/searchpeople/${level}/${deptId}`;
                let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
                headers = headers.set('Authorization', `Bearer ${token}`);
                return this.http.get(url, { headers }).toPromise();
            });
        }
        workflowCreateDoc(body) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                const token = yield this.storage.get('USER_TOKEN');
                const url = `${_api_root__WEBPACK_IMPORTED_MODULE_2__["ST_ROOT"].workflow}/salestools/leaverequest/createdoc`;
                let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
                headers = headers.set('Authorization', `Bearer ${token}`);
                return this.http.post(url, body, { headers }).toPromise();
            });
        }
        workflowUpdateApprover(body) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                const token = yield this.storage.get('USER_TOKEN');
                const url = `${_api_root__WEBPACK_IMPORTED_MODULE_2__["ST_ROOT"].workflow}/salestools/leaverequest/updateapprover`;
                let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
                headers = headers.set('Authorization', `Bearer ${token}`);
                return this.http.patch(url, body, { headers }).toPromise();
            });
        }
        workflowUploadAttachFile(file, option) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                const fileTransfer = this.transfer.create();
                const options = {
                    fileKey: 'file',
                    fileName: option.fileName,
                    httpMethod: 'POST',
                    mimeType: 'image/jpeg',
                    params: {
                        path: option.path,
                    },
                    chunkedMode: false,
                    headers: {},
                };
                const url = `https://webapp7.icc.co.th/api/v1/upload/image`;
                return fileTransfer.upload(file, url, options);
                // const { result, data } = await fileTransfer.upload(file, url, options).then(
                //   (upload) => {
                //     console.log('🚀 ~ file: api.service.ts ~ line 407 ~ ApiService ~ workflowUploadAttachFile ~ upload', upload);
                //     return { result: true, data: JSON.parse(upload.response) };
                //   },
                //   (error) => {
                //     console.log('🚀 ~ file: api.service.ts ~ line 410 ~ ApiService ~ workflowUploadAttachFile ~ error', error);
                //     return { result: false, data: error };
                //   }
                // );
                // return { result, data };
            });
        }
        monthlyAdjust(period) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                const token = yield this.storage.get('USER_TOKEN');
                const url = `${_api_root__WEBPACK_IMPORTED_MODULE_2__["ST_ROOT"].workflow}/salestools/timestat/monthlyadjust?period=${period}`;
                let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
                headers = headers.set('Authorization', `Bearer ${token}`);
                return this.http.get(url, { headers }).toPromise();
            });
        }
        yearlyAdjust(period) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                const token = yield this.storage.get('USER_TOKEN');
                const url = `${_api_root__WEBPACK_IMPORTED_MODULE_2__["ST_ROOT"].workflow}/salestools/timestat/yearlyadjust?period=${period}`;
                let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
                headers = headers.set('Authorization', `Bearer ${token}`);
                console.log(url);
                console.log(headers);
                return this.http.get(url, { headers }).toPromise();
            });
        }
    }
    WorkflowService.ɵfac = function WorkflowService_Factory(t) { return new (t || WorkflowService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_storage_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_5__["FileTransfer"])); };
    WorkflowService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: WorkflowService, factory: WorkflowService.ɵfac, providedIn: 'root' });
    return WorkflowService;
})();


/***/ }),

/***/ "TTzW":
/*!***************************************************!*\
  !*** ./src/app/services/api/pdpa/pdpa.service.ts ***!
  \***************************************************/
/*! exports provided: PdpaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PdpaService", function() { return PdpaService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _api_root__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../api.root */ "ntc2");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _storage_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../storage/storage.service */ "E2f4");






let PDPA_SYSTEM_ID = 'HR';
let PDPA_SUB_SYSTEM_ID = 'ALL';
let PdpaService = /*@__PURE__*/ (() => {
    class PdpaService {
        constructor(http, storage) {
            this.http = http;
            this.storage = storage;
            this.getConfig();
        }
        getConfig() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                const config = yield this.storage.get('CONFIG');
                PDPA_SYSTEM_ID = config.pdpa.system_id;
                PDPA_SUB_SYSTEM_ID = config.pdpa.sub_system_id;
            });
        }
        getSystemId() {
            return PDPA_SYSTEM_ID;
        }
        getSubSystemId() {
            return PDPA_SUB_SYSTEM_ID;
        }
        /************ announcement *************/
        privacyWaitAgree() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                const token = yield this.storage.get('USER_TOKEN');
                const user = yield this.storage.get('USER_INFO');
                yield this.getConfig();
                const empId = user.emp_id;
                const url = `${_api_root__WEBPACK_IMPORTED_MODULE_2__["ST_ROOT"].pdpa}/pdpa/privacy_consent/getprivacyconsentlist?system_id=${PDPA_SYSTEM_ID}&sub_system_id=${PDPA_SUB_SYSTEM_ID}&user_id=${empId}&exists_flag=N`;
                console.log(url);
                let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
                headers = headers.set('Authorization', `Bearer ${token}`);
                return this.http.get(url, { headers }).toPromise();
            });
        }
        // updateAgreeConsent(datas){
        //   const param = datas
        //   const url = `${ST_ROOT.pdpa}/pdpa/privacy_consent/updateprivacyconsent`
        //   let headers = new HttpHeaders();
        //   return this.http.post(url, param, this.globalfunc.getHeaderOption())
        // }
        updateAgreeConsent(datas) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                const url = `${_api_root__WEBPACK_IMPORTED_MODULE_2__["ST_ROOT"].pdpa}/pdpa/privacy_consent/updateprivacyconsent`;
                return this.http.post(url, datas).toPromise();
            });
        }
    }
    PdpaService.ɵfac = function PdpaService_Factory(t) { return new (t || PdpaService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_storage_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"])); };
    PdpaService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: PdpaService, factory: PdpaService.ɵfac, providedIn: 'root' });
    return PdpaService;
})();


/***/ }),

/***/ "Zcj0":
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/button-active-d4bd4f74.js ***!
  \*********************************************************************/
/*! exports provided: c */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createButtonActiveGesture; });
/* harmony import */ var _index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-7a8b7a1c.js */ "wEJo");
/* harmony import */ var _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./haptic-27b3f981.js */ "qULd");
/* harmony import */ var _index_34cb2743_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index-34cb2743.js */ "KF81");




const createButtonActiveGesture = (el, isButton) => {
  let currentTouchedButton;
  let initialTouchedButton;
  const activateButtonAtPoint = (x, y, hapticFeedbackFn) => {
    if (typeof document === 'undefined') {
      return;
    }
    const target = document.elementFromPoint(x, y);
    if (!target || !isButton(target)) {
      clearActiveButton();
      return;
    }
    if (target !== currentTouchedButton) {
      clearActiveButton();
      setActiveButton(target, hapticFeedbackFn);
    }
  };
  const setActiveButton = (button, hapticFeedbackFn) => {
    currentTouchedButton = button;
    if (!initialTouchedButton) {
      initialTouchedButton = currentTouchedButton;
    }
    const buttonToModify = currentTouchedButton;
    Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["c"])(() => buttonToModify.classList.add('ion-activated'));
    hapticFeedbackFn();
  };
  const clearActiveButton = (dispatchClick = false) => {
    if (!currentTouchedButton) {
      return;
    }
    const buttonToModify = currentTouchedButton;
    Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["c"])(() => buttonToModify.classList.remove('ion-activated'));
    /**
     * Clicking on one button, but releasing on another button
     * does not dispatch a click event in browsers, so we
     * need to do it manually here. Some browsers will
     * dispatch a click if clicking on one button, dragging over
     * another button, and releasing on the original button. In that
     * case, we need to make sure we do not cause a double click there.
     */
    if (dispatchClick && initialTouchedButton !== currentTouchedButton) {
      currentTouchedButton.click();
    }
    currentTouchedButton = undefined;
  };
  return Object(_index_34cb2743_js__WEBPACK_IMPORTED_MODULE_2__["createGesture"])({
    el,
    gestureName: 'buttonActiveDrag',
    threshold: 0,
    onStart: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__["a"]),
    onMove: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__["b"]),
    onEnd: () => {
      clearActiveButton(true);
      Object(_haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__["h"])();
      initialTouchedButton = undefined;
    }
  });
};




/***/ }),

/***/ "afkE":
/*!*******************************************************!*\
  !*** ./src/app/services/api/income/income.service.ts ***!
  \*******************************************************/
/*! exports provided: IncomeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncomeService", function() { return IncomeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _api_root__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../api.root */ "ntc2");
/* harmony import */ var _utils_moment_moment_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../utils/moment/moment.service */ "9cE+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _storage_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../storage/storage.service */ "E2f4");







let IncomeService = /*@__PURE__*/ (() => {
    class IncomeService {
        constructor(http, storage) {
            this.http = http;
            this.storage = storage;
        }
        getIncomeMonth(period) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                const token = yield this.storage.get('USER_TOKEN');
                const url = `${_api_root__WEBPACK_IMPORTED_MODULE_2__["ST_ROOT"].income}/salestools/income/incomemonth?periodpay=${period}`;
                let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
                headers = headers.set('Authorization', `Bearer ${token}`);
                return this.http.get(url, { headers }).toPromise();
            });
        }
        getIncomeDaily(period) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                const token = yield this.storage.get('USER_TOKEN');
                const url = `${_api_root__WEBPACK_IMPORTED_MODULE_2__["ST_ROOT"].income}/salestools/income/incomedaily?periodpay=${period}`;
                let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
                headers = headers.set('Authorization', `Bearer ${token}`);
                return this.http.get(url, { headers }).toPromise();
            });
        }
        getSummary() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                const token = yield this.storage.get('USER_TOKEN');
                //const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbXBfaWQiOiI5NTQ0OCIsImlhdCI6MTY1MDM1NzU3NH0.Uy-60xvbg-yhc_qCka8HB3zbq4-KFDSJi4Gx0DVef8c';
                const url = `${_api_root__WEBPACK_IMPORTED_MODULE_2__["ST_ROOT"].income}/salestools/income/incomesummary`;
                let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
                headers = headers.set('Authorization', `Bearer ${token}`);
                return this.http.get(url, { headers }).toPromise();
            });
        }
        getIncomeDetail(period) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                const token = yield this.storage.get('USER_TOKEN');
                //const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbXBfaWQiOiI5NTQ0OCIsImlhdCI6MTY1MDM1NzU3NH0.Uy-60xvbg-yhc_qCka8HB3zbq4-KFDSJi4Gx0DVef8c';
                const url = `${_api_root__WEBPACK_IMPORTED_MODULE_2__["ST_ROOT"].income}/salestools/income/incomedetail?paydate=${period}`;
                let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
                headers = headers.set('Authorization', `Bearer ${token}`);
                console.log(url, headers);
                return this.http.get(url, { headers }).toPromise();
            });
        }
        requestSlip(period) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                const token = yield this.storage.get('USER_TOKEN');
                const url = `${_api_root__WEBPACK_IMPORTED_MODULE_2__["ST_ROOT"].income}/salestools/income/payslip/payslipdocument/${period}?output=pdf&sendmail=N`;
                //const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbXBfaWQiOiI5NTQ0OCIsImlhdCI6MTY1MDM1NzU3NH0.Uy-60xvbg-yhc_qCka8HB3zbq4-KFDSJi4Gx0DVef8c';
                //const url = `https://webapidev.icc.co.th:7116/salestools/payslip/payslipdocument/${period}?output=pdf&sendmail=N`;
                let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
                headers = headers.set('Authorization', `Bearer ${token}`);
                console.log(url);
                return this.http.get(url, { headers }).toPromise();
            });
        }
        getDirectToCustomer(period) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                let begin_date = Object(_utils_moment_moment_service__WEBPACK_IMPORTED_MODULE_3__["moment"])(period, 'MMYYYY').startOf('month').format('DD/MM/YYYY');
                let end_date = Object(_utils_moment_moment_service__WEBPACK_IMPORTED_MODULE_3__["moment"])(period, 'MMYYYY').endOf('month').format('DD/MM/YYYY');
                const token = yield this.storage.get('USER_TOKEN');
                const url = `${_api_root__WEBPACK_IMPORTED_MODULE_2__["ST_ROOT"].income}/salestools/income/direct_to_customer?begin_date=${begin_date}&end_date=${end_date}`;
                // console.log('url=>', url)
                let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
                headers = headers.set('Authorization', `Bearer ${token}`);
                return this.http.get(url, { headers }).toPromise();
            });
        }
    }
    IncomeService.ɵfac = function IncomeService_Factory(t) { return new (t || IncomeService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_storage_storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"])); };
    IncomeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: IncomeService, factory: IncomeService.ɵfac, providedIn: 'root' });
    return IncomeService;
})();


/***/ }),

/***/ "f+ws":
/*!*************************************************!*\
  !*** ./src/app/services/api/otp/otp.service.ts ***!
  \*************************************************/
/*! exports provided: OtpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtpService", function() { return OtpService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _api_root__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../api.root */ "ntc2");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




let OtpService = /*@__PURE__*/ (() => {
    class OtpService {
        constructor(http) {
            this.http = http;
        }
        sendOTP(params) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                const { mobile_phone, type } = params;
                const vType = type || 'CSG';
                const url = `${_api_root__WEBPACK_IMPORTED_MODULE_1__["FB_ROOT"].otp}/getotp_csg`;
                console.log(url);
                console.log(params);
                console.log(vType);
                return this.http.post(url, { mobile_phone, type: vType }).toPromise();
            });
        }
        checkOTP(params) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                const { mobile_phone, ref, otp } = params;
                const url = `${_api_root__WEBPACK_IMPORTED_MODULE_1__["FB_ROOT"].otp}/checkotp`;
                console.log(url);
                console.log(params);
                return this.http.post(url, { mobile_phone, ref, otp }).toPromise();
            });
        }
    }
    OtpService.ɵfac = function OtpService_Factory(t) { return new (t || OtpService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
    OtpService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: OtpService, factory: OtpService.ɵfac, providedIn: 'root' });
    return OtpService;
})();


/***/ }),

/***/ "h3R7":
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-cd7845af.js ***!
  \***********************************************************************/
/*! exports provided: S */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S", function() { return SPINNERS; });
const spinners = {
  'bubbles': {
    dur: 1000,
    circles: 9,
    fn: (dur, index, total) => {
      const animationDelay = `${(dur * index / total) - dur}ms`;
      const angle = 2 * Math.PI * index / total;
      return {
        r: 5,
        style: {
          'top': `${9 * Math.sin(angle)}px`,
          'left': `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'circles': {
    dur: 1000,
    circles: 8,
    fn: (dur, index, total) => {
      const step = index / total;
      const animationDelay = `${(dur * step) - dur}ms`;
      const angle = 2 * Math.PI * step;
      return {
        r: 5,
        style: {
          'top': `${9 * Math.sin(angle)}px`,
          'left': `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'circular': {
    dur: 1400,
    elmDuration: true,
    circles: 1,
    fn: () => {
      return {
        r: 20,
        cx: 48,
        cy: 48,
        fill: 'none',
        viewBox: '24 24 48 48',
        transform: 'translate(0,0)',
        style: {}
      };
    }
  },
  'crescent': {
    dur: 750,
    circles: 1,
    fn: () => {
      return {
        r: 26,
        style: {}
      };
    }
  },
  'dots': {
    dur: 750,
    circles: 3,
    fn: (_, index) => {
      const animationDelay = -(110 * index) + 'ms';
      return {
        r: 6,
        style: {
          'left': `${9 - (9 * index)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'lines': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${(dur * index / total) - dur}ms`;
      return {
        y1: 17,
        y2: 29,
        style: {
          'transform': transform,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'lines-small': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${(dur * index / total) - dur}ms`;
      return {
        y1: 12,
        y2: 20,
        style: {
          'transform': transform,
          'animation-delay': animationDelay,
        }
      };
    }
  }
};
const SPINNERS = spinners;




/***/ }),

/***/ "qULd":
/*!**************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js ***!
  \**************************************************************/
/*! exports provided: a, b, c, d, h */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hapticSelectionStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return hapticSelectionChanged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return hapticSelection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return hapticImpact; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hapticSelectionEnd; });
const HapticEngine = {
  getEngine() {
    const win = window;
    return (win.TapticEngine) || (win.Capacitor && win.Capacitor.isPluginAvailable('Haptics') && win.Capacitor.Plugins.Haptics);
  },
  available() {
    return !!this.getEngine();
  },
  isCordova() {
    return !!window.TapticEngine;
  },
  isCapacitor() {
    const win = window;
    return !!win.Capacitor;
  },
  impact(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.impact({ style });
  },
  notification(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.notification({ style });
  },
  selection() {
    this.impact({ style: 'light' });
  },
  selectionStart() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionStart();
    }
    else {
      engine.gestureSelectionStart();
    }
  },
  selectionChanged() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionChanged();
    }
    else {
      engine.gestureSelectionChanged();
    }
  },
  selectionEnd() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionEnd();
    }
    else {
      engine.gestureSelectionEnd();
    }
  }
};
/**
 * Trigger a selection changed haptic event. Good for one-time events
 * (not for gestures)
 */
const hapticSelection = () => {
  HapticEngine.selection();
};
/**
 * Tell the haptic engine that a gesture for a selection change is starting.
 */
const hapticSelectionStart = () => {
  HapticEngine.selectionStart();
};
/**
 * Tell the haptic engine that a selection changed during a gesture.
 */
const hapticSelectionChanged = () => {
  HapticEngine.selectionChanged();
};
/**
 * Tell the haptic engine we are done with a gesture. This needs to be
 * called lest resources are not properly recycled.
 */
const hapticSelectionEnd = () => {
  HapticEngine.selectionEnd();
};
/**
 * Use this to indicate success/failure/warning to the user.
 * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
 */
const hapticImpact = (options) => {
  HapticEngine.impact(options);
};




/***/ }),

/***/ "spDm":
/*!**************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-94e770cc.js ***!
  \**************************************************************************/
/*! exports provided: a, d */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return attachComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return detachComponent; });
/* harmony import */ var _helpers_1457892a_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers-1457892a.js */ "W6o/");


const attachComponent = async (delegate, container, component, cssClasses, componentProps) => {
  if (delegate) {
    return delegate.attachViewToDom(container, component, componentProps, cssClasses);
  }
  if (typeof component !== 'string' && !(component instanceof HTMLElement)) {
    throw new Error('framework delegate is missing');
  }
  const el = (typeof component === 'string')
    ? container.ownerDocument && container.ownerDocument.createElement(component)
    : component;
  if (cssClasses) {
    cssClasses.forEach(c => el.classList.add(c));
  }
  if (componentProps) {
    Object.assign(el, componentProps);
  }
  container.appendChild(el);
  await new Promise(resolve => Object(_helpers_1457892a_js__WEBPACK_IMPORTED_MODULE_0__["c"])(el, resolve));
  return el;
};
const detachComponent = (delegate, element) => {
  if (element) {
    if (delegate) {
      const container = element.parentElement;
      return delegate.removeViewFromDom(container, element);
    }
    element.remove();
  }
  return Promise.resolve();
};




/***/ })

}]);