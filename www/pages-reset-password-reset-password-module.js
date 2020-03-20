(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-reset-password-reset-password-module"],{

/***/ "./src/app/pages/reset-password/reset-password.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/reset-password/reset-password.module.ts ***!
  \***************************************************************/
/*! exports provided: ResetPasswordPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordPageModule", function() { return ResetPasswordPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _reset_password_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reset-password.page */ "./src/app/pages/reset-password/reset-password.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _reset_password_page__WEBPACK_IMPORTED_MODULE_5__["ResetPasswordPage"]
    }
];
var ResetPasswordPageModule = /** @class */ (function () {
    function ResetPasswordPageModule() {
    }
    ResetPasswordPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_reset_password_page__WEBPACK_IMPORTED_MODULE_5__["ResetPasswordPage"]]
        })
    ], ResetPasswordPageModule);
    return ResetPasswordPageModule;
}());



/***/ }),

/***/ "./src/app/pages/reset-password/reset-password.page.html":
/*!***************************************************************!*\
  !*** ./src/app/pages/reset-password/reset-password.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n   <ion-toolbar>\n      <ion-buttons slot=\"start\">\n         <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n      <ion-buttons slot=\"end\">\n         <ion-back-button defaultHref=\"dashboard\"></ion-back-button>\n      </ion-buttons>\n      <ion-title>\n         Reset Password\n      </ion-title>\n   </ion-toolbar>\n</ion-header>\n<ion-content padding>\n   <form [formGroup]=\"reset_pass\" (submit)=\"reset()\">\n   <ion-row>\n      <ion-col>\n         <div class=\"ion-text-start\">\n         <ion-item>\n            <ion-label style=\"color: #ed502d;\" position=\"floating\">Current Password</ion-label>\n            <ion-input type=\"text\" formControlName=\"cuPass\"></ion-input>\n         </ion-item>\n         <div *ngIf=\"submitted && f.cuPass.errors\" class=\"invalid-feedback\" style=\"padding: 10px; left;\">\n            <span *ngIf=\"f.cuPass.errors.required\" style=\" text-align: left;color: red;\">This field is required.\n            </span> \n\n         </div>\n        <div  class=\"ion-text-left\" style=\"text-align: left;color: red;padding: 10px;\" *ngIf=\"isError== true && errorsArr.password\">{{errorsArr.password}}</div>  \n      </div>\n      </ion-col>\n   </ion-row>\n   <ion-row>\n      <ion-col>\n         <div class=\"ion-text-start\">\n         <ion-item>\n            <ion-label style=\"color: #ed502d;\" position=\"floating\">New Password</ion-label>\n            <ion-input type=\"text\" formControlName=\"pwd\"></ion-input>\n         </ion-item>\n         <div *ngIf=\"submitted && f.pwd.errors\"  style=\"padding: 10px; left;\">\n            <span *ngIf=\"f.pwd.errors.required\" style=\" text-align: left;color: red;\">This field is required.\n            </span> \n           \n             <span *ngIf=\"f.pwd.errors.minlength\" style=\" text-align: left;color: red;\">Minimum length for password field is 6 .\n             </span> \n         </div>\n      </div>\n      </ion-col>\n   </ion-row>\n   <ion-row>\n      <ion-col>\n         <div class=\"ion-text-start\">\n         <ion-item>\n            <ion-label style=\"color: #ed502d;\" position=\"floating\">Confirm Password</ion-label>\n            <ion-input type=\"text\" formControlName=\"confPwd\"></ion-input>\n         </ion-item>\n         <div *ngIf=\"submitted && f.confPwd.errors\"  style=\"padding: 10px; left;\">\n            <span *ngIf=\"f.confPwd.errors.required\" style=\" text-align: left;color: red;\">This field is required.\n            </span> \n <span *ngIf=\"f.confPwd.errors.minlength\" style=\" text-align: left;color: red;\">Minimum length for password field is 6 .\n             </span>          </div>\n          <div *ngIf=\"submitted && f.confPwd.errors\" class=\"invalid-feedback\" style=\"padding: 10px; left;\">\n             <span *ngIf=\"f.confPwd.errors.mustMatch\" style=\" text-align: left;color: red;\">Password confirm field must match with password.\n             </span> \n          </div>\n      </div>\n      </ion-col>\n   </ion-row>\n   <ion-row>\n      <ion-col>\n         <div class=\"ion-text-start\">\n            <button class=\"submit-btn\" expand=\"block\" type=\"submit\">Update\n            </button>\n         </div>\n      </ion-col>\n   </ion-row>\n   </form>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/reset-password/reset-password.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/reset-password/reset-password.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Jlc2V0LXBhc3N3b3JkL3Jlc2V0LXBhc3N3b3JkLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/reset-password/reset-password.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/reset-password/reset-password.page.ts ***!
  \*************************************************************/
/*! exports provided: ResetPasswordPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordPage", function() { return ResetPasswordPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _services_item_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/item.service */ "./src/app/services/item.service.ts");
/* harmony import */ var _helpers_must_match_validator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../helpers/must-match.validator */ "./src/app/helpers/must-match.validator.ts");
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









var ResetPasswordPage = /** @class */ (function () {
    function ResetPasswordPage(formBuilder, route, alertController, loadingController, http, router, itemService) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.alertController = alertController;
        this.loadingController = loadingController;
        this.http = http;
        this.router = router;
        this.itemService = itemService;
        this.base_url = "";
        this.submitted = false;
        this.isError = false;
        this.errorsArr = [];
        this.reset_pass = this.formBuilder.group({
            cuPass: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            pwd: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6)]),
            confPwd: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6)]),
        }, {
            validator: Object(_helpers_must_match_validator__WEBPACK_IMPORTED_MODULE_7__["MustMatch"])('pwd', 'confPwd')
        });
        this.base_url = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].base_url;
    }
    ResetPasswordPage.prototype.ngOnInit = function () {
        this.userId = sessionStorage.getItem("loggedInId");
    };
    Object.defineProperty(ResetPasswordPage.prototype, "f", {
        get: function () {
            return this.reset_pass.controls;
        },
        enumerable: true,
        configurable: true
    });
    ResetPasswordPage.prototype.reset = function () {
        var _this = this;
        this.submitted = true;
        if (this.reset_pass.invalid) {
            return;
        }
        else {
            var input = {
                "password": this.reset_pass.value.cuPass,
                "newPassword": this.reset_pass.value.pwd,
                "newPassword2": this.reset_pass.value.confPwd,
            };
            console.log(input);
            this.itemService.changePassword(input).subscribe(function (response) {
                _this.presentAlert(response['message']);
                //  console.log(response);
            }, function (error) {
                _this.isError = true;
                console.log(error.error);
                _this.errorsArr = error.error;
            });
        }
    };
    ResetPasswordPage.prototype.presentLoading = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loading, _a, role, data;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            duration: 2000,
                            cssClass: 'custom-class custom-loading',
                            spinner: null
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
    ResetPasswordPage.prototype.presentAlert = function (message) {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Success Message!',
                            subHeader: "Done!",
                            message: message,
                            buttons: [{
                                    text: 'Okay',
                                    handler: function () {
                                        console.log('Confirmed Okay');
                                        _this.router.navigate(['dashboard']);
                                    }
                                }]
                        })];
                    case 1:
                        alert = _a.sent();
                        alert.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    ResetPasswordPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-reset-password',
            template: __webpack_require__(/*! ./reset-password.page.html */ "./src/app/pages/reset-password/reset-password.page.html"),
            styles: [__webpack_require__(/*! ./reset-password.page.scss */ "./src/app/pages/reset-password/reset-password.page.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_item_service__WEBPACK_IMPORTED_MODULE_6__["ItemService"]])
    ], ResetPasswordPage);
    return ResetPasswordPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-reset-password-reset-password-module.js.map