(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _my_tasks_my_tasks_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./my-tasks/my-tasks.component */ "./src/app/my-tasks/my-tasks.component.ts");
/* harmony import */ var _in_progress_in_progress_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./in-progress/in-progress.component */ "./src/app/in-progress/in-progress.component.ts");
/* harmony import */ var _completed_completed_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./completed/completed.component */ "./src/app/completed/completed.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: '', redirectTo: '/my-task', pathMatch: 'full' },
    { path: 'my-task', component: _my_tasks_my_tasks_component__WEBPACK_IMPORTED_MODULE_2__["MyTasksComponent"] },
    { path: 'in-progress', component: _in_progress_in_progress_component__WEBPACK_IMPORTED_MODULE_3__["InProgressComponent"] },
    { path: 'completed', component: _completed_completed_component__WEBPACK_IMPORTED_MODULE_4__["CompletedComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<div class=\"container\">\r\n  <router-outlet></router-outlet>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _my_tasks_my_tasks_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./my-tasks/my-tasks.component */ "./src/app/my-tasks/my-tasks.component.ts");
/* harmony import */ var _in_progress_in_progress_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./in-progress/in-progress.component */ "./src/app/in-progress/in-progress.component.ts");
/* harmony import */ var _completed_completed_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./completed/completed.component */ "./src/app/completed/completed.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! .//app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _task_detail_task_detail_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./task-detail/task-detail.component */ "./src/app/task-detail/task-detail.component.ts");
/* harmony import */ var _status_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./status.pipe */ "./src/app/status.pipe.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _my_tasks_my_tasks_component__WEBPACK_IMPORTED_MODULE_4__["MyTasksComponent"],
                _in_progress_in_progress_component__WEBPACK_IMPORTED_MODULE_5__["InProgressComponent"],
                _completed_completed_component__WEBPACK_IMPORTED_MODULE_6__["CompletedComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
                _task_detail_task_detail_component__WEBPACK_IMPORTED_MODULE_9__["TaskDetailComponent"],
                _status_pipe__WEBPACK_IMPORTED_MODULE_10__["StatusPipe"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/completed/completed.component.html":
/*!****************************************************!*\
  !*** ./src/app/completed/completed.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-task-detail></app-task-detail>\r\n"

/***/ }),

/***/ "./src/app/completed/completed.component.scss":
/*!****************************************************!*\
  !*** ./src/app/completed/completed.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/completed/completed.component.ts":
/*!**************************************************!*\
  !*** ./src/app/completed/completed.component.ts ***!
  \**************************************************/
/*! exports provided: CompletedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompletedComponent", function() { return CompletedComponent; });
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

var CompletedComponent = /** @class */ (function () {
    function CompletedComponent() {
    }
    CompletedComponent.prototype.ngOnInit = function () {
    };
    CompletedComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-completed',
            template: __webpack_require__(/*! ./completed.component.html */ "./src/app/completed/completed.component.html"),
            styles: [__webpack_require__(/*! ./completed.component.scss */ "./src/app/completed/completed.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CompletedComponent);
    return CompletedComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\r\n  <div>\r\n    <a routerLink=\"/my-task\" [ngClass]=\"{'active': isActive==='mytask','inactive': isActive!=='mytask'}\" (click)=\"click('mytask')\">我的任務</a>\r\n    <a routerLink=\"/in-progress\" [ngClass]=\"{'active': isActive==='inprogress','inactive': isActive!=='inprogress'}\" (click)=\"click('inprogress')\">進行中</a>\r\n    <a routerLink=\"/completed\" [ngClass]=\"{'active': isActive==='completed','inactive': isActive!=='completed'}\" (click)=\"click('completed')\">完成</a>\r\n  </div>\r\n</header>\r\n"

/***/ }),

/***/ "./src/app/header/header.component.scss":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
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

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
        this.isActive = 'mytask';
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.click = function (link) {
        this.isActive = link;
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/in-progress/in-progress.component.html":
/*!********************************************************!*\
  !*** ./src/app/in-progress/in-progress.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"add-task\">\r\n    <div class=\"add-task-simple\">\r\n      <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\r\n      新增任務\r\n    </div>\r\n\r\n  </div> -->\r\n<app-task-detail></app-task-detail>\r\n"

/***/ }),

/***/ "./src/app/in-progress/in-progress.component.scss":
/*!********************************************************!*\
  !*** ./src/app/in-progress/in-progress.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/in-progress/in-progress.component.ts":
/*!******************************************************!*\
  !*** ./src/app/in-progress/in-progress.component.ts ***!
  \******************************************************/
/*! exports provided: InProgressComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InProgressComponent", function() { return InProgressComponent; });
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

var InProgressComponent = /** @class */ (function () {
    function InProgressComponent() {
    }
    InProgressComponent.prototype.ngOnInit = function () {
    };
    InProgressComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-in-progress',
            template: __webpack_require__(/*! ./in-progress.component.html */ "./src/app/in-progress/in-progress.component.html"),
            styles: [__webpack_require__(/*! ./in-progress.component.scss */ "./src/app/in-progress/in-progress.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], InProgressComponent);
    return InProgressComponent;
}());



/***/ }),

/***/ "./src/app/my-tasks/my-tasks.component.html":
/*!**************************************************!*\
  !*** ./src/app/my-tasks/my-tasks.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-task-detail></app-task-detail>\r\n"

/***/ }),

/***/ "./src/app/my-tasks/my-tasks.component.scss":
/*!**************************************************!*\
  !*** ./src/app/my-tasks/my-tasks.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/my-tasks/my-tasks.component.ts":
/*!************************************************!*\
  !*** ./src/app/my-tasks/my-tasks.component.ts ***!
  \************************************************/
/*! exports provided: MyTasksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyTasksComponent", function() { return MyTasksComponent; });
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

var MyTasksComponent = /** @class */ (function () {
    function MyTasksComponent() {
    }
    MyTasksComponent.prototype.ngOnInit = function () { };
    MyTasksComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-my-tasks',
            template: __webpack_require__(/*! ./my-tasks.component.html */ "./src/app/my-tasks/my-tasks.component.html"),
            styles: [__webpack_require__(/*! ./my-tasks.component.scss */ "./src/app/my-tasks/my-tasks.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MyTasksComponent);
    return MyTasksComponent;
}());



/***/ }),

/***/ "./src/app/status.pipe.ts":
/*!********************************!*\
  !*** ./src/app/status.pipe.ts ***!
  \********************************/
/*! exports provided: StatusPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusPipe", function() { return StatusPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var StatusPipe = /** @class */ (function () {
    function StatusPipe() {
    }
    StatusPipe.prototype.transform = function (value, args) {
        var a = console.log('pipe');
        return true;
    };
    StatusPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'status'
        })
    ], StatusPipe);
    return StatusPipe;
}());



/***/ }),

/***/ "./src/app/task-detail/task-detail.component.html":
/*!********************************************************!*\
  !*** ./src/app/task-detail/task-detail.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"add-task\">\r\n  <div class=\"add-task-simple\" (click)=\"showNewDetail=!showNewDetail\">\r\n    <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\r\n    新增任務\r\n  </div>\r\n  <div class=\"task-detail\" *ngIf=\"showNewDetail\">\r\n      <div class=\"cate\">\r\n        <div class=\"cate-title\">\r\n          <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\r\n          期限\r\n        </div>\r\n        <div class=\"cate-content\">\r\n          <input type=\"date\" name=\"\" id=\"\">\r\n          <input type=\"time\" name=\"\" id=\"\">\r\n        </div>\r\n      </div>\r\n      <div class=\"cate\">\r\n        <div class=\"cate-title\">\r\n          <i class=\"fa fa-file-o\" aria-hidden=\"true\"></i>\r\n          檔案\r\n        </div>\r\n        <div class=\"cate-content\">\r\n          <span class=\"add-file\">\r\n            <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\r\n          </span>\r\n        </div>\r\n      </div>\r\n      <div class=\"cate\">\r\n        <div class=\"cate-title\">\r\n          <i class=\"fa fa-commenting-o\" aria-hidden=\"true\"></i>\r\n          記事\r\n        </div>\r\n        <div class=\"cate-content\">\r\n          <textarea placeholder=\"寫點什麼...\" name=\"\" id=\"\" cols=\"30\" rows=\"10\"></textarea>\r\n        </div>\r\n      </div>\r\n      <div class=\"bottom\">\r\n        <div (click)=\"showNewDetail=false\">\r\n          <i class=\"fa fa-times\" aria-hidden=\"true\"></i>取消</div>\r\n        <div (click)=\"showNewDetail=false\">\r\n          <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>新增任務</div>\r\n      </div>\r\n    </div>\r\n</div>\r\n<div class=\"task\" *ngFor=\"let task of tasks\">\r\n  <div class=\"task-simple\" [ngClass]=\"{'is-favorite': task.isFavorite,'show-detail':task.showDetail}\">\r\n    <div class=\"task-main\">\r\n      <label class=\"container\" [ngClass]=\"{'done':task.done}\">{{task.name}}\r\n        <input type=\"checkbox\">\r\n        <span class=\"checkmark\"></span>\r\n      </label>\r\n      <div class=\"action\">\r\n        <span *ngIf=\"!task.isFavorite\">\r\n          <i class=\"fa fa-star-o\" aria-hidden=\"true\" (click)=\"task.isFavorite=!task.isFavorite\"></i>\r\n        </span>\r\n        <span *ngIf=\"task.isFavorite\">\r\n          <i class=\"fa fa-star is-favorite\" aria-hidden=\"true\" (click)=\"task.isFavorite=!task.isFavorite\"></i>\r\n        </span>\r\n        <span>\r\n          <i class=\"fa fa-pencil\" aria-hidden=\"true\" [ngClass]=\"{'is-edit': task.showDetail}\" (click)=\"task.showDetail=!task.showDetail\"></i>\r\n        </span>\r\n      </div>\r\n    </div>\r\n    <div class=\"task-simple-info\" *ngIf=\"!task.showDetail\">\r\n      <i class=\"fa fa-calendar\" aria-hidden=\"true\" *ngIf=\"task.deadline\"></i>\r\n      <i class=\"fa fa-file-o\" aria-hidden=\"true\" *ngIf=\"task.hasFile\"></i>\r\n      <i class=\"fa fa-commenting-o\" aria-hidden=\"true\" *ngIf=\"task.comment\"></i>\r\n    </div>\r\n  </div>\r\n  <div class=\"task-detail\" *ngIf=\"task.showDetail\">\r\n    <div class=\"cate\">\r\n      <div class=\"cate-title\">\r\n        <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\r\n        期限\r\n      </div>\r\n      <div class=\"cate-content\">\r\n        <input type=\"date\" name=\"\" id=\"\">\r\n        <input type=\"time\" name=\"\" id=\"\">\r\n      </div>\r\n    </div>\r\n    <div class=\"cate\">\r\n      <div class=\"cate-title\">\r\n        <i class=\"fa fa-file-o\" aria-hidden=\"true\"></i>\r\n        檔案\r\n      </div>\r\n      <div class=\"cate-content\">\r\n        <span class=\"add-file\">\r\n          <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\r\n        </span>\r\n      </div>\r\n    </div>\r\n    <div class=\"cate\">\r\n      <div class=\"cate-title\">\r\n        <i class=\"fa fa-commenting-o\" aria-hidden=\"true\"></i>\r\n        記事\r\n      </div>\r\n      <div class=\"cate-content\">\r\n        <textarea placeholder=\"寫點什麼...\" name=\"\" id=\"\" cols=\"30\" rows=\"10\"></textarea>\r\n      </div>\r\n    </div>\r\n    <div class=\"bottom\">\r\n      <div (click)=\"task.showDetail=false\">\r\n        <i class=\"fa fa-times\" aria-hidden=\"true\"></i>取消</div>\r\n      <div (click)=\"task.showDetail=false\">\r\n        <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>儲存</div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/task-detail/task-detail.component.scss":
/*!********************************************************!*\
  !*** ./src/app/task-detail/task-detail.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/task-detail/task-detail.component.ts":
/*!******************************************************!*\
  !*** ./src/app/task-detail/task-detail.component.ts ***!
  \******************************************************/
/*! exports provided: TaskDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskDetailComponent", function() { return TaskDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _task_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../task.service */ "./src/app/task.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TaskDetailComponent = /** @class */ (function () {
    function TaskDetailComponent(service) {
        this.service = service;
    }
    TaskDetailComponent.prototype.ngOnInit = function () {
        this.tasks = this.service.getData();
    };
    TaskDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-task-detail',
            template: __webpack_require__(/*! ./task-detail.component.html */ "./src/app/task-detail/task-detail.component.html"),
            styles: [__webpack_require__(/*! ./task-detail.component.scss */ "./src/app/task-detail/task-detail.component.scss")]
        }),
        __metadata("design:paramtypes", [_task_service__WEBPACK_IMPORTED_MODULE_1__["TaskService"]])
    ], TaskDetailComponent);
    return TaskDetailComponent;
}());



/***/ }),

/***/ "./src/app/task.service.ts":
/*!*********************************!*\
  !*** ./src/app/task.service.ts ***!
  \*********************************/
/*! exports provided: TaskService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskService", function() { return TaskService; });
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

var TaskService = /** @class */ (function () {
    function TaskService() {
        // done true:完成,false:進行中
        this.tasks = [
            {
                name: '第一個任務',
                done: true,
                showDetail: false,
                isFavorite: true,
                hasFile: false,
                deadline: true,
                comment: '你嘛幫幫忙，連我阿嬤都比你強'
            },
            {
                name: '第二個任務',
                done: true,
                showDetail: false,
                isFavorite: false,
                hasFile: true,
                deadline: false,
                comment: 'how do you turn this on'
            },
            {
                name: '吃飯',
                done: false,
                showDetail: false,
                isFavorite: false,
                hasFile: true,
                deadline: true,
                comment: '大吉大利今晚吃雞'
            },
            {
                name: '午餐',
                done: false,
                showDetail: false,
                isFavorite: false,
                hasFile: false,
                deadline: false,
                comment: ''
            }
        ];
    }
    TaskService.prototype.getData = function () {
        return this.tasks;
    };
    TaskService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], TaskService);
    return TaskService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\jason desk\Desktop\source\f2e-w1\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map