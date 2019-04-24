(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-groups-page-groups-page-module"],{

/***/ "./src/app/pages/groups-page/groups-page.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/groups-page/groups-page.module.ts ***!
  \*********************************************************/
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
var groups_page_component_1 = __webpack_require__(/*! ./groups-page.component */ "./src/app/pages/groups-page/groups-page.component.ts");
var groups_page_routes_1 = __webpack_require__(/*! ./groups-page.routes */ "./src/app/pages/groups-page/groups-page.routes.ts");
var GroupsPageModule = /** @class */ (function () {
    function GroupsPageModule() {
    }
    GroupsPageModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                shared_module_1.SharedModule,
                ionic_1.GroupsListModule,
                router_1.RouterModule.forChild(groups_page_routes_1.GROUPS_PAGE_ROUTES)
            ],
            declarations: [groups_page_component_1.GroupsPageComponent]
        })
    ], GroupsPageModule);
    return GroupsPageModule;
}());
exports.GroupsPageModule = GroupsPageModule;


/***/ })

}]);
//# sourceMappingURL=pages-groups-page-groups-page-module.js.map