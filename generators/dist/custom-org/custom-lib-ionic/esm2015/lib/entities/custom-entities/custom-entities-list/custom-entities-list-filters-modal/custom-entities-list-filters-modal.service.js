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
    () => customEntitiesListFiltersModalService.initializeApp());
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
            .then((/**
         * @param {?} _
         * @return {?}
         */
        _ => (this.current = value)));
    }
    /**
     * @return {?}
     */
    initCurrent() {
        return new Promise((/**
         * @param {?} resolve
         * @return {?}
         */
        resolve => {
            this._storage.getItem(this.storageKeyName).then((/**
             * @param {?} data
             * @return {?}
             */
            (data) => {
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
            }));
        }));
    }
    /**
     * @return {?}
     */
    initializeApp() {
        return new Promise((/**
         * @param {?} resolve
         * @return {?}
         */
        resolve => {
            this.initCurrent().then((/**
             * @param {?} value
             * @return {?}
             */
            value => {
                this.setCurrent(value);
                resolve();
            }));
        }));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLWVudGl0aWVzLWxpc3QtZmlsdGVycy1tb2RhbC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGN1c3RvbS1vcmcvY3VzdG9tLWxpYi1pb25pYy8iLCJzb3VyY2VzIjpbImxpYi9lbnRpdGllcy9jdXN0b20tZW50aXRpZXMvY3VzdG9tLWVudGl0aWVzLWxpc3QvY3VzdG9tLWVudGl0aWVzLWxpc3QtZmlsdGVycy1tb2RhbC9jdXN0b20tZW50aXRpZXMtbGlzdC1maWx0ZXJzLW1vZGFsLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQVksb0JBQW9CLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDOUQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFL0QsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDdEYsT0FBTyxFQUNMLGlEQUFpRCxFQUVqRCwrQ0FBK0MsRUFDaEQsTUFBTSw2Q0FBNkMsQ0FBQzs7Ozs7QUFFckQsTUFBTSxVQUFVLGtEQUFrRCxDQUNoRSxxQ0FBNEU7SUFFNUU7OztJQUFPLEdBQUcsRUFBRSxDQUFDLHFDQUFxQyxDQUFDLGFBQWEsRUFBRSxFQUFDO0FBQ3JFLENBQUM7QUFHRCxNQUFNLE9BQU8scUNBQXFDOzs7OztJQU9oRCxZQUVVLHFDQUE0RSxFQUM5QyxRQUFrQjtRQURoRCwwQ0FBcUMsR0FBckMscUNBQXFDLENBQXVDO1FBQzlDLGFBQVEsR0FBUixRQUFRLENBQVU7UUFSMUQsWUFBTyxHQUFtQyxTQUFTLENBQUM7UUFHcEQsbUJBQWMsR0FBRyxvQ0FBb0MsQ0FBQztRQU9wRCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNuQyxDQUFDOzs7O0lBQ0QsVUFBVTtRQUNSLE9BQU8sWUFBWSxDQUNqQiw4QkFBOEIsb0JBRXpCLGlEQUFpRCxFQUNqRCxJQUFJLENBQUMscUNBQXFDLEdBRS9DO1lBQ0UsTUFBTSxFQUFFLENBQUMsUUFBUSxDQUFDO1NBQ25CLENBQ0YsQ0FBQztJQUNKLENBQUM7Ozs7SUFDRCxVQUFVO1FBQ1IsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3RCLENBQUM7Ozs7O0lBQ0QsVUFBVSxDQUFDLEtBQXFDO1FBQzlDLElBQUksQ0FBQyxRQUFRO2FBQ1YsT0FBTyxDQUNOLElBQUksQ0FBQyxjQUFjLEVBQ25CLElBQUksQ0FBQyxTQUFTLENBQ1osWUFBWSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRTtZQUMvQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLENBQUM7U0FDbkIsQ0FBQyxDQUNILENBQ0Y7YUFDQSxJQUFJOzs7O1FBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLEVBQUMsQ0FBQztJQUN2QyxDQUFDOzs7O0lBQ0QsV0FBVztRQUNULE9BQU8sSUFBSSxPQUFPOzs7O1FBQWlDLE9BQU8sQ0FBQyxFQUFFO1lBQzNELElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxJQUFJOzs7O1lBQUMsQ0FBQyxJQUFZLEVBQUUsRUFBRTtnQkFDL0QsSUFBSSxJQUFJLElBQUksSUFBSSxLQUFLLFdBQVcsRUFBRTtvQkFDaEMsSUFBSTt3QkFDRixPQUFPLENBQ0wsWUFBWSxDQUNWLDhCQUE4QixFQUM5QixtQkFBQSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFVLEVBQzFCLEVBQUUsTUFBTSxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FDdkIsQ0FDRixDQUFDO3FCQUNIO29CQUFDLE9BQU8sS0FBSyxFQUFFO3dCQUNkLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQztxQkFDNUI7aUJBQ0Y7cUJBQU07b0JBQ0wsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDO2lCQUM1QjtZQUNILENBQUMsRUFBQyxDQUFDO1FBQ0wsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7O0lBQ0QsYUFBYTtRQUNYLE9BQU8sSUFBSSxPQUFPOzs7O1FBQUMsT0FBTyxDQUFDLEVBQUU7WUFDM0IsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLElBQUk7Ozs7WUFBQyxLQUFLLENBQUMsRUFBRTtnQkFDOUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDdkIsT0FBTyxFQUFFLENBQUM7WUFDWixDQUFDLEVBQUMsQ0FBQztRQUNMLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7O1lBdEVGLFVBQVU7Ozs7NENBU04sTUFBTSxTQUFDLCtDQUErQzs0Q0FFdEQsTUFBTSxTQUFDLG9CQUFvQjs7QUFSOUI7SUFEQyxjQUFjLEVBQUU7c0NBQ1IsOEJBQThCO3NFQUFhOzs7SUFEcEQsd0RBQ29EOztJQUNwRCx5REFBcUQ7O0lBRXJELCtEQUFzRDs7Ozs7SUFHcEQsc0ZBQ29GOzs7OztJQUNwRix5REFBd0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgSVN0b3JhZ2UsIFNUT1JBR0VfQ09ORklHX1RPS0VOIH0gZnJvbSBcIkBydWNrZW4vY29yZVwiO1xuaW1wb3J0IHsgQmluZE9ic2VydmFibGUgfSBmcm9tIFwiYmluZC1vYnNlcnZhYmxlXCI7XG5pbXBvcnQgeyBjbGFzc1RvUGxhaW4sIHBsYWluVG9DbGFzcyB9IGZyb20gXCJjbGFzcy10cmFuc2Zvcm1lclwiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzXCI7XG5pbXBvcnQgeyBDdXN0b21FbnRpdGllc0xpc3RGaWx0ZXJzTW9kYWwgfSBmcm9tIFwiLi9jdXN0b20tZW50aXRpZXMtbGlzdC1maWx0ZXJzLW1vZGFsXCI7XG5pbXBvcnQge1xuICBERUZBVUxUX0NVU1RPTV9FTlRJVElFU19MSVNUX0ZJTFRFUlNfTU9EQUxfQ09ORklHLFxuICBJQ3VzdG9tRW50aXRpZXNMaXN0RmlsdGVyc01vZGFsQ29uZmlnLFxuICBDVVNUT01fRU5USVRJRVNfTElTVF9GSUxURVJTX01PREFMX0NPTkZJR19UT0tFTlxufSBmcm9tIFwiLi9jdXN0b20tZW50aXRpZXMtbGlzdC1maWx0ZXJzLW1vZGFsLmNvbmZpZ1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gY3VzdG9tRW50aXRpZXNMaXN0RmlsdGVyc01vZGFsU2VydmljZUluaXRpYWxpemVBcHAoXG4gIGN1c3RvbUVudGl0aWVzTGlzdEZpbHRlcnNNb2RhbFNlcnZpY2U6IEN1c3RvbUVudGl0aWVzTGlzdEZpbHRlcnNNb2RhbFNlcnZpY2Vcbikge1xuICByZXR1cm4gKCkgPT4gY3VzdG9tRW50aXRpZXNMaXN0RmlsdGVyc01vZGFsU2VydmljZS5pbml0aWFsaXplQXBwKCk7XG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDdXN0b21FbnRpdGllc0xpc3RGaWx0ZXJzTW9kYWxTZXJ2aWNlIHtcbiAgQEJpbmRPYnNlcnZhYmxlKClcbiAgY3VycmVudDogQ3VzdG9tRW50aXRpZXNMaXN0RmlsdGVyc01vZGFsID0gdW5kZWZpbmVkO1xuICBjdXJyZW50JDogT2JzZXJ2YWJsZTxDdXN0b21FbnRpdGllc0xpc3RGaWx0ZXJzTW9kYWw+O1xuXG4gIHN0b3JhZ2VLZXlOYW1lID0gXCJjdXN0b20tZW50aXRpZXMtbGlzdC1maWx0ZXJzLW1vZGFsXCI7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQEluamVjdChDVVNUT01fRU5USVRJRVNfTElTVF9GSUxURVJTX01PREFMX0NPTkZJR19UT0tFTilcbiAgICBwcml2YXRlIF9jdXN0b21FbnRpdGllc0xpc3RGaWx0ZXJzTW9kYWxDb25maWc6IElDdXN0b21FbnRpdGllc0xpc3RGaWx0ZXJzTW9kYWxDb25maWcsXG4gICAgQEluamVjdChTVE9SQUdFX0NPTkZJR19UT0tFTikgcHJpdmF0ZSBfc3RvcmFnZTogSVN0b3JhZ2VcbiAgKSB7XG4gICAgdGhpcy5jdXJyZW50ID0gdGhpcy5nZXREZWZhdWx0KCk7XG4gIH1cbiAgZ2V0RGVmYXVsdCgpIHtcbiAgICByZXR1cm4gcGxhaW5Ub0NsYXNzKFxuICAgICAgQ3VzdG9tRW50aXRpZXNMaXN0RmlsdGVyc01vZGFsLFxuICAgICAge1xuICAgICAgICAuLi5ERUZBVUxUX0NVU1RPTV9FTlRJVElFU19MSVNUX0ZJTFRFUlNfTU9EQUxfQ09ORklHLFxuICAgICAgICAuLi50aGlzLl9jdXN0b21FbnRpdGllc0xpc3RGaWx0ZXJzTW9kYWxDb25maWdcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGdyb3VwczogW1wibWFudWFsXCJdXG4gICAgICB9XG4gICAgKTtcbiAgfVxuICBnZXRDdXJyZW50KCkge1xuICAgIHJldHVybiB0aGlzLmN1cnJlbnQ7XG4gIH1cbiAgc2V0Q3VycmVudCh2YWx1ZTogQ3VzdG9tRW50aXRpZXNMaXN0RmlsdGVyc01vZGFsKSB7XG4gICAgdGhpcy5fc3RvcmFnZVxuICAgICAgLnNldEl0ZW0oXG4gICAgICAgIHRoaXMuc3RvcmFnZUtleU5hbWUsXG4gICAgICAgIEpTT04uc3RyaW5naWZ5KFxuICAgICAgICAgIGNsYXNzVG9QbGFpbighdmFsdWUgPyB0aGlzLmdldERlZmF1bHQoKSA6IHZhbHVlLCB7XG4gICAgICAgICAgICBncm91cHM6IFtcIm1hbnVhbFwiXVxuICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICAgIClcbiAgICAgIC50aGVuKF8gPT4gKHRoaXMuY3VycmVudCA9IHZhbHVlKSk7XG4gIH1cbiAgaW5pdEN1cnJlbnQoKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPEN1c3RvbUVudGl0aWVzTGlzdEZpbHRlcnNNb2RhbD4ocmVzb2x2ZSA9PiB7XG4gICAgICB0aGlzLl9zdG9yYWdlLmdldEl0ZW0odGhpcy5zdG9yYWdlS2V5TmFtZSkudGhlbigoZGF0YTogc3RyaW5nKSA9PiB7XG4gICAgICAgIGlmIChkYXRhICYmIGRhdGEgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmVzb2x2ZShcbiAgICAgICAgICAgICAgcGxhaW5Ub0NsYXNzKFxuICAgICAgICAgICAgICAgIEN1c3RvbUVudGl0aWVzTGlzdEZpbHRlcnNNb2RhbCxcbiAgICAgICAgICAgICAgICBKU09OLnBhcnNlKGRhdGEpIGFzIE9iamVjdCxcbiAgICAgICAgICAgICAgICB7IGdyb3VwczogW1wibWFudWFsXCJdIH1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgcmVzb2x2ZSh0aGlzLmdldEN1cnJlbnQoKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlc29sdmUodGhpcy5nZXRDdXJyZW50KCkpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuICBpbml0aWFsaXplQXBwKCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgIHRoaXMuaW5pdEN1cnJlbnQoKS50aGVuKHZhbHVlID0+IHtcbiAgICAgICAgdGhpcy5zZXRDdXJyZW50KHZhbHVlKTtcbiAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==