/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component, Inject, Input } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { BaseEntityListComponent, ErrorsExtractor, ModalsService, translate } from "@rucken/core";
import { CustomEntity, CUSTOM_ENTITIES_CONFIG_TOKEN } from "@custom-org/custom-lib";
import { BindIoInner } from "ngx-bind-io";
import { DynamicRepository } from "ngx-repository";
import { map } from "rxjs/operators";
import { CustomEntityModalComponent } from "../custom-entity-modal/custom-entity-modal.component";
var CustomEntitiesGridComponent = /** @class */ (function (_super) {
    tslib_1.__extends(CustomEntitiesGridComponent, _super);
    function CustomEntitiesGridComponent(modalsService, errorsExtractor, translateService, dynamicRepository, customEntitiesConfig) {
        var _this = _super.call(this, dynamicRepository.fork(CustomEntity), modalsService, CustomEntity) || this;
        _this.errorsExtractor = errorsExtractor;
        _this.translateService = translateService;
        _this.dynamicRepository = dynamicRepository;
        _this.customEntitiesConfig = customEntitiesConfig;
        _this.autoload = false;
        _this.modalItem = {
            component: CustomEntityModalComponent
        };
        _this.title = translate("Custom entities");
        return _this;
    }
    /**
     * @return {?}
     */
    CustomEntitiesGridComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (!this.mockedItems) {
            this.useRest(tslib_1.__assign({ apiUrl: this.apiUrl }, this.customEntitiesConfig, { autoload: this.autoload }));
        }
        if (this.mockedItems) {
            this.useMock(tslib_1.__assign({ items: this.mockedItems }, this.customEntitiesConfig, { autoload: this.autoload }));
        }
        this.items$ = this.repository.items$.pipe(map((/**
         * @param {?} items
         * @return {?}
         */
        function (items) {
            return items.map((/**
             * @param {?} item
             * @return {?}
             */
            function (item) {
                return item;
            }));
        })));
    };
    /**
     * @param {?=} item
     * @return {?}
     */
    CustomEntitiesGridComponent.prototype.defaultCreateCreateModal = /**
     * @param {?=} item
     * @return {?}
     */
    function (item) {
        item = item || new CustomEntity();
        this.modalCreate = tslib_1.__assign({}, this.modalCreate, { initialState: tslib_1.__assign({}, this.modalCreate.initialState, { data: item }) });
        return _super.prototype.defaultCreateCreateModal.call(this, item);
    };
    /**
     * @param {?=} item
     * @return {?}
     */
    CustomEntitiesGridComponent.prototype.defaultCreateUpdateModal = /**
     * @param {?=} item
     * @return {?}
     */
    function (item) {
        this.modalUpdate = tslib_1.__assign({}, this.modalUpdate, { initialState: tslib_1.__assign({}, this.modalUpdate.initialState, { data: item }) });
        return _super.prototype.defaultCreateUpdateModal.call(this, item);
    };
    CustomEntitiesGridComponent.decorators = [
        { type: Component, args: [{
                    selector: "custom-entities-grid",
                    template: "<entity-grid\n  [bindIO]\n  [columns]=\"['title', 'name', 'action']\"\n  [enableCreate]=\"'add_custom-entity' | perm: false | async\"\n  [enableUpdate]=\"'change_custom-entity' | perm: false | async\"\n  [enableDelete]=\"'delete_custom-entity' | perm: false | async\"\n>\n</entity-grid>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    CustomEntitiesGridComponent.ctorParameters = function () { return [
        { type: ModalsService },
        { type: ErrorsExtractor },
        { type: TranslateService },
        { type: DynamicRepository },
        { type: undefined, decorators: [{ type: Inject, args: [CUSTOM_ENTITIES_CONFIG_TOKEN,] }] }
    ]; };
    CustomEntitiesGridComponent.propDecorators = {
        autoload: [{ type: Input }],
        modalItem: [{ type: Input }],
        title: [{ type: Input }]
    };
    CustomEntitiesGridComponent = tslib_1.__decorate([
        BindIoInner(),
        tslib_1.__metadata("design:paramtypes", [ModalsService,
            ErrorsExtractor,
            TranslateService,
            DynamicRepository, Object])
    ], CustomEntitiesGridComponent);
    return CustomEntitiesGridComponent;
}(BaseEntityListComponent));
export { CustomEntitiesGridComponent };
if (false) {
    /** @type {?} */
    CustomEntitiesGridComponent.prototype.autoload;
    /** @type {?} */
    CustomEntitiesGridComponent.prototype.modalItem;
    /** @type {?} */
    CustomEntitiesGridComponent.prototype.title;
    /**
     * @type {?}
     * @protected
     */
    CustomEntitiesGridComponent.prototype.errorsExtractor;
    /**
     * @type {?}
     * @protected
     */
    CustomEntitiesGridComponent.prototype.translateService;
    /**
     * @type {?}
     * @protected
     */
    CustomEntitiesGridComponent.prototype.dynamicRepository;
    /**
     * @type {?}
     * @protected
     */
    CustomEntitiesGridComponent.prototype.customEntitiesConfig;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLWVudGl0aWVzLWdyaWQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGN1c3RvbS1vcmcvY3VzdG9tLWxpYi13ZWIvIiwic291cmNlcyI6WyJsaWIvZW50aXRpZXMvY3VzdG9tLWVudGl0aWVzL2N1c3RvbS1lbnRpdGllcy1ncmlkL2N1c3RvbS1lbnRpdGllcy1ncmlkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULE1BQU0sRUFDTixLQUFLLEVBRU4sTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdkQsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixlQUFlLEVBR2YsYUFBYSxFQUNiLFNBQVMsRUFDVixNQUFNLGNBQWMsQ0FBQztBQUN0QixPQUFPLEVBQ0wsWUFBWSxFQUNaLDRCQUE0QixFQUM3QixNQUFNLHdCQUF3QixDQUFDO0FBQ2hDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDMUMsT0FBTyxFQUFFLGlCQUFpQixFQUF3QixNQUFNLGdCQUFnQixDQUFDO0FBQ3pFLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyQyxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxzREFBc0QsQ0FBQzs7SUFTeEYsdURBQXFDO0lBVzdDLHFDQUNFLGFBQTRCLEVBQ2xCLGVBQWdDLEVBQ2hDLGdCQUFrQyxFQUNsQyxpQkFBb0MsRUFFcEMsb0JBQXdEO1FBTnBFLFlBUUUsa0JBQ0UsaUJBQWlCLENBQUMsSUFBSSxDQUFlLFlBQVksQ0FBQyxFQUNsRCxhQUFhLEVBQ2IsWUFBWSxDQUNiLFNBQ0Y7UUFYVyxxQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsc0JBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQyx1QkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBRXBDLDBCQUFvQixHQUFwQixvQkFBb0IsQ0FBb0M7UUFkcEUsY0FBUSxHQUFHLEtBQUssQ0FBQztRQUVqQixlQUFTLEdBQTRCO1lBQ25DLFNBQVMsRUFBRSwwQkFBMEI7U0FDdEMsQ0FBQztRQUVGLFdBQUssR0FBRyxTQUFTLENBQUMsaUJBQWlCLENBQUMsQ0FBQzs7SUFlckMsQ0FBQzs7OztJQUNELDhDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ3JCLElBQUksQ0FBQyxPQUFPLG9CQUNWLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxJQUNoQixJQUFJLENBQUMsb0JBQW9CLElBQzVCLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxJQUN2QixDQUFDO1NBQ0o7UUFDRCxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDcEIsSUFBSSxDQUFDLE9BQU8sb0JBQ1YsS0FBSyxFQUFFLElBQUksQ0FBQyxXQUFXLElBQ3BCLElBQUksQ0FBQyxvQkFBb0IsSUFDNUIsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRLElBQ3ZCLENBQUM7U0FDSjtRQUNELElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUN2QyxHQUFHOzs7O1FBQUMsVUFBQSxLQUFLO1lBQ1AsT0FBQSxLQUFLLENBQUMsR0FBRzs7OztZQUFDLFVBQUEsSUFBSTtnQkFDWixPQUFPLElBQUksQ0FBQztZQUNkLENBQUMsRUFBQztRQUZGLENBRUUsRUFDSCxDQUNGLENBQUM7SUFDSixDQUFDOzs7OztJQUNELDhEQUF3Qjs7OztJQUF4QixVQUF5QixJQUFtQjtRQUMxQyxJQUFJLEdBQUcsSUFBSSxJQUFJLElBQUksWUFBWSxFQUFFLENBQUM7UUFDbEMsSUFBSSxDQUFDLFdBQVcsd0JBQ1gsSUFBSSxDQUFDLFdBQVcsSUFDbkIsWUFBWSx1QkFDUCxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksSUFDaEMsSUFBSSxFQUFFLElBQUksTUFFYixDQUFDO1FBQ0YsT0FBTyxpQkFBTSx3QkFBd0IsWUFBQyxJQUFJLENBQUMsQ0FBQztJQUM5QyxDQUFDOzs7OztJQUNELDhEQUF3Qjs7OztJQUF4QixVQUF5QixJQUFtQjtRQUMxQyxJQUFJLENBQUMsV0FBVyx3QkFDWCxJQUFJLENBQUMsV0FBVyxJQUNuQixZQUFZLHVCQUNQLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxJQUNoQyxJQUFJLEVBQUUsSUFBSSxNQUViLENBQUM7UUFDRixPQUFPLGlCQUFNLHdCQUF3QixZQUFDLElBQUksQ0FBQyxDQUFDO0lBQzlDLENBQUM7O2dCQTFFRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHNCQUFzQjtvQkFDaEMsNFNBQW9EO29CQUNwRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtpQkFDaEQ7Ozs7Z0JBakJDLGFBQWE7Z0JBSGIsZUFBZTtnQkFIUixnQkFBZ0I7Z0JBY2hCLGlCQUFpQjtnREEyQnJCLE1BQU0sU0FBQyw0QkFBNEI7OzsyQkFkckMsS0FBSzs0QkFFTCxLQUFLO3dCQUlMLEtBQUs7O0lBVEssMkJBQTJCO1FBTnZDLFdBQVcsRUFBRTtpREFtQkssYUFBYTtZQUNELGVBQWU7WUFDZCxnQkFBZ0I7WUFDZixpQkFBaUI7T0FoQnJDLDJCQUEyQixDQXNFdkM7SUFBRCxrQ0FBQztDQUFBLENBckVTLHVCQUF1QixHQXFFaEM7U0F0RVksMkJBQTJCOzs7SUFHdEMsK0NBQ2lCOztJQUNqQixnREFHRTs7SUFDRiw0Q0FDcUM7Ozs7O0lBSW5DLHNEQUEwQzs7Ozs7SUFDMUMsdURBQTRDOzs7OztJQUM1Qyx3REFBOEM7Ozs7O0lBQzlDLDJEQUNrRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEluamVjdCxcbiAgSW5wdXQsXG4gIE9uSW5pdFxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgVHJhbnNsYXRlU2VydmljZSB9IGZyb20gXCJAbmd4LXRyYW5zbGF0ZS9jb3JlXCI7XG5pbXBvcnQge1xuICBCYXNlRW50aXR5TGlzdENvbXBvbmVudCxcbiAgRXJyb3JzRXh0cmFjdG9yLFxuICBJQmFzZUVudGl0eUdyaWRGaWx0ZXIsXG4gIElCYXNlRW50aXR5TW9kYWxPcHRpb25zLFxuICBNb2RhbHNTZXJ2aWNlLFxuICB0cmFuc2xhdGVcbn0gZnJvbSBcIkBydWNrZW4vY29yZVwiO1xuaW1wb3J0IHtcbiAgQ3VzdG9tRW50aXR5LFxuICBDVVNUT01fRU5USVRJRVNfQ09ORklHX1RPS0VOXG59IGZyb20gXCJAY3VzdG9tLW9yZy9jdXN0b20tbGliXCI7XG5pbXBvcnQgeyBCaW5kSW9Jbm5lciB9IGZyb20gXCJuZ3gtYmluZC1pb1wiO1xuaW1wb3J0IHsgRHluYW1pY1JlcG9zaXRvcnksIElSZXN0UHJvdmlkZXJPcHRpb25zIH0gZnJvbSBcIm5neC1yZXBvc2l0b3J5XCI7XG5pbXBvcnQgeyBtYXAgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcbmltcG9ydCB7IEN1c3RvbUVudGl0eU1vZGFsQ29tcG9uZW50IH0gZnJvbSBcIi4uL2N1c3RvbS1lbnRpdHktbW9kYWwvY3VzdG9tLWVudGl0eS1tb2RhbC5jb21wb25lbnRcIjtcblxuQEJpbmRJb0lubmVyKClcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJjdXN0b20tZW50aXRpZXMtZ3JpZFwiLFxuICB0ZW1wbGF0ZVVybDogXCIuL2N1c3RvbS1lbnRpdGllcy1ncmlkLmNvbXBvbmVudC5odG1sXCIsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIEN1c3RvbUVudGl0aWVzR3JpZENvbXBvbmVudFxuICBleHRlbmRzIEJhc2VFbnRpdHlMaXN0Q29tcG9uZW50PEN1c3RvbUVudGl0eT5cbiAgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKVxuICBhdXRvbG9hZCA9IGZhbHNlO1xuICBASW5wdXQoKVxuICBtb2RhbEl0ZW06IElCYXNlRW50aXR5TW9kYWxPcHRpb25zID0ge1xuICAgIGNvbXBvbmVudDogQ3VzdG9tRW50aXR5TW9kYWxDb21wb25lbnRcbiAgfTtcbiAgQElucHV0KClcbiAgdGl0bGUgPSB0cmFuc2xhdGUoXCJDdXN0b20gZW50aXRpZXNcIik7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgbW9kYWxzU2VydmljZTogTW9kYWxzU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgZXJyb3JzRXh0cmFjdG9yOiBFcnJvcnNFeHRyYWN0b3IsXG4gICAgcHJvdGVjdGVkIHRyYW5zbGF0ZVNlcnZpY2U6IFRyYW5zbGF0ZVNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGR5bmFtaWNSZXBvc2l0b3J5OiBEeW5hbWljUmVwb3NpdG9yeSxcbiAgICBASW5qZWN0KENVU1RPTV9FTlRJVElFU19DT05GSUdfVE9LRU4pXG4gICAgcHJvdGVjdGVkIGN1c3RvbUVudGl0aWVzQ29uZmlnOiBJUmVzdFByb3ZpZGVyT3B0aW9uczxDdXN0b21FbnRpdHk+XG4gICkge1xuICAgIHN1cGVyKFxuICAgICAgZHluYW1pY1JlcG9zaXRvcnkuZm9yazxDdXN0b21FbnRpdHk+KEN1c3RvbUVudGl0eSksXG4gICAgICBtb2RhbHNTZXJ2aWNlLFxuICAgICAgQ3VzdG9tRW50aXR5XG4gICAgKTtcbiAgfVxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAoIXRoaXMubW9ja2VkSXRlbXMpIHtcbiAgICAgIHRoaXMudXNlUmVzdCh7XG4gICAgICAgIGFwaVVybDogdGhpcy5hcGlVcmwsXG4gICAgICAgIC4uLnRoaXMuY3VzdG9tRW50aXRpZXNDb25maWcsXG4gICAgICAgIGF1dG9sb2FkOiB0aGlzLmF1dG9sb2FkXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKHRoaXMubW9ja2VkSXRlbXMpIHtcbiAgICAgIHRoaXMudXNlTW9jayh7XG4gICAgICAgIGl0ZW1zOiB0aGlzLm1vY2tlZEl0ZW1zLFxuICAgICAgICAuLi50aGlzLmN1c3RvbUVudGl0aWVzQ29uZmlnLFxuICAgICAgICBhdXRvbG9hZDogdGhpcy5hdXRvbG9hZFxuICAgICAgfSk7XG4gICAgfVxuICAgIHRoaXMuaXRlbXMkID0gdGhpcy5yZXBvc2l0b3J5Lml0ZW1zJC5waXBlKFxuICAgICAgbWFwKGl0ZW1zID0+XG4gICAgICAgIGl0ZW1zLm1hcChpdGVtID0+IHtcbiAgICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgICAgfSlcbiAgICAgIClcbiAgICApO1xuICB9XG4gIGRlZmF1bHRDcmVhdGVDcmVhdGVNb2RhbChpdGVtPzogQ3VzdG9tRW50aXR5KSB7XG4gICAgaXRlbSA9IGl0ZW0gfHwgbmV3IEN1c3RvbUVudGl0eSgpO1xuICAgIHRoaXMubW9kYWxDcmVhdGUgPSB7XG4gICAgICAuLi50aGlzLm1vZGFsQ3JlYXRlLFxuICAgICAgaW5pdGlhbFN0YXRlOiB7XG4gICAgICAgIC4uLnRoaXMubW9kYWxDcmVhdGUuaW5pdGlhbFN0YXRlLFxuICAgICAgICBkYXRhOiBpdGVtXG4gICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gc3VwZXIuZGVmYXVsdENyZWF0ZUNyZWF0ZU1vZGFsKGl0ZW0pO1xuICB9XG4gIGRlZmF1bHRDcmVhdGVVcGRhdGVNb2RhbChpdGVtPzogQ3VzdG9tRW50aXR5KSB7XG4gICAgdGhpcy5tb2RhbFVwZGF0ZSA9IHtcbiAgICAgIC4uLnRoaXMubW9kYWxVcGRhdGUsXG4gICAgICBpbml0aWFsU3RhdGU6IHtcbiAgICAgICAgLi4udGhpcy5tb2RhbFVwZGF0ZS5pbml0aWFsU3RhdGUsXG4gICAgICAgIGRhdGE6IGl0ZW1cbiAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBzdXBlci5kZWZhdWx0Q3JlYXRlVXBkYXRlTW9kYWwoaXRlbSk7XG4gIH1cbn1cbiJdfQ==