/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { BasePromptFormModalComponent } from "@rucken/core";
import { BindIoInner } from "ngx-bind-io";
import { CustomEntitiesListFiltersModal } from "./custom-entities-list-filters-modal";
import { CustomEntitiesListFiltersModalService } from "./custom-entities-list-filters-modal.service";
let CustomEntitiesListFiltersModalComponent = class CustomEntitiesListFiltersModalComponent extends BasePromptFormModalComponent {
    /**
     * @param {?} _customEntitiesListFiltersModalService
     */
    constructor(_customEntitiesListFiltersModalService) {
        super();
        this._customEntitiesListFiltersModalService = _customEntitiesListFiltersModalService;
        this.class = undefined;
        this.sortTypes = CustomEntitiesListFiltersModal.sortTypes;
        this.sortFields = CustomEntitiesListFiltersModal.sortFields;
        this.group(CustomEntitiesListFiltersModal);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.data = this._customEntitiesListFiltersModalService.getCurrent();
        this.hideYes = true;
    }
    /**
     * @param {?=} data
     * @return {?}
     */
    onYesClick(data) {
        this._customEntitiesListFiltersModalService.setCurrent(this.data);
        super.onYesClick(data);
    }
};
CustomEntitiesListFiltersModalComponent.decorators = [
    { type: Component, args: [{
                selector: "custom-entities-list-filters-modal",
                template: "<prompt-form-modal\n  [bindIO]\n  iconTopYes=\"checkmark\"\n  iconTopNo=\"close\"\n  [hideFooter]=\"true\"\n>\n</prompt-form-modal>\n<ion-content padding-top>\n  <prompt-form-modal [bindIO] [hideHeader]=\"true\">\n    <form [formGroup]=\"form\" novalidate>\n      <form-group [bindIO] name=\"sortField\" [title]=\"strings.sortField\">\n        <select-input\n          [items]=\"sortFields\"\n          formControlName=\"sortField\"\n          [disableControl]=\"readonly\"\n        >\n        </select-input>\n      </form-group>\n      <form-group [bindIO] name=\"sortType\" [title]=\"strings.sortType\">\n        <select-input\n          [items]=\"sortTypes\"\n          formControlName=\"sortType\"\n          [disableControl]=\"readonly\"\n        >\n        </select-input>\n      </form-group>\n    </form>\n  </prompt-form-modal>\n</ion-content>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
CustomEntitiesListFiltersModalComponent.ctorParameters = () => [
    { type: CustomEntitiesListFiltersModalService }
];
CustomEntitiesListFiltersModalComponent.propDecorators = {
    class: [{ type: Input }]
};
CustomEntitiesListFiltersModalComponent = tslib_1.__decorate([
    BindIoInner(),
    tslib_1.__metadata("design:paramtypes", [CustomEntitiesListFiltersModalService])
], CustomEntitiesListFiltersModalComponent);
export { CustomEntitiesListFiltersModalComponent };
if (false) {
    /** @type {?} */
    CustomEntitiesListFiltersModalComponent.prototype.class;
    /** @type {?} */
    CustomEntitiesListFiltersModalComponent.prototype.sortTypes;
    /** @type {?} */
    CustomEntitiesListFiltersModalComponent.prototype.sortFields;
    /**
     * @type {?}
     * @private
     */
    CustomEntitiesListFiltersModalComponent.prototype._customEntitiesListFiltersModalService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLWVudGl0aWVzLWxpc3QtZmlsdGVycy1tb2RhbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY3VzdG9tLW9yZy9jdXN0b20tbGliLWlvbmljLyIsInNvdXJjZXMiOlsibGliL2VudGl0aWVzL2N1c3RvbS1lbnRpdGllcy9jdXN0b20tZW50aXRpZXMtbGlzdC9jdXN0b20tZW50aXRpZXMtbGlzdC1maWx0ZXJzLW1vZGFsL2N1c3RvbS1lbnRpdGllcy1saXN0LWZpbHRlcnMtbW9kYWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsS0FBSyxFQUVOLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUM1RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzFDLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3RGLE9BQU8sRUFBRSxxQ0FBcUMsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0lBT3hGLHVDQUF1QyxTQUF2Qyx1Q0FDWCxTQUFRLDRCQUE0RDs7OztJQU9wRSxZQUNVLHNDQUE2RTtRQUVyRixLQUFLLEVBQUUsQ0FBQztRQUZBLDJDQUFzQyxHQUF0QyxzQ0FBc0MsQ0FBdUM7UUFMdkYsVUFBSyxHQUFXLFNBQVMsQ0FBQztRQUMxQixjQUFTLEdBQUcsOEJBQThCLENBQUMsU0FBUyxDQUFDO1FBQ3JELGVBQVUsR0FBRyw4QkFBOEIsQ0FBQyxVQUFVLENBQUM7UUFNckQsSUFBSSxDQUFDLEtBQUssQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO0lBQzdDLENBQUM7Ozs7SUFDRCxRQUFRO1FBQ04sSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsc0NBQXNDLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDckUsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7SUFDdEIsQ0FBQzs7Ozs7SUFDRCxVQUFVLENBQUMsSUFBVTtRQUNuQixJQUFJLENBQUMsc0NBQXNDLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNsRSxLQUFLLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3pCLENBQUM7Q0FDRixDQUFBOztZQTNCQSxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLG9DQUFvQztnQkFDOUMsbTJCQUFrRTtnQkFDbEUsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDaEQ7Ozs7WUFOUSxxQ0FBcUM7OztvQkFVM0MsS0FBSzs7QUFISyx1Q0FBdUM7SUFObkQsV0FBVyxFQUFFOzZDQWVzQyxxQ0FBcUM7R0FUNUUsdUNBQXVDLENBc0JuRDtTQXRCWSx1Q0FBdUM7OztJQUdsRCx3REFDMEI7O0lBQzFCLDREQUFxRDs7SUFDckQsNkRBQXVEOzs7OztJQUdyRCx5RkFBcUYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgT25Jbml0XG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBCYXNlUHJvbXB0Rm9ybU1vZGFsQ29tcG9uZW50IH0gZnJvbSBcIkBydWNrZW4vY29yZVwiO1xuaW1wb3J0IHsgQmluZElvSW5uZXIgfSBmcm9tIFwibmd4LWJpbmQtaW9cIjtcbmltcG9ydCB7IEN1c3RvbUVudGl0aWVzTGlzdEZpbHRlcnNNb2RhbCB9IGZyb20gXCIuL2N1c3RvbS1lbnRpdGllcy1saXN0LWZpbHRlcnMtbW9kYWxcIjtcbmltcG9ydCB7IEN1c3RvbUVudGl0aWVzTGlzdEZpbHRlcnNNb2RhbFNlcnZpY2UgfSBmcm9tIFwiLi9jdXN0b20tZW50aXRpZXMtbGlzdC1maWx0ZXJzLW1vZGFsLnNlcnZpY2VcIjtcbkBCaW5kSW9Jbm5lcigpXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwiY3VzdG9tLWVudGl0aWVzLWxpc3QtZmlsdGVycy1tb2RhbFwiLFxuICB0ZW1wbGF0ZVVybDogXCIuL2N1c3RvbS1lbnRpdGllcy1saXN0LWZpbHRlcnMtbW9kYWwuY29tcG9uZW50Lmh0bWxcIixcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgQ3VzdG9tRW50aXRpZXNMaXN0RmlsdGVyc01vZGFsQ29tcG9uZW50XG4gIGV4dGVuZHMgQmFzZVByb21wdEZvcm1Nb2RhbENvbXBvbmVudDxDdXN0b21FbnRpdGllc0xpc3RGaWx0ZXJzTW9kYWw+XG4gIGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KClcbiAgY2xhc3M6IHN0cmluZyA9IHVuZGVmaW5lZDtcbiAgc29ydFR5cGVzID0gQ3VzdG9tRW50aXRpZXNMaXN0RmlsdGVyc01vZGFsLnNvcnRUeXBlcztcbiAgc29ydEZpZWxkcyA9IEN1c3RvbUVudGl0aWVzTGlzdEZpbHRlcnNNb2RhbC5zb3J0RmllbGRzO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX2N1c3RvbUVudGl0aWVzTGlzdEZpbHRlcnNNb2RhbFNlcnZpY2U6IEN1c3RvbUVudGl0aWVzTGlzdEZpbHRlcnNNb2RhbFNlcnZpY2VcbiAgKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmdyb3VwKEN1c3RvbUVudGl0aWVzTGlzdEZpbHRlcnNNb2RhbCk7XG4gIH1cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5kYXRhID0gdGhpcy5fY3VzdG9tRW50aXRpZXNMaXN0RmlsdGVyc01vZGFsU2VydmljZS5nZXRDdXJyZW50KCk7XG4gICAgdGhpcy5oaWRlWWVzID0gdHJ1ZTtcbiAgfVxuICBvblllc0NsaWNrKGRhdGE/OiBhbnkpIHtcbiAgICB0aGlzLl9jdXN0b21FbnRpdGllc0xpc3RGaWx0ZXJzTW9kYWxTZXJ2aWNlLnNldEN1cnJlbnQodGhpcy5kYXRhKTtcbiAgICBzdXBlci5vblllc0NsaWNrKGRhdGEpO1xuICB9XG59XG4iXX0=