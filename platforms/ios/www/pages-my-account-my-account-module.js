(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-my-account-my-account-module"],{

/***/ "./src/app/pages/my-account/my-account.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/my-account/my-account.module.ts ***!
  \*******************************************************/
/*! exports provided: MyAccountPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyAccountPageModule", function() { return MyAccountPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-multiselect-dropdown */ "./node_modules/ng-multiselect-dropdown/fesm5/ng-multiselect-dropdown.js");
/* harmony import */ var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-google-places-autocomplete */ "./node_modules/ngx-google-places-autocomplete/bundles/ngx-google-places-autocomplete.umd.js");
/* harmony import */ var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var ngx_international_phone_number__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-international-phone-number */ "./node_modules/ngx-international-phone-number/index.js");
/* harmony import */ var _my_account_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./my-account.page */ "./src/app/pages/my-account/my-account.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    {
        path: '',
        component: _my_account_page__WEBPACK_IMPORTED_MODULE_8__["MyAccountPage"]
    }
];
var MyAccountPageModule = /** @class */ (function () {
    function MyAccountPageModule() {
    }
    MyAccountPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_5__["NgMultiSelectDropDownModule"].forRoot(),
                ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_6__["GooglePlaceModule"],
                ngx_international_phone_number__WEBPACK_IMPORTED_MODULE_7__["InternationalPhoneNumberModule"],
            ],
            declarations: [_my_account_page__WEBPACK_IMPORTED_MODULE_8__["MyAccountPage"]]
        })
    ], MyAccountPageModule);
    return MyAccountPageModule;
}());



/***/ }),

/***/ "./src/app/pages/my-account/my-account.page.html":
/*!*******************************************************!*\
  !*** ./src/app/pages/my-account/my-account.page.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n   <ion-toolbar>\r\n      <ion-buttons slot=\"start\">\r\n         <ion-menu-button></ion-menu-button>\r\n      </ion-buttons>\r\n      <ion-buttons slot=\"end\">\r\n         <ion-back-button defaultHref=\"/public-profile\"></ion-back-button>\r\n      </ion-buttons>\r\n      <ion-title>\r\n         Edit Profile\r\n      </ion-title>\r\n   </ion-toolbar>\r\n</ion-header> \r\n<ion-content padding>\r\n   <form *ngIf=\"loginRoleId==4\" [formGroup]=\"update_form\" (submit)=\"register(update_form.value)\">\r\n   <ion-row>\r\n      <ion-col>\r\n         <div class=\"ion-text-start\">\r\n            <ion-item>\r\n               <ion-label class=\"pk\"  style=\"color: #ed502d;\" position=\"floating\">First name:</ion-label>\r\n               <ion-input type=\"text\" formControlName=\"firstName\" required></ion-input>\r\n            </ion-item>\r\n            <div *ngIf=\"submitted && f.firstName.errors\" class=\"invalid-feedback\" style=\"padding: 10px; left;\">\r\n               <span *ngIf=\"f.firstName.errors.required\" style=\" text-align: left;color: red;\">First Name is required.\r\n               </span>\r\n            </div>\r\n         </div>\r\n      </ion-col>\r\n   </ion-row>\r\n   <ion-row>\r\n      <ion-col>\r\n         <div class=\"ion-text-start\">\r\n            <ion-item>\r\n               <ion-label style=\"color: #ed502d;\" position=\"floating\">Last name:</ion-label>\r\n               <ion-input type=\"text\" formControlName=\"lastName\" required></ion-input>\r\n            </ion-item>\r\n            <div *ngIf=\"submitted && f.lastName.errors\" class=\"invalid-feedback\" style=\"padding: 10px; left;\">\r\n               <span *ngIf=\"f.lastName.errors.required\" style=\" text-align: left;color: red;\">Last Name is required.\r\n               </span>\r\n            </div>\r\n         </div>\r\n      </ion-col>\r\n   </ion-row>\r\n    <ion-row>\r\n      <ion-col>\r\n         <div class=\"ion-text-start\">\r\n            <ion-item>\r\n               <ion-label style=\"color: #ed502d;\" position=\"floating\">User name:</ion-label>\r\n               <ion-input type=\"text\" formControlName=\"username\" required></ion-input>\r\n            </ion-item>\r\n            <div *ngIf=\"submitted && f.username.errors\" class=\"invalid-feedback\" style=\"padding: 10px; left;\">\r\n               <span *ngIf=\"f.username.errors.required\" style=\" text-align: left;color: red;\">User Name is required.\r\n               </span>\r\n            </div>\r\n         </div>\r\n      </ion-col>\r\n   </ion-row>\r\n    <ion-row>\r\n      <ion-col>\r\n         <div class=\"ion-text-start\">\r\n            <ion-item>\r\n               <ion-label style=\"color: #ed502d;\" position=\"floating\">Email:</ion-label>\r\n               <ion-input type=\"text\" formControlName=\"email\" required></ion-input>\r\n            </ion-item>\r\n            <div *ngIf=\"submitted && f.email.errors\" class=\"invalid-feedback\" style=\"padding: 10px; left;\">\r\n               <span *ngIf=\"f.email.errors.required\" style=\" text-align: left;color: red;\">Email is required.\r\n               </span>\r\n            </div>\r\n         </div>\r\n      </ion-col>\r\n   </ion-row>\r\n   <ion-row>\r\n     <ion-col>\r\n         <div class=\"ion-text-start\">\r\n            <ion-item>\r\n               <input class=\"input_location\" ngx-google-places-autocomplete [options]='options' #placesRef=\"ngx-places\" (onAddressChange)=\"onChange($event)\" formControlName=\"address\" />\r\n            </ion-item>\r\n             <div *ngIf=\"submitted && f.address.errors\" class=\"invalid-feedback\" style=\"padding: 10px; left;\">\r\n                  <span *ngIf=\"f.address.errors.required\" style=\" text-align: left;color: red;\">Address is required.\r\n                  </span>\r\n               </div>\r\n         </div>\r\n      </ion-col>\r\n   </ion-row>\r\n  <ion-row>\r\n      <ion-col>\r\n         <div class=\"ion-text-start\">\r\n            <ion-item>\r\n               <ion-label  style=\"color: #ed502d;\" position=\"floating\">Postal code:</ion-label>\r\n               <ion-input type=\"text\" formControlName=\"postal_code\" required></ion-input>\r\n            </ion-item>\r\n            <div *ngIf=\"submitted && f.postal_code.errors\" class=\"invalid-feedback\" style=\"padding: 10px; left;\">\r\n               <span *ngIf=\"f.postal_code.errors.required\" style=\" text-align: left;color: red;\">Postal code is required.\r\n               </span>\r\n            </div>\r\n         </div>\r\n      </ion-col>\r\n   </ion-row>\r\n   <ion-row>\r\n      <ion-col>\r\n         <div class=\"ion-text-start\">\r\n            <ion-item>\r\n               <ion-label  style=\"color: #ed502d;\" position=\"floating\">Country:  \r\n               </ion-label>\r\n            </ion-item>\r\n         </div>\r\n      </ion-col>\r\n   </ion-row>\r\n   <ng-multiselect-dropdown\r\n   formControlName=\"country\" \r\n   [data]=\"CountryList\"\r\n   [(ngModel)]=\"CountrySelectedItem\" \r\n   [settings]=\"CountrydropdownSettings\" \r\n   (onSelectAll)=\"onSelectAllCountry($event)\"\r\n   >\r\n   </ng-multiselect-dropdown>\r\n     <div *ngIf=\"submitted && f.country.errors\" class=\"invalid-feedback\" style=\"padding: 10px; left;\">\r\n               <span *ngIf=\"f.country.errors.required\" style=\" text-align: left;color: red;\">Country is required.\r\n               </span>\r\n            </div>\r\n   <ion-row>\r\n      <ion-col>\r\n         <div class=\"ion-text-start\">\r\n            <ion-item>\r\n               <ion-label  style=\"color: #ed502d;\" position=\"floating\">Nationalities:  \r\n               </ion-label>\r\n               <!-- \r\n                  <ion-select formControlName=\"nationality\" multiple>\r\n                    <ion-select-option *ngFor=\"let country of countriesArr; let idx = index\" [value]=\"country.id\">{{country.nicename}}</ion-select-option>\r\n                   </ion-select> -->\r\n            </ion-item>\r\n         </div>\r\n      </ion-col>\r\n   </ion-row>\r\n   <ng-multiselect-dropdown\r\n   formControlName=\"nationality\" \r\n   [data]=\"dropdownList\"\r\n   [(ngModel)]=\"selectedItems\"\r\n   (onDeSelect)=\"OnNationalityDeSelect($event)\"\r\n   [settings]=\"dropdownSettings\"\r\n   (onSelect)=\"onItemSelect($event)\"\r\n   (onSelectAll)=\"onSelectAll($event)\"\r\n   >\r\n   </ng-multiselect-dropdown>\r\n   <ion-row style=\"display: none;\">\r\n      <ion-col>\r\n         <div class=\"ion-text-start\">\r\n            <ion-item>\r\n               <ion-label  style=\"color: #ed502d;\" position=\"floating\">Phone code:</ion-label>\r\n            </ion-item>\r\n         </div>\r\n      </ion-col>\r\n   </ion-row>\r\n    <ion-row>\r\n      <ion-col>\r\n         <div class=\"ion-text-start\">\r\n            <ion-item>\r\n               <ion-label  style=\"color: #ed502d;\" position=\"floating\">Phone number:</ion-label>\r\n            </ion-item>\r\n         </div>\r\n      </ion-col>\r\n   </ion-row>\r\n  \r\n   <ion-row>\r\n      <ion-col>\r\n         <div class=\"ion-text-start\">\r\n            <international-phone-number class=\"international_phone_number\" placeholder=\"Enter phone number\"  [minlength]=\"10\" formControlName=\"phoneNo\"></international-phone-number>\r\n            <div *ngIf=\"submitted && f.phoneNo.errors\" class=\"invalid-feedback\" style=\"padding: 10px; left;\">\r\n               <span *ngIf=\"f.phoneNo.errors.required\" style=\" text-align: left;color: red;\">Phone number is required.\r\n               </span> \r\n               <span *ngIf=\"f.phoneNo.errors.minlength\" style=\" text-align: left;color: red;\">Please check phone code and Phone Number limit. You cannot entered number less than 10 digits.\r\n               </span>  \r\n               <span *ngIf=\"f.phoneNo.errors.phoneEmptyError\" style=\" text-align: left;color: red;\">Please check phone code.\r\n               </span> \r\n            </div>\r\n         </div>\r\n      </ion-col>\r\n   </ion-row>\r\n   <ion-row>\r\n      <ion-col>\r\n         <div class=\"ion-text-start\">\r\n            <ion-item>\r\n               <ion-label style=\"color: #ed502d;\" position=\"floating\">Work place/University/Company:</ion-label>\r\n               <ion-input type=\"text\" formControlName=\"work_place\"></ion-input>\r\n            </ion-item>\r\n         </div>\r\n      </ion-col>\r\n   </ion-row>\r\n   <ion-row>\r\n      <ion-col>\r\n         <div class=\"ion-text-start\">\r\n            <ion-item>\r\n               <ion-label  style=\"color: #ed502d;\" position=\"floating\">Previous city of residence:</ion-label>\r\n               <input class=\"input_location\" ngx-google-places-autocomplete type=\"text\" formControlName=\"previous_city\" />\r\n            </ion-item>\r\n         </div>\r\n      </ion-col>\r\n   </ion-row>\r\n   <ion-row>\r\n      <ion-col>\r\n         <div class=\"ion-text-start\">\r\n            <ion-item>\r\n               <ion-label  style=\"color: #ed502d;\" position=\"floating\">Date of birth:</ion-label>\r\n               <ion-datetime formControlName=\"dob\" displayFormat=\"DD-MM-YY\"  ></ion-datetime>\r\n            </ion-item>\r\n         </div>\r\n      </ion-col>\r\n   </ion-row>\r\n   <ion-row>\r\n      <ion-col>\r\n         <div class=\"ion-text-start\">\r\n            <ion-item>\r\n               <ion-label  style=\"color: #ed502d;\" position=\"floating\">Occupation:</ion-label>\r\n              <ion-select formControlName=\"occuptation\" okText=\"Okay\" cancelText=\"Dismiss\" >\r\n                  <ion-select-option value=\"1\">Full-time Employee</ion-select-option>\r\n                  <ion-select-option value=\"2\">Part-time Employee</ion-select-option>\r\n                  <ion-select-option value=\"3\">Part Time Student</ion-select-option>\r\n                  <ion-select-option value=\"4\">Full Time Student</ion-select-option>\r\n                  <ion-select-option value=\"5\">Part Time Internship</ion-select-option>\r\n                  <ion-select-option value=\"6\">Full Time Internship</ion-select-option>\r\n               </ion-select>\r\n            </ion-item>\r\n         </div>\r\n      </ion-col>\r\n   </ion-row>\r\n   <ion-row>\r\n      <ion-col>\r\n         <div class=\"ion-text-start\">\r\n            <ion-item>\r\n               <ion-label  style=\"color: #ed502d;\" position=\"floating\">Weekdays wake up time: </ion-label>\r\n               <ion-datetime formControlName=\"wakeup_time\" displayFormat=\"h:mm a\"></ion-datetime>\r\n            </ion-item>\r\n         </div>\r\n      </ion-col>\r\n   </ion-row>\r\n   <ion-row>\r\n      <ion-col>\r\n         <div class=\"ion-text-start\">\r\n            <ion-item>\r\n               <ion-label  style=\"color: #ed502d;\" position=\"floating\"> Weekend wake up time:</ion-label>\r\n               <ion-datetime formControlName=\"weekend_wakup_time\" displayFormat=\"h:mm a\"></ion-datetime>\r\n            </ion-item>\r\n         </div>\r\n      </ion-col>\r\n   </ion-row>\r\n   \r\n  \r\n    <ion-row>\r\n         <ion-col>\r\n         \r\n            <ion-item>\r\n               <ion-label  style=\"color: #ed502d;\" position=\"floating\">Rental fee willing to pay:</ion-label>\r\n            </ion-item>\r\n       \r\n      </ion-col>\r\n    </ion-row>\r\n   <ion-row>\r\n      <ion-col>\r\n         <div class=\"ion-text-start\">\r\n            <ion-item>\r\n               <ion-label  style=\"color: #ed502d;\" position=\"floating\">Minimum:</ion-label>\r\n               <ion-input type=\"number\" formControlName=\"min_range\" placeholder=\"Maximum fee\"></ion-input>\r\n            </ion-item>\r\n         </div>\r\n      </ion-col>\r\n      <ion-col>\r\n         <div class=\"ion-text-start\">\r\n            <ion-item>\r\n               <ion-label  style=\"color: #ed502d;\" position=\"floating\">Maximum:</ion-label>\r\n               <ion-input type=\"number\" formControlName=\"max_range\" placeholder=\"Maximum fee\"></ion-input>\r\n            </ion-item>\r\n         </div>\r\n      </ion-col>\r\n   </ion-row>\r\n   <ion-row>\r\n      <ion-col>\r\n         <div class=\"ion-text-start\">\r\n            <ion-item>\r\n               <ion-label  style=\"color: #ed502d;\" position=\"floating\">Rental fee willing to pay description:</ion-label>\r\n               <ion-textarea type=\"number\" formControlName=\"rental_desc\" placeholder=\"Add rental description here..\"></ion-textarea>\r\n            </ion-item>\r\n         </div>\r\n      </ion-col>\r\n   </ion-row>\r\n   <ion-row>\r\n      <ion-col>\r\n         <div class=\"ion-text-start\">\r\n            <ion-item>\r\n               <ion-label  style=\"color: #ed502d;\" position=\"floating\">Stay date:</ion-label>\r\n            </ion-item>\r\n         </div>\r\n      </ion-col>\r\n   </ion-row>\r\n   <ion-row>\r\n      <ion-col>\r\n         <div class=\"ion-text-start\">\r\n            <ion-item>\r\n               <ion-label  style=\"color: #ed502d;\" position=\"floating\">Start date:</ion-label>\r\n               <ion-datetime [max]=\"maxData\" formControlName=\"stay_date_start\" placeholder=\"Select Date\"></ion-datetime>\r\n            </ion-item>\r\n         </div>\r\n      </ion-col>\r\n      <ion-col>\r\n         <div class=\"ion-text-start\">\r\n            <ion-item>\r\n               <ion-label  style=\"color: #ed502d;\" position=\"floating\">End date:</ion-label>\r\n               <ion-datetime [max]=\"maxData\" formControlName=\"stay_date_end\" [max]=\"maxData\" placeholder=\"Select Date\"></ion-datetime>\r\n            </ion-item>\r\n         </div>\r\n      </ion-col>\r\n   </ion-row>\r\n   <ion-row>\r\n      <ion-col>\r\n         <div class=\"ion-text-start\">\r\n            <ion-item>\r\n               <ion-label  style=\"color: #ed502d;\" position=\"floating\">Interests:</ion-label>\r\n               <ion-input formControlName=\"interestes\"></ion-input>\r\n            </ion-item>\r\n         </div>\r\n      </ion-col>\r\n   </ion-row>\r\n   <ion-row>\r\n      <ion-col>\r\n         <div class=\"ion-text-start\">\r\n            <ion-item>\r\n               <ion-label  style=\"color: #ed502d;\" position=\"floating\">Biography:</ion-label>\r\n               <ion-input formControlName=\"biography\"></ion-input>\r\n            </ion-item>\r\n         </div>\r\n      </ion-col>\r\n   </ion-row>\r\n   <ion-row>\r\n      <ion-col>\r\n         <div class=\"ion-text-start\">\r\n            <ion-item>\r\n               <ion-label  style=\"color: #ed502d;\" position=\"floating\">Habits:</ion-label>\r\n               <ion-input formControlName=\"habits\"></ion-input>\r\n            </ion-item>\r\n         </div>\r\n      </ion-col>\r\n   </ion-row>\r\n   <ion-row>\r\n      <ion-col>\r\n         <div class=\"ion-text-start\">\r\n            <ion-item>\r\n               <ion-label  style=\"color: #ed502d;\" position=\"floating\">Favourite locations:</ion-label>\r\n               <ion-input formControlName=\"favourite_locations\"></ion-input>\r\n            </ion-item>\r\n         </div>\r\n      </ion-col>\r\n   </ion-row>\r\n    <ion-row>\r\n      <ion-col>\r\n         <div class=\"ion-text-start\">\r\n            <ion-item>\r\n               <ion-label  style=\"color: #ed502d;\" position=\"floating\">Social media accounts:</ion-label>\r\n               <ion-input formControlName=\"social_account\"></ion-input>\r\n            </ion-item>\r\n         </div>\r\n      </ion-col>\r\n   </ion-row>\r\n  \r\n   <ion-row>\r\n      <ion-col>\r\n         <div class=\"ion-text-start\">\r\n            <ion-item>\r\n               <ion-label  style=\"color: #ed502d;\" position=\"floating\">Gender:</ion-label>\r\n               <ion-select formControlName=\"gender\" okText=\"Okay\" cancelText=\"Dismiss\">\r\n                  <ion-select-option value=\"male\">Male</ion-select-option>\r\n                  <ion-select-option value=\"female\">Female</ion-select-option>\r\n                  <ion-select-option value=\"other\">Other</ion-select-option>\r\n                  <ion-select-option value=\"not-share\">I would rather not share</ion-select-option>\r\n               </ion-select>\r\n            </ion-item>\r\n         </div>\r\n      </ion-col>\r\n   </ion-row>\r\n   <ion-row>\r\n      <ion-col>\r\n         <div class=\"ion-text-start\">\r\n            <ion-item>\r\n               <ion-label  style=\"color: #ed502d;\" position=\"floating\">Languages spoken:  \r\n               </ion-label>\r\n            </ion-item>\r\n         </div>\r\n      </ion-col>\r\n   </ion-row>\r\n   <ng-multiselect-dropdown\r\n   formControlName=\"languages\" \r\n   [data]=\"LanguageList\"\r\n   [(ngModel)]=\"LanguageSelectedItems\"\r\n   (onDeSelect)=\"OnDeSelectLang($event)\"\r\n   [settings]=\"LanguagedropdownSettings\"\r\n   (onSelect)=\"onItemSelectLang($event)\"\r\n   >\r\n   </ng-multiselect-dropdown>\r\n   <ion-row>\r\n      <ion-col>\r\n         <div class=\"ion-text-start\">\r\n            <ion-item>\r\n               <ion-thumbnail slot=\"end\">\r\n                     <img  [src]=\"image_url\" onError=\"src='assets/images/user_dummy.png'\">  \r\n               </ion-thumbnail>\r\n            </ion-item>\r\n            <ion-item>\r\n               <ion-toolbar  style=\"color: #ed502d;\">\r\n                  <ion-button fill=\"clear\" expand=\"full\" color=\"light\" (click)=\"selectImage()\" style=\"background: #ed502d;margin: 10px auto;display: block; width: auto;text-align: center;\">\r\n                     <ion-icon slot=\"start\" name=\"camera\"></ion-icon>\r\n                     Upload Picture\r\n                  </ion-button>\r\n               </ion-toolbar>\r\n            </ion-item>\r\n         </div>\r\n      </ion-col>\r\n   </ion-row>\r\n    <ion-row>\r\n      <ion-col>\r\n         <div class=\"ion-text-start\">\r\n            <ion-item>\r\n                  <input type=\"file\" name=\"file\"  (change)=\"changeListener($event)\"/>\r\n\r\n            </ion-item>\r\n            \r\n         </div>\r\n      </ion-col>\r\n   </ion-row>\r\n\r\n   <ion-row>\r\n      <ion-col>\r\n         <div class=\"ion-text-start\">\r\n            <div *ngIf=\"isSuccess == true\" >\r\n               <span class=\"for-sub-name\">{{sucessArr.message}}</span>\r\n            </div>\r\n         </div>\r\n      </ion-col>\r\n   </ion-row>\r\n   <ion-row>\r\n      <ion-col>\r\n         <div class=\"ion-text-start\">\r\n            <button class=\"submit-btn\" expand=\"block\" type=\"submit\">Update profile\r\n            </button>\r\n         </div>\r\n      </ion-col>\r\n   </ion-row>\r\n   </form>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/my-account/my-account.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/my-account/my-account.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL215LWFjY291bnQvbXktYWNjb3VudC5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/my-account/my-account.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/my-account/my-account.page.ts ***!
  \*****************************************************/
/*! exports provided: MyAccountPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyAccountPage", function() { return MyAccountPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_item_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/item.service */ "./src/app/services/item.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _ngx_google_places_autocomplete_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../ngx-google-places-autocomplete.directive */ "./src/app/ngx-google-places-autocomplete.directive.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
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













var MyAccountPage = /** @class */ (function () {
    function MyAccountPage(router, http, formBuilder, itemService, alertController, loadingController, camera, actionSheetController, datepipe) {
        this.router = router;
        this.http = http;
        this.formBuilder = formBuilder;
        this.itemService = itemService;
        this.alertController = alertController;
        this.loadingController = loadingController;
        this.camera = camera;
        this.actionSheetController = actionSheetController;
        this.datepipe = datepipe;
        this.dropdownList = [];
        this.dropdownLists = [];
        this.dropdownSettings = {};
        this.LanguageList = [];
        this.LanguagedropdownSettings = {};
        this.CountryList = [];
        this.CountrydropdownSettings = {};
        this.phoneCodeList = [];
        this.phoneCodedropdownSettings = {};
        this.base_url = "";
        this.image_base_url = "";
        this.image_url = "";
        this.email = "";
        this.submitted = false;
        this.fagree = false;
        this.isError = false;
        this.isSuccess = false;
        this.res = [];
        this.selected_country = "";
        this.errorsArr = [];
        this.sucessArr = [];
        this.assignArr = [];
        this.countriesArr = [];
        this.languageArr = [];
        this.teamListArr = [];
        this.tempNltyArr = [];
        this.tempLangArr = [];
        this.sendNltyArr = [];
        this.sendLangArr = [];
        this.userDataArr = [];
        this.myFiles = [];
        this.maxData = (new Date()).getFullYear() + 5;
        this.base_url = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].base_url;
        this.loginRoleId = sessionStorage.getItem("roleId");
        this.image_base_url = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].image_base_url;
        this.update_form = this.formBuilder.group({
            firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            phoneNo: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            postal_code: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            country: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            work_place: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            previous_city: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            dob: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            occuptation: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            wakeup_time: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            weekend_wakup_time: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            interestes: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            biography: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            habits: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            nationality: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            favourite_locations: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            gender: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            stay_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            rental_desc: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            languages: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            stay_date_start: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            stay_date_end: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            min_range: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            max_range: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            phonecode: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            upload_photo: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            social_account: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
        });
    }
    MyAccountPage.prototype.ngOnInit = function () {
        var _this = this;
        this.getUserData();
        setTimeout(function () {
            _this.getUserDataCountry();
        }, 2000);
    };
    MyAccountPage.prototype.ionViewDidLoad = function () {
        this.getUserData();
        this.getUserDataCountry();
    };
    MyAccountPage.prototype.onChange = function (address) {
        this.update_form.patchValue({ 'address': address.formatted_address });
        console.log(address);
    };
    MyAccountPage.prototype.onItemSelect = function (item) {
        this.sendNltyArr.push((item.item_id).toString());
        console.log(this.sendNltyArr);
    };
    MyAccountPage.prototype.OnNationalityDeSelect = function (item) {
        this.sendNltyArr.splice(this.sendNltyArr.indexOf((item.item_id).toString()), 1);
        console.log(this.sendNltyArr);
    };
    MyAccountPage.prototype.onSelectAll = function (items) {
        console.log(items);
    };
    MyAccountPage.prototype.onItemSelectLang = function (item) {
        this.sendLangArr.push((item.item_id).toString());
        console.log(this.sendLangArr);
    };
    MyAccountPage.prototype.OnDeSelectLang = function (item) {
        this.sendLangArr.splice(this.sendLangArr.indexOf((item.item_id).toString()), 1);
        console.log(this.sendLangArr);
    };
    MyAccountPage.prototype.compareFn = function (optionOne, optionTwo) {
        return optionOne.id === optionTwo.id;
    };
    MyAccountPage.prototype.setSelectedChange = function (event) {
        console.log(event);
        this.selected_country = event.id;
    };
    MyAccountPage.prototype.getUserDataCountry = function () {
        var _this = this;
        var token;
        if (sessionStorage.getItem("auth_token") != undefined) {
            token = sessionStorage.getItem("auth_token");
        }
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpHeaders"]();
        headers = headers.set('Authorization', token);
        this.http.get(this.base_url + 'countries', {
            headers: headers
        }).subscribe(function (response) {
            _this.countriesArr = response.countries;
            //  console.log(this.countriesArr);
            var obj = [];
            var objPhoneCode = [];
            var objSelected = [];
            var inc = 0;
            var incj = 0;
            //     console.log(this.nationality_one);
            //      console.log(this.nationality_two);
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
                if (_this.nationality_one == ele['id']) {
                    objSelected[incj] = {
                        item_id: ele['id'],
                        item_text: ele['name']
                    };
                    incj++;
                }
                if (_this.nationality_two == ele['id']) {
                    objSelected[incj] = {
                        item_id: ele['id'],
                        item_text: ele['name']
                    };
                    incj++;
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
            //   console.log(this.CountrySelectedItem);
            //   console.log(this.phoneCodeSelectedItem);
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
    MyAccountPage.prototype.getUserData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var token, headers;
            var _this = this;
            return __generator(this, function (_a) {
                this.image_url = '';
                if (sessionStorage.getItem("auth_token") != undefined) {
                    token = sessionStorage.getItem("auth_token");
                }
                this.presentLoading();
                headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpHeaders"]();
                headers = headers.set('Authorization', token);
                this.http.get(this.base_url + 'languages', {
                    headers: headers
                }).subscribe(function (response) {
                    _this.languageArr = response.languages;
                }, function (error) {
                    if (error.error == "Unauthorized" && error.status == 401) {
                        console.log("true");
                        _this.expiredMessage('Session Expired.You must login again!');
                    }
                });
                this.http.get(this.base_url + 'user/profile', {
                    headers: headers
                }).subscribe(function (response) {
                    _this.userDataArr = response.users[0];
                    // console.log(this.userDataArr);
                    var tempNationality = _this.userDataArr.nationality;
                    var templanguages = _this.userDataArr.languages;
                    var ttempNltyArr = tempNationality.split(",");
                    var ttempLangArr = templanguages.split(",");
                    //console.log(ttempNltyArr);
                    if (ttempNltyArr) {
                        var xNationalty = ttempNltyArr[0];
                        var zNationalty = ttempNltyArr[1];
                        _this.nationality_one = +xNationalty;
                        _this.nationality_two = +zNationalty;
                        // console.log(this.nationality_one);
                        // console.log(this.nationality_two);  
                        _this.tempNltyArr.push(_this.countriesArr[_this.nationality_one]); // = [,];
                        _this.tempNltyArr.push(_this.countriesArr[_this.nationality_two]);
                    }
                    if (ttempLangArr) {
                        // console.log("working");
                        var xlan = ttempLangArr[0];
                        var zlan = ttempLangArr[1];
                        var ylan = +xlan;
                        var qlan = +zlan;
                        var index;
                        for (index = 0; index < ttempLangArr.length; ++index) {
                            _this.tempLangArr.push(ttempLangArr[index].toString());
                        }
                    }
                    var inc = 0;
                    var incj = 0;
                    var obj = [];
                    var objSelected = [];
                    _this.languageArr.forEach(function (ele) {
                        if (_this.tempLangArr[0] == ele['id']) {
                            objSelected[incj] = {
                                item_id: ele['id'],
                                item_text: ele['name']
                            };
                            incj++;
                        }
                        if (_this.tempLangArr[1] == ele['id']) {
                            objSelected[incj] = {
                                item_id: ele['id'],
                                item_text: ele['name']
                            };
                            incj++;
                        }
                        if (_this.tempLangArr[2] == ele['id']) {
                            objSelected[incj] = {
                                item_id: ele['id'],
                                item_text: ele['name']
                            };
                            incj++;
                        }
                        if (_this.tempLangArr[3] == ele['id']) {
                            objSelected[incj] = {
                                item_id: ele['id'],
                                item_text: ele['name']
                            };
                            incj++;
                        }
                        if (_this.tempLangArr[4] == ele['id']) {
                            objSelected[incj] = {
                                item_id: ele['id'],
                                item_text: ele['name']
                            };
                            incj++;
                        }
                        obj[inc] = {
                            item_id: ele['id'],
                            item_text: ele['name']
                        };
                        inc++;
                    });
                    _this.LanguageList = obj;
                    _this.LanguageSelectedItems = objSelected;
                    _this.LanguagedropdownSettings = {
                        idField: 'item_id',
                        textField: 'item_text',
                        selectAllText: 'Select All',
                        unSelectAllText: 'UnSelect All',
                        allowSearchFilter: true,
                        limitSelection: 5,
                        singleSelection: false,
                    };
                    var phoneNoArr = [];
                    var stay_dateArr = [];
                    var pricerange = [];
                    if (_this.userDataArr.phoneNo) {
                        phoneNoArr = _this.userDataArr.phoneNo.split(' ');
                        _this.phone_code = phoneNoArr[0];
                    }
                    if (_this.userDataArr.stay_date)
                        stay_dateArr = _this.userDataArr.stay_date.split(' - ');
                    if (_this.userDataArr.price_range)
                        pricerange = _this.userDataArr.price_range.split('-');
                    if (_this.userDataArr.nationality)
                        _this.sendNltyArr = _this.userDataArr.nationality.split(',');
                    if (_this.userDataArr.nationality)
                        _this.sendLangArr = _this.userDataArr.languages.split(',');
                    if (_this.userDataArr.dob) {
                        var latest_date = _this.datepipe.transform(_this.userDataArr.dob, 'yyyy-MM-dd');
                        _this.userDataArr.dob = latest_date;
                    }
                    _this.update_form.patchValue({
                        firstName: _this.userDataArr.firstName,
                        lastName: _this.userDataArr.lastName,
                        email: _this.userDataArr.email,
                        username: _this.userDataArr.login.username,
                        phoneNo: _this.userDataArr.phoneNo,
                        postal_code: _this.userDataArr.postalCode,
                        address: _this.userDataArr.address,
                        work_place: _this.userDataArr.work_place,
                        previous_city: _this.userDataArr.previous_city,
                        dob: _this.userDataArr.dob,
                        occuptation: _this.userDataArr.occuptation_tt,
                        wakeup_time: _this.userDataArr.wakeup_time,
                        weekend_wakup_time: _this.userDataArr.weekend_wakup_time,
                        interestes: _this.userDataArr.interestes,
                        biography: _this.userDataArr.biography,
                        stay_date: _this.userDataArr.stay_date,
                        stay_date_start: stay_dateArr[0] ? stay_dateArr[0] : "",
                        stay_date_end: stay_dateArr[1] ? stay_dateArr[1] : "",
                        gender: _this.userDataArr.gender,
                        habits: _this.userDataArr.habits,
                        favourite_locations: _this.userDataArr.habits,
                        upload_photo: _this.userDataArr.upload_photo,
                        min_range: pricerange[0] ? pricerange[0] : "",
                        max_range: pricerange[1] ? pricerange[1] : "",
                        rental_desc: _this.userDataArr.rental_desc,
                        social_account: _this.userDataArr.social_account,
                    });
                    // console.log(this.update_form.value);
                    _this.image_url = _this.image_base_url + '' + _this.userDataArr.userId;
                    _this.email = _this.userDataArr.email;
                    _this.selected_country = _this.userDataArr.country;
                    _this.loadingController.dismiss().then(function (a) { return console.log('dismissed'); });
                }, function (error) {
                    // console.log("ERROR");
                    // console.log(error.error);
                    if (error.error == "Unauthorized" && error.status == 401) {
                        console.log("true");
                        _this.expiredMessage('Session Expired.You must login again!');
                    }
                });
                return [2 /*return*/];
            });
        });
    };
    MyAccountPage.prototype.expiredMessage = function (msg) {
        return __awaiter(this, void 0, void 0, function () {
            var loading, _a, role, data;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            message: msg,
                            duration: 3000,
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
    MyAccountPage.prototype.presentLoading = function () {
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
    MyAccountPage.prototype.presentAlert = function (msg) {
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
                                        _this.router.navigate(['dashboard']);
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
    Object.defineProperty(MyAccountPage.prototype, "f", {
        get: function () {
            return this.update_form.controls;
        },
        enumerable: true,
        configurable: true
    });
    MyAccountPage.prototype.fileProgress = function (event) {
        this.fileData = event.target.files[0];
        console.log(this.fileData);
    };
    MyAccountPage.prototype.register = function (form) {
        var _this = this;
        this.submitted = true;
        if (this.update_form.invalid) {
            console.log(this.update_form.value);
            console.log("invalid");
            this.content.scrollToTop(400);
            return;
        }
        else {
            console.log(form.country);
            console.log('nationality' + form.nationality);
            console.log('languages' + form.languages);
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
                "occuptation": form.occuptation,
                "wakeup_time": form.wakeup_time,
                "weekend_wakup_time": form.weekend_wakup_time,
                "interestes": form.interestes,
                "stay_date": form.stay_date,
                "price_range": form.min_range + '-' + form.max_range,
                "stay_date_start": form.stay_date_start,
                "stay_date_end": form.stay_date_end,
                "languages": this.sendLangArr,
                "biography": form.biography,
                "nationality": this.sendNltyArr,
                "gender": form.gender,
                "habits": form.habits,
                "rental_desc": form.rental_desc,
                "favourite_locations": form.favourite_locations,
                "social_account": form.social_account,
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
            formData.append('previous_city', input_data.previous_city);
            formData.append('occuptation_tt', input_data.occuptation);
            formData.append('wakeup_time', input_data.wakeup_time);
            formData.append('weekend_wakup_time', input_data.weekend_wakup_time);
            formData.append('interestes', input_data.interestes);
            formData.append('biography', input_data.biography);
            formData.append('nationality', input_data.nationality);
            formData.append('languages', input_data.languages);
            formData.append('gender', input_data.gender);
            formData.append('dob', input_data.dob);
            formData.append('stay_date', input_data.stay_date_start + " - " + input_data.stay_date_end);
            formData.append('price_range', input_data.price_range);
            formData.append('work_place', input_data.work_place);
            formData.append('habits', input_data.habits);
            formData.append('rental_desc', input_data.rental_desc);
            formData.append('favourite_locations', input_data.favourite_locations);
            formData.append('social_account', input_data.social_account);
            formData.append('photo', this.ImageObj);
            var token = void 0;
            if (sessionStorage.getItem("auth_token") != undefined) {
                token = sessionStorage.getItem("auth_token");
            }
            this.presentLoading();
            console.log(formData);
            var httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpHeaders"]({
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
    MyAccountPage.prototype.selectImage = function () {
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
    MyAccountPage.prototype.captureImage = function (useAlbum) {
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
    MyAccountPage.prototype.b64toBlob = function (b64Data, contentType) {
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
    MyAccountPage.prototype.changeListener = function (event) {
        //    console.log(event.target.files);
        for (var i = 0; i < event.target.files.length; i++) {
            this.myFiles.push(event.target.files[i]);
        }
        console.log(this.myFiles);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("placesRef"),
        __metadata("design:type", _ngx_google_places_autocomplete_directive__WEBPACK_IMPORTED_MODULE_8__["GooglePlaceDirective"])
    ], MyAccountPage.prototype, "placesRef", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonContent"]),
        __metadata("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonContent"])
    ], MyAccountPage.prototype, "content", void 0);
    MyAccountPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-my-account',
            template: __webpack_require__(/*! ./my-account.page.html */ "./src/app/pages/my-account/my-account.page.html"),
            styles: [__webpack_require__(/*! ./my-account.page.scss */ "./src/app/pages/my-account/my-account.page.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _services_item_service__WEBPACK_IMPORTED_MODULE_3__["ItemService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
            _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_7__["Camera"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"],
            _angular_common__WEBPACK_IMPORTED_MODULE_9__["DatePipe"]])
    ], MyAccountPage);
    return MyAccountPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-my-account-my-account-module.js.map