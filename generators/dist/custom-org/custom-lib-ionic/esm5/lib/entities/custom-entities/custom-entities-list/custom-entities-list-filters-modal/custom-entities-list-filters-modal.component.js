/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { BasePromptFormModalComponent } from "@rucken/core";
import { BindIoInner } from "ngx-bind-io";
import { CustomEntitiesListFiltersModal } from "./custom-entities-list-filters-modal";
import { CustomEntitiesListFiltersModalService } from "./custom-entities-list-filters-modal.service";
var CustomEntitiesListFiltersModalComponent = /** @class */ (function (_super) {
    tslib_1.__extends(CustomEntitiesListFiltersModalComponent, _super);
    function CustomEntitiesListFiltersModalComponent(_customEntitiesListFiltersModalService) {
        var _this = _super.call(this) || this;
        _this._customEntitiesListFiltersModalService = _customEntitiesListFiltersModalService;
        _this.class = undefined;
        _this.sortTypes = CustomEntitiesListFiltersModal.sortTypes;
        _this.sortFields = CustomEntitiesListFiltersModal.sortFields;
        _this.group(CustomEntitiesListFiltersModal);
        return _this;
    }
    /**
     * @return {?}
     */
    CustomEntitiesListFiltersModalComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.data = this._customEntitiesListFiltersModalService.getCurrent();
        this.hideYes = true;
    };
    /**
     * @param {?=} data
     * @return {?}
     */
    CustomEntitiesListFiltersModalComponent.prototype.onYesClick = /**
     * @param {?=} data
     * @return {?}
     */
    function (data) {
        this._customEntitiesListFiltersModalService.setCurrent(this.data);
        _super.prototype.onYesClick.call(this, data);
    };
    CustomEntitiesListFiltersModalComponent.decorators = [
        { type: Component, args: [{
                    selector: "custom-entities-list-filters-modal",
                    template: "<prompt-form-modal\n  [bindIO]\n  iconTopYes=\"checkmark\"\n  iconTopNo=\"close\"\n  [hideFooter]=\"true\"\n>\n</prompt-form-modal>\n<ion-content padding-top>\n  <prompt-form-modal [bindIO] [hideHeader]=\"true\">\n    <form [formGroup]=\"form\" novalidate>\n      <form-group [bindIO] name=\"sortField\" [title]=\"strings.sortField\">\n        <select-input\n          [items]=\"sortFields\"\n          formControlName=\"sortField\"\n          [disableControl]=\"readonly\"\n        >\n        </select-input>\n      </form-group>\n      <form-group [bindIO] name=\"sortType\" [title]=\"strings.sortType\">\n        <select-input\n          [items]=\"sortTypes\"\n          formControlName=\"sortType\"\n          [disableControl]=\"readonly\"\n        >\n        </select-input>\n      </form-group>\n    </form>\n  </prompt-form-modal>\n</ion-content>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    CustomEntitiesListFiltersModalComponent.ctorParameters = function () { return [
        { type: CustomEntitiesListFiltersModalService }
    ]; };
    CustomEntitiesListFiltersModalComponent.propDecorators = {
        class: [{ type: Input }]
    };
    CustomEntitiesListFiltersModalComponent = tslib_1.__decorate([
        BindIoInner(),
        tslib_1.__metadata("design:paramtypes", [CustomEntitiesListFiltersModalService])
    ], CustomEntitiesListFiltersModalComponent);
    return CustomEntitiesListFiltersModalComponent;
}(BasePromptFormModalComponent));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLWVudGl0aWVzLWxpc3QtZmlsdGVycy1tb2RhbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY3VzdG9tLW9yZy9jdXN0b20tbGliLWlvbmljLyIsInNvdXJjZXMiOlsibGliL2VudGl0aWVzL2N1c3RvbS1lbnRpdGllcy9jdXN0b20tZW50aXRpZXMtbGlzdC9jdXN0b20tZW50aXRpZXMtbGlzdC1maWx0ZXJzLW1vZGFsL2N1c3RvbS1lbnRpdGllcy1saXN0LWZpbHRlcnMtbW9kYWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsS0FBSyxFQUVOLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUM1RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzFDLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3RGLE9BQU8sRUFBRSxxQ0FBcUMsRUFBRSxNQUFNLDhDQUE4QyxDQUFDOztJQVEzRixtRUFBNEQ7SUFPcEUsaURBQ1Usc0NBQTZFO1FBRHZGLFlBR0UsaUJBQU8sU0FFUjtRQUpTLDRDQUFzQyxHQUF0QyxzQ0FBc0MsQ0FBdUM7UUFMdkYsV0FBSyxHQUFXLFNBQVMsQ0FBQztRQUMxQixlQUFTLEdBQUcsOEJBQThCLENBQUMsU0FBUyxDQUFDO1FBQ3JELGdCQUFVLEdBQUcsOEJBQThCLENBQUMsVUFBVSxDQUFDO1FBTXJELEtBQUksQ0FBQyxLQUFLLENBQUMsOEJBQThCLENBQUMsQ0FBQzs7SUFDN0MsQ0FBQzs7OztJQUNELDBEQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLHNDQUFzQyxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ3JFLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO0lBQ3RCLENBQUM7Ozs7O0lBQ0QsNERBQVU7Ozs7SUFBVixVQUFXLElBQVU7UUFDbkIsSUFBSSxDQUFDLHNDQUFzQyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEUsaUJBQU0sVUFBVSxZQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3pCLENBQUM7O2dCQTFCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLG9DQUFvQztvQkFDOUMsbTJCQUFrRTtvQkFDbEUsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07aUJBQ2hEOzs7O2dCQU5RLHFDQUFxQzs7O3dCQVUzQyxLQUFLOztJQUhLLHVDQUF1QztRQU5uRCxXQUFXLEVBQUU7aURBZXNDLHFDQUFxQztPQVQ1RSx1Q0FBdUMsQ0FzQm5EO0lBQUQsOENBQUM7Q0FBQSxDQXJCUyw0QkFBNEIsR0FxQnJDO1NBdEJZLHVDQUF1Qzs7O0lBR2xELHdEQUMwQjs7SUFDMUIsNERBQXFEOztJQUNyRCw2REFBdUQ7Ozs7O0lBR3JELHlGQUFxRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBPbkluaXRcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEJhc2VQcm9tcHRGb3JtTW9kYWxDb21wb25lbnQgfSBmcm9tIFwiQHJ1Y2tlbi9jb3JlXCI7XG5pbXBvcnQgeyBCaW5kSW9Jbm5lciB9IGZyb20gXCJuZ3gtYmluZC1pb1wiO1xuaW1wb3J0IHsgQ3VzdG9tRW50aXRpZXNMaXN0RmlsdGVyc01vZGFsIH0gZnJvbSBcIi4vY3VzdG9tLWVudGl0aWVzLWxpc3QtZmlsdGVycy1tb2RhbFwiO1xuaW1wb3J0IHsgQ3VzdG9tRW50aXRpZXNMaXN0RmlsdGVyc01vZGFsU2VydmljZSB9IGZyb20gXCIuL2N1c3RvbS1lbnRpdGllcy1saXN0LWZpbHRlcnMtbW9kYWwuc2VydmljZVwiO1xuQEJpbmRJb0lubmVyKClcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJjdXN0b20tZW50aXRpZXMtbGlzdC1maWx0ZXJzLW1vZGFsXCIsXG4gIHRlbXBsYXRlVXJsOiBcIi4vY3VzdG9tLWVudGl0aWVzLWxpc3QtZmlsdGVycy1tb2RhbC5jb21wb25lbnQuaHRtbFwiLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBDdXN0b21FbnRpdGllc0xpc3RGaWx0ZXJzTW9kYWxDb21wb25lbnRcbiAgZXh0ZW5kcyBCYXNlUHJvbXB0Rm9ybU1vZGFsQ29tcG9uZW50PEN1c3RvbUVudGl0aWVzTGlzdEZpbHRlcnNNb2RhbD5cbiAgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKVxuICBjbGFzczogc3RyaW5nID0gdW5kZWZpbmVkO1xuICBzb3J0VHlwZXMgPSBDdXN0b21FbnRpdGllc0xpc3RGaWx0ZXJzTW9kYWwuc29ydFR5cGVzO1xuICBzb3J0RmllbGRzID0gQ3VzdG9tRW50aXRpZXNMaXN0RmlsdGVyc01vZGFsLnNvcnRGaWVsZHM7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfY3VzdG9tRW50aXRpZXNMaXN0RmlsdGVyc01vZGFsU2VydmljZTogQ3VzdG9tRW50aXRpZXNMaXN0RmlsdGVyc01vZGFsU2VydmljZVxuICApIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuZ3JvdXAoQ3VzdG9tRW50aXRpZXNMaXN0RmlsdGVyc01vZGFsKTtcbiAgfVxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmRhdGEgPSB0aGlzLl9jdXN0b21FbnRpdGllc0xpc3RGaWx0ZXJzTW9kYWxTZXJ2aWNlLmdldEN1cnJlbnQoKTtcbiAgICB0aGlzLmhpZGVZZXMgPSB0cnVlO1xuICB9XG4gIG9uWWVzQ2xpY2soZGF0YT86IGFueSkge1xuICAgIHRoaXMuX2N1c3RvbUVudGl0aWVzTGlzdEZpbHRlcnNNb2RhbFNlcnZpY2Uuc2V0Q3VycmVudCh0aGlzLmRhdGEpO1xuICAgIHN1cGVyLm9uWWVzQ2xpY2soZGF0YSk7XG4gIH1cbn1cbiJdfQ==