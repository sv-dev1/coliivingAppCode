(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-settings-settings-module"],{

/***/ "./src/app/pages/settings/settings.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/settings/settings.module.ts ***!
  \***************************************************/
/*! exports provided: SettingsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPageModule", function() { return SettingsPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _settings_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./settings.page */ "./src/app/pages/settings/settings.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [{
        path: '',
        component: _settings_page__WEBPACK_IMPORTED_MODULE_5__["SettingsPage"]
    }];
var SettingsPageModule = /** @class */ (function () {
    function SettingsPageModule() {
    }
    SettingsPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_settings_page__WEBPACK_IMPORTED_MODULE_5__["SettingsPage"]]
        })
    ], SettingsPageModule);
    return SettingsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/settings/settings.page.html":
/*!***************************************************!*\
  !*** ./src/app/pages/settings/settings.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n   <ion-toolbar>\r\n      <ion-buttons slot=\"start\">\r\n         <ion-menu-button></ion-menu-button>\r\n      </ion-buttons>\r\n      <ion-buttons slot=\"end\">\r\n         <ion-back-button defaultHref=\"dashboard\"></ion-back-button>\r\n      </ion-buttons>\r\n      <ion-title>\r\n         Settings\r\n      </ion-title>\r\n   </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n   <form [formGroup]=\"setting_form\" (submit)=\"submit()\">\r\n\r\n   <ion-row>\r\n      <ion-col>\r\n         <ion-list>\r\n            <ion-item>\r\n               <ion-label>All Notifications</ion-label>\r\n               <ion-toggle  formControlName=\"notification\" checked=\"true\" color=\"danger\"></ion-toggle>\r\n            </ion-item>\r\n         </ion-list>\r\n      </ion-col>\r\n   </ion-row>\r\n   \r\n   <ion-row>\r\n      <ion-col>\r\n         <ion-list>\r\n            <ion-item>\r\n               <ion-label>Join a group notifications</ion-label>\r\n               <ion-toggle  formControlName=\"g_notification\" checked=\"true\" color=\"danger\"></ion-toggle>\r\n            </ion-item>\r\n         </ion-list>\r\n      </ion-col>\r\n   </ion-row>\r\n   \r\n   <ion-row>\r\n      <ion-col>\r\n         <ion-list>\r\n            <ion-item>\r\n               <ion-label>House chores shift notifications</ion-label>\r\n               <ion-toggle formControlName=\"hcs_notification\" checked=\"true\" color=\"danger\"></ion-toggle>\r\n            </ion-item>\r\n         </ion-list>\r\n      </ion-col>\r\n   </ion-row>\r\n   \r\n   <ion-row>\r\n      <ion-col>\r\n         <ion-list>\r\n            <ion-item>\r\n               <ion-label>Chat messages notifications</ion-label>\r\n               <ion-toggle  formControlName=\"cm_notification\" checked=\"true\" color=\"danger\"></ion-toggle>\r\n            </ion-item>\r\n         </ion-list>\r\n      </ion-col>\r\n   </ion-row>\r\n   \r\n   <ion-row>\r\n      <ion-col>\r\n         <ion-list>\r\n            <ion-item>\r\n               <ion-label>Bills notifications</ion-label>\r\n               <ion-toggle formControlName=\"b_notification\" checked=\"true\" color=\"danger\"></ion-toggle>\r\n            </ion-item>\r\n         </ion-list>\r\n      </ion-col>\r\n   </ion-row>\r\n\r\n   <ion-row>\r\n      <ion-col>\r\n         <div class=\"ion-text-start\">\r\n            <button class=\"submit-btn\" expand=\"block\" type=\"submit\">Save Changes\r\n            </button>\r\n         </div>\r\n      </ion-col>\r\n   </ion-row>\r\n   </form>\r\n  <ion-item class=\"custom\">  \r\n    <span class=\"cutm-policy\" (click)=\"redirectheapp('https://www.freeprivacypolicy.com/privacy/view/7a10aabac9e57a1b138755a444037066');\r\n\" > Terms and conditions, privacy policy and GDPR</span>\r\n    </ion-item>\r\n\r\n\r\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/settings/settings.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/settings/settings.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NldHRpbmdzL3NldHRpbmdzLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/settings/settings.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/settings/settings.page.ts ***!
  \*************************************************/
/*! exports provided: SettingsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPage", function() { return SettingsPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







var SettingsPage = /** @class */ (function () {
    function SettingsPage(router, http, formBuilder, alertController, loadingController) {
        this.router = router;
        this.http = http;
        this.formBuilder = formBuilder;
        this.alertController = alertController;
        this.loadingController = loadingController;
        this.base_url = "";
        this.submitted = false;
        this.errorsArr = [];
        this.sucessArr = [];
        this.settingsArr = [];
        this.isError = false;
        this.isSuccess = false;
        this.base_url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].base_url;
        this.setting_form = this.formBuilder.group({
            notification: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('1'),
            b_notification: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('1'),
            cm_notification: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('1'),
            g_notification: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('1'),
            hcs_notification: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('1'),
        });
        this.getUserData();
    }
    SettingsPage.prototype.ngOnInit = function () {
    };
    SettingsPage.prototype.redirectheapp = function (durl) {
        window.open(durl, '_self');
    };
    SettingsPage.prototype.getUserData = function () {
        var _this = this;
        var token;
        if (sessionStorage.getItem("auth_token") != undefined) {
            token = sessionStorage.getItem("auth_token");
        }
        this.presentLoading('');
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]();
        headers = headers.set('Authorization', token);
        this.http.get(this.base_url + 'user/profile', {
            headers: headers
        }).subscribe(function (response) {
            _this.loadingController.dismiss().then(function (a) { return console.log('dismissed'); });
            console.log(response);
            _this.settingsArr = response.users[0].setting;
            _this.setting_form.patchValue({ 'notification': _this.settingsArr.notification });
            _this.setting_form.patchValue({ 'b_notification': _this.settingsArr.b_notification });
            _this.setting_form.patchValue({ 'cm_notification': _this.settingsArr.cm_notification });
            _this.setting_form.patchValue({ 'g_notification': _this.settingsArr.g_notification });
            _this.setting_form.patchValue({ 'hcs_notification': _this.settingsArr.hcs_notification });
        });
    };
    SettingsPage.prototype.submit = function () {
        var _this = this;
        this.submitted = true;
        if (this.setting_form.value.notification == true)
            this.setting_form.value.notification = "1";
        else
            this.setting_form.value.notification = "0";
        if (this.setting_form.value.b_notification == true)
            this.setting_form.value.b_notification = "1";
        else
            this.setting_form.value.b_notification = "0";
        if (this.setting_form.value.cm_notification == true)
            this.setting_form.value.cm_notification = "1";
        else
            this.setting_form.value.cm_notification = "0";
        if (this.setting_form.value.g_notification == true)
            this.setting_form.value.g_notification = "1";
        else
            this.setting_form.value.g_notification = "0";
        if (this.setting_form.value.hcs_notification == true)
            this.setting_form.value.hcs_notification = "1";
        else
            this.setting_form.value.hcs_notification = "0";
        var input_data = {
            'notification': this.setting_form.value.notification,
            'b_notification': this.setting_form.value.b_notification,
            'cm_notification': this.setting_form.value.cm_notification,
            'g_notification': this.setting_form.value.g_notification,
            'hcs_notification': this.setting_form.value.hcs_notification,
        };
        var token;
        if (sessionStorage.getItem("auth_token") != undefined) {
            token = sessionStorage.getItem("auth_token");
        }
        this.presentLoading('Please wait....');
        var httpOptions = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'authorization': token }) };
        this.http.post(this.base_url + 'user/settings', input_data, httpOptions).subscribe(function (response) {
            console.log(response);
            _this.isSuccess = true;
            _this.sucessArr = response;
            _this.isError = false;
            _this.loadingController.dismiss();
            _this.presentLoading(response.message);
            _this.sucessArr = [];
        }, function (error) {
            console.log("ERROR");
            //console.log(error.error);
        });
    };
    SettingsPage.prototype.presentLoading = function (msg) {
        return __awaiter(this, void 0, void 0, function () {
            var loading, _a, role, data;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (msg == '')
                            msg = 'Please wait...';
                        return [4 /*yield*/, this.loadingController.create({
                                message: msg,
                                duration: 2000,
                                cssClass: 'custom-class custom-loading1'
                            })];
                    case 1:
                        loading = _b.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _b.sent();
                        return [4 /*yield*/, loading.onDidDismiss()];
                    case 3:
                        _a = _b.sent(), role = _a.role, data = _a.data;
                        return [2 /*return*/];
                }
            });
        });
    };
    SettingsPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-settings',
            template: __webpack_require__(/*! ./settings.page.html */ "./src/app/pages/settings/settings.page.html"),
            styles: [__webpack_require__(/*! ./settings.page.scss */ "./src/app/pages/settings/settings.page.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]])
    ], SettingsPage);
    return SettingsPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-settings-settings-module.js.map