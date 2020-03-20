(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-create-bills-create-bills-module"],{

/***/ "./src/app/pages/create-bills/create-bills.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/create-bills/create-bills.module.ts ***!
  \***********************************************************/
/*! exports provided: CreateBillsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateBillsPageModule", function() { return CreateBillsPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _create_bills_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./create-bills.page */ "./src/app/pages/create-bills/create-bills.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _create_bills_page__WEBPACK_IMPORTED_MODULE_5__["CreateBillsPage"]
    }
];
var CreateBillsPageModule = /** @class */ (function () {
    function CreateBillsPageModule() {
    }
    CreateBillsPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_create_bills_page__WEBPACK_IMPORTED_MODULE_5__["CreateBillsPage"]]
        })
    ], CreateBillsPageModule);
    return CreateBillsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/create-bills/create-bills.page.html":
/*!***********************************************************!*\
  !*** ./src/app/pages/create-bills/create-bills.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n   <ion-toolbar>\r\n      <ion-buttons slot=\"start\">\r\n         <ion-menu-button></ion-menu-button>\r\n      </ion-buttons>\r\n      <ion-buttons slot=\"end\">\r\n         <ion-back-button defaultHref=\"bill-listing\"></ion-back-button>\r\n      </ion-buttons>\r\n      <ion-title>\r\n         Create Bill\r\n      </ion-title>\r\n   </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n   <form [formGroup]=\"bills_form\" (submit)=\"register(bills_form.value)\">\r\n   <ion-row>\r\n      <ion-col>\r\n         <div class=\"ion-text-start\">\r\n            <ion-item>\r\n               <ion-label position=\"floating\" style=\"color: #ed502d;\">Purchased product</ion-label>\r\n               <ion-input type=\"text\" formControlName=\"title\" required></ion-input>\r\n            </ion-item>\r\n            <div *ngIf=\"submitted && f.title.errors\" class=\"invalid-feedback\" style=\"padding: 10px; left;\">\r\n               <span *ngIf=\"f.title.errors.required\" style=\" text-align: left;color: red;\">Title is required.\r\n               </span>\r\n            </div>\r\n         </div>\r\n      </ion-col>\r\n   </ion-row>\r\n   <ion-row>\r\n      <ion-col>\r\n         <div class=\"ion-text-start\">\r\n            <ion-item>\r\n               <ion-label  position=\"floating\" style=\"color: #ed502d;\" >Group</ion-label>\r\n               <ion-select formControlName=\"team\" (ionChange)=\"onTeamSelection($event.target.value)\" value=\"Select group\" required>\r\n                  <ion-select-option value=\"\" *ngIf=\"teamListArr?.length == 0\">No group avaliable. Please create group!.</ion-select-option>\r\n                  <ion-select-option *ngFor=\"let teamList of teamListArr\" [value]=\"teamList.teamId\" selected>{{teamList.name}}</ion-select-option>\r\n               </ion-select>\r\n            </ion-item>\r\n            <div *ngIf=\"submitted && f.team.errors\" class=\"invalid-feedback\" style=\"padding: 10px; left;\">\r\n               <span *ngIf=\"f.team.errors.required\" style=\"  text-align: left;color: red;font-style:italic;font-size:12px;\">This field is required.\r\n               </span>\r\n            </div>\r\n         </div>\r\n      </ion-col>\r\n   </ion-row>\r\n\r\n   <ion-row>\r\n      <ion-col>\r\n         <div class=\"ion-text-start\">\r\n            <ion-item>\r\n               <ion-input type=\"number\" formControlName=\"amount\" placeholder=\"Bill amount\"  required></ion-input>\r\n               <button type=\"button\" style=\"width:auto;\" slot=\"end\">EURO</button>\r\n            </ion-item>\r\n            <div *ngIf=\"submitted && f.amount.errors\" class=\"invalid-feedback\" style=\"padding: 10px; left;\">\r\n               <span *ngIf=\"f.amount.errors.required\" style=\"  text-align: left;color: red;font-style:italic;font-size:12px;\">This field is required.\r\n               </span>\r\n            </div>\r\n         </div>\r\n      </ion-col>\r\n   </ion-row>\r\n   <ion-row>\r\n      <ion-col>\r\n         <div class=\"ion-text-start\">\r\n            <ion-item>\r\n               <ion-label position=\"floating\" style=\"color: #ed502d;\">Date</ion-label>\r\n               <ion-datetime formControlName=\"date\" displayFormat=\"YYYY-MM-DD\" placeholder=\"Select date\" [max]=\"maxData\" required></ion-datetime>\r\n            </ion-item>\r\n            <div *ngIf=\"submitted && f.date.errors\" class=\"invalid-feedback\" style=\"padding: 10px; left;\">\r\n               <span *ngIf=\"f.date.errors.required\" style=\" text-align: left;color: red;font-style:italic;font-size:12px;\">This field is required.\r\n               </span>\r\n            </div>\r\n         </div>\r\n      </ion-col>\r\n   </ion-row>\r\n   <ion-row *ngIf=\"userListArr.length > 0\">\r\n      <ion-col>\r\n         <div class=\"ion-text-start\">\r\n            <ion-label style=\"color: #ed502d;\" position=\"floating\">Contributing colivers </ion-label>\r\n            <ion-list>\r\n               <ion-item>\r\n                  <ion-label><strong>Select All</strong></ion-label>\r\n                  <ion-checkbox slot=\"start\" \r\n                  [(ngModel)]=\"masterCheck\"\r\n                  [indeterminate]=\"isIndeterminate\"\r\n                  (click)=\"checkMaster($event)\" [ngModelOptions]=\"{standalone: true}\"></ion-checkbox>\r\n               </ion-item>\r\n            </ion-list>\r\n            <ion-list>\r\n               <ion-item *ngFor=\"let item of userListArr\">\r\n                  <ion-label>{{item.login?.username}}</ion-label>\r\n                  <ion-checkbox slot=\"start\" \r\n                  [(ngModel)]=\"item.isChecked\" \r\n                  [value]=\"item.userId\"\r\n                  (ionChange)=\"checkEvent($event)\" [ngModelOptions]=\"{standalone: true}\"></ion-checkbox>\r\n               </ion-item>\r\n            </ion-list>\r\n         </div>\r\n      </ion-col>\r\n   </ion-row>\r\n   <ion-row>\r\n      <ion-col>\r\n         <div *ngIf=\"submitted && f.assign_to.errors\" class=\"invalid-feedback\" style=\"padding: 10px; left;\">\r\n            <span *ngIf=\"f.assign_to.errors.required\" style=\" text-align: left;color: red;\">This field is required.\r\n            </span>\r\n         </div>\r\n      </ion-col>\r\n   </ion-row>\r\n  \r\n   <ion-row>\r\n      <div class=\"form-group\">\r\n         <ion-label  position=\"floating\" style=\"color: #ed502d;\">Select Who paid and amount</ion-label>\r\n         <div formArrayName=\"payees\">\r\n            <div class=\"cus-margin\" *ngFor=\"let item of websites.controls; let pointIndex=index\" [formGroupName]=\"pointIndex\">\r\n            <ion-row class=\"abc\">\r\n             <ion-col class=\"bca\">\r\n                  <ion-item> \r\n                     <ion-select #c *ngIf=\"userListArr.length > 0\" (ionChange)=\"setIndexHidden(c.value)\" formControlName=\"user\" value=\"Select Colivers\" okText=\"Okay\" cancelText=\"Dismiss\" required> \r\n                       <ion-label>Select Who paid</ion-label>  \r\n                           <ion-select-option *ngFor=\"let userList of userListArr\" [value]=\"userList.userId\" [disabled]=\"isDisabled(userList.userId)\">{{userList.login?.username}}\r\n                           </ion-select-option>\r\n                     </ion-select> \r\n                   </ion-item> \r\n               </ion-col>\r\n               <ion-col class=\"bca\">\r\n                  <input type=\"number\" class=\"form-control\" placeholder=\"Price\" formControlName=\"price\"> \r\n                  <button *ngIf=\"pointIndex != 0 \"  type=\"button\" (click)=\"removeUser(pointIndex)\" class=\"btn btn-link btn-fw\">Remove</button>\r\n               </ion-col>\r\n            </ion-row>\r\n         </div>\r\n         <div class=\"button-user\">\r\n            <button type=\"button\" (click)=\"addMoreSites()\" class=\"btn btn-link btn-fw add-user\">Add more payers</button>\r\n        </div>\r\n      </div>\r\n      </div>\r\n   </ion-row>\r\n   <ion-row>\r\n      <ion-col>\r\n         <div class=\"ion-text-start\">\r\n            <ion-item>\r\n               <ion-label style=\"color: #ed502d;\" position=\"floating\">Upload photo of a bill</ion-label>\r\n            </ion-item>\r\n            <ion-item>\r\n               <ion-toolbar style=\"color: #ed502d;\">\r\n                  <button type=\"button\" fill=\"clear\" expand=\"full\" color=\"light\" (click)=\"selectImage()\">\r\n                     <ion-icon slot=\"start\" name=\"camera\"></ion-icon>\r\n                     Select Image\r\n                  </button>\r\n               </ion-toolbar>\r\n            </ion-item>\r\n            <img [src]=\"currentImage\" *ngIf=\"currentImage\">\r\n         </div>\r\n      </ion-col>\r\n   </ion-row>\r\n   <ion-row>\r\n      <ion-col>\r\n         <div class=\"ion-text-start\">\r\n            <div *ngIf=\"isSuccess == true\" >\r\n               <span class=\"for-sub-name\">{{sucessArr.message}}</span>\r\n            </div>\r\n         </div>\r\n      </ion-col>\r\n   </ion-row>\r\n   <ion-row>\r\n      <ion-col>\r\n         <div class=\"ion-text-start\">\r\n            <button class=\"submit-btn\" expand=\"block\" type=\"submit\">Create Bill\r\n            </button>\r\n         </div>\r\n      </ion-col>\r\n   </ion-row>\r\n   </form>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/create-bills/create-bills.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/create-bills/create-bills.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NyZWF0ZS1iaWxscy9jcmVhdGUtYmlsbHMucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/create-bills/create-bills.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/create-bills/create-bills.page.ts ***!
  \*********************************************************/
/*! exports provided: CreateBillsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateBillsPage", function() { return CreateBillsPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_item_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/item.service */ "./src/app/services/item.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/ionic-webview/ngx */ "./node_modules/@ionic-native/ionic-webview/ngx/index.js");
/* harmony import */ var _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/file-path/ngx */ "./node_modules/@ionic-native/file-path/ngx/index.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
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
















var CreateBillsPage = /** @class */ (function () {
    function CreateBillsPage(router, http, formBuilder, itemService, alertController, loadingController, camera, file, webview, actionSheetController, platform, filePath, sanitizer) {
        this.router = router;
        this.http = http;
        this.formBuilder = formBuilder;
        this.itemService = itemService;
        this.alertController = alertController;
        this.loadingController = loadingController;
        this.camera = camera;
        this.file = file;
        this.webview = webview;
        this.actionSheetController = actionSheetController;
        this.platform = platform;
        this.filePath = filePath;
        this.sanitizer = sanitizer;
        this.base_url = "";
        this.submitted = false;
        this.fagree = false;
        this.isError = false;
        this.isSuccess = false;
        this.masterCheck = false;
        this.res = [];
        this.sentArr = [];
        this.payeeNameArr = [];
        this.payeePriceArr = [];
        this.errorsArr = [];
        this.sucessArr = [];
        this.assignArr = [];
        this.teamListArr = [];
        //temssg :any = [];
        this.userListArr = [];
        this.userListArrForAssign = [];
        this.currentImage = "";
        this.currentImageWithoutCode = "";
        this.maxData = (new Date()).getFullYear() + 5;
        this.selectedObjects = [];
        this.seletUser = [];
        this.loggedInId = sessionStorage.getItem("loggedInId");
        this.base_url = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].base_url;
        this.bills_form = this.formBuilder.group({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            team: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            amount: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            date: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            payees: this.formBuilder.array([this.formBuilder.group({ user: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                    price: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required) })]),
            //upload_bill: new FormControl(''),
            assign_to: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
        });
    }
    CreateBillsPage.prototype.checkMaster = function (event) {
        var _this = this;
        setTimeout(function () {
            _this.userListArr.forEach(function (obj) {
                obj.isChecked = _this.masterCheck;
            });
        });
    };
    CreateBillsPage.prototype.checkEvent = function (event) {
        if (this.selectedObjects.find(function (obj) { return obj === event.target.value; })) {
            this.selectedObjects.splice(this.selectedObjects.indexOf(event.target.value), 1);
        }
        else {
            this.selectedObjects.push(event.target.value);
        }
        // console.log(this.selectedObjects);
        this.bills_form.patchValue({ assign_to: this.selectedObjects });
        var totalItems = this.userListArr.length;
        var checked = 0;
        this.userListArr.map(function (obj) {
            if (obj.isChecked)
                checked++;
        });
        if (checked > 0 && checked < totalItems) {
            //If even one item is checked but not all
            this.isIndeterminate = true;
            this.masterCheck = false;
        }
        else if (checked == totalItems) {
            //If all are checked
            this.masterCheck = true;
            this.isIndeterminate = false;
        }
        else {
            //If none is checked
            this.isIndeterminate = false;
            this.masterCheck = false;
        }
    };
    CreateBillsPage.prototype.ngOnInit = function () {
        this.getTeamsList();
    };
    Object.defineProperty(CreateBillsPage.prototype, "websites", {
        get: function () {
            return this.bills_form.get('payees');
        },
        enumerable: true,
        configurable: true
    });
    CreateBillsPage.prototype.removeUser = function (index) {
        this.websites.removeAt(index);
    };
    CreateBillsPage.prototype.customMe = function (msg) {
        return __awaiter(this, void 0, void 0, function () {
            var loading, _a, role, data;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            message: msg,
                            duration: 1500,
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
    CreateBillsPage.prototype.addMoreSites = function () {
        var _this = this;
        if (this.bills_form.controls.team.value) {
            var checkPoint_1 = 0;
            var iu = 0;
            var total_amount_1 = 0;
            if (this.bills_form.value.amount == '' || this.bills_form.value.amount == 'undefined') {
                this.customMe('Please enter total bill amount!');
                checkPoint_1 = 0;
                return;
            }
            this.websites.value.forEach(function (obj) {
                if (obj.user != '' && obj.price != '') {
                    total_amount_1 = total_amount_1 + obj.price;
                    if (total_amount_1 == _this.bills_form.value.amount) {
                        _this.customMe('You payee total is equal to total bill amount so please update bill total to add more payee!');
                        checkPoint_1 = 0;
                        return;
                    }
                    if (total_amount_1 > _this.bills_form.value.amount) {
                        _this.customMe('You payee total exceeded from total bill amount so please check payee amount!');
                        checkPoint_1 = 0;
                        return;
                    }
                    else if (obj.price == '') {
                        _this.customMe('Please enter amount for payee!');
                        checkPoint_1 = 0;
                        return;
                    }
                }
                if (obj.user == '') {
                    _this.customMe('Please select payee!');
                    checkPoint_1 = 0;
                    return;
                }
                if (obj.price == '') {
                    _this.customMe('Please enter payee amount!');
                    checkPoint_1 = 0;
                    return;
                }
                else {
                    if (obj.price > _this.bills_form.value.amount)
                        return;
                    checkPoint_1 = 1;
                }
            });
            if (checkPoint_1 == 1 && this.bills_form.value.amount != '' && total_amount_1 < this.bills_form.value.amount) {
                this.websites.push(this.formBuilder.group({ user: '', price: '' }));
                checkPoint_1 = 0;
            }
            this.individualTotal = total_amount_1;
        }
        else {
            this.customMe('Please select group!');
            return;
        }
    };
    CreateBillsPage.prototype.register = function (form) {
        var _this = this;
        console.log(this.bills_form.value);
        this.submitted = true;
        console.log(form.payees);
        var total_amount = 0;
        form.payees.forEach(function (obj) {
            _this.payeeNameArr.push(obj.user);
            _this.payeePriceArr.push(obj.price);
            total_amount = total_amount + obj.price;
        });
        console.log('this.individualTotal', this.individualTotal);
        if (total_amount > form.amount || total_amount < form.amount) {
            this.customMe('Payee amount is not matching with total amount!!! Please check.');
            return;
        }
        console.log(JSON.stringify(this.sentArr));
        if (this.bills_form.invalid) {
            this.content.scrollToTop(200);
            return;
        }
        else {
            var input_data = {
                "title": form.title,
                "team": form.team,
                "amount": form.amount,
                "date": form.date,
                "assign_to": form.assign_to,
                "payees": form.payees,
            };
            console.log(input_data.assign_to);
            console.log(this.payeeNameArr);
            var formData = new FormData();
            formData.append('title', input_data.title);
            formData.append('files', this.ImageObj);
            formData.append('team', input_data.team);
            formData.append('amount', input_data.amount);
            formData.append('date', input_data.date);
            formData.append('userId', input_data.assign_to);
            formData.append('payee_name', (this.payeeNameArr).toString());
            formData.append('payee_price', (this.payeePriceArr).toString());
            console.log(formData);
            var token = void 0;
            if (sessionStorage.getItem("auth_token") != undefined) {
                token = sessionStorage.getItem("auth_token");
            }
            this.presentLoading();
            var httpOptions = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpHeaders"]({ 'authorization': token }) };
            this.http.post(this.base_url + 'createBills', formData, httpOptions).subscribe(function (response) {
                console.log(response);
                _this.isSuccess = true;
                _this.sucessArr = response;
                _this.isError = false;
                _this.loadingController.dismiss().then(function (a) { return console.log('dismissed'); });
                _this.presentAlert();
                _this.sucessArr = [];
            }, function (error) {
                console.log("ERROR");
                console.log(error.error);
            });
        }
    };
    CreateBillsPage.prototype.getTeamsList = function () {
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
        });
    };
    CreateBillsPage.prototype.search = function (nameKey, myArray) {
        for (var i = 0; i < myArray.length; i++) {
            if (myArray[i].userId === nameKey) {
                return i;
            }
        }
    };
    // 
    CreateBillsPage.prototype.checkAll = function (event) {
        //  console.log("working condition");
        if (event.target.checked) {
            //    console.log("if condition");
            this.teamListArr.forEach(function (obj) {
                // obj.isChecked = true;
            });
        }
        else {
            console.log("else condition");
        }
    };
    CreateBillsPage.prototype.setIndexHidden = function (value) {
        console.log(value);
        this.seletUser.push(value);
        var index = this.search(value, this.userListArr);
        this.userListArr[index].isChecked = true;
    };
    CreateBillsPage.prototype.isDisabled = function (userid) {
        return this.seletUser.includes(userid); // note, i'm not certain if this should just be occupation.
    };
    CreateBillsPage.prototype.getUnique = function (arr, comp) {
        var unique = arr
            .map(function (e) { return e[comp]; })
            // store the keys of the unique objects
            .map(function (e, i, final) { return final.indexOf(e) === i && i; })
            // eliminate the dead keys & store unique objects
            .filter(function (e) { return arr[e]; }).map(function (e) { return arr[e]; });
        return unique;
    };
    CreateBillsPage.prototype.onTeamSelection = function (checkedVal) {
        var _this = this;
        var counter = this.bills_form.value.payees.length;
        this.bills_form.value.payees.forEach(function (obj) {
            if (counter != 0) {
                _this.websites.removeAt(counter);
                counter--;
            }
        });
        var teamId = [];
        teamId.push(checkedVal);
        console.log('pppppppppppp:', teamId);
        var postArr = { 'teamId': teamId };
        var token;
        if (sessionStorage.getItem("auth_token") != undefined) {
            token = sessionStorage.getItem("auth_token");
        }
        this.infiniteLoading();
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
            console.log(getresArr);
            getresArr.forEach(function (obj) {
                console.log(obj.login.roleId);
                if (obj.login.roleId == '4') {
                    _this.userListArr.push(obj);
                }
            });
            console.log(_this.userListArr.length);
            // this.userListArr = getresArr;
            _this.userListArrForAssign = getresArr;
            _this.loadingController.dismiss();
            // console.log(this.userListArr);
            // this.userListArr = response.teams; 
        }, function (error) {
            console.log("ERROR");
            console.log(error);
        });
        console.log("Checkbox Checked");
    };
    Object.defineProperty(CreateBillsPage.prototype, "f", {
        get: function () { return this.bills_form.controls; },
        enumerable: true,
        configurable: true
    });
    CreateBillsPage.prototype.fileProgress = function (event) {
        this.fileData = event.target.files[0];
        console.log(this.fileData);
    };
    CreateBillsPage.prototype.pushToAssignArr = function (value) {
        this.assignArr.push(value);
        console.log(this.assignArr);
    };
    CreateBillsPage.prototype.infiniteLoading = function () {
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
    CreateBillsPage.prototype.presentLoading = function () {
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
    CreateBillsPage.prototype.presentAlertConfirm = function () {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Confirm!',
                            message: 'Message <strong>text</strong>!!!',
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
                                        console.log('Confirm 8448488487');
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
    CreateBillsPage.prototype.presentAlert = function () {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Success Message!',
                            subHeader: 'Bill created successfully!!!',
                            message: 'Click Okay to redirect to dashboard page and click Cancel to stay on same page.',
                            buttons: [{
                                    text: 'Cancel',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function (blah) {
                                        console.log('Confirmed Cancel: blah');
                                        _this.bills_form.reset();
                                    }
                                }, {
                                    text: 'Okay',
                                    handler: function () {
                                        _this.router.navigate(['bill-listing']);
                                        console.log('Confirmed Okay');
                                        _this.bills_form.reset();
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
    CreateBillsPage.prototype.selectImage = function () {
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
    CreateBillsPage.prototype.captureImage = function (useAlbum) {
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
                        contentType = 'image/jpeg';
                        realData = imageData;
                        this.ImageObj = this.b64toBlob(realData, contentType);
                        return [2 /*return*/];
                }
            });
        });
    };
    CreateBillsPage.prototype.b64toBlob = function (b64Data, contentType) {
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
    ], CreateBillsPage.prototype, "content", void 0);
    CreateBillsPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create-bills',
            template: __webpack_require__(/*! ./create-bills.page.html */ "./src/app/pages/create-bills/create-bills.page.html"),
            styles: [__webpack_require__(/*! ./create-bills.page.scss */ "./src/app/pages/create-bills/create-bills.page.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _services_item_service__WEBPACK_IMPORTED_MODULE_3__["ItemService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
            _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_7__["Camera"],
            _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_8__["File"],
            _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_9__["WebView"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"],
            _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_10__["FilePath"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["DomSanitizer"]])
    ], CreateBillsPage);
    return CreateBillsPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-create-bills-create-bills-module.js.map