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

module.exports = "<ion-header>\r\n   <ion-toolbar>\r\n      <ion-buttons slot=\"start\">\r\n         <ion-menu-button></ion-menu-button>\r\n      </ion-buttons>\r\n      <ion-buttons slot=\"end\">\r\n         <ion-back-button defaultHref=\"dashboard\"></ion-back-button>\r\n      </ion-buttons>\r\n      <ion-title>\r\n         Application Details\r\n      </ion-title>\r\n   </ion-toolbar>\r\n</ion-header>\r\n<ion-content padding>\r\n     <ion-item class=\"application-header\">\r\n        <ion-label>\r\n             {{isQuestionareObject?.login?.username}}\r\n        </ion-label>\r\n    </ion-item>\r\n   <ion-card>\r\n      <ion-card-content class=\"circle-pic\" > \r\n         <img  [src]=\"image_url\" onError=\"src='assets/images/user_dummy.png'\" class=\"data-img\"> \r\n      </ion-card-content>\r\n   </ion-card>\r\n   <ion-card>\r\n      <ion-card-content *ngIf=\"isQuestionareObject != null\">\r\n         <ion-card-title>First name: <span> {{isQuestionareObject.userProfile.firstName}} </span></ion-card-title>\r\n         <ion-card-title>Phone Number: <span> {{isQuestionareObject.userProfile.phoneNo}} </span></ion-card-title>\r\n         <ion-card-title>Gender : <span> {{isQuestionareObject.userProfile.gender}} </span></ion-card-title>\r\n         <ion-card-title>Date Of Birth : <span> {{isQuestionareObject?.userProfile.dob | date :'MMMM d, y'}} </span></ion-card-title>\r\n         <ion-card-title> City/district to which you want to move : <span> {{isQuestionareObject.userProfile.favourite_location}} </span></ion-card-title>\r\n         <ion-card-title>Email : <span> {{isQuestionareObject.userProfile.email}} </span></ion-card-title>\r\n         <ion-card-title>Short bio : <span> {{isQuestionareObject.userProfile.biography}} </span></ion-card-title>\r\n         <ion-card-title>Interests : <span> {{isQuestionareObject.userProfile.interestes}} </span></ion-card-title>\r\n         <ion-card-title>WakeUpTime : <span> {{isQuestionareObject?.userProfile.wakeup_time}} </span></ion-card-title>\r\n         <ion-card-title>Day Of Moving : <span> {{isQuestionareObject?.userProfile.outing_day}} </span></ion-card-title>\r\n         <ion-card-title>Period of Stay : <span> {{isQuestionareObject?.userProfile.stay_date}} </span></ion-card-title>\r\n         <ion-card-title>Nationality : <span>{{nationality1}}<span *ngIf=\"nationality2\"> {{nationality2}} </span></span></ion-card-title>\r\n         <ion-card-title>Language Known :  <span>{{language1}}<span *ngIf=\"language2\">{{language2}} </span> </span></ion-card-title>\r\n         <ion-card-title>Price Range : <span> {{isQuestionareObject?.userProfile.price_range}} </span></ion-card-title>\r\n\r\n         <ion-card-title>Occuptation : \r\n            <span *ngIf=\"isQuestionareObject?.userProfile.occuptation_tt == 1\"> Full-time Employee</span>\r\n            <span *ngIf=\"isQuestionareObject?.userProfile.occuptation_tt == 2\">Part-time Employee </span>\r\n            <span *ngIf=\"isQuestionareObject?.userProfile.occuptation_tt == 3\"> Part Time Student</span>\r\n            <span *ngIf=\"isQuestionareObject?.userProfile.occuptation_tt == 4\">Full Time  Student</span>\r\n            <span *ngIf=\"isQuestionareObject?.userProfile.occuptation_tt == 5\">Part Time Internship</span>\r\n            <span *ngIf=\"isQuestionareObject?.userProfile.occuptation_tt == 6\">Full Time Internship</span>\r\n         </ion-card-title>\r\n         <ion-card-title>Partying :\r\n            <span *ngIf=\"isQuestionareObject?.partying == 0\">Yes</span>\r\n            <span *ngIf=\"isQuestionareObject?.partying == 1\">No</span>\r\n            <span *ngIf=\"isQuestionareObject?.partying == 2\">Sometimes</span>\r\n            <span *ngIf=\"isQuestionareObject?.partying == 3\">Strictly against </span>\r\n         </ion-card-title>\r\n         <ion-card-title>Alcohol  : \r\n            <span *ngIf=\"isQuestionareObject?.alcohol == 0\">Yes</span>\r\n            <span *ngIf=\"isQuestionareObject?.alcohol == 1\">No</span>\r\n            <span *ngIf=\"isQuestionareObject?.alcohol == 2\">Sometimes</span>\r\n            <span *ngIf=\"isQuestionareObject?.alcohol == 3\">Strictly against </span>\r\n         </ion-card-title>\r\n         <ion-card-title>Smoking  :    \r\n            <span *ngIf=\"isQuestionareObject?.smoking == 0\">Yes</span>\r\n            <span *ngIf=\"isQuestionareObject?.smoking == 1\">No</span>\r\n            <span *ngIf=\"isQuestionareObject?.smoking == 2\">Sometimes</span>\r\n            <span *ngIf=\"isQuestionareObject?.smoking == 3\">Strictly against </span>\r\n         </ion-card-title>\r\n         <ion-card-title>Apartment Clean Importance  :<span>{{isQuestionareObject?.apartment_clean_importance}}/5</span>       </ion-card-title>\r\n         <ion-card-title>Music  :    <span>{{isQuestionareObject?.music}}/5</span></ion-card-title>\r\n         <ion-card-title>Apartment Party  :    <span>{{isQuestionareObject?.apartment_party}}/5</span></ion-card-title>\r\n         <ion-card-title>Social Account  :    <span>{{isQuestionareObject?.social_account}}</span></ion-card-title>\r\n         \r\n      </ion-card-content>\r\n       <ion-card-content>\r\n         <ion-row>\r\n            <ion-col >\r\n               <button type=\"button\" class=\"billList-class\" (click)=\"response(isQuestionareObject,1)\">Accept </button>\r\n            </ion-col>\r\n            <ion-col >\r\n               <button type=\"button\" class=\"billList-class\" (click)=\"response(isQuestionareObject,2)\">Reject </button>\r\n            </ion-col>\r\n         </ion-row>\r\n      </ion-card-content>\r\n      <ion-card-content  *ngIf=\"isQuestionareObject == null\">\r\n         No Data Available\r\n      </ion-card-content>\r\n   </ion-card>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/user-application-detail/user-application-detail.page.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/user-application-detail/user-application-detail.page.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "app-user-application-detail.ion-page ion-card-title.hydrated span {\n  color: #ed502d;\n  font-weight: normal;\n  font-size: 14px;\n  text-align: left;\n  width: 100%;\n  float: left;\n  margin-bottom: 5px; }\n\napp-user-application-detail.ion-page ion-card-title.hydrated {\n  color: #333;\n  font-size: 15px;\n  line-height: 26px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdXNlci1hcHBsaWNhdGlvbi1kZXRhaWwvRDpcXHJhaW9cXGNvbGl2aW5nQXBwL3NyY1xcYXBwXFxwYWdlc1xcdXNlci1hcHBsaWNhdGlvbi1kZXRhaWxcXHVzZXItYXBwbGljYXRpb24tZGV0YWlsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLGVBQWM7RUFDWCxvQkFBbUI7RUFDbkIsZ0JBQWU7RUFDZixpQkFBZ0I7RUFDaEIsWUFBVztFQUNYLFlBQVc7RUFDWCxtQkFBa0IsRUFDckI7O0FBRUQ7RUFDSSxZQUFXO0VBQ1gsZ0JBQWU7RUFDZixrQkFBaUIsRUFDcEIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy91c2VyLWFwcGxpY2F0aW9uLWRldGFpbC91c2VyLWFwcGxpY2F0aW9uLWRldGFpbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhcHAtdXNlci1hcHBsaWNhdGlvbi1kZXRhaWwuaW9uLXBhZ2UgaW9uLWNhcmQtdGl0bGUuaHlkcmF0ZWQgc3BhbntcclxuXHRjb2xvcjogI2VkNTAyZDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxufVxyXG5cclxuYXBwLXVzZXItYXBwbGljYXRpb24tZGV0YWlsLmlvbi1wYWdlIGlvbi1jYXJkLXRpdGxlLmh5ZHJhdGVkIHtcclxuICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI2cHg7XHJcbn0iXX0= */"

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
        this.image_url = "";
        this.image_base_url = "";
        this.languagesId = [];
        this.languagesName = [];
        this.nationalityId = [];
        this.nationalityName = [];
        this.countriesArr = [];
        this.languageArr = [];
        this.router.queryParams.subscribe(function (params) {
            _this.userId = params['userId'];
            _this.teamId = params['teamId'];
        });
        this.base_url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].base_url;
        this.image_base_url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].image_base_url;
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
    UserApplicationDetailPage.prototype.getQuestionaire = function () {
        var _this = this;
        var token;
        var temp = [];
        var temp1 = [];
        var temp2 = [];
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
            _this.image_url = _this.image_base_url + '' + _this.isQuestionareObject.userId;
            temp2 = _this.isQuestionareObject.userProfile.price_range.split("-");
            temp1 = _this.isQuestionareObject.userProfile.nationality.split(",");
            _this.nationalityId.push(temp1);
            temp = _this.isQuestionareObject.userProfile.languages.split(",");
            _this.languagesId.push(temp);
            _this.getLanguages();
            _this.getCountries();
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
                                        _this.route.navigate(['group-detail-page']);
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
    UserApplicationDetailPage.prototype.getLanguages = function () {
        var _this = this;
        var token;
        if (sessionStorage.getItem("auth_token") != undefined) {
            token = sessionStorage.getItem("auth_token");
        }
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]();
        headers = headers.set('Authorization', token);
        this.http.get(this.base_url + 'languages', {
            headers: headers
        }).subscribe(function (response) {
            _this.languageArr = response.languages;
            _this.languagesId.forEach(function (element) {
                _this.languagesName = [];
                element.forEach(function (item) {
                    for (var _i = 0, _a = _this.languageArr; _i < _a.length; _i++) {
                        var order = _a[_i];
                        if (order.id == item) {
                            _this.languagesName.push(order.name);
                        }
                    }
                });
            });
            // console.log(this.languagesName[0]);
            _this.language1 = _this.languagesName[0];
            _this.language2 = _this.languagesName[1];
        });
    };
    UserApplicationDetailPage.prototype.getCountries = function () {
        var _this = this;
        var token;
        if (sessionStorage.getItem("auth_token") != undefined) {
            token = sessionStorage.getItem("auth_token");
        }
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]();
        headers = headers.set('Authorization', token);
        this.http.get(this.base_url + 'countries', {
            headers: headers
        }).subscribe(function (response) {
            _this.countriesArr = response.countries;
            _this.nationalityId.forEach(function (element) {
                _this.nationalityName = [];
                element.forEach(function (item) {
                    for (var _i = 0, _a = _this.countriesArr; _i < _a.length; _i++) {
                        var order = _a[_i];
                        if (order.id == item) {
                            _this.nationalityName.push(order.name);
                        }
                    }
                });
            });
            _this.nationality1 = _this.nationalityName[0];
            _this.nationality2 = _this.nationalityName[1];
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