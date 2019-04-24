/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { BasePromptFormModalComponent } from "@rucken/core";
import { CustomEntity } from "@custom-org/custom-lib";
import { BindIoInner } from "ngx-bind-io";
var CustomEntityModalComponent = /** @class */ (function (_super) {
    tslib_1.__extends(CustomEntityModalComponent, _super);
    function CustomEntityModalComponent() {
        var _this = _super.call(this) || this;
        _this.apiUrl = undefined;
        _this.group(CustomEntity);
        return _this;
    }
    CustomEntityModalComponent.decorators = [
        { type: Component, args: [{
                    selector: "custom-entity-modal",
                    template: "<form [formGroup]=\"form\" novalidate>\n  <prompt-form-modal [bindIO]>\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <form-group [bindIO] name=\"title\" [title]=\"strings.title\" focus>\n          <input formControlName=\"title\" [readonly]=\"readonly\" />\n        </form-group>\n      </div>\n      <div class=\"col-md-12\">\n        <form-group [bindIO] name=\"name\" [title]=\"strings.name\">\n          <textarea formControlName=\"name\" [readonly]=\"readonly\"> </textarea>\n        </form-group>\n      </div>\n    </div>\n  </prompt-form-modal>\n</form>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    CustomEntityModalComponent.ctorParameters = function () { return []; };
    CustomEntityModalComponent.propDecorators = {
        apiUrl: [{ type: Input }]
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
    CustomEntityModalComponent.prototype.apiUrl;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLWVudGl0eS1tb2RhbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY3VzdG9tLW9yZy9jdXN0b20tbGliLXdlYi8iLCJzb3VyY2VzIjpbImxpYi9lbnRpdGllcy9jdXN0b20tZW50aXRpZXMvY3VzdG9tLWVudGl0eS1tb2RhbC9jdXN0b20tZW50aXR5LW1vZGFsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFFLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUM1RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdEQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGFBQWEsQ0FBQzs7SUFRTSxzREFFL0M7SUFJQztRQUFBLFlBQ0UsaUJBQU8sU0FFUjtRQUxELFlBQU0sR0FBWSxTQUFTLENBQUM7UUFJMUIsS0FBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQzs7SUFDM0IsQ0FBQzs7Z0JBZEYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxxQkFBcUI7b0JBQy9CLG9sQkFBbUQ7b0JBQ25ELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2lCQUNoRDs7Ozs7eUJBSUUsS0FBSzs7SUFISywwQkFBMEI7UUFOdEMsV0FBVyxFQUFFOztPQU1ELDBCQUEwQixDQVV0QztJQUFELGlDQUFDO0NBQUEsQ0FWK0MsNEJBQTRCLEdBVTNFO1NBVlksMEJBQTBCOzs7SUFHckMsNENBQzRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSW5wdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgQmFzZVByb21wdEZvcm1Nb2RhbENvbXBvbmVudCB9IGZyb20gXCJAcnVja2VuL2NvcmVcIjtcbmltcG9ydCB7IEN1c3RvbUVudGl0eSB9IGZyb20gXCJAY3VzdG9tLW9yZy9jdXN0b20tbGliXCI7XG5pbXBvcnQgeyBCaW5kSW9Jbm5lciB9IGZyb20gXCJuZ3gtYmluZC1pb1wiO1xuXG5AQmluZElvSW5uZXIoKVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcImN1c3RvbS1lbnRpdHktbW9kYWxcIixcbiAgdGVtcGxhdGVVcmw6IFwiLi9jdXN0b20tZW50aXR5LW1vZGFsLmNvbXBvbmVudC5odG1sXCIsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIEN1c3RvbUVudGl0eU1vZGFsQ29tcG9uZW50IGV4dGVuZHMgQmFzZVByb21wdEZvcm1Nb2RhbENvbXBvbmVudDxcbiAgQ3VzdG9tRW50aXR5XG4+IHtcbiAgQElucHV0KClcbiAgYXBpVXJsPzogc3RyaW5nID0gdW5kZWZpbmVkO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5ncm91cChDdXN0b21FbnRpdHkpO1xuICB9XG59XG4iXX0=