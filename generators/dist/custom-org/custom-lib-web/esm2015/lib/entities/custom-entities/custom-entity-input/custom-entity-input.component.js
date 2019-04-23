/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
let CustomEntityInputComponent = class CustomEntityInputComponent extends CustomEntitiesGridComponent {
    /**
     * @param {?} modalsService
     * @param {?} errorsExtractor
     * @param {?} translateService
     * @param {?} dynamicRepository
     * @param {?} customEntitiesConfig
     */
    constructor(modalsService, errorsExtractor, translateService, dynamicRepository, customEntitiesConfig) {
        super(modalsService, errorsExtractor, translateService, dynamicRepository, customEntitiesConfig);
        this.errorsExtractor = errorsExtractor;
        this.translateService = translateService;
        this.dynamicRepository = dynamicRepository;
        this.customEntitiesConfig = customEntitiesConfig;
        this.modalAppendFromGrid = {
            component: CustomEntitiesGridModalComponent,
            initialState: {
                title: translate("Select customEntity"),
                yesTitle: translate("Select")
            }
        };
        this.select = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.mockedItems = [];
        this.useMock(Object.assign({ items: this.mockedItems }, this.customEntitiesConfig));
        this.mockedItemsChange.subscribe((/**
         * @param {?} items
         * @return {?}
         */
        items => this.onSelect(items[0])));
    }
    /**
     * @param {?} item
     * @return {?}
     */
    onSelect(item) {
        this.select.emit(item);
    }
};
CustomEntityInputComponent.decorators = [
    { type: Component, args: [{
                selector: "custom-entity-input",
                template: "<entity-input [readonly]=\"readonly\" (select)=\"onAppendFromGridClick($event)\">\n  <ng-content></ng-content>\n</entity-input>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
CustomEntityInputComponent.ctorParameters = () => [
    { type: ModalsService },
    { type: ErrorsExtractor },
    { type: TranslateService },
    { type: DynamicRepository },
    { type: undefined, decorators: [{ type: Inject, args: [CUSTOM_ENTITIES_CONFIG_TOKEN,] }] }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLWVudGl0eS1pbnB1dC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY3VzdG9tLW9yZy9jdXN0b20tbGliLXdlYi8iLCJzb3VyY2VzIjpbImxpYi9lbnRpdGllcy9jdXN0b20tZW50aXRpZXMvY3VzdG9tLWVudGl0eS1pbnB1dC9jdXN0b20tZW50aXR5LWlucHV0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFlBQVksRUFDWixNQUFNLEVBQ04sS0FBSyxFQUVMLE1BQU0sRUFDUCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN2RCxPQUFPLEVBQ0wsZUFBZSxFQUVmLGFBQWEsRUFDYixTQUFTLEVBQ1YsTUFBTSxjQUFjLENBQUM7QUFDdEIsT0FBTyxFQUVMLDRCQUE0QixFQUM3QixNQUFNLHdCQUF3QixDQUFDO0FBQ2hDLE9BQU8sRUFBRSxpQkFBaUIsRUFBd0IsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6RSxPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSxvRUFBb0UsQ0FBQztBQUN0SCxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSx3REFBd0QsQ0FBQztBQUNyRyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sYUFBYSxDQUFDO0lBUTdCLDBCQUEwQixTQUExQiwwQkFBMkIsU0FBUSwyQkFBMkI7Ozs7Ozs7O0lBYXpFLFlBQ0UsYUFBNEIsRUFDbEIsZUFBZ0MsRUFDaEMsZ0JBQWtDLEVBQ2xDLGlCQUFvQyxFQUVwQyxvQkFBd0Q7UUFFbEUsS0FBSyxDQUNILGFBQWEsRUFDYixlQUFlLEVBQ2YsZ0JBQWdCLEVBQ2hCLGlCQUFpQixFQUNqQixvQkFBb0IsQ0FDckIsQ0FBQztRQVpRLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFFcEMseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFvQztRQWhCcEUsd0JBQW1CLEdBQTRCO1lBQzdDLFNBQVMsRUFBRSxnQ0FBZ0M7WUFDM0MsWUFBWSxFQUFFO2dCQUNaLEtBQUssRUFBRSxTQUFTLENBQUMscUJBQXFCLENBQUM7Z0JBQ3ZDLFFBQVEsRUFBRSxTQUFTLENBQUMsUUFBUSxDQUFDO2FBQzlCO1NBQ0YsQ0FBQztRQUVGLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBZ0IsQ0FBQztJQWlCMUMsQ0FBQzs7OztJQUNELFFBQVE7UUFDTixJQUFJLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsT0FBTyxpQkFDVixLQUFLLEVBQUUsSUFBSSxDQUFDLFdBQVcsSUFDcEIsSUFBSSxDQUFDLG9CQUFvQixFQUM1QixDQUFDO1FBQ0gsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFNBQVM7Ozs7UUFBQyxLQUFLLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQztJQUNyRSxDQUFDOzs7OztJQUNELFFBQVEsQ0FBQyxJQUFrQjtRQUN6QixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN6QixDQUFDO0NBQ0YsQ0FBQTs7WUE3Q0EsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxxQkFBcUI7Z0JBQy9CLDZJQUFtRDtnQkFDbkQsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDaEQ7Ozs7WUFqQkMsYUFBYTtZQUZiLGVBQWU7WUFGUixnQkFBZ0I7WUFXaEIsaUJBQWlCOzRDQTZCckIsTUFBTSxTQUFDLDRCQUE0Qjs7O2tDQWhCckMsS0FBSztxQkFRTCxNQUFNOztBQVZJLDBCQUEwQjtJQU50QyxXQUFXLEVBQUU7NkNBb0JLLGFBQWE7UUFDRCxlQUFlO1FBQ2QsZ0JBQWdCO1FBQ2YsaUJBQWlCO0dBakJyQywwQkFBMEIsQ0F3Q3RDO1NBeENZLDBCQUEwQjs7O0lBRXJDLHlEQU9FOztJQUNGLDRDQUMwQzs7Ozs7SUFJeEMscURBQTBDOzs7OztJQUMxQyxzREFBNEM7Ozs7O0lBQzVDLHVEQUE4Qzs7Ozs7SUFDOUMsMERBQ2tFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgRXZlbnRFbWl0dGVyLFxuICBJbmplY3QsXG4gIElucHV0LFxuICBPbkluaXQsXG4gIE91dHB1dFxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgVHJhbnNsYXRlU2VydmljZSB9IGZyb20gXCJAbmd4LXRyYW5zbGF0ZS9jb3JlXCI7XG5pbXBvcnQge1xuICBFcnJvcnNFeHRyYWN0b3IsXG4gIElCYXNlRW50aXR5TW9kYWxPcHRpb25zLFxuICBNb2RhbHNTZXJ2aWNlLFxuICB0cmFuc2xhdGVcbn0gZnJvbSBcIkBydWNrZW4vY29yZVwiO1xuaW1wb3J0IHtcbiAgQ3VzdG9tRW50aXR5LFxuICBDVVNUT01fRU5USVRJRVNfQ09ORklHX1RPS0VOXG59IGZyb20gXCJAY3VzdG9tLW9yZy9jdXN0b20tbGliXCI7XG5pbXBvcnQgeyBEeW5hbWljUmVwb3NpdG9yeSwgSVJlc3RQcm92aWRlck9wdGlvbnMgfSBmcm9tIFwibmd4LXJlcG9zaXRvcnlcIjtcbmltcG9ydCB7IEN1c3RvbUVudGl0aWVzR3JpZE1vZGFsQ29tcG9uZW50IH0gZnJvbSBcIi4uL2N1c3RvbS1lbnRpdGllcy1ncmlkLW1vZGFsL2N1c3RvbS1lbnRpdGllcy1ncmlkLW1vZGFsLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgQ3VzdG9tRW50aXRpZXNHcmlkQ29tcG9uZW50IH0gZnJvbSBcIi4uL2N1c3RvbS1lbnRpdGllcy1ncmlkL2N1c3RvbS1lbnRpdGllcy1ncmlkLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgQmluZElvSW5uZXIgfSBmcm9tIFwibmd4LWJpbmQtaW9cIjtcblxuQEJpbmRJb0lubmVyKClcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJjdXN0b20tZW50aXR5LWlucHV0XCIsXG4gIHRlbXBsYXRlVXJsOiBcIi4vY3VzdG9tLWVudGl0eS1pbnB1dC5jb21wb25lbnQuaHRtbFwiLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBDdXN0b21FbnRpdHlJbnB1dENvbXBvbmVudCBleHRlbmRzIEN1c3RvbUVudGl0aWVzR3JpZENvbXBvbmVudFxuICBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpXG4gIG1vZGFsQXBwZW5kRnJvbUdyaWQ6IElCYXNlRW50aXR5TW9kYWxPcHRpb25zID0ge1xuICAgIGNvbXBvbmVudDogQ3VzdG9tRW50aXRpZXNHcmlkTW9kYWxDb21wb25lbnQsXG4gICAgaW5pdGlhbFN0YXRlOiB7XG4gICAgICB0aXRsZTogdHJhbnNsYXRlKFwiU2VsZWN0IGN1c3RvbUVudGl0eVwiKSxcbiAgICAgIHllc1RpdGxlOiB0cmFuc2xhdGUoXCJTZWxlY3RcIilcbiAgICB9XG4gIH07XG4gIEBPdXRwdXQoKVxuICBzZWxlY3QgPSBuZXcgRXZlbnRFbWl0dGVyPEN1c3RvbUVudGl0eT4oKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBtb2RhbHNTZXJ2aWNlOiBNb2RhbHNTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBlcnJvcnNFeHRyYWN0b3I6IEVycm9yc0V4dHJhY3RvcixcbiAgICBwcm90ZWN0ZWQgdHJhbnNsYXRlU2VydmljZTogVHJhbnNsYXRlU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgZHluYW1pY1JlcG9zaXRvcnk6IER5bmFtaWNSZXBvc2l0b3J5LFxuICAgIEBJbmplY3QoQ1VTVE9NX0VOVElUSUVTX0NPTkZJR19UT0tFTilcbiAgICBwcm90ZWN0ZWQgY3VzdG9tRW50aXRpZXNDb25maWc6IElSZXN0UHJvdmlkZXJPcHRpb25zPEN1c3RvbUVudGl0eT5cbiAgKSB7XG4gICAgc3VwZXIoXG4gICAgICBtb2RhbHNTZXJ2aWNlLFxuICAgICAgZXJyb3JzRXh0cmFjdG9yLFxuICAgICAgdHJhbnNsYXRlU2VydmljZSxcbiAgICAgIGR5bmFtaWNSZXBvc2l0b3J5LFxuICAgICAgY3VzdG9tRW50aXRpZXNDb25maWdcbiAgICApO1xuICB9XG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMubW9ja2VkSXRlbXMgPSBbXTtcbiAgICB0aGlzLnVzZU1vY2soe1xuICAgICAgaXRlbXM6IHRoaXMubW9ja2VkSXRlbXMsXG4gICAgICAuLi50aGlzLmN1c3RvbUVudGl0aWVzQ29uZmlnXG4gICAgfSk7XG4gICAgdGhpcy5tb2NrZWRJdGVtc0NoYW5nZS5zdWJzY3JpYmUoaXRlbXMgPT4gdGhpcy5vblNlbGVjdChpdGVtc1swXSkpO1xuICB9XG4gIG9uU2VsZWN0KGl0ZW06IEN1c3RvbUVudGl0eSkge1xuICAgIHRoaXMuc2VsZWN0LmVtaXQoaXRlbSk7XG4gIH1cbn1cbiJdfQ==