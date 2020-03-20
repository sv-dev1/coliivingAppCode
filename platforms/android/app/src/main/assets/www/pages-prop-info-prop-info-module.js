(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-prop-info-prop-info-module"],{

/***/ "./src/app/pages/prop-info/prop-info.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/prop-info/prop-info.module.ts ***!
  \*****************************************************/
/*! exports provided: PropInfoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropInfoPageModule", function() { return PropInfoPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _prop_info_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./prop-info.page */ "./src/app/pages/prop-info/prop-info.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _prop_info_page__WEBPACK_IMPORTED_MODULE_5__["PropInfoPage"]
    }
];
var PropInfoPageModule = /** @class */ (function () {
    function PropInfoPageModule() {
    }
    PropInfoPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_prop_info_page__WEBPACK_IMPORTED_MODULE_5__["PropInfoPage"]]
        })
    ], PropInfoPageModule);
    return PropInfoPageModule;
}());



/***/ }),

/***/ "./src/app/pages/prop-info/prop-info.page.html":
/*!*****************************************************!*\
  !*** ./src/app/pages/prop-info/prop-info.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n   <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-menu-button></ion-menu-button>\n        </ion-buttons> \n        <ion-buttons slot=\"end\">\n            <ion-back-button defaultHref=\"dashboard\"></ion-back-button>\n         </ion-buttons> \n        <ion-title>\n               Property details\n        </ion-title>\n   </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n \n   <ion-card>\n      <ion-card-content class=\"circle-pic\" > \n         <img  [src]=\"image_url\" onError=\"src='assets/images/user_dummy.png'\" class=\"profile-img\"> \n      </ion-card-content>\n   </ion-card>\n   <ion-card>\n      <ion-card-content>\n         <ion-list>\n            <ion-item>\n               <ion-label style=\"font-size:14px;\">Status:</ion-label>\n               <ion-buttons slot=\"end\">\n                  <span>{{propertyInfo?.status}}</span>\n               </ion-buttons>\n            </ion-item>\n         </ion-list>\n\n         <ion-list>\n            <ion-item>\n               <ion-label style=\"font-size:14px;\">Property Name:</ion-label>\n               <ion-buttons slot=\"end\">\n                  <span>{{propertyInfo?.name}}</span>\n               </ion-buttons>\n            </ion-item>\n         </ion-list>\n       \n         <ion-list>\n            <ion-item>\n               <ion-label style=\"font-size:14px;\">City:</ion-label>\n               <ion-buttons slot=\"end\">\n                  <span>{{propertyInfo?.city}}</span>\n               </ion-buttons>\n            </ion-item>\n         </ion-list>\n\n         <ion-list>\n            <ion-item>\n               <ion-label style=\"font-size:14px;\">Type:</ion-label>\n               <ion-buttons slot=\"end\">\n                <span *ngIf=\"propertyInfo?.property_type ==1\">FLAT</span>\n                <span *ngIf=\"propertyInfo?.property_type ==2\"> ROOM</span>\n               \n               </ion-buttons>\n            </ion-item>\n         </ion-list>\n\n         <ion-list>\n            <ion-item>\n               <ion-label style=\"font-size:14px;\">Floor Space:</ion-label>\n               <ion-buttons slot=\"end\">\n                  <span>{{propertyInfo?.floor_space}} per/sq.ft</span>\n               </ion-buttons>\n            </ion-item>\n         </ion-list>\n\n         <ion-list>\n            <ion-item>\n               <ion-label style=\"font-size:14px;\">Number of Balcony/Terrace:</ion-label>\n               <ion-buttons slot=\"end\">\n                  <span>{{propertyInfo?.no_of_balconies}}</span>\n               </ion-buttons>\n            </ion-item>\n         </ion-list>\n\n         <ion-list>\n            <ion-item>\n               <ion-label style=\"font-size:14px;\">Number of Bedroom:</ion-label>\n               <ion-buttons slot=\"end\">\n                  <span>{{propertyInfo?.no_of_bedrooms}}</span>\n               </ion-buttons>\n            </ion-item>\n         </ion-list>\n\n         <ion-list>\n            <ion-item>\n               <ion-label style=\"font-size:14px;\">Number of Bathroom:</ion-label>\n               <ion-buttons slot=\"end\">\n                  <span>{{propertyInfo?.no_of_bathrooms}}</span>\n               </ion-buttons>\n            </ion-item>\n         </ion-list>\n\n         <ion-list>\n           <ion-item>\n               <ion-label style=\"font-size:14px;\">Number of garages:</ion-label>\n               <ion-buttons slot=\"end\">\n                  <span>{{propertyInfo?.no_of_garages}}</span>\n               </ion-buttons>\n            </ion-item>\n         </ion-list>\n\n         <ion-list>\n            <ion-item>\n               <ion-label style=\"font-size:14px;\">Number of parking space:</ion-label>\n               <ion-buttons slot=\"end\">\n                  <span>{{propertyInfo?.no_of_parking_space}}</span>\n               </ion-buttons>\n            </ion-item>\n         </ion-list>\n\n         <ion-list>\n           <ion-item>\n            <ion-label style=\"font-size:14px;\">Pets allowed:</ion-label>\n               <ion-buttons slot=\"end\">\n                  <span *ngIf=\"propertyInfo?.pets_allowed ==1\">YES</span>\n                  <span *ngIf=\"propertyInfo?.pets_allowed ==0\"> NO</span>\n               </ion-buttons>\n            </ion-item>\n         </ion-list>\n\n         <ion-list>\n            <ion-item>\n               <ion-label style=\"font-size:14px;\">Posted On:</ion-label>\n               <ion-buttons slot=\"end\">\n                  <span>{{propertyInfo?.created_at | date}}</span>\n               </ion-buttons>\n            </ion-item>\n         </ion-list>\n\n         <ion-list>\n            <ion-item>\n               <ion-label style=\"font-size:14px;\">Posted By:</ion-label>\n               <ion-buttons slot=\"end\">\n                  <span>{{propertyInfo?.login['username']}}</span>\n               </ion-buttons>\n            </ion-item>\n         </ion-list>\n         \n      </ion-card-content>\n\n  </ion-card>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/prop-info/prop-info.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/prop-info/prop-info.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb3AtaW5mby9wcm9wLWluZm8ucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/prop-info/prop-info.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/prop-info/prop-info.page.ts ***!
  \***************************************************/
/*! exports provided: PropInfoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropInfoPage", function() { return PropInfoPage; });
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





var PropInfoPage = /** @class */ (function () {
    function PropInfoPage(route, http, loadingController) {
        var _this = this;
        this.route = route;
        this.http = http;
        this.loadingController = loadingController;
        this.propertyId = "";
        this.base_url = "";
        this.image_url = "";
        this.image_base_url = "";
        this.showProperty = true;
        this.showResult = false;
        this.route.queryParams.subscribe(function (params) {
            _this.propertyId = params['propertyId'];
            _this.teamId = params['teamId'];
        });
        this.base_url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].base_url;
        this.image_base_url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].image_base_url;
        this.roleId = sessionStorage.getItem("roleId");
    }
    PropInfoPage.prototype.ngOnInit = function () {
        if (this.roleId == 3) {
            this.showProperty = false;
        }
        if (this.propertyId != undefined) {
            this.getPropertyInfo();
            this.showResult = true;
        }
    };
    PropInfoPage.prototype.getPropertyInfo = function () {
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
        this.http.get(this.base_url + 'propertydetails/' + this.propertyId, { headers: headers }).subscribe(function (response) {
            if (response['requests'] != undefined) {
                _this.propertyInfo = response['requests'][0];
            }
            _this.image_url = _this.image_base_url + '' + _this.propertyInfo.propertyId;
            console.log(_this.propertyInfo);
        }, function (error) {
            console.log("ERROR");
            console.log(error.error);
        });
    };
    PropInfoPage.prototype.presentLoading = function () {
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
    PropInfoPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-prop-info',
            template: __webpack_require__(/*! ./prop-info.page.html */ "./src/app/pages/prop-info/prop-info.page.html"),
            styles: [__webpack_require__(/*! ./prop-info.page.scss */ "./src/app/pages/prop-info/prop-info.page.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]])
    ], PropInfoPage);
    return PropInfoPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-prop-info-prop-info-module.js.map