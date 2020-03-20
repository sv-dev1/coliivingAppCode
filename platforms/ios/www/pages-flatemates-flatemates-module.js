(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-flatemates-flatemates-module"],{

/***/ "./src/app/pages/flatemates/flatemates.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/flatemates/flatemates.module.ts ***!
  \*******************************************************/
/*! exports provided: FlatematesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlatematesPageModule", function() { return FlatematesPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _flatemates_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./flatemates.page */ "./src/app/pages/flatemates/flatemates.page.ts");
/* harmony import */ var ngx_accordion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-accordion */ "./node_modules/ngx-accordion/index.js");
/* harmony import */ var ngx_accordion__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ngx_accordion__WEBPACK_IMPORTED_MODULE_6__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '',
        component: _flatemates_page__WEBPACK_IMPORTED_MODULE_5__["FlatematesPage"]
    }
];
var FlatematesPageModule = /** @class */ (function () {
    function FlatematesPageModule() {
    }
    FlatematesPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes), ngx_accordion__WEBPACK_IMPORTED_MODULE_6__["AccordionModule"]
            ],
            declarations: [_flatemates_page__WEBPACK_IMPORTED_MODULE_5__["FlatematesPage"]]
        })
    ], FlatematesPageModule);
    return FlatematesPageModule;
}());



/***/ }),

/***/ "./src/app/pages/flatemates/flatemates.page.html":
/*!*******************************************************!*\
  !*** ./src/app/pages/flatemates/flatemates.page.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n   <ion-toolbar>\r\n      <ion-buttons slot=\"start\">\r\n         <ion-menu-button></ion-menu-button>\r\n      </ion-buttons>\r\n      <ion-buttons slot=\"end\">\r\n         <ion-back-button defaultHref=\"dashboard\"></ion-back-button>\r\n      </ion-buttons>\r\n      <ion-title>Flatemates Issues</ion-title>\r\n   </ion-toolbar>\r\n</ion-header>\r\n<ion-content fullscreen class=\"border\">\r\n   <ion-row>\r\n      <ion-col>\r\n         <button [routerLink]=\"['/add-issues']\" class=\"billList-class\">\r\n            Add Issues  \r\n            <ion-icon ios=\"ios-add-circle\" md=\"md-add-circle\" style=\"margin-top: 2px;\"></ion-icon>\r\n         </button>\r\n      </ion-col>\r\n   </ion-row>\r\n   <ion-row *ngIf=\"issuesArr?.length != 0\">\r\n      <ion-col>\r\n         <span> \r\n             <small>Click on issue to start thread.</small>\r\n          </span>\r\n      </ion-col>\r\n\r\n   </ion-row>\r\n   <ion-card *ngFor=\"let issue of issuesArr\" [routerLink]=\"['/issue-thread']\"  [queryParams]=\"{issueId: issue.issueId}\"> \r\n   <img src=\"https://apitx.kindlebit.com/uploads/{{issue.issueId}}\" onError=\"src='assets/images/Logo-colive.png'\" class=\"profile-img\" />\r\n   <ion-card-header>\r\n      <!-- <ion-card-subtitle>{{issue.title}}</ion-card-subtitle> -->\r\n      <ion-card-title>{{issue.flatemateIssue?.title}}\r\n            <span *ngIf=\"logId === issue.flatemateIssue?.userId\">\r\n               <ion-buttons (click)=\"removeIssue(issue.issueId)\" class=\"listingButton\">\r\n                  <ion-icon name=\"trash\"></ion-icon>\r\n                  Delete\r\n               </ion-buttons>\r\n            </span>\r\n      </ion-card-title>\r\n       \r\n   </ion-card-header>\r\n   <ion-card-content>\r\n          <span>Against {{issue.userProfile?.firstName}}</span>  <span *ngIf=\"issue.userProfile?.firstName == ''\"> {{issue.userProfile?.email}}</span><br/>  {{issue.flatemateIssue?.desc}}\r\n      \r\n   </ion-card-content>\r\n   </ion-card>\r\n   <ion-card>\r\n        <ion-item *ngIf=\"issuesArr?.length == 0\">\r\n              <ion-label style=\"font-size:18px;\">No issues uploaded</ion-label>\r\n      </ion-item>\r\n   </ion-card>\r\n  \r\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/flatemates/flatemates.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/flatemates/flatemates.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ZsYXRlbWF0ZXMvZmxhdGVtYXRlcy5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/flatemates/flatemates.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/flatemates/flatemates.page.ts ***!
  \*****************************************************/
/*! exports provided: FlatematesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlatematesPage", function() { return FlatematesPage; });
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







var FlatematesPage = /** @class */ (function () {
    function FlatematesPage(route, router, http, itemService, alertController, loadingController, popoverController, modalController) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.http = http;
        this.itemService = itemService;
        this.alertController = alertController;
        this.loadingController = loadingController;
        this.popoverController = popoverController;
        this.modalController = modalController;
        this.issuesArr = [];
        this.base_url = "";
        this.teamId = "";
        this.message = "";
        this.sucessArr = [];
        this.isSuccess = true;
        this.isError = false;
        this.logId = "";
        this.base_url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url;
        this.message = '';
        this.route.queryParams.subscribe(function (params) {
            _this.teamId = params['teamId'];
        });
    }
    FlatematesPage.prototype.ngOnInit = function () {
        this.logId = sessionStorage.getItem("loggedInId");
        this.loadIssues();
    };
    FlatematesPage.prototype.loadIssues = function () {
        var _this = this;
        var token;
        if (sessionStorage.getItem("auth_token") != undefined) {
            token = sessionStorage.getItem("auth_token");
            console.log(token);
        }
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]();
        headers = headers.set('Authorization', token);
        this.pleaseWait();
        this.http.get(this.base_url + 'team/issues/' + this.teamId, { headers: headers }).subscribe(function (response) {
            _this.loadingController.dismiss();
            _this.issuesArr = response.issues;
            console.log(_this.issuesArr);
        }, function (error) {
            console.log("ERROR");
            console.log(error.error);
        });
    };
    FlatematesPage.prototype.pleaseWait = function () {
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
    FlatematesPage.prototype.removeIssue = function (issueId) {
        this.confirmDelete(issueId);
    };
    FlatematesPage.prototype.confirmDelete = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Confirm!',
                            message: 'You really want to delete issue?',
                            buttons: [
                                {
                                    text: 'Cancel',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function (blah) {
                                        console.log('Confirm Cancel: blah');
                                    }
                                }, {
                                    text: 'Okay',
                                    handler: function () {
                                        _this.deleteIssue(id);
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
    FlatematesPage.prototype.deleteIssue = function (issueId) {
        var _this = this;
        if (issueId) {
            var token = void 0;
            if (sessionStorage.getItem("auth_token") != undefined) {
                token = sessionStorage.getItem("auth_token");
                console.log(token);
            }
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]();
            headers = headers.set('Authorization', token);
            this.http.delete(this.base_url + 'issues/remove/' + issueId, { headers: headers }).subscribe(function (response) {
                console.log(response);
                _this.isSuccess = true;
                _this.sucessArr = response;
                _this.isError = false;
                _this.loadingController.dismiss().then(function (a) { return console.log('dismissed'); });
                /*this.presentLoadingCustom(response.message); */
                _this.popoverController.dismiss();
                _this.presentAlert(response.message);
                _this.sucessArr = [];
            }, function (error) {
                console.log(error.error);
            });
        }
    };
    FlatematesPage.prototype.presentAlert = function (message) {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: ' Message!',
                            subHeader: message,
                            message: 'Click Okay to redirect to groups bill listing and click Cancel to stay on same page.',
                            buttons: [{
                                    text: 'Cancel',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function (blah) {
                                        console.log('Confirmed Cancel: blah');
                                    }
                                }, {
                                    text: 'Okay',
                                    handler: function () {
                                        _this.router.navigate(['dashboard']);
                                        //console.log('Confirmed Okay');
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
    FlatematesPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-flatemates',
            template: __webpack_require__(/*! ./flatemates.page.html */ "./src/app/pages/flatemates/flatemates.page.html"),
            styles: [__webpack_require__(/*! ./flatemates.page.scss */ "./src/app/pages/flatemates/flatemates.page.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"],
            _services_item_service__WEBPACK_IMPORTED_MODULE_2__["ItemService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]])
    ], FlatematesPage);
    return FlatematesPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-flatemates-flatemates-module.js.map