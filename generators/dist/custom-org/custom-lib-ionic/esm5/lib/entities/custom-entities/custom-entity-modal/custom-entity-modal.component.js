/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { BasePromptFormModalComponent } from "@rucken/core";
import { BindIoInner } from "ngx-bind-io";
import { CustomEntity } from "@custom-org/custom-lib";
var CustomEntityModalComponent = /** @class */ (function (_super) {
    tslib_1.__extends(CustomEntityModalComponent, _super);
    function CustomEntityModalComponent() {
        var _this = _super.call(this) || this;
        _this.class = undefined;
        _this.group(CustomEntity);
        return _this;
    }
    CustomEntityModalComponent.decorators = [
        { type: Component, args: [{
                    selector: "custom-entity-modal",
                    template: "<prompt-form-modal\n  [bindIO]\n  [iconTopYes]=\"data.id ? 'checkmark' : 'add'\"\n  [hideFooter]=\"true\"\n>\n</prompt-form-modal>\n<ion-content padding-top [class.readonly_content]=\"readonly\">\n  <prompt-form-modal [bindIO] [hideHeader]=\"true\">\n    <form [formGroup]=\"form\" novalidate>\n      <form-group [bindIO] name=\"title\" [title]=\"strings.title\">\n        <ion-input\n          formControlName=\"title\"\n          [disableControl]=\"readonly\"\n          [autofocus]=\"true\"\n        >\n        </ion-input>\n      </form-group>\n      <form-group [bindIO] name=\"name\" [title]=\"strings.name\">\n        <ion-textarea formControlName=\"name\" [disableControl]=\"readonly\">\n        </ion-textarea>\n      </form-group>\n    </form>\n  </prompt-form-modal>\n</ion-content>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    CustomEntityModalComponent.ctorParameters = function () { return []; };
    CustomEntityModalComponent.propDecorators = {
        class: [{ type: Input }]
    };
    CustomEntityModalComponent = tslib_1.__decorate([
        BindIoInner(),
        tslib_1.__metadata("design:paramtypes", [])
    ], CustomEntityModalComponent);
    return CustomEntityModalComponent;
}(BasePromptFormModalComponent));
export { CustomEntityModalComponent };
if (false) {
    /** @type {?} */
    CustomEntityModalComponent.prototype.class;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLWVudGl0eS1tb2RhbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY3VzdG9tLW9yZy9jdXN0b20tbGliLWlvbmljLyIsInNvdXJjZXMiOlsibGliL2VudGl0aWVzL2N1c3RvbS1lbnRpdGllcy9jdXN0b20tZW50aXR5LW1vZGFsL2N1c3RvbS1lbnRpdHktbW9kYWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUUsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQzVELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDMUMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHdCQUF3QixDQUFDOztJQVFOLHNEQUUvQztJQUlDO1FBQUEsWUFDRSxpQkFBTyxTQUVSO1FBTEQsV0FBSyxHQUFXLFNBQVMsQ0FBQztRQUl4QixLQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDOztJQUMzQixDQUFDOztnQkFkRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtvQkFDL0IsdXlCQUFtRDtvQkFDbkQsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07aUJBQ2hEOzs7Ozt3QkFJRSxLQUFLOztJQUhLLDBCQUEwQjtRQU50QyxXQUFXLEVBQUU7O09BTUQsMEJBQTBCLENBVXRDO0lBQUQsaUNBQUM7Q0FBQSxDQVYrQyw0QkFBNEIsR0FVM0U7U0FWWSwwQkFBMEI7OztJQUdyQywyQ0FDMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBCYXNlUHJvbXB0Rm9ybU1vZGFsQ29tcG9uZW50IH0gZnJvbSBcIkBydWNrZW4vY29yZVwiO1xuaW1wb3J0IHsgQmluZElvSW5uZXIgfSBmcm9tIFwibmd4LWJpbmQtaW9cIjtcbmltcG9ydCB7IEN1c3RvbUVudGl0eSB9IGZyb20gXCJAY3VzdG9tLW9yZy9jdXN0b20tbGliXCI7XG5cbkBCaW5kSW9Jbm5lcigpXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwiY3VzdG9tLWVudGl0eS1tb2RhbFwiLFxuICB0ZW1wbGF0ZVVybDogXCIuL2N1c3RvbS1lbnRpdHktbW9kYWwuY29tcG9uZW50Lmh0bWxcIixcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgQ3VzdG9tRW50aXR5TW9kYWxDb21wb25lbnQgZXh0ZW5kcyBCYXNlUHJvbXB0Rm9ybU1vZGFsQ29tcG9uZW50PFxuICBDdXN0b21FbnRpdHlcbj4ge1xuICBASW5wdXQoKVxuICBjbGFzczogc3RyaW5nID0gdW5kZWZpbmVkO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5ncm91cChDdXN0b21FbnRpdHkpO1xuICB9XG59XG4iXX0=