(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-user-application-detail-user-application-detail-module"],{

/***/ "./src/app/pages/user-application-detail/user-application-detail.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/user-application-detail/user-application-detail.module.ts ***!
  \*********************************************************************************/
/*! exports provided: UserApplicationDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserApplicationDetailPageModule", function() { return UserApplicationDetailPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _user_application_detail_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-application-detail.page */ "./src/app/pages/user-application-detail/user-application-detail.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _user_application_detail_page__WEBPACK_IMPORTED_MODULE_5__["UserApplicationDetailPage"]
    }
];
var UserApplicationDetailPageModule = /** @class */ (function () {
    function UserApplicationDetailPageModule() {
    }
    UserApplicationDetailPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_user_application_detail_page__WEBPACK_IMPORTED_MODULE_5__["UserApplicationDetailPage"]]
        })
    ], UserApplicationDetailPageModule);
    return UserApplicationDetailPageModule;
}());



/***/ }),

/***/ "./src/app/pages/user-application-detail/user-application-detail.page.html":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/user-application-detail/user-application-detail.page.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n   <ion-toolbar>\r\n      <ion-buttons slot=\"start\">\r\n         <ion-menu-button></ion-menu-button>\r\n      </ion-buttons>\r\n      <ion-buttons slot=\"end\">\r\n         <ion-back-button defaultHref=\"dashboard\"></ion-back-button>\r\n      </ion-buttons>\r\n      <ion-title>\r\n         Application Details\r\n      </ion-title>\r\n   </ion-toolbar>\r\n</ion-header>\r\n<ion-content padding>\r\n   <ion-card>\r\n      <ion-card-content *ngIf=\"isQuestionareObject != null\">\r\n         <ion-list>\r\n            <ion-item>\r\n               <ion-label style=\"font-size:14px;\">First name:</ion-label>\r\n               <ion-buttons slot=\"end\">\r\n                  <span>{{isQuestionareObject.userProfile.firstName}}</span>\r\n               </ion-buttons>\r\n            </ion-item>\r\n         </ion-list>\r\n         <ion-list>\r\n            <ion-item>\r\n               <ion-label style=\"font-size:14px;\">Last name:</ion-label>\r\n               <ion-buttons slot=\"end\">\r\n                  <span>{{isQuestionareObject.userProfile.lastName}}</span>\r\n               </ion-buttons>\r\n            </ion-item>\r\n         </ion-list>\r\n         <ion-list>\r\n            <ion-item>\r\n               <ion-label style=\"font-size:14px;\">Phone Number:</ion-label>\r\n               <ion-buttons slot=\"end\">\r\n                  <span>{{isQuestionareObject.userProfile.phoneNo}}</span>\r\n               </ion-buttons>\r\n            </ion-item>\r\n         </ion-list>\r\n         <ion-list>\r\n            <ion-item>\r\n               <ion-label style=\"font-size:14px;\">Gender:</ion-label>\r\n               <ion-buttons slot=\"end\">\r\n                  <span>{{isQuestionareObject.userProfile.gender}}</span>\r\n               </ion-buttons>\r\n            </ion-item>\r\n         </ion-list>\r\n         <ion-list>\r\n            <ion-item>\r\n               <ion-label style=\"font-size:14px;\">Email:</ion-label>\r\n               <ion-buttons slot=\"end\">\r\n                  <span>{{isQuestionareObject.userProfile.email}}</span>\r\n               </ion-buttons>\r\n            </ion-item>\r\n         </ion-list>\r\n         <ion-list>\r\n            <ion-item>\r\n               <ion-label style=\"font-size:14px;\">Favourite location:</ion-label>\r\n               <ion-buttons slot=\"end\">\r\n                  <span>{{isQuestionareObject.userProfile.favourite_location}}</span>\r\n               </ion-buttons>\r\n            </ion-item>\r\n         </ion-list>\r\n         <ion-list>\r\n            <ion-item>\r\n               <ion-label style=\"font-size:14px;\">Short bio:</ion-label>\r\n               <ion-buttons slot=\"end\">\r\n                  <span>{{isQuestionareObject.userProfile.biography}}</span>\r\n               </ion-buttons>\r\n            </ion-item>\r\n         </ion-list>\r\n         <ion-list>\r\n            <ion-item>\r\n               <ion-label style=\"font-size:14px;\">Interestes:</ion-label>\r\n               <ion-buttons slot=\"end\">\r\n                  <span>{{isQuestionareObject.userProfile.interestes}}</span>\r\n               </ion-buttons>\r\n            </ion-item>\r\n         </ion-list>\r\n         <ion-list>\r\n            <ion-item>\r\n               <ion-label style=\"font-size:14px;\">D.O.B:</ion-label>\r\n               <ion-buttons slot=\"end\">\r\n                  <span>{{isQuestionareObject.userProfile.dob | date:'dd-mm-yyyy'}}</span>\r\n               </ion-buttons>\r\n            </ion-item>\r\n         </ion-list>\r\n\r\n\r\n         <ion-list>\r\n            <ion-item>\r\n               <ion-label style=\"font-size:14px;\">Occuptation:</ion-label>\r\n               <ion-buttons slot=\"end\">\r\n                  <span *ngIf=\"isQuestionareObject?.occuptation_tt == 1\">Part time employee</span>\r\n                  <span *ngIf=\"isQuestionareObject?.occuptation_tt == 2\">Part time/Full time student</span>\r\n                  <span *ngIf=\"isQuestionareObject?.occuptation_tt == 3\">Part time/Full time student</span>\r\n                  <span *ngIf=\"isQuestionareObject?.occuptation_tt == 4\">Part time/Full time internship</span>\r\n               </ion-buttons>\r\n            </ion-item>\r\n         </ion-list>\r\n\r\n\r\n         <ion-list>\r\n            <ion-item>\r\n               <ion-label style=\"font-size:14px;\">Partying:</ion-label>\r\n               <ion-buttons slot=\"end\">\r\n                  <span *ngIf=\"isQuestionareObject?.partying == 0\">Yes</span>\r\n                  <span *ngIf=\"isQuestionareObject?.partying == 1\">No</span>\r\n                  <span *ngIf=\"isQuestionareObject?.partying == 2\">Sometimes</span>\r\n                  <span *ngIf=\"isQuestionareObject?.partying == 3\">Strictly against </span>\r\n               </ion-buttons>\r\n            </ion-item>\r\n         </ion-list>\r\n         <ion-list>\r\n            <ion-item>\r\n               <ion-label style=\"font-size:14px;\">Alcohol:</ion-label>\r\n               <ion-buttons  slot=\"end\">\r\n                  <span *ngIf=\"isQuestionareObject?.alcohol == 0\">Yes</span>\r\n                  <span *ngIf=\"isQuestionareObject?.alcohol == 1\">No</span>\r\n                  <span *ngIf=\"isQuestionareObject?.alcohol == 2\">Sometimes</span>\r\n                  <span *ngIf=\"isQuestionareObject?.alcohol == 3\">Strictly against </span>\r\n               </ion-buttons>\r\n            </ion-item>\r\n         </ion-list>\r\n         <ion-list>\r\n            <ion-item>\r\n               <ion-label style=\"font-size:14px;\">Smoking:</ion-label>\r\n               <ion-buttons  slot=\"end\">\r\n                  <span *ngIf=\"isQuestionareObject?.smoking == 0\">Yes</span>\r\n                  <span *ngIf=\"isQuestionareObject?.smoking == 1\">No</span>\r\n                  <span *ngIf=\"isQuestionareObject?.smoking == 2\">Sometimes</span>\r\n                  <span *ngIf=\"isQuestionareObject?.smoking == 3\">Strictly against </span>\r\n               </ion-buttons>\r\n            </ion-item>\r\n         </ion-list>\r\n         <ion-list>\r\n            <ion-item>\r\n               <ion-label style=\"font-size:14px;\">Apartment Clean Importance:</ion-label>\r\n               <ion-buttons  slot=\"end\">\r\n                  <span>{{isQuestionareObject?.apartment_clean_importance}}/5</span>       \r\n               </ion-buttons>\r\n            </ion-item>\r\n         </ion-list>\r\n         <ion-list>\r\n            <ion-item>\r\n               <ion-label style=\"font-size:14px;\">Music:</ion-label>\r\n               <ion-buttons  slot=\"end\">\r\n                  <span>{{isQuestionareObject?.music}}/5</span>\r\n               </ion-buttons>\r\n            </ion-item>\r\n         </ion-list>\r\n         <ion-list>\r\n            <ion-item>\r\n               <ion-label style=\"font-size:14px;\">Apartment Party:</ion-label>\r\n               <ion-buttons  slot=\"end\">\r\n                  <span>{{isQuestionareObject?.apartment_party}}/5</span>\r\n               </ion-buttons>\r\n            </ion-item>\r\n         </ion-list>\r\n         <ion-list>\r\n            <ion-item>\r\n               <ion-label style=\"font-size:14px;\">Social Account:</ion-label>\r\n               <ion-buttons  slot=\"end\">\r\n                  <span>{{isQuestionareObject?.social_account}}</span>\r\n               </ion-buttons>\r\n            </ion-item>\r\n         </ion-list>\r\n         <ion-row>\r\n            <ion-col *ngIf=\"isQuestionareObject.login.status == 'in-active'\">\r\n               <button type=\"button\" class=\"billList-class\" (click)=\"response(isQuestionareObject,1)\">Accept </button>\r\n            </ion-col>\r\n            <ion-col *ngIf=\"isQuestionareObject.login.status == 'in-active'\">\r\n               <button type=\"button\" class=\"billList-class\" (click)=\"response(isQuestionareObject,2)\">Reject </button>\r\n            </ion-col>\r\n         </ion-row>\r\n      </ion-card-content>\r\n      <ion-card-content  *ngIf=\"isQuestionareObject == null\">\r\n         No Data Available\r\n      </ion-card-content>\r\n   </ion-card>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/user-application-detail/user-application-detail.page.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/user-application-detail/user-application-detail.page.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VzZXItYXBwbGljYXRpb24tZGV0YWlsL3VzZXItYXBwbGljYXRpb24tZGV0YWlsLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/user-application-detail/user-application-detail.page.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/user-application-detail/user-application-detail.page.ts ***!
  \*******************************************************************************/
/*! exports provided: UserApplicationDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserApplicationDetailPage", function() { return UserApplicationDetailPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
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






var UserApplicationDetailPage = /** @class */ (function () {
    function UserApplicationDetailPage(router, route, loadingController, http, alertController) {
        var _this = this;
        this.router = router;
        this.route = route;
        this.loadingController = loadingController;
        this.http = http;
        this.alertController = alertController;
        this.base_url = "";
        this.noData = false;
        this.router.queryParams.subscribe(function (params) {
            _this.userId = params['userId'];
            _this.teamId = params['teamId'];
        });
        this.base_url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].base_url;
    }
    UserApplicationDetailPage.prototype.ngOnInit = function () {
        console.log(this.userId);
        this.getQuestionaire();
    };
    UserApplicationDetailPage.prototype.presentLoading = function () {
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
    UserApplicationDetailPage.prototype.getQuestionaire = function () {
        var _this = this;
        var token;
        if (sessionStorage.getItem("auth_token") != undefined) {
            token = sessionStorage.getItem("auth_token");
        }
        this.presentLoading();
        var httpOptions = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({ 'authorization': token }) };
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]();
        // this.userId="Ue3b66e39-1599-4047-bc5c-8fb97c776aa0";
        headers = headers.set('Authorization', token);
        this.http.get(this.base_url + 'user/' + this.userId + '/questionnaire', { headers: headers }).subscribe(function (response) {
            _this.isQuestionareObject = response.questionnaireData[0];
            console.log('sddsadsadsadsadsa', _this.isQuestionareObject);
        }, function (error) {
            console.log("ERROR");
            console.log(error.error);
        });
    };
    UserApplicationDetailPage.prototype.response = function (data, status) {
        var _this = this;
        var input_data = {
            "team_id": this.teamId,
            "user_id": this.userId,
            "user_status": status,
        };
        // console.log(input_data); 
        var formData = new FormData();
        formData.append('team_id', input_data.team_id);
        formData.append('user_id', input_data.user_id);
        formData.append('user_status', input_data.user_status);
        var token;
        if (sessionStorage.getItem("auth_token") != undefined) {
            token = sessionStorage.getItem("auth_token");
        }
        this.presentLoading();
        var httpOptions = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({ 'authorization': token }) };
        this.http.post(this.base_url + 'team/update_applications', input_data, httpOptions).subscribe(function (response) {
            console.log(response);
            _this.loadingController.dismiss().then(function (a) { return console.log('dismissed'); });
            _this.presentAlert(response.message);
        }, function (error) {
            console.log("ERROR");
            console.log(error.error);
        });
    };
    UserApplicationDetailPage.prototype.presentAlert = function (message) {
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
                                        _this.route.navigate(['group-application']);
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
    UserApplicationDetailPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-application-detail',
            template: __webpack_require__(/*! ./user-application-detail.page.html */ "./src/app/pages/user-application-detail/user-application-detail.page.html"),
            styles: [__webpack_require__(/*! ./user-application-detail.page.scss */ "./src/app/pages/user-application-detail/user-application-detail.page.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])
    ], UserApplicationDetailPage);
    return UserApplicationDetailPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-user-application-detail-user-application-detail-module.js.map