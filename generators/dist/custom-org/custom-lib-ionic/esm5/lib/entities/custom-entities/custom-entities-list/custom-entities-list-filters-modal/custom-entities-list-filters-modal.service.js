/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Inject, Injectable } from "@angular/core";
import { STORAGE_CONFIG_TOKEN } from "@rucken/core";
import { BindObservable } from "bind-observable";
import { classToPlain, plainToClass } from "class-transformer";
import { CustomEntitiesListFiltersModal } from "./custom-entities-list-filters-modal";
import { DEFAULT_CUSTOM_ENTITIES_LIST_FILTERS_MODAL_CONFIG, CUSTOM_ENTITIES_LIST_FILTERS_MODAL_CONFIG_TOKEN } from "./custom-entities-list-filters-modal.config";
/**
 * @param {?} customEntitiesListFiltersModalService
 * @return {?}
 */
export function customEntitiesListFiltersModalServiceInitializeApp(customEntitiesListFiltersModalService) {
    return (/**
     * @return {?}
     */
    function () { return customEntitiesListFiltersModalService.initializeApp(); });
}
var CustomEntitiesListFiltersModalService = /** @class */ (function () {
    function CustomEntitiesListFiltersModalService(_customEntitiesListFiltersModalConfig, _storage) {
        this._customEntitiesListFiltersModalConfig = _customEntitiesListFiltersModalConfig;
        this._storage = _storage;
        this.current = undefined;
        this.storageKeyName = "custom-entities-list-filters-modal";
        this.current = this.getDefault();
    }
    /**
     * @return {?}
     */
    CustomEntitiesListFiltersModalService.prototype.getDefault = /**
     * @return {?}
     */
    function () {
        return plainToClass(CustomEntitiesListFiltersModal, tslib_1.__assign({}, DEFAULT_CUSTOM_ENTITIES_LIST_FILTERS_MODAL_CONFIG, this._customEntitiesListFiltersModalConfig), {
            groups: ["manual"]
        });
    };
    /**
     * @return {?}
     */
    CustomEntitiesListFiltersModalService.prototype.getCurrent = /**
     * @return {?}
     */
    function () {
        return this.current;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    CustomEntitiesListFiltersModalService.prototype.setCurrent = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        var _this = this;
        this._storage
            .setItem(this.storageKeyName, JSON.stringify(classToPlain(!value ? this.getDefault() : value, {
            groups: ["manual"]
        })))
            .then((/**
         * @param {?} _
         * @return {?}
         */
        function (_) { return (_this.current = value); }));
    };
    /**
     * @return {?}
     */
    CustomEntitiesListFiltersModalService.prototype.initCurrent = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return new Promise((/**
         * @param {?} resolve
         * @return {?}
         */
        function (resolve) {
            _this._storage.getItem(_this.storageKeyName).then((/**
             * @param {?} data
             * @return {?}
             */
            function (data) {
                if (data && data !== "undefined") {
                    try {
                        resolve(plainToClass(CustomEntitiesListFiltersModal, (/** @type {?} */ (JSON.parse(data))), { groups: ["manual"] }));
                    }
                    catch (error) {
                        resolve(_this.getCurrent());
                    }
                }
                else {
                    resolve(_this.getCurrent());
                }
            }));
        }));
    };
    /**
     * @return {?}
     */
    CustomEntitiesListFiltersModalService.prototype.initializeApp = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return new Promise((/**
         * @param {?} resolve
         * @return {?}
         */
        function (resolve) {
            _this.initCurrent().then((/**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                _this.setCurrent(value);
                resolve();
            }));
        }));
    };
    CustomEntitiesListFiltersModalService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    CustomEntitiesListFiltersModalService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [CUSTOM_ENTITIES_LIST_FILTERS_MODAL_CONFIG_TOKEN,] }] },
        { type: undefined, decorators: [{ type: Inject, args: [STORAGE_CONFIG_TOKEN,] }] }
    ]; };
    tslib_1.__decorate([
        BindObservable(),
        tslib_1.__metadata("design:type", CustomEntitiesListFiltersModal)
    ], CustomEntitiesListFiltersModalService.prototype, "current", void 0);
    return CustomEntitiesListFiltersModalService;
}());
export { CustomEntitiesListFiltersModalService };
if (false) {
    /** @type {?} */
    CustomEntitiesListFiltersModalService.prototype.current;
    /** @type {?} */
    CustomEntitiesListFiltersModalService.prototype.current$;
    /** @type {?} */
    CustomEntitiesListFiltersModalService.prototype.storageKeyName;
    /**
     * @type {?}
     * @private
     */
    CustomEntitiesListFiltersModalService.prototype._customEntitiesListFiltersModalConfig;
    /**
     * @type {?}
     * @private
     */
    CustomEntitiesListFiltersModalService.prototype._storage;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLWVudGl0aWVzLWxpc3QtZmlsdGVycy1tb2RhbC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGN1c3RvbS1vcmcvY3VzdG9tLWxpYi1pb25pYy8iLCJzb3VyY2VzIjpbImxpYi9lbnRpdGllcy9jdXN0b20tZW50aXRpZXMvY3VzdG9tLWVudGl0aWVzLWxpc3QvY3VzdG9tLWVudGl0aWVzLWxpc3QtZmlsdGVycy1tb2RhbC9jdXN0b20tZW50aXRpZXMtbGlzdC1maWx0ZXJzLW1vZGFsLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQVksb0JBQW9CLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDOUQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFL0QsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDdEYsT0FBTyxFQUNMLGlEQUFpRCxFQUVqRCwrQ0FBK0MsRUFDaEQsTUFBTSw2Q0FBNkMsQ0FBQzs7Ozs7QUFFckQsTUFBTSxVQUFVLGtEQUFrRCxDQUNoRSxxQ0FBNEU7SUFFNUU7OztJQUFPLGNBQU0sT0FBQSxxQ0FBcUMsQ0FBQyxhQUFhLEVBQUUsRUFBckQsQ0FBcUQsRUFBQztBQUNyRSxDQUFDO0FBRUQ7SUFRRSwrQ0FFVSxxQ0FBNEUsRUFDOUMsUUFBa0I7UUFEaEQsMENBQXFDLEdBQXJDLHFDQUFxQyxDQUF1QztRQUM5QyxhQUFRLEdBQVIsUUFBUSxDQUFVO1FBUjFELFlBQU8sR0FBbUMsU0FBUyxDQUFDO1FBR3BELG1CQUFjLEdBQUcsb0NBQW9DLENBQUM7UUFPcEQsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDbkMsQ0FBQzs7OztJQUNELDBEQUFVOzs7SUFBVjtRQUNFLE9BQU8sWUFBWSxDQUNqQiw4QkFBOEIsdUJBRXpCLGlEQUFpRCxFQUNqRCxJQUFJLENBQUMscUNBQXFDLEdBRS9DO1lBQ0UsTUFBTSxFQUFFLENBQUMsUUFBUSxDQUFDO1NBQ25CLENBQ0YsQ0FBQztJQUNKLENBQUM7Ozs7SUFDRCwwREFBVTs7O0lBQVY7UUFDRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDdEIsQ0FBQzs7Ozs7SUFDRCwwREFBVTs7OztJQUFWLFVBQVcsS0FBcUM7UUFBaEQsaUJBV0M7UUFWQyxJQUFJLENBQUMsUUFBUTthQUNWLE9BQU8sQ0FDTixJQUFJLENBQUMsY0FBYyxFQUNuQixJQUFJLENBQUMsU0FBUyxDQUNaLFlBQVksQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUU7WUFDL0MsTUFBTSxFQUFFLENBQUMsUUFBUSxDQUFDO1NBQ25CLENBQUMsQ0FDSCxDQUNGO2FBQ0EsSUFBSTs7OztRQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxLQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxFQUF0QixDQUFzQixFQUFDLENBQUM7SUFDdkMsQ0FBQzs7OztJQUNELDJEQUFXOzs7SUFBWDtRQUFBLGlCQW9CQztRQW5CQyxPQUFPLElBQUksT0FBTzs7OztRQUFpQyxVQUFBLE9BQU87WUFDeEQsS0FBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsS0FBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLElBQUk7Ozs7WUFBQyxVQUFDLElBQVk7Z0JBQzNELElBQUksSUFBSSxJQUFJLElBQUksS0FBSyxXQUFXLEVBQUU7b0JBQ2hDLElBQUk7d0JBQ0YsT0FBTyxDQUNMLFlBQVksQ0FDViw4QkFBOEIsRUFDOUIsbUJBQUEsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBVSxFQUMxQixFQUFFLE1BQU0sRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQ3ZCLENBQ0YsQ0FBQztxQkFDSDtvQkFBQyxPQUFPLEtBQUssRUFBRTt3QkFDZCxPQUFPLENBQUMsS0FBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUM7cUJBQzVCO2lCQUNGO3FCQUFNO29CQUNMLE9BQU8sQ0FBQyxLQUFJLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQztpQkFDNUI7WUFDSCxDQUFDLEVBQUMsQ0FBQztRQUNMLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7OztJQUNELDZEQUFhOzs7SUFBYjtRQUFBLGlCQU9DO1FBTkMsT0FBTyxJQUFJLE9BQU87Ozs7UUFBQyxVQUFBLE9BQU87WUFDeEIsS0FBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLElBQUk7Ozs7WUFBQyxVQUFBLEtBQUs7Z0JBQzNCLEtBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ3ZCLE9BQU8sRUFBRSxDQUFDO1lBQ1osQ0FBQyxFQUFDLENBQUM7UUFDTCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7O2dCQXRFRixVQUFVOzs7O2dEQVNOLE1BQU0sU0FBQywrQ0FBK0M7Z0RBRXRELE1BQU0sU0FBQyxvQkFBb0I7O0lBUjlCO1FBREMsY0FBYyxFQUFFOzBDQUNSLDhCQUE4QjswRUFBYTtJQW9FdEQsNENBQUM7Q0FBQSxBQXZFRCxJQXVFQztTQXRFWSxxQ0FBcUM7OztJQUNoRCx3REFDb0Q7O0lBQ3BELHlEQUFxRDs7SUFFckQsK0RBQXNEOzs7OztJQUdwRCxzRkFDb0Y7Ozs7O0lBQ3BGLHlEQUF3RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBJU3RvcmFnZSwgU1RPUkFHRV9DT05GSUdfVE9LRU4gfSBmcm9tIFwiQHJ1Y2tlbi9jb3JlXCI7XG5pbXBvcnQgeyBCaW5kT2JzZXJ2YWJsZSB9IGZyb20gXCJiaW5kLW9ic2VydmFibGVcIjtcbmltcG9ydCB7IGNsYXNzVG9QbGFpbiwgcGxhaW5Ub0NsYXNzIH0gZnJvbSBcImNsYXNzLXRyYW5zZm9ybWVyXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anNcIjtcbmltcG9ydCB7IEN1c3RvbUVudGl0aWVzTGlzdEZpbHRlcnNNb2RhbCB9IGZyb20gXCIuL2N1c3RvbS1lbnRpdGllcy1saXN0LWZpbHRlcnMtbW9kYWxcIjtcbmltcG9ydCB7XG4gIERFRkFVTFRfQ1VTVE9NX0VOVElUSUVTX0xJU1RfRklMVEVSU19NT0RBTF9DT05GSUcsXG4gIElDdXN0b21FbnRpdGllc0xpc3RGaWx0ZXJzTW9kYWxDb25maWcsXG4gIENVU1RPTV9FTlRJVElFU19MSVNUX0ZJTFRFUlNfTU9EQUxfQ09ORklHX1RPS0VOXG59IGZyb20gXCIuL2N1c3RvbS1lbnRpdGllcy1saXN0LWZpbHRlcnMtbW9kYWwuY29uZmlnXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBjdXN0b21FbnRpdGllc0xpc3RGaWx0ZXJzTW9kYWxTZXJ2aWNlSW5pdGlhbGl6ZUFwcChcbiAgY3VzdG9tRW50aXRpZXNMaXN0RmlsdGVyc01vZGFsU2VydmljZTogQ3VzdG9tRW50aXRpZXNMaXN0RmlsdGVyc01vZGFsU2VydmljZVxuKSB7XG4gIHJldHVybiAoKSA9PiBjdXN0b21FbnRpdGllc0xpc3RGaWx0ZXJzTW9kYWxTZXJ2aWNlLmluaXRpYWxpemVBcHAoKTtcbn1cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEN1c3RvbUVudGl0aWVzTGlzdEZpbHRlcnNNb2RhbFNlcnZpY2Uge1xuICBAQmluZE9ic2VydmFibGUoKVxuICBjdXJyZW50OiBDdXN0b21FbnRpdGllc0xpc3RGaWx0ZXJzTW9kYWwgPSB1bmRlZmluZWQ7XG4gIGN1cnJlbnQkOiBPYnNlcnZhYmxlPEN1c3RvbUVudGl0aWVzTGlzdEZpbHRlcnNNb2RhbD47XG5cbiAgc3RvcmFnZUtleU5hbWUgPSBcImN1c3RvbS1lbnRpdGllcy1saXN0LWZpbHRlcnMtbW9kYWxcIjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KENVU1RPTV9FTlRJVElFU19MSVNUX0ZJTFRFUlNfTU9EQUxfQ09ORklHX1RPS0VOKVxuICAgIHByaXZhdGUgX2N1c3RvbUVudGl0aWVzTGlzdEZpbHRlcnNNb2RhbENvbmZpZzogSUN1c3RvbUVudGl0aWVzTGlzdEZpbHRlcnNNb2RhbENvbmZpZyxcbiAgICBASW5qZWN0KFNUT1JBR0VfQ09ORklHX1RPS0VOKSBwcml2YXRlIF9zdG9yYWdlOiBJU3RvcmFnZVxuICApIHtcbiAgICB0aGlzLmN1cnJlbnQgPSB0aGlzLmdldERlZmF1bHQoKTtcbiAgfVxuICBnZXREZWZhdWx0KCkge1xuICAgIHJldHVybiBwbGFpblRvQ2xhc3MoXG4gICAgICBDdXN0b21FbnRpdGllc0xpc3RGaWx0ZXJzTW9kYWwsXG4gICAgICB7XG4gICAgICAgIC4uLkRFRkFVTFRfQ1VTVE9NX0VOVElUSUVTX0xJU1RfRklMVEVSU19NT0RBTF9DT05GSUcsXG4gICAgICAgIC4uLnRoaXMuX2N1c3RvbUVudGl0aWVzTGlzdEZpbHRlcnNNb2RhbENvbmZpZ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgZ3JvdXBzOiBbXCJtYW51YWxcIl1cbiAgICAgIH1cbiAgICApO1xuICB9XG4gIGdldEN1cnJlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY3VycmVudDtcbiAgfVxuICBzZXRDdXJyZW50KHZhbHVlOiBDdXN0b21FbnRpdGllc0xpc3RGaWx0ZXJzTW9kYWwpIHtcbiAgICB0aGlzLl9zdG9yYWdlXG4gICAgICAuc2V0SXRlbShcbiAgICAgICAgdGhpcy5zdG9yYWdlS2V5TmFtZSxcbiAgICAgICAgSlNPTi5zdHJpbmdpZnkoXG4gICAgICAgICAgY2xhc3NUb1BsYWluKCF2YWx1ZSA/IHRoaXMuZ2V0RGVmYXVsdCgpIDogdmFsdWUsIHtcbiAgICAgICAgICAgIGdyb3VwczogW1wibWFudWFsXCJdXG4gICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgICAgKVxuICAgICAgLnRoZW4oXyA9PiAodGhpcy5jdXJyZW50ID0gdmFsdWUpKTtcbiAgfVxuICBpbml0Q3VycmVudCgpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2U8Q3VzdG9tRW50aXRpZXNMaXN0RmlsdGVyc01vZGFsPihyZXNvbHZlID0+IHtcbiAgICAgIHRoaXMuX3N0b3JhZ2UuZ2V0SXRlbSh0aGlzLnN0b3JhZ2VLZXlOYW1lKS50aGVuKChkYXRhOiBzdHJpbmcpID0+IHtcbiAgICAgICAgaWYgKGRhdGEgJiYgZGF0YSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXNvbHZlKFxuICAgICAgICAgICAgICBwbGFpblRvQ2xhc3MoXG4gICAgICAgICAgICAgICAgQ3VzdG9tRW50aXRpZXNMaXN0RmlsdGVyc01vZGFsLFxuICAgICAgICAgICAgICAgIEpTT04ucGFyc2UoZGF0YSkgYXMgT2JqZWN0LFxuICAgICAgICAgICAgICAgIHsgZ3JvdXBzOiBbXCJtYW51YWxcIl0gfVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICByZXNvbHZlKHRoaXMuZ2V0Q3VycmVudCgpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVzb2x2ZSh0aGlzLmdldEN1cnJlbnQoKSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG4gIGluaXRpYWxpemVBcHAoKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgdGhpcy5pbml0Q3VycmVudCgpLnRoZW4odmFsdWUgPT4ge1xuICAgICAgICB0aGlzLnNldEN1cnJlbnQodmFsdWUpO1xuICAgICAgICByZXNvbHZlKCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxufVxuIl19