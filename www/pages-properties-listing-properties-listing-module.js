(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-properties-listing-properties-listing-module"],{

/***/ "./src/app/pages/properties-listing/properties-listing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/properties-listing/properties-listing.module.ts ***!
  \***********************************************************************/
/*! exports provided: PropertiesListingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertiesListingPageModule", function() { return PropertiesListingPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _properties_listing_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./properties-listing.page */ "./src/app/pages/properties-listing/properties-listing.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _properties_listing_page__WEBPACK_IMPORTED_MODULE_5__["PropertiesListingPage"]
    }
];
var PropertiesListingPageModule = /** @class */ (function () {
    function PropertiesListingPageModule() {
    }
    PropertiesListingPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_properties_listing_page__WEBPACK_IMPORTED_MODULE_5__["PropertiesListingPage"]]
        })
    ], PropertiesListingPageModule);
    return PropertiesListingPageModule;
}());



/***/ }),

/***/ "./src/app/pages/properties-listing/properties-listing.page.html":
/*!***********************************************************************!*\
  !*** ./src/app/pages/properties-listing/properties-listing.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-menu-button></ion-menu-button>\r\n        </ion-buttons> \r\n        <ion-buttons slot=\"end\">\r\n            <ion-back-button defaultHref=\"properties-listing\"></ion-back-button>\r\n         </ion-buttons> \r\n        <ion-title>\r\n            Properties-Listing\r\n        </ion-title>\r\n    </ion-toolbar>\r\n</ion-header> \r\n\r\n<ion-content padding>  \r\n <ion-row>\r\n      <ion-col>\r\n        <button  [routerLink]=\"['/add-property']\" class=\"billList-class\"> Add Property <ion-icon ios=\"ios-add-circle\" md=\"md-add-circle\"></ion-icon> </button>\r\n     </ion-col>\r\n  </ion-row>  \r\n\r\n  <ion-card  *ngFor=\"let property of propertiesArr\">\r\n      <ion-card-header>\r\n         <ion-card-subtitle></ion-card-subtitle>\r\n         <ion-card-title class=\"ion-text-center\" > \r\n            <h2>-Title: {{property?.name}}</h2>\r\n         </ion-card-title>\r\n      </ion-card-header>\r\n      <ion-card-content>   \r\n            -Bathroom available: {{property?.no_of_bathrooms}}<br>\r\n            -Property type: <span *ngIf=\"property?.property_type ==1\">FLAT</span><span *ngIf=\"property?.property_type ==2\"> ROOM</span><br> \r\n            -Balconies available: {{property?.no_of_balconies}}<br> \r\n            -Floor Space available: {{property?.floor_space}}<br> \r\n            -Garages available: {{property?.no_of_garages}}<br> \r\n            -Parking Space available: {{property?.no_of_parking_space}}<br>\r\n            -Pets Allowed: <span *ngIf=\"property?.pets_allowed ==1\">YES</span><span *ngIf=\"property?.pets_allowed ==0\"> NO</span><br> \r\n            -Property Description: {{property?.property_desc}}<br> \r\n            -Status: {{property?.status}}<br> \r\n          <ion-item>\r\n              <ion-row>\r\n                  <ion-col> \r\n                     <ion-button type =\"button\" color=\"mycolor\" class=\"custom-btn\" (click)=\"presentPopover(property)\">Send Invitation</ion-button> \r\n                     <!--  <ion-button type =\"button\" color=\"mycolor\" class=\"custom-btn\" [routerLink]=\"['/edit-property']\" [queryParams]=\"{propertyId: property?.propertyId}\">Edit Property</ion-button>  -->\r\n                  </ion-col>   \r\n              \r\n              </ion-row>  \r\n          </ion-item>\r\n    </ion-card-content>\r\n   </ion-card>   \r\n   <ion-card>\r\n      <ion-item *ngIf=\"propertiesArr?.length == 0\">\r\n        <ion-label style=\"font-size:18px;\">No property avaliable.</ion-label>\r\n      </ion-item>\r\n   </ion-card>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/properties-listing/properties-listing.page.scss":
/*!***********************************************************************!*\
  !*** ./src/app/pages/properties-listing/properties-listing.page.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb3BlcnRpZXMtbGlzdGluZy9wcm9wZXJ0aWVzLWxpc3RpbmcucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/properties-listing/properties-listing.page.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/properties-listing/properties-listing.page.ts ***!
  \*********************************************************************/
/*! exports provided: PropertiesListingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertiesListingPage", function() { return PropertiesListingPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_item_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/item.service */ "./src/app/services/item.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _property_request_property_request_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../property-request/property-request.component */ "./src/app/pages/property-request/property-request.component.ts");
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










var PropertiesListingPage = /** @class */ (function () {
    function PropertiesListingPage(route, popoverController, http, itemService, alertController, loadingController, router) {
        this.route = route;
        this.popoverController = popoverController;
        this.http = http;
        this.itemService = itemService;
        this.alertController = alertController;
        this.loadingController = loadingController;
        this.router = router;
        this.base_url = "";
        this.propertiesArr = [];
        this.base_url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url;
        if (sessionStorage.getItem("auth_token") != undefined) {
            this.token = sessionStorage.getItem("auth_token");
            this.roleId = sessionStorage.getItem("roleId");
            this.loggedInUserId = sessionStorage.getItem("loggedInId");
        }
    }
    PropertiesListingPage.prototype.ngOnInit = function () {
        this.getBillListing();
    };
    PropertiesListingPage.prototype.getBillListing = function () {
        var _this = this;
        console.log('my bills get list out under this function');
        var new_taken = '';
        if (sessionStorage.getItem("auth_token") != undefined) {
            new_taken = sessionStorage.getItem("auth_token");
        }
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]();
        headers = headers.set('Authorization', new_taken);
        this.pleaseWait();
        this.http.get(this.base_url + 'properties', { headers: headers }).subscribe(function (response) {
            _this.loadingController.dismiss().then(function (a) { return console.log('dismissed'); });
            _this.propertiesArr = response.flats;
            console.log(response);
        }, function (error) {
            console.log("ERROR");
            console.log(error.error);
        });
    };
    PropertiesListingPage.prototype.presentPopover = function (ev) {
        return __awaiter(this, void 0, void 0, function () {
            var popover;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.popoverController.create({
                            component: _property_request_property_request_component__WEBPACK_IMPORTED_MODULE_6__["PropertyRequestComponent"],
                            componentProps: { propertyId: ev.propertyId, landlordId: ev.created_by },
                            event: ev,
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
    PropertiesListingPage.prototype.pleaseWait = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loading, _a, role, data;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            duration: 10000,
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
    PropertiesListingPage.prototype.sendRequest = function (event) {
        var _this = this;
        console.log(event);
        var input_data = {
            "propertyId": event.propertyId,
            "team_id": "XXXXXXXXXXXXXXXXX",
        };
        console.log(input_data);
        return;
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]();
        headers = headers.set('Authorization', this.token);
        this.http.post(this.base_url + 'properties', { headers: headers }).subscribe(function (response) {
            _this.loadingController.dismiss().then(function (a) { return console.log('dismissed'); });
            console.log(response);
        }, function (error) {
            console.log("ERROR");
            console.log(error.error);
        });
    };
    PropertiesListingPage.prototype.fullDetail = function (event) {
        console.log(event);
        var input_data = {
            "propertyId": event.propertyId,
            "team_id": "XXXXXXXXXXXXXXXXX",
        };
        console.log(input_data);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonContent"]),
        __metadata("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonContent"])
    ], PropertiesListingPage.prototype, "content", void 0);
    PropertiesListingPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-properties-listing',
            template: __webpack_require__(/*! ./properties-listing.page.html */ "./src/app/pages/properties-listing/properties-listing.page.html"),
            styles: [__webpack_require__(/*! ./properties-listing.page.scss */ "./src/app/pages/properties-listing/properties-listing.page.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"],
            _services_item_service__WEBPACK_IMPORTED_MODULE_2__["ItemService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], PropertiesListingPage);
    return PropertiesListingPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-properties-listing-properties-listing-module.js.map