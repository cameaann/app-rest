(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-demo-info></app-demo-info>\n<div class=\"container\">\n  <app-header></app-header>\n  <app-content></app-content>\n</div>\n\n<router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/content/content.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/content/content.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"content\">\n    <app-sidebar class=\"sidebar\"></app-sidebar>\n    <app-main class=\"main_view\"></app-main>\n </div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/demo-info/demo-info.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/demo-info/demo-info.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"about\">\n    <div class=\"about__text\">{{this.brString}}</div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<header class=\"header\">\n    <img src=\"assets/img/logo.svg\" alt=\"rest logo\" class=\"logo\">\n\n    <form action=\"#\" class=\"search\">\n        <input type=\"text\" class=\"search__input\" placeholder=\"Search hotels\" autocomplete=\"on\">\n        <button class=\"search__button\">\n            <svg class=\"search__icon\">\n                <use xlink:href=\"assets/img/sprite.svg#icon-magnifying-glass\"></use>\n            </svg>\n        </button>\n    </form>\n    <nav class=\"user-nav\">\n        <div class=\"user-nav__icon-box bookmark\">\n            <svg class=\"user-nav__icon\">\n                <use xlink:href=\"assets/img/sprite.svg#icon-bookmark\"></use>\n            </svg>\n            <span class=\"user-nav__notification\">7</span>\n            <div class=\"hint\">bookmarks</div>\n        </div>\n        <div class=\"user-nav__icon-box chat\">\n                <svg class=\"user-nav__icon\">\n                    <use xlink:href=\"assets/img/sprite.svg#icon-chat\"></use>\n                </svg>\n                <span class=\"user-nav__notification\">14</span>\n                <div class=\"hint\">messages</div>\n        </div>\n        <div class=\"user-nav__user\">\n            <img src=\"assets/img/user.png\" alt=\"User photo\" class=\"user-nav__user-photo\">\n            <span class=\"user-nav__user-name\">Anna</span>\n\n            <ul class=\"user__menu\">\n                <li class=\"user__menu-item\"><a href=\"/#\">Anna</a></li>\n                <li class=\"user__menu-item\"><a href=\"/#\">Manage your account</a></li>\n                <li class=\"user__menu-item\"><a href=\"/#\">Sign out</a></li>\n            </ul>\n        </div>\n    </nav>\n</header>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/hotel/hotel.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/hotel/hotel.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"gallery\">\n        <!-- <div class=\"gallery__control gallery__control-next\">\n                <a class=\"gallery__button\" id=\"item-2\">\n                        <svg class=\"gallery__icon\">\n                                <use xlink:href=\"assets/img/sprite.svg#icon-chevron-thin-right\"></use>\n                        </svg>\n                </a>\n        </div> -->\n\n    <figure class=\"gallery__item\">\n        <img src=\"assets/img/hotel1-4.jpg\" alt=\"photo1 \" class=\"gallery__photo\">\n    </figure>\n    \n    <figure class=\"gallery__item\">\n        <img src=\"assets/img/hotel1-3.jpg\" alt=\"photo3 \" class=\"gallery__photo\">\n    </figure>\n    <figure class=\"gallery__item\">\n            <img src=\"assets/img/hotel1-2.jpg\" alt=\"photo2 \" class=\"gallery__photo\">\n    </figure>\n\n    <!-- <div class=\"gallery__control gallery__control-prev\">\n            <a class=\"gallery__button\" id=\"item-1\">\n                    <svg class=\"gallery__icon\">\n                            <use xlink:href=\"assets/img/sprite.svg#icon-chevron-thin-left\"></use>\n                    </svg>\n                </a>\n    </div> -->\n    \n</div>\n\n<div class=\"overview\">\n    <h1 class=\"overview__heading\">First Residence Hotel</h1>\n    <div class=\"overview__stars\">\n            <svg class=\"overview__icon-star\">\n                    <use xlink:href=\"assets/img/sprite.svg#icon-star\"></use>\n            </svg>\n            <svg class=\"overview__icon-star\">\n                    <use xlink:href=\"assets/img/sprite.svg#icon-star\"></use>\n            </svg>\n            <svg class=\"overview__icon-star\">\n                    <use xlink:href=\"assets/img/sprite.svg#icon-star\"></use>\n            </svg>\n            <svg class=\"overview__icon-star\">\n                    <use xlink:href=\"assets/img/sprite.svg#icon-star\"></use>\n            </svg>\n            <svg class=\"overview__icon-star\">\n                    <use xlink:href=\"assets/img/sprite.svg#icon-star\"></use>\n            </svg>\n    </div>\n    <div class=\"overview__location\">\n            <svg class=\"overview__icon-location\">\n                    <use xlink:href=\"assets/img/sprite.svg#icon-location-pin\"></use>\n            </svg>\n            <button class=\"btn-inline\">Ko Samui District, Thailand</button>\n    </div>\n    <div class=\"overview__ratings\">\n        <div class=\"overview__ratings-average\">8.6</div>\n        <div class=\"overview__ratings-count\">350 votes</div>\n    </div>\n</div>\n<div class=\"details\">\n        <div class=\"description\">\n            <p class=\"paragraph\">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta, \n                a nisi, quisquam laudantium nesciunt tempora quam atque, non \n                quaerat qui fugit quas ducimus? Fugiat alias earum quod, animi repudiandae unde.</p>\n            <p class=\"paragraph\">Animi nobis eveniet temporibus impedit voluptas perspiciatis eaque maiores consequatur? Eaque \n                inventore cupiditate libero.</p>\n            <ul class=\"list\">\n                        <li class=\"list__item\">Free WiFi</li>\n                        <li class=\"list__item\">Close to the beach</li>                        \n                        <li class=\"list__item\">Outdoor pool</li>                        \n                        <li class=\"list__item\">Free cribs/infant beds</li>\n                        <li class=\"list__item\">Laundry facilities</li>\n                        <li class=\"list__item\">Refrigerator</li>\n                        <li class=\"list__item\">Free self parking</li>\n                        <li class=\"list__item\">Airport shuttle on request</li>\n                        \n            </ul>\n            <div class=\"recommend\">\n                <p class=\"recommend__count\">Diego and 4 other friends recommend this hotel.</p>\n                <div class=\"recommend__friends\">\n                    <img src=\"assets/img/user-1.jpg\" alt=\"Friend 1\" class=\"recommend__photo\">\n                    <img src=\"assets/img/user-2.jpg\" alt=\"Friend 2\" class=\"recommend__photo\">\n                    <img src=\"assets/img/user-3.jpg\" alt=\"Friend 3\" class=\"recommend__photo\">\n                </div>\n            </div>\n        </div>\n        \n        <div class=\"user-reviews\">\n                <figure class=\"review\">\n                    <blockquote class=\"review__text\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur eligendi odit et nemo modi eveniet molestias provident </blockquote>\n                    <figcaption class=\"review__user\">\n                        <img src=\"assets/img/user-1.jpg\" alt=\"\" class=\"review__user-photo\">\n                        <div class=\"review__user-box\">\n                           <p class=\"review__user-name\">Mary Smith</p>\n                           <p class=\"review__user-date\">Feb 14, 2019</p>\n                        </div>\n                        <div class=\"review__rating\">7.9</div>\n                    </figcaption>\n                </figure>\n                <figure class=\"review\">\n                    <blockquote class=\"review__text\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur eligendi odit et nemo modi eveniet molestias provident </blockquote>\n                    <figcaption class=\"review__user\">\n                        <img src=\"assets/img/user-2.jpg\" alt=\"\" class=\"review__user-photo\">\n                        <div class=\"review__user-box\">\n                            <p class=\"review__user-name\">Tery Li</p>\n                            <p class=\"review__user-date\">May 10, 2019</p>\n                        </div>\n                        <div class=\"review__rating\">8.4</div>\n                     </figcaption>\n                </figure>\n                <button class=\"btn-inline\">Show all <span>&rarr;</span></button>\n            </div>\n</div>\n<div class=\"cta\">\n        <h2 class=\"cta__book-now\">\n            Good news! We have 5 free rooms for your selected dates!\n        </h2>\n        <button class=\"btn\">\n            <span class=\"btn__visible\">Book now!</span>\n            <span class=\"btn__invisible\">Only 5 rooms left</span>\n        </button>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/main/main.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/main/main.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-hotel></app-hotel>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/sidebar/sidebar.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/sidebar/sidebar.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("        <ul class=\"side-nav\">\n                <li class=\"side-nav__item side-nav__item--active\">\n                    <a href=\"#\" class=\"side-nav__link\">\n                        <svg class=\"side-nav__icon\">\n                            <use xlink:href=\"assets/img/sprite.svg#icon-home\"></use>\n                        </svg>\n                        <span>Hotel</span>\n                    </a>\n                </li>\n                <li class=\"side-nav__item\">\n                        <a href=\"#\" class=\"side-nav__link\">\n                            <svg class=\"side-nav__icon\">\n                                <use xlink:href=\"assets/img/sprite.svg#icon-aircraft-take-off\"></use>\n                            </svg>\n                            <span>Flight</span>\n                        </a>\n                </li>\n                <li class=\"side-nav__item\">\n                        <a href=\"#\" class=\"side-nav__link\">\n                            <svg class=\"side-nav__icon\">\n                                <use xlink:href=\"assets/img/sprite.svg#icon-key\"></use>\n                            </svg>\n                            <span>Car rental</span>\n                        </a>\n                </li>\n                <li class=\"side-nav__item\">\n                        <a href=\"#\" class=\"side-nav__link\">\n                            <svg class=\"side-nav__icon\">\n                                <use xlink:href=\"assets/img/sprite.svg#icon-map\"></use>\n                            </svg>\n                            <span>Tours</span>\n                        </a>\n                </li>\n            </ul>\n            <div class=\"legal\">\n                &copy; 2019 by ASH.\n            </div>\n\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
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
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'app-rest';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/sidebar/sidebar.component */ "./src/app/components/sidebar/sidebar.component.ts");
/* harmony import */ var _components_main_main_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/main/main.component */ "./src/app/components/main/main.component.ts");
/* harmony import */ var _components_content_content_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/content/content.component */ "./src/app/components/content/content.component.ts");
/* harmony import */ var _components_hotel_hotel_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/hotel/hotel.component */ "./src/app/components/hotel/hotel.component.ts");
/* harmony import */ var _components_demo_info_demo_info_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/demo-info/demo-info.component */ "./src/app/components/demo-info/demo-info.component.ts");











let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _components_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
            _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__["SidebarComponent"],
            _components_main_main_component__WEBPACK_IMPORTED_MODULE_7__["MainComponent"],
            _components_content_content_component__WEBPACK_IMPORTED_MODULE_8__["ContentComponent"],
            _components_hotel_hotel_component__WEBPACK_IMPORTED_MODULE_9__["HotelComponent"],
            _components_demo_info_demo_info_component__WEBPACK_IMPORTED_MODULE_10__["DemoInfoComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/content/content.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/content/content.component.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29udGVudC9jb250ZW50LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/content/content.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/content/content.component.ts ***!
  \*********************************************************/
/*! exports provided: ContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentComponent", function() { return ContentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ContentComponent = class ContentComponent {
    constructor() { }
    ngOnInit() {
    }
};
ContentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-content',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./content.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/content/content.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./content.component.scss */ "./src/app/components/content/content.component.scss")).default]
    })
], ContentComponent);



/***/ }),

/***/ "./src/app/components/demo-info/demo-info.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/demo-info/demo-info.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".about {\n  background-color: #4b4747;\n  color: #ffffff;\n  padding: 3rem;\n  height: 3rem;\n  font-size: 1.8rem;\n  display: flex;\n  justify-content: center;\n}\n.about__text {\n  align-self: center;\n  justify-self: center;\n}\n@media (max-width: 37.5em) {\n  .about {\n    font-size: 1.4rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kZW1vLWluZm8vRDpcXElUX0VkdWNhdGlvblxcSVRcXGFwcC1yZXN0L3NyY1xcYXBwXFxjb21wb25lbnRzXFxkZW1vLWluZm9cXGRlbW8taW5mby5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9kZW1vLWluZm8vZGVtby1pbmZvLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2RlbW8taW5mby9EOlxcSVRfRWR1Y2F0aW9uXFxJVFxcYXBwLXJlc3Qvc3JjXFxzdHlsZXNcXF9taXhpbi5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0kseUJBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtBQ0RKO0FESUk7RUFDSSxrQkFBQTtFQUNBLG9CQUFBO0FDRlI7QUNQUTtFRkhSO0lBZ0JRLGlCQUFBO0VDRk47QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGVtby1pbmZvL2RlbW8taW5mby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uL3N0eWxlcy9taXhpbic7XHJcblxyXG4uYWJvdXR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNzUsIDcxLCA3MSk7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIHBhZGRpbmc6IDNyZW07XHJcbiAgICBoZWlnaHQ6IDNyZW07XHJcbiAgICBmb250LXNpemU6IDEuOHJlbTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcblxyXG4gICAgJl9fdGV4dHtcclxuICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgQGluY2x1ZGUgcmVzcG9uc2UocGhvbmUpe1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS40cmVtO1xyXG4gICAgfVxyXG5cclxufVxyXG4iLCIuYWJvdXQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGI0NzQ3O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgcGFkZGluZzogM3JlbTtcbiAgaGVpZ2h0OiAzcmVtO1xuICBmb250LXNpemU6IDEuOHJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uYWJvdXRfX3RleHQge1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDM3LjVlbSkge1xuICAuYWJvdXQge1xuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xuICB9XG59IiwiQG1peGluIHJlc3BvbnNlKCRicmVha3BvaW50KXtcclxuICAgIEBpZiAkYnJlYWtwb2ludCA9PSBwaG9uZS1tb3RvIHtcclxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogMjIuNWVtKSB7QGNvbnRlbnQ7IH0gLy8zNjBweFxyXG4gICAgfVxyXG4gICAgQGlmICRicmVha3BvaW50ID09IHBob25lIHtcclxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogMzcuNWVtKSB7QGNvbnRlbnQ7IH0gLy82MDBweFxyXG4gICAgfVxyXG4gICAgQGlmICRicmVha3BvaW50ID09IHRhYi1wb3J0IHtcclxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNTYuMjVlbSkge0Bjb250ZW50OyB9IC8vOTAwcHhcclxuICAgIH1cclxuICAgIEBpZiAkYnJlYWtwb2ludCA9PSB0YWItbGFuZCB7XHJcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc1ZW0pIHtAY29udGVudDsgfSAgLy8xMjAwcHhcclxuICAgIH1cclxuICAgIEBpZiAkYnJlYWtwb2ludCA9PSBiaWctZGVza3RvcCB7XHJcbiAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDExMi41ZW0pIHtAY29udGVudDsgfSAgLy8xODAwcHhcclxuICAgIH1cclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/components/demo-info/demo-info.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/demo-info/demo-info.component.ts ***!
  \*************************************************************/
/*! exports provided: DemoInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoInfoComponent", function() { return DemoInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DemoInfoComponent = class DemoInfoComponent {
    constructor() { }
    ngOnInit() {
        this.userLanguage = window.navigator.language;
        if (this.userLanguage == "ru") {
            this.brString = "Это демо-проект для портфолио Шестаковой Анны. Мой email: cameaann@gmail.com";
        }
        else {
            this.brString = "This demo-project is made for Anna Shestakova's portfolio. My email: cameaann@gmail.com";
        }
    }
};
DemoInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-demo-info',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./demo-info.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/demo-info/demo-info.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./demo-info.component.scss */ "./src/app/components/demo-info/demo-info.component.scss")).default]
    })
], DemoInfoComponent);



/***/ }),

/***/ "./src/app/components/header/header.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\n  max-width: 120rem;\n  margin: 8rem auto;\n  background-color: var(--light-grey);\n  box-shadow: var(--shadow-dark);\n  min-height: 50rem;\n}\n@media only screen and (max-width: 75em) {\n  .container {\n    margin: 0;\n    width: 100%;\n    max-width: 100%;\n  }\n}\n.content {\n  display: flex;\n}\n@media only screen and (max-width: 56.25em) {\n  .content {\n    flex-direction: column;\n  }\n}\n.sidebar {\n  background-color: var(--dark-grey);\n  flex: 0 0 20%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n.main_view {\n  background-color: #fff;\n  flex: 1;\n}\n.details {\n  font-size: 1.4rem;\n  display: flex;\n  padding: 4.5rem;\n  background-color: var(--light-grey);\n  border-bottom: var(--line);\n}\n@media only screen and (max-width: 56.25em) {\n  .details {\n    padding: 3rem;\n  }\n}\n@media only screen and (max-width: 37.5em) {\n  .details {\n    flex-direction: column;\n  }\n}\n.description {\n  background-color: #fff;\n  box-shadow: var(--shadow-light);\n  padding: 3rem;\n  flex: 0 0 60%;\n  margin-right: 4.5rem;\n}\n@media only screen and (max-width: 56.25em) {\n  .description {\n    padding: 2rem;\n    margin-right: 3rem;\n  }\n}\n@media only screen and (max-width: 37.5em) {\n  .description {\n    margin-bottom: 3rem;\n    margin-right: 0;\n  }\n}\n.user-reviews {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.header {\n  font-size: 1.4rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  height: 7rem;\n  background-color: #fff;\n  border-bottom: var(--line);\n}\n@media only screen and (max-width: 31.25em) {\n  .header {\n    flex-wrap: wrap;\n    height: 10rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvRDpcXElUX0VkdWNhdGlvblxcSVRcXGFwcC1yZXN0L3NyY1xcc3R5bGVzXFxfbGF5b3V0LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvRDpcXElUX0VkdWNhdGlvblxcSVRcXGFwcC1yZXN0L3NyY1xcYXBwXFxjb21wb25lbnRzXFxoZWFkZXJcXGhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQ0FBQTtFQUNBLDhCQUFBO0VBQ0EsaUJBQUE7QUNESjtBREdJO0VBUEo7SUFRUSxTQUFBO0lBQ0EsV0FBQTtJQUNBLGVBQUE7RUNBTjtBQUNGO0FER0E7RUFDSSxhQUFBO0FDQUo7QURFSTtFQUhKO0lBSVEsc0JBQUE7RUNDTjtBQUNGO0FERUE7RUFDSSxrQ0FBQTtFQUNBLGFBQUE7RUFFQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtBQ0FKO0FER0E7RUFDSSxzQkFBQTtFQUNBLE9BQUE7QUNBSjtBREdBO0VBQ0ksaUJBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLG1DQUFBO0VBQ0EsMEJBQUE7QUNBSjtBREVJO0VBUEo7SUFRUSxhQUFBO0VDQ047QUFDRjtBRENLO0VBWEw7SUFZUSxzQkFBQTtFQ0VOO0FBQ0Y7QURDQTtFQUNJLHNCQUFBO0VBQ0EsK0JBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0FDRUo7QURBSTtFQVBKO0lBUVEsYUFBQTtJQUNBLGtCQUFBO0VDR047QUFDRjtBRERLO0VBWkw7SUFhUSxtQkFBQTtJQUNBLGVBQUE7RUNJTjtBQUNGO0FEQ0E7RUFDSSxPQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUNFSjtBQzlFQTtFQUNJLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFFQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSwwQkFBQTtBRGdGSjtBQzlFSTtFQVZKO0lBV1EsZUFBQTtJQUNBLGFBQUE7RURpRk47QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ3ZhcmlhYmxlcyc7XHJcblxyXG4uY29udGFpbmVye1xyXG4gICAgbWF4LXdpZHRoOiAxMjByZW07XHJcbiAgICBtYXJnaW46IDhyZW0gYXV0bztcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWdyZXkpO1xyXG4gICAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LWRhcmspO1xyXG4gICAgbWluLWhlaWdodDogNTByZW07XHJcblxyXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkYnAtbGFyZ2VzdCkge1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIH1cclxufVxyXG5cclxuLmNvbnRlbnR7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG5cclxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDokYnAtbWVkaXVtKSB7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIH1cclxufVxyXG5cclxuLnNpZGViYXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWRhcmstZ3JleSk7XHJcbiAgICBmbGV4OiAwIDAgMjAlO1xyXG5cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4ubWFpbl92aWV3e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGZsZXg6IDE7ICAgIFxyXG59XHJcblxyXG4uZGV0YWlsc3tcclxuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHBhZGRpbmc6NC41cmVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtZ3JleSk7XHJcbiAgICBib3JkZXItYm90dG9tOiB2YXIoLS1saW5lKTtcclxuXHJcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6JGJwLW1lZGl1bSkge1xyXG4gICAgICAgIHBhZGRpbmc6IDNyZW07XHJcbiAgICAgfVxyXG5cclxuICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6JGJwLXNtYWxsKSB7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICB9XHJcblxyXG59XHJcbi5kZXNjcmlwdGlvbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctbGlnaHQpO1xyXG4gICAgcGFkZGluZzozcmVtO1xyXG4gICAgZmxleDogMCAwIDYwJTtcclxuICAgIG1hcmdpbi1yaWdodDogNC41cmVtO1xyXG5cclxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDokYnAtbWVkaXVtKSB7XHJcbiAgICAgICAgcGFkZGluZzogMnJlbTtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDNyZW07XHJcbiAgICAgfVxyXG5cclxuICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6JGJwLXNtYWxsKSB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogM3JlbTtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICAgICAgLy8gcGFkZGluZzogMS41cmVtO1xyXG4gICAgIH1cclxuXHJcbiAgIFxyXG59XHJcbi51c2VyLXJldmlld3N7XHJcbiAgICBmbGV4OjE7XHJcbiAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufSIsIi5jb250YWluZXIge1xuICBtYXgtd2lkdGg6IDEyMHJlbTtcbiAgbWFyZ2luOiA4cmVtIGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWdyZXkpO1xuICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctZGFyayk7XG4gIG1pbi1oZWlnaHQ6IDUwcmVtO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIC5jb250YWluZXIge1xuICAgIG1hcmdpbjogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gIH1cbn1cblxuLmNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1Ni4yNWVtKSB7XG4gIC5jb250ZW50IHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG59XG5cbi5zaWRlYmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1ncmV5KTtcbiAgZmxleDogMCAwIDIwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4ubWFpbl92aWV3IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgZmxleDogMTtcbn1cblxuLmRldGFpbHMge1xuICBmb250LXNpemU6IDEuNHJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZzogNC41cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1ncmV5KTtcbiAgYm9yZGVyLWJvdHRvbTogdmFyKC0tbGluZSk7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU2LjI1ZW0pIHtcbiAgLmRldGFpbHMge1xuICAgIHBhZGRpbmc6IDNyZW07XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzcuNWVtKSB7XG4gIC5kZXRhaWxzIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG59XG5cbi5kZXNjcmlwdGlvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1saWdodCk7XG4gIHBhZGRpbmc6IDNyZW07XG4gIGZsZXg6IDAgMCA2MCU7XG4gIG1hcmdpbi1yaWdodDogNC41cmVtO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1Ni4yNWVtKSB7XG4gIC5kZXNjcmlwdGlvbiB7XG4gICAgcGFkZGluZzogMnJlbTtcbiAgICBtYXJnaW4tcmlnaHQ6IDNyZW07XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzcuNWVtKSB7XG4gIC5kZXNjcmlwdGlvbiB7XG4gICAgbWFyZ2luLWJvdHRvbTogM3JlbTtcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gIH1cbn1cblxuLnVzZXItcmV2aWV3cyB7XG4gIGZsZXg6IDE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5oZWFkZXIge1xuICBmb250LXNpemU6IDEuNHJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDdyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlci1ib3R0b206IHZhcigtLWxpbmUpO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMS4yNWVtKSB7XG4gIC5oZWFkZXIge1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBoZWlnaHQ6IDEwcmVtO1xuICB9XG59IiwiQGltcG9ydCBcImxheW91dFwiO1xyXG5cclxuLmhlYWRlcntcclxuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xyXG4gICAgZGlzcGxheTpmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICBoZWlnaHQ6IDdyZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyLWJvdHRvbTp2YXIoLS1saW5lKTtcclxuXHJcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6JGJwLXNtYWxsZXN0KSB7XHJcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgIGhlaWdodDoxMHJlbTtcclxuICAgICAgICAvLyBhbGlnbi1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICB9XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HeaderComponent = class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
};
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.scss */ "./src/app/components/header/header.component.scss")).default]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/components/hotel/hotel.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/hotel/hotel.component.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG90ZWwvaG90ZWwuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/components/hotel/hotel.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/hotel/hotel.component.ts ***!
  \*****************************************************/
/*! exports provided: HotelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HotelComponent", function() { return HotelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HotelComponent = class HotelComponent {
    constructor() { }
    ngOnInit() {
    }
};
HotelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-hotel',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./hotel.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/hotel/hotel.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./hotel.component.scss */ "./src/app/components/hotel/hotel.component.scss")).default]
    })
], HotelComponent);



/***/ }),

/***/ "./src/app/components/main/main.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/main/main.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFpbi9tYWluLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/main/main.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/main/main.component.ts ***!
  \***************************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MainComponent = class MainComponent {
    constructor() { }
    ngOnInit() {
    }
};
MainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-main',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./main.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/main/main.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./main.component.scss */ "./src/app/components/main/main.component.scss")).default]
    })
], MainComponent);



/***/ }),

/***/ "./src/app/components/sidebar/sidebar.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/sidebar/sidebar.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.ts ***!
  \*********************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SidebarComponent = class SidebarComponent {
    constructor() { }
    ngOnInit() {
    }
};
SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sidebar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sidebar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/sidebar/sidebar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sidebar.component.scss */ "./src/app/components/sidebar/sidebar.component.scss")).default]
    })
], SidebarComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\IT_Education\IT\app-rest\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map