(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "z+xu":
/*!***************************************************************************!*\
  !*** ./node_modules/ngx-countdown/__ivy_ngcc__/fesm2015/ngx-countdown.js ***!
  \***************************************************************************/
/*! exports provided: CountdownComponent, CountdownGlobalConfig, CountdownModule, CountdownStatus, CountdownTimer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountdownComponent", function() { return CountdownComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountdownGlobalConfig", function() { return CountdownGlobalConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountdownModule", function() { return CountdownModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountdownStatus", function() { return CountdownStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountdownTimer", function() { return CountdownTimer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "O1h7");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");





function CountdownComponent_ng_container_0_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", ctx_r0.i.text, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
    }
}
function CountdownComponent_ng_container_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
    }
}
const _c0 = function (a0) { return { $implicit: a0 }; };
var CountdownStatus = /*@__PURE__*/ (function (CountdownStatus) {
    CountdownStatus[CountdownStatus["ing"] = 0] = "ing";
    CountdownStatus[CountdownStatus["pause"] = 1] = "pause";
    CountdownStatus[CountdownStatus["stop"] = 2] = "stop";
    CountdownStatus[CountdownStatus["done"] = 3] = "done";
    return CountdownStatus;
})({});
let CountdownTimer = /*@__PURE__*/ (() => {
    let CountdownTimer = class CountdownTimer {
        constructor(ngZone) {
            this.ngZone = ngZone;
            this.fns = [];
            this.commands = [];
            this.ing = false;
        }
        start() {
            if (this.ing === true)
                return;
            this.ing = true;
            this.nextTime = +new Date();
            this.ngZone.runOutsideAngular(() => {
                this.process();
            });
        }
        process() {
            while (this.commands.length) {
                this.commands.shift()();
            }
            let diff = +new Date() - this.nextTime;
            const count = 1 + Math.floor(diff / 100);
            diff = 100 - (diff % 100);
            this.nextTime += 100 * count;
            for (let i = 0, len = this.fns.length; i < len; i += 2) {
                let frequency = this.fns[i + 1];
                // 100/s
                if (0 === frequency) {
                    this.fns[i](count);
                    // 1000/s
                }
                else {
                    // 先把末位至0，再每次加2
                    frequency += 2 * count - 1;
                    const step = Math.floor(frequency / 20);
                    if (step > 0) {
                        this.fns[i](step);
                    }
                    // 把末位还原成1
                    this.fns[i + 1] = (frequency % 20) + 1;
                }
            }
            if (!this.ing)
                return;
            setTimeout(() => this.process(), diff);
        }
        add(fn, frequency) {
            this.commands.push(() => {
                this.fns.push(fn);
                this.fns.push(frequency === 1000 ? 1 : 0);
                this.ing = true;
            });
            return this;
        }
        remove(fn) {
            this.commands.push(() => {
                const i = this.fns.indexOf(fn);
                if (i !== -1) {
                    this.fns.splice(i, 2);
                }
                this.ing = this.fns.length > 0;
            });
            return this;
        }
    };
    CountdownTimer.ɵfac = function CountdownTimer_Factory(t) { return new (t || CountdownTimer)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"])); };
    CountdownTimer.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CountdownTimer, factory: function (t) { return CountdownTimer.ɵfac(t); } });
    CountdownTimer = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])
    ], CountdownTimer);
    return CountdownTimer;
})();
let CountdownGlobalConfig = /*@__PURE__*/ (() => {
    let CountdownGlobalConfig = class CountdownGlobalConfig {
        constructor(locale) {
            this.locale = locale;
            this.demand = false;
            this.leftTime = 0;
            this.format = 'HH:mm:ss';
            this.timezone = '+0000';
            this.formatDate = ({ date, formatStr, timezone }) => {
                return Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["formatDate"])(new Date(date), formatStr, this.locale, timezone || this.timezone || '+0000');
            };
        }
    };
    CountdownGlobalConfig.ɵfac = function CountdownGlobalConfig_Factory(t) { return new (t || CountdownGlobalConfig)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"])); };
    CountdownGlobalConfig.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CountdownGlobalConfig, factory: function (t) { return CountdownGlobalConfig.ɵfac(t); }, providedIn: 'root' });
    CountdownGlobalConfig.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({ factory: function CountdownGlobalConfig_Factory() { return new CountdownGlobalConfig(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"])); }, token: CountdownGlobalConfig, providedIn: "root" });
    CountdownGlobalConfig = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"])),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [String])
    ], CountdownGlobalConfig);
    return CountdownGlobalConfig;
})();
let CountdownComponent = /*@__PURE__*/ (() => {
    let CountdownComponent = class CountdownComponent {
        constructor(locale, timer, defCog, cdr, ngZone) {
            this.locale = locale;
            this.timer = timer;
            this.defCog = defCog;
            this.cdr = cdr;
            this.ngZone = ngZone;
            this.frequency = 1000;
            this._notify = {};
            this.status = CountdownStatus.ing;
            this.isDestroy = false;
            this.i = {};
            this.left = 0;
            this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        }
        /**
         * Start countdown, you must manually call when `demand: false`
         */
        begin() {
            this.status = CountdownStatus.ing;
            this.callEvent('start');
        }
        /**
         * Restart countdown
         */
        restart() {
            if (this.status !== CountdownStatus.stop) {
                this.destroy();
            }
            this.init();
            this.callEvent('restart');
        }
        /**
         * Stop countdown, must call `restart` when stopped, it's different from pause, unable to recover
         */
        stop() {
            if (this.status === CountdownStatus.stop) {
                return;
            }
            this.status = CountdownStatus.stop;
            this.destroy();
            this.callEvent('stop');
        }
        /**
         * Pause countdown, you can use `resume` to recover again
         */
        pause() {
            if (this.status === CountdownStatus.stop || this.status === CountdownStatus.pause)
                return;
            this.status = CountdownStatus.pause;
            this.callEvent('pause');
        }
        /**
         * Resume countdown
         */
        resume() {
            if (this.status === CountdownStatus.stop || this.status !== CountdownStatus.pause)
                return;
            this.status = CountdownStatus.ing;
            this.callEvent('resume');
        }
        callEvent(action) {
            this.event.emit({ action, left: this.left, status: this.status, text: this.i.text });
        }
        init() {
            const { locale, defCog } = this;
            const config = (this.config = Object.assign({}, new CountdownGlobalConfig(locale), defCog, this.config));
            // tslint:disable-next-line: no-bitwise
            const frq = (this.frequency = ~config.format.indexOf('S') ? 100 : 1000);
            this.status = config.demand ? CountdownStatus.pause : CountdownStatus.ing;
            this.getLeft();
            // bind reflow to me
            const _reflow = this.reflow;
            this.reflow = (count = 0, force = false) => _reflow.apply(this, [count, force]);
            if (Array.isArray(config.notify)) {
                config.notify.forEach((time) => {
                    if (time < 1)
                        throw new Error(`The notify config must be a positive integer.`);
                    time = time * 1000;
                    time = time - (time % frq);
                    this._notify[time] = true;
                });
            }
            this.timer.add(this.reflow, frq).start();
            this.reflow(0, true);
        }
        destroy() {
            this.timer.remove(this.reflow);
            return this;
        }
        /**
         * 更新时钟
         */
        reflow(count = 0, force = false) {
            if (this.isDestroy)
                return;
            const { status, config, _notify } = this;
            if (!force && status !== CountdownStatus.ing)
                return;
            const value = (this.left = this.left - this.frequency * count);
            this.i = {
                value,
                text: config.formatDate({ date: value, formatStr: config.format, timezone: config.timezone }),
            };
            if (typeof config.prettyText === 'function') {
                this.i.text = config.prettyText(this.i.text);
            }
            this.cdr.detectChanges();
            if (config.notify === 0 || _notify[value]) {
                this.ngZone.run(() => {
                    this.callEvent('notify');
                });
            }
            if (value < 1) {
                this.ngZone.run(() => {
                    this.status = CountdownStatus.done;
                    this.callEvent('done');
                    this.destroy();
                });
            }
        }
        /**
         * 获取倒计时剩余帧数
         */
        getLeft() {
            const { config, frequency } = this;
            let left = config.leftTime * 1000;
            const end = config.stopTime;
            if (!left && end) {
                left = end - new Date().getTime();
            }
            this.left = left - (left % frequency);
        }
        ngOnInit() {
            this.init();
            if (!this.config.demand) {
                this.begin();
            }
        }
        ngOnDestroy() {
            this.isDestroy = true;
            this.destroy();
        }
        ngOnChanges(changes) {
            if (!changes.config.firstChange) {
                this.restart();
            }
        }
    };
    CountdownComponent.ɵfac = function CountdownComponent_Factory(t) { return new (t || CountdownComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](CountdownTimer), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](CountdownGlobalConfig), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"])); };
    CountdownComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CountdownComponent, selectors: [["countdown"]], hostVars: 2, hostBindings: function CountdownComponent_HostBindings(rf, ctx) {
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("count-down", true);
            }
        }, inputs: { config: "config", render: "render" }, outputs: { event: "event" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], decls: 2, vars: 5, consts: [[4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "innerHTML"]], template: function CountdownComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, CountdownComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CountdownComponent_ng_container_1_Template, 1, 0, "ng-container", 1);
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.render);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx.render)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](3, _c0, ctx.i));
            }
        }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgTemplateOutlet"]], encapsulation: 2, changeDetection: 0 });
    CountdownComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"])),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [String, CountdownTimer,
            CountdownGlobalConfig,
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])
    ], CountdownComponent);
    return CountdownComponent;
})();
let CountdownModule = /*@__PURE__*/ (() => {
    let CountdownModule = class CountdownModule {
    };
    CountdownModule.ɵfac = function CountdownModule_Factory(t) { return new (t || CountdownModule)(); };
    CountdownModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: CountdownModule });
    CountdownModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ providers: [CountdownTimer], imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]]] });
    return CountdownModule;
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](CountdownModule, { declarations: function () { return [CountdownComponent]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]]; }, exports: function () { return [CountdownComponent]; } }); })();
/**
 * Generated bundle index. Do not edit.
 */

//# sourceMappingURL=ngx-countdown.js.map


/***/ })

}]);