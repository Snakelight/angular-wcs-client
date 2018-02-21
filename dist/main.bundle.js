webpackJsonp(["main"],{

/***/ "./node_modules/moment/locale recursive ru|en":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./en-au": "./node_modules/moment/locale/en-au.js",
	"./en-au.js": "./node_modules/moment/locale/en-au.js",
	"./en-ca": "./node_modules/moment/locale/en-ca.js",
	"./en-ca.js": "./node_modules/moment/locale/en-ca.js",
	"./en-gb": "./node_modules/moment/locale/en-gb.js",
	"./en-gb.js": "./node_modules/moment/locale/en-gb.js",
	"./en-ie": "./node_modules/moment/locale/en-ie.js",
	"./en-ie.js": "./node_modules/moment/locale/en-ie.js",
	"./en-nz": "./node_modules/moment/locale/en-nz.js",
	"./en-nz.js": "./node_modules/moment/locale/en-nz.js",
	"./ru": "./node_modules/moment/locale/ru.js",
	"./ru.js": "./node_modules/moment/locale/ru.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/moment/locale recursive ru|en";

/***/ }),

/***/ "./src lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src lazy recursive";

/***/ }),

/***/ "./src/app/SomeRoute/SomeRoute.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  SomeRoute works!\n</p>"

/***/ }),

/***/ "./src/app/SomeRoute/SomeRoute.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/SomeRoute/SomeRoute.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SomeRouteComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SomeRouteComponent = /** @class */ (function () {
    function SomeRouteComponent(route) {
        this.route = route;
    }
    SomeRouteComponent.prototype.ngOnInit = function () {
    };
    SomeRouteComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-SomeRoute',
            template: __webpack_require__("./src/app/SomeRoute/SomeRoute.component.html"),
            styles: [__webpack_require__("./src/app/SomeRoute/SomeRoute.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], SomeRouteComponent);
    return SomeRouteComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng_zorro_antd__ = __webpack_require__("./node_modules/ng-zorro-antd/esm5/antd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routes__ = __webpack_require__("./src/app/app.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__index_index_component__ = __webpack_require__("./src/app/index/index.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__index_menu_menu_component__ = __webpack_require__("./src/app/index/menu/menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__index_menu_menuItem_menuItem_component__ = __webpack_require__("./src/app/index/menu/menuItem/menuItem.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__SomeRoute_SomeRoute_component__ = __webpack_require__("./src/app/SomeRoute/SomeRoute.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__index_index_component__["a" /* IndexComponent */],
                __WEBPACK_IMPORTED_MODULE_10__SomeRoute_SomeRoute_component__["a" /* SomeRouteComponent */],
                __WEBPACK_IMPORTED_MODULE_8__index_menu_menu_component__["a" /* MenuComponent */],
                __WEBPACK_IMPORTED_MODULE_9__index_menu_menuItem_menuItem_component__["a" /* MenuItemComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_routes__["a" /* routeConfig */]),
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_4_ng_zorro_antd__["b" /* NgZorroAntdModule */].forRoot()
            ],
            providers: [{ provide: __WEBPACK_IMPORTED_MODULE_4_ng_zorro_antd__["a" /* NZ_LOCALE */], useValue: __WEBPACK_IMPORTED_MODULE_4_ng_zorro_antd__["d" /* ruRU */] }],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7__index_index_component__["a" /* IndexComponent */]]
        }),
        __metadata("design:paramtypes", [])
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routeConfig; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__SomeRoute_SomeRoute_component__ = __webpack_require__("./src/app/SomeRoute/SomeRoute.component.ts");

var routeConfig = [
    {
        path: 'home/:id',
        component: __WEBPACK_IMPORTED_MODULE_0__SomeRoute_SomeRoute_component__["a" /* SomeRouteComponent */]
    }
];


/***/ }),

/***/ "./src/app/index/index.component.html":
/***/ (function(module, exports) {

module.exports = "<nz-layout class=\"wrapper\">\r\n    <nz-header class=\"header\">\r\n        <i class=\"anticon trigger\" style=\"cursor:pointer\" [class.anticon-menu-fold]=\"!menuIsCollapsed\" [class.anticon-menu-unfold]=\"menuIsCollapsed\"\r\n            (click)=\"menuIsCollapsed=!menuIsCollapsed\"></i>\r\n    </nz-header>\r\n\r\n    <nz-sider nzCollapsible [(nzCollapsed)]=\"menuIsCollapsed\" [nzTrigger]=\"null\" class=\"side\">\r\n        <app-menu [collapsed]=\"menuIsCollapsed\"></app-menu>\r\n    </nz-sider>\r\n    <nz-content class=\"content\">\r\n        <a routerLink=\"/home/1\" [queryParams]=\"{ filter: 'ыфва ф' }\">go home</a>\r\n        <router-outlet></router-outlet>\r\n    </nz-content>\r\n</nz-layout>"

/***/ }),

/***/ "./src/app/index/index.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".wrapper {\n  height: 100%; }\n\n.header {\n  height: 40px;\n  line-height: 40px;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  padding: 0 12px; }\n\n.header .trigger {\n    width: 40px;\n    height: 40px;\n    line-height: 40px;\n    font-size: 16px;\n    cursor: pointer;\n    color: white; }\n\n.content {\n  margin-top: 40px;\n  margin-left: 64px;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  padding: 2px 4px; }\n\n.side {\n  position: absolute;\n  top: 40px;\n  bottom: 0;\n  z-index: 100; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/index/index.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IndexComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__menu_menu_component__ = __webpack_require__("./src/app/index/menu/menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng_zorro_antd__ = __webpack_require__("./node_modules/ng-zorro-antd/esm5/antd.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var IndexComponent = /** @class */ (function () {
    function IndexComponent(notify) {
        this.notify = notify;
        this.menuIsCollapsed = true;
    }
    IndexComponent.prototype.ngOnInit = function () {
        this.notify.success("Запущено", "", { nzDuration: 0 });
    };
    IndexComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app',
            template: __webpack_require__("./src/app/index/index.component.html"),
            styles: [__webpack_require__("./src/app/index/index.component.scss")],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_1__menu_menu_component__["a" /* MenuComponent */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ng_zorro_antd__["c" /* NzNotificationService */]])
    ], IndexComponent);
    return IndexComponent;
}());



/***/ }),

/***/ "./src/app/index/menu/menu.component.html":
/***/ (function(module, exports) {

module.exports = "<ul nz-menu [nzTheme]=\"'dark'\" [nzMode]=\"collapsed?'vertical':'inline'\" [nzInlineCollapsed]=\"collapsed\">\r\n    <app-menuItem *ngFor=\"let item of items\" [item]=\"item\"></app-menuItem>\r\n</ul>"

/***/ }),

/***/ "./src/app/index/menu/menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MenuNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__menuItem_menuItem_component__ = __webpack_require__("./src/app/index/menu/menuItem/menuItem.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var json = __webpack_require__("./src/app/index/menu/nodes.json");
var data = json.nodes;
var Permission = /** @class */ (function () {
    function Permission() {
    }
    return Permission;
}());
var MenuNode = /** @class */ (function () {
    function MenuNode() {
    }
    return MenuNode;
}());

var genNode = function (dataRow) {
    var node = new MenuNode();
    node.permission = new Permission();
    node.permission.nameRecord = dataRow.permission.nameRecord;
    node.permission.iconClass = dataRow.permission.webClass;
    if (dataRow.childs) {
        node.childs = dataRow.childs.map(genNode);
    }
    return node;
};
var MenuComponent = /** @class */ (function () {
    function MenuComponent() {
        this.items = data.map(genNode);
    }
    MenuComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean)
    ], MenuComponent.prototype, "collapsed", void 0);
    MenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            entryComponents: [__WEBPACK_IMPORTED_MODULE_1__menuItem_menuItem_component__["a" /* MenuItemComponent */]],
            selector: 'app-menu',
            template: __webpack_require__("./src/app/index/menu/menu.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/index/menu/menuItem/menuItem.component.html":
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"hasChilds(); else elseTemplate\">\n  <li nz-submenu>\n    <span title>\n      <i class=\"anticon {{item.permission.iconClass}}\"></i>\n      <span class=\"nav-text\">{{item.permission.nameRecord}}</span>\n    </span>\n    <ul>\n      <app-menuItem *ngFor=\"let item of item.childs\" [item]=\"item\"></app-menuItem>\n    </ul>\n  </li>\n</ng-container>\n\n<ng-template #elseTemplate>\n  <li nz-menu-item>{{item.permission.nameRecord}}</li>\n</ng-template>"

/***/ }),

/***/ "./src/app/index/menu/menuItem/menuItem.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__menu_component__ = __webpack_require__("./src/app/index/menu/menu.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MenuItemComponent = /** @class */ (function () {
    function MenuItemComponent() {
    }
    MenuItemComponent.prototype.ngOnInit = function () {
    };
    MenuItemComponent.prototype.hasChilds = function () {
        return this.item.childs && this.item.childs.length > 0;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__menu_component__["b" /* MenuNode */])
    ], MenuItemComponent.prototype, "item", void 0);
    MenuItemComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-menuItem',
            template: __webpack_require__("./src/app/index/menu/menuItem/menuItem.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], MenuItemComponent);
    return MenuItemComponent;
}());



/***/ }),

/***/ "./src/app/index/menu/nodes.json":
/***/ (function(module, exports) {

module.exports = {"nodes":[{"permission":{"idRecord":80,"idTable":2603,"idRecordMain":null,"nameRecord":"Магазины","comment":"Раздел управления докуметооборотом магазина","level":1,"orderBy":"001","ordBy":1,"idModule":null,"nameModule":null,"nameForm":null,"nameComponent":null,"nameSource":null,"userName":"","nameRole":"","idRole":0,"status":-1,"idProject":2,"commentModule":null,"webId":"shopIdMenu","webClass":"fa fa-building"},"childs":[{"permission":{"idRecord":82,"idTable":2603,"idRecordMain":80,"nameRecord":"Заказы","comment":null,"level":2,"orderBy":"001.008","ordBy":2,"idModule":null,"nameModule":null,"nameForm":null,"nameComponent":null,"nameSource":null,"userName":"","nameRole":"","idRole":0,"status":-1,"idProject":2,"commentModule":null,"webId":"shopOrdersMenu","webClass":"fa fa-shopping-cart"},"childs":[{"permission":{"idRecord":85,"idTable":2603,"idRecordMain":82,"nameRecord":"Закупка. Приемка","comment":"Закупка. Приемка","level":3,"orderBy":"001.008.006","ordBy":2,"idModule":"58","nameModule":"Закупка. Приемка","nameForm":"PurchaseAcceptance","nameComponent":null,"nameSource":"../Shops/PurchaseAcceptance","userName":"THERA\\VShvedchikov","nameRole":"WebRemanagerAdmin","idRole":10,"status":1,"idProject":2,"commentModule":"Закупка. Приемка","webId":"purchaseAccShop","webClass":"fa fa-shopping-bag"},"childs":[]}]}]},{"permission":{"idRecord":51,"idTable":2603,"idRecordMain":null,"nameRecord":"Управление 1С","comment":"","level":1,"orderBy":"002","ordBy":1,"idModule":null,"nameModule":null,"nameForm":null,"nameComponent":null,"nameSource":null,"userName":"","nameRole":"","idRole":0,"status":-1,"idProject":2,"commentModule":null,"webId":"1c_ts","webClass":"fa fa-cube"},"childs":[{"permission":{"idRecord":52,"idTable":2603,"idRecordMain":51,"nameRecord":"Транспортные средства","comment":"","level":2,"orderBy":"002.004","ordBy":1,"idModule":"42","nameModule":"Транспортные средства","nameForm":"TransportOrders","nameComponent":"","nameSource":"../_1C/TransportOrders","userName":"THERA\\VShvedchikov","nameRole":"WebRemanagerAdmin","idRole":10,"status":1,"idProject":2,"commentModule":"","webId":"orders","webClass":"fa fa-truck"},"childs":[]},{"permission":{"idRecord":53,"idTable":2603,"idRecordMain":51,"nameRecord":"Табели","comment":"","level":2,"orderBy":"002.010","ordBy":2,"idModule":"43","nameModule":"Табели","nameForm":"Tabel","nameComponent":"","nameSource":"../_1C/Tabel","userName":"THERA\\VShvedchikov","nameRole":"WebRemanagerAdmin","idRole":10,"status":1,"idProject":2,"commentModule":"","webId":"tabels","webClass":"fa fa-calendar"},"childs":[]}]},{"permission":{"idRecord":54,"idTable":2603,"idRecordMain":null,"nameRecord":"AndroidТСД","comment":"","level":1,"orderBy":"003","ordBy":2,"idModule":null,"nameModule":null,"nameForm":null,"nameComponent":null,"nameSource":null,"userName":"","nameRole":"","idRole":0,"status":-1,"idProject":2,"commentModule":null,"webId":"androidtsd","webClass":"fa fa-android"},"childs":[{"permission":{"idRecord":74,"idTable":2603,"idRecordMain":54,"nameRecord":"miniRose","comment":null,"level":2,"orderBy":"003.006","ordBy":2,"idModule":null,"nameModule":null,"nameForm":null,"nameComponent":null,"nameSource":null,"userName":"","nameRole":"","idRole":0,"status":-1,"idProject":2,"commentModule":null,"webId":"minirosetsd","webClass":"fa fa-shopping-cart "},"childs":[{"permission":{"idRecord":55,"idTable":2603,"idRecordMain":74,"nameRecord":"Авторизованные устройства","comment":"","level":3,"orderBy":"003.006.005","ordBy":2,"idModule":"44","nameModule":"Авторизованные устройства","nameForm":"Devices","nameComponent":"","nameSource":"../MiniRoseTSD/Devices","userName":"THERA\\VShvedchikov","nameRole":"WebRemanagerAdmin","idRole":10,"status":1,"idProject":2,"commentModule":"","webId":"miniRoseDevices","webClass":"fa fa-wrench"},"childs":[]},{"permission":{"idRecord":56,"idTable":2603,"idRecordMain":74,"nameRecord":"Обновление устройств","comment":"","level":3,"orderBy":"003.006.007","ordBy":2,"idModule":"45","nameModule":"Обновление устройств","nameForm":"UpdateDevices","nameComponent":"","nameSource":"../MiniRoseTSD/UpdateDevices","userName":"THERA\\VShvedchikov","nameRole":"WebRemanagerAdmin","idRole":10,"status":1,"idProject":2,"commentModule":"","webId":"miniroseUpdate_devices","webClass":"fa fa-wrench"},"childs":[]},{"permission":{"idRecord":57,"idTable":2603,"idRecordMain":74,"nameRecord":"Восстановление","comment":"","level":3,"orderBy":"003.006.010","ordBy":3,"idModule":"46","nameModule":"Восстановление","nameForm":"Backup","nameComponent":"","nameSource":"../MiniRoseTSD/Backup","userName":"THERA\\VShvedchikov","nameRole":"WebRemanagerAdmin","idRole":10,"status":1,"idProject":2,"commentModule":"","webId":"miniroseBackup","webClass":"fa fa-wrench"},"childs":[]}]},{"permission":{"idRecord":75,"idTable":2603,"idRecordMain":54,"nameRecord":"inventoryTerminal","comment":null,"level":2,"orderBy":"003.011","ordBy":3,"idModule":null,"nameModule":null,"nameForm":null,"nameComponent":null,"nameSource":null,"userName":"","nameRole":"","idRole":0,"status":-1,"idProject":2,"commentModule":null,"webId":"inventorytsd","webClass":"fa fa-calculator "},"childs":[{"permission":{"idRecord":77,"idTable":2603,"idRecordMain":75,"nameRecord":"Авторизованные устройства","comment":"","level":3,"orderBy":"003.011.001","ordBy":1,"idModule":"57","nameModule":"Авторизованные устройства","nameForm":"Devices","nameComponent":null,"nameSource":"../InventoryTSD/Devices","userName":"THERA\\VShvedchikov","nameRole":"WebRemanagerAdmin","idRole":10,"status":1,"idProject":2,"commentModule":null,"webId":"inventoryDevices","webClass":"fa fa-wrench"},"childs":[]},{"permission":{"idRecord":78,"idTable":2603,"idRecordMain":75,"nameRecord":"Обновление устройств","comment":"","level":3,"orderBy":"003.011.008","ordBy":2,"idModule":"55","nameModule":"Обновление устройств","nameForm":"UpdateDevices","nameComponent":null,"nameSource":"../InventoryTSD/UpdateDevices","userName":"THERA\\VShvedchikov","nameRole":"WebRemanagerAdmin","idRole":10,"status":1,"idProject":2,"commentModule":null,"webId":"inventoryUpdate_devices","webClass":"fa fa-wrench"},"childs":[]},{"permission":{"idRecord":79,"idTable":2603,"idRecordMain":75,"nameRecord":"Восстановление","comment":"","level":3,"orderBy":"003.011.009","ordBy":3,"idModule":"56","nameModule":"Восстановление","nameForm":"Backup","nameComponent":null,"nameSource":"../InventoryTSD/Backup","userName":"THERA\\VShvedchikov","nameRole":"WebRemanagerAdmin","idRole":10,"status":1,"idProject":2,"commentModule":null,"webId":"inventoryBackup","webClass":"fa fa-wrench"},"childs":[]}]}]},{"permission":{"idRecord":70,"idTable":2603,"idRecordMain":null,"nameRecord":"Общая инвентаризация","comment":null,"level":1,"orderBy":"004","ordBy":3,"idModule":null,"nameModule":null,"nameForm":null,"nameComponent":null,"nameSource":null,"userName":"","nameRole":"","idRole":0,"status":-1,"idProject":2,"commentModule":null,"webId":"inventory","webClass":"fa fa-cubes"},"childs":[{"permission":{"idRecord":73,"idTable":2603,"idRecordMain":70,"nameRecord":"Инспектора КРО","comment":"","level":2,"orderBy":"004.012","ordBy":3,"idModule":"54","nameModule":"Инспектора КРО","nameForm":"Inspectors","nameComponent":null,"nameSource":"../Inventory/Inspectors","userName":"THERA\\VShvedchikov","nameRole":"WebRemanagerAdmin","idRole":10,"status":1,"idProject":2,"commentModule":null,"webId":"kroInspectors","webClass":"fa fa-users"},"childs":[]}]},{"permission":{"idRecord":58,"idTable":2603,"idRecordMain":null,"nameRecord":"Справочники","comment":"","level":1,"orderBy":"005","ordBy":4,"idModule":null,"nameModule":null,"nameForm":null,"nameComponent":null,"nameSource":null,"userName":"","nameRole":"","idRole":0,"status":-1,"idProject":2,"commentModule":null,"webId":"ref_books","webClass":"fa fa-book"},"childs":[{"permission":{"idRecord":59,"idTable":2603,"idRecordMain":58,"nameRecord":"Розница","comment":null,"level":2,"orderBy":"005.002","ordBy":1,"idModule":null,"nameModule":null,"nameForm":null,"nameComponent":null,"nameSource":null,"userName":"","nameRole":"","idRole":0,"status":-1,"idProject":2,"commentModule":null,"webId":"ref_books_shop","webClass":"fa fa-shopping-cart"},"childs":[{"permission":{"idRecord":61,"idTable":2603,"idRecordMain":59,"nameRecord":"Настройка магазинов","comment":"","level":3,"orderBy":"005.002.003","ordBy":1,"idModule":"47","nameModule":"Настройка магазинов","nameForm":"Shops","nameComponent":"","nameSource":"../Books/Shops","userName":"THERA\\VShvedchikov","nameRole":"WebRemanagerAdmin","idRole":10,"status":1,"idProject":2,"commentModule":null,"webId":"books_shop","webClass":"fa fa-wrench"},"childs":[]}]}]},{"permission":{"idRecord":63,"idTable":2603,"idRecordMain":null,"nameRecord":"Отчеты","comment":null,"level":1,"orderBy":"006","ordBy":5,"idModule":null,"nameModule":null,"nameForm":null,"nameComponent":null,"nameSource":null,"userName":"","nameRole":"","idRole":0,"status":-1,"idProject":2,"commentModule":null,"webId":"report","webClass":"fa fa-bar-chart-o"},"childs":[{"permission":{"idRecord":64,"idTable":2603,"idRecordMain":63,"nameRecord":"Управление шаблонами","comment":"","level":2,"orderBy":"006.005","ordBy":1,"idModule":"49","nameModule":"Управление шаблонами","nameForm":"ReportManagement","nameComponent":"","nameSource":"../Report/ReportManagement","userName":"THERA\\VShvedchikov","nameRole":"WebRemanagerAdmin","idRole":10,"status":1,"idProject":2,"commentModule":null,"webId":"report_management","webClass":"fa fa-wrench"},"childs":[]},{"permission":{"idRecord":65,"idTable":2603,"idRecordMain":63,"nameRecord":"Дизайнер отчетов","comment":"","level":2,"orderBy":"006.007","ordBy":2,"idModule":"51","nameModule":"Дизайнер отчетов","nameForm":"ReportDesigner","nameComponent":null,"nameSource":"../Report/ReportDesigner","userName":"THERA\\VShvedchikov","nameRole":"WebRemanagerAdmin","idRole":10,"status":1,"idProject":2,"commentModule":null,"webId":"report_designer","webClass":"fa fa-file-text-o"},"childs":[]}]}]}

/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




var modulePromise = Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
var makeHot = function () {
    console.log('enable hot reload');
    module.hot.accept();
    module.hot.dispose(function () {
        var oldRootElem = document.querySelector('app');
        var newRootElem = document.createElement('app');
        oldRootElem.parentNode.insertBefore(newRootElem, oldRootElem);
        oldRootElem.parentNode.removeChild(oldRootElem);
        modulePromise.then(function (appModule) { return appModule.destroy(); });
    });
};
if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* enableProdMode */])();
}
else {
    if (false)
        makeHot();
}

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

},["./src/main.ts"]);
//# sourceMappingURL=main.bundle.js.map