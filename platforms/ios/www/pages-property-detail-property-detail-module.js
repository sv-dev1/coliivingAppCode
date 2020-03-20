(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-property-detail-property-detail-module"],{

/***/ "./src/app/pages/property-detail/property-detail.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/property-detail/property-detail.module.ts ***!
  \*****************************************************************/
/*! exports provided: PropertyDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyDetailPageModule", function() { return PropertyDetailPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _property_detail_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./property-detail.page */ "./src/app/pages/property-detail/property-detail.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _property_detail_page__WEBPACK_IMPORTED_MODULE_5__["PropertyDetailPage"]
    }
];
var PropertyDetailPageModule = /** @class */ (function () {
    function PropertyDetailPageModule() {
    }
    PropertyDetailPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_property_detail_page__WEBPACK_IMPORTED_MODULE_5__["PropertyDetailPage"]]
        })
    ], PropertyDetailPageModule);
    return PropertyDetailPageModule;
}());



/***/ }),

/***/ "./src/app/pages/property-detail/property-detail.page.html":
/*!*****************************************************************!*\
  !*** ./src/app/pages/property-detail/property-detail.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-menu-button></ion-menu-button>\r\n        </ion-buttons> \r\n        <ion-buttons slot=\"end\">\r\n            <ion-back-button defaultHref=\"dashboard\"></ion-back-button>\r\n         </ion-buttons> \r\n        <ion-title>\r\n            Properties-Detail\r\n        </ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding>\r\n      <ion-card>\r\n      <ion-card-content class=\"circle-pic\" > \r\n         <img  [src]=\"image_url\" onError=\"src='assets/images/user_dummy.png'\" class=\"profile-img\"> \r\n      </ion-card-content>\r\n   </ion-card>\r\n   <ion-card>\r\n      <ion-card-content>\r\n         <ion-list>\r\n            <ion-item>\r\n               <ion-label style=\"font-size:14px;\">Status:</ion-label>\r\n               <ion-buttons slot=\"end\">\r\n                  <span>No</span>\r\n               </ion-buttons>\r\n            </ion-item>\r\n         </ion-list>\r\n         <ion-list>\r\n             <ion-item>\r\n               <ion-label style=\"font-size:14px;\">Property Name:</ion-label>\r\n               <ion-buttons slot=\"end\">\r\n                  <span>No</span>\r\n               </ion-buttons>\r\n            </ion-item>\r\n         </ion-list>\r\n         <ion-list>\r\n           <ion-item>\r\n               <ion-label style=\"font-size:14px;\">Description:  </ion-label>\r\n               <ion-buttons slot=\"end\">\r\n                  <span>No</span>\r\n               </ion-buttons>\r\n            </ion-item>\r\n         </ion-list>\r\n         <ion-list>\r\n             <ion-item>\r\n               <ion-label style=\"font-size:14px;\">City:</ion-label>\r\n               <ion-buttons slot=\"end\">\r\n                  <span>No</span>\r\n               </ion-buttons>\r\n            </ion-item>\r\n         </ion-list>\r\n         <ion-list>\r\n            <ion-item>\r\n               <ion-label style=\"font-size:14px;\">Type:</ion-label>\r\n               <ion-buttons slot=\"end\">\r\n                  <span>No</span>\r\n               </ion-buttons>\r\n            </ion-item>\r\n         </ion-list>\r\n         <ion-list>\r\n            <ion-item>\r\n               <ion-label style=\"font-size:14px;\">Floor Space:</ion-label>\r\n               <ion-buttons slot=\"end\">\r\n                  <span>No</span>\r\n               </ion-buttons>\r\n            </ion-item>\r\n         </ion-list>\r\n         <ion-list>\r\n             <ion-item>\r\n               <ion-label style=\"font-size:14px;\">Number of Balcony/Terrace:</ion-label>\r\n               <ion-buttons slot=\"end\">\r\n                  <span>No</span>\r\n               </ion-buttons>\r\n            </ion-item>\r\n         </ion-list>\r\n         <ion-list>\r\n              <ion-item>\r\n               <ion-label style=\"font-size:14px;\">Number of Bedroom:</ion-label>\r\n               <ion-buttons slot=\"end\">\r\n                  <span>No</span>\r\n               </ion-buttons>\r\n            </ion-item>\r\n         </ion-list>\r\n         <ion-list>\r\n            <ion-item>\r\n               <ion-label style=\"font-size:14px;\">Number of Bathroom:</ion-label>\r\n               <ion-buttons slot=\"end\">\r\n                  <span>No</span>\r\n               </ion-buttons>\r\n            </ion-item>\r\n         </ion-list>\r\n\r\n\r\n         <ion-list>\r\n           <ion-item>\r\n               <ion-label style=\"font-size:14px;\">Number of garages:</ion-label>\r\n               <ion-buttons slot=\"end\">\r\n                  <span>No</span>\r\n               </ion-buttons>\r\n            </ion-item>\r\n         </ion-list>\r\n\r\n\r\n         <ion-list>\r\n          <ion-item>\r\n               <ion-label style=\"font-size:14px;\">Number of parking space:</ion-label>\r\n               <ion-buttons slot=\"end\">\r\n                  <span>No</span>\r\n               </ion-buttons>\r\n            </ion-item>\r\n         </ion-list>\r\n         <ion-list>\r\n          <ion-item>\r\n               <ion-label style=\"font-size:14px;\">Pets allowed:</ion-label>\r\n               <ion-buttons slot=\"end\">\r\n                  <span>No</span>\r\n               </ion-buttons>\r\n            </ion-item>\r\n         </ion-list>\r\n         <ion-list>\r\n          <ion-item>\r\n               <ion-label style=\"font-size:14px;\">Posted On:</ion-label>\r\n               <ion-buttons slot=\"end\">\r\n                  <span>No</span>\r\n               </ion-buttons>\r\n            </ion-item>\r\n         </ion-list>\r\n         <ion-list>\r\n            <ion-item>\r\n               <ion-label style=\"font-size:14px;\">Posted By:</ion-label>\r\n               <ion-buttons slot=\"end\">\r\n                  <span>No</span>\r\n               </ion-buttons>\r\n            </ion-item>\r\n         </ion-list>\r\n      \r\n     </ion-card-content>\r\n  </ion-card>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/property-detail/property-detail.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/pages/property-detail/property-detail.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb3BlcnR5LWRldGFpbC9wcm9wZXJ0eS1kZXRhaWwucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/property-detail/property-detail.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/property-detail/property-detail.page.ts ***!
  \***************************************************************/
/*! exports provided: PropertyDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyDetailPage", function() { return PropertyDetailPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PropertyDetailPage = /** @class */ (function () {
    function PropertyDetailPage(route) {
        var _this = this;
        this.route = route;
        this.propertyId = "";
        this.route.queryParams.subscribe(function (params) {
            _this.propertyId = params['propertyId'];
        });
        console.log(this.propertyId);
    }
    PropertyDetailPage.prototype.ngOnInit = function () {
    };
    PropertyDetailPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-property-detail',
            template: __webpack_require__(/*! ./property-detail.page.html */ "./src/app/pages/property-detail/property-detail.page.html"),
            styles: [__webpack_require__(/*! ./property-detail.page.scss */ "./src/app/pages/property-detail/property-detail.page.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], PropertyDetailPage);
    return PropertyDetailPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-property-detail-property-detail-module.js.map