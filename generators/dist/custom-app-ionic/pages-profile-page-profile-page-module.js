(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-profile-page-profile-page-module"],{

/***/ "./src/app/pages/profile-page/profile-page.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/profile-page/profile-page.module.ts ***!
  \***********************************************************/
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
var profile_page_component_1 = __webpack_require__(/*! ./profile-page.component */ "./src/app/pages/profile-page/profile-page.component.ts");
var profile_page_routes_1 = __webpack_require__(/*! ./profile-page.routes */ "./src/app/pages/profile-page/profile-page.routes.ts");
var ProfilePageModule = /** @class */ (function () {
    function ProfilePageModule() {
    }
    ProfilePageModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                shared_module_1.SharedModule,
                ionic_1.ProfilePanelModule,
                router_1.RouterModule.forChild(profile_page_routes_1.PROFILE_PAGE_ROUTES)
            ],
            declarations: [profile_page_component_1.ProfilePageComponent]
        })
    ], ProfilePageModule);
    return ProfilePageModule;
}());
exports.ProfilePageModule = ProfilePageModule;


/***/ })

}]);
//# sourceMappingURL=pages-profile-page-profile-page-module.js.map