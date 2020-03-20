(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-add-member-to-team-add-member-to-team-module"],{

/***/ "./src/app/pages/add-member-to-team/add-member-to-team.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/add-member-to-team/add-member-to-team.module.ts ***!
  \***********************************************************************/
/*! exports provided: AddMemberToTeamPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddMemberToTeamPageModule", function() { return AddMemberToTeamPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _add_member_to_team_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-member-to-team.page */ "./src/app/pages/add-member-to-team/add-member-to-team.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _add_member_to_team_page__WEBPACK_IMPORTED_MODULE_5__["AddMemberToTeamPage"]
    }
];
var AddMemberToTeamPageModule = /** @class */ (function () {
    function AddMemberToTeamPageModule() {
    }
    AddMemberToTeamPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_add_member_to_team_page__WEBPACK_IMPORTED_MODULE_5__["AddMemberToTeamPage"]]
        })
    ], AddMemberToTeamPageModule);
    return AddMemberToTeamPageModule;
}());



/***/ }),

/***/ "./src/app/pages/add-member-to-team/add-member-to-team.page.html":
/*!***********************************************************************!*\
  !*** ./src/app/pages/add-member-to-team/add-member-to-team.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-menu-button></ion-menu-button>\r\n        </ion-buttons>\r\n\r\n         <ion-buttons slot=\"end\">\r\n             <ion-back-button defaultHref=\"teams\"></ion-back-button>\r\n         </ion-buttons> \r\n        <ion-title>\r\n            Add member to group.\r\n        </ion-title>\r\n    </ion-toolbar>\r\n</ion-header> \r\n\r\n<ion-content padding> \r\n <ion-searchbar type=\"text\" debounce=\"500\" (ionInput)=\"filter($event)\"></ion-searchbar>\r\n\r\n <ion-list>\r\n  <ion-item *ngFor=\"let user of dataArr\" (click)=\"addToTeam(user)\">\r\n    {{ user.firstName }}  ( {{user.phoneNo}} )\r\n    <ion-buttons slot=\"end\">\r\n             <ion-icon  name=\"add-circle\" style=\"color: #ed502d;\"></ion-icon>\r\n         </ion-buttons> \r\n  </ion-item>\r\n</ion-list>\r\n\r\n\r\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/add-member-to-team/add-member-to-team.page.scss":
/*!***********************************************************************!*\
  !*** ./src/app/pages/add-member-to-team/add-member-to-team.page.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FkZC1tZW1iZXItdG8tdGVhbS9hZGQtbWVtYmVyLXRvLXRlYW0ucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/add-member-to-team/add-member-to-team.page.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/add-member-to-team/add-member-to-team.page.ts ***!
  \*********************************************************************/
/*! exports provided: AddMemberToTeamPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddMemberToTeamPage", function() { return AddMemberToTeamPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_item_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/item.service */ "./src/app/services/item.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
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







var AddMemberToTeamPage = /** @class */ (function () {
    function AddMemberToTeamPage(route, http, itemService, alertController, loadingController) {
        var _this = this;
        this.route = route;
        this.http = http;
        this.itemService = itemService;
        this.alertController = alertController;
        this.loadingController = loadingController;
        this.base_url = "";
        this.isItemAvailable = false;
        this.isItemAvailable = false;
        this.base_url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url;
        this.route.queryParams.subscribe(function (params) {
            console.log(params);
            _this.teamId = params['teamId'];
        });
    }
    AddMemberToTeamPage.prototype.ngOnInit = function () {
        this.getUsersList();
    };
    AddMemberToTeamPage.prototype.getUsersList = function () {
        var _this = this;
        console.log('All users gets list out under this function');
        var token;
        if (sessionStorage.getItem("auth_token") != undefined) {
            token = sessionStorage.getItem("auth_token");
        }
        this.presentLoading();
        //const httpOptions = { headers: new HttpHeaders({'authorization': token })};
        console.log(token);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]();
        headers = headers.set('Authorization', token);
        this.http.get(this.base_url + 'users', { headers: headers }).subscribe(function (response) {
            _this.usersArr = response.users;
            _this.dataArr = response.users;
            _this.loadingController.dismiss().then(function (a) { return console.log('dismissed'); });
        }, function (error) {
            console.log("ERROR");
            console.log(error.error);
            _this.loadingController.dismiss().then(function (a) { return console.log('dismissed'); });
        });
    };
    AddMemberToTeamPage.prototype.filter = function (ev) {
        console.log('Excecute filter');
        var val = ev.target.value;
        if (val) { //item.toLowerCase().indexOf(val.toLowerCase()) > -1
            this.bookFilteredList = this.usersArr.filter(function (book) { return book.firstName.toLowerCase().indexOf(val.toLowerCase()) > -1 || book.phoneNo.toLowerCase().indexOf(val.toLowerCase()) > -1; });
            this.bookList = this.bookFilteredList;
            console.log(this.bookFilteredList);
            this.dataArr = this.bookFilteredList;
        }
        else {
            console.log("working in else");
            this.dataArr = this.usersArr;
        }
    };
    AddMemberToTeamPage.prototype.addToTeam = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.addMemberToTeam(user);
                return [2 /*return*/];
            });
        });
    };
    AddMemberToTeamPage.prototype.presentLoading = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loading, _a, role, data;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            duration: 2000,
                            cssClass: 'custom-class custom-loading'
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
    AddMemberToTeamPage.prototype.customMessageWithLoading = function (Message) {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Confirm!',
                            message: Message,
                            buttons: [
                                {
                                    text: 'Cancel',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function (blah) {
                                        console.log('Confirm Cancel: Cancelled');
                                    }
                                }, {
                                    text: 'Okay',
                                    handler: function () {
                                        console.log('Confirm Okay: Okay');
                                    }
                                }
                            ]
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
    AddMemberToTeamPage.prototype.goForAdd = function (user) {
        var _this = this;
        console.log(user);
        var input_data = {
            "teamId": this.teamId,
            "userId": user.userId,
        };
        var token;
        if (sessionStorage.getItem("auth_token") != undefined) {
            token = sessionStorage.getItem("auth_token");
        }
        this.presentLoading();
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]();
        headers = headers.set('Authorization', token);
        this.http.post(this.base_url + 'team/user', input_data, { headers: headers }).subscribe(function (response) {
            console.log(response);
            _this.loadingController.dismiss().then(function (a) { return console.log('dismissed'); });
            _this.customMessageWithLoading(response.message);
        }, function (error) {
            console.log("ERROR");
            console.log(error);
            console.log(error.error);
            _this.loadingController.dismiss().then(function (a) { return console.log('dismissed'); });
            _this.customMessageWithLoading(error.error.checkAlreadyExist);
        });
    };
    AddMemberToTeamPage.prototype.addMemberToTeam = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Confirm!',
                            message: 'Are you <strong>sure</strong>!!! To add this user to current team.',
                            buttons: [
                                {
                                    text: 'Cancel',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function (blah) {
                                        console.log('Confirm Cancel: Cancelled');
                                    }
                                }, {
                                    text: 'Okay',
                                    handler: function () {
                                        _this.goForAdd(user);
                                    }
                                }
                            ]
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
    AddMemberToTeamPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-member-to-team',
            template: __webpack_require__(/*! ./add-member-to-team.page.html */ "./src/app/pages/add-member-to-team/add-member-to-team.page.html"),
            styles: [__webpack_require__(/*! ./add-member-to-team.page.scss */ "./src/app/pages/add-member-to-team/add-member-to-team.page.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"],
            _services_item_service__WEBPACK_IMPORTED_MODULE_2__["ItemService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]])
    ], AddMemberToTeamPage);
    return AddMemberToTeamPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-add-member-to-team-add-member-to-team-module.js.map