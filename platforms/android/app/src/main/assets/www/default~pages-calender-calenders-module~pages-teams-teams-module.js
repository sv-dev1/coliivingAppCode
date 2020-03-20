(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-calender-calenders-module~pages-teams-teams-module"],{

/***/ "./src/app/pages/calender/calenders.html":
/*!***********************************************!*\
  !*** ./src/app/pages/calender/calenders.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n      <ion-buttons slot=\"start\">\r\n          <ion-menu-button></ion-menu-button>\r\n      </ion-buttons>\r\n\r\n       <ion-buttons slot=\"end\">\r\n           <ion-back-button defaultHref=\"dashboard\"></ion-back-button>\r\n       </ion-buttons> \r\n      <ion-title>\r\n          Calendar\r\n      </ion-title>\r\n  </ion-toolbar>\r\n<style>\r\n [col-1] {\r\n      -webkit-box-flex: 0;\r\n      -webkit-flex: 0 0 8.33333%;\r\n      -ms-flex: 0 0 8.33333%;\r\n      flex: 0 0 14.285714285714286%;\r\n      width: 14.285714285714286%;\r\n      max-width: 14.285714285714286%;\r\n    }\r\n    .col {\r\n      text-align: center;\r\n      padding: 5px;\r\n    }\r\n    .last-month, .next-month {\r\n      color: #999999;\r\n      font-size: 90%;\r\n    }\r\n    .currentDate, .otherDate {\r\n      padding: 5px;\r\n    }\r\n    .currentDate {\r\n      font-weight: bold;\r\n      background-color: red;\r\n      color: white;\r\n      border-radius: 30px;\r\n    }\r\n    .onClickOfDate {\r\n      font-weight: bold;\r\n      background-color: #C0C0C0;\r\n      color: red;\r\n      border-radius: 30px;\r\n    }\r\n    .calendar-header {\r\n      background-color: #1a732d;\r\n      color: #FFFFFF;\r\n    }\r\n    .event-bullet {\r\n      margin: 2px auto;\r\n      height: 5px;\r\n      width: 5px;\r\n      background-color: green;\r\n      border-radius: 30px;\r\n    }\r\n    .selected-date {\r\n      width: 20px;\r\n      height: 2px;\r\n      background-color: blue;\r\n    }\r\n    .unselected-date {\r\n      border: none;\r\n    }\r\n \r\n      .grid {\r\n        padding: 0;\r\n      }\r\n      .col:last-child {\r\n        border-right: none;\r\n      }\r\n      .calendar-weekday, .calendar-date {\r\n        text-align: center;\r\n        margin: 0;\r\n      }\r\n      .calendar-weekday {\r\n        font-weight: bold;\r\n        border-bottom: solid 1px #1a732d;\r\n        background-color: #26ab56;\r\n      }\r\n      .calendar-date {\r\n        border-top: solid 1px #1a732d;\r\n        border-bottom: solid 1px #1a732d;\r\n    }\r\n    .main-cover {\r\n    display: flex;\r\n    justify-content: flex-start;\r\n    flex-wrap: wrap;\r\n    align-items: center;\r\n    width: 100%;\r\n}\r\n.date-box {\r\n    background: #ed502e;\r\n    padding: 10px 10px; \r\n    color: #fff;\r\n    border-radius: 8px;\r\n    width: 75%;\r\n}\r\n.left-box {\r\n    width: 20%;\r\n    color: #ed502e;\r\n    font-weight: 700;\r\n}\r\n.date-box p {\r\n    margin: 0;\r\n    padding: 0 0 2px 0;\r\n}\r\n.date-box.completed {\r\n    background: #8c8c8c;\r\n}\r\n.left-box {\r\n    position: relative;\r\n    background: #ed502e;\r\n    color: #fff !important;\r\n    text-align: center;\r\n    border-radius: 60px;\r\n    padding: 10px 0 5px 0;\r\n    height: 60px;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: center;\r\n    max-width: 60px !important;\r\n    margin-right: 10px;\r\n    align-items: center;\r\n}\r\n.left-box p {\r\n    margin: 0;\r\n    width: 100%;\r\n    display: block;\r\n}\r\n.main-cover {\r\n    margin-bottom: 10px;\r\n}\r\n.main-cover .left-box:after {\r\n    content: \"\";\r\n    background: red;\r\n    width: 1px;\r\n    height: 40px;\r\n    position: absolute;\r\n    bottom: -40px;\r\n    left: 30px;\r\n}\r\n.main-cover .left-box:before {\r\n    content: \"\";\r\n    background: red;\r\n    width: 1px;\r\n    height: 30px;\r\n    position: absolute;\r\n    top: -30px;\r\n    left: 30px;\r\n}\r\n</style>  \r\n</ion-header> \r\n\r\n<ion-content padding>  \r\n\r\n  <ion-row>\r\n    <ion-col [routerLink]=\"['/house-chores']\"> \r\n            <ion-button type =\"button\" color=\"mycolor\" class=\"custom-btn\">All</ion-button> \r\n    </ion-col>  \r\n     <ion-col [routerLink]=\"['/calender']\"> \r\n            <ion-button type =\"button\"   color=\"mycolor\" class=\"active custom-btn\">Calendar</ion-button> \r\n    </ion-col>   \r\n    <ion-col [routerLink]=\"['/teams']\"> \r\n            <ion-button type =\"button\" color=\"mycolor\" class=\"custom-btn\">Tasks of my groups</ion-button> \r\n    </ion-col>   \r\n    <ion-col [routerLink]=\"['/add-tasks']\">  \r\n            <ion-button type =\"button\" color=\"mycolor\" class=\"custom-btn\">Add Task</ion-button> \r\n    </ion-col> \r\n</ion-row>  \r\n\r\n  <div class=\"calendar-header\">\r\n    <ion-row class=\"calendar-month\">\r\n      <ion-col col-2 (click)=\"goToLastMonth()\"><ion-icon name=\"arrow-back\"></ion-icon></ion-col>\r\n      <ion-col col-8>{{currentMonth}} {{currentYear}}</ion-col>\r\n      <ion-col col-2 (click)=\"goToNextMonth()\"><ion-icon name=\"arrow-forward\"></ion-icon></ion-col>\r\n    </ion-row>\r\n  </div>\r\n  <div class=\"calendar-body\">\r\n    <ion-grid>\r\n      <ion-row class=\"calendar-weekday\">\r\n        <ion-col>Su</ion-col>\r\n        <ion-col>Mo</ion-col>\r\n        <ion-col>Tu</ion-col>\r\n        <ion-col>We</ion-col>\r\n        <ion-col>Th</ion-col>\r\n        <ion-col>Fr</ion-col>\r\n        <ion-col>Sa</ion-col>\r\n      </ion-row>\r\n      <ion-row class=\"calendar-date\">\r\n        <ion-col col-1 *ngFor=\"let lastDay of daysInLastMonth\" class=\"last-month\" (click)=\"goToLastMonth()\">{{lastDay}}</ion-col>\r\n        <ion-col col-1 *ngFor=\"let day of daysInThisMonth\" (click)=\"selectDate(day)\">\r\n          <span class=\"currentDate\" *ngIf=\"currentDate === day; else otherDate\" onchange=\"true\">{{day}}</span>\r\n          <ng-template #otherDate class=\"otherDate\">\r\n            {{day}}<br>\r\n            <div class=\"event-bullet\" *ngIf=\"checkEvent(day)\"></div>\r\n          </ng-template>\r\n        </ion-col>\r\n        <ion-col col-1 *ngFor=\"let nextDay of daysInNextMonth\" class=\"next-month\" (click)=\"goToNextMonth()\">{{nextDay}}</ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </div>\r\n  <!-- <div class=\"selected-event\" *ngIf=\"isSelected\"> -->\r\n    <div class=\"selected-event my-class\" *ngIf=\"isSelected\">\r\n      <ion-list>\r\n        <ion-item *ngFor=\"let se of selectedEvent\">\r\n          <div class=\"main-cover\">\r\n            <div class=\"left-box completed\" *ngIf=\"se.status =='COMPLETED'\">\r\n              <span>{{se.due_date | date: 'MMM'}}</span>\r\n              <p>{{se.due_date | date: 'dd'}}</p>\r\n            </div>\r\n            <div class=\"left-box pending\" *ngIf=\"se.status =='PENDING'\">\r\n              <span>{{se.due_date | date: 'MMM'}}</span>\r\n              <p>{{se.due_date | date: 'dd'}}</p>\r\n            </div>\r\n             <div class=\"date-box completed\" *ngIf=\"se.status =='COMPLETED'\">\r\n                <p> Task: {{se.task_name}} </p>\r\n                <p> Status: {{se.status}} </p> \r\n            </div>\r\n             <div class=\"date-box pending\" *ngIf=\"se.status =='PENDING' \">\r\n              <p> Task: {{se.task_name}}</p>\r\n<!--               <p>Status: {{se.status}}</p> -->\r\n          </div>\r\n          </div>\r\n       \r\n         \r\n        </ion-item>\r\n      </ion-list>\r\n    </div>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/calender/calenders.page.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/calender/calenders.page.ts ***!
  \**************************************************/
/*! exports provided: CalendarsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarsPage", function() { return CalendarsPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_calendar_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/calendar/ngx */ "./node_modules/@ionic-native/calendar/ngx/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CalendarsPage = /** @class */ (function () {
    function CalendarsPage(alertCtrl, navCtrl, http, calander) {
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.http = http;
        this.loggedInId = '';
        this.calander = calander;
        this.base_url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url;
    }
    CalendarsPage.prototype.ngOnInit = function () {
        var _this = this;
        this.loggedInId = sessionStorage.getItem("loggedInId");
        var token;
        if (sessionStorage.getItem("auth_token") != undefined) {
            token = sessionStorage.getItem("auth_token");
        }
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]();
        headers = headers.set('Authorization', token);
        this.http.get(this.base_url + 'tasks', {
            headers: headers
        }).subscribe(function (response) {
            _this.tasksListArr = response.tasks;
        }, function (error) {
            console.log("ERROR");
        });
    };
    CalendarsPage.prototype.ionViewWillEnter = function () {
        this.date = new Date();
        this.monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        this.getDaysOfMonth();
        this.loadEventThisMonth();
    };
    CalendarsPage.prototype.getDaysOfMonth = function () {
        this.daysInThisMonth = new Array();
        this.daysInLastMonth = new Array();
        this.daysInNextMonth = new Array();
        this.currentMonth = this.monthNames[this.date.getMonth()];
        this.currentYear = this.date.getFullYear();
        if (this.date.getMonth() === new Date().getMonth()) {
            this.currentDate = new Date().getDate();
        }
        else {
            this.currentDate = 999;
        }
        var firstDayThisMonth = new Date(this.date.getFullYear(), this.date.getMonth(), 1).getDay();
        var prevNumOfDays = new Date(this.date.getFullYear(), this.date.getMonth(), 0).getDate();
        for (var i = prevNumOfDays - (firstDayThisMonth - 1); i <= prevNumOfDays; i++) {
            this.daysInLastMonth.push(i);
        }
        var thisNumOfDays = new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0).getDate();
        for (var j = 0; j < thisNumOfDays; j++) {
            this.daysInThisMonth.push(j + 1);
        }
        var lastDayThisMonth = new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0).getDay();
        // var nextNumOfDays = new Date(this.date.getFullYear(), this.date.getMonth()+2, 0).getDate();
        for (var k = 0; k < (6 - lastDayThisMonth); k++) {
            this.daysInNextMonth.push(k + 1);
        }
        var totalDays = this.daysInLastMonth.length + this.daysInThisMonth.length + this.daysInNextMonth.length;
        if (totalDays < 36) {
            for (var l = (7 - lastDayThisMonth); l < ((7 - lastDayThisMonth) + 7); l++) {
                this.daysInNextMonth.push(l);
            }
        }
    };
    CalendarsPage.prototype.goToLastMonth = function () {
        this.date = new Date(this.date.getFullYear(), this.date.getMonth(), 0);
        this.getDaysOfMonth();
    };
    CalendarsPage.prototype.goToNextMonth = function () {
        this.date = new Date(this.date.getFullYear(), this.date.getMonth() + 2, 0);
        this.getDaysOfMonth();
    };
    CalendarsPage.prototype.loadEventThisMonth = function () {
        var _this = this;
        this.tasksListArr = new Array();
        var startDate = new Date(this.date.getFullYear(), this.date.getMonth(), 1);
        var endDate = new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0);
        this.calander.listEventsInRange(startDate, endDate).then(function (msg) {
            msg.forEach(function (item) {
                _this.tasksListArr.push(item);
            });
        }, function (err) {
            console.log(err);
        });
    };
    CalendarsPage.prototype.checkEvent = function (day) {
        var hasEvent = false;
        if (this.date.getMonth() + 1 <= 9 && day <= 9) {
            var thisDate1 = this.date.getFullYear() + "-0" + (this.date.getMonth() + 1) + "-" + "0" + day + " 00:00:00";
        }
        else if (this.date.getMonth() + 1 <= 9) {
            var thisDate1 = this.date.getFullYear() + "-0" + (this.date.getMonth() + 1) + "-" + day + " 00:00:00";
        }
        else if (day <= 9) {
            var thisDate1 = this.date.getFullYear() + "-" + (this.date.getMonth() + 1) + "-" + "0" + day + " 00:00:00";
        }
        else {
            var thisDate1 = this.date.getFullYear() + "-" + (this.date.getMonth() + 1) + "-" + day + " 00:00:00";
        }
        //
        for (var i = 0; i < this.tasksListArr.length; i++) {
            this.assingTo = this.tasksListArr[i]['task.assignTo'];
            if (this.assingTo) {
                var checkExist = this.assingTo.includes(this.loggedInId);
                if (checkExist == true) {
                    var dateCheck = this.tasksListArr[i]['task.due_date'].split('T');
                    var firstDate = dateCheck[0];
                    if ((firstDate + " 00:00:00" == thisDate1)) {
                        hasEvent = true;
                    }
                }
            }
        }
        return hasEvent;
    };
    CalendarsPage.prototype.selectDate = function (day) {
        var _this = this;
        this.isSelected = false;
        this.selectedEvent = new Array();
        if (this.date.getMonth() + 1 <= 9 && day <= 9) {
            var thisDate1 = this.date.getFullYear() + "-0" + (this.date.getMonth() + 1) + "-" + "0" + day + " 00:00:00";
        }
        else if (this.date.getMonth() + 1 <= 9) {
            var thisDate1 = this.date.getFullYear() + "-0" + (this.date.getMonth() + 1) + "-" + day + " 00:00:00";
        }
        else if (day <= 9) {
            var thisDate1 = this.date.getFullYear() + "-" + (this.date.getMonth() + 1) + "-" + "0" + day + " 00:00:00";
        }
        else {
            var thisDate1 = this.date.getFullYear() + "-" + (this.date.getMonth() + 1) + "-" + day + " 00:00:00";
        }
        this.tasksListArr.forEach(function (event) {
            var asssignToString = event['task.assignTo'];
            //if (asssignToString != null && asssignToString.indexOf(this.loggedInId) > 0) {
            if (event['task.due_date'] != null && event['task.due_date']) {
                var dateCheck = event['task.due_date'].split('T');
                var firstDate = dateCheck[0];
                if ((firstDate + " 00:00:00" == thisDate1)) {
                    _this.isSelected = true;
                    var dddd = dateCheck[0] + ' ' + dateCheck[1];
                    _this.selectedEvent.push({
                        task_name: event['task.task_name'],
                        due_date: dddd,
                        notes: event['task.notes'],
                        status: event['task.status']
                    });
                }
            }
            //}
        });
        console.log('this.taskLength', this.selectedEvent);
        this.taskLength = this.selectedEvent.length;
        //console.log('this.taskLength', this.taskLength);
    };
    CalendarsPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'page-calender',
            template: __webpack_require__(/*! ./calenders.html */ "./src/app/pages/calender/calenders.html")
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _ionic_native_calendar_ngx__WEBPACK_IMPORTED_MODULE_2__["Calendar"]])
    ], CalendarsPage);
    return CalendarsPage;
}());



/***/ })

}]);
//# sourceMappingURL=default~pages-calender-calenders-module~pages-teams-teams-module.js.map