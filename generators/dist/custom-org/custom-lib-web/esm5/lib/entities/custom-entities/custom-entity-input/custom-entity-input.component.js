/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component, EventEmitter, Inject, Input, Output } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { ErrorsExtractor, ModalsService, translate } from "@rucken/core";
import { CUSTOM_ENTITIES_CONFIG_TOKEN } from "@custom-org/custom-lib";
import { DynamicRepository } from "ngx-repository";
import { CustomEntitiesGridModalComponent } from "../custom-entities-grid-modal/custom-entities-grid-modal.component";
import { CustomEntitiesGridComponent } from "../custom-entities-grid/custom-entities-grid.component";
import { BindIoInner } from "ngx-bind-io";
var CustomEntityInputComponent = /** @class */ (function (_super) {
    tslib_1.__extends(CustomEntityInputComponent, _super);
    function CustomEntityInputComponent(modalsService, errorsExtractor, translateService, dynamicRepository, customEntitiesConfig) {
        var _this = _super.call(this, modalsService, errorsExtractor, translateService, dynamicRepository, customEntitiesConfig) || this;
        _this.errorsExtractor = errorsExtractor;
        _this.translateService = translateService;
        _this.dynamicRepository = dynamicRepository;
        _this.customEntitiesConfig = customEntitiesConfig;
        _this.modalAppendFromGrid = {
            component: CustomEntitiesGridModalComponent,
            initialState: {
                title: translate("Select customEntity"),
                yesTitle: translate("Select")
            }
        };
        _this.select = new EventEmitter();
        return _this;
    }
    /**
     * @return {?}
     */
    CustomEntityInputComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.mockedItems = [];
        this.useMock(tslib_1.__assign({ items: this.mockedItems }, this.customEntitiesConfig));
        this.mockedItemsChange.subscribe(function (items) { return _this.onSelect(items[0]); });
    };
    /**
     * @param {?} item
     * @return {?}
     */
    CustomEntityInputComponent.prototype.onSelect = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        this.select.emit(item);
    };
    CustomEntityInputComponent.decorators = [
        { type: Component, args: [{
                    selector: "custom-entity-input",
                    template: "<entity-input [readonly]=\"readonly\" (select)=\"onAppendFromGridClick($event)\">\n  <ng-content></ng-content>\n</entity-input>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    CustomEntityInputComponent.ctorParameters = function () { return [
        { type: ModalsService },
        { type: ErrorsExtractor },
        { type: TranslateService },
        { type: DynamicRepository },
        { type: undefined, decorators: [{ type: Inject, args: [CUSTOM_ENTITIES_CONFIG_TOKEN,] }] }
    ]; };
    CustomEntityInputComponent.propDecorators = {
        modalAppendFromGrid: [{ type: Input }],
        select: [{ type: Output }]
    };
    CustomEntityInputComponent = tslib_1.__decorate([
        BindIoInner(),
        tslib_1.__metadata("design:paramtypes", [ModalsService,
            ErrorsExtractor,
            TranslateService,
            DynamicRepository, Object])
    ], CustomEntityInputComponent);
    return CustomEntityInputComponent;
}(CustomEntitiesGridComponent));
export { CustomEntityInputComponent };
if (false) {
    /** @type {?} */
    CustomEntityInputComponent.prototype.modalAppendFromGrid;
    /** @type {?} */
    CustomEntityInputComponent.prototype.select;
    /**
     * @type {?}
     * @protected
     */
    CustomEntityInputComponent.prototype.errorsExtractor;
    /**
     * @type {?}
     * @protected
     */
    CustomEntityInputComponent.prototype.translateService;
    /**
     * @type {?}
     * @protected
     */
    CustomEntityInputComponent.prototype.dynamicRepository;
    /**
     * @type {?}
     * @protected
     */
    CustomEntityInputComponent.prototype.customEntitiesConfig;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLWVudGl0eS1pbnB1dC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY3VzdG9tLW9yZy9jdXN0b20tbGliLXdlYi8iLCJzb3VyY2VzIjpbImxpYi9lbnRpdGllcy9jdXN0b20tZW50aXRpZXMvY3VzdG9tLWVudGl0eS1pbnB1dC9jdXN0b20tZW50aXR5LWlucHV0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFlBQVksRUFDWixNQUFNLEVBQ04sS0FBSyxFQUVMLE1BQU0sRUFDUCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN2RCxPQUFPLEVBQ0wsZUFBZSxFQUVmLGFBQWEsRUFDYixTQUFTLEVBQ1YsTUFBTSxjQUFjLENBQUM7QUFDdEIsT0FBTyxFQUVMLDRCQUE0QixFQUM3QixNQUFNLHdCQUF3QixDQUFDO0FBQ2hDLE9BQU8sRUFBRSxpQkFBaUIsRUFBd0IsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6RSxPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSxvRUFBb0UsQ0FBQztBQUN0SCxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSx3REFBd0QsQ0FBQztBQUNyRyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sYUFBYSxDQUFDOztJQVFNLHNEQUEyQjtJQWF6RSxvQ0FDRSxhQUE0QixFQUNsQixlQUFnQyxFQUNoQyxnQkFBa0MsRUFDbEMsaUJBQW9DLEVBRXBDLG9CQUF3RDtRQU5wRSxZQVFFLGtCQUNFLGFBQWEsRUFDYixlQUFlLEVBQ2YsZ0JBQWdCLEVBQ2hCLGlCQUFpQixFQUNqQixvQkFBb0IsQ0FDckIsU0FDRjtRQWJXLHFCQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyxzQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLHVCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFFcEMsMEJBQW9CLEdBQXBCLG9CQUFvQixDQUFvQztRQWhCcEUseUJBQW1CLEdBQTRCO1lBQzdDLFNBQVMsRUFBRSxnQ0FBZ0M7WUFDM0MsWUFBWSxFQUFFO2dCQUNaLEtBQUssRUFBRSxTQUFTLENBQUMscUJBQXFCLENBQUM7Z0JBQ3ZDLFFBQVEsRUFBRSxTQUFTLENBQUMsUUFBUSxDQUFDO2FBQzlCO1NBQ0YsQ0FBQztRQUVGLFlBQU0sR0FBRyxJQUFJLFlBQVksRUFBZ0IsQ0FBQzs7SUFpQjFDLENBQUM7Ozs7SUFDRCw2Q0FBUTs7O0lBQVI7UUFBQSxpQkFPQztRQU5DLElBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxPQUFPLG9CQUNWLEtBQUssRUFBRSxJQUFJLENBQUMsV0FBVyxJQUNwQixJQUFJLENBQUMsb0JBQW9CLEVBQzVCLENBQUM7UUFDSCxJQUFJLENBQUMsaUJBQWlCLENBQUMsU0FBUyxDQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBdkIsQ0FBdUIsQ0FBQyxDQUFDO0lBQ3JFLENBQUM7Ozs7O0lBQ0QsNkNBQVE7Ozs7SUFBUixVQUFTLElBQWtCO1FBQ3pCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3pCLENBQUM7O2dCQTVDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtvQkFDL0IsNklBQW1EO29CQUNuRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtpQkFDaEQ7Ozs7Z0JBakJDLGFBQWE7Z0JBRmIsZUFBZTtnQkFGUixnQkFBZ0I7Z0JBV2hCLGlCQUFpQjtnREE2QnJCLE1BQU0sU0FBQyw0QkFBNEI7OztzQ0FoQnJDLEtBQUs7eUJBUUwsTUFBTTs7SUFWSSwwQkFBMEI7UUFOdEMsV0FBVyxFQUFFO2lEQW9CSyxhQUFhO1lBQ0QsZUFBZTtZQUNkLGdCQUFnQjtZQUNmLGlCQUFpQjtPQWpCckMsMEJBQTBCLENBd0N0QztJQUFELGlDQUFDO0NBQUEsQ0F4QytDLDJCQUEyQixHQXdDMUU7U0F4Q1ksMEJBQTBCOzs7SUFFckMseURBT0U7O0lBQ0YsNENBQzBDOzs7OztJQUl4QyxxREFBMEM7Ozs7O0lBQzFDLHNEQUE0Qzs7Ozs7SUFDNUMsdURBQThDOzs7OztJQUM5QywwREFDa0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBFdmVudEVtaXR0ZXIsXG4gIEluamVjdCxcbiAgSW5wdXQsXG4gIE9uSW5pdCxcbiAgT3V0cHV0XG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBUcmFuc2xhdGVTZXJ2aWNlIH0gZnJvbSBcIkBuZ3gtdHJhbnNsYXRlL2NvcmVcIjtcbmltcG9ydCB7XG4gIEVycm9yc0V4dHJhY3RvcixcbiAgSUJhc2VFbnRpdHlNb2RhbE9wdGlvbnMsXG4gIE1vZGFsc1NlcnZpY2UsXG4gIHRyYW5zbGF0ZVxufSBmcm9tIFwiQHJ1Y2tlbi9jb3JlXCI7XG5pbXBvcnQge1xuICBDdXN0b21FbnRpdHksXG4gIENVU1RPTV9FTlRJVElFU19DT05GSUdfVE9LRU5cbn0gZnJvbSBcIkBjdXN0b20tb3JnL2N1c3RvbS1saWJcIjtcbmltcG9ydCB7IER5bmFtaWNSZXBvc2l0b3J5LCBJUmVzdFByb3ZpZGVyT3B0aW9ucyB9IGZyb20gXCJuZ3gtcmVwb3NpdG9yeVwiO1xuaW1wb3J0IHsgQ3VzdG9tRW50aXRpZXNHcmlkTW9kYWxDb21wb25lbnQgfSBmcm9tIFwiLi4vY3VzdG9tLWVudGl0aWVzLWdyaWQtbW9kYWwvY3VzdG9tLWVudGl0aWVzLWdyaWQtbW9kYWwuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBDdXN0b21FbnRpdGllc0dyaWRDb21wb25lbnQgfSBmcm9tIFwiLi4vY3VzdG9tLWVudGl0aWVzLWdyaWQvY3VzdG9tLWVudGl0aWVzLWdyaWQuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBCaW5kSW9Jbm5lciB9IGZyb20gXCJuZ3gtYmluZC1pb1wiO1xuXG5AQmluZElvSW5uZXIoKVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcImN1c3RvbS1lbnRpdHktaW5wdXRcIixcbiAgdGVtcGxhdGVVcmw6IFwiLi9jdXN0b20tZW50aXR5LWlucHV0LmNvbXBvbmVudC5odG1sXCIsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIEN1c3RvbUVudGl0eUlucHV0Q29tcG9uZW50IGV4dGVuZHMgQ3VzdG9tRW50aXRpZXNHcmlkQ29tcG9uZW50XG4gIGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KClcbiAgbW9kYWxBcHBlbmRGcm9tR3JpZDogSUJhc2VFbnRpdHlNb2RhbE9wdGlvbnMgPSB7XG4gICAgY29tcG9uZW50OiBDdXN0b21FbnRpdGllc0dyaWRNb2RhbENvbXBvbmVudCxcbiAgICBpbml0aWFsU3RhdGU6IHtcbiAgICAgIHRpdGxlOiB0cmFuc2xhdGUoXCJTZWxlY3QgY3VzdG9tRW50aXR5XCIpLFxuICAgICAgeWVzVGl0bGU6IHRyYW5zbGF0ZShcIlNlbGVjdFwiKVxuICAgIH1cbiAgfTtcbiAgQE91dHB1dCgpXG4gIHNlbGVjdCA9IG5ldyBFdmVudEVtaXR0ZXI8Q3VzdG9tRW50aXR5PigpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIG1vZGFsc1NlcnZpY2U6IE1vZGFsc1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGVycm9yc0V4dHJhY3RvcjogRXJyb3JzRXh0cmFjdG9yLFxuICAgIHByb3RlY3RlZCB0cmFuc2xhdGVTZXJ2aWNlOiBUcmFuc2xhdGVTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBkeW5hbWljUmVwb3NpdG9yeTogRHluYW1pY1JlcG9zaXRvcnksXG4gICAgQEluamVjdChDVVNUT01fRU5USVRJRVNfQ09ORklHX1RPS0VOKVxuICAgIHByb3RlY3RlZCBjdXN0b21FbnRpdGllc0NvbmZpZzogSVJlc3RQcm92aWRlck9wdGlvbnM8Q3VzdG9tRW50aXR5PlxuICApIHtcbiAgICBzdXBlcihcbiAgICAgIG1vZGFsc1NlcnZpY2UsXG4gICAgICBlcnJvcnNFeHRyYWN0b3IsXG4gICAgICB0cmFuc2xhdGVTZXJ2aWNlLFxuICAgICAgZHluYW1pY1JlcG9zaXRvcnksXG4gICAgICBjdXN0b21FbnRpdGllc0NvbmZpZ1xuICAgICk7XG4gIH1cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5tb2NrZWRJdGVtcyA9IFtdO1xuICAgIHRoaXMudXNlTW9jayh7XG4gICAgICBpdGVtczogdGhpcy5tb2NrZWRJdGVtcyxcbiAgICAgIC4uLnRoaXMuY3VzdG9tRW50aXRpZXNDb25maWdcbiAgICB9KTtcbiAgICB0aGlzLm1vY2tlZEl0ZW1zQ2hhbmdlLnN1YnNjcmliZShpdGVtcyA9PiB0aGlzLm9uU2VsZWN0KGl0ZW1zWzBdKSk7XG4gIH1cbiAgb25TZWxlY3QoaXRlbTogQ3VzdG9tRW50aXR5KSB7XG4gICAgdGhpcy5zZWxlY3QuZW1pdChpdGVtKTtcbiAgfVxufVxuIl19