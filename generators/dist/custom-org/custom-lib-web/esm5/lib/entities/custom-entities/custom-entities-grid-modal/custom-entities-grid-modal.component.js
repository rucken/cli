/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component, Input, ViewChild } from "@angular/core";
import { BaseEntityListModalComponent } from "@rucken/core";
import { CustomEntitiesGridComponent } from "../custom-entities-grid/custom-entities-grid.component";
import { BindIoInner } from "ngx-bind-io";
var CustomEntitiesGridModalComponent = /** @class */ (function (_super) {
    tslib_1.__extends(CustomEntitiesGridModalComponent, _super);
    function CustomEntitiesGridModalComponent() {
        var _this = _super.call(this) || this;
        _this.apiUrl = undefined;
        return _this;
    }
    CustomEntitiesGridModalComponent.decorators = [
        { type: Component, args: [{
                    selector: "custom-entities-grid-modal",
                    template: "<entity-grid-modal [bindIO]>\n  <custom-entities-grid [apiUrl]=\"apiUrl\" #grid> </custom-entities-grid>\n</entity-grid-modal>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    CustomEntitiesGridModalComponent.ctorParameters = function () { return []; };
    CustomEntitiesGridModalComponent.propDecorators = {
        grid: [{ type: ViewChild, args: ["grid",] }],
        apiUrl: [{ type: Input }]
    };
    CustomEntitiesGridModalComponent = tslib_1.__decorate([
        BindIoInner(),
        tslib_1.__metadata("design:paramtypes", [])
    ], CustomEntitiesGridModalComponent);
    return CustomEntitiesGridModalComponent;
}(BaseEntityListModalComponent));
export { CustomEntitiesGridModalComponent };
if (false) {
    /** @type {?} */
    CustomEntitiesGridModalComponent.prototype.grid;
    /** @type {?} */
    CustomEntitiesGridModalComponent.prototype.apiUrl;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLWVudGl0aWVzLWdyaWQtbW9kYWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGN1c3RvbS1vcmcvY3VzdG9tLWxpYi13ZWIvIiwic291cmNlcyI6WyJsaWIvZW50aXRpZXMvY3VzdG9tLWVudGl0aWVzL2N1c3RvbS1lbnRpdGllcy1ncmlkLW1vZGFsL2N1c3RvbS1lbnRpdGllcy1ncmlkLW1vZGFsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULEtBQUssRUFDTCxTQUFTLEVBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sY0FBYyxDQUFDO0FBRTVELE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBQ3JHLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxhQUFhLENBQUM7O0lBUVksNERBRXJEO0lBTUM7UUFBQSxZQUNFLGlCQUFPLFNBQ1I7UUFKRCxZQUFNLEdBQVksU0FBUyxDQUFDOztJQUk1QixDQUFDOztnQkFmRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLDRCQUE0QjtvQkFDdEMsNElBQTBEO29CQUMxRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtpQkFDaEQ7Ozs7O3VCQUlFLFNBQVMsU0FBQyxNQUFNO3lCQUVoQixLQUFLOztJQUxLLGdDQUFnQztRQU41QyxXQUFXLEVBQUU7O09BTUQsZ0NBQWdDLENBVzVDO0lBQUQsdUNBQUM7Q0FBQSxDQVhxRCw0QkFBNEIsR0FXakY7U0FYWSxnQ0FBZ0M7OztJQUczQyxnREFDa0M7O0lBQ2xDLGtEQUM0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBWaWV3Q2hpbGRcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEJhc2VFbnRpdHlMaXN0TW9kYWxDb21wb25lbnQgfSBmcm9tIFwiQHJ1Y2tlbi9jb3JlXCI7XG5pbXBvcnQgeyBDdXN0b21FbnRpdHkgfSBmcm9tIFwiQGN1c3RvbS1vcmcvY3VzdG9tLWxpYlwiO1xuaW1wb3J0IHsgQ3VzdG9tRW50aXRpZXNHcmlkQ29tcG9uZW50IH0gZnJvbSBcIi4uL2N1c3RvbS1lbnRpdGllcy1ncmlkL2N1c3RvbS1lbnRpdGllcy1ncmlkLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgQmluZElvSW5uZXIgfSBmcm9tIFwibmd4LWJpbmQtaW9cIjtcblxuQEJpbmRJb0lubmVyKClcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJjdXN0b20tZW50aXRpZXMtZ3JpZC1tb2RhbFwiLFxuICB0ZW1wbGF0ZVVybDogXCIuL2N1c3RvbS1lbnRpdGllcy1ncmlkLW1vZGFsLmNvbXBvbmVudC5odG1sXCIsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIEN1c3RvbUVudGl0aWVzR3JpZE1vZGFsQ29tcG9uZW50IGV4dGVuZHMgQmFzZUVudGl0eUxpc3RNb2RhbENvbXBvbmVudDxcbiAgQ3VzdG9tRW50aXR5XG4+IHtcbiAgQFZpZXdDaGlsZChcImdyaWRcIilcbiAgZ3JpZDogQ3VzdG9tRW50aXRpZXNHcmlkQ29tcG9uZW50O1xuICBASW5wdXQoKVxuICBhcGlVcmw/OiBzdHJpbmcgPSB1bmRlZmluZWQ7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxufVxuIl19