(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-add-property-add-property-module"],{

/***/ "./src/app/pages/add-property/add-property.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/add-property/add-property.module.ts ***!
  \***********************************************************/
/*! exports provided: AddPropertyPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPropertyPageModule", function() { return AddPropertyPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _add_property_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-property.page */ "./src/app/pages/add-property/add-property.page.ts");
/* harmony import */ var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-google-places-autocomplete */ "./node_modules/ngx-google-places-autocomplete/bundles/ngx-google-places-autocomplete.umd.js");
/* harmony import */ var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_6__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '',
        component: _add_property_page__WEBPACK_IMPORTED_MODULE_5__["AddPropertyPage"]
    }
];
var AddPropertyPageModule = /** @class */ (function () {
    function AddPropertyPageModule() {
    }
    AddPropertyPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_6__["GooglePlaceModule"]
            ],
            declarations: [_add_property_page__WEBPACK_IMPORTED_MODULE_5__["AddPropertyPage"]]
        })
    ], AddPropertyPageModule);
    return AddPropertyPageModule;
}());



/***/ }),

/***/ "./src/app/pages/add-property/add-property.page.html":
/*!***********************************************************!*\
  !*** ./src/app/pages/add-property/add-property.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n   <ion-toolbar>\r\n      <ion-buttons slot=\"start\">\r\n         <ion-menu-button></ion-menu-button>\r\n      </ion-buttons>\r\n      <ion-buttons slot=\"end\">\r\n         <ion-back-button defaultHref=\"property-listing\"></ion-back-button>\r\n      </ion-buttons>\r\n      <ion-title>\r\n         Add property\r\n      </ion-title>\r\n   </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n   <form [formGroup]=\"property_form\" (submit)=\"register(property_form.value)\">\r\n   <ion-row>\r\n      <ion-col>\r\n         <div class=\"ion-text-start\">\r\n            <ion-item>\r\n               <ion-label position=\"floating\" style=\"color: #ed502d;\">Name</ion-label>\r\n               <ion-input type=\"text\" formControlName=\"name\" required></ion-input>\r\n            </ion-item>\r\n            <div *ngIf=\"submitted && f.name.errors\" class=\"invalid-feedback\" style=\"padding: 10px; left;\">\r\n               <span *ngIf=\"f.name.errors.required\" style=\" text-align: left;color: red;\">Property name is required.\r\n               </span>\r\n            </div>\r\n         </div>\r\n      </ion-col>\r\n   </ion-row>\r\n   <ion-row>\r\n      <ion-col>\r\n         <div class=\"ion-text-start\">\r\n            <ion-item>\r\n               <ion-label  style=\"color: #ed502d;\" position=\"floating\">Balcony/Terrace</ion-label>\r\n               <ion-select formControlName=\"no_of_balconies\" okText=\"Okay\" cancelText=\"Dismiss\">\r\n                  <ion-select-option value=\"0\">0</ion-select-option>\r\n                  <ion-select-option value=\"1\">1</ion-select-option>\r\n                  <ion-select-option value=\"2\">2</ion-select-option>\r\n                  <ion-select-option value=\"3\">3</ion-select-option>\r\n                  <ion-select-option value=\"4\">4</ion-select-option>\r\n               </ion-select>\r\n            </ion-item>\r\n            <div *ngIf=\"submitted && f.no_of_balconies.errors\" class=\"invalid-feedback\" style=\"padding: 10px; left;\">\r\n               <span *ngIf=\"f.no_of_balconies.errors.required\" style=\" text-align: left;color: red;\">Balconies is required.\r\n               </span>\r\n            </div>\r\n         </div>\r\n      </ion-col>\r\n   </ion-row>\r\n   <ion-row>\r\n      <ion-col>\r\n         <div class=\"ion-text-start\">\r\n            <ion-item>\r\n               <ion-label  style=\"color: #ed502d;\" position=\"floating\">Property Type</ion-label>\r\n               <ion-select formControlName=\"property_type\" okText=\"Okay\" cancelText=\"Dismiss\">\r\n                  <ion-select-option value=\"1\">Flat</ion-select-option>\r\n                  <ion-select-option value=\"2\">Room</ion-select-option>\r\n               </ion-select>\r\n            </ion-item>\r\n            <div *ngIf=\"submitted && f.property_type.errors\" class=\"invalid-feedback\" style=\"padding: 10px; left;\">\r\n               <span *ngIf=\"f.property_type.errors.required\" style=\" text-align: left;color: red;\">Property Type is required.\r\n               </span>\r\n            </div>\r\n         </div>\r\n      </ion-col>\r\n   </ion-row>\r\n   <ion-row>\r\n      <ion-col>\r\n         <div class=\"ion-text-start\">\r\n            <ion-item>\r\n               <ion-label  style=\"color: #ed502d;\" position=\"floating\">Bedrooms</ion-label>\r\n               <ion-select formControlName=\"no_of_bedrooms\" okText=\"Okay\" cancelText=\"Dismiss\">\r\n                  <ion-select-option value=\"1\">1</ion-select-option>\r\n                  <ion-select-option value=\"2\">2</ion-select-option>\r\n                  <ion-select-option value=\"3\">3</ion-select-option>\r\n                  <ion-select-option value=\"4\">4</ion-select-option>\r\n               </ion-select>\r\n            </ion-item>\r\n            <div *ngIf=\"submitted && f.no_of_bedrooms.errors\" class=\"invalid-feedback\" style=\"padding: 10px; left;\">\r\n               <span *ngIf=\"f.no_of_bedrooms.errors.required\" style=\" text-align: left;color: red;\">Bedrooms is required.\r\n               </span>\r\n            </div>\r\n         </div>\r\n      </ion-col>\r\n   </ion-row>\r\n   <ion-row>\r\n      <ion-col>\r\n         <div class=\"ion-text-start\">\r\n            <ion-item>\r\n               <ion-label  style=\"color: #ed502d;\" position=\"floating\">Bathrooms</ion-label>\r\n               <ion-select formControlName=\"no_of_bathrooms\" okText=\"Okay\" cancelText=\"Dismiss\">\r\n                  <ion-select-option value=\"1\">1</ion-select-option>\r\n                  <ion-select-option value=\"2\">2</ion-select-option>\r\n                  <ion-select-option value=\"3\">3</ion-select-option>\r\n                  <ion-select-option value=\"4\">4</ion-select-option>\r\n               </ion-select>\r\n            </ion-item>\r\n            <div *ngIf=\"submitted && f.no_of_bathrooms.errors\" class=\"invalid-feedback\" style=\"padding: 10px; left;\">\r\n               <span *ngIf=\"f.no_of_bathrooms.errors.required\" style=\" text-align: left;color: red;\">Bathrooms is required.\r\n               </span>\r\n            </div>\r\n         </div>\r\n      </ion-col>\r\n   </ion-row>\r\n   <ion-row>\r\n      <ion-col>\r\n         <div class=\"ion-text-start\">\r\n            <ion-item>\r\n               <ion-label  style=\"color: #ed502d;\" position=\"floating\">Kitchens</ion-label>\r\n               <ion-select formControlName=\"no_of_kitchens\" okText=\"Okay\" cancelText=\"Dismiss\">\r\n                  <ion-select-option value=\"1\">1</ion-select-option>\r\n                  <ion-select-option value=\"2\">2</ion-select-option>\r\n               </ion-select>\r\n            </ion-item>\r\n            <div *ngIf=\"submitted && f.no_of_kitchens.errors\" class=\"invalid-feedback\" style=\"padding: 10px; left;\">\r\n               <span *ngIf=\"f.no_of_kitchens.errors.required\" style=\" text-align: left;color: red;\">Kitchens detail is required.\r\n               </span>\r\n            </div>\r\n         </div>\r\n      </ion-col>\r\n   </ion-row>\r\n   <ion-row>\r\n      <ion-col>\r\n         <div class=\"ion-text-start\">\r\n            <ion-item>\r\n               <ion-label  style=\"color: #ed502d;\" position=\"floating\">Garages:</ion-label>\r\n               <ion-select formControlName=\"no_of_garages\" okText=\"Okay\" cancelText=\"Dismiss\">\r\n                  <ion-select-option value=\"0\">0</ion-select-option>\r\n                  <ion-select-option value=\"1\">1</ion-select-option>\r\n                  <ion-select-option value=\"2\">2</ion-select-option>\r\n                  <ion-select-option value=\"3\">3</ion-select-option>\r\n                  <ion-select-option value=\"4\">4</ion-select-option>\r\n               </ion-select>\r\n            </ion-item>\r\n            <div *ngIf=\"submitted && f.no_of_garages.errors\" class=\"invalid-feedback\" style=\"padding: 10px; left;\">\r\n               <span *ngIf=\"f.no_of_garages.errors.required\" style=\" text-align: left;color: red;\">Garbages is required.\r\n               </span>\r\n            </div>\r\n         </div>\r\n      </ion-col>\r\n   </ion-row>\r\n   <ion-row>\r\n      <ion-col>\r\n         <div class=\"ion-text-start\">\r\n            <ion-item>\r\n               <ion-label  style=\"color: #ed502d;\" position=\"floating\">Parking Spaces</ion-label>\r\n               <ion-select formControlName=\"no_of_parking_space\" okText=\"Okay\" cancelText=\"Dismiss\">\r\n                  <ion-select-option value=\"0\">0</ion-select-option>\r\n                  <ion-select-option value=\"1\">1</ion-select-option>\r\n                  <ion-select-option value=\"2\">2</ion-select-option>\r\n               </ion-select>\r\n            </ion-item>\r\n            <div *ngIf=\"submitted && f.no_of_parking_space.errors\" class=\"invalid-feedback\" style=\"padding: 10px; left;\">\r\n               <span *ngIf=\"f.no_of_parking_space.errors.required\" style=\" text-align: left;color: red;\">Parking Space is required.\r\n               </span>\r\n            </div>\r\n         </div>\r\n      </ion-col>\r\n   </ion-row>\r\n   <ion-row>\r\n      <ion-col>\r\n         <div class=\"ion-text-start\">\r\n            <ion-item>\r\n               <ion-label position=\"floating\" style=\"color: #ed502d;\">Floor space(per/sq ft.)</ion-label>\r\n               <ion-input type=\"number\" formControlName=\"floor_space\" required></ion-input>\r\n            </ion-item>\r\n            <div *ngIf=\"submitted && f.floor_space.errors\" class=\"invalid-feedback\" style=\"padding: 10px; left;\">\r\n               <span *ngIf=\"f.floor_space.errors.required\" style=\" text-align: left;color: red;\">Floor Space is required.\r\n               </span>\r\n            </div>\r\n         </div>\r\n      </ion-col>\r\n   </ion-row>\r\n   <ion-row>\r\n      <ion-col>\r\n         <div class=\"ion-text-start\">\r\n            <ion-item>\r\n               <ion-label position=\"floating\" style=\"color: #ed502d;\">Pet Allowed</ion-label>\r\n               <ion-select formControlName=\"pets_allowed\" okText=\"Okay\" cancelText=\"Dismiss\">\r\n                  <ion-select-option value=\"0\">No</ion-select-option>\r\n                  <ion-select-option value=\"1\">Yes</ion-select-option>\r\n               </ion-select>\r\n            </ion-item>\r\n            <div *ngIf=\"submitted && f.pets_allowed.errors\" class=\"invalid-feedback\" style=\"padding: 10px; left;\">\r\n               <span *ngIf=\"f.pets_allowed.errors.required\" style=\" text-align: left;color: red;\">Pet Information is required.\r\n               </span>\r\n            </div>\r\n         </div>\r\n      </ion-col>\r\n   </ion-row>\r\n   <ion-row>\r\n      <ion-col>\r\n         <div class=\"ion-text-start\">\r\n            <ion-item>\r\n               <ion-label position=\"floating\" style=\"color: #ed502d;\">Status</ion-label>\r\n               <ion-select formControlName=\"status\" okText=\"Okay\" cancelText=\"Dismiss\">\r\n                  <ion-select-option value=\"1\">Available</ion-select-option>\r\n                  <ion-select-option value=\"2\">No</ion-select-option>\r\n               </ion-select>\r\n            </ion-item>\r\n            <div *ngIf=\"submitted && f.status.errors\" class=\"invalid-feedback\" style=\"padding: 10px; left;\">\r\n               <span *ngIf=\"f.status.errors.required\" style=\" text-align: left;color: red;\">Status is required.\r\n               </span>\r\n            </div>\r\n         </div>\r\n      </ion-col>\r\n   </ion-row>\r\n   <ion-row>\r\n      <ion-col>\r\n         <div class=\"ion-text-start\">\r\n            <ion-label style=\"color: #ed502d;font-size: 13px; padding-left: 15px;\" position=\"floating\">Location:</ion-label>\r\n            <ion-item>\r\n               <input class=\"input_location\" ngx-google-places-autocomplete [options]='options' #placesRef=\"ngx-places\" (onAddressChange)=\"onChange($event)\" formControlName=\"city\"  \r\n               />\r\n            </ion-item>\r\n            <div *ngIf=\"submitted && f.city.errors\" class=\"invalid-feedback\" style=\"padding: 10px; left;\">\r\n               <span *ngIf=\"f.city.errors.required\" style=\" text-align: left;color: red;\">city is required.\r\n               </span>\r\n            </div>\r\n         </div>\r\n      </ion-col>\r\n   </ion-row>\r\n   <ion-row>\r\n      <ion-col>\r\n         <div class=\"ion-text-start\">\r\n            <ion-item>\r\n               <ion-label position=\"floating\" style=\"color: #ed502d;\">Property Description</ion-label>\r\n               <ion-textarea formControlName=\"property_desc\" required></ion-textarea>\r\n            </ion-item>\r\n            <div *ngIf=\"submitted && f.property_desc.errors\" class=\"invalid-feedback\" style=\"padding: 10px; left;\">\r\n               <span *ngIf=\"f.property_desc.errors.required\" style=\" text-align: left;color: red;\">Property Decription is required.\r\n               </span>\r\n            </div>\r\n         </div>\r\n      </ion-col>\r\n   </ion-row>\r\n   <ion-row>\r\n      <ion-col>\r\n         <div class=\"ion-text-start\">\r\n            <ion-item>\r\n               <ion-thumbnail slot=\"end\">\r\n                  <ion-img [src]=\"image_url\" *ngIf=\"image_url\"></ion-img>\r\n               </ion-thumbnail>\r\n            </ion-item>\r\n            <ion-item>\r\n               <ion-toolbar style=\"color: #ed502d;\">\r\n                  <button type=\"button\" fill=\"clear\" expand=\"full\" color=\"light\" (click)=\"selectImage()\">\r\n                     <ion-icon slot=\"start\" name=\"camera\"></ion-icon>\r\n                     Upload Photo\r\n                  </button>\r\n               </ion-toolbar>\r\n            </ion-item>\r\n         </div>\r\n      </ion-col>\r\n   </ion-row>\r\n   <ion-row>\r\n      <ion-col>\r\n         <div class=\"ion-text-start\">\r\n            <div *ngIf=\"isSuccess == true\" >\r\n               <span class=\"for-sub-name\">{{sucessArr.message}}</span>\r\n            </div>\r\n         </div>\r\n      </ion-col>\r\n   </ion-row>\r\n   <ion-row>\r\n      <ion-col>\r\n         <div class=\"ion-text-start\">\r\n            <button class=\"submit-btn\" expand=\"block\" type=\"submit\">Add Property\r\n            </button>\r\n         </div>\r\n      </ion-col>\r\n   </ion-row>\r\n   </form>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/add-property/add-property.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/add-property/add-property.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FkZC1wcm9wZXJ0eS9hZGQtcHJvcGVydHkucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/add-property/add-property.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/add-property/add-property.page.ts ***!
  \*********************************************************/
/*! exports provided: AddPropertyPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPropertyPage", function() { return AddPropertyPage; });
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
/* harmony import */ var _ngx_google_places_autocomplete_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../ngx-google-places-autocomplete.directive */ "./src/app/ngx-google-places-autocomplete.directive.ts");
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
















var AddPropertyPage = /** @class */ (function () {
    function AddPropertyPage(router, http, formBuilder, itemService, alertController, loadingController, camera, file, webview, actionSheetController, platform, filePath, sanitizer) {
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
        this.image_url = "";
        this.base_url = "";
        this.submitted = false;
        this.fagree = false;
        this.isError = false;
        this.isSuccess = false;
        this.masterCheck = false;
        this.res = [];
        this.errorsArr = [];
        this.sucessArr = [];
        this.assignArr = [];
        this.teamListArr = [];
        this.userListArr = [];
        this.currentImage = "";
        this.currentImageWithoutCode = "";
        this.base_url = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].base_url;
        this.property_form = this.formBuilder.group({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            city: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            property_type: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            floor_space: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            no_of_balconies: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            no_of_bedrooms: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            no_of_kitchens: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            no_of_bathrooms: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            no_of_garages: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            property_desc: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            pets_allowed: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            no_of_parking_space: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            status: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            photo: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
        });
    }
    AddPropertyPage.prototype.ngOnInit = function () {
    };
    Object.defineProperty(AddPropertyPage.prototype, "f", {
        get: function () { return this.property_form.controls; },
        enumerable: true,
        configurable: true
    });
    AddPropertyPage.prototype.fileProgress = function (event) {
        this.fileData = event.target.files[0];
        console.log(this.fileData);
    };
    AddPropertyPage.prototype.onChange = function (address) {
        this.property_form.patchValue({ 'city': address.formatted_address });
        console.log(address);
    };
    AddPropertyPage.prototype.pushToAssignArr = function (value) {
        this.assignArr.push(value);
        console.log(this.assignArr);
    };
    AddPropertyPage.prototype.presentLoading = function () {
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
    AddPropertyPage.prototype.presentAlertConfirm = function () {
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
    AddPropertyPage.prototype.presentAlert = function () {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Success Message!',
                            subHeader: 'Property added successfully!!!',
                            message: 'Click Okay to redirect to property listing page and click Cancel to stay on same page.',
                            buttons: [{
                                    text: 'Cancel',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function (blah) {
                                        console.log('Confirmed Cancel: blah');
                                        _this.property_form.reset();
                                    }
                                }, {
                                    text: 'Okay',
                                    handler: function () {
                                        _this.router.navigate(['property-listing']);
                                        console.log('Confirmed Okay');
                                        _this.router.navigate(['dashboard']);
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
    AddPropertyPage.prototype.register = function (form) {
        var _this = this;
        // console.log('input_data');
        this.submitted = true;
        if (this.property_form.invalid) {
            this.content.scrollToTop(200);
            return;
        }
        else {
            var input_data = {
                "name": form.name,
                "city": form.city,
                "floor_space": form.floor_space,
                "no_of_balconies": form.no_of_balconies,
                "no_of_bedrooms": form.no_of_bedrooms,
                "no_of_bathrooms": form.no_of_bathrooms,
                "no_of_kitchens": form.no_of_kitchens,
                "property_desc": form.property_desc,
                "pets_allowed": form.pets_allowed,
                "property_type": form.property_type,
                "status": form.status,
                "no_of_parking_space": form.no_of_parking_space,
            };
            console.log(input_data);
            var formData = new FormData();
            formData.append('name', input_data.name);
            formData.append('property_type', input_data.property_type);
            formData.append('city', input_data.city);
            formData.append('photo', this.ImageObj);
            formData.append('floor_space', input_data.floor_space);
            formData.append('no_of_balconies', input_data.no_of_balconies);
            formData.append('no_of_bedrooms', input_data.no_of_bedrooms);
            formData.append('no_of_bathrooms', input_data.no_of_bathrooms);
            formData.append('no_of_kitchens', input_data.no_of_kitchens);
            formData.append('property_desc', input_data.property_desc);
            formData.append('pets_allowed', input_data.pets_allowed);
            formData.append('status', input_data.status);
            formData.append('no_of_parking_space', input_data.no_of_parking_space);
            console.log(formData);
            var token = void 0;
            if (sessionStorage.getItem("auth_token") != undefined) {
                token = sessionStorage.getItem("auth_token");
            }
            this.presentLoading();
            var httpOptions = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpHeaders"]({ 'authorization': token }) };
            this.http.post(this.base_url + 'propertynew', formData, httpOptions).subscribe(function (response) {
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
    AddPropertyPage.prototype.selectImage = function () {
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
    AddPropertyPage.prototype.captureImage = function (useAlbum) {
        return __awaiter(this, void 0, void 0, function () {
            var options, imageData, contentType, realData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        options = __assign({ quality: 100, destinationType: this.camera.DestinationType.DATA_URL, encodingType: this.camera.EncodingType.JPEG, mediaType: this.camera.MediaType.PICTURE }, useAlbum ? { sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM } : {});
                        return [4 /*yield*/, this.camera.getPicture(options)];
                    case 1:
                        imageData = _a.sent();
                        this.currentImage = "" + imageData;
                        contentType = 'image/jpeg';
                        realData = imageData;
                        this.ImageObj = this.b64toBlob(realData, contentType);
                        return [2 /*return*/];
                }
            });
        });
    };
    AddPropertyPage.prototype.b64toBlob = function (b64Data, contentType) {
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("placesRef"),
        __metadata("design:type", _ngx_google_places_autocomplete_directive__WEBPACK_IMPORTED_MODULE_12__["GooglePlaceDirective"])
    ], AddPropertyPage.prototype, "placesRef", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonContent"]),
        __metadata("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonContent"])
    ], AddPropertyPage.prototype, "content", void 0);
    AddPropertyPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-property',
            template: __webpack_require__(/*! ./add-property.page.html */ "./src/app/pages/add-property/add-property.page.html"),
            styles: [__webpack_require__(/*! ./add-property.page.scss */ "./src/app/pages/add-property/add-property.page.scss")]
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
    ], AddPropertyPage);
    return AddPropertyPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-add-property-add-property-module.js.map