(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./demo/$$_lazy_route_resource lazy recursive":
/*!***********************************************************!*\
  !*** ./demo/$$_lazy_route_resource lazy namespace object ***!
  \***********************************************************/
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
webpackEmptyAsyncContext.id = "./demo/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./demo/main.ts":
/*!**********************!*\
  !*** ./demo/main.ts ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _src_demo_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/demo.module */ "./demo/src/demo.module.ts");


Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_0__["platformBrowserDynamic"])().bootstrapModule(_src_demo_module__WEBPACK_IMPORTED_MODULE_1__["DemoModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "./demo/src/demo.component.html":
/*!**************************************!*\
  !*** ./demo/src/demo.component.html ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\r\n    <nav class=\"navbar navbar-expand-md navbar-dark fixed-top bg-dark\">\r\n        <a class=\"navbar-brand\" routerLink=\"/installation\">Google reCaptcha for Angular</a>\r\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarCollapse\" aria-controls=\"navbarCollapse\"\r\n            aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n            <span class=\"navbar-toggler-icon\"></span>\r\n        </button>\r\n        <div class=\"collapse navbar-collapse\" id=\"navbarCollapse\">\r\n            <ul class=\"navbar-nav mr-auto\">\r\n                <li class=\"nav-item\">\r\n                    <a class=\"nav-link \" routerLink=\"/installation\">Quick start</a>\r\n                </li>\r\n                <li class=\"nav-item\">\r\n                    <a class=\"nav-link \" routerLink=\"/recaptcha2\">reCaptcha v2</a>\r\n                </li>\r\n                <li class=\"nav-item\">\r\n                    <a class=\"nav-link \" routerLink=\"/recaptcha3\">reCaptcha v3</a>\r\n                </li>\r\n                <li class=\"nav-item\">\r\n                    <a class=\"nav-link \" routerLink=\"/invisible\">Invisible reCaptcha</a>\r\n                </li>\r\n            </ul>\r\n            <div class=\"mt-2 mt-md-0\">\r\n                <a href=\"https://github.com/Enngage/ngx-captcha\">\r\n                    <button class=\"btn my-2 my-sm-0\" type=\"submit\">GitHub</button>\r\n                </a>\r\n            </div>\r\n        </div>\r\n    </nav>\r\n</header>\r\n\r\n<main role=\"main\" style=\"margin-top: 90px\">\r\n    <div class=\"container\" id=\"highlight\">\r\n        <router-outlet></router-outlet>\r\n    </div>\r\n</main>"

/***/ }),

/***/ "./demo/src/demo.component.ts":
/*!************************************!*\
  !*** ./demo/src/demo.component.ts ***!
  \************************************/
/*! exports provided: DemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoComponent", function() { return DemoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DemoComponent = /** @class */ (function () {
    function DemoComponent() {
        this.year = new Date().getFullYear();
    }
    DemoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./demo.component.html */ "./demo/src/demo.component.html"),
        })
    ], DemoComponent);
    return DemoComponent;
}());



/***/ }),

/***/ "./demo/src/demo.module.ts":
/*!*********************************!*\
  !*** ./demo/src/demo.module.ts ***!
  \*********************************/
/*! exports provided: DemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoModule", function() { return DemoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _projects_ngx_captcha_lib_src_lib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../projects/ngx-captcha-lib/src/lib */ "./projects/ngx-captcha-lib/src/lib/index.ts");
/* harmony import */ var _demo_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./demo.component */ "./demo/src/demo.component.ts");
/* harmony import */ var _demo_routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./demo.routes */ "./demo/src/demo.routes.ts");
/* harmony import */ var _installation_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./installation.component */ "./demo/src/installation.component.ts");
/* harmony import */ var _invisible_recaptcha_demo_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./invisible-recaptcha-demo.component */ "./demo/src/invisible-recaptcha-demo.component.ts");
/* harmony import */ var _re_captcha_2_demo_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./re-captcha-2-demo.component */ "./demo/src/re-captcha-2-demo.component.ts");
/* harmony import */ var _re_captcha_3_demo_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./re-captcha-3-demo.component */ "./demo/src/re-captcha-3-demo.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var DemoModule = /** @class */ (function () {
    function DemoModule() {
    }
    DemoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
                _projects_ngx_captcha_lib_src_lib__WEBPACK_IMPORTED_MODULE_4__["NgxCaptchaModule"],
                _demo_routes__WEBPACK_IMPORTED_MODULE_6__["DemoRoutes"]
            ],
            declarations: [
                _demo_component__WEBPACK_IMPORTED_MODULE_5__["DemoComponent"],
                _invisible_recaptcha_demo_component__WEBPACK_IMPORTED_MODULE_8__["InvisibleReCaptchaDemoComponent"],
                _re_captcha_2_demo_component__WEBPACK_IMPORTED_MODULE_9__["ReCaptcha2DemoComponent"],
                _installation_component__WEBPACK_IMPORTED_MODULE_7__["InstallationComponent"],
                _re_captcha_3_demo_component__WEBPACK_IMPORTED_MODULE_10__["ReCaptcha3DemoComponent"]
            ],
            bootstrap: [_demo_component__WEBPACK_IMPORTED_MODULE_5__["DemoComponent"]]
        })
    ], DemoModule);
    return DemoModule;
}());



/***/ }),

/***/ "./demo/src/demo.routes.ts":
/*!*********************************!*\
  !*** ./demo/src/demo.routes.ts ***!
  \*********************************/
/*! exports provided: DemoRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoRoutes", function() { return DemoRoutes; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _installation_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./installation.component */ "./demo/src/installation.component.ts");
/* harmony import */ var _invisible_recaptcha_demo_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./invisible-recaptcha-demo.component */ "./demo/src/invisible-recaptcha-demo.component.ts");
/* harmony import */ var _re_captcha_2_demo_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./re-captcha-2-demo.component */ "./demo/src/re-captcha-2-demo.component.ts");
/* harmony import */ var _re_captcha_3_demo_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./re-captcha-3-demo.component */ "./demo/src/re-captcha-3-demo.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var DemoRoutes = /** @class */ (function () {
    function DemoRoutes() {
    }
    DemoRoutes = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot([
                    {
                        path: '', component: _re_captcha_2_demo_component__WEBPACK_IMPORTED_MODULE_4__["ReCaptcha2DemoComponent"]
                    },
                    {
                        path: 'installation', component: _installation_component__WEBPACK_IMPORTED_MODULE_2__["InstallationComponent"]
                    },
                    {
                        path: 'invisible', component: _invisible_recaptcha_demo_component__WEBPACK_IMPORTED_MODULE_3__["InvisibleReCaptchaDemoComponent"]
                    },
                    {
                        path: 'recaptcha2', component: _re_captcha_2_demo_component__WEBPACK_IMPORTED_MODULE_4__["ReCaptcha2DemoComponent"]
                    },
                    {
                        path: 'recaptcha3', component: _re_captcha_3_demo_component__WEBPACK_IMPORTED_MODULE_5__["ReCaptcha3DemoComponent"]
                    },
                ])
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], DemoRoutes);
    return DemoRoutes;
}());



/***/ }),

/***/ "./demo/src/installation.component.html":
/*!**********************************************!*\
  !*** ./demo/src/installation.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<h3>Supported versions</h3>\r\n\r\n<div>For Angular 6 use ngx-captcha on version 5.0.0 or lower</div>\r\n<div>For Angular 7 use ngx-captcha on version 6.0.0 or higher</div>\r\n\r\n<h2 class=\"mt-4\">Installation</h2>\r\n\r\n\r\n<h5 class=\"mt-4\">npm</h5>\r\n\r\n<pre class=\"mt-2\">\r\n    <code [innerText]=\"installCode\"></code>\r\n</pre>\r\n\r\n<h5 class=\"mt-4\">Import\r\n    <strong>NgxCaptchaModule</strong> module \r\n</h5>\r\n\r\n<pre class=\"mt-2\">\r\n    <code [innerText]=\"importModuleCode\"></code>\r\n</pre>\r\n\r\n<h5 class=\"mt-4\">Use</h5>\r\n\r\n<pre class=\"mt-2\">\r\n    <code [innerText]=\"templateCode\"></code>\r\n</pre>\r\n\r\n<pre class=\"mt-2\">\r\n    <code [innerText]=\"tsCode\"></code>\r\n</pre>\r\n"

/***/ }),

/***/ "./demo/src/installation.component.ts":
/*!********************************************!*\
  !*** ./demo/src/installation.component.ts ***!
  \********************************************/
/*! exports provided: InstallationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstallationComponent", function() { return InstallationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var InstallationComponent = /** @class */ (function () {
    function InstallationComponent() {
        this.installCode = "npm install ngx-captcha --save";
        this.importModuleCode = "import { NgModule } from '@angular/core';\nimport { NgxCaptchaModule } from 'ngx-captcha';\n\n@NgModule({\n  imports: [\n    ....,\n    NgxCaptchaModule\n  })\n\nexport class AppModule { }\n\n";
        this.templateCode = "<form [formGroup]=\"aFormGroup\">\n  <ngx-recaptcha2\n    [siteKey]=\"siteKey\"\n    [size]=\"size\"\n    [hl]=\"lang\"\n    [theme]=\"theme\"\n    [type]=\"type\"\n    [useGlobalDomain]=\"false\"\n    (reset)=\"handleReset()\"\n    (expire)=\"handleExpire()\"\n    (load)=\"handleLoad()\"\n    (success)=\"handleSuccess($event)\"\n    formControlName=\"recaptcha\">\n  </ngx-recaptcha2>\n</form>\n\n";
        this.tsCode = "export class YourComponent implements OnInit {\n    protected aFormGroup: FormGroup;\n\n    constructor(private formBuilder: FormBuilder) {}\n\n    ngOnInit() {\n      this.aFormGroup = this.formBuilder.group({\n        recaptcha: ['', Validators.required]\n      });\n    }\n  }\n";
    }
    InstallationComponent.prototype.ngAfterViewInit = function () {
        this.highlight();
    };
    InstallationComponent.prototype.highlight = function () {
        var highlightBlocks = document.getElementsByTagName('code');
        for (var i = 0; i < highlightBlocks.length; i++) {
            var block = highlightBlocks[i];
            hljs.highlightBlock(block);
        }
    };
    InstallationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./installation.component.html */ "./demo/src/installation.component.html"),
        })
    ], InstallationComponent);
    return InstallationComponent;
}());



/***/ }),

/***/ "./demo/src/invisible-recaptcha-demo.component.html":
/*!**********************************************************!*\
  !*** ./demo/src/invisible-recaptcha-demo.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row featurette\">\r\n    <div class=\"col-md-7\">\r\n        <h2 class=\"featurette-heading\">Invisible reCAPTCHA\r\n        </h2>\r\n\r\n        <p class=\"mt-4\">\r\n            This is a completely dynamic implementation - try changing properties to immediately see changes in rendered captcha.\r\n        </p>\r\n\r\n        <table class=\"table mt-3\">\r\n            <thead>\r\n                <tr>\r\n                    <th>Property</th>\r\n                    <th>Values</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr>\r\n                    <td>Badge</td>\r\n                    <td>\r\n                        <span style=\"cursor:pointer\" class=\"text-primary\" (click)=\"changeBadge('bottomright')\">Bottomright</span> |\r\n                        <span style=\"cursor:pointer\" class=\"text-primary\" (click)=\"changeBadge('bottomleft')\">Bottomleft</span> |\r\n                        <span style=\"cursor:pointer\" class=\"text-primary\" (click)=\"changeBadge('inline')\">Inline</span>\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td>Type</td>\r\n                    <td>\r\n                        <span style=\"cursor:pointer\" class=\"text-primary\" (click)=\"changeType('image')\">Image</span> |\r\n                        <span style=\"cursor:pointer\" class=\"text-primary\" (click)=\"changeType('audio')\">Audio</span>\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td>Theme</td>\r\n                    <td>\r\n                        <span style=\"cursor:pointer\" class=\"text-primary\" (click)=\"changeTheme('light')\">Light</span> |\r\n                        <span style=\"cursor:pointer\" class=\"text-primary\" (click)=\"changeTheme('dark')\">Dark</span>\r\n                    </td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n\r\n        <table class=\"table mt-3\">\r\n            <thead>\r\n                <tr>\r\n                    <th>Method</th>\r\n                    <th>Description</th>\r\n                    <th>Action</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr>\r\n                    <td>execute</td>\r\n                    <td>Verifies captcha on the backround and returns captcha response</td>\r\n                    <td>\r\n                        <button class=\"btn btn-info\" (click)=\"execute()\">Try</button>\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td>getCurrentResponse</td>\r\n                    <td>Gets the latest submitted response</td>\r\n                    <td>\r\n                        <button class=\"btn btn-info\" (click)=\"getCurrentResponse()\">Try</button>\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td>getResponse</td>\r\n                    <td>Gets captcha response</td>\r\n                    <td>\r\n                        <button class=\"btn btn-info\" (click)=\"getResponse()\">Try</button>\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td>reset</td>\r\n                    <td>Resets captcha (does not reload script)</td>\r\n                    <td>\r\n                        <button class=\"btn btn-info\" (click)=\"reset()\">Try</button>\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td>reload</td>\r\n                    <td>Unsets global script & reloads captcha</td>\r\n                    <td>\r\n                        <button class=\"btn btn-info\" (click)=\"reload()\">Try</button>\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td>getCaptchaId</td>\r\n                    <td>Gets Id of captcha</td>\r\n                    <td>\r\n                        <button class=\"btn btn-info\" (click)=\"getCaptchaId()\">Try</button>\r\n                    </td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n    <div class=\"col-md-5\">\r\n        <h4>Live example</h4>\r\n        <ngx-invisible-recaptcha #captchaElem\r\n                                 [siteKey]=\"siteKey\"\r\n                                 (reset)=\"handleReset()\"\r\n                                 (ready)=\"handleReady()\"\r\n                                 (load)=\"handleLoad()\"\r\n                                 (success)=\"handleSuccess($event)\"\r\n                                 [useGlobalDomain]=\"false\"\r\n                                 [type]=\"type\"\r\n                                 [theme]=\"theme\"\r\n                                 [badge]=\"badge\"\r\n                                 [ngModel]=\"recaptcha\"\r\n                                 [ngModelOptions]=\"{ standalone: true }\">\r\n        </ngx-invisible-recaptcha>\r\n\r\n        <h4 class=\"mt-3\">Status</h4>\r\n        <div>\r\n            <ul class=\"alt\">\r\n                <li>\r\n                    <span>Loaded: </span>\r\n                    <i *ngIf=\"!captchaIsLoaded\" class=\"fas fa-times text-danger\"></i>\r\n                    <i *ngIf=\"captchaIsLoaded\" class=\"fas fa-check text-success\"></i>\r\n                </li>\r\n                <li>\r\n                    <span>Captcha ready: </span>\r\n                    <i *ngIf=\"!captchaIsReady\" class=\"fas fa-times text-danger\"></i>\r\n                    <i *ngIf=\"captchaIsReady\" class=\"fas fa-check text-success\"></i>\r\n                </li>\r\n                <li>\r\n                    <span>Captcha success: </span>\r\n                    <i *ngIf=\"!captchaSuccess\" class=\"fas fa-times text-danger\"></i>\r\n                    <i *ngIf=\"captchaSuccess\" class=\"fas fa-check text-success\"></i>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n\r\n        <h4 class=\"mt-3\">Code</h4>\r\n\r\n        <pre class=\"mt-2\">\r\n            <code [innerText]=\"exampleCode\"></code>\r\n        </pre>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./demo/src/invisible-recaptcha-demo.component.ts":
/*!********************************************************!*\
  !*** ./demo/src/invisible-recaptcha-demo.component.ts ***!
  \********************************************************/
/*! exports provided: InvisibleReCaptchaDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvisibleReCaptchaDemoComponent", function() { return InvisibleReCaptchaDemoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _projects_ngx_captcha_lib_src_public_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../projects/ngx-captcha-lib/src/public_api */ "./projects/ngx-captcha-lib/src/public_api.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InvisibleReCaptchaDemoComponent = /** @class */ (function () {
    function InvisibleReCaptchaDemoComponent(cdr) {
        this.cdr = cdr;
        this.siteKey = '6LckpEgUAAAAACPcjmrg1Es-GnTltKx0MP61FBO8';
        this.exampleCode = "<ngx-invisible-recaptcha #captchaElem\n  [siteKey]=\"siteKey\"\n  (reset)=\"handleReset()\"\n  (ready)=\"handleReady()\"\n  (load)=\"handleLoad()\"\n  (success)=\"handleSuccess($event)\"\n  [useGlobalDomain]=\"false\"\n  [theme]=\"theme\"\n  [type]=\"type\"\n  [badge]=\"badge\"\n  [ngModel]=\"recaptcha\"\n  [ngModelOptions]=\"{ standalone: true }\">\n</ngx-invisible-recaptcha>\n";
        this.captchaIsLoaded = false;
        this.captchaSuccess = false;
        this.captchaIsReady = false;
        this.badge = 'inline';
        this.theme = 'light';
        this.recaptcha = null;
    }
    InvisibleReCaptchaDemoComponent.prototype.ngAfterViewInit = function () {
        this.captchaIsLoaded = true;
        this.cdr.detectChanges();
        this.highlight();
    };
    InvisibleReCaptchaDemoComponent.prototype.execute = function () {
        this.captchaElem.execute();
    };
    InvisibleReCaptchaDemoComponent.prototype.handleReset = function () {
        this.captchaSuccess = false;
        this.captchaResponse = undefined;
    };
    InvisibleReCaptchaDemoComponent.prototype.handleSuccess = function (captchaResponse) {
        this.captchaSuccess = true;
        this.captchaResponse = captchaResponse;
    };
    InvisibleReCaptchaDemoComponent.prototype.handleLoad = function () {
        this.captchaIsLoaded = true;
    };
    InvisibleReCaptchaDemoComponent.prototype.handleReady = function () {
        this.captchaIsReady = true;
    };
    InvisibleReCaptchaDemoComponent.prototype.changeBadge = function (badge) {
        if (badge === void 0) { badge = 'bottomright'; }
        this.badge = badge;
    };
    InvisibleReCaptchaDemoComponent.prototype.changeType = function (type) {
        this.type = type;
    };
    InvisibleReCaptchaDemoComponent.prototype.getResponse = function () {
        var response = this.captchaElem.getResponse();
        if (!response) {
            alert("There is no response from grecaptcha script - try using 'getCurrentResponse' method or subscribe to 'success' event");
        }
        else {
            alert(response);
        }
    };
    InvisibleReCaptchaDemoComponent.prototype.reload = function () {
        this.captchaElem.reloadCaptcha();
    };
    InvisibleReCaptchaDemoComponent.prototype.getCaptchaId = function () {
        alert(this.captchaElem.getCaptchaId());
    };
    InvisibleReCaptchaDemoComponent.prototype.reset = function () {
        this.captchaElem.resetCaptcha();
    };
    InvisibleReCaptchaDemoComponent.prototype.getCurrentResponse = function () {
        var currentResponse = this.captchaElem.getCurrentResponse();
        if (!currentResponse) {
            alert('There is no current response - have you submitted captcha?');
        }
        else {
            alert(currentResponse);
        }
    };
    InvisibleReCaptchaDemoComponent.prototype.changeTheme = function (theme) {
        this.theme = theme;
    };
    InvisibleReCaptchaDemoComponent.prototype.highlight = function () {
        var highlightBlocks = document.getElementsByTagName('code');
        for (var i = 0; i < highlightBlocks.length; i++) {
            var block = highlightBlocks[i];
            hljs.highlightBlock(block);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('captchaElem'),
        __metadata("design:type", _projects_ngx_captcha_lib_src_public_api__WEBPACK_IMPORTED_MODULE_1__["InvisibleReCaptchaComponent"])
    ], InvisibleReCaptchaDemoComponent.prototype, "captchaElem", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('langInput'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], InvisibleReCaptchaDemoComponent.prototype, "langInput", void 0);
    InvisibleReCaptchaDemoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-invisible-recaptcha-demo',
            template: __webpack_require__(/*! ./invisible-recaptcha-demo.component.html */ "./demo/src/invisible-recaptcha-demo.component.html"),
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], InvisibleReCaptchaDemoComponent);
    return InvisibleReCaptchaDemoComponent;
}());



/***/ }),

/***/ "./demo/src/re-captcha-2-demo.component.html":
/*!***************************************************!*\
  !*** ./demo/src/re-captcha-2-demo.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"aFormGroup\">\r\n  <div class=\"row featurette\">\r\n      <div class=\"col-md-7\">\r\n          <h2 class=\"featurette-heading\">Google reCAPTCHA2\r\n          </h2>\r\n\r\n          <p class=\"mt-4\">\r\n              This is a completely dynamic implementation - try changing properties to immediately see changes in rendered captcha.\r\n          </p>\r\n\r\n          <table class=\"table mt-3\">\r\n              <thead>\r\n                  <tr>\r\n                      <th>Property</th>\r\n                      <th>Values</th>\r\n                  </tr>\r\n              </thead>\r\n              <tbody>\r\n                  <tr>\r\n                      <td>Theme</td>\r\n                      <td>\r\n                          <span style=\"cursor:pointer\" class=\"text-primary\" (click)=\"changeTheme('light')\">Light</span> |\r\n                          <span style=\"cursor:pointer\" class=\"text-primary\" (click)=\"changeTheme('dark')\">Dark</span>\r\n                      </td>\r\n                  </tr>\r\n                  <tr>\r\n                      <td>Language</td>\r\n                      <td>\r\n                          <div class=\"input-group\">\r\n                              <input type=\"text\" class=\"form-control\" placeholder=\"Culture code (i.e. 'en', 'es')\" #langInput [value]=\"lang\">\r\n                              <div class=\"input-group-append\">\r\n                                  <button class=\"btn btn-info\" (click)=\"setLanguage()\">Set</button>\r\n                              </div>\r\n                          </div>\r\n                      </td>\r\n                  </tr>\r\n                  <tr>\r\n                      <td>Size</td>\r\n                      <td>\r\n                          <span style=\"cursor:pointer\" class=\"text-primary\" (click)=\"changeSize('compact')\">Compact</span> |\r\n                          <span style=\"cursor:pointer\" class=\"text-primary\" (click)=\"changeSize('normal')\">Normal</span>\r\n                      </td>\r\n                  </tr>\r\n                  <tr>\r\n                      <td>Type</td>\r\n                      <td>\r\n                          <span style=\"cursor:pointer\" class=\"text-primary\" (click)=\"changeType('image')\">Image</span> |\r\n                          <span style=\"cursor:pointer\" class=\"text-primary\" (click)=\"changeType('audio')\">Audio</span>\r\n                      </td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>Use global domain</td>\r\n                    <td>\r\n                        <span style=\"cursor:pointer\" class=\"text-primary\" (click)=\"setUseGlobalDomain(true)\">Yes</span> |\r\n                        <span style=\"cursor:pointer\" class=\"text-primary\" (click)=\"setUseGlobalDomain(false)\">No</span>\r\n                    </td>\r\n                </tr>\r\n              </tbody>\r\n          </table>\r\n\r\n          <table class=\"table mt-3\">\r\n              <thead>\r\n                  <tr>\r\n                      <th>Method</th>\r\n                      <th>Description</th>\r\n                      <th>Action</th>\r\n                  </tr>\r\n              </thead>\r\n              <tbody>\r\n                  <tr>\r\n                      <td>getCurrentResponse</td>\r\n                      <td>Gets the latest submitted response</td>\r\n                      <td>\r\n                          <button class=\"btn btn-info\" (click)=\"getCurrentResponse()\">Try</button>\r\n                      </td>\r\n                  </tr>\r\n                  <tr>\r\n                      <td>getResponse</td>\r\n                      <td>Gets captcha response</td>\r\n                      <td>\r\n                          <button class=\"btn btn-info\" (click)=\"getResponse()\">Try</button>\r\n                      </td>\r\n                  </tr>\r\n                  <tr>\r\n                      <td>reset</td>\r\n                      <td>Resets captcha (does not reload script)</td>\r\n                      <td>\r\n                          <button class=\"btn btn-info\" (click)=\"reset()\">Try</button>\r\n                      </td>\r\n                  </tr>\r\n                  <tr>\r\n                      <td>reload</td>\r\n                      <td>Unsets global script & reloads captcha</td>\r\n                      <td>\r\n                          <button class=\"btn btn-info\" (click)=\"reload()\">Try</button>\r\n                      </td>\r\n                  </tr>\r\n                  <tr>\r\n                      <td>getCaptchaId</td>\r\n                      <td>Gets Id of captcha</td>\r\n                      <td>\r\n                          <button class=\"btn btn-info\" (click)=\"getCaptchaId()\">Try</button>\r\n                      </td>\r\n                  </tr>\r\n              </tbody>\r\n          </table>\r\n      </div>\r\n      <div class=\"col-md-5\">\r\n          <h4>Live example</h4>\r\n          <ngx-recaptcha2 #captchaElem\r\n                          [siteKey]=\"siteKey\"\r\n                          (reset)=\"handleReset()\"\r\n                          (expire)=\"handleExpire()\"\r\n                          (load)=\"handleLoad()\"\r\n                          (success)=\"handleSuccess($event)\"\r\n                          [useGlobalDomain]=\"useGlobalDomain\"\r\n                          [size]=\"size\"\r\n                          [hl]=\"lang\"\r\n                          [theme]=\"theme\"\r\n                          [type]=\"type\"\r\n                          formControlName=\"recaptcha\">\r\n          </ngx-recaptcha2>\r\n\r\n          <h4 class=\"mt-3\">Status</h4>\r\n          <div>\r\n              <ul class=\"alt\">\r\n                  <li>\r\n                      <span>Loaded: </span>\r\n                      <i *ngIf=\"!captchaIsLoaded\" class=\"fas fa-times text-danger\"></i>\r\n                      <i *ngIf=\"captchaIsLoaded\" class=\"fas fa-check text-success\"></i>\r\n                  </li>\r\n                  <li>\r\n                      <span>Captcha success: </span>\r\n                      <i *ngIf=\"!captchaSuccess\" class=\"fas fa-times text-danger\"></i>\r\n                      <i *ngIf=\"captchaSuccess\" class=\"fas fa-check text-success\"></i>\r\n                  </li>\r\n                  <li>\r\n                      <span>Captcha expired: </span>\r\n                      <i *ngIf=\"!captchaIsExpired\" class=\"fas fa-times text-danger\"></i>\r\n                      <i *ngIf=\"captchaIsExpired\" class=\"fas fa-check text-success\"></i>\r\n                  </li>\r\n              </ul>\r\n          </div>\r\n\r\n          <h4 class=\"mt-3\">Code</h4>\r\n\r\n          <pre class=\"mt-2\">\r\n              <code [innerText]=\"exampleCode\"></code>\r\n              <code [innerText]=\"exampleTsCode\"></code>\r\n          </pre>\r\n           \r\n      </div>\r\n  </div>\r\n</form>\r\n"

/***/ }),

/***/ "./demo/src/re-captcha-2-demo.component.ts":
/*!*************************************************!*\
  !*** ./demo/src/re-captcha-2-demo.component.ts ***!
  \*************************************************/
/*! exports provided: ReCaptcha2DemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReCaptcha2DemoComponent", function() { return ReCaptcha2DemoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _projects_ngx_captcha_lib_src_public_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../projects/ngx-captcha-lib/src/public_api */ "./projects/ngx-captcha-lib/src/public_api.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ReCaptcha2DemoComponent = /** @class */ (function () {
    function ReCaptcha2DemoComponent(formBuilder) {
        this.formBuilder = formBuilder;
        this.siteKey = '6LcvoUgUAAAAAJJbhcXvLn3KgG-pyULLusaU4mL1';
        this.installCode = "\n  npm install ngx-captcha";
        this.importModuleCode = "\nimport { NgModule } from '@angular/core';\nimport { NgxCaptchaModule } from 'ngx-captcha';\n\n@NgModule({\n  imports: [\n    NgxCaptchaModule\n  })\n\n  export class AppModule { }";
        this.exampleCode = "<form [formGroup]=\"aFormGroup\">\n  <ngx-recaptcha2 #captchaElem\n    [siteKey]=\"siteKey\"\n    (reset)=\"handleReset()\"\n    (expire)=\"handleExpire()\"\n    (load)=\"handleLoad()\"\n    (success)=\"handleSuccess($event)\"\n    [useGlobalDomain]=\"false\"\n    [size]=\"size\"\n    [hl]=\"lang\"\n    [theme]=\"theme\"\n    [type]=\"type\"\n    formControlName=\"recaptcha\">\n  </ngx-recaptcha2>\n</form>\n";
        this.exampleTsCode = "class YourComponent implements OnInit {\n    public aFormGroup: FormGroup;\n\n    constructor(\n      private formBuilder: FormBuilder) {}\n\n    ngOnInit() {\n      this.aFormGroup = this.formBuilder.group({\n        recaptcha: ['', Validators.required]\n      });\n    }\n  }\n  ";
        this.captchaIsLoaded = false;
        this.captchaSuccess = false;
        this.captchaIsExpired = false;
        this.theme = 'light';
        this.size = 'normal';
        this.lang = 'en';
        this.useGlobalDomain = false;
    }
    ReCaptcha2DemoComponent.prototype.ngOnInit = function () {
        this.aFormGroup = this.formBuilder.group({
            recaptcha: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    ReCaptcha2DemoComponent.prototype.ngAfterViewInit = function () {
        this.highlight();
    };
    ReCaptcha2DemoComponent.prototype.handleReset = function () {
        this.captchaSuccess = false;
        this.captchaResponse = undefined;
        this.captchaIsExpired = false;
    };
    ReCaptcha2DemoComponent.prototype.handleSuccess = function (captchaResponse) {
        this.captchaSuccess = true;
        this.captchaResponse = captchaResponse;
        this.captchaIsExpired = false;
    };
    ReCaptcha2DemoComponent.prototype.handleLoad = function () {
        this.captchaIsLoaded = true;
        this.captchaIsExpired = false;
    };
    ReCaptcha2DemoComponent.prototype.handleExpire = function () {
        this.captchaSuccess = false;
        this.captchaIsExpired = true;
    };
    ReCaptcha2DemoComponent.prototype.changeTheme = function (theme) {
        this.theme = theme;
    };
    ReCaptcha2DemoComponent.prototype.changeSize = function (size) {
        this.size = size;
    };
    ReCaptcha2DemoComponent.prototype.changeType = function (type) {
        this.type = type;
    };
    ReCaptcha2DemoComponent.prototype.setLanguage = function () {
        this.lang = this.langInput.nativeElement.value;
    };
    ReCaptcha2DemoComponent.prototype.setUseGlobalDomain = function (use) {
        this.useGlobalDomain = use;
    };
    ReCaptcha2DemoComponent.prototype.getCurrentResponse = function () {
        var currentResponse = this.captchaElem.getCurrentResponse();
        if (!currentResponse) {
            alert('There is no current response - have you submitted captcha?');
        }
        else {
            alert(currentResponse);
        }
    };
    ReCaptcha2DemoComponent.prototype.getResponse = function () {
        var response = this.captchaElem.getResponse();
        if (!response) {
            alert('There is no response - have you submitted captcha?');
        }
        else {
            alert(response);
        }
    };
    ReCaptcha2DemoComponent.prototype.reload = function () {
        this.captchaElem.reloadCaptcha();
    };
    ReCaptcha2DemoComponent.prototype.getCaptchaId = function () {
        alert(this.captchaElem.getCaptchaId());
    };
    ReCaptcha2DemoComponent.prototype.reset = function () {
        this.captchaElem.resetCaptcha();
    };
    ReCaptcha2DemoComponent.prototype.highlight = function () {
        var highlightBlocks = document.getElementsByTagName('code');
        for (var i = 0; i < highlightBlocks.length; i++) {
            var block = highlightBlocks[i];
            hljs.highlightBlock(block);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('captchaElem'),
        __metadata("design:type", _projects_ngx_captcha_lib_src_public_api__WEBPACK_IMPORTED_MODULE_1__["ReCaptcha2Component"])
    ], ReCaptcha2DemoComponent.prototype, "captchaElem", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('langInput'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ReCaptcha2DemoComponent.prototype, "langInput", void 0);
    ReCaptcha2DemoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-recaptcha-2-demo',
            template: __webpack_require__(/*! ./re-captcha-2-demo.component.html */ "./demo/src/re-captcha-2-demo.component.html")
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], ReCaptcha2DemoComponent);
    return ReCaptcha2DemoComponent;
}());



/***/ }),

/***/ "./demo/src/re-captcha-3-demo.component.html":
/*!***************************************************!*\
  !*** ./demo/src/re-captcha-3-demo.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row featurette\">\r\n    <div class=\"col-md-7\">\r\n        <h2 class=\"featurette-heading\">reCaptcha v3\r\n        </h2>\r\n\r\n        <p class=\"mt-4\">\r\n            This is the implementation of <em>beta</em> version of google reCaptcha v3 as per following documentation:\r\n            <a href=\"https://developers.google.com/recaptcha/docs/v3\">https://developers.google.com/recaptcha/docs/v3</a>\r\n        </p>\r\n\r\n        <p class=\"mt-3\">\r\n            First you need to inject the <em></em> class in your component / service and then use <em>Execute</em>\r\n            method with your action. Once you have the token, you need to verify it on your backend to get meaningful\r\n            results. See official google documentation for more details.\r\n        </p>\r\n\r\n        <pre class=\"mt-2\">\r\n            <code [innerText]=\"constructorCode\"></code>\r\n            <code [innerText]=\"methodCode\"></code>\r\n        </pre>\r\n\r\n    </div>\r\n\r\n    <div class=\"col-md-5\">\r\n        <h4>Live example</h4>\r\n\r\n        <table class=\"table mt-3\">\r\n            <tbody>\r\n                <tr>\r\n                    <td>Site key</td>\r\n                    <td>\r\n                        <div class=\"input-group\">\r\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Your site key\" [(ngModel)]=\"siteKey\">\r\n                        </div>\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td>Action</td>\r\n                    <td>\r\n                        <div class=\"input-group\">\r\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Action\" [(ngModel)]=\"action\">\r\n                        </div>\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td colspan=\"2\">\r\n                        <button class=\"btn btn-info\" (click)=\"execute()\">Execute</button>\r\n                    </td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n\r\n        <h4>Your token: </h4>\r\n\r\n        <div class=\"mt-2\">\r\n            <div *ngIf=\"error\" class=\"color-red\">\r\n                {{ error }}\r\n            </div>\r\n            <div *ngIf=\"!token\">\r\n                Fill in your site key and action to see your token\r\n            </div>\r\n            <div *ngIf=\"token\" style=\"word-wrap: break-word\">\r\n                {{ token }}\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./demo/src/re-captcha-3-demo.component.ts":
/*!*************************************************!*\
  !*** ./demo/src/re-captcha-3-demo.component.ts ***!
  \*************************************************/
/*! exports provided: ReCaptcha3DemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReCaptcha3DemoComponent", function() { return ReCaptcha3DemoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _projects_ngx_captcha_lib_src_public_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../projects/ngx-captcha-lib/src/public_api */ "./projects/ngx-captcha-lib/src/public_api.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ReCaptcha3DemoComponent = /** @class */ (function () {
    function ReCaptcha3DemoComponent(reCaptchaV3Service, scriptService) {
        this.reCaptchaV3Service = reCaptchaV3Service;
        this.scriptService = scriptService;
        this.siteKey = '6Ldb528UAAAAAMD7bdsxQz2gQSl-Jb-kGTyAHThi';
        this.action = 'homepage';
        this.constructorCode = "\n  import { ReCaptchaV3Service } from 'ngx-captcha';\n\n  constructor(\n    private reCaptchaV3Service: ReCaptchaV3Service\n  ) { }\n  ";
        this.methodCode = "\n  this.reCaptchaV3Service.execute(this.siteKey, 'homepage', (token) => {\n    console.log('This is your token: ', token);\n  }, {\n    useGlobalDomain: false // optional\n  });\n  ";
    }
    ReCaptcha3DemoComponent.prototype.ngOnInit = function () {
    };
    ReCaptcha3DemoComponent.prototype.ngAfterViewInit = function () {
        this.highlight();
    };
    ReCaptcha3DemoComponent.prototype.execute = function () {
        var _this = this;
        this.token = undefined;
        if (!this.siteKey) {
            this.error = 'Site key is not set';
            return;
        }
        if (!this.action) {
            this.error = 'Action is not set';
            return;
        }
        // clean script to make sure siteKey is set correctly (because previous script could be incorrect)
        this.scriptService.cleanup();
        this.error = undefined;
        this.reCaptchaV3Service.execute(this.siteKey, 'reCaptcha3DemoPage', function (token) {
            _this.token = token;
            console.log('Your token is: ', token);
        }, {
            useGlobalDomain: false
        });
    };
    ReCaptcha3DemoComponent.prototype.highlight = function () {
        var highlightBlocks = document.getElementsByTagName('code');
        for (var i = 0; i < highlightBlocks.length; i++) {
            var block = highlightBlocks[i];
            hljs.highlightBlock(block);
        }
    };
    ReCaptcha3DemoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-recaptcha-3-demo',
            template: __webpack_require__(/*! ./re-captcha-3-demo.component.html */ "./demo/src/re-captcha-3-demo.component.html"),
        }),
        __metadata("design:paramtypes", [_projects_ngx_captcha_lib_src_public_api__WEBPACK_IMPORTED_MODULE_1__["ReCaptchaV3Service"],
            _projects_ngx_captcha_lib_src_public_api__WEBPACK_IMPORTED_MODULE_1__["ScriptService"]])
    ], ReCaptcha3DemoComponent);
    return ReCaptcha3DemoComponent;
}());



/***/ }),

/***/ "./projects/ngx-captcha-lib/src/lib/components/base-recaptcha.component.ts":
/*!*********************************************************************************!*\
  !*** ./projects/ngx-captcha-lib/src/lib/components/base-recaptcha.component.ts ***!
  \*********************************************************************************/
/*! exports provided: BaseReCaptchaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseReCaptchaComponent", function() { return BaseReCaptchaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BaseReCaptchaComponent = /** @class */ (function () {
    function BaseReCaptchaComponent(renderer, zone, injector, scriptService) {
        this.renderer = renderer;
        this.zone = zone;
        this.injector = injector;
        this.scriptService = scriptService;
        /**
        * Prefix of the captcha element
        */
        this.captchaElemPrefix = 'ngx_captcha_id_';
        /**
         * Indicates if global domain 'recaptcha.net' should be used instead of default domain ('google.com')
         */
        this.useGlobalDomain = false;
        /**
        * Type
        */
        this.type = 'image';
        /**
        * Tab index
        */
        this.tabIndex = 0;
        /**
        * Called when captcha receives successful response.
        * Captcha response token is passed to event.
        */
        this.success = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
        * Called when captcha is loaded. Event receives id of the captcha
        */
        this.load = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
        * Called when captcha is reset.
        */
        this.reset = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
        * Called when captcha is loaded & ready. I.e. when you need to execute captcha on component load.
        */
        this.ready = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
        * Indicates if captcha should be set on load
        */
        this.setupAfterLoad = false;
        /**
        * If enabled, captcha will reset after receiving success response. This is useful
        * when invisible captcha need to be resolved multiple times on same page
        */
        this.resetCaptchaAfterSuccess = false;
        /**
        * Indicates if captcha is loaded
        */
        this.isLoaded = false;
    }
    BaseReCaptchaComponent.prototype.ngAfterViewInit = function () {
        this.control = this.injector.get(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControl"]).control;
    };
    BaseReCaptchaComponent.prototype.ngOnChanges = function (changes) {
        // cleanup scripts if language changed because they need to be reloaded
        if (changes && changes.hl) {
            // cleanup scripts when language changes
            if (!changes.hl.firstChange && (changes.hl.currentValue !== changes.hl.previousValue)) {
                this.scriptService.cleanup();
            }
        }
        if (changes && changes.useGlobalDomain) {
            // cleanup scripts when domain changes
            if (!changes.useGlobalDomain.firstChange && (changes.useGlobalDomain.currentValue !== changes.useGlobalDomain.previousValue)) {
                this.scriptService.cleanup();
            }
        }
        this.setupComponent();
    };
    /**
    * Gets captcha response as per reCaptcha docs
    */
    BaseReCaptchaComponent.prototype.getResponse = function () {
        return this.reCaptchaApi.getResponse(this.captchaId);
    };
    /**
    * Gets Id of captcha widget
    */
    BaseReCaptchaComponent.prototype.getCaptchaId = function () {
        return this.captchaId;
    };
    /**
    * Resets captcha
    */
    BaseReCaptchaComponent.prototype.resetCaptcha = function () {
        var _this = this;
        this.zone.run(function () {
            // reset captcha using Google js api
            _this.reCaptchaApi.reset();
            // required due to forms
            _this.onChange(undefined);
            _this.onTouched(undefined);
            // trigger reset event
            _this.reset.next();
        });
    };
    /**
    * Gets last submitted captcha response
    */
    BaseReCaptchaComponent.prototype.getCurrentResponse = function () {
        return this.currentResponse;
    };
    /**
    * Reload captcha. Useful when properties (i.e. theme) changed and captcha need to reflect them
    */
    BaseReCaptchaComponent.prototype.reloadCaptcha = function () {
        this.setupComponent();
    };
    BaseReCaptchaComponent.prototype.ensureCaptchaElem = function (captchaElemId) {
        var captchaElem = document.getElementById(captchaElemId);
        if (!captchaElem) {
            throw Error("Captcha element with id '" + captchaElemId + "' was not found");
        }
        // assign captcha alem
        this.captchaElem = captchaElem;
    };
    /**
    * Responsible for instantiating captcha element
    */
    BaseReCaptchaComponent.prototype.renderReCaptcha = function () {
        var _this = this;
        // run outside angular zone due to timeout issues when testing
        // details: https://github.com/Enngage/ngx-captcha/issues/26
        this.zone.runOutsideAngular(function () {
            _this.captchaId = _this.reCaptchaApi.render(_this.captchaElemId, _this.getCaptchaProperties());
            _this.ready.next();
        });
    };
    /**
    * Called when captcha receives response
    * @param callback Callback
    */
    BaseReCaptchaComponent.prototype.handleCallback = function (callback) {
        var _this = this;
        this.currentResponse = callback;
        this.success.next(callback);
        this.zone.run(function () {
            _this.onChange(callback);
            _this.onTouched(callback);
        });
        if (this.resetCaptchaAfterSuccess) {
            this.resetCaptcha();
        }
    };
    BaseReCaptchaComponent.prototype.getPseudoUniqueNumber = function () {
        return new Date().getUTCMilliseconds() + Math.floor(Math.random() * 9999);
    };
    BaseReCaptchaComponent.prototype.setupComponent = function () {
        var _this = this;
        // captcha specific setup
        this.captchaSpecificSetup();
        // create captcha wrapper
        this.createAndSetCaptchaElem();
        this.scriptService.registerCaptchaScript(this.useGlobalDomain, 'explicit', function (grecaptcha) {
            _this.onloadCallback(grecaptcha);
        }, this.hl);
    };
    /**
    * Called when google's recaptcha script is ready
    */
    BaseReCaptchaComponent.prototype.onloadCallback = function (grecapcha) {
        // assign reference to reCaptcha Api once its loaded
        this.reCaptchaApi = grecapcha;
        if (!this.reCaptchaApi) {
            throw Error("ReCaptcha Api was not initialized correctly");
        }
        // loaded flag
        this.isLoaded = true;
        // fire load event
        this.load.next();
        // render captcha
        this.renderReCaptcha();
        // setup component if it was flagged as such
        if (this.setupAfterLoad) {
            this.setupAfterLoad = false;
            this.setupComponent();
        }
    };
    BaseReCaptchaComponent.prototype.generateNewElemId = function () {
        return this.captchaElemPrefix + this.getPseudoUniqueNumber();
    };
    BaseReCaptchaComponent.prototype.createAndSetCaptchaElem = function () {
        // generate new captcha id
        this.captchaElemId = this.generateNewElemId();
        if (!this.captchaElemId) {
            throw Error("Captcha elem Id is not set");
        }
        // remove old html
        this.captchaWrapperElem.nativeElement.innerHTML = '';
        // create new wrapper for captcha
        var newElem = this.renderer.createElement('div');
        newElem.id = this.captchaElemId;
        this.renderer.appendChild(this.captchaWrapperElem.nativeElement, newElem);
        // update captcha elem
        this.ensureCaptchaElem(this.captchaElemId);
    };
    /**
     * To be aligned with the ControlValueAccessor interface we need to implement this method
     * However as we don't want to update the recaptcha, this doesn't need to be implemented
     */
    BaseReCaptchaComponent.prototype.writeValue = function (obj) { };
    /**
     * This method helps us tie together recaptcha and our formControl values
     */
    BaseReCaptchaComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    /**
    * At some point we might be interested whether the user has touched our component
    */
    BaseReCaptchaComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], BaseReCaptchaComponent.prototype, "siteKey", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], BaseReCaptchaComponent.prototype, "useGlobalDomain", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], BaseReCaptchaComponent.prototype, "type", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], BaseReCaptchaComponent.prototype, "hl", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], BaseReCaptchaComponent.prototype, "tabIndex", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], BaseReCaptchaComponent.prototype, "success", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], BaseReCaptchaComponent.prototype, "load", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], BaseReCaptchaComponent.prototype, "reset", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], BaseReCaptchaComponent.prototype, "ready", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('captchaWrapperElem'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], BaseReCaptchaComponent.prototype, "captchaWrapperElem", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('captchaScriptElem'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], BaseReCaptchaComponent.prototype, "captchaScriptElem", void 0);
    return BaseReCaptchaComponent;
}());



/***/ }),

/***/ "./projects/ngx-captcha-lib/src/lib/components/invisible-recaptcha.component.ts":
/*!**************************************************************************************!*\
  !*** ./projects/ngx-captcha-lib/src/lib/components/invisible-recaptcha.component.ts ***!
  \**************************************************************************************/
/*! exports provided: InvisibleReCaptchaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvisibleReCaptchaComponent", function() { return InvisibleReCaptchaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _models_recaptcha_type_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/recaptcha-type.enum */ "./projects/ngx-captcha-lib/src/lib/models/recaptcha-type.enum.ts");
/* harmony import */ var _services_script_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/script.service */ "./projects/ngx-captcha-lib/src/lib/services/script.service.ts");
/* harmony import */ var _base_recaptcha_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./base-recaptcha.component */ "./projects/ngx-captcha-lib/src/lib/components/base-recaptcha.component.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var InvisibleReCaptchaComponent = /** @class */ (function (_super) {
    __extends(InvisibleReCaptchaComponent, _super);
    function InvisibleReCaptchaComponent(renderer, zone, injector, scriptService) {
        var _this = _super.call(this, renderer, zone, injector, scriptService) || this;
        _this.renderer = renderer;
        _this.zone = zone;
        _this.injector = injector;
        _this.scriptService = scriptService;
        /**
         * This size representing invisible captcha
         */
        _this.size = 'invisible';
        /**
         * Theme
         */
        _this.theme = 'light';
        /**
         * Badge
         */
        _this.badge = 'bottomright';
        _this.recaptchaType = _models_recaptcha_type_enum__WEBPACK_IMPORTED_MODULE_2__["ReCaptchaType"].InvisibleReCaptcha;
        return _this;
    }
    InvisibleReCaptchaComponent_1 = InvisibleReCaptchaComponent;
    InvisibleReCaptchaComponent.prototype.ngOnChanges = function (changes) {
        _super.prototype.ngOnChanges.call(this, changes);
    };
    /**
     * Programatically invoke the reCAPTCHA check. Used if the invisible reCAPTCHA is on a div instead of a button.
     */
    InvisibleReCaptchaComponent.prototype.execute = function () {
        var _this = this;
        // execute captcha
        this.zone.runOutsideAngular(function () { return _this.reCaptchaApi.execute(_this.captchaId); });
    };
    InvisibleReCaptchaComponent.prototype.captchaSpecificSetup = function () {
    };
    /**
    * Gets reCaptcha properties
    */
    InvisibleReCaptchaComponent.prototype.getCaptchaProperties = function () {
        var _this = this;
        return {
            'sitekey': this.siteKey,
            'callback': function (response) { return _this.zone.run(function () { return _this.handleCallback(response); }); },
            'badge': this.badge,
            'type': this.type,
            'tabindex': this.tabIndex,
            'size': this.size,
            'theme': this.theme
        };
    };
    var InvisibleReCaptchaComponent_1;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], InvisibleReCaptchaComponent.prototype, "theme", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], InvisibleReCaptchaComponent.prototype, "badge", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], InvisibleReCaptchaComponent.prototype, "hl", void 0);
    InvisibleReCaptchaComponent = InvisibleReCaptchaComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-invisible-recaptcha',
            template: "\n  <div #captchaWrapperElem></div>",
            providers: [
                {
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
                    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return InvisibleReCaptchaComponent_1; }),
                    multi: true,
                }
            ]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"],
            _services_script_service__WEBPACK_IMPORTED_MODULE_3__["ScriptService"]])
    ], InvisibleReCaptchaComponent);
    return InvisibleReCaptchaComponent;
}(_base_recaptcha_component__WEBPACK_IMPORTED_MODULE_4__["BaseReCaptchaComponent"]));



/***/ }),

/***/ "./projects/ngx-captcha-lib/src/lib/components/recaptcha-2.component.ts":
/*!******************************************************************************!*\
  !*** ./projects/ngx-captcha-lib/src/lib/components/recaptcha-2.component.ts ***!
  \******************************************************************************/
/*! exports provided: ReCaptcha2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReCaptcha2Component", function() { return ReCaptcha2Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _models_recaptcha_type_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/recaptcha-type.enum */ "./projects/ngx-captcha-lib/src/lib/models/recaptcha-type.enum.ts");
/* harmony import */ var _services_script_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/script.service */ "./projects/ngx-captcha-lib/src/lib/services/script.service.ts");
/* harmony import */ var _base_recaptcha_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./base-recaptcha.component */ "./projects/ngx-captcha-lib/src/lib/components/base-recaptcha.component.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ReCaptcha2Component = /** @class */ (function (_super) {
    __extends(ReCaptcha2Component, _super);
    function ReCaptcha2Component(renderer, zone, injector, scriptService) {
        var _this = _super.call(this, renderer, zone, injector, scriptService) || this;
        _this.renderer = renderer;
        _this.zone = zone;
        _this.injector = injector;
        _this.scriptService = scriptService;
        /**
        * Name of the global expire callback
        */
        _this.windowOnErrorCallbackProperty = 'ngx_captcha_error_callback';
        /**
        * Name of the global error callback
        */
        _this.windowOnExpireCallbackProperty = 'ngx_captcha_expire_callback';
        /**
         * Theme
         */
        _this.theme = 'light';
        /**
        * Size
        */
        _this.size = 'normal';
        /**
        * Expired callback
        */
        _this.expire = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
        * Error callback
        */
        _this.error = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.recaptchaType = _models_recaptcha_type_enum__WEBPACK_IMPORTED_MODULE_2__["ReCaptchaType"].ReCaptcha2;
        return _this;
    }
    ReCaptcha2Component_1 = ReCaptcha2Component;
    ReCaptcha2Component.prototype.ngOnChanges = function (changes) {
        _super.prototype.ngOnChanges.call(this, changes);
    };
    ReCaptcha2Component.prototype.ngOnDestroy = function () {
        window[this.windowOnErrorCallbackProperty] = {};
        window[this.windowOnExpireCallbackProperty] = {};
    };
    ReCaptcha2Component.prototype.captchaSpecificSetup = function () {
        this.registerCallbacks();
    };
    /**
     * Gets reCaptcha properties
    */
    ReCaptcha2Component.prototype.getCaptchaProperties = function () {
        var _this = this;
        return {
            'sitekey': this.siteKey,
            'callback': function (response) { return _this.zone.run(function () { return _this.handleCallback(response); }); },
            'expired-callback': function () { return _this.zone.run(function () { return _this.handleExpireCallback(); }); },
            'error-callback': function () { return _this.zone.run(function () { return _this.handleErrorCallback(); }); },
            'theme': this.theme,
            'type': this.type,
            'size': this.size,
            'tabindex': this.tabIndex
        };
    };
    /**
     * Registers global callbacks
    */
    ReCaptcha2Component.prototype.registerCallbacks = function () {
        window[this.windowOnErrorCallbackProperty] = this.handleErrorCallback.bind(this);
        window[this.windowOnExpireCallbackProperty] = this.handleExpireCallback.bind(this);
    };
    /**
     * Handles error callback
    */
    ReCaptcha2Component.prototype.handleErrorCallback = function () {
        var _this = this;
        this.zone.run(function () {
            _this.onChange(undefined);
            _this.onTouched(undefined);
        });
        this.error.next();
    };
    /**
     * Handles expired callback
     */
    ReCaptcha2Component.prototype.handleExpireCallback = function () {
        this.expire.next();
        // reset captcha on expire callback
        this.resetCaptcha();
    };
    var ReCaptcha2Component_1;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ReCaptcha2Component.prototype, "theme", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ReCaptcha2Component.prototype, "size", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ReCaptcha2Component.prototype, "hl", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ReCaptcha2Component.prototype, "expire", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ReCaptcha2Component.prototype, "error", void 0);
    ReCaptcha2Component = ReCaptcha2Component_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-recaptcha2',
            template: "\n  <div #captchaWrapperElem></div>",
            providers: [
                {
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
                    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return ReCaptcha2Component_1; }),
                    multi: true,
                }
            ]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"],
            _services_script_service__WEBPACK_IMPORTED_MODULE_3__["ScriptService"]])
    ], ReCaptcha2Component);
    return ReCaptcha2Component;
}(_base_recaptcha_component__WEBPACK_IMPORTED_MODULE_4__["BaseReCaptchaComponent"]));



/***/ }),

/***/ "./projects/ngx-captcha-lib/src/lib/index.ts":
/*!***************************************************!*\
  !*** ./projects/ngx-captcha-lib/src/lib/index.ts ***!
  \***************************************************/
/*! exports provided: BaseReCaptchaComponent, InvisibleReCaptchaComponent, ReCaptcha2Component, ReCaptchaType, ScriptService, ReCaptchaV3Service, NgxCaptchaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_base_recaptcha_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/base-recaptcha.component */ "./projects/ngx-captcha-lib/src/lib/components/base-recaptcha.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseReCaptchaComponent", function() { return _components_base_recaptcha_component__WEBPACK_IMPORTED_MODULE_0__["BaseReCaptchaComponent"]; });

/* harmony import */ var _components_invisible_recaptcha_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/invisible-recaptcha.component */ "./projects/ngx-captcha-lib/src/lib/components/invisible-recaptcha.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InvisibleReCaptchaComponent", function() { return _components_invisible_recaptcha_component__WEBPACK_IMPORTED_MODULE_1__["InvisibleReCaptchaComponent"]; });

/* harmony import */ var _components_recaptcha_2_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/recaptcha-2.component */ "./projects/ngx-captcha-lib/src/lib/components/recaptcha-2.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReCaptcha2Component", function() { return _components_recaptcha_2_component__WEBPACK_IMPORTED_MODULE_2__["ReCaptcha2Component"]; });

/* harmony import */ var _models_recaptcha_type_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./models/recaptcha-type.enum */ "./projects/ngx-captcha-lib/src/lib/models/recaptcha-type.enum.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReCaptchaType", function() { return _models_recaptcha_type_enum__WEBPACK_IMPORTED_MODULE_3__["ReCaptchaType"]; });

/* harmony import */ var _services_script_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/script.service */ "./projects/ngx-captcha-lib/src/lib/services/script.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScriptService", function() { return _services_script_service__WEBPACK_IMPORTED_MODULE_4__["ScriptService"]; });

/* harmony import */ var _services_recaptcha_v3_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/recaptcha_v3.service */ "./projects/ngx-captcha-lib/src/lib/services/recaptcha_v3.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReCaptchaV3Service", function() { return _services_recaptcha_v3_service__WEBPACK_IMPORTED_MODULE_5__["ReCaptchaV3Service"]; });

/* harmony import */ var _ngx_captcha_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ngx-captcha.module */ "./projects/ngx-captcha-lib/src/lib/ngx-captcha.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgxCaptchaModule", function() { return _ngx_captcha_module__WEBPACK_IMPORTED_MODULE_6__["NgxCaptchaModule"]; });










/***/ }),

/***/ "./projects/ngx-captcha-lib/src/lib/models/recaptcha-type.enum.ts":
/*!************************************************************************!*\
  !*** ./projects/ngx-captcha-lib/src/lib/models/recaptcha-type.enum.ts ***!
  \************************************************************************/
/*! exports provided: ReCaptchaType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReCaptchaType", function() { return ReCaptchaType; });
var ReCaptchaType;
(function (ReCaptchaType) {
    ReCaptchaType[ReCaptchaType["InvisibleReCaptcha"] = 0] = "InvisibleReCaptcha";
    ReCaptchaType[ReCaptchaType["ReCaptcha2"] = 1] = "ReCaptcha2";
})(ReCaptchaType || (ReCaptchaType = {}));


/***/ }),

/***/ "./projects/ngx-captcha-lib/src/lib/ngx-captcha.module.ts":
/*!****************************************************************!*\
  !*** ./projects/ngx-captcha-lib/src/lib/ngx-captcha.module.ts ***!
  \****************************************************************/
/*! exports provided: NgxCaptchaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxCaptchaModule", function() { return NgxCaptchaModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _components_invisible_recaptcha_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/invisible-recaptcha.component */ "./projects/ngx-captcha-lib/src/lib/components/invisible-recaptcha.component.ts");
/* harmony import */ var _components_recaptcha_2_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/recaptcha-2.component */ "./projects/ngx-captcha-lib/src/lib/components/recaptcha-2.component.ts");
/* harmony import */ var _services_recaptcha_v3_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/recaptcha_v3.service */ "./projects/ngx-captcha-lib/src/lib/services/recaptcha_v3.service.ts");
/* harmony import */ var _services_script_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/script.service */ "./projects/ngx-captcha-lib/src/lib/services/script.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var NgxCaptchaModule = /** @class */ (function () {
    function NgxCaptchaModule() {
    }
    NgxCaptchaModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]
            ],
            declarations: [
                _components_recaptcha_2_component__WEBPACK_IMPORTED_MODULE_3__["ReCaptcha2Component"],
                _components_invisible_recaptcha_component__WEBPACK_IMPORTED_MODULE_2__["InvisibleReCaptchaComponent"]
            ],
            providers: [
                _services_script_service__WEBPACK_IMPORTED_MODULE_5__["ScriptService"],
                _services_recaptcha_v3_service__WEBPACK_IMPORTED_MODULE_4__["ReCaptchaV3Service"]
            ],
            exports: [
                _components_recaptcha_2_component__WEBPACK_IMPORTED_MODULE_3__["ReCaptcha2Component"],
                _components_invisible_recaptcha_component__WEBPACK_IMPORTED_MODULE_2__["InvisibleReCaptchaComponent"]
            ]
        })
    ], NgxCaptchaModule);
    return NgxCaptchaModule;
}());



/***/ }),

/***/ "./projects/ngx-captcha-lib/src/lib/services/recaptcha_v3.service.ts":
/*!***************************************************************************!*\
  !*** ./projects/ngx-captcha-lib/src/lib/services/recaptcha_v3.service.ts ***!
  \***************************************************************************/
/*! exports provided: ReCaptchaV3Service */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReCaptchaV3Service", function() { return ReCaptchaV3Service; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _script_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./script.service */ "./projects/ngx-captcha-lib/src/lib/services/script.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ReCaptchaV3Service = /** @class */ (function () {
    function ReCaptchaV3Service(scriptService, zone) {
        this.scriptService = scriptService;
        this.zone = zone;
    }
    /**
     * Executes reCaptcha v3 with given action and passes token via callback. You need to verify
     * this callback in your backend to get meaningful results.
     *
     * For more information see https://developers.google.com/recaptcha/docs/v3
     *
     * @param siteKey Site key found in your google admin panel
     * @param action Action to log
     */
    ReCaptchaV3Service.prototype.execute = function (siteKey, action, callback, config) {
        var _this = this;
        var useGlobalDomain = config && config.useGlobalDomain ? true : false;
        this.scriptService.registerCaptchaScript(useGlobalDomain, siteKey, function (grecaptcha) {
            _this.zone.runOutsideAngular(function () {
                grecaptcha.execute(siteKey, {
                    action: action
                }).then(function (token) {
                    _this.zone.run(function () { return callback(token); });
                });
            });
        });
    };
    ReCaptchaV3Service = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_script_service__WEBPACK_IMPORTED_MODULE_1__["ScriptService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])
    ], ReCaptchaV3Service);
    return ReCaptchaV3Service;
}());



/***/ }),

/***/ "./projects/ngx-captcha-lib/src/lib/services/script.service.ts":
/*!*********************************************************************!*\
  !*** ./projects/ngx-captcha-lib/src/lib/services/script.service.ts ***!
  \*********************************************************************/
/*! exports provided: ScriptService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScriptService", function() { return ScriptService; });
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

var ScriptService = /** @class */ (function () {
    function ScriptService(zone) {
        this.zone = zone;
        /**
         * Name of the global google recaptcha script
         */
        this.windowGrecaptcha = 'grecaptcha';
        /**
        * Name of the global callback
        */
        this.windowOnLoadCallbackProperty = 'ngx_captcha_onload_callback';
        this.globalDomain = 'recaptcha.net';
        this.defaultDomain = 'google.com';
    }
    ScriptService.prototype.registerCaptchaScript = function (useGlobalDomain, render, onLoad, language) {
        var _this = this;
        if (this.grecaptchaScriptLoaded()) {
            // recaptcha script is already loaded
            // just call the callback
            this.zone.run(function () {
                onLoad(window[_this.windowGrecaptcha]);
            });
            return;
        }
        // we need to patch the callback through global variable, otherwise callback is not accessible
        // note: https://github.com/Enngage/ngx-captcha/issues/2
        window[this.windowOnLoadCallbackProperty] = (function () { return _this.zone.run(onLoad.bind(_this, window[_this.windowGrecaptcha])); });
        // prepare script elem
        var scriptElem = document.createElement('script');
        scriptElem.innerHTML = '';
        scriptElem.src = this.getCaptchaScriptUrl(useGlobalDomain, render, language);
        scriptElem.async = true;
        scriptElem.defer = true;
        // add script to header
        document.getElementsByTagName('head')[0].appendChild(scriptElem);
    };
    ScriptService.prototype.cleanup = function () {
        window[this.windowOnLoadCallbackProperty] = undefined;
        window[this.windowGrecaptcha] = undefined;
    };
    /**
     * Indicates if google recaptcha script is available and ready to be used
     */
    ScriptService.prototype.grecaptchaScriptLoaded = function () {
        if (window[this.windowOnLoadCallbackProperty] && window[this.windowGrecaptcha]) {
            return true;
        }
        return false;
    };
    /**
     * Gets language param used in script url
     */
    ScriptService.prototype.getLanguageParam = function (hl) {
        if (!hl) {
            return '';
        }
        return "&hl=" + hl;
    };
    /**
    * Url to google api script
    */
    ScriptService.prototype.getCaptchaScriptUrl = function (useGlobalDomain, render, language) {
        var domain = useGlobalDomain ? this.globalDomain : this.defaultDomain;
        // tslint:disable-next-line:max-line-length
        return "https://www." + domain + "/recaptcha/api.js?onload=" + this.windowOnLoadCallbackProperty + "&render=" + render + this.getLanguageParam(language);
    };
    ScriptService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])
    ], ScriptService);
    return ScriptService;
}());



/***/ }),

/***/ "./projects/ngx-captcha-lib/src/public_api.ts":
/*!****************************************************!*\
  !*** ./projects/ngx-captcha-lib/src/public_api.ts ***!
  \****************************************************/
/*! exports provided: BaseReCaptchaComponent, InvisibleReCaptchaComponent, ReCaptcha2Component, ReCaptchaType, ScriptService, ReCaptchaV3Service, NgxCaptchaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/index */ "./projects/ngx-captcha-lib/src/lib/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseReCaptchaComponent", function() { return _lib_index__WEBPACK_IMPORTED_MODULE_0__["BaseReCaptchaComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InvisibleReCaptchaComponent", function() { return _lib_index__WEBPACK_IMPORTED_MODULE_0__["InvisibleReCaptchaComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReCaptcha2Component", function() { return _lib_index__WEBPACK_IMPORTED_MODULE_0__["ReCaptcha2Component"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReCaptchaType", function() { return _lib_index__WEBPACK_IMPORTED_MODULE_0__["ReCaptchaType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScriptService", function() { return _lib_index__WEBPACK_IMPORTED_MODULE_0__["ScriptService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReCaptchaV3Service", function() { return _lib_index__WEBPACK_IMPORTED_MODULE_0__["ReCaptchaV3Service"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgxCaptchaModule", function() { return _lib_index__WEBPACK_IMPORTED_MODULE_0__["NgxCaptchaModule"]; });

/*
 * Public API
 */



/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./demo/main.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! c:\dev\ngx-captcha\demo\main.ts */"./demo/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map