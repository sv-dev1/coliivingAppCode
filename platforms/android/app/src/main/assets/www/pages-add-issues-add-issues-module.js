(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-add-issues-add-issues-module"],{

/***/ "./src/app/pages/add-issues/add-issues.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/add-issues/add-issues.module.ts ***!
  \*******************************************************/
/*! exports provided: AddIssuesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddIssuesPageModule", function() { return AddIssuesPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _add_issues_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-issues.page */ "./src/app/pages/add-issues/add-issues.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _add_issues_page__WEBPACK_IMPORTED_MODULE_5__["AddIssuesPage"]
    }
];
var AddIssuesPageModule = /** @class */ (function () {
    function AddIssuesPageModule() {
    }
    AddIssuesPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_add_issues_page__WEBPACK_IMPORTED_MODULE_5__["AddIssuesPage"]]
        })
    ], AddIssuesPageModule);
    return AddIssuesPageModule;
}());



/***/ }),

/***/ "./src/app/pages/add-issues/add-issues.page.html":
/*!*******************************************************!*\
  !*** ./src/app/pages/add-issues/add-issues.page.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n        <ion-menu-button></ion-menu-button>\r\n    </ion-buttons> \r\n\t<ion-buttons slot=\"end\">\r\n\t    <ion-back-button defaultHref=\"dashboard\"></ion-back-button>\r\n\t</ion-buttons> \r\n    <ion-title>Add Issues</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding>\r\n  <form [formGroup]=\"issues_from\" (submit)=\"registerIssues(issues_from.value)\">\r\n        <ion-row>\r\n            <ion-col>\r\n                <div class=\"ion-text-start\">\r\n                    <ion-item>\r\n                        <ion-label style=\"color: #ed502d;\" position=\"floating\">Issue Title</ion-label>\r\n                        <ion-input type=\"text\" formControlName=\"title\" required></ion-input>\r\n                    </ion-item>\r\n                    <div *ngIf=\"submitted && f.title.errors\" class=\"invalid-feedback\" style=\"padding: 10px; left;\">\r\n                        <span *ngIf=\"f.title.errors.required\" style=\" text-align: left;color: red;font-style:italic;font-size: 12px;\">Title is required.\r\n             </span>\r\n                    </div>\r\n                </div>\r\n            </ion-col>\r\n        </ion-row>  \r\n        <ion-row>\r\n            <ion-col>\r\n                <div class=\"ion-text-start\">\r\n                    <ion-item>\r\n                        <ion-label  style=\"color: #ed502d;\" position=\"floating\">Choose Category</ion-label>\r\n                           <ion-select formControlName=\"issue_category\" okText=\"Okay\" cancelText=\"Dismiss\">\r\n                              <ion-select-option value=\"1\">Maintenance</ion-select-option>\r\n                              <ion-select-option value=\"2\">Flatmates issues</ion-select-option>\r\n                              <ion-select-option value=\"3\">Payment</ion-select-option> \r\n                              <ion-select-option value=\"4\">Neighbours</ion-select-option> \r\n                            </ion-select>\r\n                    </ion-item>\r\n                   \r\n                 \r\n                </div>\r\n            </ion-col>\r\n        </ion-row>   \r\n        <ion-row>\r\n            <ion-col>\r\n                <div class=\"ion-text-start\">\r\n                    <ion-item>\r\n                        <ion-label style=\"color: #ed502d;\" position=\"floating\">Description</ion-label>\r\n                          <ion-input formControlName=\"desc\" placeholder=\"desc\" required></ion-input>\r\n \r\n                    </ion-item>\r\n                    <div *ngIf=\"submitted && f.desc.errors\" class=\"invalid-feedback\" style=\"padding: 10px; left;\">\r\n                        <span *ngIf=\"f.desc.errors.required\" style=\" text-align: left;color: red;font-style:italic;font-size: 12px;\">This field is required.\r\n             </span>\r\n                    </div>\r\n                </div>\r\n            </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n            <ion-col>\r\n                <div class=\"ion-text-start\">            \r\n                    <ion-item>\r\n                        <ion-label  position=\"floating\" style=\"color: #ed502d;\">Team</ion-label> \r\n                        <ion-select formControlName=\"teamId\" (ionChange)=\"onTeamSelection($event.target.value)\" value=\"Select Team\" required> \r\n                            <ion-select-option value=\"\" *ngIf=\"teamListArr?.length == 0\" disabled>No team available\r\n                            </ion-select-option>\r\n\r\n                            <ion-select-option *ngFor=\"let teamList of teamListArr\" [value]=\"teamList.teamId\" selected>{{teamList.name}}</ion-select-option>\r\n                        </ion-select>\r\n                    </ion-item>\r\n                    <div *ngIf=\"submitted && f.teamId.errors\" class=\"invalid-feedback\" style=\"padding: 10px; left;\">\r\n                        <span *ngIf=\"f.teamId.errors.required\" style=\"  text-align: left;color: red;font-style:italic;font-size:12px;\">This field is required.\r\n                       </span>\r\n                    </div>\r\n                </div>\r\n            </ion-col>\r\n        </ion-row> \r\n\r\n        <ion-row>\r\n            <ion-col>\r\n                <div class=\"ion-text-start\">\r\n                    <ion-item>\r\n                     <ion-label style=\"color: #ed502d;\" position=\"floating\">Colivers</ion-label> \r\n                     <ion-select *ngIf=\"userListArr != undefiend\"  multiple=\"true\" formControlName=\"assign_to\" value=\"Select Users\" okText=\"Okay\" cancelText=\"Dismiss\" required> \r\n\r\n\r\n                            <ion-select-option *ngFor=\"let userList of userListArr\" [value]=\"userList.userId\" >{{userList.login?.username}}</ion-select-option>\r\n                        </ion-select> \r\n                    </ion-item>\r\n                </div>\r\n            </ion-col> \r\n        </ion-row>\r\n        <ion-row>\r\n            <ion-col>\r\n                  <div *ngIf=\"submitted && f.assign_to.errors\" class=\"invalid-feedback\" style=\"padding: 10px; left;\">\r\n                        <span *ngIf=\"f.assign_to.errors.required\" style=\" text-align: left;color: red;\">This field is required.\r\n                        </span>\r\n                    </div>\r\n            </ion-col>\r\n        </ion-row>\r\n \r\n\r\n       <ion-row>\r\n            <ion-col>\r\n                <div class=\"ion-text-start\">\r\n                    <ion-item> \r\n                      <ion-label style=\"color: #ed502d;\" position=\"floating\">Upload photo</ion-label></ion-item>\r\n                    <ion-item>\r\n                         <ion-toolbar style=\"color: #ed502d;\">\r\n                            <button type=\"button\" fill=\"clear\" expand=\"full\" color=\"light\" (click)=\"selectImage()\">\r\n                            <ion-icon slot=\"start\" name=\"camera\"></ion-icon>\r\n                            Select Image</button>\r\n                        </ion-toolbar> \r\n                    </ion-item>\r\n                    <img [src]=\"currentImage\" *ngIf=\"currentImage\">\r\n                </div>\r\n            </ion-col>\r\n        </ion-row> \r\n\r\n        <ion-row>\r\n            <ion-col>\r\n                <div class=\"ion-text-start\">\r\n                   <div *ngIf=\"isSuccess == true\" >\r\n                      <span class=\"for-sub-name\">{{sucessArr.message}}</span>\r\n                    </div>\r\n                </div>\r\n            </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n            <ion-col>\r\n                <div class=\"ion-text-start\">\r\n                    <button class=\"submit-btn\" expand=\"block\" type=\"submit\">Add Issue\r\n                    </button>\r\n                </div>\r\n            </ion-col>\r\n        </ion-row> \r\n  </form>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/add-issues/add-issues.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/add-issues/add-issues.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FkZC1pc3N1ZXMvYWRkLWlzc3Vlcy5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/add-issues/add-issues.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/add-issues/add-issues.page.ts ***!
  \*****************************************************/
/*! exports provided: AddIssuesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddIssuesPage", function() { return AddIssuesPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_item_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/item.service */ "./src/app/services/item.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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









//import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';


var AddIssuesPage = /** @class */ (function () {
    function AddIssuesPage(router, http, formBuilder, itemService, alertController, loadingController, camera, actionSheetController, platform) {
        this.router = router;
        this.http = http;
        this.formBuilder = formBuilder;
        this.itemService = itemService;
        this.alertController = alertController;
        this.loadingController = loadingController;
        this.camera = camera;
        this.actionSheetController = actionSheetController;
        this.platform = platform;
        this.base_url = "";
        this.image_url = "";
        this.currentImage = "";
        this.submitted = false;
        this.fagree = false;
        this.isError = false;
        this.isSuccess = false;
        this.res = [];
        this.errorsArr = [];
        this.sucessArr = [];
        this.assignArr = [];
        this.usersArr = [];
        this.teamListArr = [];
        this.userListArr = [];
        this.userListArrForAssign = [];
        this.base_url = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].base_url;
        this.issues_from = this.formBuilder.group({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            issue_category: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            assign_to: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            teamId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            desc: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            photo: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
        });
    }
    AddIssuesPage.prototype.ngOnInit = function () {
        this.getTeamsList();
    };
    AddIssuesPage.prototype.presentLoading = function () {
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
    AddIssuesPage.prototype.getUnique = function (arr, comp) {
        var unique = arr
            .map(function (e) { return e[comp]; })
            .map(function (e, i, final) { return final.indexOf(e) === i && i; })
            .filter(function (e) { return arr[e]; }).map(function (e) { return arr[e]; });
        return unique;
    };
    AddIssuesPage.prototype.getTeamsList = function () {
        var _this = this;
        var token;
        if (sessionStorage.getItem("auth_token") != undefined) {
            token = sessionStorage.getItem("auth_token");
        }
        this.presentLoading();
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpHeaders"]();
        headers = headers.set('Authorization', token);
        this.http.get(this.base_url + 'getTeam', { headers: headers }).subscribe(function (response) {
            response.teams.forEach(function (obj) {
                var newObj = {};
                newObj['id'] = obj.id,
                    newObj['name'] = obj.name,
                    newObj['teamId'] = obj.teamId,
                    newObj['userId'] = obj.userId,
                    newObj['isChecked'] = false,
                    _this.teamListArr.push(newObj);
            });
            console.log(_this.teamListArr);
        }, function (error) {
            console.log("ERROR");
            console.log(error.error);
            if (error.error == "Unauthorized" && error.status == 401) {
                console.log("true");
                _this.expiredMessage('Session Expired.You must login again!');
            }
        });
    };
    AddIssuesPage.prototype.expiredMessage = function (msg) {
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
                        console.log('Logout Successfull!');
                        if (sessionStorage.getItem("auth_token") != undefined) {
                            sessionStorage.removeItem("auth_token");
                            sessionStorage.removeItem("loggedInUsername");
                            sessionStorage.removeItem("userQuestinaire");
                            sessionStorage.removeItem("ref_code");
                            sessionStorage.removeItem("loggedInId");
                            sessionStorage.removeItem("roleId");
                            localStorage.removeItem("auth_token");
                            localStorage.removeItem("loggedInUsername");
                            localStorage.removeItem("userQuestinaire");
                            localStorage.removeItem("ref_code");
                            localStorage.removeItem("loggedInId");
                            localStorage.removeItem("roleId");
                            this.router.navigate(['login']);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    AddIssuesPage.prototype.onTeamSelection = function (checkedVal) {
        var _this = this;
        var postArr = { 'teamId': checkedVal };
        var token;
        if (sessionStorage.getItem("auth_token") != undefined) {
            token = sessionStorage.getItem("auth_token");
        }
        this.presentLoading();
        var httpOptions = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpHeaders"]({ 'Content-Type': 'application/json', 'authorization': token }) };
        this.http.post(this.base_url + 'team/users', postArr, httpOptions).subscribe(function (response) {
            var arrayUniqe = [];
            response.teams.forEach(function (obj) {
                var newObj = {};
                newObj['id'] = obj.id,
                    newObj['team_id'] = obj.team_id,
                    newObj['userId'] = obj.userId,
                    newObj['userProfile'] = obj.userProfile,
                    newObj['login'] = obj.login,
                    newObj['isChecked'] = false,
                    arrayUniqe.push(newObj);
            });
            var getresArr = _this.getUnique(arrayUniqe, 'userId');
            _this.userListArr = getresArr;
            _this.userListArrForAssign = getresArr;
            console.log(_this.userListArr);
        }, function (error) {
            console.log("ERROR");
            console.log(error);
            if (error.error == "Unauthorized" && error.status == 401) {
                console.log("true");
                _this.expiredMessage('Session Expired.You must login again!');
            }
        });
        console.log("Checkbox Checked");
    };
    Object.defineProperty(AddIssuesPage.prototype, "f", {
        get: function () { return this.issues_from.controls; },
        enumerable: true,
        configurable: true
    });
    AddIssuesPage.prototype.custom_message = function (msg) {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Success Message!',
                            subHeader: msg,
                            message: 'Click Okay to redirect to flatemates issues listing page and click Cancel to stay on same page.',
                            buttons: [{
                                    text: 'Cancel',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function (blah) {
                                        console.log('Confirmed Cancel: blah');
                                        _this.issues_from.reset();
                                    }
                                }, {
                                    text: 'Okay',
                                    handler: function () {
                                        _this.router.navigate(['dashboard']);
                                        console.log('Confirmed Okay');
                                        _this.issues_from.reset();
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
    AddIssuesPage.prototype.registerIssues = function (form) {
        var _this = this;
        this.submitted = true;
        if (this.issues_from.invalid) {
            this.content.scrollToTop(200);
            return;
        }
        else {
            var input_data = {
                "title": form.title,
                "issue_category": form.issue_category,
                "desc": form.desc,
                "teamId": form.teamId,
                "photo": this.ImageObj,
                "assign_to": form.assign_to,
            };
            console.log(input_data);
            var formData = new FormData();
            formData.append('title', input_data.title);
            formData.append('desc', input_data.desc);
            formData.append('issue_category', input_data.issue_category);
            formData.append('teamId', input_data.teamId);
            formData.append('photo', this.ImageObj);
            formData.append('assign_to', input_data.assign_to);
            var token = void 0;
            if (sessionStorage.getItem("auth_token") != undefined) {
                token = sessionStorage.getItem("auth_token");
            }
            this.presentLoading();
            var httpOptions = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpHeaders"]({ 'authorization': token }) };
            this.http.post(this.base_url + 'issues/create', formData, httpOptions).subscribe(function (response) {
                console.log(response);
                _this.isSuccess = true;
                _this.sucessArr = response;
                _this.isError = false;
                _this.loadingController.dismiss().then(function (a) { return console.log('dismissed'); });
                _this.custom_message(response.message);
                //this.presentAlert(response.message); 
                _this.sucessArr = [];
            }, function (error) {
                console.log("ERROR");
                console.log(error.error);
                if (error.error == "Unauthorized" && error.status == 401) {
                    console.log("true");
                    _this.expiredMessage('Session Expired.You must login again!');
                }
            });
        }
    };
    AddIssuesPage.prototype.selectImage = function () {
        return __awaiter(this, void 0, void 0, function () {
            var actionSheet;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.actionSheetController.create({
                            header: "Select Image source",
                            buttons: [{
                                    text: 'Load from Library',
                                    handler: function () {
                                        _this.captureImage(true);
                                    }
                                },
                                {
                                    text: 'Use Camera',
                                    handler: function () {
                                        _this.captureImage(false);
                                    }
                                },
                                {
                                    text: 'Cancel',
                                    role: 'cancel'
                                }
                            ]
                        })];
                    case 1:
                        actionSheet = _a.sent();
                        return [4 /*yield*/, actionSheet.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AddIssuesPage.prototype.captureImage = function (useAlbum) {
        return __awaiter(this, void 0, void 0, function () {
            var options, imageData, contentType, realData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        options = __assign({ quality: 100, destinationType: this.camera.DestinationType.DATA_URL, encodingType: this.camera.EncodingType.JPEG, mediaType: this.camera.MediaType.PICTURE }, useAlbum ? { sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM } : {});
                        return [4 /*yield*/, this.camera.getPicture(options)];
                    case 1:
                        imageData = _a.sent();
                        this.currentImage = "data:image/jpeg;base64," + imageData;
                        console.log(this.currentImage);
                        contentType = 'image/jpeg';
                        realData = imageData;
                        this.ImageObj = this.b64toBlob(realData, contentType);
                        return [2 /*return*/];
                }
            });
        });
    };
    AddIssuesPage.prototype.b64toBlob = function (b64Data, contentType) {
        contentType = contentType || '';
        var sliceSize = 512;
        var byteCharacters = atob(b64Data);
        var byteArrays = [];
        for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
            var slice = byteCharacters.slice(offset, offset + sliceSize);
            var byteNumbers = new Array(slice.length);
            for (var i = 0; i < slice.length; i++) {
                byteNumbers[i] = slice.charCodeAt(i);
            }
            var byteArray = new Uint8Array(byteNumbers);
            byteArrays.push(byteArray);
        }
        var blob = new Blob(byteArrays, { type: contentType });
        return blob;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonContent"]),
        __metadata("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonContent"])
    ], AddIssuesPage.prototype, "content", void 0);
    AddIssuesPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-issues',
            template: __webpack_require__(/*! ./add-issues.page.html */ "./src/app/pages/add-issues/add-issues.page.html"),
            styles: [__webpack_require__(/*! ./add-issues.page.scss */ "./src/app/pages/add-issues/add-issues.page.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _services_item_service__WEBPACK_IMPORTED_MODULE_3__["ItemService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
            _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_7__["Camera"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]])
    ], AddIssuesPage);
    return AddIssuesPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-add-issues-add-issues-module.js.map