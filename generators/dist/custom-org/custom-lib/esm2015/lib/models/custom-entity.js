/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { transformDateToString, transformStringToDate, translate } from "@rucken/core";
import { Transform } from "class-transformer";
import { IsNotEmpty } from "class-validator";
export class CustomEntity {
    constructor() {
        this.id = undefined;
        this.name = undefined;
        this.title = undefined;
        this.createdAt = undefined;
        this.updatedAt = undefined;
    }
    /**
     * @return {?}
     */
    toString() {
        return this.title;
    }
}
CustomEntity.strings = {
    id: translate("Id"),
    name: translate("Name"),
    title: translate("Title"),
    createdAt: translate("Created at"),
    updatedAt: translate("Updated at"),
    createTitle: translate("Add new custom entity "),
    viewTitle: translate("Custom entity  #{{id}}"),
    updateTitle: translate("Update custom entity  #{{id}}"),
    deleteTitle: translate("Delete custom entity  #{{id}}"),
    deleteMessage: translate("Do you really want to delete custom entity ?")
};
tslib_1.__decorate([
    IsNotEmpty(),
    tslib_1.__metadata("design:type", String)
], CustomEntity.prototype, "name", void 0);
tslib_1.__decorate([
    Transform(transformStringToDate, { toClassOnly: true }),
    Transform(transformDateToString, { toPlainOnly: true }),
    tslib_1.__metadata("design:type", Object)
], CustomEntity.prototype, "createdAt", void 0);
tslib_1.__decorate([
    Transform(transformStringToDate, { toClassOnly: true }),
    Transform(transformDateToString, { toPlainOnly: true }),
    tslib_1.__metadata("design:type", Object)
], CustomEntity.prototype, "updatedAt", void 0);
if (false) {
    /** @type {?} */
    CustomEntity.strings;
    /** @type {?} */
    CustomEntity.prototype.id;
    /** @type {?} */
    CustomEntity.prototype.name;
    /** @type {?} */
    CustomEntity.prototype.title;
    /** @type {?} */
    CustomEntity.prototype.createdAt;
    /** @type {?} */
    CustomEntity.prototype.updatedAt;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLWVudGl0eS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjdXN0b20tb3JnL2N1c3RvbS1saWIvIiwic291cmNlcyI6WyJsaWIvbW9kZWxzL2N1c3RvbS1lbnRpdHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wscUJBQXFCLEVBQ3JCLHFCQUFxQixFQUNyQixTQUFTLEVBQ1YsTUFBTSxjQUFjLENBQUM7QUFDdEIsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQzlDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUc3QyxNQUFNLE9BQU8sWUFBWTtJQUF6QjtRQWVFLE9BQUUsR0FBVyxTQUFTLENBQUM7UUFHdkIsU0FBSSxHQUFXLFNBQVMsQ0FBQztRQUV6QixVQUFLLEdBQVcsU0FBUyxDQUFDO1FBSTFCLGNBQVMsR0FBa0IsU0FBUyxDQUFDO1FBSXJDLGNBQVMsR0FBa0IsU0FBUyxDQUFDO0lBS3ZDLENBQUM7Ozs7SUFIQyxRQUFRO1FBQ04sT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3BCLENBQUM7O0FBL0JNLG9CQUFPLEdBQUc7SUFDZixFQUFFLEVBQUUsU0FBUyxDQUFDLElBQUksQ0FBQztJQUNuQixJQUFJLEVBQUUsU0FBUyxDQUFDLE1BQU0sQ0FBQztJQUN2QixLQUFLLEVBQUUsU0FBUyxDQUFDLE9BQU8sQ0FBQztJQUN6QixTQUFTLEVBQUUsU0FBUyxDQUFDLFlBQVksQ0FBQztJQUNsQyxTQUFTLEVBQUUsU0FBUyxDQUFDLFlBQVksQ0FBQztJQUVsQyxXQUFXLEVBQUUsU0FBUyxDQUFDLHdCQUF3QixDQUFDO0lBQ2hELFNBQVMsRUFBRSxTQUFTLENBQUMsd0JBQXdCLENBQUM7SUFDOUMsV0FBVyxFQUFFLFNBQVMsQ0FBQywrQkFBK0IsQ0FBQztJQUN2RCxXQUFXLEVBQUUsU0FBUyxDQUFDLCtCQUErQixDQUFDO0lBQ3ZELGFBQWEsRUFBRSxTQUFTLENBQUMsOENBQThDLENBQUM7Q0FDekUsQ0FBQztBQUtGO0lBREMsVUFBVSxFQUFFOzswQ0FDWTtBQU16QjtJQUZDLFNBQVMsQ0FBQyxxQkFBcUIsRUFBRSxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUUsQ0FBQztJQUN2RCxTQUFTLENBQUMscUJBQXFCLEVBQUUsRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFLENBQUM7OytDQUNuQjtBQUlyQztJQUZDLFNBQVMsQ0FBQyxxQkFBcUIsRUFBRSxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUUsQ0FBQztJQUN2RCxTQUFTLENBQUMscUJBQXFCLEVBQUUsRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFLENBQUM7OytDQUNuQjs7O0lBM0JyQyxxQkFZRTs7SUFFRiwwQkFBdUI7O0lBRXZCLDRCQUN5Qjs7SUFFekIsNkJBQTBCOztJQUUxQixpQ0FFcUM7O0lBRXJDLGlDQUVxQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIHRyYW5zZm9ybURhdGVUb1N0cmluZyxcbiAgdHJhbnNmb3JtU3RyaW5nVG9EYXRlLFxuICB0cmFuc2xhdGVcbn0gZnJvbSBcIkBydWNrZW4vY29yZVwiO1xuaW1wb3J0IHsgVHJhbnNmb3JtIH0gZnJvbSBcImNsYXNzLXRyYW5zZm9ybWVyXCI7XG5pbXBvcnQgeyBJc05vdEVtcHR5IH0gZnJvbSBcImNsYXNzLXZhbGlkYXRvclwiO1xuaW1wb3J0IHsgSU1vZGVsIH0gZnJvbSBcIm5neC1yZXBvc2l0b3J5XCI7XG5cbmV4cG9ydCBjbGFzcyBDdXN0b21FbnRpdHkgaW1wbGVtZW50cyBJTW9kZWwge1xuICBzdGF0aWMgc3RyaW5ncyA9IHtcbiAgICBpZDogdHJhbnNsYXRlKFwiSWRcIiksXG4gICAgbmFtZTogdHJhbnNsYXRlKFwiTmFtZVwiKSxcbiAgICB0aXRsZTogdHJhbnNsYXRlKFwiVGl0bGVcIiksXG4gICAgY3JlYXRlZEF0OiB0cmFuc2xhdGUoXCJDcmVhdGVkIGF0XCIpLFxuICAgIHVwZGF0ZWRBdDogdHJhbnNsYXRlKFwiVXBkYXRlZCBhdFwiKSxcblxuICAgIGNyZWF0ZVRpdGxlOiB0cmFuc2xhdGUoXCJBZGQgbmV3IGN1c3RvbSBlbnRpdHkgXCIpLFxuICAgIHZpZXdUaXRsZTogdHJhbnNsYXRlKFwiQ3VzdG9tIGVudGl0eSAgI3t7aWR9fVwiKSxcbiAgICB1cGRhdGVUaXRsZTogdHJhbnNsYXRlKFwiVXBkYXRlIGN1c3RvbSBlbnRpdHkgICN7e2lkfX1cIiksXG4gICAgZGVsZXRlVGl0bGU6IHRyYW5zbGF0ZShcIkRlbGV0ZSBjdXN0b20gZW50aXR5ICAje3tpZH19XCIpLFxuICAgIGRlbGV0ZU1lc3NhZ2U6IHRyYW5zbGF0ZShcIkRvIHlvdSByZWFsbHkgd2FudCB0byBkZWxldGUgY3VzdG9tIGVudGl0eSA/XCIpXG4gIH07XG5cbiAgaWQ6IG51bWJlciA9IHVuZGVmaW5lZDtcblxuICBASXNOb3RFbXB0eSgpXG4gIG5hbWU6IHN0cmluZyA9IHVuZGVmaW5lZDtcblxuICB0aXRsZTogc3RyaW5nID0gdW5kZWZpbmVkO1xuXG4gIEBUcmFuc2Zvcm0odHJhbnNmb3JtU3RyaW5nVG9EYXRlLCB7IHRvQ2xhc3NPbmx5OiB0cnVlIH0pXG4gIEBUcmFuc2Zvcm0odHJhbnNmb3JtRGF0ZVRvU3RyaW5nLCB7IHRvUGxhaW5Pbmx5OiB0cnVlIH0pXG4gIGNyZWF0ZWRBdDogRGF0ZSB8IHN0cmluZyA9IHVuZGVmaW5lZDtcblxuICBAVHJhbnNmb3JtKHRyYW5zZm9ybVN0cmluZ1RvRGF0ZSwgeyB0b0NsYXNzT25seTogdHJ1ZSB9KVxuICBAVHJhbnNmb3JtKHRyYW5zZm9ybURhdGVUb1N0cmluZywgeyB0b1BsYWluT25seTogdHJ1ZSB9KVxuICB1cGRhdGVkQXQ6IERhdGUgfCBzdHJpbmcgPSB1bmRlZmluZWQ7XG5cbiAgdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMudGl0bGU7XG4gIH1cbn1cbiJdfQ==