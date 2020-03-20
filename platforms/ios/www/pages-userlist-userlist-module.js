(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-userlist-userlist-module"],{

/***/ "./src/app/pages/userlist/userlist.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/userlist/userlist.module.ts ***!
  \***************************************************/
/*! exports provided: UserlistPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserlistPageModule", function() { return UserlistPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _userlist_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./userlist.page */ "./src/app/pages/userlist/userlist.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _userlist_page__WEBPACK_IMPORTED_MODULE_5__["UserlistPage"]
    }
];
var UserlistPageModule = /** @class */ (function () {
    function UserlistPageModule() {
    }
    UserlistPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_userlist_page__WEBPACK_IMPORTED_MODULE_5__["UserlistPage"]]
        })
    ], UserlistPageModule);
    return UserlistPageModule;
}());



/***/ }),

/***/ "./src/app/pages/userlist/userlist.page.html":
/*!***************************************************!*\
  !*** ./src/app/pages/userlist/userlist.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-menu-button></ion-menu-button>\r\n        </ion-buttons>\r\n         <ion-buttons slot=\"end\">\r\n             <ion-back-button defaultHref=\"dashboard\"></ion-back-button>\r\n         </ion-buttons>  \r\n        <ion-title>\r\n            Groups\r\n        </ion-title>\r\n    </ion-toolbar>\r\n</ion-header> \r\n\r\n\r\n<ion-content padding>  \r\n\r\n\r\n  <ion-row>\r\n     <ion-col>\r\n        <button [routerLink]=\"['/create-team']\" class=\"billList-class\">Create a group </button>\r\n    </ion-col> \r\n\r\n    <ion-col>\r\n        <button [routerLink]=\"['/join-group']\" class=\"billList-class\">Join a group </button>\r\n    </ion-col>\r\n  </ion-row>  \r\n\r\n\r\n <ion-searchbar type=\"text\" debounce=\"500\" (ionInput)=\"filter($event)\"></ion-searchbar>\r\n\r\n\r\n\r\n<ion-card>\r\n  <ion-card-header>\r\n    <ion-card-subtitle>Groups I belong to</ion-card-subtitle>\r\n  </ion-card-header>\r\n\r\n  <ion-card-content>\r\n    <ion-list> \r\n \r\n      <ion-item *ngFor=\"let teamList of teamListArr\" (click)=\"joinChat(teamList)\" >\r\n        <ion-icon name=\"git-merge\" style=\"height:20px;\"></ion-icon>\r\n        <ion-label style=\"font-size:14px;\">{{teamList.name}}</ion-label>\r\n         <ion-buttons  slot=\"end\">\r\n               <ion-icon name=\"more\"></ion-icon>\r\n         </ion-buttons> \r\n      </ion-item>\r\n      <ion-item *ngIf=\"teamListArr?.length == 0\">\r\n        <ion-label style=\"font-size:18px;\">No Group available.</ion-label>\r\n      </ion-item>\r\n      \r\n    </ion-list>\r\n  </ion-card-content>\r\n</ion-card>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/userlist/userlist.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/userlist/userlist.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  background-color: #c0c0ff; }\n  ion-content .printable-content {\n    margin: 16px;\n    overflow-x: scroll;\n    overflow-y: scroll;\n    background-color: #ffffff; }\n  ion-content .printable-content .printable-area {\n      width: 595px;\n      height: 540px; }\n  ion-content .printable-content .printable-area .header-table {\n        background-color: #18AC52;\n        margin: 2%;\n        width: 96%;\n        color: #ffffff; }\n  ion-content .printable-content .printable-area .header-table th, ion-content .printable-content .printable-area .header-table td {\n          text-align: left;\n          padding: 5px; }\n  ion-content .printable-content .printable-area .header-table .title {\n          padding: 5px 20px;\n          font-size: 20px;\n          font-weight: bold;\n          text-transform: uppercase; }\n  ion-content .printable-content .printable-area h1, ion-content .printable-content .printable-area h3 {\n        margin-left: 10px; }\n  ion-content .printable-content .printable-area h3 {\n        margin-top: 20px; }\n  ion-content .printable-content .printable-area .subheader-table {\n        margin: 2%;\n        width: 96%; }\n  ion-content .printable-content .printable-area .subheader-table td {\n          vertical-align: top; }\n  ion-content .printable-content .printable-area .subheader-table td dt {\n            font-size: 11px;\n            color: #999;\n            margin-bottom: 5px; }\n  ion-content .printable-content .printable-area .subheader-table td dd {\n            margin: 0; }\n  ion-content .printable-content .printable-area .subheader-table td:last-child {\n          text-align: right; }\n  ion-content .printable-content .printable-area .subheader-table td:last-child dd {\n            font-size: 28px;\n            font-weight: bold; }\n  ion-content .printable-content .printable-area .detail-table {\n        margin: 2%;\n        width: 96%;\n        border-top: 2px solid #CCC;\n        border-bottom: 2px solid #CCC; }\n  ion-content .printable-content .printable-area .detail-table th, ion-content .printable-content .printable-area .detail-table td {\n          padding: 5px; }\n  ion-content .printable-content .printable-area .detail-table th {\n          border-bottom: 2px solid #CCC; }\n  ion-content .printable-content .printable-area .detail-table td:nth-child(2), ion-content .printable-content .printable-area .detail-table td:nth-child(4) {\n          text-align: right; }\n  ion-content .printable-content .printable-area .detail-table td:nth-child(3) {\n          text-align: center; }\n  ion-content .printable-content .printable-area .footer-table {\n        margin: 2%;\n        width: 96%; }\n  ion-content .printable-content .printable-area .footer-table td {\n          padding: 5px;\n          text-align: right;\n          font-weight: bold; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdXNlcmxpc3QvRTpcXGlvbmljX25ldy9zcmNcXGFwcFxccGFnZXNcXHVzZXJsaXN0XFx1c2VybGlzdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwwQkFBeUIsRUFrRjFCO0VBbkZEO0lBR0ksYUFBWTtJQUNaLG1CQUFrQjtJQUNsQixtQkFBa0I7SUFDbEIsMEJBQXlCLEVBNEUxQjtFQWxGSDtNQVFNLGFBQVk7TUFDWixjQUFhLEVBd0VkO0VBakZMO1FBV1EsMEJBQXlCO1FBQ3pCLFdBQVU7UUFDVixXQUFVO1FBQ1YsZUFBYyxFQVdmO0VBekJQO1VBZ0JVLGlCQUFnQjtVQUNoQixhQUFZLEVBQ2I7RUFsQlQ7VUFvQlUsa0JBQWlCO1VBQ2pCLGdCQUFlO1VBQ2Ysa0JBQWlCO1VBQ2pCLDBCQUF5QixFQUMxQjtFQXhCVDtRQTJCUSxrQkFBaUIsRUFDbEI7RUE1QlA7UUE4QlEsaUJBQWdCLEVBQ2pCO0VBL0JQO1FBaUNRLFdBQVU7UUFDVixXQUFVLEVBbUJYO0VBckRQO1VBb0NVLG9CQUFtQixFQVNwQjtFQTdDVDtZQXNDWSxnQkFBZTtZQUNmLFlBQVc7WUFDWCxtQkFBa0IsRUFDbkI7RUF6Q1g7WUEyQ1ksVUFBUyxFQUNWO0VBNUNYO1VBK0NVLGtCQUFpQixFQUtsQjtFQXBEVDtZQWlEWSxnQkFBZTtZQUNmLGtCQUFpQixFQUNsQjtFQW5EWDtRQXVEUSxXQUFVO1FBQ1YsV0FBVTtRQUNWLDJCQUEwQjtRQUMxQiw4QkFBNkIsRUFhOUI7RUF2RVA7VUE0RFUsYUFBWSxFQUNiO0VBN0RUO1VBK0RVLDhCQUE2QixFQUM5QjtFQWhFVDtVQWtFVSxrQkFBaUIsRUFDbEI7RUFuRVQ7VUFxRVUsbUJBQWtCLEVBQ25CO0VBdEVUO1FBeUVRLFdBQVU7UUFDVixXQUFVLEVBTVg7RUFoRlA7VUE0RVUsYUFBWTtVQUNaLGtCQUFpQjtVQUNqQixrQkFBaUIsRUFDbEIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy91c2VybGlzdC91c2VybGlzdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjMGMwZmY7XG4gIC5wcmludGFibGUtY29udGVudCB7XG4gICAgbWFyZ2luOiAxNnB4O1xuICAgIG92ZXJmbG93LXg6IHNjcm9sbDtcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgICAucHJpbnRhYmxlLWFyZWEge1xuICAgICAgd2lkdGg6IDU5NXB4O1xuICAgICAgaGVpZ2h0OiA1NDBweDtcbiAgICAgIC5oZWFkZXItdGFibGUge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMThBQzUyO1xuICAgICAgICBtYXJnaW46IDIlO1xuICAgICAgICB3aWR0aDogOTYlO1xuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgdGgsIHRkIHtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgfVxuICAgICAgICAudGl0bGUge1xuICAgICAgICAgIHBhZGRpbmc6IDVweCAyMHB4O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBoMSwgaDMge1xuICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgIH1cbiAgICAgIGgzIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgIH1cbiAgICAgIC5zdWJoZWFkZXItdGFibGUge1xuICAgICAgICBtYXJnaW46IDIlO1xuICAgICAgICB3aWR0aDogOTYlO1xuICAgICAgICB0ZCB7XG4gICAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICAgICAgICBkdCB7XG4gICAgICAgICAgICBmb250LXNpemU6IDExcHg7XG4gICAgICAgICAgICBjb2xvcjogIzk5OTtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgZGQge1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0ZDpsYXN0LWNoaWxkIHtcbiAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgICBkZCB7XG4gICAgICAgICAgICBmb250LXNpemU6IDI4cHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC5kZXRhaWwtdGFibGUge1xuICAgICAgICBtYXJnaW46IDIlO1xuICAgICAgICB3aWR0aDogOTYlO1xuICAgICAgICBib3JkZXItdG9wOiAycHggc29saWQgI0NDQztcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNDQ0M7XG4gICAgICAgIHRoLCB0ZCB7XG4gICAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICB9XG4gICAgICAgIHRoIHtcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI0NDQztcbiAgICAgICAgfVxuICAgICAgICB0ZDpudGgtY2hpbGQoMiksIHRkOm50aC1jaGlsZCg0KSB7XG4gICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgIH1cbiAgICAgICAgdGQ6bnRoLWNoaWxkKDMpIHtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC5mb290ZXItdGFibGUge1xuICAgICAgICBtYXJnaW46IDIlO1xuICAgICAgICB3aWR0aDogOTYlO1xuICAgICAgICB0ZCB7XG4gICAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/userlist/userlist.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/userlist/userlist.page.ts ***!
  \*************************************************/
/*! exports provided: UserlistPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserlistPage", function() { return UserlistPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_item_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/item.service */ "./src/app/services/item.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ng_socket_io__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-socket-io */ "./node_modules/ng-socket-io/dist/index.js");
/* harmony import */ var ng_socket_io__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ng_socket_io__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "./node_modules/@ionic-native/social-sharing/ngx/index.js");
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









var UserlistPage = /** @class */ (function () {
    function UserlistPage(router, http, formBuilder, itemService, alertController, loadingController, modalController, navCtrl, socket, socialSharing) {
        this.router = router;
        this.http = http;
        this.formBuilder = formBuilder;
        this.itemService = itemService;
        this.alertController = alertController;
        this.loadingController = loadingController;
        this.modalController = modalController;
        this.navCtrl = navCtrl;
        this.socket = socket;
        this.socialSharing = socialSharing;
        this.nickname = '';
        //  private socket;
        this.base_url = "";
        this.userId = "";
        this.ref_code = "";
        this.loggedInUsername = "";
        this.refferal = "";
        this.socket_url = "";
        this.teamListArr = [];
        this.origionalListArr = [];
        this.userListArr = [];
        this.dataArr = [];
        this.userId = sessionStorage.getItem("loggedInId");
        this.loggedInUsername = sessionStorage.getItem("loggedInUsername");
        this.ref_code = sessionStorage.getItem("ref_code");
        this.refferal = 'http://coliving.kindlebit.com/app.download?rc=' + this.ref_code;
        this.base_url = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].base_url;
        this.socket_url = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].socket_url;
        this.getTeamsList();
    }
    UserlistPage.prototype.shareInfo = function () {
        this.socialSharing.share("Your referal link is:", "Invite", "", this.refferal);
    };
    UserlistPage.prototype.ngOnInit = function () {
    };
    UserlistPage.prototype.ionViewWillEnter = function () {
        this.getTeamsList();
    };
    UserlistPage.prototype.joinChat = function (event) {
        console.log(event);
        this.nickname = event.name;
        this.router.navigate(['/group-detail-page'], { queryParams: { 'teamId': event.teamId, 'nickname': this.nickname, 'owner': event.userId } });
    };
    UserlistPage.prototype.presentLoading = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loading, _a, role, data;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            duration: 2000,
                            cssClass: 'custom-class custom-loading scale-down-center',
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
    UserlistPage.prototype.getTeamsList = function () {
        //    console.log('All teams gets list out under this function');
        var _this = this;
        var token;
        if (sessionStorage.getItem("auth_token") != undefined) {
            token = sessionStorage.getItem("auth_token");
        }
        this.presentLoading();
        //const httpOptions = { headers: new HttpHeaders({'authorization': token })};
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpHeaders"]();
        headers = headers.set('Authorization', token);
        this.http.get(this.base_url + 'getTeam', { headers: headers }).subscribe(function (response) {
            _this.teamListArr = response.teams;
            _this.origionalListArr = response.teams;
            //       console.log(this.teamListArr);
        }, function (error) {
            //       console.log("ERROR");
            console.log(error.error);
            if (error.error == 'Unauthorized') {
                localStorage.clear();
                _this.router.navigate(['/login']);
            }
        });
    };
    UserlistPage.prototype.addToMember = function (pvarId) {
        //console.log(pvarId);    
        //this.router.navigate('add-member-to-team?teamId='+pvarId);
        //this.router.navigate(['add-member-to-team'],pvarId);
    };
    UserlistPage.prototype.filter = function (ev) {
        var val = ev.target.value;
        if (val) {
            this.teamFilteredList = this.teamListArr.filter(function (team) {
                return team.name.toLowerCase().indexOf(val.toLowerCase()) > -1;
            });
            this.teamList = this.teamFilteredList;
            this.teamListArr = this.teamFilteredList;
        }
        else {
            console.log("working in else");
            this.teamListArr = this.origionalListArr;
        }
    };
    UserlistPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-userlist',
            template: __webpack_require__(/*! ./userlist.page.html */ "./src/app/pages/userlist/userlist.page.html"),
            styles: [__webpack_require__(/*! ./userlist.page.scss */ "./src/app/pages/userlist/userlist.page.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _services_item_service__WEBPACK_IMPORTED_MODULE_3__["ItemService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
            ng_socket_io__WEBPACK_IMPORTED_MODULE_7__["Socket"],
            _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_8__["SocialSharing"]])
    ], UserlistPage);
    return UserlistPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-userlist-userlist-module.js.map