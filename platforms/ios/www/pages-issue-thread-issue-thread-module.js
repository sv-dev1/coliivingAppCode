(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-issue-thread-issue-thread-module"],{

/***/ "./src/app/pages/issue-thread/issue-thread.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/issue-thread/issue-thread.module.ts ***!
  \***********************************************************/
/*! exports provided: IssueThreadPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IssueThreadPageModule", function() { return IssueThreadPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _issue_thread_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./issue-thread.page */ "./src/app/pages/issue-thread/issue-thread.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _issue_thread_page__WEBPACK_IMPORTED_MODULE_5__["IssueThreadPage"]
    }
];
var IssueThreadPageModule = /** @class */ (function () {
    function IssueThreadPageModule() {
    }
    IssueThreadPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_issue_thread_page__WEBPACK_IMPORTED_MODULE_5__["IssueThreadPage"]]
        })
    ], IssueThreadPageModule);
    return IssueThreadPageModule;
}());



/***/ }),

/***/ "./src/app/pages/issue-thread/issue-thread.page.html":
/*!***********************************************************!*\
  !*** ./src/app/pages/issue-thread/issue-thread.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-menu-button></ion-menu-button>\r\n        </ion-buttons>\r\n\r\n         <ion-buttons slot=\"end\">\r\n             <ion-back-button defaultHref=\"dashboard\"></ion-back-button>\r\n         </ion-buttons> \r\n        <ion-title>\r\n            Issue Communication\r\n        </ion-title>\r\n    </ion-toolbar>\r\n</ion-header> \r\n\r\n\r\n<ion-content id=\"content\" #content class=\"scroll-content ionic-scroll  has-header\"> \r\n <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\r\n        <ion-refresher-content></ion-refresher-content>\r\n     </ion-refresher> \r\n<ion-grid class=\"scroll\" style=\"-webkit-transform: translate3d(0px, -50px, 0px) scale(1); margin-top: 50px;\">\r\n    <ion-row *ngFor=\"let message of gruopMessages\"> \r\n   <ion-col  class=\"message\"> \r\n        <ion-item style=\"--inner-border-width:0px!important;\">\r\n            <span *ngIf=\"userId === message.userId\" slot=\"end\" class=\"user_name\" style=\"border-radius: 10px;background: #e5efc2; padding: 10px;color: #000;word-wrap: break-word;\">\r\n            {{ message.message }} \r\n             <br>\r\n           <span>{{message.createdAt | date:'dd.MM hh:MM'}}</span>\r\n            </span>\r\n            <span *ngIf=\"userId !== message.userId\" slot=\"start\" class=\"user_name\" style=\"    border-radius: 10px;background: #f1f1f1;padding: 10px;color: #000;border: 1px solid #dcd8d8;word-wrap: break-word;\"> \r\n          <b> {{message.login?.username}} </b>:{{message.message}} <br> {{message.createdAt | date:'dd.MM hh:MM'}}\r\n            </span> \r\n        </ion-item> \r\n      </ion-col> \r\n    </ion-row> \r\n  </ion-grid> \r\n</ion-content> \r\n<ion-footer>\r\n <ion-toolbar> \r\n    <ion-row class=\"message_row\">\r\n      <ion-col col-11>\r\n        <ion-item no-lines>\r\n          <ion-input type=\"text\" placeholder=\"Message\" [(ngModel)]=\"message\"></ion-input>\r\n        </ion-item>\r\n      </ion-col>\r\n      <ion-col col-1>\r\n        <button class=\"submit-btn\" expand=\"block\" type=\"submit\" (click)=\"sendMessage()\" [disabled]=\"message === ''\" style=\"    background: #ed502d;;padding: 15px 20px;color: #fff;width: 100%;border-radius: 5px;\">\r\n        Reply\r\n      </button> \r\n      </ion-col>\r\n    </ion-row> \r\n  </ion-toolbar>\r\n</ion-footer>\r\n"

/***/ }),

/***/ "./src/app/pages/issue-thread/issue-thread.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/issue-thread/issue-thread.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2lzc3VlLXRocmVhZC9pc3N1ZS10aHJlYWQucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/issue-thread/issue-thread.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/issue-thread/issue-thread.page.ts ***!
  \*********************************************************/
/*! exports provided: IssueThreadPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IssueThreadPage", function() { return IssueThreadPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_item_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/item.service */ "./src/app/services/item.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






 //,ActionSheetController, Platform
var IssueThreadPage = /** @class */ (function () {
    function IssueThreadPage(router, route, http, itemService, alertController, loadingController, modalController) {
        var _this = this;
        this.router = router;
        this.route = route;
        this.http = http;
        this.itemService = itemService;
        this.alertController = alertController;
        this.loadingController = loadingController;
        this.modalController = modalController;
        this.gruopMessages = [];
        this.issuesArr = [];
        this.base_url = "";
        this.message = "";
        this.issueId = "";
        this.userId = "";
        this.base_url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url;
        this.userId = sessionStorage.getItem("loggedInId");
        this.route.queryParams.subscribe(function (params) {
            _this.issueId = params['issueId'];
        });
        this.getUserData();
    }
    IssueThreadPage.prototype.ionViewDidEnter = function () {
        this.ScrollToBottom();
    };
    /***************scroll down******************/
    IssueThreadPage.prototype.ScrollToBottom = function () {
        this.content.scrollToBottom(1500);
    };
    /***************scroll down******************/
    IssueThreadPage.prototype.ngOnInit = function () {
    };
    IssueThreadPage.prototype.doRefresh = function (event) {
        var _this = this;
        setTimeout(function () {
            _this.getUserData(); //do any things
            event.target.complete();
        }, 500);
    };
    IssueThreadPage.prototype.getUserData = function () {
        var _this = this;
        var token;
        if (sessionStorage.getItem("auth_token") != undefined) {
            token = sessionStorage.getItem("auth_token");
        }
        var postArr = {
            'issueId': this.issueId
        };
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]();
        headers = headers.set('Authorization', token);
        this.http.post(this.base_url + 'issues/thread', postArr, { headers: headers }).subscribe(function (response) {
            //	console.log(response.issues); 
            _this.gruopMessages = response.issues;
        });
    };
    IssueThreadPage.prototype.sendMessage = function () {
        var input_data = {
            'userId': this.userId,
            'message': this.message,
            'issueId': this.issueId,
            'status': '0',
            'createdAt': new Date()
        };
        this.gruopMessages.push(input_data);
        this.ScrollToBottom();
        var token;
        if (sessionStorage.getItem("auth_token") != undefined) {
            token = sessionStorage.getItem("auth_token");
        }
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]();
        headers = headers.set('Authorization', token);
        this.http.post(this.base_url + 'issues/thread/addreply', input_data, { headers: headers }).subscribe(function (response) {
            console.log(response.messages);
            //this.gruopMessages = response.messages; 
        });
        this.message = '';
        console.log(this.gruopMessages);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonContent"]),
        __metadata("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonContent"])
    ], IssueThreadPage.prototype, "content", void 0);
    IssueThreadPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-issue-thread',
            template: __webpack_require__(/*! ./issue-thread.page.html */ "./src/app/pages/issue-thread/issue-thread.page.html"),
            styles: [__webpack_require__(/*! ./issue-thread.page.scss */ "./src/app/pages/issue-thread/issue-thread.page.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"],
            _services_item_service__WEBPACK_IMPORTED_MODULE_2__["ItemService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]])
    ], IssueThreadPage);
    return IssueThreadPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-issue-thread-issue-thread-module.js.map