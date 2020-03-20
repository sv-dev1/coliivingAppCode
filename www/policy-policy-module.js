(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["policy-policy-module"],{

/***/ "./src/app/policy/policy.module.ts":
/*!*****************************************!*\
  !*** ./src/app/policy/policy.module.ts ***!
  \*****************************************/
/*! exports provided: PolicyPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PolicyPageModule", function() { return PolicyPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _policy_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./policy.page */ "./src/app/policy/policy.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _policy_page__WEBPACK_IMPORTED_MODULE_5__["PolicyPage"]
    }
];
var PolicyPageModule = /** @class */ (function () {
    function PolicyPageModule() {
    }
    PolicyPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_policy_page__WEBPACK_IMPORTED_MODULE_5__["PolicyPage"]]
        })
    ], PolicyPageModule);
    return PolicyPageModule;
}());



/***/ }),

/***/ "./src/app/policy/policy.page.html":
/*!*****************************************!*\
  !*** ./src/app/policy/policy.page.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Privacy Policy\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding>\r\n\r\nContent Security policy is used to prevent cross-site scripting (XSS). It is now supported by all modern browsers. CSP provides a standard method for website owners to declare approved origins of content that browsers should be allowed to load on that website.\r\n\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/policy/policy.page.scss":
/*!*****************************************!*\
  !*** ./src/app/policy/policy.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BvbGljeS9wb2xpY3kucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/policy/policy.page.ts":
/*!***************************************!*\
  !*** ./src/app/policy/policy.page.ts ***!
  \***************************************/
/*! exports provided: PolicyPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PolicyPage", function() { return PolicyPage; });
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

var PolicyPage = /** @class */ (function () {
    function PolicyPage() {
    }
    PolicyPage.prototype.ngOnInit = function () {
    };
    PolicyPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-policy',
            template: __webpack_require__(/*! ./policy.page.html */ "./src/app/policy/policy.page.html"),
            styles: [__webpack_require__(/*! ./policy.page.scss */ "./src/app/policy/policy.page.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PolicyPage);
    return PolicyPage;
}());



/***/ })

}]);
//# sourceMappingURL=policy-policy-module.js.map