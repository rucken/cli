/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { EntitySelectModule } from "@rucken/web";
import { NgxBindIOModule } from "ngx-bind-io";
import { CustomEntitiesGridModalModule } from "../custom-entities-grid-modal/custom-entities-grid-modal.module";
import { CustomEntitySelectComponent } from "./custom-entity-select.component";
var CustomEntitySelectModule = /** @class */ (function () {
    function CustomEntitySelectModule() {
    }
    CustomEntitySelectModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        EntitySelectModule,
                        CustomEntitiesGridModalModule,
                        NgxBindIOModule
                    ],
                    declarations: [CustomEntitySelectComponent],
                    exports: [
                        CustomEntitySelectComponent,
                        EntitySelectModule,
                        CustomEntitiesGridModalModule
                    ]
                },] }
    ];
    return CustomEntitySelectModule;
}());
export { CustomEntitySelectModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLWVudGl0eS1zZWxlY3QubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGN1c3RvbS1vcmcvY3VzdG9tLWxpYi13ZWIvIiwic291cmNlcyI6WyJsaWIvZW50aXRpZXMvY3VzdG9tLWVudGl0aWVzL2N1c3RvbS1lbnRpdHktc2VsZWN0L2N1c3RvbS1lbnRpdHktc2VsZWN0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDOUMsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0saUVBQWlFLENBQUM7QUFDaEgsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFFL0U7SUFBQTtJQWN1QyxDQUFDOztnQkFkdkMsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxZQUFZO3dCQUNaLGtCQUFrQjt3QkFDbEIsNkJBQTZCO3dCQUM3QixlQUFlO3FCQUNoQjtvQkFDRCxZQUFZLEVBQUUsQ0FBQywyQkFBMkIsQ0FBQztvQkFDM0MsT0FBTyxFQUFFO3dCQUNQLDJCQUEyQjt3QkFDM0Isa0JBQWtCO3dCQUNsQiw2QkFBNkI7cUJBQzlCO2lCQUNGOztJQUNzQywrQkFBQztDQUFBLEFBZHhDLElBY3dDO1NBQTNCLHdCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEVudGl0eVNlbGVjdE1vZHVsZSB9IGZyb20gXCJAcnVja2VuL3dlYlwiO1xuaW1wb3J0IHsgTmd4QmluZElPTW9kdWxlIH0gZnJvbSBcIm5neC1iaW5kLWlvXCI7XG5pbXBvcnQgeyBDdXN0b21FbnRpdGllc0dyaWRNb2RhbE1vZHVsZSB9IGZyb20gXCIuLi9jdXN0b20tZW50aXRpZXMtZ3JpZC1tb2RhbC9jdXN0b20tZW50aXRpZXMtZ3JpZC1tb2RhbC5tb2R1bGVcIjtcbmltcG9ydCB7IEN1c3RvbUVudGl0eVNlbGVjdENvbXBvbmVudCB9IGZyb20gXCIuL2N1c3RvbS1lbnRpdHktc2VsZWN0LmNvbXBvbmVudFwiO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEVudGl0eVNlbGVjdE1vZHVsZSxcbiAgICBDdXN0b21FbnRpdGllc0dyaWRNb2RhbE1vZHVsZSxcbiAgICBOZ3hCaW5kSU9Nb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbQ3VzdG9tRW50aXR5U2VsZWN0Q29tcG9uZW50XSxcbiAgZXhwb3J0czogW1xuICAgIEN1c3RvbUVudGl0eVNlbGVjdENvbXBvbmVudCxcbiAgICBFbnRpdHlTZWxlY3RNb2R1bGUsXG4gICAgQ3VzdG9tRW50aXRpZXNHcmlkTW9kYWxNb2R1bGVcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBDdXN0b21FbnRpdHlTZWxlY3RNb2R1bGUge31cbiJdfQ==