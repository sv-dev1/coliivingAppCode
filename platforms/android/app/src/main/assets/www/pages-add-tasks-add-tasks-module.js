(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-add-tasks-add-tasks-module"],{

/***/ "./src/app/pages/add-tasks/add-tasks.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/add-tasks/add-tasks.module.ts ***!
  \*****************************************************/
/*! exports provided: AddTasksPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTasksPageModule", function() { return AddTasksPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _add_tasks_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-tasks.page */ "./src/app/pages/add-tasks/add-tasks.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _add_tasks_page__WEBPACK_IMPORTED_MODULE_5__["AddTasksPage"]
    }
];
var AddTasksPageModule = /** @class */ (function () {
    function AddTasksPageModule() {
    }
    AddTasksPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_add_tasks_page__WEBPACK_IMPORTED_MODULE_5__["AddTasksPage"]]
        })
    ], AddTasksPageModule);
    return AddTasksPageModule;
}());



/***/ }),

/***/ "./src/app/pages/add-tasks/add-tasks.page.html":
/*!*****************************************************!*\
  !*** ./src/app/pages/add-tasks/add-tasks.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n   <ion-toolbar>\r\n      <ion-buttons slot=\"start\">\r\n         <ion-menu-button></ion-menu-button>\r\n      </ion-buttons>\r\n      <ion-buttons slot=\"end\">\r\n         <ion-back-button defaultHref=\"dashboard\"></ion-back-button>\r\n      </ion-buttons>\r\n      <ion-title>\r\n         Add task\r\n      </ion-title>\r\n   </ion-toolbar>\r\n</ion-header>\r\n<ion-content [class.someClass]=\"applyClass\">\r\n   <form [formGroup]=\"team_form\" (submit)=\"registerTeam(team_form.value)\">\r\n   <ion-row>\r\n      <ion-col>\r\n         <div class=\"ion-text-start\">\r\n            <ion-item>\r\n               <ion-label style=\"color: #ed502d;\" position=\"floating\">Task name</ion-label>\r\n               <ion-input type=\"text\" formControlName=\"task_name\" required></ion-input>\r\n            </ion-item>\r\n            <div *ngIf=\"submitted && f.task_name.errors\" class=\"invalid-feedback\" style=\"padding: 10px; left;\">\r\n               <span *ngIf=\"f.task_name.errors.required\" style=\" text-align: left;color: red;font-style:italic;font-size: 12px;\">Title is required.\r\n               </span>\r\n                <span *ngIf=\"f.task_name.errors.pattern\" style=\" text-align: left;color: red;font-style:italic;font-size: 12px;\">Task name is not filled up correctly.\r\n               </span>\r\n            </div>\r\n         </div>\r\n      </ion-col>\r\n   </ion-row>\r\n   <ion-row>\r\n      <ion-col>\r\n         <div class=\"ion-text-start\">\r\n            <ion-item>\r\n               <ion-label  position=\"floating\" style=\"color: #ed502d;\">Select Group</ion-label>\r\n               <ion-select  formControlName=\"team_id\" (ionChange)=\"onTeamSelection($event.target.value)\" value=\"Select Team\"> \r\n                  <ion-select-option *ngFor=\"let teamList of teamListArr; let i = index\" [value]=\"teamList.teamId\">{{teamList.name}}</ion-select-option>\r\n               </ion-select>\r\n            </ion-item>\r\n            <div *ngIf=\"submitted && f.team_id.errors\" class=\"invalid-feedback\" style=\"padding: 10px; left;\">\r\n               <span *ngIf=\"f.team_id.errors.required\" style=\"text-align: left;color: red;font-style:italic;font-size: 12px;\">This field is required.\r\n               </span>\r\n            </div>\r\n         </div>\r\n      </ion-col>\r\n   </ion-row>\r\n   <ion-row>\r\n      <ion-col>\r\n         <div class=\"ion-text-start\">\r\n            <ion-item>\r\n               <ion-label style=\"color: #ed502d;\" position=\"floating\">Coliver</ion-label>\r\n               <ion-select multiple=\"true\" formControlName=\"assign_to\" value=\"Select Users\" okText=\"Okay\" cancelText=\"Dismiss\" required>\r\n               <ion-select-option value=\"{{userId}}\">Myself ({{nickname}})</ion-select-option>\r\n                <ion-select-option *ngFor=\"let userList of usersArr\" [value]=\"userList?.userId\">\r\n                      {{userList?.username}}\r\n                  </ion-select-option>  \r\n               </ion-select>\r\n            </ion-item>\r\n            <div *ngIf=\"submitted && f.assign_to.errors\" class=\"invalid-feedback\" style=\"padding: 10px; left;\">\r\n               <span *ngIf=\"f.assign_to.errors.required\" style=\"text-align: left;color: red;font-style:italic;font-size: 12px;\">This field is required.\r\n               </span>\r\n            </div>\r\n         </div>\r\n      </ion-col>\r\n   </ion-row>\r\n   <ion-row>\r\n      <ion-col>\r\n         <div class=\"ion-text-start\">\r\n            <ion-item>\r\n               <ion-label style=\"color: #ed502d;\" position=\"floating\">Due date</ion-label>\r\n               <ion-datetime formControlName=\"due_date\"  displayFormat=\"YYYY-MM-DD\" placeholder=\"Select Date\" [max]=\"maxData\" required></ion-datetime>\r\n            </ion-item>\r\n            <div *ngIf=\"submitted && f.due_date.errors\" class=\"invalid-feedback\" style=\"padding: 10px; left;\">\r\n               <span *ngIf=\"f.due_date.errors.required\" style=\" text-align: left;color: red;font-style:italic;font-size: 12px;\">This field is required.\r\n               </span>\r\n            </div>\r\n         </div>\r\n      </ion-col>\r\n   </ion-row>\r\n   <ion-row>\r\n      <ion-col>\r\n         <div class=\"ion-text-start\">\r\n            <ion-item >\r\n               <ion-label style=\"color: #ed502d;\" position=\"floating\">Please choose one</ion-label>\r\n               <ion-select formControlName=\"category\" value=\"Select User\" okText=\"Okay\" cancelText=\"Dismiss\" class=\"task-selct\">\r\n                  <ion-select-option *ngFor=\"let category of categoriesArr\" [value]=\"category.category_id\">{{category.name}}</ion-select-option>\r\n               </ion-select>\r\n            </ion-item>\r\n          \r\n         </div>\r\n      </ion-col>\r\n   </ion-row>\r\n   <ion-row>\r\n      <ion-col>\r\n         <div class=\"ion-text-start\">\r\n            <ion-item>\r\n               <button slot=\"start\" (click)=\"selectImage()\" type=\"button\" fill=\"clear\" color=\"light\" >\r\n                  <ion-icon slot=\"start\" name=\"camera\"></ion-icon>\r\n                  Upload photo (optional)\r\n               </button>\r\n            </ion-item>\r\n            <ion-item *ngIf=\"image_url\">\r\n               <img   [src]=\"image_url\" (click)=\"selectImage()\" onError=\"src='https://dummyimage.com/600x400/000/fff'\" class=\"profile-img\"> \r\n            </ion-item>\r\n         </div>\r\n      </ion-col>\r\n   </ion-row>\r\n   <ion-row>\r\n      <ion-col>\r\n         <div class=\"ion-text-start\">\r\n            <ion-item>\r\n               <ion-label style=\"color: #ed502d;\" position=\"floating\">Notes (optional)</ion-label>\r\n               <ion-textarea rows=\"6\"  type=\"text\" formControlName=\"notes\"></ion-textarea>\r\n            </ion-item>\r\n         </div>\r\n      </ion-col>\r\n   </ion-row>\r\n   <ion-row>\r\n      <ion-col>\r\n         <div class=\"ion-text-start\">\r\n            <div *ngIf=\"isSuccess == true\" >\r\n               <span class=\"for-sub-name\">{{sucessArr.message}}</span>\r\n            </div>\r\n         </div>\r\n      </ion-col>\r\n   </ion-row>\r\n   <ion-row>\r\n      <ion-col>\r\n         <div class=\"ion-text-start\">\r\n            <button *ngIf=\"isUploading==false\"class=\"submit-btn\" expand=\"block\" type=\"submit\">Add task\r\n            </button>\r\n            <button *ngIf=\"isUploading==true\" class=\"btn btn-primary\" type=\"button\" disabled>\r\n           <span class=\"spinner-grow spinner-grow-sm\" role=\"status\" aria-hidden=\"true\"></span>\r\n           Please wait sometime. we are uploading your task...\r\n         </button>\r\n         </div>\r\n      </ion-col>\r\n   </ion-row>\r\n   </form>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/add-tasks/add-tasks.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/add-tasks/add-tasks.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FkZC10YXNrcy9hZGQtdGFza3MucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/add-tasks/add-tasks.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/add-tasks/add-tasks.page.ts ***!
  \***************************************************/
/*! exports provided: AddTasksPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTasksPage", function() { return AddTasksPage; });
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











var AddTasksPage = /** @class */ (function () {
    function AddTasksPage(router, http, formBuilder, itemService, alertController, loadingController, camera, actionSheetController, platform) {
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
        this.userId = "";
        this.loggedInUsername = "";
        this.image_url = "";
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
        this.categoriesArr = [];
        this.userListArr = [];
        this.usersArr1 = [];
        this.userListArrForAssign = [];
        this.nickname = '';
        this.IsOneGroup = false;
        this.isUploading = false;
        this.maxData = (new Date()).getFullYear() + 5;
        //this.getUsersList();
        this.base_url = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].base_url;
        this.team_form = this.formBuilder.group({
            task_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("[a-zA-Z0-9]+[a-zA-Z0-9 ]+")]),
            assign_to: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            team_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            due_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            photo: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            category: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            notes: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
        });
        this.userId = sessionStorage.getItem("loggedInId");
        this.loggedInUsername = sessionStorage.getItem("loggedInUsername");
    }
    AddTasksPage.prototype.ngOnInit = function () {
        this.nickname = sessionStorage.getItem("loggedInUsername");
    };
    AddTasksPage.prototype.ionViewWillEnter = function () {
        this.getTeamsList();
    };
    AddTasksPage.prototype.custommessage = function (msg) {
        return __awaiter(this, void 0, void 0, function () {
            var loading, _a, role, data;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            message: msg,
                            duration: 2000,
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
                        return [2 /*return*/];
                }
            });
        });
    };
    AddTasksPage.prototype.getTeamsList = function () {
        var _this = this;
        console.log('All teams gets list out under this function');
        var token;
        if (sessionStorage.getItem("auth_token") != undefined) {
            token = sessionStorage.getItem("auth_token");
        }
        this.presentLoading();
        //const httpOptions = { headers: new HttpHeaders({'authorization': token })};
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpHeaders"]();
        headers = headers.set('Authorization', token);
        this.http.get(this.base_url + 'getTeam', {
            headers: headers
        }).subscribe(function (response) {
            _this.teamListArr = response.teams;
            if (_this.teamListArr.length == 1) {
                // console.log("oneTeam");
                _this.team_form.controls['team_id'].setValue(_this.teamListArr[0].teamId);
            }
            _this.loadingController.dismiss().then(function (a) { return console.log('dismissed'); });
        }, function (error) {
            console.log(error.error);
            _this.loadingController.dismiss().then(function (a) { return console.log('ERROR'); });
        });
        this.http.get(this.base_url + 'categories', {
            headers: headers
        }).subscribe(function (response) {
            _this.categoriesArr = response.categories;
        }, function (error) {
            //console.log("ERROR");
            //  console.log(error.error);
            if (error.error == 'Unauthorized') {
                _this.custommessage('Please login again...');
            }
        });
        this.loadingController.dismiss().then(function (a) { return console.log('dismissed'); });
    };
    AddTasksPage.prototype.onTeamSelection = function (checkedVal) {
        var _this = this;
        /*
            if(checkedVal == this.userId)
            {
              this.usersArr = [];
              let arr = {
                'userId':this.userId,
                'login':{ 'username':this.loggedInUsername }
              };
            this.usersArr = arr;
            console.log(this.usersArr);
            return;
            }
        */
        var postArr = {
            'teamId': [checkedVal]
        };
        this.usersArr = [];
        var token;
        this.presentLoading();
        if (sessionStorage.getItem("auth_token") != undefined) {
            token = sessionStorage.getItem("auth_token");
        }
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'authorization': token
            })
        };
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
            _this.usersArr1 = getresArr;
            _this.usersArr1.forEach(function (element) {
                if (element.login.username != _this.nickname) {
                    //  console.log(element.login.roleId);
                    if (element.login.roleId == '4') {
                        _this.usersArr.push({ userId: element.userId, name: element.userProfile.firstName + ' ' + element.userProfile.lastName, email: element.userProfile.email, username: element.login.username });
                    }
                }
            });
            console.log(_this.usersArr);
            _this.loadingController.dismiss();
        }, function (error) {
            //  console.log("ERROR");
            //   console.log(error);
        });
    };
    AddTasksPage.prototype.getUnique = function (arr, comp) {
        var unique = arr
            .map(function (e) { return e[comp]; })
            // store the keys of the unique objects
            .map(function (e, i, final) { return final.indexOf(e) === i && i; })
            // eliminate the dead keys & store unique objects
            .filter(function (e) { return arr[e]; }).map(function (e) { return arr[e]; });
        return unique;
    };
    AddTasksPage.prototype.presentLoading = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loading, _a, role, data;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            duration: 4000,
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
    Object.defineProperty(AddTasksPage.prototype, "f", {
        get: function () {
            return this.team_form.controls;
        },
        enumerable: true,
        configurable: true
    });
    AddTasksPage.prototype.presentAlert = function (messageC) {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Success Message!',
                            subHeader: messageC,
                            message: 'Click Okay to redirect to dashboard page and click Cancel to stay on same page.',
                            buttons: [{
                                    text: 'Cancel',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function (blah) {
                                        console.log('Confirmed Cancel: Cancelled');
                                    }
                                }, {
                                    text: 'Okay',
                                    handler: function () {
                                        _this.router.navigate(['house-chores']);
                                        console.log('Confirmed Okay');
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
    AddTasksPage.prototype.fileProgress = function (event) {
        this.fileData = event.target.files[0];
        console.log(this.fileData);
    };
    AddTasksPage.prototype.registerTeam = function (form) {
        var _this = this;
        this.submitted = true;
        this.isUploading = true;
        if (this.team_form.invalid) {
            this.isUploading = false;
            console.log("if");
            this.content.scrollToTop(200);
            return;
        }
        else {
            //  console.log("else");
            var dateString = form.due_date;
            var today = new Date();
            var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
            var taskDate = dateString + 'T' + time;
            var input_data = {
                "task_name": form.task_name,
                "team_id": form.team_id,
                "assign_to": form.assign_to,
                "due_date": taskDate,
                "photo": this.ImageObj,
                "category": form.category,
                "notes": form.notes,
            };
            var formData = new FormData();
            formData.append('task_name', input_data.task_name);
            formData.append('assignTo', input_data.assign_to);
            formData.append('teamId', input_data.team_id);
            formData.append('due_date', input_data.due_date);
            formData.append('photo', this.ImageObj);
            formData.append('category_id', input_data.category);
            formData.append('notes', input_data.notes);
            var token = void 0;
            if (sessionStorage.getItem("auth_token") != undefined) {
                token = sessionStorage.getItem("auth_token");
            }
            this.presentLoading();
            var httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpHeaders"]({
                    'authorization': token
                })
            };
            this.http.post(this.base_url + 'createTask', formData, httpOptions).subscribe(function (response) {
                //  console.log(response); 
                _this.isSuccess = true;
                _this.sucessArr = response;
                _this.isError = false;
                _this.loadingController.dismiss().then(function (a) { return console.log('dismissed'); });
                _this.team_form.reset();
                _this.presentAlert(response.message);
                _this.sucessArr = [];
                _this.isUploading = false;
            }, function (error) {
                console.log("ERROR");
                console.log(error.error);
                _this.isUploading = false;
            });
        }
    };
    AddTasksPage.prototype.selectImage = function () {
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
    AddTasksPage.prototype.captureImage = function (useAlbum) {
        return __awaiter(this, void 0, void 0, function () {
            var options, imageData, contentType, realData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        options = __assign({ quality: 100, destinationType: this.camera.DestinationType.DATA_URL, encodingType: this.camera.EncodingType.JPEG, mediaType: this.camera.MediaType.PICTURE }, useAlbum ? {
                            sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM
                        } : {});
                        return [4 /*yield*/, this.camera.getPicture(options)];
                    case 1:
                        imageData = _a.sent();
                        this.image_url = "data:image/jpeg;base64," + imageData;
                        contentType = 'image/jpeg';
                        realData = imageData;
                        this.ImageObj = this.b64toBlob(realData, contentType);
                        console.log(this.ImageObj);
                        return [2 /*return*/];
                }
            });
        });
    };
    AddTasksPage.prototype.b64toBlob = function (b64Data, contentType) {
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
        var blob = new Blob(byteArrays, {
            type: contentType
        });
        return blob;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonContent"]),
        __metadata("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonContent"])
    ], AddTasksPage.prototype, "content", void 0);
    AddTasksPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-tasks',
            template: __webpack_require__(/*! ./add-tasks.page.html */ "./src/app/pages/add-tasks/add-tasks.page.html"),
            styles: [__webpack_require__(/*! ./add-tasks.page.scss */ "./src/app/pages/add-tasks/add-tasks.page.scss")]
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
    ], AddTasksPage);
    return AddTasksPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-add-tasks-add-tasks-module.js.map