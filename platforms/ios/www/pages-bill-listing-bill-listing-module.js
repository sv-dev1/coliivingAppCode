(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-bill-listing-bill-listing-module"],{

/***/ "./src/app/pages/bill-listing/bill-listing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/bill-listing/bill-listing.module.ts ***!
  \***********************************************************/
/*! exports provided: BillListingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillListingPageModule", function() { return BillListingPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _bill_listing_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bill-listing.page */ "./src/app/pages/bill-listing/bill-listing.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _bill_listing_page__WEBPACK_IMPORTED_MODULE_5__["BillListingPage"]
    }
];
var BillListingPageModule = /** @class */ (function () {
    function BillListingPageModule() {
    }
    BillListingPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_bill_listing_page__WEBPACK_IMPORTED_MODULE_5__["BillListingPage"]]
        })
    ], BillListingPageModule);
    return BillListingPageModule;
}());



/***/ }),

/***/ "./src/app/pages/bill-listing/bill-listing.page.html":
/*!***********************************************************!*\
  !*** ./src/app/pages/bill-listing/bill-listing.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-menu-button></ion-menu-button>\r\n        </ion-buttons>\r\n\r\n        <ion-buttons slot=\"end\">\r\n             <ion-back-button defaultHref=\"dashboard\"></ion-back-button>\r\n         </ion-buttons> \r\n        <ion-title>\r\n            Bills\r\n        </ion-title>\r\n    </ion-toolbar>\r\n</ion-header> \r\n\r\n<ion-content padding> \r\n<ion-row> \r\n     <ion-col>\r\n        <button  [routerLink]=\"['/create-bills']\" class=\"billList-class\"> Add Bill <ion-icon ios=\"ios-add-circle\" md=\"md-add-circle\"></ion-icon> </button>\r\n    \r\n    </ion-col>\r\n  </ion-row> \r\n \r\n  <ion-card> \r\n        <ion-list>  \r\n      <ion-item *ngFor=\"let teamList of teamListArr\" [routerLink]=\"['/group-bill-listing']\"  [queryParams]=\"{teamId: teamList.teamId,teamname: teamList.name}\">\r\n        <ion-icon name=\"git-merge\" style=\"height:20px;\"></ion-icon>\r\n        <ion-label style=\"font-size:14px;\">{{teamList.name}}</ion-label>\r\n         <ion-buttons  slot=\"end\">\r\n             See bill\r\n         </ion-buttons> \r\n      </ion-item>\r\n      <ion-item *ngIf=\"teamListArr?.length == 0\">\r\n        <ion-label style=\"font-size:18px;\">No group avaliable.</ion-label>\r\n      </ion-item>\r\n      \r\n    </ion-list> \r\n  </ion-card>\r\n\r\n <!--  <ion-card  *ngFor=\"let bills of billsArr\">\r\n      <ion-card-header>\r\n         <ion-card-subtitle></ion-card-subtitle>\r\n         <ion-card-title class=\"ion-text-center\" > \r\n            <h2>Title: {{bills.title}}</h2>\r\n         </ion-card-title>\r\n      </ion-card-header>\r\n      <ion-card-content>  \r\n          -Total Bill Paid Amount: {{bills.amount}}<br> \r\n            -Contributing Users:\r\n           <ion-list *ngIf=\"bills.userDetail\">\r\n            <ion-item  *ngFor=\"let ud of bills.userDetail\">\r\n              <ion-grid>\r\n                <ion-row> \r\n                  <ion-col>\r\n                  <h4><span><b>Email:</b> {{ud?.userProfile?.email}}</span></h4>\r\n                  </ion-col>\r\n                  <ion-col>\r\n                    <h4><span><b>Already paid:</b> {{ud.already_paid}}</span></h4>\r\n                  </ion-col>\r\n                  <ion-col>\r\n                    <h4><span><b>Need to pay :</b> {{ud.amount}}</span></h4>\r\n                  </ion-col>\r\n                </ion-row></ion-grid>\r\n                </ion-item>\r\n                </ion-list> \r\n            <img src=\"https://apitx.kindlebit.com/uploads/{{bills.bill_id}}\" onError=\"src='https://apitx.kindlebit.com/uploads/Bf4e77c77-ed76-49b4-84c8-79b6304b02e1'\" class=\"profile-img\">\r\n      </ion-card-content>\r\n   </ion-card>   --> \r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/bill-listing/bill-listing.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/bill-listing/bill-listing.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2JpbGwtbGlzdGluZy9iaWxsLWxpc3RpbmcucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/bill-listing/bill-listing.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/bill-listing/bill-listing.page.ts ***!
  \*********************************************************/
/*! exports provided: BillListingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillListingPage", function() { return BillListingPage; });
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






var BillListingPage = /** @class */ (function () {
    function BillListingPage(router, http, itemService, alertController, loadingController, modalController) {
        this.router = router;
        this.http = http;
        this.itemService = itemService;
        this.alertController = alertController;
        this.loadingController = loadingController;
        this.modalController = modalController;
        this.base_url = "";
        this.teamListArr = [];
        this.billsArr = [];
        this.base_url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url;
        // this.getBillListing();
    }
    BillListingPage.prototype.ngOnInit = function () {
        //  this.getBillListing();
    };
    BillListingPage.prototype.ionViewWillEnter = function () {
        this.getBillgroups();
        // this.getBillListing();
    };
    BillListingPage.prototype.callme = function (event) {
        console.log(event);
    };
    BillListingPage.prototype.getBillgroups = function () {
        var _this = this;
        var token;
        if (sessionStorage.getItem("auth_token") != undefined) {
            token = sessionStorage.getItem("auth_token");
            console.log(token);
        }
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]();
        headers = headers.set('Authorization', token);
        this.pleaseWait();
        this.http.get(this.base_url + 'getTeam', { headers: headers }).subscribe(function (response) {
            _this.teamListArr = response.teams;
            console.log(_this.teamListArr);
        }, function (error) {
            console.log("ERROR");
            console.log(error.error);
        });
    };
    BillListingPage.prototype.getBillListing = function () {
        var _this = this;
        console.log('my bills get list out under this function');
        var token;
        if (sessionStorage.getItem("auth_token") != undefined) {
            token = sessionStorage.getItem("auth_token");
            console.log(token);
        }
        //  this.presentLoading();
        //const httpOptions = { headers: new HttpHeaders({'authorization': token })};
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]();
        headers = headers.set('Authorization', token);
        this.pleaseWait();
        this.http.get(this.base_url + 'bills', { headers: headers }).subscribe(function (response) {
            _this.loadingController.dismiss().then(function (a) { return console.log('dismissed'); });
            _this.billsArr = response.bills;
            console.log(_this.billsArr);
        }, function (error) {
            console.log("ERROR");
            console.log(error.error);
        });
    };
    BillListingPage.prototype.pleaseWait = function () {
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
    BillListingPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bill-listing',
            template: __webpack_require__(/*! ./bill-listing.page.html */ "./src/app/pages/bill-listing/bill-listing.page.html"),
            styles: [__webpack_require__(/*! ./bill-listing.page.scss */ "./src/app/pages/bill-listing/bill-listing.page.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"],
            _services_item_service__WEBPACK_IMPORTED_MODULE_2__["ItemService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]])
    ], BillListingPage);
    return BillListingPage;
}());

/*[routerLink]="['/add-member-to-team']"  [queryParams]="{teamId: teamList.teamId}"*/


/***/ })

}]);
//# sourceMappingURL=pages-bill-listing-bill-listing-module.js.map