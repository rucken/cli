(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-custom-entities-page-custom-entities-page-module"],{

/***/ "./src/app/pages/custom-entities-page/custom-entities-page.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/custom-entities-page/custom-entities-page.module.ts ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
var common_1 = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
var core_1 = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
var router_1 = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
var custom_lib_ionic_1 = __webpack_require__(/*! @custom-org/custom-lib-ionic */ "../../dist/custom-org/custom-lib-ionic/fesm5/custom-org-custom-lib-ionic.js");
var shared_module_1 = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
var custom_entities_page_component_1 = __webpack_require__(/*! ./custom-entities-page.component */ "./src/app/pages/custom-entities-page/custom-entities-page.component.ts");
var custom_entities_page_routes_1 = __webpack_require__(/*! ./custom-entities-page.routes */ "./src/app/pages/custom-entities-page/custom-entities-page.routes.ts");
var CustomEntitiesPageModule = /** @class */ (function () {
    function CustomEntitiesPageModule() {
    }
    CustomEntitiesPageModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                shared_module_1.SharedModule,
                custom_lib_ionic_1.CustomEntitiesListModule,
                router_1.RouterModule.forChild(custom_entities_page_routes_1.CUSTOM_ENTITIES_PAGE_ROUTES)
            ],
            declarations: [custom_entities_page_component_1.CustomEntitiesPageComponent]
        })
    ], CustomEntitiesPageModule);
    return CustomEntitiesPageModule;
}());
exports.CustomEntitiesPageModule = CustomEntitiesPageModule;


/***/ })

}]);
//# sourceMappingURL=pages-custom-entities-page-custom-entities-page-module.js.map