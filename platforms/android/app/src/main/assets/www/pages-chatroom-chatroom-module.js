(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-chatroom-chatroom-module"],{

/***/ "./src/app/pages/chatroom/chatroom.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/chatroom/chatroom.module.ts ***!
  \***************************************************/
/*! exports provided: ChatroomPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatroomPageModule", function() { return ChatroomPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _chatroom_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./chatroom.page */ "./src/app/pages/chatroom/chatroom.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _chatroom_page__WEBPACK_IMPORTED_MODULE_5__["ChatroomPage"]
    }
];
var ChatroomPageModule = /** @class */ (function () {
    function ChatroomPageModule() {
    }
    ChatroomPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_chatroom_page__WEBPACK_IMPORTED_MODULE_5__["ChatroomPage"]],
        })
    ], ChatroomPageModule);
    return ChatroomPageModule;
}());



/***/ }),

/***/ "./src/app/pages/chatroom/chatroom.page.html":
/*!***************************************************!*\
  !*** ./src/app/pages/chatroom/chatroom.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n   <ion-toolbar>\r\n      <ion-buttons slot=\"start\">\r\n         <ion-back-button (click)=\"ionViewWillLeave()\" defaultHref=\"userlist\"></ion-back-button>\r\n      </ion-buttons>\r\n      <ion-buttons slot=\"end\">\r\n         <ion-icon name=\"more\"></ion-icon>\r\n      </ion-buttons>\r\n      <ion-title>\r\n         Chatroom: {{nickname}}\r\n      </ion-title>\r\n   </ion-toolbar>\r\n</ion-header>\r\n<ion-content id=\"content\" #content class=\"scroll-content ionic-scroll  has-header\">\r\n   <ion-grid class=\"scroll\" style=\"-webkit-transform: translate3d(0px, -50px, 0px) scale(1); margin-top: 50px;\">\r\n      <ion-row *ngFor=\"let message of gruopMessages; let i = index\">\r\n         <div *ngIf=\"isDifferentDay(i)\">\r\n            <ion-badge class=\"chat-date\">{{getMessageDate(i)}}</ion-badge>\r\n         </div>\r\n         <ion-col  class=\"message\">\r\n            <ion-item style=\"--inner-border-width:0px!important;\">\r\n               <span *ngIf=\"userId === message.from_id\" slot=\"end\" class=\"user_name\" style=\"border-radius: 10px;background: #e5efc2; padding: 10px;color: #000;word-wrap: break-word;margin-top: 20px;\">\r\n                  <span class=\"chatname\"> You</span><br>\r\n                  {{ message.message }} <br><span class=\"timeFormat\"> {{timeFormat(message.created_at)}} </span>\r\n                  <ion-icon name=\"done-all\" class=\"chatDone-icon\"></ion-icon>\r\n               </span>\r\n               <span *ngIf=\"userId !== message.from_id\" slot=\"start\" class=\"user_name\" style=\"    border-radius: 10px;background: #f1f1f1;padding: 10px;color: #000;border: 1px solid #dcd8d8;word-wrap: break-word;margin-top: 20px;\">\r\n               <span class=\"chatname\"> {{message.username}}</span><br>\r\n               {{message.message}}  <br>  <span class=\"timeFormat\"> {{timeFormat(message.created_at)}} </span>\r\n               </span> \r\n            </ion-item>\r\n         </ion-col>\r\n      </ion-row>\r\n      <ion-row *ngFor=\"let message of messages\">\r\n         <ion-col class=\"message\" [ngClass]=\"{'my_message': message.from !== nickname, 'other_message': message.from !== nickname}\">\r\n            <ion-item style=\"--inner-border-width:0px!important;\" >\r\n               <span slot=\"end\" *ngIf=\"userId === message.userId\" class=\"user_name\"  style=\"border-radius: 10px;background: #e5efc2; padding: 10px;color: #000;word-wrap: break-word;\">\r\n               {{ message.message }}<br><span class=\"timeFormat\"> {{timeFormat(message.created_at)}} </span>  \r\n               <span >\r\n                  <ion-icon name=\"checkmark\" class=\"chatDone-icon\" *ngIf=\"disableClick\"></ion-icon>\r\n               </span></span>\r\n               <span slot=\"start\" *ngIf=\"teamId === message.from && userId !== message.userId\" class=\"user_name\"  style=\"    border-radius: 10px;background: #f1f1f1;padding: 10px;color: #000;border: 1px solid #dcd8d8; word-wrap: break-word;\">{{message.username}}: \r\n               {{message.message}}  <br> <span class=\"timeFormat\"> {{timeFormat(message.created_at)}} </span> </span> \r\n            </ion-item>\r\n         </ion-col>\r\n      </ion-row>\r\n   </ion-grid>\r\n</ion-content>\r\n<ion-footer>\r\n   <ion-toolbar>\r\n      <ion-row class=\"message_row\">\r\n         <ion-col col-11>\r\n            <ion-item no-lines>\r\n               <ion-input type=\"text\" placeholder=\"Message\" [(ngModel)]=\"message\"></ion-input>\r\n            </ion-item>\r\n         </ion-col>\r\n         <ion-col col-1>\r\n            <button class=\"submit-btn\" expand=\"block\" type=\"submit\" (click)=\"sendMessage()\" [disabled]=\"message === ''\" style=\"    background: #ed502d;;padding: 15px 20px;color: #fff;width: 100%;border-radius: 5px;\">\r\n            Send\r\n            </button> \r\n         </ion-col>\r\n      </ion-row>\r\n   </ion-toolbar>\r\n</ion-footer>"

/***/ }),

/***/ "./src/app/pages/chatroom/chatroom.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/chatroom/chatroom.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "app-chatroom .user_name {\n  color: #afafaf; }\n\napp-chatroom .message {\n  padding: 10px !important;\n  transition: all 250ms ease-in-out !important;\n  border-radius: 10px !important;\n  margin-bottom: 4px !important; }\n\napp-chatroom .my_message {\n  color: #000 !important; }\n\napp-chatroom .other_message {\n  background: #dcdcdc !important;\n  color: #000 !important; }\n\napp-chatroom .time {\n  color: #afafaf;\n  float: right;\n  font-size: small; }\n\napp-chatroom .message_row {\n  background-color: #fff; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2hhdHJvb20vRDpcXHJhaW9cXGNvbGl2aW5nQXBwL3NyY1xcYXBwXFxwYWdlc1xcY2hhdHJvb21cXGNoYXRyb29tLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVRLGVBQWMsRUFDakI7O0FBSEw7RUFLUSx5QkFBd0I7RUFDeEIsNkNBQTRDO0VBQzVDLCtCQUE4QjtFQUM5Qiw4QkFBNkIsRUFDaEM7O0FBVEw7RUFXUSx1QkFBc0IsRUFDekI7O0FBWkw7RUFjUSwrQkFBOEI7RUFDOUIsdUJBQXNCLEVBQ3pCOztBQWhCTDtFQWtCUSxlQUFjO0VBQ2QsYUFBWTtFQUNaLGlCQUFnQixFQUNuQjs7QUFyQkw7RUF1QlEsdUJBQXNCLEVBQ3pCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY2hhdHJvb20vY2hhdHJvb20ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYXBwLWNoYXRyb29tIHtcbiAgICAudXNlcl9uYW1lIHtcbiAgICAgICAgY29sb3I6ICNhZmFmYWY7XG4gICAgfVxuICAgIC5tZXNzYWdlIHtcbiAgICAgICAgcGFkZGluZzogMTBweCAhaW1wb3J0YW50O1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMjUwbXMgZWFzZS1pbi1vdXQgIWltcG9ydGFudDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweCAhaW1wb3J0YW50O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA0cHggIWltcG9ydGFudDtcbiAgICB9XG4gICAgLm15X21lc3NhZ2Uge1xuICAgICAgICBjb2xvcjogIzAwMCAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAub3RoZXJfbWVzc2FnZSB7XG4gICAgICAgIGJhY2tncm91bmQ6ICNkY2RjZGMgIWltcG9ydGFudDtcbiAgICAgICAgY29sb3I6ICMwMDAgIWltcG9ydGFudDtcbiAgICB9XG4gICAgLnRpbWUge1xuICAgICAgICBjb2xvcjogI2FmYWZhZjtcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICBmb250LXNpemU6IHNtYWxsO1xuICAgIH1cbiAgICAubWVzc2FnZV9yb3cge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/chatroom/chatroom.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/chatroom/chatroom.page.ts ***!
  \*************************************************/
/*! exports provided: ChatroomPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatroomPage", function() { return ChatroomPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_item_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/item.service */ "./src/app/services/item.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ng_socket_io__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-socket-io */ "./node_modules/ng-socket-io/dist/index.js");
/* harmony import */ var ng_socket_io__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ng_socket_io__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _popover_popover_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../popover/popover.component */ "./src/app/pages/popover/popover.component.ts");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/ngx/index.js");
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













var ChatroomPage = /** @class */ (function () {
    function ChatroomPage(route, popoverController, http, itemService, alertController, loadingController, socket, datePipe, Network) {
        var _this = this;
        this.route = route;
        this.popoverController = popoverController;
        this.http = http;
        this.itemService = itemService;
        this.alertController = alertController;
        this.loadingController = loadingController;
        this.socket = socket;
        this.datePipe = datePipe;
        this.Network = Network;
        this.messages = [];
        this.gruopMessages = [];
        this.socket_url = "";
        this.teamId = '';
        this.userId = '';
        this.ref_code = '';
        this.loggedInUsername = '';
        this.nickname = '';
        this.owner = '';
        this.message = '';
        this.message_wanrings = '';
        this.msgSent = false;
        this.disableClick = true;
        Network.onDisconnect().subscribe(function () {
            _this.disableClick = false;
        });
        Network.onConnect().subscribe(function () {
            _this.disableClick = true;
        });
        this.userId = sessionStorage.getItem("loggedInId");
        this.loggedInUsername = sessionStorage.getItem("loggedInUsername");
        this.ref_code = sessionStorage.getItem("ref_code");
        this.socket_url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].socket_url;
        this.socket.connect();
        this.route.queryParams.subscribe(function (params) {
            _this.teamId = params['teamId'];
            _this.owner = params['owner'];
            _this.nickname = params['nickname'];
        });
        this.joinChat();
        this.loadMessages();
        this.loadMyMessages();
        //this.getMessages();  
    }
    ChatroomPage.prototype.presentPopover = function (ev) {
        return __awaiter(this, void 0, void 0, function () {
            var popover;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.popoverController.create({
                            component: _popover_popover_component__WEBPACK_IMPORTED_MODULE_8__["PopoverComponent"],
                            componentProps: { teamId: this.teamId, baseurl: _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url, ref_code: this.ref_code, group_title: this.nickname, owner: this.owner },
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
    ChatroomPage.prototype.ionViewWillLeave = function () {
        console.log('disconnect');
        this.socket.removeAllListeners(this.teamId);
        this.socket.disconnect();
    };
    ChatroomPage.prototype.ionViewDidLeave = function () {
        this.socket.removeAllListeners(this.teamId);
        console.log('disconnect');
        this.socket.disconnect();
    };
    ChatroomPage.prototype.ngOnInit = function () {
        this.getMessages();
        this.content.scrollToBottom(0);
    };
    ChatroomPage.prototype.ionViewDidEnter = function () {
        //  this.ScrollToBottom();
        this.content.scrollToBottom();
    };
    ChatroomPage.prototype.joinChat = function () {
        this.socket.emit('set-nickname', { 'nickname': this.nickname, 'from_id': this.userId, 'username': this.loggedInUsername, 'to_id': this.teamId });
    };
    /***************scroll down******************/
    ChatroomPage.prototype.ScrollToBottom = function () {
        this.content.scrollToBottom(1500);
    };
    /***************scroll down******************/
    ChatroomPage.prototype.getMessages = function () {
        var _this = this;
        console.log('----getMessages---');
        this.socket.on('getMessage', function (data) {
            console.log(data);
            _this.content.scrollToBottom(0);
            var counter = _this.gruopMessages.length - 1;
            if (_this.gruopMessages[counter].created_at != data.created_at && _this.gruopMessages[counter].username != data.username) {
                _this.gruopMessages.push(data);
            }
            console.log('lllll', _this.gruopMessages);
        });
    };
    ChatroomPage.prototype.loadMyMessages = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.socket.on('messages', function (data) {
                    _this.gruopMessages = data.messages;
                });
                console.log(this.gruopMessages);
                return [2 /*return*/];
            });
        });
    };
    ChatroomPage.prototype.loadMessages = function () {
        this.socket.emit('load-messages', { userId: this.userId, teamId: this.teamId });
        console.log(this.gruopMessages);
    };
    ChatroomPage.prototype.isEmptyOrSpaces = function (str) {
        return str === null || str.match(/^ *$/) !== null;
    };
    ChatroomPage.prototype.customsmessage = function (msg) {
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
                        return [2 /*return*/];
                }
            });
        });
    };
    ChatroomPage.prototype.sendMessage = function () {
        if (this.disableClick == false) {
            this.customsmessage("No internet connection");
            //   alert('Please check connectivity');  
        }
        if (!this.isEmptyOrSpaces(this.message) && this.disableClick == true) {
            var created_at = new Date();
            this.socket.emit('newMessage', { userId: this.userId, teamId: this.teamId, username: this.loggedInUsername, msg: this.message, created_at: created_at });
            this.gruopMessages.push({ created_at: created_at, from_id: this.userId, userId: this.teamId, from: this.userId, username: this.loggedInUsername, message: this.message });
            this.message = '';
            this.content.scrollToBottom(0);
            this.ScrollToBottom();
            this.message_wanrings = '';
        }
        else {
            this.message_wanrings = 'Please enter message';
        }
    };
    ChatroomPage.prototype.timeFormat = function (date) {
        if (date != 'undefined') {
            var d = new Date(date);
            var a = this.datePipe.transform(d, 'h:mm a');
            return a;
        }
    };
    ChatroomPage.prototype.dateFormat = function (date) {
        if (date != 'undefined') {
            var d = new Date(date);
            var a = this.datePipe.transform(d, 'dd-MM-yyyy');
            return a;
        }
    };
    ChatroomPage.prototype.datemessage = function (sno, date) {
        console.log(sno--, date);
        if (date != 'undefined') {
            var d = new Date(date);
            var a = this.datePipe.transform(d, 'dd-MM-yyyy');
            return a;
        }
    };
    ChatroomPage.prototype.isDifferentDay = function (messageIndex) {
        if (messageIndex === 0)
            return true;
        var d1 = new Date(this.gruopMessages[messageIndex - 1].created_at);
        var d2 = new Date(this.gruopMessages[messageIndex].created_at);
        return d1.getFullYear() !== d2.getFullYear()
            || d1.getMonth() !== d2.getMonth()
            || d1.getDate() !== d2.getDate();
    };
    ChatroomPage.prototype.getMessageDate = function (messageIndex) {
        var wholeDate = new Date(this.gruopMessages[messageIndex].created_at).toDateString();
        this.messageDateString = wholeDate.slice(0, wholeDate.length - 5);
        if (this.messageDateString != 'Invalid') {
            //console.log( this.messageDateString);
            return this.messageDateString;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonContent"]),
        __metadata("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonContent"])
    ], ChatroomPage.prototype, "content", void 0);
    ChatroomPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-chatroom',
            template: __webpack_require__(/*! ./chatroom.page.html */ "./src/app/pages/chatroom/chatroom.page.html"),
            styles: [__webpack_require__(/*! ./chatroom.page.scss */ "./src/app/pages/chatroom/chatroom.page.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"],
            _services_item_service__WEBPACK_IMPORTED_MODULE_2__["ItemService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
            ng_socket_io__WEBPACK_IMPORTED_MODULE_6__["Socket"],
            _angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"],
            _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_9__["Network"]])
    ], ChatroomPage);
    return ChatroomPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-chatroom-chatroom-module.js.map