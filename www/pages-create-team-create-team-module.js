(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-create-team-create-team-module"],{

/***/ "./src/app/pages/create-team/create-team.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/create-team/create-team.module.ts ***!
  \*********************************************************/
/*! exports provided: CreateTeamPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateTeamPageModule", function() { return CreateTeamPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _create_team_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./create-team.page */ "./src/app/pages/create-team/create-team.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _create_team_page__WEBPACK_IMPORTED_MODULE_5__["CreateTeamPage"]
    }
];
var CreateTeamPageModule = /** @class */ (function () {
    function CreateTeamPageModule() {
    }
    CreateTeamPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_create_team_page__WEBPACK_IMPORTED_MODULE_5__["CreateTeamPage"]]
        })
    ], CreateTeamPageModule);
    return CreateTeamPageModule;
}());



/***/ }),

/***/ "./src/app/pages/create-team/create-team.page.html":
/*!*********************************************************!*\
  !*** ./src/app/pages/create-team/create-team.page.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-menu-button></ion-menu-button>\r\n        </ion-buttons>\r\n\r\n         <ion-buttons slot=\"end\">\r\n             <ion-back-button defaultHref=\"dashboard\"></ion-back-button>\r\n         </ion-buttons> \r\n        <ion-title>\r\n            Create Group\r\n        </ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding>\r\n <form [formGroup]=\"team_form\" (submit)=\"registerTeam(team_form.value)\">\r\n\r\n        <ion-row>\r\n            <ion-col>\r\n                <div class=\"ion-text-start\">\r\n                    <ion-item>\r\n                        <ion-label position=\"floating\" style=\"color: #ed502d;\">Name</ion-label>\r\n                        <ion-input type=\"text\" formControlName=\"name\" required></ion-input>\r\n                    </ion-item>\r\n                    <div *ngIf=\"submitted && f.name.errors\" class=\"invalid-feedback\" style=\" text-align: left;color: red;font-weight: normal; font-size: 12px;font-style: italic;\">\r\n                        <span *ngIf=\"f.name.errors.required\" style=\" text-align: left;color: red;\">Group name is required.\r\n             </span>\r\n              <span *ngIf=\"f.name.errors.pattern\" style=\" text-align: left;color: red;\">Group name is not filled up correctly.\r\n             </span>\r\n                    </div>\r\n                </div>\r\n            </ion-col>\r\n        </ion-row>  \r\n\r\n \r\n\r\n        <ion-row>\r\n            <ion-col>\r\n                <div class=\"ion-text-start\">\r\n                    <ion-item>\r\n                        <ion-label position=\"floating\" style=\"color: #ed502d;\">Coliver</ion-label> \r\n                        <ion-select multiple=\"true\" formControlName=\"users\" value=\"Select Users\" okText=\"Okay\" cancelText=\"Dismiss\" >  \r\n                            <ion-select-option *ngFor=\"let userList of usersArr\" [value]=\"userList.userId\" [disabled]=\"isDisabled(userList?.login.username)\">{{userList?.login.username}}<span *ngIf=\"isDisabled(userList?.login.username)\">(Already Selected)</span></ion-select-option>\r\n                            <ion-select-option disabled=\"true\" *ngIf=\"noUser\">No Coliver Present</ion-select-option>\r\n                        </ion-select>  \r\n                    </ion-item>\r\n            \r\n                </div>\r\n            </ion-col>\r\n        </ion-row>  \r\n\r\n        <ion-row>\r\n            <ion-col>\r\n                <div class=\"ion-text-start\">\r\n                   <div *ngIf=\"isSuccess == true\" >\r\n                      <span class=\"for-sub-name\">{{sucessArr.message}}</span>\r\n                    </div>\r\n                </div>\r\n            </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n            <ion-col>\r\n                <div class=\"ion-text-start\">\r\n                    <button class=\"submit-btn\" expand=\"block\" type=\"submit\">Create Group\r\n                    </button>\r\n                </div>\r\n            </ion-col>\r\n        </ion-row> \r\n    </form>\r\n\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/create-team/create-team.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/create-team/create-team.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NyZWF0ZS10ZWFtL2NyZWF0ZS10ZWFtLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/create-team/create-team.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/create-team/create-team.page.ts ***!
  \*******************************************************/
/*! exports provided: CreateTeamPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateTeamPage", function() { return CreateTeamPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_item_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/item.service */ "./src/app/services/item.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
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








var CreateTeamPage = /** @class */ (function () {
    function CreateTeamPage(router, http, formBuilder, itemService, alertController, loadingController) {
        this.router = router;
        this.http = http;
        this.formBuilder = formBuilder;
        this.itemService = itemService;
        this.alertController = alertController;
        this.loadingController = loadingController;
        this.base_url = "";
        this.submitted = false;
        this.fagree = false;
        this.isError = false;
        this.isSuccess = false;
        this.res = [];
        this.errorsArr = [];
        this.sucessArr = [];
        this.assignArr = [];
        this.usersArr = [];
        this.teamArr = [];
        this.teamListArr = [];
        this.noUser = false;
        this.base_url = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].base_url;
        this.team_form = this.formBuilder.group({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[A-Za-z0-9? ]+$')]),
            users: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
        });
    }
    CreateTeamPage.prototype.ngOnInit = function () {
        this.getTeamsList();
        this.userName = sessionStorage.getItem("loggedInUsername");
    };
    CreateTeamPage.prototype.getTeamsList = function () {
        var _this = this;
        var token;
        if (sessionStorage.getItem("auth_token") != undefined) {
            token = sessionStorage.getItem("auth_token");
        }
        this.presentLoading();
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpHeaders"]();
        headers = headers.set('Authorization', token);
        this.http.get(this.base_url + 'getTeam', { headers: headers }).subscribe(function (response) {
            _this.teamListArr = response.teams;
            _this.teamListArr.forEach(function (obj) {
                _this.teamArr.push(obj.teamId);
            });
            console.log(_this.teamArr);
            if (_this.teamArr.length != 0) {
                _this.onTeamSelection(_this.teamArr);
            }
            else {
                _this.noUser = true;
            }
        }, function (error) {
            console.log(error.error);
            if (error.error == 'Unauthorized') {
                localStorage.clear();
                _this.router.navigate(['/login']);
            }
        });
    };
    CreateTeamPage.prototype.onTeamSelection = function (checkedVal) {
        var _this = this;
        var postArr = { 'teamId': checkedVal };
        var token;
        if (sessionStorage.getItem("auth_token") != undefined) {
            token = sessionStorage.getItem("auth_token");
        }
        this.presentLoading();
        var httpOptions = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpHeaders"]({ 'Content-Type': 'application/json', 'authorization': token }) };
        this.http.post(this.base_url + 'team/users', postArr, httpOptions).subscribe(function (response) {
            var teamData = response.teams;
            teamData.forEach(function (obj) {
                if (!_this.usersArr.find(function (o) { return o.userId === obj.userId; })) {
                    _this.usersArr.push(obj);
                    console.log(obj.login.username);
                }
            });
        }, function (error) {
            console.log("ERROR");
            console.log(error);
            if (error.error == "Unauthorized" && error.status == 401) {
                console.log("true");
                _this.expiredMessage('Session Expired.You must login again!');
            }
        });
        console.log("Checkbox Checked");
    };
    CreateTeamPage.prototype.pushToAssignArr = function (value) {
        console.log(value);
    };
    CreateTeamPage.prototype.presentLoading = function () {
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
    Object.defineProperty(CreateTeamPage.prototype, "f", {
        get: function () { return this.team_form.controls; },
        enumerable: true,
        configurable: true
    });
    CreateTeamPage.prototype.presentAlert = function (messageC) {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Success Message!',
                            subHeader: messageC,
                            message: 'Click Okay to redirect to dashboard page and click Cancel to stay on same page.',
                            buttons: [{
                                    text: 'Cancel',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function (blah) {
                                        console.log('Confirmed Cancel: Cancelled');
                                    }
                                }, {
                                    text: 'Okay',
                                    handler: function () {
                                        _this.router.navigate(['userlist']);
                                        console.log('Confirmed Okay');
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
    CreateTeamPage.prototype.registerTeam = function (form) {
        var _this = this;
        this.submitted = true;
        console.log(this.team_form);
        if (this.team_form.invalid) {
            return;
        }
        else {
            var input_data = {
                "name": form.name,
                "userId": form.users,
            };
            console.log(input_data);
            var resArr = void 0;
            this.itemService.create_team(input_data).subscribe(function (response) {
                console.log(response);
                _this.team_form.reset();
                _this.presentAlert(response.message);
            }, function (error) {
                console.log(error);
            });
            //console.log(JSON.stringify(resArr, undefined, 2));
        }
    };
    CreateTeamPage.prototype.expiredMessage = function (msg) {
        return __awaiter(this, void 0, void 0, function () {
            var loading, _a, role, data;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            message: msg,
                            duration: 3000,
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
                        console.log('Logout Successfull!');
                        if (sessionStorage.getItem("auth_token") != undefined) {
                            sessionStorage.removeItem("auth_token");
                            sessionStorage.removeItem("loggedInUsername");
                            sessionStorage.removeItem("userQuestinaire");
                            sessionStorage.removeItem("ref_code");
                            sessionStorage.removeItem("loggedInId");
                            sessionStorage.removeItem("roleId");
                            localStorage.removeItem("auth_token");
                            localStorage.removeItem("loggedInUsername");
                            localStorage.removeItem("userQuestinaire");
                            localStorage.removeItem("ref_code");
                            localStorage.removeItem("loggedInId");
                            localStorage.removeItem("roleId");
                            this.router.navigate(['login']);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    CreateTeamPage.prototype.isDisabled = function (userName) {
        //console.log(this.userName.includes(userName));
        return this.userName.includes(userName); // note, i'm not certain if this should just be occupation.
    };
    CreateTeamPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create-team',
            template: __webpack_require__(/*! ./create-team.page.html */ "./src/app/pages/create-team/create-team.page.html"),
            styles: [__webpack_require__(/*! ./create-team.page.scss */ "./src/app/pages/create-team/create-team.page.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _services_item_service__WEBPACK_IMPORTED_MODULE_3__["ItemService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]])
    ], CreateTeamPage);
    return CreateTeamPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-create-team-create-team-module.js.map