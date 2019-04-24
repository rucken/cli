/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
    return () => customEntitiesListFiltersModalService.initializeApp();
}
export class CustomEntitiesListFiltersModalService {
    /**
     * @param {?} _customEntitiesListFiltersModalConfig
     * @param {?} _storage
     */
    constructor(_customEntitiesListFiltersModalConfig, _storage) {
        this._customEntitiesListFiltersModalConfig = _customEntitiesListFiltersModalConfig;
        this._storage = _storage;
        this.current = undefined;
        this.storageKeyName = "custom-entities-list-filters-modal";
        this.current = this.getDefault();
    }
    /**
     * @return {?}
     */
    getDefault() {
        return plainToClass(CustomEntitiesListFiltersModal, Object.assign({}, DEFAULT_CUSTOM_ENTITIES_LIST_FILTERS_MODAL_CONFIG, this._customEntitiesListFiltersModalConfig), {
            groups: ["manual"]
        });
    }
    /**
     * @return {?}
     */
    getCurrent() {
        return this.current;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setCurrent(value) {
        this._storage
            .setItem(this.storageKeyName, JSON.stringify(classToPlain(!value ? this.getDefault() : value, {
            groups: ["manual"]
        })))
            .then(_ => (this.current = value));
    }
    /**
     * @return {?}
     */
    initCurrent() {
        return new Promise(resolve => {
            this._storage.getItem(this.storageKeyName).then((data) => {
                if (data && data !== "undefined") {
                    try {
                        resolve(plainToClass(CustomEntitiesListFiltersModal, (/** @type {?} */ (JSON.parse(data))), { groups: ["manual"] }));
                    }
                    catch (error) {
                        resolve(this.getCurrent());
                    }
                }
                else {
                    resolve(this.getCurrent());
                }
            });
        });
    }
    /**
     * @return {?}
     */
    initializeApp() {
        return new Promise(resolve => {
            this.initCurrent().then(value => {
                this.setCurrent(value);
                resolve();
            });
        });
    }
}
CustomEntitiesListFiltersModalService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
CustomEntitiesListFiltersModalService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [CUSTOM_ENTITIES_LIST_FILTERS_MODAL_CONFIG_TOKEN,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [STORAGE_CONFIG_TOKEN,] }] }
];
tslib_1.__decorate([
    BindObservable(),
    tslib_1.__metadata("design:type", CustomEntitiesListFiltersModal)
], CustomEntitiesListFiltersModalService.prototype, "current", void 0);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLWVudGl0aWVzLWxpc3QtZmlsdGVycy1tb2RhbC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGN1c3RvbS1vcmcvY3VzdG9tLWxpYi1pb25pYy8iLCJzb3VyY2VzIjpbImxpYi9lbnRpdGllcy9jdXN0b20tZW50aXRpZXMvY3VzdG9tLWVudGl0aWVzLWxpc3QvY3VzdG9tLWVudGl0aWVzLWxpc3QtZmlsdGVycy1tb2RhbC9jdXN0b20tZW50aXRpZXMtbGlzdC1maWx0ZXJzLW1vZGFsLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQVksb0JBQW9CLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDOUQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFL0QsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDdEYsT0FBTyxFQUNMLGlEQUFpRCxFQUVqRCwrQ0FBK0MsRUFDaEQsTUFBTSw2Q0FBNkMsQ0FBQzs7Ozs7QUFFckQsTUFBTSxVQUFVLGtEQUFrRCxDQUNoRSxxQ0FBNEU7SUFFNUUsT0FBTyxHQUFHLEVBQUUsQ0FBQyxxQ0FBcUMsQ0FBQyxhQUFhLEVBQUUsQ0FBQztBQUNyRSxDQUFDO0FBR0QsTUFBTSxPQUFPLHFDQUFxQzs7Ozs7SUFPaEQsWUFFVSxxQ0FBNEUsRUFDOUMsUUFBa0I7UUFEaEQsMENBQXFDLEdBQXJDLHFDQUFxQyxDQUF1QztRQUM5QyxhQUFRLEdBQVIsUUFBUSxDQUFVO1FBUjFELFlBQU8sR0FBbUMsU0FBUyxDQUFDO1FBR3BELG1CQUFjLEdBQUcsb0NBQW9DLENBQUM7UUFPcEQsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDbkMsQ0FBQzs7OztJQUNELFVBQVU7UUFDUixPQUFPLFlBQVksQ0FDakIsOEJBQThCLG9CQUV6QixpREFBaUQsRUFDakQsSUFBSSxDQUFDLHFDQUFxQyxHQUUvQztZQUNFLE1BQU0sRUFBRSxDQUFDLFFBQVEsQ0FBQztTQUNuQixDQUNGLENBQUM7SUFDSixDQUFDOzs7O0lBQ0QsVUFBVTtRQUNSLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN0QixDQUFDOzs7OztJQUNELFVBQVUsQ0FBQyxLQUFxQztRQUM5QyxJQUFJLENBQUMsUUFBUTthQUNWLE9BQU8sQ0FDTixJQUFJLENBQUMsY0FBYyxFQUNuQixJQUFJLENBQUMsU0FBUyxDQUNaLFlBQVksQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUU7WUFDL0MsTUFBTSxFQUFFLENBQUMsUUFBUSxDQUFDO1NBQ25CLENBQUMsQ0FDSCxDQUNGO2FBQ0EsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDdkMsQ0FBQzs7OztJQUNELFdBQVc7UUFDVCxPQUFPLElBQUksT0FBTyxDQUFpQyxPQUFPLENBQUMsRUFBRTtZQUMzRCxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBWSxFQUFFLEVBQUU7Z0JBQy9ELElBQUksSUFBSSxJQUFJLElBQUksS0FBSyxXQUFXLEVBQUU7b0JBQ2hDLElBQUk7d0JBQ0YsT0FBTyxDQUNMLFlBQVksQ0FDViw4QkFBOEIsRUFDOUIsbUJBQUEsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBVSxFQUMxQixFQUFFLE1BQU0sRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQ3ZCLENBQ0YsQ0FBQztxQkFDSDtvQkFBQyxPQUFPLEtBQUssRUFBRTt3QkFDZCxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUM7cUJBQzVCO2lCQUNGO3FCQUFNO29CQUNMLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQztpQkFDNUI7WUFDSCxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7OztJQUNELGFBQWE7UUFDWCxPQUFPLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQzNCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQzlCLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ3ZCLE9BQU8sRUFBRSxDQUFDO1lBQ1osQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7OztZQXRFRixVQUFVOzs7OzRDQVNOLE1BQU0sU0FBQywrQ0FBK0M7NENBRXRELE1BQU0sU0FBQyxvQkFBb0I7O0FBUjlCO0lBREMsY0FBYyxFQUFFO3NDQUNSLDhCQUE4QjtzRUFBYTs7O0lBRHBELHdEQUNvRDs7SUFDcEQseURBQXFEOztJQUVyRCwrREFBc0Q7Ozs7O0lBR3BELHNGQUNvRjs7Ozs7SUFDcEYseURBQXdEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IElTdG9yYWdlLCBTVE9SQUdFX0NPTkZJR19UT0tFTiB9IGZyb20gXCJAcnVja2VuL2NvcmVcIjtcbmltcG9ydCB7IEJpbmRPYnNlcnZhYmxlIH0gZnJvbSBcImJpbmQtb2JzZXJ2YWJsZVwiO1xuaW1wb3J0IHsgY2xhc3NUb1BsYWluLCBwbGFpblRvQ2xhc3MgfSBmcm9tIFwiY2xhc3MtdHJhbnNmb3JtZXJcIjtcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqc1wiO1xuaW1wb3J0IHsgQ3VzdG9tRW50aXRpZXNMaXN0RmlsdGVyc01vZGFsIH0gZnJvbSBcIi4vY3VzdG9tLWVudGl0aWVzLWxpc3QtZmlsdGVycy1tb2RhbFwiO1xuaW1wb3J0IHtcbiAgREVGQVVMVF9DVVNUT01fRU5USVRJRVNfTElTVF9GSUxURVJTX01PREFMX0NPTkZJRyxcbiAgSUN1c3RvbUVudGl0aWVzTGlzdEZpbHRlcnNNb2RhbENvbmZpZyxcbiAgQ1VTVE9NX0VOVElUSUVTX0xJU1RfRklMVEVSU19NT0RBTF9DT05GSUdfVE9LRU5cbn0gZnJvbSBcIi4vY3VzdG9tLWVudGl0aWVzLWxpc3QtZmlsdGVycy1tb2RhbC5jb25maWdcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGN1c3RvbUVudGl0aWVzTGlzdEZpbHRlcnNNb2RhbFNlcnZpY2VJbml0aWFsaXplQXBwKFxuICBjdXN0b21FbnRpdGllc0xpc3RGaWx0ZXJzTW9kYWxTZXJ2aWNlOiBDdXN0b21FbnRpdGllc0xpc3RGaWx0ZXJzTW9kYWxTZXJ2aWNlXG4pIHtcbiAgcmV0dXJuICgpID0+IGN1c3RvbUVudGl0aWVzTGlzdEZpbHRlcnNNb2RhbFNlcnZpY2UuaW5pdGlhbGl6ZUFwcCgpO1xufVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ3VzdG9tRW50aXRpZXNMaXN0RmlsdGVyc01vZGFsU2VydmljZSB7XG4gIEBCaW5kT2JzZXJ2YWJsZSgpXG4gIGN1cnJlbnQ6IEN1c3RvbUVudGl0aWVzTGlzdEZpbHRlcnNNb2RhbCA9IHVuZGVmaW5lZDtcbiAgY3VycmVudCQ6IE9ic2VydmFibGU8Q3VzdG9tRW50aXRpZXNMaXN0RmlsdGVyc01vZGFsPjtcblxuICBzdG9yYWdlS2V5TmFtZSA9IFwiY3VzdG9tLWVudGl0aWVzLWxpc3QtZmlsdGVycy1tb2RhbFwiO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoQ1VTVE9NX0VOVElUSUVTX0xJU1RfRklMVEVSU19NT0RBTF9DT05GSUdfVE9LRU4pXG4gICAgcHJpdmF0ZSBfY3VzdG9tRW50aXRpZXNMaXN0RmlsdGVyc01vZGFsQ29uZmlnOiBJQ3VzdG9tRW50aXRpZXNMaXN0RmlsdGVyc01vZGFsQ29uZmlnLFxuICAgIEBJbmplY3QoU1RPUkFHRV9DT05GSUdfVE9LRU4pIHByaXZhdGUgX3N0b3JhZ2U6IElTdG9yYWdlXG4gICkge1xuICAgIHRoaXMuY3VycmVudCA9IHRoaXMuZ2V0RGVmYXVsdCgpO1xuICB9XG4gIGdldERlZmF1bHQoKSB7XG4gICAgcmV0dXJuIHBsYWluVG9DbGFzcyhcbiAgICAgIEN1c3RvbUVudGl0aWVzTGlzdEZpbHRlcnNNb2RhbCxcbiAgICAgIHtcbiAgICAgICAgLi4uREVGQVVMVF9DVVNUT01fRU5USVRJRVNfTElTVF9GSUxURVJTX01PREFMX0NPTkZJRyxcbiAgICAgICAgLi4udGhpcy5fY3VzdG9tRW50aXRpZXNMaXN0RmlsdGVyc01vZGFsQ29uZmlnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBncm91cHM6IFtcIm1hbnVhbFwiXVxuICAgICAgfVxuICAgICk7XG4gIH1cbiAgZ2V0Q3VycmVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5jdXJyZW50O1xuICB9XG4gIHNldEN1cnJlbnQodmFsdWU6IEN1c3RvbUVudGl0aWVzTGlzdEZpbHRlcnNNb2RhbCkge1xuICAgIHRoaXMuX3N0b3JhZ2VcbiAgICAgIC5zZXRJdGVtKFxuICAgICAgICB0aGlzLnN0b3JhZ2VLZXlOYW1lLFxuICAgICAgICBKU09OLnN0cmluZ2lmeShcbiAgICAgICAgICBjbGFzc1RvUGxhaW4oIXZhbHVlID8gdGhpcy5nZXREZWZhdWx0KCkgOiB2YWx1ZSwge1xuICAgICAgICAgICAgZ3JvdXBzOiBbXCJtYW51YWxcIl1cbiAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICApXG4gICAgICAudGhlbihfID0+ICh0aGlzLmN1cnJlbnQgPSB2YWx1ZSkpO1xuICB9XG4gIGluaXRDdXJyZW50KCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZTxDdXN0b21FbnRpdGllc0xpc3RGaWx0ZXJzTW9kYWw+KHJlc29sdmUgPT4ge1xuICAgICAgdGhpcy5fc3RvcmFnZS5nZXRJdGVtKHRoaXMuc3RvcmFnZUtleU5hbWUpLnRoZW4oKGRhdGE6IHN0cmluZykgPT4ge1xuICAgICAgICBpZiAoZGF0YSAmJiBkYXRhICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJlc29sdmUoXG4gICAgICAgICAgICAgIHBsYWluVG9DbGFzcyhcbiAgICAgICAgICAgICAgICBDdXN0b21FbnRpdGllc0xpc3RGaWx0ZXJzTW9kYWwsXG4gICAgICAgICAgICAgICAgSlNPTi5wYXJzZShkYXRhKSBhcyBPYmplY3QsXG4gICAgICAgICAgICAgICAgeyBncm91cHM6IFtcIm1hbnVhbFwiXSB9XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIHJlc29sdmUodGhpcy5nZXRDdXJyZW50KCkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXNvbHZlKHRoaXMuZ2V0Q3VycmVudCgpKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbiAgaW5pdGlhbGl6ZUFwcCgpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICB0aGlzLmluaXRDdXJyZW50KCkudGhlbih2YWx1ZSA9PiB7XG4gICAgICAgIHRoaXMuc2V0Q3VycmVudCh2YWx1ZSk7XG4gICAgICAgIHJlc29sdmUoKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG59XG4iXX0=