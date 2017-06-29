webpackJsonp([1,5],{

/***/ 291:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 291;


/***/ }),

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(309);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 30:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(29)();
// imports


// module
exports.push([module.i, ".gotfahter{\r\n    background: url(" + __webpack_require__(437) + ") no-repeat left; \r\n}\r\n\r\n.gotmohter{\r\n    background: url(" + __webpack_require__(438) + ") no-repeat left; \r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(391),
        styles: [__webpack_require__(30)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__maintop_component__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__service_component__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__memo_component__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__asunaro_component__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ng2_bootstrap_ng2_bootstrap__ = __webpack_require__(375);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ng2_bootstrap_modal__ = __webpack_require__(244);
/* unused harmony export ROUTES */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var ROUTES = [
    { path: 'Service', component: __WEBPACK_IMPORTED_MODULE_7__service_component__["a" /* ServiceComponent */] },
    { path: 'Maintop', component: __WEBPACK_IMPORTED_MODULE_6__maintop_component__["a" /* MaintopComponent */] },
    { path: 'Memo', component: __WEBPACK_IMPORTED_MODULE_8__memo_component__["a" /* MemoComponent */] },
    { path: 'Asunaro', component: __WEBPACK_IMPORTED_MODULE_9__asunaro_component__["a" /* AsunaroComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__service_component__["a" /* ServiceComponent */],
            __WEBPACK_IMPORTED_MODULE_6__maintop_component__["a" /* MaintopComponent */],
            __WEBPACK_IMPORTED_MODULE_8__memo_component__["a" /* MemoComponent */],
            __WEBPACK_IMPORTED_MODULE_9__asunaro_component__["a" /* AsunaroComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_10_ng2_bootstrap_ng2_bootstrap__["a" /* Ng2BootstrapModule */],
            __WEBPACK_IMPORTED_MODULE_11_ng2_bootstrap_modal__["a" /* ModalModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(ROUTES)
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AsunaroComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AsunaroComponent = (function () {
    function AsunaroComponent() {
        this.title = '～障害福祉サービスの利用について～';
    }
    return AsunaroComponent;
}());
AsunaroComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(392),
        styles: [__webpack_require__(30)]
    })
], AsunaroComponent);

//# sourceMappingURL=asunaro.component.js.map

/***/ }),

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaintopComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MaintopComponent = (function () {
    function MaintopComponent() {
        this.title = '～公的介護保険制度の現状と今後の役割～';
    }
    return MaintopComponent;
}());
MaintopComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(393),
        styles: [__webpack_require__(30)]
    })
], MaintopComponent);

//# sourceMappingURL=maintop.component.js.map

/***/ }),

/***/ 307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MemoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MemoComponent = (function () {
    function MemoComponent() {
        this.title = '～memo・用語とか～';
    }
    return MemoComponent;
}());
MemoComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(394),
        styles: [__webpack_require__(30)]
    })
], MemoComponent);

//# sourceMappingURL=memo.component.js.map

/***/ }),

/***/ 308:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServiceComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ServiceComponent = (function () {
    function ServiceComponent() {
        this.title = '～介護サービス一覧/サービス紹介～';
    }
    return ServiceComponent;
}());
ServiceComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(395),
        styles: [__webpack_require__(30)]
    })
], ServiceComponent);

//# sourceMappingURL=service.component.js.map

/***/ }),

/***/ 309:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 366:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 106,
	"./af.js": 106,
	"./ar": 113,
	"./ar-dz": 107,
	"./ar-dz.js": 107,
	"./ar-kw": 108,
	"./ar-kw.js": 108,
	"./ar-ly": 109,
	"./ar-ly.js": 109,
	"./ar-ma": 110,
	"./ar-ma.js": 110,
	"./ar-sa": 111,
	"./ar-sa.js": 111,
	"./ar-tn": 112,
	"./ar-tn.js": 112,
	"./ar.js": 113,
	"./az": 114,
	"./az.js": 114,
	"./be": 115,
	"./be.js": 115,
	"./bg": 116,
	"./bg.js": 116,
	"./bn": 117,
	"./bn.js": 117,
	"./bo": 118,
	"./bo.js": 118,
	"./br": 119,
	"./br.js": 119,
	"./bs": 120,
	"./bs.js": 120,
	"./ca": 121,
	"./ca.js": 121,
	"./cs": 122,
	"./cs.js": 122,
	"./cv": 123,
	"./cv.js": 123,
	"./cy": 124,
	"./cy.js": 124,
	"./da": 125,
	"./da.js": 125,
	"./de": 128,
	"./de-at": 126,
	"./de-at.js": 126,
	"./de-ch": 127,
	"./de-ch.js": 127,
	"./de.js": 128,
	"./dv": 129,
	"./dv.js": 129,
	"./el": 130,
	"./el.js": 130,
	"./en-au": 131,
	"./en-au.js": 131,
	"./en-ca": 132,
	"./en-ca.js": 132,
	"./en-gb": 133,
	"./en-gb.js": 133,
	"./en-ie": 134,
	"./en-ie.js": 134,
	"./en-nz": 135,
	"./en-nz.js": 135,
	"./eo": 136,
	"./eo.js": 136,
	"./es": 138,
	"./es-do": 137,
	"./es-do.js": 137,
	"./es.js": 138,
	"./et": 139,
	"./et.js": 139,
	"./eu": 140,
	"./eu.js": 140,
	"./fa": 141,
	"./fa.js": 141,
	"./fi": 142,
	"./fi.js": 142,
	"./fo": 143,
	"./fo.js": 143,
	"./fr": 146,
	"./fr-ca": 144,
	"./fr-ca.js": 144,
	"./fr-ch": 145,
	"./fr-ch.js": 145,
	"./fr.js": 146,
	"./fy": 147,
	"./fy.js": 147,
	"./gd": 148,
	"./gd.js": 148,
	"./gl": 149,
	"./gl.js": 149,
	"./gom-latn": 150,
	"./gom-latn.js": 150,
	"./he": 151,
	"./he.js": 151,
	"./hi": 152,
	"./hi.js": 152,
	"./hr": 153,
	"./hr.js": 153,
	"./hu": 154,
	"./hu.js": 154,
	"./hy-am": 155,
	"./hy-am.js": 155,
	"./id": 156,
	"./id.js": 156,
	"./is": 157,
	"./is.js": 157,
	"./it": 158,
	"./it.js": 158,
	"./ja": 159,
	"./ja.js": 159,
	"./jv": 160,
	"./jv.js": 160,
	"./ka": 161,
	"./ka.js": 161,
	"./kk": 162,
	"./kk.js": 162,
	"./km": 163,
	"./km.js": 163,
	"./kn": 164,
	"./kn.js": 164,
	"./ko": 165,
	"./ko.js": 165,
	"./ky": 166,
	"./ky.js": 166,
	"./lb": 167,
	"./lb.js": 167,
	"./lo": 168,
	"./lo.js": 168,
	"./lt": 169,
	"./lt.js": 169,
	"./lv": 170,
	"./lv.js": 170,
	"./me": 171,
	"./me.js": 171,
	"./mi": 172,
	"./mi.js": 172,
	"./mk": 173,
	"./mk.js": 173,
	"./ml": 174,
	"./ml.js": 174,
	"./mr": 175,
	"./mr.js": 175,
	"./ms": 177,
	"./ms-my": 176,
	"./ms-my.js": 176,
	"./ms.js": 177,
	"./my": 178,
	"./my.js": 178,
	"./nb": 179,
	"./nb.js": 179,
	"./ne": 180,
	"./ne.js": 180,
	"./nl": 182,
	"./nl-be": 181,
	"./nl-be.js": 181,
	"./nl.js": 182,
	"./nn": 183,
	"./nn.js": 183,
	"./pa-in": 184,
	"./pa-in.js": 184,
	"./pl": 185,
	"./pl.js": 185,
	"./pt": 187,
	"./pt-br": 186,
	"./pt-br.js": 186,
	"./pt.js": 187,
	"./ro": 188,
	"./ro.js": 188,
	"./ru": 189,
	"./ru.js": 189,
	"./sd": 190,
	"./sd.js": 190,
	"./se": 191,
	"./se.js": 191,
	"./si": 192,
	"./si.js": 192,
	"./sk": 193,
	"./sk.js": 193,
	"./sl": 194,
	"./sl.js": 194,
	"./sq": 195,
	"./sq.js": 195,
	"./sr": 197,
	"./sr-cyrl": 196,
	"./sr-cyrl.js": 196,
	"./sr.js": 197,
	"./ss": 198,
	"./ss.js": 198,
	"./sv": 199,
	"./sv.js": 199,
	"./sw": 200,
	"./sw.js": 200,
	"./ta": 201,
	"./ta.js": 201,
	"./te": 202,
	"./te.js": 202,
	"./tet": 203,
	"./tet.js": 203,
	"./th": 204,
	"./th.js": 204,
	"./tl-ph": 205,
	"./tl-ph.js": 205,
	"./tlh": 206,
	"./tlh.js": 206,
	"./tr": 207,
	"./tr.js": 207,
	"./tzl": 208,
	"./tzl.js": 208,
	"./tzm": 210,
	"./tzm-latn": 209,
	"./tzm-latn.js": 209,
	"./tzm.js": 210,
	"./uk": 211,
	"./uk.js": 211,
	"./ur": 212,
	"./ur.js": 212,
	"./uz": 214,
	"./uz-latn": 213,
	"./uz-latn.js": 213,
	"./uz.js": 214,
	"./vi": 215,
	"./vi.js": 215,
	"./x-pseudo": 216,
	"./x-pseudo.js": 216,
	"./yo": 217,
	"./yo.js": 217,
	"./zh-cn": 218,
	"./zh-cn.js": 218,
	"./zh-hk": 219,
	"./zh-hk.js": 219,
	"./zh-tw": 220,
	"./zh-tw.js": 220
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 366;


/***/ }),

/***/ 391:
/***/ (function(module, exports) {

module.exports = "\n<nav class=\"navbar fixed-top navbar bg-faded\" style=\"background-color: pink;\">\n<div class=\"gotmother\" style=\"margin-left: 0px;\"><h1 style=\"margin-left:50px;\">介護・障害福祉</h1></div>\n    <div class=\"gotfahter\" style=\"margin-left: -110px;\"><p style=\"color:pink;\">aaaaaaaaaaa</p></div>\n<ul class=\"nav justify-content-end\" style=\"margin-right: 100px;\">\n  <li class=\"nav-item\">\n    <div class=\"Home\"><a class=\"nav-link active\" [routerLink]=\"['/Service']\">&nbsp;&nbsp;サービス</a></div>\n  </li>\n  <li class=\"nav-item\">\n    <div class=\"Redmine\"><a class=\"nav-link active\" [routerLink]=\"['/Maintop']\">Top</a></div>\n  </li>\n   <li class=\"nav-item\">\n    <div><a class=\"nav-link active\" [routerLink]=\"['/Memo']\">memo・用語</a></div>\n  </li>\n  <li class=\"nav-item\">\n    <div><a class=\"nav-link active\" [routerLink]=\"['/Asunaro']\">障害福祉サービス</a></div>\n  </li>\n</ul>\n</nav>\n\n<article>\n  <router-outlet></router-outlet>\n</article>\n"

/***/ }),

/***/ 392:
/***/ (function(module, exports) {

module.exports = "<h1>{{title}}</h1>\n\n<article>\n\n<h2>障害者を対象としたサービス</h2>\n<p>自立支援給付と地域生活支援事業で構成</p>\n\n<h3>介護給付</h3>\n<ol>\n<li>居宅介護(ホームヘルプ)：自宅で、入浴、排せつ、食事の介護等を行う</li>\n<li>重度訪問介護：重度の肢体不自由者又は重度の知的障害若しくは精神障害により、<br/>\n行動上著しい困難を有する人で<span style=\"border-bottom:solid 2px red;\">常に介護を必要とする人</span>に、<br/>\n自宅で、入浴、排せつ、食事の介護、外出時における移動支援などを総合的に行う。</li>\n<li>同行支援：視覚障害により、移動に著しい困難を有する人に、移動に必要な情報の提供（代筆・\n代読を含む）、移動の援護等の外出支援を行う。</li>\n<li>行動支援：自己判断能力が制限されている人が行動するときに、危険を回避するために必要な支\n援や外出支援を行う。</li>\n<li>重度障碍者等包括支援：介護の必要性がとても高い人に、居宅介護等複数のサービスを包括的に行う。</li>\n<li>短期入所(ショートステイ)：自宅で介護する人が病気の場合などに、短期間、夜間も含め施設で、<br/>\n入浴、排せつ、食事の介護等を行う。</li>\n<li>療養介護：医療と常時介護を必要とする人に、医療機関で機能訓練、療養上の管理、看護、介護\n及び日常生活の支援を行う。</li>\n<li>生活介護：常に介護を必要とする人に、昼間、入浴、排せつ、食事の介護等を行うとともに、<br/>\n創作的活動又は生産活動の機会を提供する。</li>\n<li>障害者支援施設での夜間ケア等(施設入所支援)：施設に入所する人に、夜間や休日、入浴、排せつ、食事の介護等を行う。</li>\n</ol>\n<h3>訓練等給付</h3>\n<ol>\n<li>自立訓練：自立した日常生活又は社会生活ができるよう、一定期間、身体機能又は生活能力の向上のために必要な訓練を行う。<br/>\n機能訓練と生活訓練がある。</li>\n<li>就労移行支援：一般企業等への就労を希望する人に、一定期間、就労に必要な知識及び能力の向上\nのために必要な訓練を行う。</li>\n<li>就労継続支援(A型=雇用型、B型=非雇用型)：一般企業等での就労が困難な人に、働く場を提供するとともに、<br/>\n  知識及び能力の向上のために必要な訓練を行う。<br/>\n雇用契約を結ぶＡ型と、雇用契約を結ばないＢ型があります。</li>\n<li>共同生活援助(グループホーム)：共同生活を行う住居で、相談や日常生活上の援助を行う。<br/>\n  また、入浴、排せつ、食事の介護等の必要性が認定されている方には介護サービスも提供する。<br/>\nさらに、グループホームを退居し、一般住宅等への移行を目指す人のためにサテライト型住居がある。※<br/>\n＊平成26年4月1日から共同生活介護（ケアホーム）はグループホームに一元化されました。</li>\n</ol>\n<h3>地域生活支援事業</h3>\n<ol>\n  <li>移動支援：円滑に外出できるよう、移動を支援する。</li>\n  <li>地域活動支援センター：創作的活動又は生産活動の機会の提供、社会との交流等を行う施設。</li>\n  <li>福祉ホーム：住居を必要としている人に、低額な料金で、居室等を提供するとともに、\n日常生活に必要な支援を行う。</li>\n  </ol>\n  <h4>■日中活動と住まいの場の組み合わせ</h4>\n  <p>入所施設のサービスを、昼のサービス（日中活動事業）と夜のサービス（居住支援事業）に分けることによ\nり、サービスの組み合わせを選択できる。<br/>\n利用者一人ひとりの個別支援計画を作成して、利用目的にかなったサービスが提供される。</p>\n\n<h2>障害児を対象としたサービス</h2>\n<h3>■「児童福祉法」による障害児を対象としたサービスの概要</h3>\n<ul>\n  <li>障害児施設：通所による支援、入所による支援の2つに大別されている</li>\n  <li>居宅サービスと通所サービスの一体的利用：居宅サービスと通所サービスが一体的に利用できる</li>\n　<li>放課後等デイサービス、保育所等訪問支援：学齢児を対象とした放課後支援充実・障害があっても保育所等の利用ができるよう訪問サービス創設</li>\n　<li>在園期間の延長措置の見直し：18歳以上の障害児施設入所者には障害者総合支援法に基づく障害福祉サービスが提供される。<br/>なお、現に入所している方が退所させられないよう配慮</li>\n</ul>\n\n<h3>市町村・都道府県における障害児を対象としたサービス</h3>\n<table class=\"table table-bordered\">\n  <caption>市町村</caption>\n<tr>\n  <th rowspan=\"4\" class=\"table-success\">\n    障害児通所支援\n  </th>\n  <td class=\"table-success\">\n    児童発達支援\n  </td>\n  <td rowspan=\"2\">\n    様々な障害があっても身近な地域で適切な支援が受けられる。<br/>\n    ①児童発達支援センター／医療型児童発達支援センター<br/>\n    通所支援のほか、身近な地域の障害児支援の拠点として、「地域で生活\n    する障害児や家族への支援」、<br/>「地域の障害児を預かる施設に対する支\n    援」を実施するなどの地域支援を実施。<br/>医療の提供の有無によ\n    って、「児童発達支援センター」と「医療型児童発達支援センター」に\n    分かれる。<br/>\n    ②児童発達支援事業<br/>\n    通所利用の未就学の障害児に対する支援を行う身近な療育の場。\n  </td>\n</tr>\n<tr>\n  <td class=\"table-success\">\n    医療型児童発達支援\n  </td>\n</tr>\n<tr>\n  <td class=\"table-success\">\n    放課後デイサービス\n  </td>\n  <td>\n    学校就学中の障害児に対して、放課後や夏休み等の長期休暇中において、<br/>\n    生活能力向上のための訓練等を継続的に提供。<br/>\n    学校教育と相まって障害児の自立を促進するとともに、放課後等の居場所\n    づくりを推進。\n  </td>\n</tr>\n<tr>\n  <td class=\"table-success\">\n    保育所等訪問支援\n  </td>\n  <td>保育所等を現在利用中の障害児、今後利用する予定の障害児に対して、訪問により、\n    <br/>保育所等における集団生活の適応のための専門的な支援を提供し、保育所等の安定した利用を促進。</td>\n</tr>\n</table>\n<table class=\"table table-bordered\">\n  <caption>都道府県</caption>\n  <tr>\n  <th rowspan=\"2\" class=\"table-success\">\n    障害児入所支援\n  </th>\n  <td class=\"table-success\">福祉型障害児入所施設</td>\n  <td rowspan=\"2\">従来の障害種別の施設と同等の支援を確保するとともに、<br/>\n主たる対象とする障害以外の障害を受け入れた場合に、<br/>\nその障害に応じた適切な支援を提供します。<br/>\nまた、医療型は、このほか医療も提供します。<br/>\n18歳以上の障害児施設入所者には、自立（地域生活への移行等）を目指した支援を提供します。</td>\n  </tr>\n  <tr>\n    <td class=\"table-success\">医療型障害児入所施設</td>\n  </tr>\n</table>\n\n<h2>相談支援</h2>\n</article>\n"

/***/ }),

/***/ 393:
/***/ (function(module, exports) {

module.exports = "\n    <h1>{{title}}</h1>\n\n\n<article>\n<h2>介護保険制度制定の経緯</h2>\n  <ul>\n    <li>高齢化が深刻化(1960年から2000年の40年間で12%増加)</li>\n    <li>従来の老人福祉・老人医療制度による対応には限界…</li>\n　　<li>介護する家族の高齢化…</li>\n  </ul>\n  <p>→高齢者の介護を社会全体で支えあう仕組み(介護保険)を創設</p>\n\n  <ol>\n    <li>自立支援→介護だけでなく、高齢者の自立を支援</li>\n    <li>利用者本位→多様な主体から保険医療サービス、福祉サービスを総合的に受けられる制度</li>\n    <li>社会保険方式→給付と負担の関係が明確な社会保険方式の採用</li>\n  </ol>\n\n  <h2>介護保険制度の基本的な仕組み</h2>\n  <p>・介護保険制度の被保険者(加入者)</p>\n  <ol>\n    <li>65歳以上(第1号被保険者)要支援・要介護状態になった時、\n      制度を受けられる(保険料負担は市町村が徴収。\n　    原則、年金から天引き)</li>\n    <li>40～64歳までの医療保険加入者(第2号被保険者)末期がんや\n        関節リウマチ等の老化による病気が原因で<br/>\n　      要支援・要介護状態になった場合に限り、制度を受けられる\n        (保険料は医療保険者が医療保険の保険料と一括徴収)</li>\n  </ol>\n  <p>・第1号被保険者の保険料</p>\n  <ul>\n    <li>市町村（保険者）は、介護保険給付費の約22%に相当する額を第１号被保険者に保険料として納めてもらう</li>\n    <li>保険料はサービス基盤の整備の状況やサービス利用の見込みに応じて、保険者ごとに設定</li>\n　　<li>低所得者等に配慮し、負担能力に応じた負担とするため、市町村民税の課税状況等に応じて、段階別に設定(標準は9段階)</li>\n  </ul>\n  <p>・第2号被保険者の保険料</p>\n   <ul>\n    <li>各医療保険者を通じて保険料を徴収</li>\n    <li>全国ベースで第2号被保険者一人あたりの保険料額を計算し、これを各医療保険者が被保険者数に応じて納付</li>\n  </ul>\n  <p>できれば棒グラフはさむ</p>\n  <p>要介護認定制度について</p>\n  <ul>\n    <li>要介護認定（要支援認定を含む)は、介護の必要量を全国一律の基準に基づき、<br/>\n客観的に判定する仕組みであり、一次判定及び二次判定の結果に基づき、市町村が申請者について要介護認定を行う。</li>\n　</ul>\n<ol>\n    <li>一次判定・・・ 市町村の認定調査員による心身の状況調査（認定調査）及び主治医意見書に基づくコン ピュータ判定を行う。</li>\n    <li>二次判定・・・ 保健・医療・福祉の学識経験者により構成される介護認定審査会により、一次判定結果、主治医意見書等に基づき審査判定を行う</li>\n  </ol>\n  <p>・経費用等における提供サービスの内訳</p>\n  <p>グラフ使って表示</p>\n <!-- <a routerLink=\"./Service\" routerLinkActive=\"active\">サービス一覧へ</a>-->\n\n</article>\n"

/***/ }),

/***/ 394:
/***/ (function(module, exports) {

module.exports = "<h1>{{title}}</h1>\n\n<article>\n<p>ADL：日常生活動作</p>\n<br/>\n<p>介護支援専門員(ケアマネジャー)：利用者の生活や介護に関する相談に応じるとともに、<br/>\n　利用者がその心身の状況等に応じ適切なサービスを利用できるよう、<br/>\n　市区町村、サービスを提供する事業所、施設などとの連絡調整等を行う人のこと</p>\n<p>ケアプラン：利用者個々のニーズに合わせた介護保険制度内外の適切な保健・医療・福祉サービスが提供されるように、<br/>\n　　ケアマネジャー（介護支援専門員）が、ケアマネジメントという手法を用い、<br/>\n　利用者・家族と相談しながら作成するサービスの利用計画のこと。ケアプランは、</p>\n         <ol>\n           <li>利用者のニーズの把握</li>\n           <li>援助目標の明確化</li>\n           <li>具体的なサービスの種類と役割分担の決定</li>\n         </ol>\n         <p>\n        といった段階を経て作成され、公的なサービスだけでなく\n        インフォーマルな社会資源をも活用して作成される。</p>\n<p>在宅サービスの支給限度額：要介護状態区分によって支給限度額が変わる</p>\n\n<h3>平成29年(2017年)介護保険法改正について</h3>\n<ol type=\"I\">\n  <li>地域包括ケアシステムの深化・推進</li>\n  <ul>\n    <li>自立支援・重度化防止に向けた保険者機能の強化等の取組の推進(介護保険法)</li>\n    <li>医療・介護の連携の推進等(介護保険法、医療法)→新たな介護保険施設を創設(医学管理・看取り・ターミナル・生活支援機能合体)\n      <br/>\n      →介護医療病院：要介護者に対し、長期療養のための医療と日常生活上の世話(介護)を一体的に提供\n    </li>\n    <li>地域共生生活の実現に向けた取組の推進等(社会福祉法、介護保険法、障害者総合支援法、児童福祉法)<br/>\n    →新たに共生型サービスを位置づけ→高齢者と障害児者が同一の事業所でサービスを受けやすくするため、介護保険と障害福祉両方の制度に新たに共生型サービスを位置付ける。\n    </li>\n  </ul>\n  <li>介護保険制度の持続可能性の確保</li>\n  <p>2割負担者のうち特に所得の高い層の負担割合を3割とする。ただし、月額44,400円の負担の上限あり。\n(年金収入等が340万以上の人)</p>\n</ol>\n<p>ターミナルケア：終末期の医療・看護・介護。治癒の見込みがなく、死期が近づいた患者（利用者）に対し、<br/>\n延命治療中心でなく、患者の人格を尊重したケア中心の包括的な援助を行うこと。<br/>\n身体的苦痛や死に直面する恐怖を緩和し、残された人生をその人らしく生きられるよう援助を行う。\n</p>\n<p>地域包括ケアシステム：高齢者が住み慣れた地域でできる限り継続して生活を送れるように支えるために、<br/>\n個々の高齢者の状況やその変化に応じて、介護サービスを中核に、医療サービスをはじめとするさまざまな支援（住まい、医療、介護、予防、生活支援）を、<br/>\n継続的かつ包括的に提供する仕組みをいう。\n</p>\n\n<p>介護納付金における総報酬割の導入</p>\n<ul>\n  <li>第２号被保険者（40～64歳）の保険料は、介護納付金として医療保険者に賦課しており、<br/>\n各医療保険者が加 入者である第２号被保険者の負担すべき費用を一括納付している。</li>\n<li>各医療保険者は、介護納付金を、２号被保険者である『加入者数に応じて負担』しているが、<br/>\nこれを被用者保 険間では『報酬額に比例した負担』とする。（激変緩和の観点から段階的に導入）【平成29年8月分より実施】</li>\n</ul>\n</article>\n"

/***/ }),

/***/ 395:
/***/ (function(module, exports) {

module.exports = "<h1>{{title}}</h1>\n\n<article>\n<h2>自宅で利用</h2>\n  <ul>\n    \n    <li><a (click)=\"staticModal.show()\">訪問介護(ホームヘルプ)</a>：<span style=\"border-bottom:solid 2px red;\">ヘルパー</span>\n    が利用者の居宅を訪問して介護</li>\n    <br/>\n    <!--1項目につき1イラスト挿入-->\n    <li><a (click)=\"huroModal.show()\">訪問入浴介護</a>:自宅の浴槽での入浴が困難な方向け</li>\n    <li><a (click)=\"kangoModal.show()\">訪問介護</a>：<span style=\"border-bottom:solid 2px red;\">看護師等</span>\n    が利用者の住宅を訪問し、診療する</li>\n    <br/>\n    <li>訪問リハビリテーション：理学療法士や作業療法士等が利用者の居宅を訪問してリハビリ</li>\n    <li>夜間対応型訪問介護:夜間に定期的巡回・利用者の求めに応じた随時の訪問・\n      利用者の通報に応じたオペレーションサービス</li>\n      <li>定例巡回・随時対応型訪問介護看護:日中・夜間を通じて、定期巡回と随時の対応</li>\n      <li>介護小規模多機能型居宅介護(旧 複合型サービス):小規模多機能型住宅介護(通い・宿泊・訪問)\n        と訪問看護の組み合わせ</li>\n      <li>居宅療養管理指導:通院が困難な利用者へ医師等が家庭を訪問し、療養上の管理や指導、助言等を行う</li>\n  </ul>\n\n  <h2>自宅から通って利用</h2>\n  <ul>\n    <li>通所介護(デイサービス):施設に日帰りで行って介護をしてもらうようなとこ</li>\n    <li>地域密着型通所介護(小規模デイサービス)：通所介護と同じようなもの。地域に密着</li>\n    <li>認知症対応型通所介護:認知症の人に対するデイサービス</li>\n    <li>短期入所療養介護(ショートステイ)：介護老人保健施設などに短期間入所してもらい、\n      支援を行うサービス。家族の負担軽減。\n    </li>\n    <li>通所リハビリテーション(デイケア)：介護老人保健施設などで日帰りでリハビリ</li>\n    <li>小規模多機能居宅介護:通いによるサービス中心。希望に応じて訪問や宿泊を組み合わせ。\n      介護全般</li>\n      <li>短期入所生活介護(ショートステイ)：特別養護老人ホームなどに短期間入所してもらい、\n        介護するサービス</li>\n  </ul>\n\n  <h2>生活環境を整える</h2>\n  <ul>\n    <li>福祉用具貸与：福祉用具をレンタルにするサービス(車いすとか手すりとかとか)</li>\n    <li>特定福祉用具販売：福祉用具を販売するサービス(腰掛便座とか入浴補助用具とかとか)</li>\n 　 <li>住宅改修:自宅の改修を行うサービス(手すりの取り付け・段差の解消とかとか)</li> \n  </ul>\n\n  <h2>生活の場を自宅から移して利用</h2>\n  <ul>\n    <li>介護老人福祉施設(特別養護老人ホーム)：寝たきりや認知症などで、常に介護が必要かつ\n      自宅での生活が厳しい方のための施設(基本的に要介護3以上)\n    </li>\n    <li>地域密着型介護老人福祉施設入所者生活介護：定員が29人以下の特別養護老人ホーム</li>\n    <li>介護老人保健施設：リハビリなどで自立を支援し、家庭への復帰を目指すための施設。\n      リハビリに加えて、介護もしてくれる。\n    </li>\n    <li>介護療養型医療施設：症状は安定しているが、慢性疾患を有し、長期の療養が必要な人のための施設。\n      リハビリとか介護してくれる。\n    </li>\n    <li>特定施設入居者生活介護：有料老人ホームなどにおける入居者の日常生活を支えるサービス。\n      介護とかリハビリ。\n    </li>\n    <li>地域密着型特定施設入居者生活介護：老人ホームの小規模版(29人以下)</li>\n    <li>認知症対応型共同生活介護(認知症高齢者部グループホーム)：認知症の高齢者たちが共同で生活。\n      その中で必要な介護とかリハビリを行う。</li>\n  </ul>\n\n  <h2>介護予防のためのサービス(要支援の人たち向け)</h2>\n  <ul>\n    <li>介護予防訪問介護(ホームヘルプ)：訪問介護員が利用者の居宅を訪問して、\n      食事や家事等の介護を行うサービス</li>\n    <li>介護予防訪問入浴介護：自宅の入浴が困難な方へのサービス</li>\n    <li>介護予防訪問看護：看護師等が利用者の居宅を訪問し、\n      健康チェックとか自宅療養生活を支えるサービス\n    </li>\n    <li>介護予防訪問リハビリテーション：利用者の自宅でリハビリを行うサービス\n    </li>\n    <li>介護予防居宅療養管理指導：通院が困難な利用者へ医師等が家庭を訪問し、\n      療養上の管理や指導、助言等を行うサービス\n    </li>\n    <li>介護予防認知症対応型通所介護：軽度の認知症の人に対するデイサービス(日帰りサービス)</li>\n    <li>介護予防通所リハビリテーション(デイケア)：介護老人保健施設などで日帰りでリハビリを\n      行うサービス</li>\n      <li>介護予防短期入所生活介護(ショートステイ)：特別養護老人ホームなどに短期間入所してもらい、\n        介護を行うサービス。家族の負担軽減。</li>\n      <li>介護予防福祉用具貸与：日常生活や介護に役立つ福祉用具をレンタル(車いすとか)</li>\n      <li>特定介護予防福祉用具販売：日常生活や介護に役立つ福祉用具を販売(便座とか浴槽とか)</li>\n      <li>介護予防住宅改修：住宅の改修を行うサービス(手すりとかスロープとかの設置とか)</li>\n      <li>介護予防小規模多機能型居宅介護：通いを中心に訪問や宿泊を組み合わせたサービス</li>\n      <li>介護予防特定施設入居者生活介護：有料老人ホームなどが、利用者に介護とか日常生活上の支援を行う</li>\n      <li>介護予防認知症対応型共同生活介護：認知症の高齢者が共同生活する住居においてその世話とかリハビリ支援</li>\n  </ul>\n\n\n \n<div class=\"modal fade\" bsModal #huroModal=\"bs-modal\" [config]=\"{backdrop: 'static'}\"\n     tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title pull-left\">訪問入浴介護</h4>\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"huroModal.hide()\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\" id=\"huro\">\n        <p style=\"margin-top: 400px;\">自宅にヘルパーが来て入浴をお手伝い</p>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"modal fade\" bsModal #staticModal=\"bs-modal\" [config]=\"{backdrop: 'static'}\"\n     tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title pull-left\">訪問介護</h4>\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"staticModal.hide()\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\" id=\"kaigo\">\n        <p style=\"margin-top: 400px;\">ホームヘルプ：ヘルパー が利用者の居宅を訪問して介護</p>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"modal fade\" bsModal #kangoModal=\"bs-modal\" [config]=\"{backdrop: 'static'}\"\n     tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title pull-left\">訪問介護</h4>\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"kangoModal.hide()\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\" id=\"kango\">\n        <p style=\"margin-top: 400px;\">看護師が利用者の居宅を訪問して介護</p>\n      </div>\n    </div>\n  </div>\n</div>\n\n</article>\n"

/***/ }),

/***/ 437:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ 438:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "gotmother.f67df8a2c99d34d8cb38.png";

/***/ }),

/***/ 445:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(292);


/***/ })

},[445]);
//# sourceMappingURL=main.bundle.js.map