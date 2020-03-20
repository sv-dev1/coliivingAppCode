(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-add-suggestion-add-suggestion-module"],{

/***/ "./src/app/pages/add-suggestion/add-suggestion.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/add-suggestion/add-suggestion.module.ts ***!
  \***************************************************************/
/*! exports provided: AddSuggestionPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddSuggestionPageModule", function() { return AddSuggestionPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _add_suggestion_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-suggestion.page */ "./src/app/pages/add-suggestion/add-suggestion.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _add_suggestion_page__WEBPACK_IMPORTED_MODULE_5__["AddSuggestionPage"]
    }
];
var AddSuggestionPageModule = /** @class */ (function () {
    function AddSuggestionPageModule() {
    }
    AddSuggestionPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_add_suggestion_page__WEBPACK_IMPORTED_MODULE_5__["AddSuggestionPage"]]
        })
    ], AddSuggestionPageModule);
    return AddSuggestionPageModule;
}());



/***/ }),

/***/ "./src/app/pages/add-suggestion/add-suggestion.page.html":
/*!***************************************************************!*\
  !*** ./src/app/pages/add-suggestion/add-suggestion.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n   <ion-toolbar>\r\n      <ion-buttons slot=\"start\">\r\n         <ion-menu-button></ion-menu-button>\r\n      </ion-buttons>\r\n      <ion-buttons slot=\"end\">\r\n         <ion-back-button defaultHref=\"house-chores\"></ion-back-button>\r\n      </ion-buttons>\r\n      <ion-title>\r\n         Add suggestions\r\n      </ion-title>\r\n   </ion-toolbar>\r\n</ion-header>\r\n<ion-content padding>\r\n   <ion-grid>\r\n      <ion-row>\r\n         <ion-col>\r\n            <ion-card>\r\n               <ion-card-header>\r\n                  <ion-card-subtitle>Task Details</ion-card-subtitle>\r\n                  <ion-card-title style=\"color: #ed502d;font-size: 22px;\">{{taskArr?.task_name}}</ion-card-title>\r\n               </ion-card-header>\r\n               <ion-card-content>\r\n                  <span class=\"notes\">{{taskArr?.notes}}</span><br>\r\n                  <span class=\"task\"><b>Task status</b>:&nbsp;{{taskArr?.status}}</span><br>\r\n                  <span class=\"task\"><b>Task due date</b>:&nbsp;{{taskDate}}</span>\r\n               </ion-card-content>\r\n            </ion-card>\r\n         </ion-col>\r\n      </ion-row>\r\n   </ion-grid>\r\n   <ion-grid>\r\n      <ion-row>\r\n         <ion-col>\r\n            <div class=\"ion-text-start\">\r\n               <ion-item>\r\n                  <ion-label position=\"floating\" style=\"color: #ed502d;\">Add new suggestion</ion-label>\r\n                  <ion-textarea placeholder=\"Add new suggestion\" [(ngModel)]=\"suggestion\"></ion-textarea>\r\n               </ion-item>\r\n            </div>\r\n         </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n         <ion-col>\r\n            <div class=\"ion-text-start\">\r\n               <ion-item>\r\n                  <button class=\"submit-btn\" expand=\"block\" type=\"submit\" (click)=\"addSuggestion()\" [disabled]=\"suggestion === ''\" style=\"width:auto;text-align:left;    margin: 0 0 12px 0;\">\r\n                  Add\r\n                  </button> \r\n               </ion-item>\r\n            </div>\r\n         </ion-col>\r\n      </ion-row>\r\n   </ion-grid>\r\n   <ion-grid>\r\n      <ion-row>\r\n         <ion-col>\r\n            <div class=\"ion-text-start\">\r\n               <ion-item>\r\n                  <ion-label position=\"floating\" style=\"color: #ed502d;font-size:18px;\">Old Suggestions:</ion-label>\r\n               </ion-item>\r\n            </div>\r\n         </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n         <ion-list>\r\n            <ion-card *ngFor=\"let suggestion of  suggestionList\">\r\n               <ion-item>\r\n                  <div item-left>\r\n                     <ion-img slot=\"end\" src=\"assets/images/user_dummy.png\" style=\"width: 36px;\">  </ion-img>\r\n                  </div>\r\n                  <div item-right>\r\n                     <ion-label >{{suggestion.userProfile?.firstName}}</ion-label>\r\n                  </div>\r\n               </ion-item>\r\n               <ion-card-header>\r\n                  <ion-card-title style=\"color: #ed502d;font-size:15px;padding-top: 0;\">{{ suggestion?.notes }}</ion-card-title>\r\n               </ion-card-header>\r\n               <ion-card-content style=\"color: #333;font-size:15px;padding-top: 0;\">{{ suggestion?.created_at }}</ion-card-content>\r\n            </ion-card>\r\n         </ion-list>\r\n      </ion-row>\r\n   </ion-grid>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/add-suggestion/add-suggestion.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/add-suggestion/add-suggestion.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FkZC1zdWdnZXN0aW9uL2FkZC1zdWdnZXN0aW9uLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/add-suggestion/add-suggestion.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/add-suggestion/add-suggestion.page.ts ***!
  \*************************************************************/
/*! exports provided: AddSuggestionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddSuggestionPage", function() { return AddSuggestionPage; });
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







var AddSuggestionPage = /** @class */ (function () {
    function AddSuggestionPage(route, router, http, itemService, alertController, loadingController) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.http = http;
        this.itemService = itemService;
        this.alertController = alertController;
        this.loadingController = loadingController;
        this.base_url = "";
        this.suggestion = "";
        this.isItemAvailable = false;
        this.userId = sessionStorage.getItem("loggedInId");
        this.loggedInUsername = sessionStorage.getItem("loggedInUsername");
        this.isItemAvailable = false;
        this.suggestion = '';
        this.base_url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url;
        this.route.queryParams.subscribe(function (params) {
            console.log(params);
            _this.taskId = params['taskId'];
        });
    }
    AddSuggestionPage.prototype.ngOnInit = function () {
        this.getSuggestionList();
    };
    AddSuggestionPage.prototype.presentLoading = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loading, _a, role, data;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            duration: 10000,
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
                        console.log('Suggestion added successfully!!!');
                        return [2 /*return*/];
                }
            });
        });
    };
    AddSuggestionPage.prototype.addSuggestion = function () {
        var _this = this;
        var input_data = {
            "userId": this.userId,
            "taskId": this.taskId,
            "notes": this.suggestion,
        };
        console.log(input_data);
        var resArr;
        this.presentLoading();
        this.itemService.add_suggesation(input_data).subscribe(function (response) {
            console.log(response.message);
            _this.loadingController.dismiss().then(function (a) { return console.log('dismissed'); });
            _this.suggestion = '';
            _this.presentAlert(response.message);
        }, function (error) {
            console.log(error);
        });
    };
    AddSuggestionPage.prototype.presentAlert = function (message) {
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
                                        _this.router.navigate(['house-chores']);
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
    AddSuggestionPage.prototype.getSuggestionList = function () {
        var _this = this;
        var token;
        if (sessionStorage.getItem("auth_token") != undefined) {
            token = sessionStorage.getItem("auth_token");
        }
        this.presentLoading();
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]();
        headers = headers.set('Authorization', token);
        this.http.get(this.base_url + 'task/' + this.taskId + '/suggestion', {
            headers: headers
        }).subscribe(function (response) {
            _this.suggestionList = response.suggestionList.suggestionArr;
            _this.taskArr = response.suggestionList.taskArr;
            var splitDate = _this.taskArr.due_date.split('T');
            _this.taskDate = splitDate[0];
            console.log('this.taskArr', _this.taskArr);
            _this.loadingController.dismiss().then(function (a) { return console.log('dismissed'); });
        }, function (error) {
            //console.log("ERROR");
            //console.log(error.error);
            _this.loadingController.dismiss().then(function (a) { return console.log('dismissed'); });
        });
    };
    AddSuggestionPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-suggestion',
            template: __webpack_require__(/*! ./add-suggestion.page.html */ "./src/app/pages/add-suggestion/add-suggestion.page.html"),
            styles: [__webpack_require__(/*! ./add-suggestion.page.scss */ "./src/app/pages/add-suggestion/add-suggestion.page.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"],
            _services_item_service__WEBPACK_IMPORTED_MODULE_2__["ItemService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]])
    ], AddSuggestionPage);
    return AddSuggestionPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-add-suggestion-add-suggestion-module.js.map