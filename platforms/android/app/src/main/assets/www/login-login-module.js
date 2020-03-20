(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_5__["LoginPage"]
    }
];
var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_login_page__WEBPACK_IMPORTED_MODULE_5__["LoginPage"]]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());



/***/ }),

/***/ "./src/app/login/login.page.html":
/*!***************************************!*\
  !*** ./src/app/login/login.page.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<ion-content>\r\n <ion-row>       \r\n    <ion-col>\r\n      <div class=\"ion-text-center\"> \r\n        <ion-img src=\"assets/images/Logo-colive.png\" style=\"max-width: 170px;width: auto;text-align: center; margin: auto;\"></ion-img>   \r\n      </div>\r\n    </ion-col>\r\n  </ion-row> \r\n\r\n  <ion-row>       \r\n    <ion-col><div class=\"headd ion-text-center\">  \r\n         <h6 style=\"margin-bottom: 0; margin-top: 0;font-weight: normal;font-size: 14px;\">Login using social media to get quick access</h6></div>\r\n    </ion-col>\r\n  </ion-row>  \r\n  \r\n  <ion-row>   \r\n    <ion-col class=\"centered\">  \r\n    <button class=\"submit-btn\" expand=\"block\" (click)=\"fbLogin()\" style=\"border: none;padding: 10px 15px; margin: 30px 12px 20px 0; border-radius: 2px; background: #295dc3;color: #fff;\" ><ion-icon name=\"logo-facebook\"></ion-icon>Login</button>\r\n   <!--    <button class=\"submit-btn\" expand=\"block\" style=\"border: none;padding: 10px 15px;margin: 30px 10px 20px 0;border-radius: 2px;background: #23abff;color: #fff\"><ion-icon name=\"logo-twitter\"></ion-icon>Login</button> -->\r\n      <button class=\"submit-btn\" (click)=\"googleLogin()\" expand=\"block\" style=\"border: none;padding: 10px 15px;margin: 30px 0 20px 0;border-radius: 2px;background: #ff2b26;color: #fff;\"><ion-icon name=\"logo-google\"></ion-icon>Login</button> \r\n    </ion-col>\r\n  </ion-row> \r\n\r\n<ion-segment>  \r\n  <ion-segment-button [routerLink]=\"['/register']\"  value=\"register\">\r\n    <ion-label>Register</ion-label>\r\n  </ion-segment-button>\r\n</ion-segment>\r\n\r\n<form [formGroup]=\"login_form\" (submit)=\"login(login_form.value)\">\r\n\r\n   <ion-row>\r\n      <ion-col>\r\n        <div class=\"ion-text-start\">\r\n          <ion-item>\r\n            <ion-label position=\"floating\">Username/Email</ion-label>\r\n            <ion-input type=\"text\" formControlName=\"username\" required></ion-input>   \r\n          </ion-item>\r\n          <div *ngIf=\"submitted && f.username.errors\" class=\"invalid-feedback\" style=\"padding: 10px; left;\">\r\n             <span *ngIf=\"f.username.errors.required\" style=\" text-align: left;color: red;\">Username is required.\r\n             </span> \r\n          </div>\r\n          <div class=\"ion-text-left\" style=\"text-align: left;padding: 10px;color: red;\" *ngIf=\"isError== true && errorsArr.username\">\r\n          {{errorsArr.username}}\r\n          </div> \r\n        </div> \r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row>\r\n      <ion-col>\r\n        <div class=\"ion-text-start\">\r\n          <ion-item> \r\n            <ion-label position=\"floating\">Password</ion-label>\r\n            <ion-input type=\"password\" formControlName=\"password\" required></ion-input> \r\n          </ion-item>\r\n\r\n            <div class=\"ion-text-left\" *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\" style=\"padding: 10px;\">\r\n              <span *ngIf=\"f.password.errors.required\" style=\"text-align: left;color: red;\">Password is required.</span> \r\n            </div>\r\n            <div style=\"text-align: left;color: red;padding: 10px;\" *ngIf=\"isError== true && errorsArr.password\">{{errorsArr.password}}\r\n             </div> \r\n        </div> \r\n      </ion-col>\r\n    </ion-row>  \r\n\r\n    <ion-row> \r\n        <a  [routerLink]=\"['/forgot-password']\" class=\"forgotPassword\">Forgot Password?</a></ion-row> \r\n\r\n\r\n    <ion-row>\r\n        <ion-col>\r\n         <div class=\"ion-text-start\">\r\n              <button class=\"submit-btn\" expand=\"block\" type=\"submit\">Login</button>  \r\n         </div>\r\n        </ion-col>\r\n    </ion-row> \r\n  \r\n  </form>  \r\n    <ion-row>\r\n     <ion-col> \r\n      <div class=\"ion-text-center\"> \r\n           <a class=\"cutm-policy\" href=\"https://www.freeprivacypolicy.com/privacy/view/7a10aabac9e57a1b138755a444037066\" >Terms and conditions, privacy policy and GDPR</a>\r\n      </div>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/login/login.page.scss":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/login/login.page.ts":
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_item_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/item.service */ "./src/app/services/item.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_fcm_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/fcm-service.service */ "./src/app/services/fcm-service.service.ts");
/* harmony import */ var _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/google-plus/ngx */ "./node_modules/@ionic-native/google-plus/ngx/index.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/facebook/ngx */ "./node_modules/@ionic-native/facebook/ngx/index.js");
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









//import * as JWT from 'jwt-decode';




var LoginPage = /** @class */ (function () {
    function LoginPage(storage, router, navCtrl, formBuilder, itemService, alertController, loadingController, menuCtrl, fcm, googlePlus, afAuth, fb) {
        var _this = this;
        this.storage = storage;
        this.router = router;
        this.navCtrl = navCtrl;
        this.formBuilder = formBuilder;
        this.itemService = itemService;
        this.alertController = alertController;
        this.loadingController = loadingController;
        this.menuCtrl = menuCtrl;
        this.fcm = fcm;
        this.googlePlus = googlePlus;
        this.afAuth = afAuth;
        this.fb = fb;
        this.submitted = false;
        this.isError = false;
        this.isSuccess = false;
        this.res = [];
        this.errorsArr = [];
        this.sucessArr = [];
        this.isLoggedIn = false;
        this.users = { id: '', name: '', email: '', picture: { data: { url: '' } } };
        this.checkUserForAlreadyLoggedIn();
        // this.menuCtrl.enable(false);
        this.login_form = this.formBuilder.group({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
        fb.getLoginStatus()
            .then(function (res) {
            console.log(res.status);
            if (res.status === 'connect') {
                _this.isLoggedIn = true;
            }
            else {
                _this.isLoggedIn = false;
            }
        })
            .catch(function (e) { return console.log(e); });
    }
    LoginPage.prototype.checkUserForAlreadyLoggedIn = function () {
    };
    LoginPage.prototype.ionViewWillEnter = function () {
        this.menuCtrl.enable(false);
    };
    LoginPage.prototype.ionViewDidLeave = function () {
        this.menuCtrl.enable(true);
    };
    LoginPage.prototype.ngOnInit = function () {
        if (sessionStorage.getItem("auth_token") != undefined) {
            this.router.navigate(['dashboard']);
        }
    };
    Object.defineProperty(LoginPage.prototype, "f", {
        get: function () { return this.login_form.controls; },
        enumerable: true,
        configurable: true
    });
    LoginPage.prototype.pleaseWait = function () {
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
    LoginPage.prototype.presentLoading = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loading, _a, role, data;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            message: 'Login successfully!!!... Now you are redirected to dashboard.',
                            duration: 1000,
                            cssClass: 'custom-class custom-loading1',
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
                        console.log('Login successfully!!!');
                        this.router.navigate(['/dashboard']);
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.login = function (form) {
        var _this = this;
        this.submitted = true;
        if (this.login_form.invalid) {
            console.log('invalid');
            return;
        }
        else {
            var input_data_1 = {
                "username": form.username,
                "password": form.password,
                "token": localStorage.getItem("device_token")
            };
            console.log(input_data_1);
            this.pleaseWait();
            this.itemService.login(input_data_1).subscribe(function (response) {
                _this.loadingController.dismiss().then(function (a) { return console.log('dismissed'); });
                if (response['token']) {
                    _this.storage.set('login', input_data_1);
                    sessionStorage.setItem("auth_token", response['token']);
                    sessionStorage.setItem("loggedInId", response['userId']);
                    sessionStorage.setItem("loggedInUsername", response['username']);
                    sessionStorage.setItem("roleId", response['roleId']);
                    sessionStorage.setItem("ref_code", response['ref_code']);
                    sessionStorage.setItem("userQuestinaire", response['userQuestinaire']);
                    localStorage.setItem("auth_token", response['token']);
                    localStorage.setItem("loggedInId", response['userId']);
                    localStorage.setItem("loggedInUsername", response['username']);
                    localStorage.setItem("roleId", response['roleId']);
                    localStorage.setItem("ref_code", response['ref_code']);
                    localStorage.setItem("userQuestinaire", response['userQuestinaire']);
                    _this.isSuccess = true;
                    _this.sucessArr = response;
                    _this.isError = false;
                    _this.presentLoading();
                }
            }, function (error) {
                _this.isError = true;
                console.log("ERROR");
                console.log(error);
                _this.errorsArr = error.error;
                console.log(_this.errorsArr);
            });
        }
    };
    LoginPage.prototype.googleLogin = function () {
        var _this = this;
        console.log('googleLogin');
        this.googlePlus.login({
            'scopes': 'profile',
            'webClientId': '215704000060-cc8r1qrgtt5b7gig1eig7ci8252t1b05.apps.googleusercontent.com',
            'offline': true
        }).then(function (res) {
            _this.pleaseWait();
            console.log('good');
            console.log(res);
            firebase_app__WEBPACK_IMPORTED_MODULE_8__["auth"]().signInWithCredential(firebase_app__WEBPACK_IMPORTED_MODULE_8__["auth"].GoogleAuthProvider.credential(res.idToken))
                .then(function (success) {
                console.log("Firebase success: " + JSON.stringify(success.additionalUserInfo));
                if (success.user.emailVerified == true) {
                    console.log(success.additionalUserInfo['profile']['given_name']);
                    var input_data = {
                        "email": success.user.email,
                        "username": success.additionalUserInfo['profile']['given_name'] + success.additionalUserInfo['profile']['family_name'],
                        "password": success['additionalUserInfo']['profile']['given_name'] + "@123",
                        "password2": success['additionalUserInfo']['profile']['given_name'] + "@123",
                        "roleId": 4,
                        "goole_login": "true"
                    };
                    console.log(input_data);
                    _this.pleaseWait();
                    _this.itemService.register(input_data).subscribe(function (response) {
                        _this.loadingController.dismiss().then(function (a) { return console.log('dismissed'); });
                        var login_data = {
                            "username": success.additionalUserInfo['profile']['given_name'] + success.additionalUserInfo['profile']['family_name'],
                            "goole_login": "true"
                        };
                        console.log(login_data);
                        _this.pleaseWait();
                        _this.itemService.loginwithfb(login_data).subscribe(function (response) {
                            _this.loadingController.dismiss().then(function (a) { return console.log('dismissed'); });
                            console.log(response);
                            if (response['token']) {
                                _this.storage.set('login', login_data);
                                sessionStorage.setItem("auth_token", response['token']);
                                sessionStorage.setItem("loggedInId", response['userId']);
                                sessionStorage.setItem("loggedInUsername", response['username']);
                                sessionStorage.setItem("roleId", response['roleId']);
                                sessionStorage.setItem("ref_code", response['ref_code']);
                                sessionStorage.setItem("userQuestinaire", response['userQuestinaire']);
                                localStorage.setItem("auth_token", response['token']);
                                localStorage.setItem("loggedInId", response['userId']);
                                localStorage.setItem("loggedInUsername", response['username']);
                                localStorage.setItem("roleId", response['roleId']);
                                localStorage.setItem("ref_code", response['ref_code']);
                                localStorage.setItem("userQuestinaire", response['userQuestinaire']);
                                _this.isSuccess = true;
                                _this.sucessArr = response;
                                _this.isError = false;
                                _this.preLoading("You are directing to dashboard Page");
                            }
                        }, function (error) {
                            console.log("Login ERROR");
                            console.log(error);
                        });
                    }, function (error) {
                        _this.isError = true;
                        console.log(error.error.email);
                        if (error.error['email'] == 'This email is already linked with an existing user' || error.error['username'] == 'This username already exists') {
                            console.log("login pls");
                            var login_data_1 = {
                                "username": success.additionalUserInfo['profile']['given_name'] + success.additionalUserInfo['profile']['family_name'],
                                "goole_login": "true"
                            };
                            console.log(login_data_1);
                            _this.itemService.loginwithfb(login_data_1).subscribe(function (response) {
                                _this.loadingController.dismiss().then(function (a) { return console.log('dismissed'); });
                                console.log(response);
                                if (response['token']) {
                                    _this.storage.set('login', login_data_1);
                                    sessionStorage.setItem("auth_token", response['token']);
                                    sessionStorage.setItem("loggedInId", response['userId']);
                                    sessionStorage.setItem("loggedInUsername", response['username']);
                                    sessionStorage.setItem("roleId", response['roleId']);
                                    sessionStorage.setItem("ref_code", response['ref_code']);
                                    sessionStorage.setItem("userQuestinaire", response['userQuestinaire']);
                                    localStorage.setItem("auth_token", response['token']);
                                    localStorage.setItem("loggedInId", response['userId']);
                                    localStorage.setItem("loggedInUsername", response['username']);
                                    localStorage.setItem("roleId", response['roleId']);
                                    localStorage.setItem("ref_code", response['ref_code']);
                                    localStorage.setItem("userQuestinaire", response['userQuestinaire']);
                                    _this.isSuccess = true;
                                    _this.sucessArr = response;
                                    _this.isError = false;
                                    _this.preLoading("You are directing to dashboard Page");
                                }
                            }, function (error) {
                                console.log("Login ERROR");
                                console.log(error);
                            });
                        }
                    });
                }
            })
                .catch(function (error) { return console.log("Firebase failure: " + JSON.stringify(error)); });
        }, function (err) {
            console.log('Firebase error');
            console.log("NEw=>", err);
        });
    };
    LoginPage.prototype.preLoading = function (msg) {
        return __awaiter(this, void 0, void 0, function () {
            var loading, _a, role, data;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            message: msg,
                            duration: 4000,
                            cssClass: 'custom-class custom-loading1',
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
                        this.router.navigate(['/dashboard']);
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.fbLogin = function () {
        var _this = this;
        this.fb.login(['email'])
            .then(function (res) {
            if (res.status === 'connected') {
                _this.isLoggedIn = true;
                _this.getUserDetail(res.authResponse.userID);
            }
            else {
                _this.isLoggedIn = false;
            }
        })
            .catch(function (e) { return console.log('Error logging into Facebook', e); });
    };
    LoginPage.prototype.getUserDetail = function (userid) {
        this.fb.api('/' + userid + '/?fields=id,email,name,picture', ['public_profile'])
            .then(function (res) {
            console.log(res);
        })
            .catch(function (e) {
            console.log(e);
        });
    };
    LoginPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.page.html */ "./src/app/login/login.page.html"),
            styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/login/login.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _services_item_service__WEBPACK_IMPORTED_MODULE_3__["ItemService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"],
            _services_fcm_service_service__WEBPACK_IMPORTED_MODULE_5__["FcmService"],
            _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_6__["GooglePlus"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_9__["AngularFireAuth"], _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_10__["Facebook"]])
    ], LoginPage);
    return LoginPage;
}());



/***/ })

}]);
//# sourceMappingURL=login-login-module.js.map