(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-property-application-property-application-module"],{

/***/ "./src/app/pages/property-application/property-application.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/property-application/property-application.module.ts ***!
  \***************************************************************************/
/*! exports provided: PropertyApplicationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyApplicationPageModule", function() { return PropertyApplicationPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _property_application_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./property-application.page */ "./src/app/pages/property-application/property-application.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _property_application_page__WEBPACK_IMPORTED_MODULE_5__["PropertyApplicationPage"]
    }
];
var PropertyApplicationPageModule = /** @class */ (function () {
    function PropertyApplicationPageModule() {
    }
    PropertyApplicationPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_property_application_page__WEBPACK_IMPORTED_MODULE_5__["PropertyApplicationPage"]]
        })
    ], PropertyApplicationPageModule);
    return PropertyApplicationPageModule;
}());



/***/ }),

/***/ "./src/app/pages/property-application/property-application.page.html":
/*!***************************************************************************!*\
  !*** ./src/app/pages/property-application/property-application.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ion-header>\n   <ion-toolbar>\n      <ion-buttons slot=\"start\">\n         <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n      <ion-buttons slot=\"end\">\n         <ion-back-button defaultHref=\"dashboard\"></ion-back-button>\n      </ion-buttons>\n      <ion-title>\n            Invitations to property\n      </ion-title>\n   </ion-toolbar>\n</ion-header>\n<ion-content padding>\n    <ion-card>\n      <ion-card-content>\n         <ion-list>\n            <ion-item   *ngFor=\"let property of requestArr\">\n               <ion-icon name=\"git-merge\" style=\"height:20px;\" > </ion-icon>\n                  <ion-label style=\"font-size:14px;\">{{property?.property['name']}}</ion-label>\n                  <ion-buttons [routerLink]=\"['/prop-info']\" [queryParams]=\"{propertyId: property?.propertyId}\"slot=\"end\">\n                  Info...\n                  </ion-buttons>                  \n                  <ion-buttons slot=\"end\" (click) =\"onChange('Approved',property.propertyId)\" ><ion-icon name=\"checkmark-circle-outline\" ></ion-icon>  </ion-buttons>\n                  <ion-buttons slot=\"end\" (click) =\"onChange('Declined',property.propertyId)\"> <ion-icon name=\"close-circle-outline\" ></ion-icon></ion-buttons>\n            </ion-item>\n            <ion-item *ngIf=\"noProperty\"><h1>No Property Invitation</h1></ion-item>\n        </ion-list>\n      </ion-card-content>\n   </ion-card>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/property-application/property-application.page.scss":
/*!***************************************************************************!*\
  !*** ./src/app/pages/property-application/property-application.page.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb3BlcnR5LWFwcGxpY2F0aW9uL3Byb3BlcnR5LWFwcGxpY2F0aW9uLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/property-application/property-application.page.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/property-application/property-application.page.ts ***!
  \*************************************************************************/
/*! exports provided: PropertyApplicationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyApplicationPage", function() { return PropertyApplicationPage; });
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






var PropertyApplicationPage = /** @class */ (function () {
    function PropertyApplicationPage(route, http, loadingController, alertController) {
        var _this = this;
        this.route = route;
        this.http = http;
        this.loadingController = loadingController;
        this.alertController = alertController;
        this.requestArr = [];
        this.base_url = "";
        this.submitted = false;
        this.noProperty = false;
        this.route.queryParams.subscribe(function (params) {
            _this.teamId = params['teamId'];
        });
        this.base_url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].base_url;
    }
    PropertyApplicationPage.prototype.ngOnInit = function () {
        this.getPropertyListing();
    };
    PropertyApplicationPage.prototype.propertyInfo = function (data) {
        console.log(data);
    };
    PropertyApplicationPage.prototype.presentLoading = function () {
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
    PropertyApplicationPage.prototype.getPropertyListing = function () {
        var _this = this;
        this.requestArr = [];
        var token;
        if (sessionStorage.getItem("auth_token") != undefined) {
            token = sessionStorage.getItem("auth_token");
        }
        this.presentLoading();
        var httpOptions = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'authorization': token }) };
        var temp = [];
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]();
        headers = headers.set('Authorization', token);
        this.http.get(this.base_url + 'property/invitation/' + this.teamId, { headers: headers }).subscribe(function (response) {
            if (response.requestData == 'Request accepted already!!!!!!') {
                _this.noProperty = true;
            }
            else {
                response.requestData.forEach(function (obj) {
                    if (obj.status == 'Pending') {
                        if (obj.property != null) {
                            _this.requestArr.push(obj);
                        }
                    }
                });
            }
        }, function (error) {
            // console.log("ERROR");
            //console.log(error.error);
        });
    };
    PropertyApplicationPage.prototype.onChange = function (info, id) {
        console.log(info, id);
        this.presentAlertConfirm(info, id);
    };
    PropertyApplicationPage.prototype.customsmessage = function (msg) {
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
                        this.getPropertyListing();
                        return [2 /*return*/];
                }
            });
        });
    };
    PropertyApplicationPage.prototype.presentAlertConfirm = function (info, id) {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Confirmed!',
                            message: 'Are you sure you want to ' + info + ' this property invitation?',
                            buttons: [
                                {
                                    text: 'Cancel',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function (blah) {
                                        console.log('Confirm Cancel: blah');
                                    }
                                }, {
                                    text: 'OK',
                                    handler: function () {
                                        _this.submitted = true;
                                        var input_data = {
                                            "status": info,
                                            "team_id": _this.teamId
                                        };
                                        var token;
                                        if (sessionStorage.getItem("auth_token") != undefined) {
                                            token = sessionStorage.getItem("auth_token");
                                        }
                                        console.log(input_data);
                                        //  this.presentLoading();
                                        var httpOptions = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'authorization': token }) };
                                        _this.http.post(_this.base_url + '/property/status/' + id, input_data, httpOptions).subscribe(function (response) {
                                            console.log(response);
                                            _this.customsmessage("Updated Succesfully");
                                        }, function (error) {
                                            console.log(error.error);
                                        });
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
    PropertyApplicationPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-property-application',
            template: __webpack_require__(/*! ./property-application.page.html */ "./src/app/pages/property-application/property-application.page.html"),
            styles: [__webpack_require__(/*! ./property-application.page.scss */ "./src/app/pages/property-application/property-application.page.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]])
    ], PropertyApplicationPage);
    return PropertyApplicationPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-property-application-property-application-module.js.map