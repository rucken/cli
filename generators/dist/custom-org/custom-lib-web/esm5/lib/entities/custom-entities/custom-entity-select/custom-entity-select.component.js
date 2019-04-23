/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component, Inject, Input } from "@angular/core";
import { FormControl } from "@angular/forms";
import { TranslateService } from "@ngx-translate/core";
import { ErrorsExtractor, ModalsService } from "@rucken/core";
import { CustomEntity, CUSTOM_ENTITIES_CONFIG_TOKEN } from "@custom-org/custom-lib";
import { DynamicRepository } from "ngx-repository";
import { CustomEntitiesGridComponent } from "../custom-entities-grid/custom-entities-grid.component";
import { BindIoInner } from "ngx-bind-io";
var CustomEntitySelectComponent = /** @class */ (function (_super) {
    tslib_1.__extends(CustomEntitySelectComponent, _super);
    function CustomEntitySelectComponent(modalsService, errorsExtractor, translateService, dynamicRepository, customEntitiesConfig) {
        var _this = _super.call(this, modalsService, errorsExtractor, translateService, dynamicRepository, customEntitiesConfig) || this;
        _this.errorsExtractor = errorsExtractor;
        _this.translateService = translateService;
        _this.dynamicRepository = dynamicRepository;
        _this.customEntitiesConfig = customEntitiesConfig;
        _this.searchField = new FormControl();
        _this.nameField = "title";
        return _this;
    }
    /**
     * @return {?}
     */
    CustomEntitySelectComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (!this.mockedItems) {
            this.useRest(tslib_1.__assign({ apiUrl: this.apiUrl }, this.customEntitiesConfig, { paginationMeta: { perPage: 1000 } }));
        }
        if (this.mockedItems) {
            this.useMock(tslib_1.__assign({ items: this.mockedItems }, this.customEntitiesConfig));
        }
    };
    /**
     * @param {?} value
     * @param {?} item
     * @return {?}
     */
    CustomEntitySelectComponent.prototype.checkChange = /**
     * @param {?} value
     * @param {?} item
     * @return {?}
     */
    function (value, item) {
        return item instanceof CustomEntity;
    };
    CustomEntitySelectComponent.decorators = [
        { type: Component, args: [{
                    selector: "custom-entity-select",
                    template: "<entity-select [bindIO]>\n  <ng-content></ng-content>\n</entity-select>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    CustomEntitySelectComponent.ctorParameters = function () { return [
        { type: ModalsService },
        { type: ErrorsExtractor },
        { type: TranslateService },
        { type: DynamicRepository },
        { type: undefined, decorators: [{ type: Inject, args: [CUSTOM_ENTITIES_CONFIG_TOKEN,] }] }
    ]; };
    CustomEntitySelectComponent.propDecorators = {
        searchField: [{ type: Input }]
    };
    CustomEntitySelectComponent = tslib_1.__decorate([
        BindIoInner(),
        tslib_1.__metadata("design:paramtypes", [ModalsService,
            ErrorsExtractor,
            TranslateService,
            DynamicRepository, Object])
    ], CustomEntitySelectComponent);
    return CustomEntitySelectComponent;
}(CustomEntitiesGridComponent));
export { CustomEntitySelectComponent };
if (false) {
    /** @type {?} */
    CustomEntitySelectComponent.prototype.searchField;
    /** @type {?} */
    CustomEntitySelectComponent.prototype.nameField;
    /**
     * @type {?}
     * @protected
     */
    CustomEntitySelectComponent.prototype.errorsExtractor;
    /**
     * @type {?}
     * @protected
     */
    CustomEntitySelectComponent.prototype.translateService;
    /**
     * @type {?}
     * @protected
     */
    CustomEntitySelectComponent.prototype.dynamicRepository;
    /**
     * @type {?}
     * @protected
     */
    CustomEntitySelectComponent.prototype.customEntitiesConfig;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLWVudGl0eS1zZWxlY3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGN1c3RvbS1vcmcvY3VzdG9tLWxpYi13ZWIvIiwic291cmNlcyI6WyJsaWIvZW50aXRpZXMvY3VzdG9tLWVudGl0aWVzL2N1c3RvbS1lbnRpdHktc2VsZWN0L2N1c3RvbS1lbnRpdHktc2VsZWN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULE1BQU0sRUFDTixLQUFLLEVBRU4sTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxlQUFlLEVBQUUsYUFBYSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQzlELE9BQU8sRUFDTCxZQUFZLEVBQ1osNEJBQTRCLEVBQzdCLE1BQU0sd0JBQXdCLENBQUM7QUFDaEMsT0FBTyxFQUFFLGlCQUFpQixFQUF3QixNQUFNLGdCQUFnQixDQUFDO0FBQ3pFLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBQ3JHLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxhQUFhLENBQUM7O0lBUU8sdURBQTJCO0lBTzFFLHFDQUNFLGFBQTRCLEVBQ2xCLGVBQWdDLEVBQ2hDLGdCQUFrQyxFQUNsQyxpQkFBb0MsRUFFcEMsb0JBQXdEO1FBTnBFLFlBUUUsa0JBQ0UsYUFBYSxFQUNiLGVBQWUsRUFDZixnQkFBZ0IsRUFDaEIsaUJBQWlCLEVBQ2pCLG9CQUFvQixDQUNyQixTQUNGO1FBYlcscUJBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLHNCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsdUJBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUVwQywwQkFBb0IsR0FBcEIsb0JBQW9CLENBQW9DO1FBVnBFLGlCQUFXLEdBQWdCLElBQUksV0FBVyxFQUFFLENBQUM7UUFFN0MsZUFBUyxHQUFHLE9BQU8sQ0FBQzs7SUFpQnBCLENBQUM7Ozs7SUFDRCw4Q0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNyQixJQUFJLENBQUMsT0FBTyxvQkFDVixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sSUFDaEIsSUFBSSxDQUFDLG9CQUFvQixJQUM1QixjQUFjLEVBQUUsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLElBQ2pDLENBQUM7U0FDSjtRQUNELElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNwQixJQUFJLENBQUMsT0FBTyxvQkFDVixLQUFLLEVBQUUsSUFBSSxDQUFDLFdBQVcsSUFDcEIsSUFBSSxDQUFDLG9CQUFvQixFQUM1QixDQUFDO1NBQ0o7SUFDSCxDQUFDOzs7Ozs7SUFDRCxpREFBVzs7Ozs7SUFBWCxVQUFZLEtBQVUsRUFBRSxJQUFTO1FBQy9CLE9BQU8sSUFBSSxZQUFZLFlBQVksQ0FBQztJQUN0QyxDQUFDOztnQkE3Q0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxzQkFBc0I7b0JBQ2hDLHFGQUFvRDtvQkFDcEQsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07aUJBQ2hEOzs7O2dCQWR5QixhQUFhO2dCQUE5QixlQUFlO2dCQURmLGdCQUFnQjtnQkFNaEIsaUJBQWlCO2dEQXNCckIsTUFBTSxTQUFDLDRCQUE0Qjs7OzhCQVZyQyxLQUFLOztJQUZLLDJCQUEyQjtRQU52QyxXQUFXLEVBQUU7aURBY0ssYUFBYTtZQUNELGVBQWU7WUFDZCxnQkFBZ0I7WUFDZixpQkFBaUI7T0FYckMsMkJBQTJCLENBeUN2QztJQUFELGtDQUFDO0NBQUEsQ0F6Q2dELDJCQUEyQixHQXlDM0U7U0F6Q1ksMkJBQTJCOzs7SUFFdEMsa0RBQzZDOztJQUU3QyxnREFBb0I7Ozs7O0lBSWxCLHNEQUEwQzs7Ozs7SUFDMUMsdURBQTRDOzs7OztJQUM1Qyx3REFBOEM7Ozs7O0lBQzlDLDJEQUNrRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEluamVjdCxcbiAgSW5wdXQsXG4gIE9uSW5pdFxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgRm9ybUNvbnRyb2wgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCB7IFRyYW5zbGF0ZVNlcnZpY2UgfSBmcm9tIFwiQG5neC10cmFuc2xhdGUvY29yZVwiO1xuaW1wb3J0IHsgRXJyb3JzRXh0cmFjdG9yLCBNb2RhbHNTZXJ2aWNlIH0gZnJvbSBcIkBydWNrZW4vY29yZVwiO1xuaW1wb3J0IHtcbiAgQ3VzdG9tRW50aXR5LFxuICBDVVNUT01fRU5USVRJRVNfQ09ORklHX1RPS0VOXG59IGZyb20gXCJAY3VzdG9tLW9yZy9jdXN0b20tbGliXCI7XG5pbXBvcnQgeyBEeW5hbWljUmVwb3NpdG9yeSwgSVJlc3RQcm92aWRlck9wdGlvbnMgfSBmcm9tIFwibmd4LXJlcG9zaXRvcnlcIjtcbmltcG9ydCB7IEN1c3RvbUVudGl0aWVzR3JpZENvbXBvbmVudCB9IGZyb20gXCIuLi9jdXN0b20tZW50aXRpZXMtZ3JpZC9jdXN0b20tZW50aXRpZXMtZ3JpZC5jb21wb25lbnRcIjtcbmltcG9ydCB7IEJpbmRJb0lubmVyIH0gZnJvbSBcIm5neC1iaW5kLWlvXCI7XG5cbkBCaW5kSW9Jbm5lcigpXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwiY3VzdG9tLWVudGl0eS1zZWxlY3RcIixcbiAgdGVtcGxhdGVVcmw6IFwiLi9jdXN0b20tZW50aXR5LXNlbGVjdC5jb21wb25lbnQuaHRtbFwiLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBDdXN0b21FbnRpdHlTZWxlY3RDb21wb25lbnQgZXh0ZW5kcyBDdXN0b21FbnRpdGllc0dyaWRDb21wb25lbnRcbiAgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKVxuICBzZWFyY2hGaWVsZDogRm9ybUNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woKTtcblxuICBuYW1lRmllbGQgPSBcInRpdGxlXCI7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgbW9kYWxzU2VydmljZTogTW9kYWxzU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgZXJyb3JzRXh0cmFjdG9yOiBFcnJvcnNFeHRyYWN0b3IsXG4gICAgcHJvdGVjdGVkIHRyYW5zbGF0ZVNlcnZpY2U6IFRyYW5zbGF0ZVNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGR5bmFtaWNSZXBvc2l0b3J5OiBEeW5hbWljUmVwb3NpdG9yeSxcbiAgICBASW5qZWN0KENVU1RPTV9FTlRJVElFU19DT05GSUdfVE9LRU4pXG4gICAgcHJvdGVjdGVkIGN1c3RvbUVudGl0aWVzQ29uZmlnOiBJUmVzdFByb3ZpZGVyT3B0aW9uczxDdXN0b21FbnRpdHk+XG4gICkge1xuICAgIHN1cGVyKFxuICAgICAgbW9kYWxzU2VydmljZSxcbiAgICAgIGVycm9yc0V4dHJhY3RvcixcbiAgICAgIHRyYW5zbGF0ZVNlcnZpY2UsXG4gICAgICBkeW5hbWljUmVwb3NpdG9yeSxcbiAgICAgIGN1c3RvbUVudGl0aWVzQ29uZmlnXG4gICAgKTtcbiAgfVxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAoIXRoaXMubW9ja2VkSXRlbXMpIHtcbiAgICAgIHRoaXMudXNlUmVzdCh7XG4gICAgICAgIGFwaVVybDogdGhpcy5hcGlVcmwsXG4gICAgICAgIC4uLnRoaXMuY3VzdG9tRW50aXRpZXNDb25maWcsXG4gICAgICAgIHBhZ2luYXRpb25NZXRhOiB7IHBlclBhZ2U6IDEwMDAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlmICh0aGlzLm1vY2tlZEl0ZW1zKSB7XG4gICAgICB0aGlzLnVzZU1vY2soe1xuICAgICAgICBpdGVtczogdGhpcy5tb2NrZWRJdGVtcyxcbiAgICAgICAgLi4udGhpcy5jdXN0b21FbnRpdGllc0NvbmZpZ1xuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIGNoZWNrQ2hhbmdlKHZhbHVlOiBhbnksIGl0ZW06IGFueSkge1xuICAgIHJldHVybiBpdGVtIGluc3RhbmNlb2YgQ3VzdG9tRW50aXR5O1xuICB9XG59XG4iXX0=