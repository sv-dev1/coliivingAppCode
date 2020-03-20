(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-landlord-profile-page-landlord-profile-page-module"],{

/***/ "./src/app/pages/landlord-profile-page/landlord-profile-page.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/landlord-profile-page/landlord-profile-page.module.ts ***!
  \*****************************************************************************/
/*! exports provided: LandlordProfilePagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandlordProfilePagePageModule", function() { return LandlordProfilePagePageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-multiselect-dropdown */ "./node_modules/ng-multiselect-dropdown/fesm5/ng-multiselect-dropdown.js");
/* harmony import */ var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-google-places-autocomplete */ "./node_modules/ngx-google-places-autocomplete/bundles/ngx-google-places-autocomplete.umd.js");
/* harmony import */ var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var ngx_international_phone_number__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-international-phone-number */ "./node_modules/ngx-international-phone-number/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _landlord_profile_page_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./landlord-profile-page.page */ "./src/app/pages/landlord-profile-page/landlord-profile-page.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    {
        path: '',
        component: _landlord_profile_page_page__WEBPACK_IMPORTED_MODULE_8__["LandlordProfilePagePage"]
    }
];
var LandlordProfilePagePageModule = /** @class */ (function () {
    function LandlordProfilePagePageModule() {
    }
    LandlordProfilePagePageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_4__["NgMultiSelectDropDownModule"].forRoot(),
                ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_5__["GooglePlaceModule"],
                ngx_international_phone_number__WEBPACK_IMPORTED_MODULE_6__["InternationalPhoneNumberModule"]
            ],
            declarations: [_landlord_profile_page_page__WEBPACK_IMPORTED_MODULE_8__["LandlordProfilePagePage"]]
        })
    ], LandlordProfilePagePageModule);
    return LandlordProfilePagePageModule;
}());



/***/ }),

/***/ "./src/app/pages/landlord-profile-page/landlord-profile-page.page.html":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/landlord-profile-page/landlord-profile-page.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n   <ion-toolbar>\r\n      <ion-buttons slot=\"start\">\r\n         <ion-menu-button></ion-menu-button>\r\n      </ion-buttons>\r\n      <ion-buttons slot=\"end\">\r\n         <ion-back-button defaultHref=\"dashboard\"></ion-back-button>\r\n      </ion-buttons>\r\n      <ion-title >\r\n        Edit Profile\r\n      </ion-title>\r\n   </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding>\r\n   <form *ngIf=\"loginRoleId==3\" [formGroup]=\"update_form\" (submit)=\"register(update_form.value)\">\r\n   <ion-row>\r\n      <ion-col>\r\n         <div class=\"ion-text-start\">\r\n            <ion-item>\r\n               <ion-label class=\"pk\"  style=\"color: #ed502d;\" position=\"floating\">First name:</ion-label>\r\n               <ion-input type=\"text\" formControlName=\"firstName\" required></ion-input>\r\n            </ion-item>\r\n            <div *ngIf=\"submitted && f.firstName.errors\" class=\"invalid-feedback\" style=\"padding: 10px; left;\">\r\n               <span *ngIf=\"f.firstName.errors.required\" style=\" text-align: left;color: red;\">First Name is required.\r\n               </span>\r\n            </div>\r\n         </div>\r\n      </ion-col>\r\n   </ion-row>\r\n   <ion-row>\r\n      <ion-col>\r\n         <div class=\"ion-text-start\">\r\n            <ion-item>\r\n               <ion-label style=\"color: #ed502d;\" position=\"floating\">Last name:</ion-label>\r\n               <ion-input type=\"text\" formControlName=\"lastName\" required></ion-input>\r\n            </ion-item>\r\n            <div *ngIf=\"submitted && f.lastName.errors\" class=\"invalid-feedback\" style=\"padding: 10px; left;\">\r\n               <span *ngIf=\"f.lastName.errors.required\" style=\" text-align: left;color: red;\">Last Name is required.\r\n               </span>\r\n            </div>\r\n         </div>\r\n      </ion-col>\r\n   </ion-row>\r\n    <ion-row>\r\n      <ion-col>\r\n         <div class=\"ion-text-start\">\r\n            <ion-item>\r\n               <ion-label style=\"color: #ed502d;\" position=\"floating\">User name:</ion-label>\r\n               <ion-input type=\"text\" formControlName=\"username\" required></ion-input>\r\n            </ion-item>\r\n            <div *ngIf=\"submitted && f.username.errors\" class=\"invalid-feedback\" style=\"padding: 10px; left;\">\r\n               <span *ngIf=\"f.username.errors.required\" style=\" text-align: left;color: red;\">User Name is required.\r\n               </span>\r\n            </div>\r\n         </div>\r\n      </ion-col>\r\n   </ion-row>\r\n    <ion-row>\r\n      <ion-col>\r\n         <div class=\"ion-text-start\">\r\n            <ion-item>\r\n               <ion-label style=\"color: #ed502d;\" position=\"floating\">Email:</ion-label>\r\n               <ion-input type=\"text\" formControlName=\"email\" required></ion-input>\r\n            </ion-item>\r\n            <div *ngIf=\"submitted && f.email.errors\" class=\"invalid-feedback\" style=\"padding: 10px; left;\">\r\n               <span *ngIf=\"f.email.errors.required\" style=\" text-align: left;color: red;\">Email is required.\r\n               </span>\r\n            </div>\r\n         </div>\r\n      </ion-col>\r\n   </ion-row>\r\n   <ion-row>\r\n     <ion-col>\r\n         <div class=\"ion-text-start\">\r\n            <ion-item>\r\n               <input class=\"input_location\" ngx-google-places-autocomplete [options]='options' #placesRef=\"ngx-places\" (onAddressChange)=\"onChange($event)\" formControlName=\"address\" />\r\n            </ion-item>\r\n             <div *ngIf=\"submitted && f.address.errors\" class=\"invalid-feedback\" style=\"padding: 10px; left;\">\r\n                  <span *ngIf=\"f.address.errors.required\" style=\" text-align: left;color: red;\">Address is required.\r\n                  </span>\r\n               </div>\r\n         </div>\r\n      </ion-col>\r\n   </ion-row>\r\n  <ion-row>\r\n      <ion-col>\r\n         <div class=\"ion-text-start\">\r\n            <ion-item>\r\n               <ion-label  style=\"color: #ed502d;\" position=\"floating\">Postal code:</ion-label>\r\n               <ion-input type=\"text\" formControlName=\"postal_code\" required></ion-input>\r\n            </ion-item>\r\n            <div *ngIf=\"submitted && f.postal_code.errors\" class=\"invalid-feedback\" style=\"padding: 10px; left;\">\r\n               <span *ngIf=\"f.postal_code.errors.required\" style=\" text-align: left;color: red;\">Postal code is required.\r\n               </span>\r\n            </div>\r\n         </div>\r\n      </ion-col>\r\n   </ion-row>\r\n   <ion-row>\r\n      <ion-col>\r\n         <div class=\"ion-text-start\">\r\n            <ion-item>\r\n               <ion-label  style=\"color: #ed502d;\" position=\"floating\">Country:  \r\n               </ion-label>\r\n            </ion-item>\r\n         </div>\r\n      </ion-col>\r\n   </ion-row>\r\n   <ng-multiselect-dropdown\r\n     formControlName=\"country\" \r\n     [data]=\"dropdownList\"\r\n     [(ngModel)]=\"CountrySelectedItem\"\r\n     [settings]=\"dropdownSettings\"\r\n     (onSelect)=\"onItemSelect($event)\"\r\n     (onSelectAll)=\"onSelectAll($event)\"\r\n    >\r\n    </ng-multiselect-dropdown>\r\n  \r\n     <div *ngIf=\"submitted && f.country.errors\" class=\"invalid-feedback\" style=\"padding: 10px; left;\">\r\n               <span *ngIf=\"f.country.errors.required\" style=\" text-align: left;color: red;\">Country is required.\r\n               </span>\r\n            </div>\r\n   <ion-row style=\"display: none;\">\r\n      <ion-col>\r\n         <div class=\"ion-text-start\">\r\n            <ion-item>\r\n               <ion-label  style=\"color: #ed502d;\" position=\"floating\">Phone code:</ion-label>\r\n            </ion-item>\r\n         </div>\r\n      </ion-col>\r\n   </ion-row>\r\n    <ion-row>\r\n      <ion-col>\r\n         <div class=\"ion-text-start\">\r\n            <ion-item>\r\n               <ion-label  style=\"color: #ed502d;\" position=\"floating\">Phone number:</ion-label>\r\n            </ion-item>\r\n         </div>\r\n      </ion-col>\r\n   </ion-row>\r\n  \r\n   <ion-row>\r\n      <ion-col>\r\n         <div class=\"ion-text-start\">\r\n            <international-phone-number class=\"international_phone_number\" placeholder=\"Enter phone number\"  [minlength]=\"10\" formControlName=\"phoneNo\"></international-phone-number>\r\n            <div *ngIf=\"submitted && f.phoneNo.errors\" class=\"invalid-feedback\" style=\"padding: 10px; left;\">\r\n               <span *ngIf=\"f.phoneNo.errors.required\" style=\" text-align: left;color: red;\">Phone number is required.\r\n               </span> \r\n               <span *ngIf=\"f.phoneNo.errors.minlength\" style=\" text-align: left;color: red;\">Please check phone code and Phone Number limit. You cannot entered number less than 10 digits.\r\n               </span>  \r\n               <span *ngIf=\"f.phoneNo.errors.phoneEmptyError\" style=\" text-align: left;color: red;\">Please check phone code.\r\n               </span> \r\n            </div>\r\n         </div>\r\n      </ion-col>\r\n   </ion-row>\r\n \r\n\r\n   <ion-row>\r\n      <ion-col>\r\n         <div class=\"ion-text-start\">\r\n            <ion-item>\r\n               <ion-label  style=\"color: #ed502d;\" position=\"floating\">Date of birth:</ion-label>\r\n               <ion-datetime formControlName=\"dob\" displayFormat=\"DD-MM-YY\" [max]=\"maxData\"></ion-datetime>\r\n            </ion-item>\r\n         </div>\r\n      </ion-col>\r\n   </ion-row>\r\n   \r\n \r\n   <ion-row>\r\n      <ion-col>\r\n         <div class=\"ion-text-start\">\r\n            <ion-item>\r\n               <!-- <ion-label color=\"primary\" position=\"floating\">Upload Photo</ion-label> -->\r\n               <ion-thumbnail slot=\"end\">\r\n                     <img  [src]=\"image_url\" onError=\"src='assets/images/user_dummy.png'\">  \r\n               </ion-thumbnail>\r\n            </ion-item>\r\n            <ion-item>\r\n               <ion-toolbar  style=\"color: #ed502d;\">\r\n                  <ion-button fill=\"clear\" expand=\"full\" color=\"light\" (click)=\"selectImage()\" style=\"background: #ed502d;margin: 10px auto;display: block; width: auto;text-align: center;\">\r\n                     <ion-icon slot=\"start\" name=\"camera\"></ion-icon>\r\n                     Upload Picture\r\n                  </ion-button>\r\n               </ion-toolbar>\r\n            </ion-item>\r\n         </div>\r\n      </ion-col>\r\n   </ion-row>\r\n   <ion-row>\r\n      <ion-col>\r\n         <div class=\"ion-text-start\">\r\n            <div *ngIf=\"isSuccess == true\" >\r\n               <span class=\"for-sub-name\">{{sucessArr.message}}</span>\r\n            </div>\r\n         </div>\r\n      </ion-col>\r\n   </ion-row>\r\n   <ion-row>\r\n      <ion-col>\r\n         <div class=\"ion-text-start\">\r\n            <button class=\"submit-btn\" expand=\"block\" type=\"submit\">Update profile\r\n            </button>\r\n         </div>\r\n      </ion-col>\r\n   </ion-row>\r\n   </form>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/landlord-profile-page/landlord-profile-page.page.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/landlord-profile-page/landlord-profile-page.page.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xhbmRsb3JkLXByb2ZpbGUtcGFnZS9sYW5kbG9yZC1wcm9maWxlLXBhZ2UucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/landlord-profile-page/landlord-profile-page.page.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/landlord-profile-page/landlord-profile-page.page.ts ***!
  \***************************************************************************/
/*! exports provided: LandlordProfilePagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandlordProfilePagePage", function() { return LandlordProfilePagePage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
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











var LandlordProfilePagePage = /** @class */ (function () {
    function LandlordProfilePagePage(loadingController, http, formBuilder, alertController, router, camera, actionSheetController, datepipe) {
        this.loadingController = loadingController;
        this.http = http;
        this.formBuilder = formBuilder;
        this.alertController = alertController;
        this.router = router;
        this.camera = camera;
        this.actionSheetController = actionSheetController;
        this.datepipe = datepipe;
        this.base_url = "";
        this.image_url = "";
        this.userDataArr = [];
        this.CountryList = [];
        this.image_base_url = "";
        this.selected_country = "";
        this.countriesArr = [];
        this.CountrydropdownSettings = {};
        this.dropdownList = [];
        this.selectedItems = [];
        this.dropdownSettings = {};
        this.phoneCodeList = [];
        this.phoneCodedropdownSettings = {};
        this.maxData = (new Date()).getFullYear() + 5;
        this.isError = false;
        this.isSuccess = false;
        this.sucessArr = [];
        this.submitted = false;
        this.base_url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].base_url;
        this.loginRoleId = sessionStorage.getItem("roleId");
        this.image_base_url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].image_base_url;
        this.update_form = this.formBuilder.group({
            firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            postal_code: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            country: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            phonecode: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            phoneNo: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            dob: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            upload_photo: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
        });
    }
    LandlordProfilePagePage.prototype.ngOnInit = function () {
        this.getUserData();
    };
    LandlordProfilePagePage.prototype.getUserData = function () {
        var _this = this;
        this.image_url = '';
        var token;
        var temp = [];
        var temp1 = [];
        if (sessionStorage.getItem("auth_token") != undefined) {
            token = sessionStorage.getItem("auth_token");
        }
        this.presentLoading();
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]();
        headers = headers.set('Authorization', token);
        this.http.get(this.base_url + 'user/profile', {
            headers: headers
        }).subscribe(function (response) {
            _this.loadingController.dismiss().then(function (a) { return console.log('dismissed'); });
            _this.userDataArr = response.users[0];
            if (_this.userDataArr.dob == 'Invalid date') {
                console.log("true");
                _this.userDataArr.dob = "";
            }
            _this.update_form.patchValue({
                firstName: _this.userDataArr.firstName,
                lastName: _this.userDataArr.lastName,
                email: _this.userDataArr.email,
                username: _this.userDataArr.login.username,
                phoneNo: _this.userDataArr.phoneNo,
                postal_code: _this.userDataArr.postalCode,
                address: _this.userDataArr.address,
                dob: _this.datepipe.transform(_this.userDataArr.dob, 'yyyy-MM-dd'),
                upload_photo: _this.userDataArr.upload_photo,
            });
            _this.selected_country = _this.userDataArr.country;
            _this.getUserDataCountry();
        });
    };
    Object.defineProperty(LandlordProfilePagePage.prototype, "f", {
        get: function () {
            return this.update_form.controls;
        },
        enumerable: true,
        configurable: true
    });
    LandlordProfilePagePage.prototype.presentLoading = function () {
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
    LandlordProfilePagePage.prototype.getUserDataCountry = function () {
        var _this = this;
        var token;
        if (sessionStorage.getItem("auth_token") != undefined) {
            token = sessionStorage.getItem("auth_token");
        }
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]();
        headers = headers.set('Authorization', token);
        this.http.get(this.base_url + 'countries', {
            headers: headers
        }).subscribe(function (response) {
            _this.countriesArr = response.countries;
            var obj = [];
            var objPhoneCode = [];
            var objSelected = [];
            var inc = 0;
            var incj = 0;
            _this.countriesArr.forEach(function (ele) {
                if (_this.phone_code == ele['phonecode']) {
                    _this.phoneCodeSelectedItem = [{
                            item_id: ele['phonecode'],
                            item_text: ele['name'] + '(' + ele['iso3'] + ')'
                        }];
                }
                if (_this.selected_country == ele['id']) {
                    _this.CountrySelectedItem = [{
                            item_id: ele['id'],
                            item_text: ele['name']
                        }];
                }
                obj[inc] = {
                    item_id: ele['id'],
                    item_text: ele['name']
                };
                objPhoneCode[inc] = {
                    item_id: ele['phonecode'],
                    item_text: ele['name'] + '(' + ele['iso3'] + ')'
                };
                inc++;
            });
            console.log(_this.CountrySelectedItem);
            _this.dropdownList = obj;
            _this.CountryList = obj;
            _this.phoneCodeList = objPhoneCode;
            _this.selectedItems = objSelected;
            _this.dropdownSettings = {
                idField: 'item_id',
                textField: 'item_text',
                selectAllText: 'Select All',
                unSelectAllText: 'UnSelect All',
                allowSearchFilter: true,
                limitSelection: 2
            };
            _this.CountrydropdownSettings = {
                idField: 'item_id',
                textField: 'item_text',
                selectAllText: 'Select All',
                unSelectAllText: 'UnSelect All',
                allowSearchFilter: true,
                singleSelection: true,
            };
            _this.phoneCodedropdownSettings = {
                idField: 'item_id',
                textField: 'item_text',
                selectAllText: 'Select All',
                unSelectAllText: 'UnSelect All',
                allowSearchFilter: true,
                singleSelection: true,
            };
        });
    };
    LandlordProfilePagePage.prototype.onItemSelect = function (item) {
        console.log(item);
    };
    LandlordProfilePagePage.prototype.onSelectAll = function (items) {
        console.log(items);
    };
    LandlordProfilePagePage.prototype.onChange = function (address) {
        this.update_form.patchValue({ 'address': address.formatted_address });
        console.log(address);
    };
    LandlordProfilePagePage.prototype.selectImage = function () {
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
    LandlordProfilePagePage.prototype.captureImage = function (useAlbum) {
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
                        return [2 /*return*/];
                }
            });
        });
    };
    LandlordProfilePagePage.prototype.b64toBlob = function (b64Data, contentType) {
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
    LandlordProfilePagePage.prototype.register = function (form) {
        var _this = this;
        this.submitted = true;
        if (this.update_form.invalid) {
            console.log(this.update_form.value);
            console.log("invalid");
            this.content.scrollToTop(400);
            return;
        }
        else {
            var input_data = {
                "firstName": form.firstName,
                "lastName": form.lastName,
                "phoneNo": form.phoneNo,
                "address": form.address,
                "username": form.username,
                "email": form.email,
                "postal_code": form.postal_code,
                "country": form.country[0].item_id,
                "work_place": form.work_place,
                "previous_city": form.previous_city,
                "dob": form.dob,
                "habits": form.habits,
                "rental_desc": form.rental_desc,
                "favourite_locations": form.favourite_locations,
            };
            console.log(input_data);
            var formData = new FormData();
            formData.append('firstName', input_data.firstName);
            formData.append('lastName', input_data.lastName);
            formData.append('phoneNo', input_data.phoneNo);
            formData.append('address', input_data.address);
            formData.append('email', input_data.email);
            formData.append('username', input_data.username);
            formData.append('postal_code', input_data.postal_code);
            formData.append('country', input_data.country);
            formData.append('dob', input_data.dob);
            formData.append('photo', this.ImageObj);
            var token = void 0;
            if (sessionStorage.getItem("auth_token") != undefined) {
                token = sessionStorage.getItem("auth_token");
            }
            this.presentLoading();
            console.log(formData);
            var httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                    'authorization': token
                })
            };
            this.http.put(this.base_url + 'user/profile', formData, httpOptions).subscribe(function (response) {
                console.log(response);
                //  let msgResponse=response['message'];
                _this.isSuccess = true;
                _this.sucessArr = response;
                _this.isError = false;
                _this.loadingController.dismiss().then(function (a) { return console.log('dismissed'); });
                _this.presentAlert(response['message']);
                _this.sucessArr = [];
            }, function (error) {
                console.log("ERROR");
                console.log(error.error);
            });
        }
    };
    LandlordProfilePagePage.prototype.presentAlert = function (msg) {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Message!',
                            subHeader: msg,
                            message: 'Click Okay to redirect to dashboard page and click Cancel to stay on same page.',
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
                                        _this.router.navigate(['/dashboard']);
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
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonContent"]),
        __metadata("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonContent"])
    ], LandlordProfilePagePage.prototype, "content", void 0);
    LandlordProfilePagePage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-landlord-profile-page',
            template: __webpack_require__(/*! ./landlord-profile-page.page.html */ "./src/app/pages/landlord-profile-page/landlord-profile-page.page.html"),
            styles: [__webpack_require__(/*! ./landlord-profile-page.page.scss */ "./src/app/pages/landlord-profile-page/landlord-profile-page.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["LoadingController"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["AlertController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_6__["Camera"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ActionSheetController"],
            _angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"]])
    ], LandlordProfilePagePage);
    return LandlordProfilePagePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-landlord-profile-page-landlord-profile-page-module.js.map