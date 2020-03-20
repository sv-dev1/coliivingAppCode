(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-edit-task-edit-task-module"],{

/***/ "./src/app/pages/edit-task/edit-task.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/edit-task/edit-task.module.ts ***!
  \*****************************************************/
/*! exports provided: EditTaskPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditTaskPageModule", function() { return EditTaskPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _edit_task_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-task.page */ "./src/app/pages/edit-task/edit-task.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _edit_task_page__WEBPACK_IMPORTED_MODULE_5__["EditTaskPage"]
    }
];
var EditTaskPageModule = /** @class */ (function () {
    function EditTaskPageModule() {
    }
    EditTaskPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_edit_task_page__WEBPACK_IMPORTED_MODULE_5__["EditTaskPage"]]
        })
    ], EditTaskPageModule);
    return EditTaskPageModule;
}());



/***/ }),

/***/ "./src/app/pages/edit-task/edit-task.page.html":
/*!*****************************************************!*\
  !*** ./src/app/pages/edit-task/edit-task.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n   <ion-toolbar>\n      <ion-buttons slot=\"start\">\n         <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n      <ion-buttons slot=\"end\">\n         <ion-back-button defaultHref=\"dashboard\"></ion-back-button>\n      </ion-buttons>\n      <ion-title>\n         Edit task\n      </ion-title>\n   </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\t <form [formGroup]=\"task_form\" (submit)=\"editTask()\">\n      <ion-row>\n         <ion-col>\n            <div class=\"ion-text-start\">\n               <ion-item>\n                  <ion-label style=\"color: #ed502d;\" position=\"floating\">Task name</ion-label>\n                  <ion-input type=\"text\" formControlName=\"task_name\" required></ion-input>\n               </ion-item>\n               <div *ngIf=\"submitted && f.task_name.errors\" class=\"invalid-feedback\" style=\"padding: 10px; left;\">\n                  <span *ngIf=\"f.task_name.errors.required\" style=\" text-align: left;color: red;font-style:italic;font-size: 12px;\">Title is required.\n                  </span>\n                   <span *ngIf=\"f.task_name.errors.pattern\" style=\" text-align: left;color: red;font-style:italic;font-size: 12px;\">Task name is not filled up correctly.\n                  </span>\n               </div>\n            </div>\n         </ion-col>\n      </ion-row>\n      <ion-row>\n         <ion-col>\n            <div class=\"ion-text-start\">\n               <ion-item>\n                  <ion-label  position=\"floating\" style=\"color: #ed502d;\">Select Status</ion-label>\n                  <ion-select  formControlName=\"status\"> \n                       <ion-select-option  [value]=\"PENDING\">PENDING</ion-select-option>\n                       <ion-select-option  [value]=\"COMPLETE\" >COMPLETE</ion-select-option>\n\n                  </ion-select>\n               </ion-item>\n               <div *ngIf=\"submitted && f.status.errors\" class=\"invalid-feedback\" style=\"padding: 10px; left;\">\n                  <span *ngIf=\"f.status.errors.required\" style=\"text-align: left;color: red;font-style:italic;font-size: 12px;\">This field is required.\n                  </span>\n               </div>\n            </div>\n         </ion-col>\n      </ion-row>\n      <ion-row>\n         <ion-col>\n            <div class=\"ion-text-start\">\n               <ion-item>\n                  <ion-label style=\"color: #ed502d;\" position=\"floating\">Notes (optional)</ion-label>\n                  <ion-input type=\"text\" formControlName=\"notes\"></ion-input>\n               </ion-item>\n            </div>\n         </ion-col>\n      </ion-row>\n      <ion-row>\n         <ion-col>\n            <div class=\"ion-text-start\">\n               <button class=\"submit-btn\" expand=\"block\" type=\"submit\">Edit task\n               </button>\n            </div>\n         </ion-col>\n      </ion-row>\n   </form>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/edit-task/edit-task.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/edit-task/edit-task.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2VkaXQtdGFzay9lZGl0LXRhc2sucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/edit-task/edit-task.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/edit-task/edit-task.page.ts ***!
  \***************************************************/
/*! exports provided: EditTaskPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditTaskPage", function() { return EditTaskPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
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







var EditTaskPage = /** @class */ (function () {
    function EditTaskPage(formBuilder, route, alertController, loadingController, http, router) {
        var _this = this;
        this.formBuilder = formBuilder;
        this.route = route;
        this.alertController = alertController;
        this.loadingController = loadingController;
        this.http = http;
        this.router = router;
        this.base_url = "";
        this.task_form = this.formBuilder.group({
            task_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern("[a-zA-Z0-9]+[a-zA-Z0-9 ]+")]),
            status: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            notes: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
        });
        this.route.queryParams.subscribe(function (params) {
            console.log(params);
            _this.taskId = params['taskId'];
        });
        this.base_url = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].base_url;
    }
    EditTaskPage.prototype.ngOnInit = function () {
        this.getSuggestionList();
    };
    Object.defineProperty(EditTaskPage.prototype, "f", {
        get: function () {
            return this.task_form.controls;
        },
        enumerable: true,
        configurable: true
    });
    EditTaskPage.prototype.editTask = function () {
        var _this = this;
        console.log(this.task_form.value);
        if (this.task_form.invalid) {
            return;
        }
        else {
            var input_data = {
                "task_name": this.task_form.value.task_name,
                "status": this.task_form.value.status,
                "notes": this.task_form.value.notes,
            };
            var formData = new FormData();
            formData.append('task_name', input_data.task_name);
            formData.append('status', input_data.status);
            formData.append('notes', input_data.notes);
            var token = void 0;
            if (sessionStorage.getItem("auth_token") != undefined) {
                token = sessionStorage.getItem("auth_token");
            }
            this.presentLoading();
            var httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                    'authorization': token
                })
            };
            this.http.post(this.base_url + 'editTask/' + this.taskId, formData, httpOptions).subscribe(function (response) {
                _this.presentAlert(response.message);
                _this.loadingController.dismiss().then(function (a) { return console.log('dismissed'); });
            }, function (error) {
                //console.log("ERROR");
                //console.log(error.error);
                _this.loadingController.dismiss().then(function (a) { return console.log('dismissed'); });
            });
        }
    };
    EditTaskPage.prototype.getSuggestionList = function () {
        var _this = this;
        var token;
        if (sessionStorage.getItem("auth_token") != undefined) {
            token = sessionStorage.getItem("auth_token");
        }
        this.presentLoading();
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]();
        headers = headers.set('Authorization', token);
        this.http.get(this.base_url + 'task/' + this.taskId + '/suggestion', {
            headers: headers
        }).subscribe(function (response) {
            _this.taskArr = response.suggestionList.taskArr;
            _this.task_form = _this.formBuilder.group({
                task_name: _this.taskArr.task_name,
                status: _this.taskArr.status,
                notes: _this.taskArr.notes,
            });
            console.log('this.taskForm', _this.task_form.value);
            _this.loadingController.dismiss().then(function (a) { return console.log('dismissed'); });
        }, function (error) {
            //console.log("ERROR");
            //console.log(error.error);
            _this.loadingController.dismiss().then(function (a) { return console.log('dismissed'); });
        });
    };
    EditTaskPage.prototype.presentLoading = function () {
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
    EditTaskPage.prototype.presentAlert = function (messageC) {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Success Message!',
                            subHeader: messageC,
                            message: 'Click Okay to redirect to Go Back and click Cancel to stay on same page.',
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
                                        _this.router.navigate(['/teams']);
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
    EditTaskPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-task',
            template: __webpack_require__(/*! ./edit-task.page.html */ "./src/app/pages/edit-task/edit-task.page.html"),
            styles: [__webpack_require__(/*! ./edit-task.page.scss */ "./src/app/pages/edit-task/edit-task.page.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], EditTaskPage);
    return EditTaskPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-edit-task-edit-task-module.js.map