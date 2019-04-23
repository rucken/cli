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
let CustomEntitySelectComponent = class CustomEntitySelectComponent extends CustomEntitiesGridComponent {
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
        this.searchField = new FormControl();
        this.nameField = "title";
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (!this.mockedItems) {
            this.useRest(Object.assign({ apiUrl: this.apiUrl }, this.customEntitiesConfig, { paginationMeta: { perPage: 1000 } }));
        }
        if (this.mockedItems) {
            this.useMock(Object.assign({ items: this.mockedItems }, this.customEntitiesConfig));
        }
    }
    /**
     * @param {?} value
     * @param {?} item
     * @return {?}
     */
    checkChange(value, item) {
        return item instanceof CustomEntity;
    }
};
CustomEntitySelectComponent.decorators = [
    { type: Component, args: [{
                selector: "custom-entity-select",
                template: "<entity-select [bindIO]>\n  <ng-content></ng-content>\n</entity-select>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
CustomEntitySelectComponent.ctorParameters = () => [
    { type: ModalsService },
    { type: ErrorsExtractor },
    { type: TranslateService },
    { type: DynamicRepository },
    { type: undefined, decorators: [{ type: Inject, args: [CUSTOM_ENTITIES_CONFIG_TOKEN,] }] }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLWVudGl0eS1zZWxlY3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGN1c3RvbS1vcmcvY3VzdG9tLWxpYi13ZWIvIiwic291cmNlcyI6WyJsaWIvZW50aXRpZXMvY3VzdG9tLWVudGl0aWVzL2N1c3RvbS1lbnRpdHktc2VsZWN0L2N1c3RvbS1lbnRpdHktc2VsZWN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULE1BQU0sRUFDTixLQUFLLEVBRU4sTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxlQUFlLEVBQUUsYUFBYSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQzlELE9BQU8sRUFDTCxZQUFZLEVBQ1osNEJBQTRCLEVBQzdCLE1BQU0sd0JBQXdCLENBQUM7QUFDaEMsT0FBTyxFQUFFLGlCQUFpQixFQUF3QixNQUFNLGdCQUFnQixDQUFDO0FBQ3pFLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBQ3JHLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxhQUFhLENBQUM7SUFRN0IsMkJBQTJCLFNBQTNCLDJCQUE0QixTQUFRLDJCQUEyQjs7Ozs7Ozs7SUFPMUUsWUFDRSxhQUE0QixFQUNsQixlQUFnQyxFQUNoQyxnQkFBa0MsRUFDbEMsaUJBQW9DLEVBRXBDLG9CQUF3RDtRQUVsRSxLQUFLLENBQ0gsYUFBYSxFQUNiLGVBQWUsRUFDZixnQkFBZ0IsRUFDaEIsaUJBQWlCLEVBQ2pCLG9CQUFvQixDQUNyQixDQUFDO1FBWlEsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUVwQyx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQW9DO1FBVnBFLGdCQUFXLEdBQWdCLElBQUksV0FBVyxFQUFFLENBQUM7UUFFN0MsY0FBUyxHQUFHLE9BQU8sQ0FBQztJQWlCcEIsQ0FBQzs7OztJQUNELFFBQVE7UUFDTixJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNyQixJQUFJLENBQUMsT0FBTyxpQkFDVixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sSUFDaEIsSUFBSSxDQUFDLG9CQUFvQixJQUM1QixjQUFjLEVBQUUsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLElBQ2pDLENBQUM7U0FDSjtRQUNELElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNwQixJQUFJLENBQUMsT0FBTyxpQkFDVixLQUFLLEVBQUUsSUFBSSxDQUFDLFdBQVcsSUFDcEIsSUFBSSxDQUFDLG9CQUFvQixFQUM1QixDQUFDO1NBQ0o7SUFDSCxDQUFDOzs7Ozs7SUFDRCxXQUFXLENBQUMsS0FBVSxFQUFFLElBQVM7UUFDL0IsT0FBTyxJQUFJLFlBQVksWUFBWSxDQUFDO0lBQ3RDLENBQUM7Q0FDRixDQUFBOztZQTlDQSxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHNCQUFzQjtnQkFDaEMscUZBQW9EO2dCQUNwRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDs7OztZQWR5QixhQUFhO1lBQTlCLGVBQWU7WUFEZixnQkFBZ0I7WUFNaEIsaUJBQWlCOzRDQXNCckIsTUFBTSxTQUFDLDRCQUE0Qjs7OzBCQVZyQyxLQUFLOztBQUZLLDJCQUEyQjtJQU52QyxXQUFXLEVBQUU7NkNBY0ssYUFBYTtRQUNELGVBQWU7UUFDZCxnQkFBZ0I7UUFDZixpQkFBaUI7R0FYckMsMkJBQTJCLENBeUN2QztTQXpDWSwyQkFBMkI7OztJQUV0QyxrREFDNkM7O0lBRTdDLGdEQUFvQjs7Ozs7SUFJbEIsc0RBQTBDOzs7OztJQUMxQyx1REFBNEM7Ozs7O0lBQzVDLHdEQUE4Qzs7Ozs7SUFDOUMsMkRBQ2tFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgSW5qZWN0LFxuICBJbnB1dCxcbiAgT25Jbml0XG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBGb3JtQ29udHJvbCB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHsgVHJhbnNsYXRlU2VydmljZSB9IGZyb20gXCJAbmd4LXRyYW5zbGF0ZS9jb3JlXCI7XG5pbXBvcnQgeyBFcnJvcnNFeHRyYWN0b3IsIE1vZGFsc1NlcnZpY2UgfSBmcm9tIFwiQHJ1Y2tlbi9jb3JlXCI7XG5pbXBvcnQge1xuICBDdXN0b21FbnRpdHksXG4gIENVU1RPTV9FTlRJVElFU19DT05GSUdfVE9LRU5cbn0gZnJvbSBcIkBjdXN0b20tb3JnL2N1c3RvbS1saWJcIjtcbmltcG9ydCB7IER5bmFtaWNSZXBvc2l0b3J5LCBJUmVzdFByb3ZpZGVyT3B0aW9ucyB9IGZyb20gXCJuZ3gtcmVwb3NpdG9yeVwiO1xuaW1wb3J0IHsgQ3VzdG9tRW50aXRpZXNHcmlkQ29tcG9uZW50IH0gZnJvbSBcIi4uL2N1c3RvbS1lbnRpdGllcy1ncmlkL2N1c3RvbS1lbnRpdGllcy1ncmlkLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgQmluZElvSW5uZXIgfSBmcm9tIFwibmd4LWJpbmQtaW9cIjtcblxuQEJpbmRJb0lubmVyKClcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJjdXN0b20tZW50aXR5LXNlbGVjdFwiLFxuICB0ZW1wbGF0ZVVybDogXCIuL2N1c3RvbS1lbnRpdHktc2VsZWN0LmNvbXBvbmVudC5odG1sXCIsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIEN1c3RvbUVudGl0eVNlbGVjdENvbXBvbmVudCBleHRlbmRzIEN1c3RvbUVudGl0aWVzR3JpZENvbXBvbmVudFxuICBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpXG4gIHNlYXJjaEZpZWxkOiBGb3JtQ29udHJvbCA9IG5ldyBGb3JtQ29udHJvbCgpO1xuXG4gIG5hbWVGaWVsZCA9IFwidGl0bGVcIjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBtb2RhbHNTZXJ2aWNlOiBNb2RhbHNTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBlcnJvcnNFeHRyYWN0b3I6IEVycm9yc0V4dHJhY3RvcixcbiAgICBwcm90ZWN0ZWQgdHJhbnNsYXRlU2VydmljZTogVHJhbnNsYXRlU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgZHluYW1pY1JlcG9zaXRvcnk6IER5bmFtaWNSZXBvc2l0b3J5LFxuICAgIEBJbmplY3QoQ1VTVE9NX0VOVElUSUVTX0NPTkZJR19UT0tFTilcbiAgICBwcm90ZWN0ZWQgY3VzdG9tRW50aXRpZXNDb25maWc6IElSZXN0UHJvdmlkZXJPcHRpb25zPEN1c3RvbUVudGl0eT5cbiAgKSB7XG4gICAgc3VwZXIoXG4gICAgICBtb2RhbHNTZXJ2aWNlLFxuICAgICAgZXJyb3JzRXh0cmFjdG9yLFxuICAgICAgdHJhbnNsYXRlU2VydmljZSxcbiAgICAgIGR5bmFtaWNSZXBvc2l0b3J5LFxuICAgICAgY3VzdG9tRW50aXRpZXNDb25maWdcbiAgICApO1xuICB9XG4gIG5nT25Jbml0KCkge1xuICAgIGlmICghdGhpcy5tb2NrZWRJdGVtcykge1xuICAgICAgdGhpcy51c2VSZXN0KHtcbiAgICAgICAgYXBpVXJsOiB0aGlzLmFwaVVybCxcbiAgICAgICAgLi4udGhpcy5jdXN0b21FbnRpdGllc0NvbmZpZyxcbiAgICAgICAgcGFnaW5hdGlvbk1ldGE6IHsgcGVyUGFnZTogMTAwMCB9XG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKHRoaXMubW9ja2VkSXRlbXMpIHtcbiAgICAgIHRoaXMudXNlTW9jayh7XG4gICAgICAgIGl0ZW1zOiB0aGlzLm1vY2tlZEl0ZW1zLFxuICAgICAgICAuLi50aGlzLmN1c3RvbUVudGl0aWVzQ29uZmlnXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgY2hlY2tDaGFuZ2UodmFsdWU6IGFueSwgaXRlbTogYW55KSB7XG4gICAgcmV0dXJuIGl0ZW0gaW5zdGFuY2VvZiBDdXN0b21FbnRpdHk7XG4gIH1cbn1cbiJdfQ==