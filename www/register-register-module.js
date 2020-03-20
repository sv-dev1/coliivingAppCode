(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["register-register-module"],{

/***/ "./src/app/register/register.module.ts":
/*!*********************************************!*\
  !*** ./src/app/register/register.module.ts ***!
  \*********************************************/
/*! exports provided: RegisterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register.page */ "./src/app/register/register.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_5__["RegisterPage"]
    }
];
var RegisterPageModule = /** @class */ (function () {
    function RegisterPageModule() {
    }
    RegisterPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_register_page__WEBPACK_IMPORTED_MODULE_5__["RegisterPage"]]
        })
    ], RegisterPageModule);
    return RegisterPageModule;
}());



/***/ }),

/***/ "./src/app/register/register.page.html":
/*!*********************************************!*\
  !*** ./src/app/register/register.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\r\n   <ion-row>\r\n      <ion-col>\r\n         <div class=\"ion-text-center\">\r\n            <ion-img src=\"assets/images/Logo-colive.png\" style=\"max-width: 170px;width: auto;text-align: center; margin: auto;\"></ion-img>\r\n         </div>\r\n      </ion-col>\r\n   </ion-row>\r\n   <ion-row>\r\n      <ion-col>\r\n         <div class=\"headd ion-text-center\">\r\n            <h6 style=\"margin-bottom: 0; margin-top: 0;font-weight: normal;font-size: 14px;\">Login using social media to get quick access</h6>\r\n         </div>\r\n      </ion-col>\r\n   </ion-row>\r\n   <ion-row>\r\n      <ion-col class=\"centered\">\r\n         <button class=\"submit-btn\" expand=\"block\" style=\"border: none;padding: 10px 15px; margin: 30px 12px 20px 0; border-radius: 2px; background: #295dc3;color: #fff;\" >\r\n            <ion-icon name=\"logo-facebook\"></ion-icon>\r\n            Login\r\n         </button>\r\n         <button class=\"submit-btn\" expand=\"block\" style=\"border: none;padding: 10px 15px;margin: 30px 0 20px 0;border-radius: 2px;background: #ff2b26;color: #fff;\">\r\n            <ion-icon name=\"logo-google\"></ion-icon>\r\n            Login\r\n         </button>\r\n      </ion-col>\r\n   </ion-row>\r\n   <ion-segment>\r\n      <ion-segment-button [routerLink]=\"['/login']\" value=\"login\">\r\n         <ion-label>Login</ion-label>\r\n      </ion-segment-button>\r\n   </ion-segment>\r\n   <form [formGroup]=\"register_form\" (submit)=\"register(register_form.value)\">\r\n   <ion-row>\r\n      <ion-col>\r\n         <div class=\"ion-text-start\">\r\n            <ion-item>\r\n               <ion-label color=\"primary\" position=\"floating\">Username</ion-label>\r\n               <ion-input type=\"text\" formControlName=\"username\" required></ion-input>\r\n            </ion-item>\r\n            <div *ngIf=\"submitted && f.username.errors\" class=\"invalid-feedback\" style=\"padding: 10px; left;\">\r\n               <span *ngIf=\"f.username.errors.required\" style=\" text-align: left;color: red;\">This field is required.\r\n               </span> \r\n            </div>\r\n            <div  class=\"ion-text-left\" style=\"text-align: left;color: red;padding: 10px;\" *ngIf=\"isError== true && errorsArr.username\">{{errorsArr.username}}</div>\r\n         </div>\r\n      </ion-col>\r\n   </ion-row>\r\n   <ion-row>\r\n      <ion-col>\r\n         <div class=\"ion-text-start\">\r\n            <ion-item>\r\n               <ion-label color=\"primary\" position=\"floating\">Email</ion-label>\r\n               <ion-input type=\"email\" formControlName=\"email\" required minlength=\"6\"></ion-input>\r\n            </ion-item>\r\n            <div *ngIf=\"submitted && f.email.errors\" class=\"invalid-feedback\" style=\"padding: 10px; left;\">\r\n               <span *ngIf=\"f.email.errors.required\" style=\" text-align: left;color: red;\">This field is required.\r\n               </span>  \r\n               <span *ngIf=\"f.email.errors.email\" style=\" text-align: left;color: red;\">Please check your email.\r\n               </span> \r\n            </div>\r\n            <div  class=\"ion-text-left\" style=\"text-align: left;color: red;padding: 10px;\" *ngIf=\"isError== true && errorsArr.email\">{{errorsArr.email}}</div>\r\n         </div>\r\n      </ion-col>\r\n   </ion-row>\r\n   <ion-row>\r\n      <ion-col>\r\n         <div class=\"ion-text-start\">\r\n            <ion-item>\r\n               <ion-label color=\"primary\" position=\"floating\">Password</ion-label>\r\n               <ion-input type=\"password\" formControlName=\"password\" minlength=\"6\" required></ion-input>\r\n            </ion-item>\r\n            <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\" style=\"padding: 10px; left;\">\r\n               <span *ngIf=\"f.password.errors.required\" style=\" text-align: left;color: red;\">This field is required.\r\n               </span> \r\n               <span *ngIf=\"f.password.errors.minlength\" style=\" text-align: left;color: red;\">Minimum length for password field is 6 .\r\n               </span> \r\n            </div>\r\n            <div  class=\"ion-text-left\" style=\"text-align: left;color: red;padding: 10px;\" *ngIf=\"isError== true && errorsArr.password\">{{errorsArr.password}}</div>\r\n         </div>\r\n      </ion-col>\r\n   </ion-row>\r\n   <ion-row>\r\n      <ion-col>\r\n         <div class=\"ion-text-start\">\r\n            <ion-item>\r\n               <ion-label color=\"primary\" position=\"floating\">Confirm Password</ion-label>\r\n               <ion-input type=\"password\" formControlName=\"confirm_password\" required></ion-input>\r\n            </ion-item>\r\n            <div *ngIf=\"submitted && f.confirm_password.errors\" class=\"invalid-feedback\" style=\"padding: 10px; left;\">\r\n               <span *ngIf=\"f.confirm_password.errors.required\" style=\" text-align: left;color: red;\">This field is required.\r\n               </span> \r\n            </div>\r\n            <div *ngIf=\"submitted && f.confirm_password.errors\" class=\"invalid-feedback\" style=\"padding: 10px; left;\">\r\n               <span *ngIf=\"f.confirm_password.errors.mustMatch\" style=\" text-align: left;color: red;\">Password confirm field must match with password.\r\n               </span> \r\n            </div>\r\n            <div  class=\"ion-text-left\" style=\"text-align: left;color: red;padding: 10px;\" *ngIf=\"isError== true && errorsArr.password2\">{{errorsArr.password2}}</div>\r\n         </div>\r\n      </ion-col>\r\n   </ion-row>\r\n   <ion-row>\r\n      <ion-col>\r\n         <div class=\"ion-text-start\">\r\n            <ion-item>\r\n               <ion-label color=\"primary\" position=\"floating\">User Type</ion-label>\r\n               <ion-select formControlName=\"roleId\" value=\"Select User Type\" okText=\"Okay\" cancelText=\"Dismiss\" required>\r\n                  <ion-select-option value=\"4\">Tenant</ion-select-option>\r\n                  <ion-select-option value=\"3\">Landlord</ion-select-option>\r\n               </ion-select>\r\n            </ion-item>\r\n            <div *ngIf=\"submitted && f.roleId.errors\" class=\"invalid-feedback\" style=\"padding: 10px; left;\">\r\n               <span *ngIf=\"f.roleId.errors.required\" style=\" text-align: left;color: red;\">This field is required.\r\n               </span> \r\n            </div>\r\n            <div  class=\"ion-text-left\" style=\"text-align: left;color: red;padding: 10px;\" *ngIf=\"isError== true && errorsArr.password2\">{{errorsArr.password2}}</div>\r\n         </div>\r\n      </ion-col>\r\n   </ion-row>\r\n   <ion-row>\r\n      <ion-col>\r\n         <div class=\"ion-text-start\">\r\n            <ion-item>\r\n               <ion-checkbox formControlName=\"agree\" color=\"primary\" checked=\"false\" required></ion-checkbox>\r\n               <ion-label style=\"padding-left: 5px; display: flex;\"> I agree to the privacy policy and terms of service.</ion-label>\r\n            </ion-item>\r\n            <div *ngIf=\"submitted && f.agree.errors\" class=\"invalid-feedback\" style=\"padding: 10px; left;\">\r\n               <span *ngIf=\"f.agree.errors.required || f.agree == undefined\" style=\" text-align: left;color: red;\">This field is required.\r\n               </span>\r\n            </div>\r\n         </div>\r\n      </ion-col>\r\n   </ion-row>\r\n   <ion-row>\r\n      <ion-col>\r\n         <div class=\"ion-text-start\">\r\n            <button class=\"submit-btn\" expand=\"block\" type=\"submit\">Register\r\n            </button>\r\n         </div>\r\n      </ion-col>\r\n   </ion-row>\r\n   </form> \r\n   <ion-row>\r\n      <ion-col>\r\n         <div class=\"ion-text-center\"> \r\n            <a class=\"cutm-policy\" href=\"https://www.freeprivacypolicy.com/privacy/view/7a10aabac9e57a1b138755a444037066\" >Terms and conditions, privacy policy and GDPR</a>\r\n         </div>\r\n      </ion-col>\r\n   </ion-row>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/register/register.page.scss":
/*!*********************************************!*\
  !*** ./src/app/register/register.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/register/register.page.ts":
/*!*******************************************!*\
  !*** ./src/app/register/register.page.ts ***!
  \*******************************************/
/*! exports provided: RegisterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPage", function() { return RegisterPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_item_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/item.service */ "./src/app/services/item.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _helpers_must_match_validator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../helpers/must-match.validator */ "./src/app/helpers/must-match.validator.ts");
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








var RegisterPage = /** @class */ (function () {
    function RegisterPage(router, formBuilder, itemService, alertController, loadingController, menuCtrl) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.itemService = itemService;
        this.alertController = alertController;
        this.loadingController = loadingController;
        this.menuCtrl = menuCtrl;
        this.submitted = false;
        this.fagree = false;
        this.isError = false;
        this.isSuccess = false;
        this.res = [];
        this.errorsArr = [];
        this.sucessArr = [];
        this.register_form = this.formBuilder.group({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            confirm_password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            roleId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            agree: ['false', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].requiredTrue]
        }, {
            validator: Object(_helpers_must_match_validator__WEBPACK_IMPORTED_MODULE_5__["MustMatch"])('password', 'confirm_password')
        });
    }
    /* ionViewWillEnter() {
       this.menuCtrl.enable(false);
    }
    ionViewDidLeave() {
       this.menuCtrl.enable(true);
    } */
    RegisterPage.prototype.presentAlert = function () {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Alert',
                            subHeader: 'User register successfully.',
                            message: 'Now you are redirected to dashboard.',
                            buttons: ['OK']
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    RegisterPage.prototype.presentLoading = function (msg) {
        return __awaiter(this, void 0, void 0, function () {
            var loading, _a, role, data;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            message: msg,
                            duration: 4000,
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
                        this.router.navigate(['/login']);
                        return [2 /*return*/];
                }
            });
        });
    };
    RegisterPage.prototype.ngOnInit = function () {
    };
    Object.defineProperty(RegisterPage.prototype, "f", {
        get: function () { return this.register_form.controls; },
        enumerable: true,
        configurable: true
    });
    RegisterPage.prototype.pleaseWait = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loading, _a, role, data;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            message: 'Please wait...',
                            duration: 10000,
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
    RegisterPage.prototype.register = function (form) {
        var _this = this;
        this.submitted = true;
        console.log(this.register_form.controls);
        if (this.register_form.invalid) {
            return;
        }
        else {
            var input_data = {
                "email": form.email,
                "username": form.username,
                "password": form.password,
                "password2": form.confirm_password,
                "roleId": form.roleId,
            };
            console.log(input_data);
            this.pleaseWait();
            this.itemService.register(input_data).subscribe(function (response) {
                _this.loadingController.dismiss().then(function (a) { return console.log('dismissed'); });
                _this.presentLoading(response['message']);
                // this.register_form.reset();
            }, function (error) {
                _this.isError = true;
                console.log("ERROR");
                console.log(error.error);
                _this.errorsArr = error.error;
            });
        }
    };
    RegisterPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.page.html */ "./src/app/register/register.page.html"),
            styles: [__webpack_require__(/*! ./register.page.scss */ "./src/app/register/register.page.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _services_item_service__WEBPACK_IMPORTED_MODULE_3__["ItemService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"]])
    ], RegisterPage);
    return RegisterPage;
}());



/***/ })

}]);
//# sourceMappingURL=register-register-module.js.map