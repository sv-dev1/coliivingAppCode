(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-house-chores-house-chores-module"],{

/***/ "./src/app/pages/house-chores/house-chores.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/house-chores/house-chores.module.ts ***!
  \***********************************************************/
/*! exports provided: HouseChoresPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HouseChoresPageModule", function() { return HouseChoresPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _house_chores_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./house-chores.page */ "./src/app/pages/house-chores/house-chores.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _house_chores_page__WEBPACK_IMPORTED_MODULE_5__["HouseChoresPage"]
    }
];
var HouseChoresPageModule = /** @class */ (function () {
    function HouseChoresPageModule() {
    }
    HouseChoresPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_house_chores_page__WEBPACK_IMPORTED_MODULE_5__["HouseChoresPage"]]
        })
    ], HouseChoresPageModule);
    return HouseChoresPageModule;
}());



/***/ }),

/***/ "./src/app/pages/house-chores/house-chores.page.html":
/*!***********************************************************!*\
  !*** ./src/app/pages/house-chores/house-chores.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-menu-button></ion-menu-button>\r\n        </ion-buttons>\r\n\r\n         <ion-buttons slot=\"end\">\r\n             <ion-back-button defaultHref=\"dashboard\"></ion-back-button>\r\n         </ion-buttons> \r\n        <ion-title>\r\n            House Chores\r\n        </ion-title>\r\n    </ion-toolbar>\r\n</ion-header> \r\n\r\n<ion-content padding>\r\n<ion-row class=\"header-btn\">\r\n    <ion-col [routerLink]=\"['/house-chores']\"> \r\n            <ion-button type =\"button\" color=\"mycolor\" class=\"active custom-btn\">All</ion-button> \r\n    </ion-col>  \r\n     <ion-col [routerLink]=\"['/calender']\"> \r\n            <ion-button type =\"button\"   color=\"mycolor\" class=\"custom-btn\">Calendar</ion-button> \r\n    </ion-col>   \r\n</ion-row>\r\n<ion-row class=\"header-btn\">\r\n    <ion-col [routerLink]=\"['/teams']\"> \r\n            <ion-button type =\"button\" color=\"mycolor\" class=\"custom-btn\">Tasks of my groups</ion-button> \r\n    </ion-col>   \r\n    <ion-col [routerLink]=\"['/add-tasks']\">  \r\n            <ion-button type =\"button\" color=\"mycolor\" class=\"custom-btn\">Add Task</ion-button> \r\n    </ion-col> \r\n</ion-row>  \r\n  \r\n\r\n<ion-card>\r\n  <ion-card-header>\r\n    <ion-card-subtitle>Tasks to do </ion-card-subtitle>\r\n    <ion-card-title>To do</ion-card-title>\r\n  </ion-card-header>\r\n\r\n  <ion-card-content>\r\n\r\n  <ion-list> \r\n    <ion-item-sliding *ngFor=\"let taskList of tasksListArr\">\r\n      <ion-item [routerLink]=\"['/add-suggestion']\"  [queryParams]=\"{taskId: taskList.taskId}\">\r\n       <ion-icon *ngIf=\"taskList.status== 'COMPLETE'\" name=\"checkmark-circle-outline\" style=\"height:20px;\"></ion-icon> \r\n        <ion-icon  *ngIf=\"taskList.status== 'PENDING'\" name=\"git-merge\" style=\"height:20px;\"></ion-icon> \r\n        <ion-label style=\"font-size:14px;\">{{taskList['task.task_name']}}</ion-label>\r\n        <div id=\"arrowAnim\" slot=\"end\">\r\n          <div class=\"arrowSliding\">\r\n            <div class=\"arrow\"></div>\r\n          </div>\r\n          <div class=\"arrowSliding delay1\">\r\n            <div class=\"arrow\"></div>\r\n          </div>\r\n        \r\n        </div>\r\n      </ion-item>\r\n      <ion-item-options>\r\n       <button danger (click)=\"removeItem(taskList)\"><ion-icon name=\"trash\"></ion-icon> Delete</button>\r\n      </ion-item-options>\r\n\r\n    </ion-item-sliding>\r\n  </ion-list>\r\n  </ion-card-content>\r\n</ion-card> \r\n\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/house-chores/house-chores.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/house-chores/house-chores.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvdXNlLWNob3Jlcy9ob3VzZS1jaG9yZXMucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/house-chores/house-chores.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/house-chores/house-chores.page.ts ***!
  \*********************************************************/
/*! exports provided: HouseChoresPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HouseChoresPage", function() { return HouseChoresPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_item_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/item.service */ "./src/app/services/item.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
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









var HouseChoresPage = /** @class */ (function () {
    function HouseChoresPage(router, http, formBuilder, itemService, alertController, loadingController, navCtrl, popoverController) {
        this.router = router;
        this.http = http;
        this.formBuilder = formBuilder;
        this.itemService = itemService;
        this.alertController = alertController;
        this.loadingController = loadingController;
        this.navCtrl = navCtrl;
        this.popoverController = popoverController;
        this.base_url = "";
        this.tasksListArr = [];
        this.userListArr = [];
        this.base_url = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].base_url;
        this.getTeamsList();
    }
    HouseChoresPage.prototype.ngOnInit = function () {
        //this.getTeamsList();
    };
    HouseChoresPage.prototype.ionViewWillEnter = function () {
        this.getTeamsList();
    };
    HouseChoresPage.prototype.presentLoading = function () {
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
    HouseChoresPage.prototype.getTeamsList = function () {
        var _this = this;
        var token;
        if (sessionStorage.getItem("auth_token") != undefined) {
            token = sessionStorage.getItem("auth_token");
        }
        this.presentLoading();
        //const httpOptions = { headers: new HttpHeaders({'authorization': token })};
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpHeaders"]();
        headers = headers.set('Authorization', token);
        this.http.get(this.base_url + 'tasks', { headers: headers }).subscribe(function (response) {
            _this.tasksListArr = response.tasks;
            _this.loadingController.dismiss().then(function (a) { return console.log('dismissed'); });
        }, function (error) {
            console.log("ERROR");
            console.log(error.error);
            _this.loadingController.dismiss().then(function (a) { return console.log('dismissed'); });
        });
    };
    HouseChoresPage.prototype.removeItem = function (taskArr) {
        this.confirmDelete(taskArr);
    };
    HouseChoresPage.prototype.confirmDelete = function (taskArr) {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Confirm!',
                            message: 'You really want to delete task?',
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
                                        _this.deleteTask(taskArr);
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
    HouseChoresPage.prototype.deleteTask = function (taskArr) {
        var _this = this;
        console.log(taskArr);
        var token;
        if (sessionStorage.getItem("auth_token") != undefined) {
            token = sessionStorage.getItem("auth_token");
        }
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpHeaders"]();
        headers = headers.set('Authorization', token);
        var taskId = taskArr.taskId;
        this.http.delete(this.base_url + 'task/' + taskId, { headers: headers }).subscribe(function (response) {
            console.log(response);
            _this.loadingController.dismiss().then(function (a) { return console.log('dismissed'); });
            /*this.presentLoadingCustom(response.message); */
            _this.popoverController.dismiss();
            _this.presentAlert(response.message);
        }, function (error) {
            console.log("ERROR");
            console.log(error.error);
        });
    };
    HouseChoresPage.prototype.presentAlert = function (message) {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Success Message!',
                            subHeader: message,
                            message: 'Click Okay to redirect to Dashboard and click Cancel to stay on same page.',
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
    HouseChoresPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-house-chores',
            template: __webpack_require__(/*! ./house-chores.page.html */ "./src/app/pages/house-chores/house-chores.page.html"),
            styles: [__webpack_require__(/*! ./house-chores.page.scss */ "./src/app/pages/house-chores/house-chores.page.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _services_item_service__WEBPACK_IMPORTED_MODULE_3__["ItemService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"]])
    ], HouseChoresPage);
    return HouseChoresPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-house-chores-house-chores-module.js.map