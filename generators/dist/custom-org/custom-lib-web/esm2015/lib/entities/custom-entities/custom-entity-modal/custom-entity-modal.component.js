/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { BasePromptFormModalComponent } from "@rucken/core";
import { CustomEntity } from "@custom-org/custom-lib";
import { BindIoInner } from "ngx-bind-io";
let CustomEntityModalComponent = class CustomEntityModalComponent extends BasePromptFormModalComponent {
    constructor() {
        super();
        this.apiUrl = undefined;
        this.group(CustomEntity);
    }
};
CustomEntityModalComponent.decorators = [
    { type: Component, args: [{
                selector: "custom-entity-modal",
                template: "<form [formGroup]=\"form\" novalidate>\n  <prompt-form-modal [bindIO]>\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <form-group [bindIO] name=\"title\" [title]=\"strings.title\" focus>\n          <input formControlName=\"title\" [readonly]=\"readonly\" />\n        </form-group>\n      </div>\n      <div class=\"col-md-12\">\n        <form-group [bindIO] name=\"name\" [title]=\"strings.name\">\n          <textarea formControlName=\"name\" [readonly]=\"readonly\"> </textarea>\n        </form-group>\n      </div>\n    </div>\n  </prompt-form-modal>\n</form>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
CustomEntityModalComponent.ctorParameters = () => [];
CustomEntityModalComponent.propDecorators = {
    apiUrl: [{ type: Input }]
};
CustomEntityModalComponent = tslib_1.__decorate([
    BindIoInner(),
    tslib_1.__metadata("design:paramtypes", [])
], CustomEntityModalComponent);
export { CustomEntityModalComponent };
if (false) {
    /** @type {?} */
    CustomEntityModalComponent.prototype.apiUrl;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLWVudGl0eS1tb2RhbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY3VzdG9tLW9yZy9jdXN0b20tbGliLXdlYi8iLCJzb3VyY2VzIjpbImxpYi9lbnRpdGllcy9jdXN0b20tZW50aXRpZXMvY3VzdG9tLWVudGl0eS1tb2RhbC9jdXN0b20tZW50aXR5LW1vZGFsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFFLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUM1RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdEQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGFBQWEsQ0FBQztJQVE3QiwwQkFBMEIsU0FBMUIsMEJBQTJCLFNBQVEsNEJBRS9DO0lBSUM7UUFDRSxLQUFLLEVBQUUsQ0FBQztRQUhWLFdBQU0sR0FBWSxTQUFTLENBQUM7UUFJMUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUMzQixDQUFDO0NBQ0YsQ0FBQTs7WUFmQSxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtnQkFDL0Isb2xCQUFtRDtnQkFDbkQsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDaEQ7Ozs7O3FCQUlFLEtBQUs7O0FBSEssMEJBQTBCO0lBTnRDLFdBQVcsRUFBRTs7R0FNRCwwQkFBMEIsQ0FVdEM7U0FWWSwwQkFBMEI7OztJQUdyQyw0Q0FDNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBCYXNlUHJvbXB0Rm9ybU1vZGFsQ29tcG9uZW50IH0gZnJvbSBcIkBydWNrZW4vY29yZVwiO1xuaW1wb3J0IHsgQ3VzdG9tRW50aXR5IH0gZnJvbSBcIkBjdXN0b20tb3JnL2N1c3RvbS1saWJcIjtcbmltcG9ydCB7IEJpbmRJb0lubmVyIH0gZnJvbSBcIm5neC1iaW5kLWlvXCI7XG5cbkBCaW5kSW9Jbm5lcigpXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwiY3VzdG9tLWVudGl0eS1tb2RhbFwiLFxuICB0ZW1wbGF0ZVVybDogXCIuL2N1c3RvbS1lbnRpdHktbW9kYWwuY29tcG9uZW50Lmh0bWxcIixcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgQ3VzdG9tRW50aXR5TW9kYWxDb21wb25lbnQgZXh0ZW5kcyBCYXNlUHJvbXB0Rm9ybU1vZGFsQ29tcG9uZW50PFxuICBDdXN0b21FbnRpdHlcbj4ge1xuICBASW5wdXQoKVxuICBhcGlVcmw/OiBzdHJpbmcgPSB1bmRlZmluZWQ7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmdyb3VwKEN1c3RvbUVudGl0eSk7XG4gIH1cbn1cbiJdfQ==