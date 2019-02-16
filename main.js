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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  about works!\n</p>\n"

/***/ }),

/***/ "./src/app/about/about.component.scss":
/*!********************************************!*\
  !*** ./src/app/about/about.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.scss */ "./src/app/about/about.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _sql_list_builder_sql_list_builder_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sql-list-builder/sql-list-builder.component */ "./src/app/sql-list-builder/sql-list-builder.component.ts");
/* harmony import */ var _list_diff_list_diff_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list-diff/list-diff.component */ "./src/app/list-diff/list-diff.component.ts");







var routes = [
    { path: '', component: _sql_list_builder_sql_list_builder_component__WEBPACK_IMPORTED_MODULE_5__["SqlListBuilderComponent"] },
    { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"] },
    { path: 'contact', component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_4__["ContactComponent"] },
    { path: 'sql-list-builder', component: _sql_list_builder_sql_list_builder_component__WEBPACK_IMPORTED_MODULE_5__["SqlListBuilderComponent"] },
    { path: 'list-diff', component: _list_diff_list_diff_component__WEBPACK_IMPORTED_MODULE_6__["ListDiffComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
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

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<app-nav></app-nav>\n<section>\n  <router-outlet></router-outlet>\n</section>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.appTitle = 'Utilities';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/nav/nav.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _sql_list_builder_sql_list_builder_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./sql-list-builder/sql-list-builder.component */ "./src/app/sql-list-builder/sql-list-builder.component.ts");
/* harmony import */ var _list_diff_list_diff_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./list-diff/list-diff.component */ "./src/app/list-diff/list-diff.component.ts");



 // Added here








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _nav_nav_component__WEBPACK_IMPORTED_MODULE_5__["NavComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_6__["AboutComponent"],
                _contact_contact_component__WEBPACK_IMPORTED_MODULE_7__["ContactComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
                _sql_list_builder_sql_list_builder_component__WEBPACK_IMPORTED_MODULE_10__["SqlListBuilderComponent"],
                _list_diff_list_diff_component__WEBPACK_IMPORTED_MODULE_11__["ListDiffComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.html":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  contact works!\n</p>\n"

/***/ }),

/***/ "./src/app/contact/contact.component.scss":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.scss */ "./src/app/contact/contact.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  home works!\n</p>\n"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/list-diff/list-diff.component.html":
/*!****************************************************!*\
  !*** ./src/app/list-diff/list-diff.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>List Differ</h1>\n\n<!-- First row - contains input forms --> \n<form [formGroup]=\"listDiffer\" (ngSubmit)=\"onSubmit()\">\n  <div class=\"row\">\n    <div class=\"twocolumn\">\n        <label>List A</label>\n        <textarea formControlName=\"listOne\" rows=\"20\"></textarea>\n    </div>\n    <div class=\"twocolumn\">\n        <label>List B</label>\n        <textarea formControlName=\"listTwo\" rows=\"20\"></textarea>\n    </div>\n  </div>\n  <div class=\"row\">\n      <button type=\"button\" (click)=\"onSubmit()\" class=\"cta\">DIFF LISTS</button>\n  </div>\n</form>\n\n<!-- Output --> \n<div *ngIf=\"submitted\">\n  <div class=\"row\" > \n      <div class=\"twocolumn\"> \n        <label>A - B ({{ aOnlyCount }})</label>\n        <textarea rows=\"12\" readonly>{{ aOnly }}</textarea>\n      </div>\n      <div class=\"twocolumn\">\n        <label>B - A ({{ bOnlyCount }})</label>\n        <textarea rows=\"12\" readonly>{{ bOnly }}</textarea>\n      </div>\n  </div>\n  <div class=\"row\">\n      <div class=\"twocolumn\">\n        <label>A ∪ B ({{ aUnionBCount }})</label>\n        <textarea rows=\"12\" readonly>{{ aUnionB }}</textarea>\n      </div>\n      <div class=\"twocolumn\">   \n        <label>A ∩ B ({{ aIntersectionBCount }})</label>\n        <textarea rows=\"12\" readonly>{{ aIntersectionB }}</textarea>\n      </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"column\">\n      <label>(A ∪ B) - (A ∩ B) ({{ aUnionBLessAIntersectionBCount }})</label>\n      <textarea rows=\"12\" readonly>{{ aUnionBLessAIntersectionB }}</textarea>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/list-diff/list-diff.component.scss":
/*!****************************************************!*\
  !*** ./src/app/list-diff/list-diff.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  box-sizing: border-box; }\n\n.row {\n  display: flex; }\n\n@media screen and (max-width: 600px) {\n  .column {\n    width: 100%; } }\n\nform {\n  display: block; }\n\nform button, form textarea {\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n    width: 90%;\n    margin-bottom: 20px;\n    padding: 1em; }\n\nform .error {\n    margin-top: -20px;\n    background: yellow;\n    padding: .5em;\n    display: inline-block;\n    font-size: .9em;\n    margin-bottom: 20px; }\n\nlabel {\n  text-align: center;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 90%;\n  padding: 1em; }\n\n.column {\n  text-align: center;\n  width: 50%;\n  padding: 10px;\n  padding: 10px; }\n\n.twocolumn {\n  float: left;\n  width: 50%;\n  padding: 10px;\n  padding: 10px; }\n\n.threecolumn {\n  float: left;\n  width: 33%;\n  padding: 10px;\n  padding: 10px; }\n\ntextarea {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 90%;\n  margin-bottom: 20px;\n  padding: 1em; }\n\n.cta {\n  background: #7700FF;\n  border: none;\n  color: white;\n  text-transform: uppercase;\n  border-radius: 4px;\n  padding: 1em;\n  cursor: pointer;\n  font-family: 'Montserrat'; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlzdC1kaWZmL0M6XFxVc2Vyc1xcTmlhbGxcXERvY3VtZW50c1xcUHJvZ3JhbW1pbmdcXEFuZ3VsYXJcXHRvb2xzL3NyY1xcYXBwXFxsaXN0LWRpZmZcXGxpc3QtZGlmZi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNBLHNCQUFzQixFQUFBOztBQUd0QjtFQUNBLGFBQWEsRUFBQTs7QUFHYjtFQUNJO0lBQ0UsV0FBVyxFQUFBLEVBQ1o7O0FBR0w7RUFDSSxjQUFjLEVBQUE7O0FBRGxCO0lBSVEsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLG1CQUFtQjtJQUNuQixZQUFZLEVBQUE7O0FBVHBCO0lBYVEsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixtQkFBbUIsRUFBQTs7QUFJM0I7RUFDSSxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFlBQVksRUFBQTs7QUFHaEI7RUFDSSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGFBQWE7RUFDYixhQUFhLEVBQUE7O0FBR2pCO0VBQ0ksV0FBVztFQUNYLFVBQVU7RUFDVixhQUFhO0VBQ2IsYUFBYSxFQUFBOztBQUdqQjtFQUNJLFdBQVc7RUFDWCxVQUFVO0VBQ1YsYUFBYTtFQUNiLGFBQWEsRUFBQTs7QUFHakI7RUFDSSxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsbUJBQW1CO0VBQ25CLFlBQVksRUFBQTs7QUFHaEI7RUFDSSxtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLFlBQVk7RUFFWix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixlQUFlO0VBQ2YseUJBQXlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9saXN0LWRpZmYvbGlzdC1kaWZmLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XHJcbmJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbi5yb3cge1xyXG5kaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgLmNvbHVtbiB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbmZvcm0ge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBcclxuICAgIGJ1dHRvbiwgdGV4dGFyZWEge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgcGFkZGluZzogMWVtO1xyXG4gICAgfVxyXG5cclxuICAgIC5lcnJvciB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogLTIwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogeWVsbG93O1xyXG4gICAgICAgIHBhZGRpbmc6IC41ZW07XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogLjllbTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5sYWJlbCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIHBhZGRpbmc6IDFlbTtcclxufVxyXG5cclxuLmNvbHVtbiB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICB9XHJcblxyXG4udHdvY29sdW1uIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgfVxyXG5cclxuLnRocmVlY29sdW1uIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgd2lkdGg6IDMzJTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgfVxyXG5cclxudGV4dGFyZWEge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgcGFkZGluZzogMWVtO1xyXG59XHJcblxyXG4uY3RhIHtcclxuICAgIGJhY2tncm91bmQ6ICM3NzAwRkY7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcblxyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIHBhZGRpbmc6IDFlbTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCc7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/list-diff/list-diff.component.ts":
/*!**************************************************!*\
  !*** ./src/app/list-diff/list-diff.component.ts ***!
  \**************************************************/
/*! exports provided: ListDiffComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListDiffComponent", function() { return ListDiffComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var ListDiffComponent = /** @class */ (function () {
    function ListDiffComponent(formBuilder) {
        this.formBuilder = formBuilder;
        this.submitted = false;
        this.aOnly = '';
        this.bOnly = '';
        this.aUnionB = '';
        this.aIntersectionB = '';
        this.aUnionBLessAIntersectionB = '';
        this.aOnlyCount = '';
        this.bOnlyCount = '';
        this.aUnionBCount = '';
        this.aIntersectionBCount = '';
        this.aUnionBLessAIntersectionBCount = '';
    }
    ListDiffComponent.prototype.ngOnInit = function () {
        this.listDiffer = this.formBuilder.group({
            listOne: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            listTwo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    };
    ListDiffComponent.prototype.onSubmit = function () {
        var a = this.listDiffer.get('listOne').value.split('\n');
        if (a[0] === '')
            a = [];
        var b = this.listDiffer.get('listTwo').value.split('\n');
        if (b[0] === '')
            b = [];
        // Filter duplicates out of the lists
        var unique = function (xs) {
            return xs.filter(function (x, i) {
                return xs.indexOf(x) === i;
            });
        };
        var format = function (xs) {
            return xs.filter(function (x, i) {
                return xs.indexOf(x) === i;
            });
        };
        var aUnique = unique(a);
        var bUnique = unique(b);
        // Get unique elements in the lists
        var aOnly = aUnique.filter(function (el) {
            return !bUnique.includes(el);
        });
        var bOnly = bUnique.filter(function (el) {
            return !aUnique.includes(el);
        });
        // Union of the two lists
        var aUnionB = aOnly.concat(bUnique);
        // Intersection of the two lists
        var aIntersectionB = aUnionB.filter(function (el) {
            return aUnique.includes(el) && bUnique.includes(el);
        });
        // (A U B) - (A n B)
        var aUnionBLessAIntersectionB = aUnionB.filter(function (el) {
            return !aIntersectionB.includes(el);
        });
        this.submitted = true;
        this.aOnly = aOnly.join('\n');
        this.bOnly = bOnly.join('\n');
        this.aUnionB = aUnionB.join('\n');
        this.aIntersectionB = aIntersectionB.join('\n');
        this.aUnionBLessAIntersectionB = aUnionBLessAIntersectionB.join('\n');
        this.aOnlyCount = aOnly.length;
        this.bOnlyCount = bOnly.length;
        this.aUnionBCount = aUnionB.length;
        this.aIntersectionBCount = aIntersectionB.length;
        this.aUnionBLessAIntersectionBCount = aUnionBLessAIntersectionB.length;
        console.log("A Only");
        console.log(this.aOnly);
        console.log("B Only");
        console.log(this.bOnly);
        console.log("A U B");
        console.log(aUnionB);
        console.log("A n B");
        console.log(aIntersectionB);
        console.log("(A U B) - (A n B)");
        console.log(aUnionBLessAIntersectionB);
    };
    ListDiffComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list-diff',
            template: __webpack_require__(/*! ./list-diff.component.html */ "./src/app/list-diff/list-diff.component.html"),
            styles: [__webpack_require__(/*! ./list-diff.component.scss */ "./src/app/list-diff/list-diff.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], ListDiffComponent);
    return ListDiffComponent;
}());



/***/ }),

/***/ "./src/app/nav/nav.component.html":
/*!****************************************!*\
  !*** ./src/app/nav/nav.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n  <div class=\"container\">\n    <a routerLink=\"/\" class=\"logo\">{{ appTitle }}</a>\n    <nav>\n      <ul>\n        <li>\n          <a routerLink=\"/sql-list-builder\">List Builder</a>\n          <a routerLink=\"/list-diff\">List Differ</a>\n        </li>\n      </ul>\n    </nav>\n  </div>\n</header>\n"

/***/ }),

/***/ "./src/app/nav/nav.component.scss":
/*!****************************************!*\
  !*** ./src/app/nav/nav.component.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "header {\n  background: #7700FF; }\n  header .logo {\n    font-weight: bold; }\n  header nav {\n    justify-self: right; }\n  header nav ul {\n      list-style-type: none;\n      margin: 0;\n      padding: 0; }\n  header nav ul li {\n        float: left; }\n  header nav ul li a {\n          padding: 1.5em;\n          text-transform: uppercase;\n          font-size: .8em; }\n  header nav ul li a:hover {\n            background: #8E2BFF; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2L0M6XFxVc2Vyc1xcTmlhbGxcXERvY3VtZW50c1xcUHJvZ3JhbW1pbmdcXEFuZ3VsYXJcXHRvb2xzL3NyY1xcYXBwXFxuYXZcXG5hdi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFtQixFQUFBO0VBRHZCO0lBSVEsaUJBQWlCLEVBQUE7RUFKekI7SUFRUSxtQkFBbUIsRUFBQTtFQVIzQjtNQVdZLHFCQUFxQjtNQUNyQixTQUFTO01BQUUsVUFBVSxFQUFBO0VBWmpDO1FBZWdCLFdBQVcsRUFBQTtFQWYzQjtVQWtCb0IsY0FBYztVQUNkLHlCQUF5QjtVQUN6QixlQUFlLEVBQUE7RUFwQm5DO1lBdUJ3QixtQkFBbUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL25hdi9uYXYuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoZWFkZXIge1xyXG4gICAgYmFja2dyb3VuZDogIzc3MDBGRjtcclxuXHJcbiAgICAubG9nbyB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB9XHJcblxyXG4gICAgbmF2IHtcclxuICAgICAgICBqdXN0aWZ5LXNlbGY6IHJpZ2h0O1xyXG4gICAgXHJcbiAgICAgICAgdWwge1xyXG4gICAgICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMDsgcGFkZGluZzogMDtcclxuXHJcbiAgICAgICAgICAgIGxpIHtcclxuICAgICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG5cclxuICAgICAgICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEuNWVtO1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAuOGVtO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzhFMkJGRjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/nav/nav.component.ts":
/*!**************************************!*\
  !*** ./src/app/nav/nav.component.ts ***!
  \**************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavComponent = /** @class */ (function () {
    function NavComponent() {
        this.appTitle = "Utilities";
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    NavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.scss */ "./src/app/nav/nav.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/sql-list-builder/sql-list-builder.component.html":
/*!******************************************************************!*\
  !*** ./src/app/sql-list-builder/sql-list-builder.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>List Builder</h1>\n\n<div class=\"row\">\n  <div class=\"column\">\n    <form [formGroup]=\"sqlListBuilder\" (ngSubmit)=\"onSubmit(buttonType)\">\n        <label>Enter your items:</label>\n          <textarea formControlName=\"items\" rows=\"25\"></textarea>\n          <div *ngIf=\"submitted && sqlListBuilder.controls.items.errors\" class=\"error\">\n            <div *ngIf=\"sqlListBuilder.controls.items.errors.required\">Must enter at least one item</div>\n          </div>\n          <div class=\"row\">\n            <div class=\"column\">\n              <button type=\"button\" (click)=\"onSubmit('SQL')\" class=\"cta\">SQL</button>\n            </div>\n            <div class=\"column\">\n              <button type=\"button\" (click)=\"onSubmit('PYTHON')\" class=\"cta\">Python</button>\n            </div>         \n          </div>\n        </form>\n  </div>\n  <div class=\"column\">\n    <div *ngIf=\"submitted\" class=\"results\">\n      <label>Result</label> \n      <textarea rows=\"25\" readonly>{{ results }}</textarea>    \n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/sql-list-builder/sql-list-builder.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/sql-list-builder/sql-list-builder.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  box-sizing: border-box; }\n\n.row {\n  display: flex; }\n\n.column {\n  float: left;\n  width: 50%;\n  padding: 10px;\n  padding: 10px; }\n\n/* Clear floats after the columns */\n\n.row:after {\n  content: \"\";\n  display: table;\n  clear: both; }\n\n@media screen and (max-width: 600px) {\n  .column {\n    width: 100%; } }\n\nform {\n  display: block; }\n\nform button, form textarea {\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n    width: 90%;\n    margin-bottom: 20px;\n    padding: 1em; }\n\nform .error {\n    margin-top: -20px;\n    background: yellow;\n    padding: .5em;\n    display: inline-block;\n    font-size: .9em;\n    margin-bottom: 20px; }\n\n.cta {\n  background: #7700FF;\n  border: none;\n  color: white;\n  text-transform: uppercase;\n  border-radius: 4px;\n  padding: 1em;\n  cursor: pointer;\n  font-family: 'Montserrat'; }\n\n.results {\n  display: block; }\n\n.results textarea {\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n    width: 90%;\n    margin-bottom: 20px;\n    padding: 1em; }\n\n.results strong {\n    display: block; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3FsLWxpc3QtYnVpbGRlci9DOlxcVXNlcnNcXE5pYWxsXFxEb2N1bWVudHNcXFByb2dyYW1taW5nXFxBbmd1bGFyXFx0b29scy9zcmNcXGFwcFxcc3FsLWxpc3QtYnVpbGRlclxcc3FsLWxpc3QtYnVpbGRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNBLHNCQUFzQixFQUFBOztBQUd0QjtFQUNBLGFBQWEsRUFBQTs7QUFHYjtFQUNJLFdBQVc7RUFDWCxVQUFVO0VBQ1YsYUFBYTtFQUNiLGFBQWEsRUFBQTs7QUFHakIsbUNBQUE7O0FBQ0E7RUFDQSxXQUFXO0VBQ1gsY0FBYztFQUNkLFdBQVcsRUFBQTs7QUFHWDtFQUNJO0lBQ0UsV0FBVyxFQUFBLEVBQ1o7O0FBR0w7RUFDSSxjQUFjLEVBQUE7O0FBRGxCO0lBSVEsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLG1CQUFtQjtJQUNuQixZQUFZLEVBQUE7O0FBVHBCO0lBYVEsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixtQkFBbUIsRUFBQTs7QUFJM0I7RUFDSSxtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLFlBQVk7RUFFWix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixlQUFlO0VBQ2YseUJBQXlCLEVBQUE7O0FBRTdCO0VBQ0ksY0FBYyxFQUFBOztBQURsQjtJQUlRLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixtQkFBbUI7SUFDbkIsWUFBWSxFQUFBOztBQVRwQjtJQWFRLGNBQWMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3NxbC1saXN0LWJ1aWxkZXIvc3FsLWxpc3QtYnVpbGRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xyXG5ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG4ucm93IHtcclxuZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLmNvbHVtbiB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICB9XHJcblxyXG4vKiBDbGVhciBmbG9hdHMgYWZ0ZXIgdGhlIGNvbHVtbnMgKi9cclxuLnJvdzphZnRlciB7XHJcbmNvbnRlbnQ6IFwiXCI7XHJcbmRpc3BsYXk6IHRhYmxlO1xyXG5jbGVhcjogYm90aDtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgIC5jb2x1bW4ge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICB9XHJcblxyXG5mb3JtIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgXHJcbiAgICBidXR0b24sIHRleHRhcmVhIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDFlbTtcclxuICAgIH1cclxuXHJcbiAgICAuZXJyb3Ige1xyXG4gICAgICAgIG1hcmdpbi10b3A6IC0yMHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHllbGxvdztcclxuICAgICAgICBwYWRkaW5nOiAuNWVtO1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBmb250LXNpemU6IC45ZW07XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIH1cclxufVxyXG5cclxuLmN0YSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNzcwMEZGO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG5cclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBwYWRkaW5nOiAxZW07XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnO1xyXG59XHJcbi5yZXN1bHRzIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgXHJcbiAgICB0ZXh0YXJlYSB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgICBwYWRkaW5nOiAxZW07XHJcbiAgICB9XHJcblxyXG4gICAgc3Ryb25nIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/sql-list-builder/sql-list-builder.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/sql-list-builder/sql-list-builder.component.ts ***!
  \****************************************************************/
/*! exports provided: SqlListBuilderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SqlListBuilderComponent", function() { return SqlListBuilderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var SqlListBuilderComponent = /** @class */ (function () {
    function SqlListBuilderComponent(formBuilder) {
        this.formBuilder = formBuilder;
        this.submitted = false;
        this.success = false;
        this.results = '';
    }
    SqlListBuilderComponent.prototype.ngOnInit = function () {
        this.sqlListBuilder = this.formBuilder.group({
            items: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    };
    SqlListBuilderComponent.prototype.onSubmit = function (buttonType) {
        console.log(buttonType);
        var braceOne = '';
        var braceTwo = '';
        if (buttonType === "SQL") {
            braceOne = '(';
            braceTwo = ')';
        }
        if (buttonType === "PYTHON") {
            braceOne = '[';
            braceTwo = ']';
        }
        this.submitted = true;
        if (this.sqlListBuilder.invalid) {
            return;
        }
        this.success = true;
        this.results = braceOne + '\n';
        var lines = this.sqlListBuilder.get('items').value.split('\n');
        for (var i = 0; i < lines.length; i++) {
            //code here using lines[i] which will give you each line
            this.results += '\'' + lines[i] + '\'';
            if (i == lines.length - 1) {
                this.results += '\n' + braceTwo;
                //  block of code to be executed if the condition is true
            }
            else {
                this.results += ',\n';
                //  block of code to be executed if the condition is false
            }
        }
    };
    SqlListBuilderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sql-list-builder',
            template: __webpack_require__(/*! ./sql-list-builder.component.html */ "./src/app/sql-list-builder/sql-list-builder.component.html"),
            styles: [__webpack_require__(/*! ./sql-list-builder.component.scss */ "./src/app/sql-list-builder/sql-list-builder.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], SqlListBuilderComponent);
    return SqlListBuilderComponent;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Niall\Documents\Programming\Angular\tools\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map