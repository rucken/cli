(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["content-types-frame-content-types-frame-module"],{

/***/ "./src/app/pages/entities-page/content-types-frame/content-types-frame.module.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/entities-page/content-types-frame/content-types-frame.module.ts ***!
  \***************************************************************************************/
/*! exports provided: ContentTypesFrameModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentTypesFrameModule", function() { return ContentTypesFrameModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _rucken_web__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @rucken/web */ "../../node_modules/@rucken/web/fesm5/rucken-web.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-permissions */ "../../node_modules/ngx-permissions/ngx-permissions.umd.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ngx_permissions__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _content_types_frame_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./content-types-frame.component */ "./src/app/pages/entities-page/content-types-frame/content-types-frame.component.ts");
/* harmony import */ var _content_types_frame_routes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./content-types-frame.routes */ "./src/app/pages/entities-page/content-types-frame/content-types-frame.routes.ts");









var ContentTypesFrameModule = /** @class */ (function () {
    function ContentTypesFrameModule() {
    }
    ContentTypesFrameModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                ngx_permissions__WEBPACK_IMPORTED_MODULE_5__["NgxPermissionsModule"].forChild(),
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(_content_types_frame_routes__WEBPACK_IMPORTED_MODULE_8__["CONTENT_TYPES_FRAME_ROUTES"]),
                _rucken_web__WEBPACK_IMPORTED_MODULE_4__["ContentTypesGridModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
            ],
            declarations: [_content_types_frame_component__WEBPACK_IMPORTED_MODULE_7__["ContentTypesFrameComponent"]]
        })
    ], ContentTypesFrameModule);
    return ContentTypesFrameModule;
}());



/***/ })

}]);
//# sourceMappingURL=content-types-frame-content-types-frame-module.js.map