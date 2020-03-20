(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["update-password-update-password-module"],{

/***/ "./src/app/update-password/update-password.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/update-password/update-password.module.ts ***!
  \***********************************************************/
/*! exports provided: UpdatePasswordPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdatePasswordPageModule", function() { return UpdatePasswordPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _update_password_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./update-password.page */ "./src/app/update-password/update-password.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _update_password_page__WEBPACK_IMPORTED_MODULE_5__["UpdatePasswordPage"]
    }
];
var UpdatePasswordPageModule = /** @class */ (function () {
    function UpdatePasswordPageModule() {
    }
    UpdatePasswordPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_update_password_page__WEBPACK_IMPORTED_MODULE_5__["UpdatePasswordPage"]]
        })
    ], UpdatePasswordPageModule);
    return UpdatePasswordPageModule;
}());



/***/ }),

/***/ "./src/app/update-password/update-password.page.html":
/*!***********************************************************!*\
  !*** ./src/app/update-password/update-password.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-menu-button></ion-menu-button>\r\n        </ion-buttons>\r\n\r\n         <ion-buttons slot=\"end\">\r\n             <ion-back-button defaultHref=\"house-chores\"></ion-back-button>\r\n         </ion-buttons> \r\n        <ion-title>\r\n            Update-Password\r\n        </ion-title>\r\n    </ion-toolbar>\r\n</ion-header> \r\n\r\n\r\n<ion-content padding>\r\n\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/update-password/update-password.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/update-password/update-password.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VwZGF0ZS1wYXNzd29yZC91cGRhdGUtcGFzc3dvcmQucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/update-password/update-password.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/update-password/update-password.page.ts ***!
  \*********************************************************/
/*! exports provided: UpdatePasswordPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdatePasswordPage", function() { return UpdatePasswordPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UpdatePasswordPage = /** @class */ (function () {
    function UpdatePasswordPage() {
    }
    UpdatePasswordPage.prototype.ngOnInit = function () {
    };
    UpdatePasswordPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-update-password',
            template: __webpack_require__(/*! ./update-password.page.html */ "./src/app/update-password/update-password.page.html"),
            styles: [__webpack_require__(/*! ./update-password.page.scss */ "./src/app/update-password/update-password.page.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], UpdatePasswordPage);
    return UpdatePasswordPage;
}());



/***/ })

}]);
//# sourceMappingURL=update-password-update-password-module.js.map