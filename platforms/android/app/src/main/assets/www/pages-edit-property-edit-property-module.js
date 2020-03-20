(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-edit-property-edit-property-module"],{

/***/ "./src/app/pages/edit-property/edit-property.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/edit-property/edit-property.module.ts ***!
  \*************************************************************/
/*! exports provided: EditPropertyPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPropertyPageModule", function() { return EditPropertyPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _edit_property_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-property.page */ "./src/app/pages/edit-property/edit-property.page.ts");
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
        component: _edit_property_page__WEBPACK_IMPORTED_MODULE_5__["EditPropertyPage"]
    }
];
var EditPropertyPageModule = /** @class */ (function () {
    function EditPropertyPageModule() {
    }
    EditPropertyPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes), ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_6__["GooglePlaceModule"]
            ],
            declarations: [_edit_property_page__WEBPACK_IMPORTED_MODULE_5__["EditPropertyPage"]]
        })
    ], EditPropertyPageModule);
    return EditPropertyPageModule;
}());



/***/ }),

/***/ "./src/app/pages/edit-property/edit-property.page.html":
/*!*************************************************************!*\
  !*** ./src/app/pages/edit-property/edit-property.page.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n   <ion-toolbar>\n      <ion-buttons slot=\"start\">\n         <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n      <ion-buttons slot=\"end\">\n         <ion-back-button defaultHref=\"dashboard\"></ion-back-button>\n      </ion-buttons>\n      <ion-title>\n         Edit property\n      </ion-title>\n   </ion-toolbar>\n</ion-header>\n<ion-content>\n   <form [formGroup]=\"editform\" (submit)=\"submit(editform.value)\">\n   <ion-row>\n      <ion-col>\n         <div class=\"ion-text-start\">\n            <ion-item>\n               <ion-label position=\"floating\" style=\"color: #ed502d;\">Name</ion-label>\n               <ion-input type=\"text\" formControlName=\"name\" required></ion-input>\n            </ion-item>\n            <div *ngIf=\"submitted && f.name.errors\" class=\"invalid-feedback\" style=\"padding: 10px; left;\">\n               <span *ngIf=\"f.name.errors.required\" style=\" text-align: left;color: red;\">Property name is required.\n               </span>\n            </div>\n         </div>\n      </ion-col>\n   </ion-row>\n   <ion-row>\n      <ion-col>\n         <div class=\"ion-text-start\">\n            <ion-item>\n               <ion-label  style=\"color: #ed502d;\" position=\"floating\">Balcony/Terrace</ion-label>\n               <ion-select formControlName=\"no_of_balconies\" okText=\"Okay\" cancelText=\"Dismiss\">\n                  <ion-select-option value=\"0\">0</ion-select-option>\n                  <ion-select-option value=\"1\">1</ion-select-option>\n                  <ion-select-option value=\"2\">2</ion-select-option>\n                  <ion-select-option value=\"3\">3</ion-select-option>\n                  <ion-select-option value=\"4\">4</ion-select-option>\n               </ion-select>\n            </ion-item>\n            <div *ngIf=\"submitted && f.no_of_balconies.errors\" class=\"invalid-feedback\" style=\"padding: 10px; left;\">\n               <span *ngIf=\"f.no_of_balconies.errors.required\" style=\" text-align: left;color: red;\">Balconies is required.\n               </span>\n            </div>\n         </div>\n      </ion-col>\n   </ion-row>\n   <ion-row>\n      <ion-col>\n         <div class=\"ion-text-start\">\n            <ion-item>\n               <ion-label  style=\"color: #ed502d;\" position=\"floating\">Property Type</ion-label>\n               <ion-select formControlName=\"property_type\" okText=\"Okay\" cancelText=\"Dismiss\">\n                  <ion-select-option value=\"1\">Flat</ion-select-option>\n                  <ion-select-option value=\"2\">Room</ion-select-option>\n               </ion-select>\n            </ion-item>\n            <div *ngIf=\"submitted && f.property_type.errors\" class=\"invalid-feedback\" style=\"padding: 10px; left;\">\n               <span *ngIf=\"f.property_type.errors.required\" style=\" text-align: left;color: red;\">Property Type is required.\n               </span>\n            </div>\n         </div>\n      </ion-col>\n   </ion-row>\n   <ion-row>\n      <ion-col>\n         <div class=\"ion-text-start\">\n            <ion-item>\n               <ion-label  style=\"color: #ed502d;\" position=\"floating\">Bedrooms</ion-label>\n               <ion-select formControlName=\"no_of_bedrooms\" okText=\"Okay\" cancelText=\"Dismiss\">\n                  <ion-select-option value=\"1\">1</ion-select-option>\n                  <ion-select-option value=\"2\">2</ion-select-option>\n                  <ion-select-option value=\"3\">3</ion-select-option>\n                  <ion-select-option value=\"4\">4</ion-select-option>\n               </ion-select>\n            </ion-item>\n            <div *ngIf=\"submitted && f.no_of_bedrooms.errors\" class=\"invalid-feedback\" style=\"padding: 10px; left;\">\n               <span *ngIf=\"f.no_of_bedrooms.errors.required\" style=\" text-align: left;color: red;\">Bedrooms is required.\n               </span>\n            </div>\n         </div>\n      </ion-col>\n   </ion-row>\n   <ion-row>\n      <ion-col>\n         <div class=\"ion-text-start\">\n            <ion-item>\n               <ion-label  style=\"color: #ed502d;\" position=\"floating\">Bathrooms</ion-label>\n               <ion-select formControlName=\"no_of_bathrooms\" okText=\"Okay\" cancelText=\"Dismiss\">\n                  <ion-select-option value=\"1\">1</ion-select-option>\n                  <ion-select-option value=\"2\">2</ion-select-option>\n                  <ion-select-option value=\"3\">3</ion-select-option>\n                  <ion-select-option value=\"4\">4</ion-select-option>\n               </ion-select>\n            </ion-item>\n            <div *ngIf=\"submitted && f.no_of_bathrooms.errors\" class=\"invalid-feedback\" style=\"padding: 10px; left;\">\n               <span *ngIf=\"f.no_of_bathrooms.errors.required\" style=\" text-align: left;color: red;\">Bathrooms is required.\n               </span>\n            </div>\n         </div>\n      </ion-col>\n   </ion-row>\n   <ion-row>\n      <ion-col>\n         <div class=\"ion-text-start\">\n            <ion-item>\n               <ion-label  style=\"color: #ed502d;\" position=\"floating\">Kitchens</ion-label>\n               <ion-select formControlName=\"no_of_kitchens\" okText=\"Okay\" cancelText=\"Dismiss\">\n                  <ion-select-option value=\"1\">1</ion-select-option>\n                  <ion-select-option value=\"2\">2</ion-select-option>\n               </ion-select>\n            </ion-item>\n            <div *ngIf=\"submitted && f.no_of_kitchens.errors\" class=\"invalid-feedback\" style=\"padding: 10px; left;\">\n               <span *ngIf=\"f.no_of_kitchens.errors.required\" style=\" text-align: left;color: red;\">Kitchens detail is required.\n               </span>\n            </div>\n         </div>\n      </ion-col>\n   </ion-row>\n   <ion-row>\n      <ion-col>\n         <div class=\"ion-text-start\">\n            <ion-item>\n               <ion-label  style=\"color: #ed502d;\" position=\"floating\">Garages:</ion-label>\n               <ion-select formControlName=\"no_of_garages\" okText=\"Okay\" cancelText=\"Dismiss\">\n                  <ion-select-option value=\"0\">0</ion-select-option>\n                  <ion-select-option value=\"1\">1</ion-select-option>\n                  <ion-select-option value=\"2\">2</ion-select-option>\n                  <ion-select-option value=\"3\">3</ion-select-option>\n                  <ion-select-option value=\"4\">4</ion-select-option>\n               </ion-select>\n            </ion-item>\n            <div *ngIf=\"submitted && f.no_of_garages.errors\" class=\"invalid-feedback\" style=\"padding: 10px; left;\">\n               <span *ngIf=\"f.no_of_garages.errors.required\" style=\" text-align: left;color: red;\">Garbages is required.\n               </span>\n            </div>\n         </div>\n      </ion-col>\n   </ion-row>\n   <ion-row>\n      <ion-col>\n         <div class=\"ion-text-start\">\n            <ion-item>\n               <ion-label  style=\"color: #ed502d;\" position=\"floating\">Parking Spaces</ion-label>\n               <ion-select formControlName=\"no_of_parking_space\" okText=\"Okay\" cancelText=\"Dismiss\">\n                  <ion-select-option value=\"0\">0</ion-select-option>\n                  <ion-select-option value=\"1\">1</ion-select-option>\n                  <ion-select-option value=\"2\">2</ion-select-option>\n               </ion-select>\n            </ion-item>\n            <div *ngIf=\"submitted && f.no_of_parking_space.errors\" class=\"invalid-feedback\" style=\"padding: 10px; left;\">\n               <span *ngIf=\"f.no_of_parking_space.errors.required\" style=\" text-align: left;color: red;\">Parking Space is required.\n               </span>\n            </div>\n         </div>\n      </ion-col>\n   </ion-row>\n   <ion-row>\n      <ion-col>\n         <div class=\"ion-text-start\">\n            <ion-item>\n               <ion-label position=\"floating\" style=\"color: #ed502d;\">Floor space(per/sq ft.)</ion-label>\n               <ion-input type=\"number\" formControlName=\"floor_space\" required></ion-input>\n            </ion-item>\n            <div *ngIf=\"submitted && f.floor_space.errors\" class=\"invalid-feedback\" style=\"padding: 10px; left;\">\n               <span *ngIf=\"f.floor_space.errors.required\" style=\" text-align: left;color: red;\">Floor Space is required.\n               </span>\n            </div>\n         </div>\n      </ion-col>\n   </ion-row>\n   <ion-row>\n      <ion-col>\n         <div class=\"ion-text-start\">\n            <ion-item>\n               <ion-label position=\"floating\" style=\"color: #ed502d;\">Pet Allowed</ion-label>\n               <ion-select formControlName=\"pets_allowed\" okText=\"Okay\" cancelText=\"Dismiss\">\n                  <ion-select-option value=\"0\">No</ion-select-option>\n                  <ion-select-option value=\"1\">Yes</ion-select-option>\n               </ion-select>\n            </ion-item>\n            <div *ngIf=\"submitted && f.pets_allowed.errors\" class=\"invalid-feedback\" style=\"padding: 10px; left;\">\n               <span *ngIf=\"f.pets_allowed.errors.required\" style=\" text-align: left;color: red;\">Pet Information is required.\n               </span>\n            </div>\n         </div>\n      </ion-col>\n   </ion-row>\n   <ion-row>\n      <ion-col>\n         <div class=\"ion-text-start\">\n            <ion-item>\n               <ion-label position=\"floating\" style=\"color: #ed502d;\">Status</ion-label>\n               <ion-select formControlName=\"status\" okText=\"Okay\" cancelText=\"Dismiss\">\n                  <ion-select-option value=\"1\">Available</ion-select-option>\n                  <ion-select-option value=\"2\">No</ion-select-option>\n               </ion-select>\n            </ion-item>\n            <div *ngIf=\"submitted && f.status.errors\" class=\"invalid-feedback\" style=\"padding: 10px; left;\">\n               <span *ngIf=\"f.status.errors.required\" style=\" text-align: left;color: red;\">Status is required.\n               </span>\n            </div>\n         </div>\n      </ion-col>\n   </ion-row>\n   <ion-row>\n      <ion-col>\n         <div class=\"ion-text-start\">\n            <ion-label style=\"color: #ed502d;font-size: 13px; padding-left: 15px;\" position=\"floating\">Location:</ion-label>\n            <ion-item>\n               <input class=\"input_location\" ngx-google-places-autocomplete [options]='options' #placesRef=\"ngx-places\" (onAddressChange)=\"onChange($event)\" formControlName=\"city\"  \n               />\n            </ion-item>\n            <div *ngIf=\"submitted && f.city.errors\" class=\"invalid-feedback\" style=\"padding: 10px; left;\">\n               <span *ngIf=\"f.city.errors.required\" style=\" text-align: left;color: red;\">city is required.\n               </span>\n            </div>\n         </div>\n      </ion-col>\n   </ion-row>\n   <ion-row>\n      <ion-col>\n         <div class=\"ion-text-start\">\n            <ion-item>\n               <ion-label position=\"floating\" style=\"color: #ed502d;\">Property Description</ion-label>\n               <ion-textarea formControlName=\"property_desc\" required></ion-textarea>\n            </ion-item>\n            <div *ngIf=\"submitted && f.property_desc.errors\" class=\"invalid-feedback\" style=\"padding: 10px; left;\">\n               <span *ngIf=\"f.property_desc.errors.required\" style=\" text-align: left;color: red;\">Property Decription is required.\n               </span>\n            </div>\n         </div>\n      </ion-col>\n   </ion-row>\n   <ion-row>\n      <ion-col>\n         <div class=\"ion-text-start\">\n            <ion-item>\n               <ion-thumbnail slot=\"end\">\n                  <ion-img [src]=\"image_url\" *ngIf=\"image_url\"></ion-img>\n               </ion-thumbnail>\n            </ion-item>\n            <ion-item>\n               <ion-toolbar style=\"color: #ed502d;\">\n                  <button type=\"button\" fill=\"clear\" expand=\"full\" color=\"light\" (click)=\"selectImage()\">\n                     <ion-icon slot=\"start\" name=\"camera\"></ion-icon>\n                     Upload Photo\n                  </button>\n               </ion-toolbar>\n            </ion-item>\n         </div>\n      </ion-col>\n   </ion-row>\n   <ion-row>\n      <ion-col>\n         <div class=\"ion-text-start\">\n            <div *ngIf=\"isSuccess == true\" >\n               <span class=\"for-sub-name\">{{sucessArr.message}}</span>\n            </div>\n         </div>\n      </ion-col>\n   </ion-row>\n   <ion-row>\n      <ion-col>\n         <div class=\"ion-text-start\">\n            <button class=\"submit-btn\" expand=\"block\" type=\"submit\">Edit Property\n            </button>\n         </div>\n      </ion-col>\n   </ion-row>\n   </form>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/edit-property/edit-property.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/edit-property/edit-property.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2VkaXQtcHJvcGVydHkvZWRpdC1wcm9wZXJ0eS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/edit-property/edit-property.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/edit-property/edit-property.page.ts ***!
  \***********************************************************/
/*! exports provided: EditPropertyPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPropertyPage", function() { return EditPropertyPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EditPropertyPage = /** @class */ (function () {
    function EditPropertyPage(route, popoverController, router, formBuilder, http, alertController, loadingController, viewCtrl) {
        var _this = this;
        this.route = route;
        this.popoverController = popoverController;
        this.router = router;
        this.formBuilder = formBuilder;
        this.http = http;
        this.alertController = alertController;
        this.loadingController = loadingController;
        this.viewCtrl = viewCtrl;
        this.route.queryParams.subscribe(function (params) {
            _this.propertyId = params['propertyId'];
        });
        this.editform = this.formBuilder.group({
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
    EditPropertyPage.prototype.ngOnInit = function () {
        console.log(this.propertyId);
    };
    EditPropertyPage.prototype.submit = function (value) {
        console.log(value);
    };
    EditPropertyPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-property',
            template: __webpack_require__(/*! ./edit-property.page.html */ "./src/app/pages/edit-property/edit-property.page.html"),
            styles: [__webpack_require__(/*! ./edit-property.page.scss */ "./src/app/pages/edit-property/edit-property.page.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]])
    ], EditPropertyPage);
    return EditPropertyPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-edit-property-edit-property-module.js.map