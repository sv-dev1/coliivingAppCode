(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-group-bill-listing-group-bill-listing-module"],{

/***/ "./src/app/pages/group-bill-listing/group-bill-listing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/group-bill-listing/group-bill-listing.module.ts ***!
  \***********************************************************************/
/*! exports provided: GroupBillListingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupBillListingPageModule", function() { return GroupBillListingPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _group_bill_listing_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./group-bill-listing.page */ "./src/app/pages/group-bill-listing/group-bill-listing.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _group_bill_listing_page__WEBPACK_IMPORTED_MODULE_5__["GroupBillListingPage"]
    }
];
var GroupBillListingPageModule = /** @class */ (function () {
    function GroupBillListingPageModule() {
    }
    GroupBillListingPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_group_bill_listing_page__WEBPACK_IMPORTED_MODULE_5__["GroupBillListingPage"]]
        })
    ], GroupBillListingPageModule);
    return GroupBillListingPageModule;
}());



/***/ }),

/***/ "./src/app/pages/group-bill-listing/group-bill-listing.page.html":
/*!***********************************************************************!*\
  !*** ./src/app/pages/group-bill-listing/group-bill-listing.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n   <ion-toolbar>\r\n      <ion-buttons slot=\"start\">\r\n         <ion-menu-button></ion-menu-button>\r\n      </ion-buttons>\r\n      <ion-buttons slot=\"end\">\r\n         <ion-back-button defaultHref=\"dashboard\"></ion-back-button>\r\n      </ion-buttons>\r\n      <ion-title>\r\n         Bills : {{teamname}}\r\n      </ion-title>\r\n   </ion-toolbar>\r\n</ion-header>\r\n<ion-content padding>\r\n   <ion-row>\r\n      <ion-col>\r\n         <button [routerLink]=\"['/create-bills']\" class=\"billList-class\"> Add Bill </button>\r\n      </ion-col>\r\n      <ion-col>\r\n         <button [routerLink]=\"['/group-summary-page']\" [queryParams]=\"{teamId: teamId,teamname: teamname}\" class=\"billList-class\"> Bill Summary </button>\r\n      </ion-col>\r\n   </ion-row>\r\n   <ion-row>\r\n      <ion-col>\r\n         <h2 class=\"bill-listing\">Bills listing</h2>\r\n      </ion-col>\r\n   </ion-row>\r\n   <ion-card *ngFor=\"let bills of billsArr\">\r\n      <ion-card-header>\r\n      <ion-card-subtitle></ion-card-subtitle>\r\n      <ion-card-title class=\"ion-text-start\" >\r\n         <h2>\r\n            Title : {{bills.title}}\r\n            <span>\r\n               <ion-buttons (click)=\"removeBill(bills.bill_Id)\" class=\"listingButton\">\r\n                  <ion-icon name=\"trash\"></ion-icon>\r\n                  Delete\r\n               </ion-buttons>\r\n            </span>\r\n         </h2>\r\n      </ion-card-title>\r\n      </ion-card-header>\r\n      <ion-card-content>\r\n         Description:\r\n         <ion-item>Total Bill Paid Amount: {{bills.amount}} </ion-item>\r\n         <ion-item>Date: {{bills.date}}</ion-item>\r\n         <ion-item> Payer List:</ion-item>\r\n        <ion-list *ngFor=\"let ud of bills.userDetail\">\r\n            <ion-item *ngIf=\"ud.paid != 0\">\r\n              <ion-label> <b>{{ud?.userProfile?.login['username']}}</b><b *ngIf=\"ud?.userProfile?.login['username'] ==null\">No Username</b> </ion-label>\r\n               <ion-buttons slot=\"end\">\r\n                  €{{ud.paid}}\r\n               </ion-buttons>\r\n            </ion-item>\r\n         </ion-list>\r\n       <!--   <ion-item> Contributing Users:</ion-item>\r\n         <ion-list *ngFor=\"let ud of bills.userDetail\">\r\n            <ion-item *ngIf=\"ud.paid != 0\">\r\n               <ion-label> <b>{{ud?.userProfile?.login['username']}}</b><b *ngIf=\"ud?.userProfile?.login['username'] == null\">No Username</b> </ion-label>\r\n            </ion-item>\r\n         </ion-list> -->\r\n      <img src= \"{{image_base_url+''+bills.bill_Id}}\" onError=\"src='assets/images/Logo-colive.png'\" class=\"profile-img\">\r\n      </ion-card-content>\r\n   </ion-card>\r\n   <ion-item *ngIf=\"billsArr.length == 0\">\r\n      <h2> No bills updated yet.</h2>\r\n   </ion-item>\r\n</ion-content> "

/***/ }),

/***/ "./src/app/pages/group-bill-listing/group-bill-listing.page.scss":
/*!***********************************************************************!*\
  !*** ./src/app/pages/group-bill-listing/group-bill-listing.page.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2dyb3VwLWJpbGwtbGlzdGluZy9ncm91cC1iaWxsLWxpc3RpbmcucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/group-bill-listing/group-bill-listing.page.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/group-bill-listing/group-bill-listing.page.ts ***!
  \*********************************************************************/
/*! exports provided: GroupBillListingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupBillListingPage", function() { return GroupBillListingPage; });
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







var GroupBillListingPage = /** @class */ (function () {
    function GroupBillListingPage(route, router, http, itemService, alertController, loadingController, modalController, platform, navCtrl, popoverController) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.http = http;
        this.itemService = itemService;
        this.alertController = alertController;
        this.loadingController = loadingController;
        this.modalController = modalController;
        this.platform = platform;
        this.navCtrl = navCtrl;
        this.popoverController = popoverController;
        this.base_url = "";
        this.image_base_url = "";
        this.teamId = "";
        this.teamname = "";
        this.billsArr = [];
        this.sucessArr = [];
        this.isSuccess = true;
        this.isError = false;
        this.base_url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url;
        this.image_base_url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].image_base_url;
        this.route.queryParams.subscribe(function (params) {
            _this.teamId = params['teamId'];
            _this.teamname = params['teamname'];
        });
    }
    GroupBillListingPage.prototype.ngOnInit = function () {
        this.getBillListing();
    };
    GroupBillListingPage.prototype.ionViewWillEnter = function () {
        this.getBillListing();
    };
    GroupBillListingPage.prototype.callme = function (event) {
        console.log(event);
    };
    GroupBillListingPage.prototype.getBillListing = function () {
        var _this = this;
        console.log('my bills get list out under this function');
        var token;
        if (sessionStorage.getItem("auth_token") != undefined) {
            token = sessionStorage.getItem("auth_token");
            console.log(token);
        }
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]();
        headers = headers.set('Authorization', token);
        this.pleaseWait();
        this.http.get(this.base_url + 'team/bills/' + this.teamId, {
            headers: headers
        }).subscribe(function (response) {
            _this.loadingController.dismiss().then(function (a) { return console.log('dismissed'); });
            _this.billsArr = response.bills;
            console.log(_this.billsArr);
        }, function (error) {
            console.log("ERROR");
            console.log(error.error);
        });
    };
    GroupBillListingPage.prototype.pleaseWait = function () {
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
    GroupBillListingPage.prototype.removeBill = function (billId) {
        this.confirmDelete(billId);
    };
    GroupBillListingPage.prototype.confirmDelete = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Confirm!',
                            message: 'You really want to delete bill?',
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
                                        _this.deleteBill(id);
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
    GroupBillListingPage.prototype.deleteBill = function (billId) {
        var _this = this;
        if (billId) {
            var token = void 0;
            if (sessionStorage.getItem("auth_token") != undefined) {
                token = sessionStorage.getItem("auth_token");
                console.log(token);
            }
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]();
            headers = headers.set('Authorization', token);
            this.http.delete(this.base_url + 'bill/' + billId, { headers: headers }).subscribe(function (response) {
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
    GroupBillListingPage.prototype.presentAlert = function (message) {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Success Message!',
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
                                        _this.router.navigate(['bill-listing']);
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
    GroupBillListingPage.prototype.presentLoading = function () {
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
    GroupBillListingPage.prototype.presentLoadingCustom = function (msg) {
        return __awaiter(this, void 0, void 0, function () {
            var loading, _a, role, data;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            message: msg,
                            duration: 3000,
                            cssClass: 'custom-class custom-loading1'
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
    GroupBillListingPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-group-bill-listing',
            template: __webpack_require__(/*! ./group-bill-listing.page.html */ "./src/app/pages/group-bill-listing/group-bill-listing.page.html"),
            styles: [__webpack_require__(/*! ./group-bill-listing.page.scss */ "./src/app/pages/group-bill-listing/group-bill-listing.page.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"],
            _services_item_service__WEBPACK_IMPORTED_MODULE_2__["ItemService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"]])
    ], GroupBillListingPage);
    return GroupBillListingPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-group-bill-listing-group-bill-listing-module.js.map