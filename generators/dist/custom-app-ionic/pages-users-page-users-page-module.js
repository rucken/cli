(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-users-page-users-page-module"],{

/***/ "./src/app/pages/users-page/users-page.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/users-page/users-page.module.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
var common_1 = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
var core_1 = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
var router_1 = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
var ionic_1 = __webpack_require__(/*! @rucken/ionic */ "../../node_modules/@rucken/ionic/fesm5/rucken-ionic.js");
var shared_module_1 = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
var users_page_component_1 = __webpack_require__(/*! ./users-page.component */ "./src/app/pages/users-page/users-page.component.ts");
var users_page_routes_1 = __webpack_require__(/*! ./users-page.routes */ "./src/app/pages/users-page/users-page.routes.ts");
var UsersPageModule = /** @class */ (function () {
    function UsersPageModule() {
    }
    UsersPageModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                shared_module_1.SharedModule,
                ionic_1.UsersListModule,
                router_1.RouterModule.forChild(users_page_routes_1.USERS_PAGE_ROUTES)
            ],
            declarations: [users_page_component_1.UsersPageComponent]
        })
    ], UsersPageModule);
    return UsersPageModule;
}());
exports.UsersPageModule = UsersPageModule;


/***/ })

}]);
//# sourceMappingURL=pages-users-page-users-page-module.js.map