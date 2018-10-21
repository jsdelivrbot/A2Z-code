(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/client/$$_lazy_route_resource lazy recursive":
/*!*****************************************************************!*\
  !*** ./src/client/$$_lazy_route_resource lazy namespace object ***!
  \*****************************************************************/
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
webpackEmptyAsyncContext.id = "./src/client/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/client/app/add-contact/add-contact.component.html":
/*!***************************************************************!*\
  !*** ./src/client/app/add-contact/add-contact.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"add-form-container\">\n  <div class=\"ui icon message\" *ngIf=\"newContact\">\n    <i class=\"notched check green icon\"></i>\n    <i class=\"close icon\" (click)=\"newContact = null\"></i>\n    <div class=\"content\">\n      <div class=\"header\">\n        New contact added!\n      </div>\n      <p>Name: {{newContact.name}}</p>\n    </div>\n  </div>\n  <form class=\"ui big form\" #contactForm=\"ngForm\" (submit)=\"onSubmit(contactForm)\" [class.loading]=\"loading\">\n    <div class=\"fields\">\n      <div class=\"eight wide field\">\n        <label>First Name</label>\n        <input type=\"text\" placeholder=\"First Name\" name=\"firstName\" ngModel>\n      </div>\n      <div class=\"eight wide field\">\n        <label>Last Name</label>\n        <input type=\"text\" placeholder=\"Last Name\" name=\"lastName\" ngModel>\n      </div>\n    </div>\n    <div class=\"field\">\n      <label>Address</label>\n      <input type=\"text\" placeholder=\"Address\" name=\"address\" ngModel>\n    </div>\n    <div class=\"equal width fields\">\n      <div class=\"field\">\n        <label>Phone</label>\n        <input type=\"text\" maxlength=\"5\" placeholder=\"(###)\" name=\"areaCode\" ngModel>\n      </div>\n      <div class=\"field\">\n        <label>&nbsp;</label>\n        <input type=\"text\" maxlength=\"3\" placeholder=\"###\" name=\"prefix\" ngModel>\n      </div>\n      <div class=\"field\">\n        <label>&nbsp;</label>\n        <input type=\"text\" maxlength=\"4\" placeholder=\"####\" name=\"lineNumber\" ngModel>\n      </div>\n    </div>\n    <div class=\"field\">\n      <label>Photo URL</label>\n      <input type=\"text\" placeholder=\"http://cdn.com/profile.jpg\" name=\"photo\" ngModel>\n    </div>\n    <button type=\"submit\" class=\"ui submit large grey button right floated\">Submit</button>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/client/app/add-contact/add-contact.component.scss":
/*!***************************************************************!*\
  !*** ./src/client/app/add-contact/add-contact.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".add-form-container {\n  max-width: 960px;\n  margin: 50px auto; }\n"

/***/ }),

/***/ "./src/client/app/add-contact/add-contact.component.ts":
/*!*************************************************************!*\
  !*** ./src/client/app/add-contact/add-contact.component.ts ***!
  \*************************************************************/
/*! exports provided: AddContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddContactComponent", function() { return AddContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/api.service */ "./src/client/app/shared/api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AddContactComponent = /** @class */ (function () {
    function AddContactComponent(api) {
        this.api = api;
        this.loading = false;
    }
    AddContactComponent.prototype.ngOnInit = function () {
    };
    AddContactComponent.prototype.onSubmit = function (form) {
        var _this = this;
        this.loading = true;
        var formValues = Object.assign({}, form.value);
        var contact = {
            name: formValues.firstName + " " + formValues.lastName,
            address: formValues.address,
            phone: formValues.areaCode + " " + formValues.prefix + "-" + formValues.lineNumber,
            photoUrl: formValues.photo
        };
        this.api.post('contacts', contact)
            .subscribe(function (data) {
            form.reset();
            _this.loading = false;
            _this.newContact = data;
        });
    };
    AddContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-contact',
            template: __webpack_require__(/*! ./add-contact.component.html */ "./src/client/app/add-contact/add-contact.component.html"),
            styles: [__webpack_require__(/*! ./add-contact.component.scss */ "./src/client/app/add-contact/add-contact.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]])
    ], AddContactComponent);
    return AddContactComponent;
}());



/***/ }),

/***/ "./src/client/app/app-routing.module.ts":
/*!**********************************************!*\
  !*** ./src/client/app/app-routing.module.ts ***!
  \**********************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _contact_list_contact_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact-list/contact-list.component */ "./src/client/app/contact-list/contact-list.component.ts");
/* harmony import */ var _add_contact_add_contact_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-contact/add-contact.component */ "./src/client/app/add-contact/add-contact.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/client/app/login/login.component.ts");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth.guard */ "./src/client/app/auth.guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        redirectTo: 'contacts',
        pathMatch: 'full'
    },
    {
        path: 'contacts',
        component: _contact_list_contact_list_component__WEBPACK_IMPORTED_MODULE_2__["ContactListComponent"],
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]]
    },
    {
        path: 'new',
        component: _add_contact_add_contact_component__WEBPACK_IMPORTED_MODULE_3__["AddContactComponent"],
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]]
    },
    {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]
    },
    {
        path: '**',
        redirectTo: 'contacts'
    }
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

/***/ "./src/client/app/app.component.css":
/*!******************************************!*\
  !*** ./src/client/app/app.component.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/client/app/app.component.html":
/*!*******************************************!*\
  !*** ./src/client/app/app.component.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "{{title}}\n<app-menu></app-menu>\n<router-outlet></router-outlet>\n\n<br>\nhttps://stackblitz.com/edit/angular-6-jwt-authentication-example?file=app%2F_helpers%2Fjwt.interceptor.ts\n\n<br>https://stackblitz.com/edit/angular-6-communicating-between-components-7hsega?file=app%2F_services%2Findex.ts\n\n\n<h3>This Project Arch Is like src --> Client --> app</h3><br>\n<h3>\n  <p> src --> Server --> index.js</p>\n</h3>\n<br>\n\n<h4>for above to happen i have made chanages in tsconfig.app.json--> \"extends\": \"../../tsconfig.json\"</h4>\n<br>\n<h4>and angular.json --> \"sourceRoot\": \"src/client\",</h4>\n\n\n<br> Jwt Structure\n<br>   Header --> algo + type\n<br>   payload --> iat (issueat) + expiry + username + role\n<br>   Structure --> encoded payload + encoded header with hmacsha256 algo with a secreat key\n\n\n\n"

/***/ }),

/***/ "./src/client/app/app.component.ts":
/*!*****************************************!*\
  !*** ./src/client/app/app.component.ts ***!
  \*****************************************/
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
        this.title = 'angular7template';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/client/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/client/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/client/app/app.module.ts":
/*!**************************************!*\
  !*** ./src/client/app/app.module.ts ***!
  \**************************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/client/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/client/app/app.component.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./menu/menu.component */ "./src/client/app/menu/menu.component.ts");
/* harmony import */ var _contact_list_contact_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./contact-list/contact-list.component */ "./src/client/app/contact-list/contact-list.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./contact/contact.component */ "./src/client/app/contact/contact.component.ts");
/* harmony import */ var _add_contact_add_contact_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./add-contact/add-contact.component */ "./src/client/app/add-contact/add-contact.component.ts");
/* harmony import */ var _shared_api_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/api.service */ "./src/client/app/shared/api.service.ts");
/* harmony import */ var _shared_auth_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/auth.service */ "./src/client/app/shared/auth.service.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./login/login.component */ "./src/client/app/login/login.component.ts");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./auth.guard */ "./src/client/app/auth.guard.ts");
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
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _menu_menu_component__WEBPACK_IMPORTED_MODULE_6__["MenuComponent"],
                _contact_list_contact_list_component__WEBPACK_IMPORTED_MODULE_7__["ContactListComponent"],
                _contact_contact_component__WEBPACK_IMPORTED_MODULE_8__["ContactComponent"],
                _add_contact_add_contact_component__WEBPACK_IMPORTED_MODULE_9__["AddContactComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_2__["HttpModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"]
            ],
            providers: [_shared_api_service__WEBPACK_IMPORTED_MODULE_10__["ApiService"], _shared_auth_service__WEBPACK_IMPORTED_MODULE_11__["AuthService"], _auth_guard__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/client/app/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/client/app/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/auth.service */ "./src/client/app/shared/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        if (this.auth.isLoggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_shared_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/client/app/contact-list/contact-list.component.html":
/*!*****************************************************************!*\
  !*** ./src/client/app/contact-list/contact-list.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui container\">\n  <div class=\"ui grid\">\n    <app-contact *ngFor=\"let contact of contacts\" [contact]=\"contact\"></app-contact>\n  </div>\n</div>"

/***/ }),

/***/ "./src/client/app/contact-list/contact-list.component.scss":
/*!*****************************************************************!*\
  !*** ./src/client/app/contact-list/contact-list.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  margin-top: 50px; }\n"

/***/ }),

/***/ "./src/client/app/contact-list/contact-list.component.ts":
/*!***************************************************************!*\
  !*** ./src/client/app/contact-list/contact-list.component.ts ***!
  \***************************************************************/
/*! exports provided: ContactListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactListComponent", function() { return ContactListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/api.service */ "./src/client/app/shared/api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactListComponent = /** @class */ (function () {
    function ContactListComponent(api) {
        this.api = api;
    }
    ContactListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.api.get('contacts')
            .subscribe(function (data) { return _this.contacts = data; });
    };
    ContactListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact-list',
            template: __webpack_require__(/*! ./contact-list.component.html */ "./src/client/app/contact-list/contact-list.component.html"),
            styles: [__webpack_require__(/*! ./contact-list.component.scss */ "./src/client/app/contact-list/contact-list.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]])
    ], ContactListComponent);
    return ContactListComponent;
}());



/***/ }),

/***/ "./src/client/app/contact/contact.component.html":
/*!*******************************************************!*\
  !*** ./src/client/app/contact/contact.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui card\">\n  <div class=\"image\">\n    <img [src]=\"contact?.photoUrl\">\n  </div>\n  <div class=\"content\">\n    <a class=\"header\">{{contact.name}}</a>\n    <div class=\"description\">\n      {{contact.address}}\n    </div>\n  </div>\n  <div class=\"extra content\">\n    <span>\n      <i class=\"call icon\"></i>\n      {{contact.phone}}\n    </span>\n  </div>\n</div>"

/***/ }),

/***/ "./src/client/app/contact/contact.component.scss":
/*!*******************************************************!*\
  !*** ./src/client/app/contact/contact.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/client/app/contact/contact.component.ts":
/*!*****************************************************!*\
  !*** ./src/client/app/contact/contact.component.ts ***!
  \*****************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
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

var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
        this.columnClass = 'four wide column';
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ContactComponent.prototype, "contact", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class'),
        __metadata("design:type", Object)
    ], ContactComponent.prototype, "columnClass", void 0);
    ContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/client/app/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.scss */ "./src/client/app/contact/contact.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/client/app/login/login.component.html":
/*!***************************************************!*\
  !*** ./src/client/app/login/login.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login-container\">\n  <form class=\"ui big form\" #loginForm=\"ngForm\" (submit)=\"onSubmit(loginForm)\">\n  <div class=\"field\">\n    <label>Username</label>\n    <input type=\"text\" name=\"username\" placeholder=\"Username\" ngModel>\n  </div>\n  <div class=\"field\">\n    <label>Password</label>\n    <input type=\"password\" name=\"password\" placeholder=\"Password\" ngModel>\n  </div>\n  <button type=\"submit\" class=\"ui primary button float right floated\">Login</button>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/client/app/login/login.component.scss":
/*!***************************************************!*\
  !*** ./src/client/app/login/login.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-container {\n  max-width: 500px;\n  margin: 50px auto; }\n"

/***/ }),

/***/ "./src/client/app/login/login.component.ts":
/*!*************************************************!*\
  !*** ./src/client/app/login/login.component.ts ***!
  \*************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/api.service */ "./src/client/app/shared/api.service.ts");
/* harmony import */ var _shared_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/auth.service */ "./src/client/app/shared/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(api, auth, router) {
        this.api = api;
        this.auth = auth;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
        if (this.auth.isLoggedIn()) {
            this.router.navigate(['/contacts']);
        }
    };
    LoginComponent.prototype.onSubmit = function (form) {
        var _this = this;
        var values = form.value;
        var payload = {
            username: values.username,
            password: values.password
        };
        this.api.post('authenticate', payload)
            .subscribe(function (data) {
            console.log(data);
            _this.auth.setToken(data.token);
            _this.router.navigate(['/contacts']);
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/client/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/client/app/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"],
            _shared_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/client/app/menu/menu.component.html":
/*!*************************************************!*\
  !*** ./src/client/app/menu/menu.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui menu header\">\n  <div class=\"ui container\">\n    <div class=\"item\">\n      <a [routerLink]=\"['/contacts']\" aria-label=\"Contacts\">\n        <i class=\"icon users large blue\" aria-hidden=\"true\"></i>\n      </a>\n    </div>\n    <div class=\"header item\">\n      <h1>Contact Manager</h1>\n    </div>\n    <div class=\"item\" *ngIf=\"auth.isLoggedIn()\">\n      <button [routerLink]=\"['/new']\" class=\"ui basic button\">\n        <i class=\"add user icon\" aria-hidden=\"true\"></i>\n        Add Contact\n      </button>\n    </div>\n    <div class=\"right menu\" *ngIf=\"auth.isLoggedIn()\">\n      <button class=\"ui primary button logout\" (click)=\"logout()\">Logout</button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/client/app/menu/menu.component.scss":
/*!*************************************************!*\
  !*** ./src/client/app/menu/menu.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button.logout {\n  margin: 10px 20px; }\n"

/***/ }),

/***/ "./src/client/app/menu/menu.component.ts":
/*!***********************************************!*\
  !*** ./src/client/app/menu/menu.component.ts ***!
  \***********************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/auth.service */ "./src/client/app/shared/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MenuComponent = /** @class */ (function () {
    function MenuComponent(auth) {
        this.auth = auth;
    }
    MenuComponent.prototype.ngOnInit = function () {
    };
    MenuComponent.prototype.logout = function () {
        this.auth.logout();
    };
    MenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/client/app/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.scss */ "./src/client/app/menu/menu.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/client/app/shared/api.service.ts":
/*!**********************************************!*\
  !*** ./src/client/app/shared/api.service.ts ***!
  \**********************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
/* harmony import */ var rxjs_add_observable_throw__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/observable/throw */ "./node_modules/rxjs-compat/_esm5/add/observable/throw.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm5/Observable.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../environments/environment */ "./src/client/environments/environment.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./auth.service */ "./src/client/app/shared/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ApiService = /** @class */ (function () {
    function ApiService(http, auth) {
        this.http = http;
        this.auth = auth;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiUrl;
    }
    ApiService.prototype.get = function (url) {
        return this.request(url, _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestMethod"].Get);
    };
    ApiService.prototype.post = function (url, body) {
        debugger;
        return this.request(url, _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestMethod"].Post, body);
    };
    ApiService.prototype.put = function (url, body) {
        return this.request(url, _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestMethod"].Put, body);
    };
    ApiService.prototype.delete = function (url) {
        return this.request(url, _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestMethod"].Delete);
    };
    ApiService.prototype.request = function (url, method, body) {
        debugger;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', "Bearer " + this.auth.getToken());
        var requestOptions = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({
            url: this.baseUrl + "/" + url,
            method: method,
            headers: headers
        });
        if (body) {
            requestOptions.body = body;
        }
        var request = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Request"](requestOptions);
        return this.http.request(request)
            .map(function (res) { return res.json(); });
        // .catch((res: Response) => this.onRequestError(res));
    };
    ApiService.prototype.onRequestError = function (res) {
        var statusCode = res.status;
        var body = res.json();
        var error = {
            statusCode: statusCode,
            error: body.error
        };
        console.log(error);
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_5__["Observable"].throw(error);
    };
    ApiService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"], _auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "./src/client/app/shared/auth.service.ts":
/*!***********************************************!*\
  !*** ./src/client/app/shared/auth.service.ts ***!
  \***********************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthService = /** @class */ (function () {
    function AuthService(router) {
        this.router = router;
        this.storageKey = 'contact-manager-jwt';
    }
    AuthService.prototype.setToken = function (token) {
        localStorage.setItem(this.storageKey, token);
    };
    AuthService.prototype.getToken = function () {
        return localStorage.getItem(this.storageKey);
    };
    AuthService.prototype.isLoggedIn = function () {
        return this.getToken() !== null;
    };
    AuthService.prototype.logout = function () {
        localStorage.removeItem(this.storageKey);
        this.router.navigate(['/login']);
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/client/environments/environment.ts":
/*!************************************************!*\
  !*** ./src/client/environments/environment.ts ***!
  \************************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false, apiUrl: '/api'
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error  localhost:3000
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/client/main.ts":
/*!****************************!*\
  !*** ./src/client/main.ts ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/client/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/client/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!**********************************!*\
  !*** multi ./src/client/main.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! G:\SoftPiller\angular7template\src\client\main.ts */"./src/client/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map