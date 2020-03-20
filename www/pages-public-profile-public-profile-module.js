(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-public-profile-public-profile-module"],{

/***/ "./src/app/pages/public-profile/public-profile.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/public-profile/public-profile.module.ts ***!
  \***************************************************************/
/*! exports provided: PublicProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicProfilePageModule", function() { return PublicProfilePageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _public_profile_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./public-profile.page */ "./src/app/pages/public-profile/public-profile.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _public_profile_page__WEBPACK_IMPORTED_MODULE_5__["PublicProfilePage"]
    }
];
var PublicProfilePageModule = /** @class */ (function () {
    function PublicProfilePageModule() {
    }
    PublicProfilePageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_public_profile_page__WEBPACK_IMPORTED_MODULE_5__["PublicProfilePage"]]
        })
    ], PublicProfilePageModule);
    return PublicProfilePageModule;
}());



/***/ }),

/***/ "./src/app/pages/public-profile/public-profile.page.html":
/*!***************************************************************!*\
  !*** ./src/app/pages/public-profile/public-profile.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n   <ion-toolbar>\r\n      <ion-buttons slot=\"start\">\r\n         <ion-menu-button></ion-menu-button>\r\n      </ion-buttons>\r\n      <ion-buttons slot=\"end\">\r\n         <ion-back-button defaultHref=\"dashboard\"></ion-back-button>\r\n      </ion-buttons>\r\n      <ion-title >\r\n         Profile\r\n      </ion-title>\r\n   </ion-toolbar>\r\n</ion-header>\r\n<ion-content padding>\r\n   <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\r\n      <ion-refresher-content></ion-refresher-content>\r\n   </ion-refresher>\r\n  \r\n      <ion-item class=\"profile-header\">\r\n        <ion-label>\r\n             {{userDataArr.login?.username}}\r\n        </ion-label>\r\n    </ion-item>\r\n   <ion-card>\r\n      <ion-card-content class=\"circle-pic\" > \r\n         <img  [src]=\"image_url\" onError=\"src='assets/images/user_dummy.png'\" class=\"profile-img\"> \r\n      </ion-card-content>\r\n   </ion-card>\r\n   <ion-card>\r\n      <ion-card-content>\r\n         <ion-button fill=\"clear\" expand=\"full\" color=\"light\" (click)=\"remove()\" style=\"background: #ed502d;margin: 10px auto;display: block; width: auto;text-align: center;\">\r\n            Remove Profile Picture     \r\n         </ion-button>\r\n         <ion-button fill=\"clear\" expand=\"full\" color=\"light\" (click)=\"selectImage()\" style=\"background: #ed502d;margin: 10px auto;display: block; width: auto;text-align: center;\">\r\n            <ion-icon slot=\"start\" name=\"camera\"></ion-icon>\r\n            Upload Picture\r\n         </ion-button>\r\n      </ion-card-content>\r\n   </ion-card>\r\n   <ion-card [routerLink]=\"IsUserTanent ? ['/my-account'] : ['/landlord-profile-page']\">\r\n      <ion-card-header>\r\n         <ion-card-title>Personal Details: </ion-card-title>\r\n      </ion-card-header>\r\n      <ion-card-content>\r\n         <ion-card-title>Name: <span> {{userDataArr.firstName}} {{userDataArr.lastName}} </span></ion-card-title>\r\n        <ion-card-title>Date of birth:<span *ngIf=\"userDataArr.dob !='Invalid date'\"> {{userDataArr.dob | date :'MMMM d, y'}}</span></ion-card-title>\r\n         <ion-card-title>Email: <span>{{userDataArr.email}}</span></ion-card-title>\r\n         <ion-card-title *ngIf=\"IsUserTanent\">Gender: <span>{{userDataArr.gender}}</span></ion-card-title>\r\n         <ion-card-title *ngIf=\"IsUserTanent\">Nationality: <span>{{nationality1}}<span *ngIf=\"nationality2\"> {{nationality2}} </span></span></ion-card-title>\r\n         <ion-card-title>Phone number: <span>{{userDataArr.phoneNo}}</span></ion-card-title>\r\n         <ion-card-title *ngIf=\"IsUserTanent\">Social media accounts: <span>{{userDataArr.social_account}}</span></ion-card-title>\r\n      </ion-card-content>\r\n   </ion-card>\r\n   <ion-card [routerLink]=\"IsUserTanent ? ['/my-account'] : ['/landlord-profile-page']\">\r\n      <ion-card-header>\r\n         <ion-card-title>Contact Address:</ion-card-title>\r\n      </ion-card-header>\r\n      <ion-card-content>\r\n         <ion-card-title>Address: <span>{{userDataArr.address}}</span></ion-card-title>\r\n         <ion-card-title>Postal Code: <span>{{userDataArr.postalCode}}</span></ion-card-title>\r\n         <ion-card-title>Country: <span>{{countryName}}</span></ion-card-title>\r\n         <ion-card-title *ngIf=\"IsUserTanent\">Previous city of residence:<span> {{userDataArr.previous_city}}</span></ion-card-title>\r\n      </ion-card-content>\r\n   </ion-card>\r\n   <ion-card *ngIf=\"IsUserTanent\" [routerLink]=\"['/my-account']\">\r\n      <ion-card-header>\r\n         <ion-card-title>Occupation:</ion-card-title>\r\n      </ion-card-header>\r\n      <ion-card-content>\r\n         <ion-card-title>Occupation : \r\n            <span *ngIf=\"userDataArr.occuptation_tt == 1\"> Full-time Employee</span>\r\n            <span *ngIf=\"userDataArr.occuptation_tt == 2\">Part-time Employee </span>\r\n            <span *ngIf=\"userDataArr.occuptation_tt == 3\"> Part Time Student</span>\r\n            <span *ngIf=\"userDataArr.occuptation_tt == 4\">Full Time  Student</span>\r\n            <span *ngIf=\"userDataArr.occuptation_tt == 5\">Part Time Internship</span>\r\n            <span *ngIf=\"userDataArr.occuptation_tt == 6\">Full Time Internship</span>\r\n         </ion-card-title>\r\n         <ion-card-title>Price Range: {{userDataArr.price_range}} </ion-card-title>\r\n      </ion-card-content>\r\n   </ion-card>\r\n   <ion-card *ngIf=\"IsUserTanent\" [routerLink]=\"['/my-account']\">\r\n      <ion-card-header>\r\n         <ion-card-title>Other Details:</ion-card-title>\r\n      </ion-card-header>\r\n      <ion-card-content>\r\n         <ion-card-title>Habits:<span> {{userDataArr.habits}}</span></ion-card-title>\r\n         <ion-card-title>Biography:<span> {{userDataArr.biography}}</span> </ion-card-title>\r\n         <ion-card-title>Interest: <span>{{userDataArr.interestes}}</span> </ion-card-title>\r\n         <ion-card-title>Languages: <span>{{language1}}<span *ngIf=\"language2\">{{language2}} </span> </span></ion-card-title>\r\n         <ion-card-title>Outing day: <span>{{userDataArr.outing_day}}</span></ion-card-title>\r\n         <ion-card-title>Rental Description: <span>{{userDataArr.rental_desc}} </span></ion-card-title>\r\n      </ion-card-content>\r\n   </ion-card>\r\n   <ion-card [routerLink]=\"['/my-account']\" *ngIf=\"IsUserTanent\">\r\n      <ion-card-header>\r\n         <ion-card-title>Questionaire:</ion-card-title>\r\n      </ion-card-header>\r\n      <ion-card-content *ngIf =\"userQuestionnaire\">\r\n         <ion-card-title>\r\n            1)Which of these answers describes you the best?\r\n         </ion-card-title>\r\n         <ion-card-title>\r\n            a)&nbsp;Partying  \r\n            <span *ngIf=\"userDataArr.userQuestionnaire.partying == 0\">Yes</span>\r\n            <span *ngIf=\"userDataArr.userQuestionnaire.partying == 1\">No</span>\r\n            <span *ngIf=\"userDataArr.userQuestionnaire.partying == 2\">Sometimes</span>\r\n            <span *ngIf=\"userDataArr.userQuestionnaire.partying == 3\">Strictly against </span>\r\n         </ion-card-title>\r\n         <ion-card-title>\r\n            b)&nbsp;Alcohol  \r\n            <span *ngIf=\"userDataArr.userQuestionnaire.alcohol == 0\">Yes</span>\r\n            <span *ngIf=\"userDataArr.userQuestionnaire.alcohol == 1\">No</span>\r\n            <span *ngIf=\"userDataArr.userQuestionnaire.alcohol == 2\">Sometimes</span>\r\n            <span *ngIf=\"userDataArr.userQuestionnaire.alcohol == 3\">Strictly against </span>\r\n         </ion-card-title>\r\n         <ion-card-title>\r\n            c)&nbsp;Smoking\r\n            <span *ngIf=\"userDataArr.userQuestionnaire.smoking == 0\">Yes</span>\r\n            <span *ngIf=\"userDataArr.userQuestionnaire.smoking == 1\">No</span>\r\n            <span *ngIf=\"userDataArr.userQuestionnaire.smoking == 2\">Sometimes</span>\r\n            <span *ngIf=\"userDataArr.userQuestionnaire.smoking == 3\">Strictly against </span>\r\n         </ion-card-title>\r\n         <ion-card-title>\r\n            2)&nbsp;How important is it to you to live in a clean and tidy apartment generally?  \r\n            <span class=\"sutm-answer\">{{userDataArr.userQuestionnaire.apartment_clean_importance}}</span>\r\n         </ion-card-title>\r\n         <ion-card-title>\r\n            3)&nbsp;How much do you like a music in your apartment?  \r\n            <span class=\"sutm-answer\">{{userDataArr.userQuestionnaire.music}}</span>\r\n         </ion-card-title>\r\n         <ion-card-title>\r\n            4)&nbsp;Party in your apartment? \r\n            <span class=\"sutm-answer\">{{userDataArr.userQuestionnaire.apartment_party}}</span>\r\n         </ion-card-title>\r\n         <button slot=\"end\" shape=\"round\" fill=\"outline\" (click)=\"resubmitQuestionare()\" class=\"questionare\">Re-submit Questionare</button>\r\n      </ion-card-content>\r\n      <ion-card-content *ngIf =\"emptyUserQuestionnaire\">\r\n         You have not submitted the questionare yet. Click on button \r\n         <button slot=\"end\" shape=\"round\" fill=\"outline\" (click)=\"resubmitQuestionare()\" class=\"questionare\">Submit Questionare</button>\r\n      </ion-card-content>\r\n   </ion-card>\r\n\r\n\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/public-profile/public-profile.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/public-profile/public-profile.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3B1YmxpYy1wcm9maWxlL3B1YmxpYy1wcm9maWxlLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/public-profile/public-profile.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/public-profile/public-profile.page.ts ***!
  \*************************************************************/
/*! exports provided: PublicProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicProfilePage", function() { return PublicProfilePage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_item_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/item.service */ "./src/app/services/item.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/clipboard/ngx */ "./node_modules/@ionic-native/clipboard/ngx/index.js");
/* harmony import */ var _questionnaire_questionnaire_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../questionnaire/questionnaire.component */ "./src/app/pages/questionnaire/questionnaire.component.ts");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
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










var PublicProfilePage = /** @class */ (function () {
    function PublicProfilePage(clipboard, router, route, popoverController, http, itemService, alertController, actionSheetController, camera, loadingController) {
        this.clipboard = clipboard;
        this.router = router;
        this.route = route;
        this.popoverController = popoverController;
        this.http = http;
        this.itemService = itemService;
        this.alertController = alertController;
        this.actionSheetController = actionSheetController;
        this.camera = camera;
        this.loadingController = loadingController;
        this.base_url = "";
        this.image_base_url = "";
        this.image_url = "";
        this.res = [];
        this.errorsArr = [];
        this.sucessArr = [];
        this.userDataArr = [];
        this.countriesArr = [];
        this.languageArr = [];
        this.nationalityId = [];
        this.nationalityName = [];
        this.languagesId = [];
        this.languagesName = [];
        this.emptyUserQuestionnaire = false;
        this.IsUserTanent = false;
        this.base_url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url;
        this.image_base_url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].image_base_url;
    }
    PublicProfilePage.prototype.ngOnInit = function () {
        if (sessionStorage.getItem("roleId") === '4') {
            this.IsUserTanent = true;
        }
        this.getUserData();
    };
    PublicProfilePage.prototype.remove = function () {
        var _this = this;
        console.log("removePic");
        var token;
        if (sessionStorage.getItem("auth_token") != undefined) {
            token = sessionStorage.getItem("auth_token");
        }
        var httpOptions = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({ 'Content-Type': 'application/json', 'authorization': token }) };
        return this.http.delete(this.base_url + 'user/removepic', httpOptions).subscribe(function (response) {
            console.log(response);
            _this.loadingController.dismiss().then(function (a) { return console.log('dismissed'); });
            _this.presentAlert(response.message);
        });
    };
    PublicProfilePage.prototype.presentAlert = function (msg) {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Success Message!',
                            message: msg,
                            buttons: [{
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
    PublicProfilePage.prototype.selectImage = function () {
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
    PublicProfilePage.prototype.captureImage = function (useAlbum) {
        return __awaiter(this, void 0, void 0, function () {
            var options, imageData, contentType, realData, formData, token, httpOptions;
            var _this = this;
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
                        formData = new FormData();
                        formData.append('photo', this.ImageObj);
                        if (sessionStorage.getItem("auth_token") != undefined) {
                            token = sessionStorage.getItem("auth_token");
                        }
                        this.presentLoading();
                        console.log(formData);
                        httpOptions = {
                            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({
                                'authorization': token
                            })
                        };
                        this.http.post(this.base_url + 'user/uploadpic', formData, httpOptions).subscribe(function (response) {
                            console.log(response);
                            _this.loadingController.dismiss().then(function (a) { return console.log('dismissed'); });
                            _this.presentAlert("Profile Pic uploaded Successfully");
                        }, function (error) {
                            console.log("ERROR");
                            console.log(error.error);
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    PublicProfilePage.prototype.b64toBlob = function (b64Data, contentType) {
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
    PublicProfilePage.prototype.setimage = function () {
        this.image_url = 'assets/images/user_dummy.png';
        console.log(this.image_url);
    };
    PublicProfilePage.prototype.doRefresh = function (event) {
        var _this = this;
        setTimeout(function () {
            _this.getUserData(); //do any things
            event.target.complete();
        }, 500);
    };
    PublicProfilePage.prototype.presentPopover = function () {
        return __awaiter(this, void 0, void 0, function () {
            var popover;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.popoverController.create({
                            component: _questionnaire_questionnaire_component__WEBPACK_IMPORTED_MODULE_7__["QuestionnaireComponent"],
                            componentProps: { teamId: 'this.teamId', baseurl: _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url, ref_code: 'this.ref_code' },
                            //    event: ev,
                            translucent: true
                        })];
                    case 1:
                        popover = _a.sent();
                        return [4 /*yield*/, popover.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    PublicProfilePage.prototype.copyText = function (event) {
        this.clipboard.copy('Hello world');
        //    console.log(this.clipboard.paste());
    };
    PublicProfilePage.prototype.resubmitQuestionare = function () {
        this.presentPopover();
    };
    PublicProfilePage.prototype.getUserData = function () {
        var _this = this;
        this.image_url = '';
        var token;
        var temp = [];
        var temp1 = [];
        if (sessionStorage.getItem("auth_token") != undefined) {
            token = sessionStorage.getItem("auth_token");
        }
        this.presentLoading();
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]();
        headers = headers.set('Authorization', token);
        this.http.get(this.base_url + 'user/profile', {
            headers: headers
        }).subscribe(function (response) {
            _this.loadingController.dismiss().then(function (a) { return console.log('dismissed'); });
            _this.userDataArr = response.users[0];
            console.log('userdata', _this.userDataArr);
            _this.countryId = _this.userDataArr.country;
            temp1 = response.users[0].nationality.split(",");
            _this.nationalityId.push(temp1);
            temp = response.users[0].languages.split(",");
            _this.languagesId.push(temp);
            _this.getCountries();
            _this.getLanguages();
            // console.log(this.languagesId);
            _this.userQuestionnaire = _this.userDataArr.userQuestionnaire;
            _this.image_url = _this.image_base_url + '' + _this.userDataArr.userId;
            console.log('image_base_url', _this.image_base_url);
            console.log('this.image_url', _this.image_url);
            if ((_this.userQuestionnaire == undefined || _this.userQuestionnaire == null || _this.userQuestionnaire == '') && _this.IsUserTanent == true) {
                _this.emptyUserQuestionnaire = true;
                _this.presentPopover();
            }
        }, function (error) {
            if (error.error == "Unauthorized" && error.status == 401) {
                console.log("true");
                _this.expiredMessage('Session Expired.You must login again!');
            }
        });
    };
    PublicProfilePage.prototype.expiredMessage = function (msg) {
        return __awaiter(this, void 0, void 0, function () {
            var loading, _a, role, data;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            message: msg,
                            duration: 3000,
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
    PublicProfilePage.prototype.presentLoading = function () {
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
    PublicProfilePage.prototype.getCountries = function () {
        var _this = this;
        var token;
        if (sessionStorage.getItem("auth_token") != undefined) {
            token = sessionStorage.getItem("auth_token");
        }
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]();
        headers = headers.set('Authorization', token);
        this.http.get(this.base_url + 'countries', {
            headers: headers
        }).subscribe(function (response) {
            _this.countriesArr = response.countries;
            for (var _i = 0, _a = _this.countriesArr; _i < _a.length; _i++) {
                var order = _a[_i];
                if (order.id == _this.countryId) {
                    _this.countryName = order.name;
                }
            }
            _this.nationalityId.forEach(function (element) {
                _this.nationalityName = [];
                element.forEach(function (item) {
                    for (var _i = 0, _a = _this.countriesArr; _i < _a.length; _i++) {
                        var order = _a[_i];
                        if (order.id == item) {
                            _this.nationalityName.push(order.name);
                        }
                    }
                });
            });
            _this.nationality1 = _this.nationalityName[0];
            _this.nationality2 = _this.nationalityName[1];
        });
    };
    PublicProfilePage.prototype.getLanguages = function () {
        var _this = this;
        var token;
        if (sessionStorage.getItem("auth_token") != undefined) {
            token = sessionStorage.getItem("auth_token");
        }
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]();
        headers = headers.set('Authorization', token);
        this.http.get(this.base_url + 'languages', {
            headers: headers
        }).subscribe(function (response) {
            _this.languageArr = response.languages;
            _this.languagesId.forEach(function (element) {
                _this.languagesName = [];
                element.forEach(function (item) {
                    for (var _i = 0, _a = _this.languageArr; _i < _a.length; _i++) {
                        var order = _a[_i];
                        if (order.id == item) {
                            _this.languagesName.push(order.name);
                        }
                    }
                });
            });
            // console.log(this.languagesName[0]);
            _this.language1 = _this.languagesName[0];
            _this.language2 = _this.languagesName[1];
        });
    };
    PublicProfilePage.prototype.deleteImage = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonContent"]),
        __metadata("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonContent"])
    ], PublicProfilePage.prototype, "content", void 0);
    PublicProfilePage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-public-profile',
            template: __webpack_require__(/*! ./public-profile.page.html */ "./src/app/pages/public-profile/public-profile.page.html"),
            styles: [__webpack_require__(/*! ./public-profile.page.scss */ "./src/app/pages/public-profile/public-profile.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_6__["Clipboard"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"],
            _services_item_service__WEBPACK_IMPORTED_MODULE_2__["ItemService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"],
            _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_8__["Camera"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]])
    ], PublicProfilePage);
    return PublicProfilePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-public-profile-public-profile-module.js.map