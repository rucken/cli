/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { BasePromptFormModalComponent } from "@rucken/core";
import { BindIoInner } from "ngx-bind-io";
import { CustomEntity } from "@custom-org/custom-lib";
let CustomEntityModalComponent = class CustomEntityModalComponent extends BasePromptFormModalComponent {
    constructor() {
        super();
        this.class = undefined;
        this.group(CustomEntity);
    }
};
CustomEntityModalComponent.decorators = [
    { type: Component, args: [{
                selector: "custom-entity-modal",
                template: "<prompt-form-modal\n  [bindIO]\n  [iconTopYes]=\"data.id ? 'checkmark' : 'add'\"\n  [hideFooter]=\"true\"\n>\n</prompt-form-modal>\n<ion-content padding-top [class.readonly_content]=\"readonly\">\n  <prompt-form-modal [bindIO] [hideHeader]=\"true\">\n    <form [formGroup]=\"form\" novalidate>\n      <form-group [bindIO] name=\"title\" [title]=\"strings.title\">\n        <ion-input\n          formControlName=\"title\"\n          [disableControl]=\"readonly\"\n          [autofocus]=\"true\"\n        >\n        </ion-input>\n      </form-group>\n      <form-group [bindIO] name=\"name\" [title]=\"strings.name\">\n        <ion-textarea formControlName=\"name\" [disableControl]=\"readonly\">\n        </ion-textarea>\n      </form-group>\n    </form>\n  </prompt-form-modal>\n</ion-content>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
CustomEntityModalComponent.ctorParameters = () => [];
CustomEntityModalComponent.propDecorators = {
    class: [{ type: Input }]
};
CustomEntityModalComponent = tslib_1.__decorate([
    BindIoInner(),
    tslib_1.__metadata("design:paramtypes", [])
], CustomEntityModalComponent);
export { CustomEntityModalComponent };
if (false) {
    /** @type {?} */
    CustomEntityModalComponent.prototype.class;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLWVudGl0eS1tb2RhbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY3VzdG9tLW9yZy9jdXN0b20tbGliLWlvbmljLyIsInNvdXJjZXMiOlsibGliL2VudGl0aWVzL2N1c3RvbS1lbnRpdGllcy9jdXN0b20tZW50aXR5LW1vZGFsL2N1c3RvbS1lbnRpdHktbW9kYWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUUsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQzVELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDMUMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHdCQUF3QixDQUFDO0lBUXpDLDBCQUEwQixTQUExQiwwQkFBMkIsU0FBUSw0QkFFL0M7SUFJQztRQUNFLEtBQUssRUFBRSxDQUFDO1FBSFYsVUFBSyxHQUFXLFNBQVMsQ0FBQztRQUl4QixJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzNCLENBQUM7Q0FDRixDQUFBOztZQWZBLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUscUJBQXFCO2dCQUMvQix1eUJBQW1EO2dCQUNuRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDs7Ozs7b0JBSUUsS0FBSzs7QUFISywwQkFBMEI7SUFOdEMsV0FBVyxFQUFFOztHQU1ELDBCQUEwQixDQVV0QztTQVZZLDBCQUEwQjs7O0lBR3JDLDJDQUMwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIElucHV0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEJhc2VQcm9tcHRGb3JtTW9kYWxDb21wb25lbnQgfSBmcm9tIFwiQHJ1Y2tlbi9jb3JlXCI7XG5pbXBvcnQgeyBCaW5kSW9Jbm5lciB9IGZyb20gXCJuZ3gtYmluZC1pb1wiO1xuaW1wb3J0IHsgQ3VzdG9tRW50aXR5IH0gZnJvbSBcIkBjdXN0b20tb3JnL2N1c3RvbS1saWJcIjtcblxuQEJpbmRJb0lubmVyKClcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJjdXN0b20tZW50aXR5LW1vZGFsXCIsXG4gIHRlbXBsYXRlVXJsOiBcIi4vY3VzdG9tLWVudGl0eS1tb2RhbC5jb21wb25lbnQuaHRtbFwiLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBDdXN0b21FbnRpdHlNb2RhbENvbXBvbmVudCBleHRlbmRzIEJhc2VQcm9tcHRGb3JtTW9kYWxDb21wb25lbnQ8XG4gIEN1c3RvbUVudGl0eVxuPiB7XG4gIEBJbnB1dCgpXG4gIGNsYXNzOiBzdHJpbmcgPSB1bmRlZmluZWQ7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmdyb3VwKEN1c3RvbUVudGl0eSk7XG4gIH1cbn1cbiJdfQ==