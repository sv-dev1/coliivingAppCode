(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-group-application-group-application-module"],{

/***/ "./src/app/pages/group-application/group-application.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/group-application/group-application.module.ts ***!
  \*********************************************************************/
/*! exports provided: GroupApplicationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupApplicationPageModule", function() { return GroupApplicationPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _group_application_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./group-application.page */ "./src/app/pages/group-application/group-application.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _group_application_page__WEBPACK_IMPORTED_MODULE_5__["GroupApplicationPage"]
    }
];
var GroupApplicationPageModule = /** @class */ (function () {
    function GroupApplicationPageModule() {
    }
    GroupApplicationPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_group_application_page__WEBPACK_IMPORTED_MODULE_5__["GroupApplicationPage"]]
        })
    ], GroupApplicationPageModule);
    return GroupApplicationPageModule;
}());



/***/ }),

/***/ "./src/app/pages/group-application/group-application.page.html":
/*!*********************************************************************!*\
  !*** ./src/app/pages/group-application/group-application.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n   <ion-toolbar>\r\n      <ion-buttons slot=\"start\">\r\n         <ion-menu-button></ion-menu-button>\r\n      </ion-buttons>\r\n      <ion-buttons slot=\"end\">\r\n         <ion-back-button defaultHref=\"dashboard\"></ion-back-button>\r\n      </ion-buttons>\r\n      <ion-title>\r\n         New Requests\r\n      </ion-title>\r\n   </ion-toolbar>\r\n</ion-header>\r\n<ion-content padding>\r\n   <ion-card>\r\n      <ion-card-content>\r\n         <ion-list>\r\n            <ion-item *ngFor=\"let user of userRecord\" [routerLink]=\"['/user-application-detail']\"  [queryParams]=\"{userId: user.userId,teamId:user.team_id}\">\r\n            <ion-icon name=\"git-merge\" style=\"height:20px;\" > </ion-icon>\r\n            <ion-label style=\"font-size:14px;\">{{user.login.username}}</ion-label>\r\n            <ion-buttons (click)=\"userInfo(user)\" slot=\"end\">\r\n               Info\r\n            </ion-buttons>\r\n            </ion-item>\r\n            <ion-item *ngIf=\"userRecord?.length == 0\">\r\n               <ion-label style=\"font-size:18px;\">No user avaliable.</ion-label>\r\n            </ion-item>\r\n         </ion-list>\r\n      </ion-card-content>\r\n   </ion-card>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/group-application/group-application.page.scss":
/*!*********************************************************************!*\
  !*** ./src/app/pages/group-application/group-application.page.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2dyb3VwLWFwcGxpY2F0aW9uL2dyb3VwLWFwcGxpY2F0aW9uLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/group-application/group-application.page.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/group-application/group-application.page.ts ***!
  \*******************************************************************/
/*! exports provided: GroupApplicationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupApplicationPage", function() { return GroupApplicationPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
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





var GroupApplicationPage = /** @class */ (function () {
    function GroupApplicationPage(route, http, loadingController) {
        var _this = this;
        this.route = route;
        this.http = http;
        this.loadingController = loadingController;
        this.userListArr = [];
        this.base_url = "";
        this.teamId = "";
        this.logRefCode = "";
        this.userRecord = [];
        this.base_url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].base_url;
        this.route.queryParams.subscribe(function (params) {
            _this.teamId = params['teamId'];
        });
    }
    GroupApplicationPage.prototype.ngOnInit = function () {
        this.getUsersList();
        this.logRefCode = sessionStorage.getItem("ref_code");
    };
    GroupApplicationPage.prototype.presentLoading = function () {
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
    GroupApplicationPage.prototype.userInfo = function (info) {
        console.log(info);
    };
    GroupApplicationPage.prototype.getUsersList = function () {
        var _this = this;
        var token;
        if (sessionStorage.getItem("auth_token") != undefined) {
            token = sessionStorage.getItem("auth_token");
        }
        this.presentLoading();
        var httpOptions = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'authorization': token }) };
        var temp = [];
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]();
        headers = headers.set('Authorization', token);
        this.http.get(this.base_url + 'team/applications/' + this.teamId, { headers: headers }).subscribe(function (response) {
            _this.userListArr = response.teams;
            //console.log(this.userListArr);
            _this.userListArr.forEach(function (ele) {
                if (ele.userProfile) {
                    if (ele.userProfile.used_code == _this.logRefCode) {
                        _this.userRecord.push(ele);
                    }
                }
                console.log(_this.userRecord);
            });
        }, function (error) {
            console.log("ERROR");
            console.log(error.error);
        });
    };
    GroupApplicationPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-group-application',
            template: __webpack_require__(/*! ./group-application.page.html */ "./src/app/pages/group-application/group-application.page.html"),
            styles: [__webpack_require__(/*! ./group-application.page.scss */ "./src/app/pages/group-application/group-application.page.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]])
    ], GroupApplicationPage);
    return GroupApplicationPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-group-application-group-application-module.js.map