/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { serializeModel, translate } from "@rucken/core";
import { keyToSelectInput, SelectInput, selectInputToKey } from "@rucken/ionic";
import { Transform, Type } from "class-transformer";
var CustomEntitiesListFiltersModal = /** @class */ (function () {
    function CustomEntitiesListFiltersModal() {
        this.id = undefined;
        this.sortField = undefined;
        this.sortType = undefined;
    }
    CustomEntitiesListFiltersModal.strings = {
        sortField: translate("Sort field"),
        sortType: translate("Sort type")
    };
    CustomEntitiesListFiltersModal.sortFields = [
        { id: "id", title: translate("Id") },
        { id: "title", title: translate("Title") }
    ];
    CustomEntitiesListFiltersModal.sortTypes = [
        { id: "asc", title: translate("Asc") },
        { id: "desc", title: translate("Desc") }
    ];
    tslib_1.__decorate([
        Type(serializeModel(SelectInput)),
        Transform(keyToSelectInput({ items: CustomEntitiesListFiltersModal.sortFields }), { toClassOnly: true, groups: ["manual"] }),
        Transform(selectInputToKey({ items: CustomEntitiesListFiltersModal.sortFields }), { toPlainOnly: true, groups: ["manual"] }),
        tslib_1.__metadata("design:type", SelectInput)
    ], CustomEntitiesListFiltersModal.prototype, "sortField", void 0);
    tslib_1.__decorate([
        Type(serializeModel(SelectInput)),
        Transform(keyToSelectInput({ items: CustomEntitiesListFiltersModal.sortTypes }), { toClassOnly: true, groups: ["manual"] }),
        Transform(selectInputToKey({ items: CustomEntitiesListFiltersModal.sortTypes }), { toPlainOnly: true, groups: ["manual"] }),
        tslib_1.__metadata("design:type", SelectInput)
    ], CustomEntitiesListFiltersModal.prototype, "sortType", void 0);
    return CustomEntitiesListFiltersModal;
}());
export { CustomEntitiesListFiltersModal };
if (false) {
    /** @type {?} */
    CustomEntitiesListFiltersModal.strings;
    /** @type {?} */
    CustomEntitiesListFiltersModal.sortFields;
    /** @type {?} */
    CustomEntitiesListFiltersModal.sortTypes;
    /** @type {?} */
    CustomEntitiesListFiltersModal.prototype.id;
    /** @type {?} */
    CustomEntitiesListFiltersModal.prototype.sortField;
    /** @type {?} */
    CustomEntitiesListFiltersModal.prototype.sortType;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLWVudGl0aWVzLWxpc3QtZmlsdGVycy1tb2RhbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjdXN0b20tb3JnL2N1c3RvbS1saWItaW9uaWMvIiwic291cmNlcyI6WyJsaWIvZW50aXRpZXMvY3VzdG9tLWVudGl0aWVzL2N1c3RvbS1lbnRpdGllcy1saXN0L2N1c3RvbS1lbnRpdGllcy1saXN0LWZpbHRlcnMtbW9kYWwvY3VzdG9tLWVudGl0aWVzLWxpc3QtZmlsdGVycy1tb2RhbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFFTCxjQUFjLEVBRWQsU0FBUyxFQUNWLE1BQU0sY0FBYyxDQUFDO0FBQ3RCLE9BQU8sRUFFTCxnQkFBZ0IsRUFDaEIsV0FBVyxFQUNYLGdCQUFnQixFQUNqQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBR3BEO0lBQUE7UUFjRSxPQUFFLEdBQUcsU0FBUyxDQUFDO1FBV2YsY0FBUyxHQUFnQixTQUFTLENBQUM7UUFXbkMsYUFBUSxHQUFnQixTQUFTLENBQUM7SUFDcEMsQ0FBQztJQXBDUSxzQ0FBTyxHQUFHO1FBQ2YsU0FBUyxFQUFFLFNBQVMsQ0FBQyxZQUFZLENBQUM7UUFDbEMsUUFBUSxFQUFFLFNBQVMsQ0FBQyxXQUFXLENBQUM7S0FDakMsQ0FBQztJQUNLLHlDQUFVLEdBQWtCO1FBQ2pDLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFO1FBQ3BDLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsU0FBUyxDQUFDLE9BQU8sQ0FBQyxFQUFFO0tBQzNDLENBQUM7SUFDSyx3Q0FBUyxHQUFrQjtRQUNoQyxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLFNBQVMsQ0FBQyxLQUFLLENBQUMsRUFBRTtRQUN0QyxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLFNBQVMsQ0FBQyxNQUFNLENBQUMsRUFBRTtLQUN6QyxDQUFDO0lBYUY7UUFUQyxJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ2pDLFNBQVMsQ0FDUixnQkFBZ0IsQ0FBQyxFQUFFLEtBQUssRUFBRSw4QkFBOEIsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxFQUN0RSxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FDMUM7UUFDQSxTQUFTLENBQ1IsZ0JBQWdCLENBQUMsRUFBRSxLQUFLLEVBQUUsOEJBQThCLENBQUMsVUFBVSxFQUFFLENBQUMsRUFDdEUsRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQzFDOzBDQUNVLFdBQVc7cUVBQWE7SUFXbkM7UUFUQyxJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ2pDLFNBQVMsQ0FDUixnQkFBZ0IsQ0FBQyxFQUFFLEtBQUssRUFBRSw4QkFBOEIsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxFQUNyRSxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FDMUM7UUFDQSxTQUFTLENBQ1IsZ0JBQWdCLENBQUMsRUFBRSxLQUFLLEVBQUUsOEJBQThCLENBQUMsU0FBUyxFQUFFLENBQUMsRUFDckUsRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQzFDOzBDQUNTLFdBQVc7b0VBQWE7SUFDcEMscUNBQUM7Q0FBQSxBQXJDRCxJQXFDQztTQXJDWSw4QkFBOEI7OztJQUN6Qyx1Q0FHRTs7SUFDRiwwQ0FHRTs7SUFDRix5Q0FHRTs7SUFFRiw0Q0FBZTs7SUFFZixtREFTbUM7O0lBRW5DLGtEQVNrQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIHNlcmlhbGl6ZUlkVG9PYmplY3QsXG4gIHNlcmlhbGl6ZU1vZGVsLFxuICBzZXJpYWxpemVPYmplY3RUb0lkLFxuICB0cmFuc2xhdGVcbn0gZnJvbSBcIkBydWNrZW4vY29yZVwiO1xuaW1wb3J0IHtcbiAgQ3VzdG9tVXNlcixcbiAga2V5VG9TZWxlY3RJbnB1dCxcbiAgU2VsZWN0SW5wdXQsXG4gIHNlbGVjdElucHV0VG9LZXlcbn0gZnJvbSBcIkBydWNrZW4vaW9uaWNcIjtcbmltcG9ydCB7IFRyYW5zZm9ybSwgVHlwZSB9IGZyb20gXCJjbGFzcy10cmFuc2Zvcm1lclwiO1xuaW1wb3J0IHsgSU1vZGVsIH0gZnJvbSBcIm5neC1yZXBvc2l0b3J5XCI7XG5cbmV4cG9ydCBjbGFzcyBDdXN0b21FbnRpdGllc0xpc3RGaWx0ZXJzTW9kYWwgaW1wbGVtZW50cyBJTW9kZWwge1xuICBzdGF0aWMgc3RyaW5ncyA9IHtcbiAgICBzb3J0RmllbGQ6IHRyYW5zbGF0ZShcIlNvcnQgZmllbGRcIiksXG4gICAgc29ydFR5cGU6IHRyYW5zbGF0ZShcIlNvcnQgdHlwZVwiKVxuICB9O1xuICBzdGF0aWMgc29ydEZpZWxkczogU2VsZWN0SW5wdXRbXSA9IFtcbiAgICB7IGlkOiBcImlkXCIsIHRpdGxlOiB0cmFuc2xhdGUoXCJJZFwiKSB9LFxuICAgIHsgaWQ6IFwidGl0bGVcIiwgdGl0bGU6IHRyYW5zbGF0ZShcIlRpdGxlXCIpIH1cbiAgXTtcbiAgc3RhdGljIHNvcnRUeXBlczogU2VsZWN0SW5wdXRbXSA9IFtcbiAgICB7IGlkOiBcImFzY1wiLCB0aXRsZTogdHJhbnNsYXRlKFwiQXNjXCIpIH0sXG4gICAgeyBpZDogXCJkZXNjXCIsIHRpdGxlOiB0cmFuc2xhdGUoXCJEZXNjXCIpIH1cbiAgXTtcblxuICBpZCA9IHVuZGVmaW5lZDtcblxuICBAVHlwZShzZXJpYWxpemVNb2RlbChTZWxlY3RJbnB1dCkpXG4gIEBUcmFuc2Zvcm0oXG4gICAga2V5VG9TZWxlY3RJbnB1dCh7IGl0ZW1zOiBDdXN0b21FbnRpdGllc0xpc3RGaWx0ZXJzTW9kYWwuc29ydEZpZWxkcyB9KSxcbiAgICB7IHRvQ2xhc3NPbmx5OiB0cnVlLCBncm91cHM6IFtcIm1hbnVhbFwiXSB9XG4gIClcbiAgQFRyYW5zZm9ybShcbiAgICBzZWxlY3RJbnB1dFRvS2V5KHsgaXRlbXM6IEN1c3RvbUVudGl0aWVzTGlzdEZpbHRlcnNNb2RhbC5zb3J0RmllbGRzIH0pLFxuICAgIHsgdG9QbGFpbk9ubHk6IHRydWUsIGdyb3VwczogW1wibWFudWFsXCJdIH1cbiAgKVxuICBzb3J0RmllbGQ6IFNlbGVjdElucHV0ID0gdW5kZWZpbmVkO1xuXG4gIEBUeXBlKHNlcmlhbGl6ZU1vZGVsKFNlbGVjdElucHV0KSlcbiAgQFRyYW5zZm9ybShcbiAgICBrZXlUb1NlbGVjdElucHV0KHsgaXRlbXM6IEN1c3RvbUVudGl0aWVzTGlzdEZpbHRlcnNNb2RhbC5zb3J0VHlwZXMgfSksXG4gICAgeyB0b0NsYXNzT25seTogdHJ1ZSwgZ3JvdXBzOiBbXCJtYW51YWxcIl0gfVxuICApXG4gIEBUcmFuc2Zvcm0oXG4gICAgc2VsZWN0SW5wdXRUb0tleSh7IGl0ZW1zOiBDdXN0b21FbnRpdGllc0xpc3RGaWx0ZXJzTW9kYWwuc29ydFR5cGVzIH0pLFxuICAgIHsgdG9QbGFpbk9ubHk6IHRydWUsIGdyb3VwczogW1wibWFudWFsXCJdIH1cbiAgKVxuICBzb3J0VHlwZTogU2VsZWN0SW5wdXQgPSB1bmRlZmluZWQ7XG59XG4iXX0=