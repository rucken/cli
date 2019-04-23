(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-account-page-account-page-module"],{

/***/ "./src/app/pages/account-page/account-page.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/account-page/account-page.module.ts ***!
  \***********************************************************/
/*! exports provided: AccountPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountPageModule", function() { return AccountPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _rucken_web__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @rucken/web */ "../../node_modules/@rucken/web/fesm5/rucken-web.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-permissions */ "../../node_modules/ngx-permissions/ngx-permissions.umd.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ngx_permissions__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _account_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./account-page.component */ "./src/app/pages/account-page/account-page.component.ts");
/* harmony import */ var _account_page_routes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./account-page.routes */ "./src/app/pages/account-page/account-page.routes.ts");








var AccountPageModule = /** @class */ (function () {
    function AccountPageModule() {
    }
    AccountPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                ngx_permissions__WEBPACK_IMPORTED_MODULE_4__["NgxPermissionsModule"].forChild(),
                _rucken_web__WEBPACK_IMPORTED_MODULE_3__["NavSidebarModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_account_page_routes__WEBPACK_IMPORTED_MODULE_7__["ACCOUNT_PAGE_ROUTES"])
            ],
            declarations: [_account_page_component__WEBPACK_IMPORTED_MODULE_6__["AccountPageComponent"]]
        })
    ], AccountPageModule);
    return AccountPageModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-account-page-account-page-module.js.map