(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-group-summary-page-group-summary-page-module"],{

/***/ "./src/app/pages/group-summary-page/group-summary-page.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/group-summary-page/group-summary-page.module.ts ***!
  \***********************************************************************/
/*! exports provided: GroupSummaryPagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupSummaryPagePageModule", function() { return GroupSummaryPagePageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _group_summary_page_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./group-summary-page.page */ "./src/app/pages/group-summary-page/group-summary-page.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _group_summary_page_page__WEBPACK_IMPORTED_MODULE_5__["GroupSummaryPagePage"]
    }
];
var GroupSummaryPagePageModule = /** @class */ (function () {
    function GroupSummaryPagePageModule() {
    }
    GroupSummaryPagePageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_group_summary_page_page__WEBPACK_IMPORTED_MODULE_5__["GroupSummaryPagePage"]]
        })
    ], GroupSummaryPagePageModule);
    return GroupSummaryPagePageModule;
}());



/***/ }),

/***/ "./src/app/pages/group-summary-page/group-summary-page.page.html":
/*!***********************************************************************!*\
  !*** ./src/app/pages/group-summary-page/group-summary-page.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n   <ion-toolbar>\r\n      <ion-buttons slot=\"start\">\r\n         <ion-menu-button></ion-menu-button>\r\n      </ion-buttons>\r\n      <ion-buttons slot=\"end\">\r\n         <ion-back-button defaultHref=\"dashboard\"></ion-back-button>\r\n      </ion-buttons>\r\n      <ion-title>\r\n        {{teamname}}\r\n      </ion-title>\r\n   </ion-toolbar>\r\n</ion-header>\r\n<ion-content padding>\r\n   <ion-card>\r\n   <ion-card-header>\r\n         <!-- <ion-card-title>   Title : {{bills.title}}</ion-card-title> -->\r\n       \r\n      </ion-card-header>\r\n   <ion-card-content>\r\n      <ion-list>\r\n         <ion-item>\r\n            <ion-label>Colivers</ion-label>\r\n         <ul class=\"first-list\">\r\n            <li>Overpaid(+)</li>\r\n            <li>UnderPaid(-)</li>\r\n         </ul>\r\n         </ion-item>\r\n     </ion-list>\r\n  \r\n  <ion-list>\r\n      <ion-item *ngFor=\"let user of positiveUser\">\r\n               <ion-label>{{user.userName}}</ion-label>\r\n               <ion-buttons slot=\"end\">\r\n                  <span>+${{user.amountToPay}}</span>\r\n               </ion-buttons>\r\n            </ion-item>\r\n         </ion-list>\r\n         <ion-list>\r\n            <ion-item *ngFor=\"let user of negativeUser\">\r\n               <ion-label>{{user.userName}}</ion-label>\r\n               <ion-buttons>\r\n                  <span>-${{user.amountToPay}}</span>\r\n               </ion-buttons>\r\n            </ion-item>\r\n         </ion-list>\r\n       <ion-list >\r\n            <ion-item *ngFor=\"let user of balancedAmount\">\r\n               <ion-label> {{user.from}} will pay €{{user.amountToPay}} to {{user.to}}</ion-label>\r\n            </ion-item>\r\n         </ion-list>\r\n      </ion-card-content>\r\n   </ion-card>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/group-summary-page/group-summary-page.page.scss":
/*!***********************************************************************!*\
  !*** ./src/app/pages/group-summary-page/group-summary-page.page.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2dyb3VwLXN1bW1hcnktcGFnZS9ncm91cC1zdW1tYXJ5LXBhZ2UucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/group-summary-page/group-summary-page.page.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/group-summary-page/group-summary-page.page.ts ***!
  \*********************************************************************/
/*! exports provided: GroupSummaryPagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupSummaryPagePage", function() { return GroupSummaryPagePage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/clipboard/ngx */ "./node_modules/@ionic-native/clipboard/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
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








var GroupSummaryPagePage = /** @class */ (function () {
    function GroupSummaryPagePage(route, popoverController, clipboard, router, formBuilder, http, alertController, loadingController, viewCtrl) {
        var _this = this;
        this.route = route;
        this.popoverController = popoverController;
        this.clipboard = clipboard;
        this.router = router;
        this.formBuilder = formBuilder;
        this.http = http;
        this.alertController = alertController;
        this.loadingController = loadingController;
        this.viewCtrl = viewCtrl;
        this.base_url = "";
        this.teamId = [];
        this.teamname = "";
        this.billsArr = [];
        this.teamUser = [];
        this.userName = [];
        this.totalAmount = 0;
        this.userDetail = [];
        this.userAmount = [];
        this.balancedAmount = [];
        this.positiveUser = [];
        this.negativeUser = [];
        this.base_url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url;
        this.route.queryParams.subscribe(function (params) {
            _this.teamId.push(params['teamId']);
            _this.teamname = params['teamname'];
        });
    }
    GroupSummaryPagePage.prototype.ngOnInit = function () {
        this.getUsersList();
    };
    GroupSummaryPagePage.prototype.getBillListing = function () {
        var _this = this;
        var token;
        if (sessionStorage.getItem("auth_token") != undefined) {
            token = sessionStorage.getItem("auth_token");
        }
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]();
        headers = headers.set('Authorization', token);
        this.pleaseWait();
        this.http.get(this.base_url + 'team/bills/summary/' + this.teamId, {
            headers: headers
        }).subscribe(function (response) {
            _this.loadingController.dismiss().then(function (a) { return console.log('dismissed'); });
            _this.billsArr = response.bills;
            _this.billsArr.forEach(function (obj) {
                _this.userDetail.push(obj.userDetail);
            });
            console.log(_this.userDetail);
            var itemRecord = [];
            _this.userDetail.forEach(function (ele) {
                ele.forEach(function (item) {
                    if (!_this.userAmount.find(function (o) { return o.userId === item.userId; })) {
                        var obj = {};
                        obj['userId'] = item.userId,
                            obj['amount'] = item.amount,
                            obj['userName'] = item.userProfile.login['username'],
                            obj['paid'] = item.paid,
                            obj['amountToPay'] = 0;
                        _this.userAmount.push(obj);
                    }
                    else {
                        itemRecord.push(item);
                    }
                });
            });
            _this.userAmount.forEach(function (obj) {
                itemRecord.forEach(function (ele) {
                    if (ele.userId === obj.userId) {
                        obj.amount = Number(obj.amount) + Number(ele.amount);
                        obj.paid = Number(obj.paid) + Number(ele.paid);
                    }
                });
            });
            _this.userAmount.forEach(function (obj) {
                if (Number(obj.paid) > Number(obj.amount)) {
                    _this.positiveUser.push(obj);
                }
                if (Number(obj.paid) < Number(obj.amount)) {
                    _this.negativeUser.push(obj);
                }
            });
            // console.log(this.userAmount);
            _this.positiveUser.forEach(function (obj) {
                obj.amountToPay = Number(obj.paid) - Number(obj.amount);
            });
            _this.negativeUser.forEach(function (obj) {
                obj.amountToPay = Number(obj.paid) - Number(obj.amount);
                var string = obj.amountToPay.toString();
                var split = string.replace('-', '');
                console.log(split);
                obj.amountToPay = split;
            });
            // console.log(this.positiveUser);
            console.log(_this.negativeUser);
            if (_this.positiveUser.length == 1) {
                _this.negativeUser.forEach(function (obj) {
                    _this.positiveUser.forEach(function (ele) {
                        var post = {};
                        post['from'] = obj.userName,
                            post['to'] = ele.userName,
                            post['amountToPay'] = (obj.amountToPay),
                            _this.balancedAmount.push(post);
                    });
                });
            }
            else {
                _this.negativeUser.forEach(function (obj) {
                    _this.positiveUser.forEach(function (ele) {
                        var post = {};
                        post['from'] = obj.userName,
                            post['to'] = ele.userName,
                            post['amountToPay'] = (ele.amountToPay),
                            _this.balancedAmount.push(post);
                    });
                });
            }
            console.log(_this.balancedAmount);
        }, function (error) {
            console.log("ERROR");
            console.log(error.error);
        });
    };
    GroupSummaryPagePage.prototype.pleaseWait = function () {
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
    GroupSummaryPagePage.prototype.getUsersList = function () {
        var _this = this;
        var postArr = { 'teamId': this.teamId };
        var token;
        if (sessionStorage.getItem("auth_token") != undefined) {
            token = sessionStorage.getItem("auth_token");
        }
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]();
        headers = headers.set('Authorization', token);
        var httpOptions = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json', 'authorization': token }) };
        this.http.post(this.base_url + 'team/users', postArr, httpOptions).subscribe(function (response) {
            _this.teamUser = response.teams;
            _this.userLength = _this.teamUser.length;
            _this.teamUser.forEach(function (obj) {
                _this.userName.push(obj.login['username']);
            });
            //  console.log(this.userLength);
            _this.getBillListing();
        }, function (error) {
            console.log("ERROR");
            console.log(error.error);
        });
    };
    GroupSummaryPagePage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-group-summary-page',
            template: __webpack_require__(/*! ./group-summary-page.page.html */ "./src/app/pages/group-summary-page/group-summary-page.page.html"),
            styles: [__webpack_require__(/*! ./group-summary-page.page.scss */ "./src/app/pages/group-summary-page/group-summary-page.page.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["PopoverController"],
            _ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_5__["Clipboard"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"]])
    ], GroupSummaryPagePage);
    return GroupSummaryPagePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-group-summary-page-group-summary-page-module.js.map