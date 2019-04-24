(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-home-page-home-page-module"],{

/***/ "./src/app/pages/home-page/home-page.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/home-page/home-page.module.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
var common_1 = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
var core_1 = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
var router_1 = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
var shared_module_1 = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
var home_page_component_1 = __webpack_require__(/*! ./home-page.component */ "./src/app/pages/home-page/home-page.component.ts");
var home_page_routes_1 = __webpack_require__(/*! ./home-page.routes */ "./src/app/pages/home-page/home-page.routes.ts");
var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                shared_module_1.SharedModule,
                router_1.RouterModule.forChild(home_page_routes_1.HOME_PAGE_ROUTES)
            ],
            declarations: [home_page_component_1.HomePageComponent]
        })
    ], HomePageModule);
    return HomePageModule;
}());
exports.HomePageModule = HomePageModule;


/***/ })

}]);
//# sourceMappingURL=pages-home-page-home-page-module.js.map