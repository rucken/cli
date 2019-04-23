(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-frame-profile-frame-module"],{

/***/ "./src/app/pages/account-page/profile-frame/profile-frame.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/account-page/profile-frame/profile-frame.module.ts ***!
  \**************************************************************************/
/*! exports provided: ProfileFrameModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileFrameModule", function() { return ProfileFrameModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _rucken_web__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @rucken/web */ "../../node_modules/@rucken/web/fesm5/rucken-web.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-permissions */ "../../node_modules/ngx-permissions/ngx-permissions.umd.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ngx_permissions__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _profile_frame_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile-frame.component */ "./src/app/pages/account-page/profile-frame/profile-frame.component.ts");
/* harmony import */ var _profile_frame_routes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./profile-frame.routes */ "./src/app/pages/account-page/profile-frame/profile-frame.routes.ts");








var ProfileFrameModule = /** @class */ (function () {
    function ProfileFrameModule() {
    }
    ProfileFrameModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                ngx_permissions__WEBPACK_IMPORTED_MODULE_4__["NgxPermissionsModule"].forChild(),
                _rucken_web__WEBPACK_IMPORTED_MODULE_3__["ProfilePanelModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_profile_frame_routes__WEBPACK_IMPORTED_MODULE_7__["PROFILE_FRAME_ROUTES"])
            ],
            declarations: [_profile_frame_component__WEBPACK_IMPORTED_MODULE_6__["ProfileFrameComponent"]]
        })
    ], ProfileFrameModule);
    return ProfileFrameModule;
}());



/***/ })

}]);
//# sourceMappingURL=profile-frame-profile-frame-module.js.map