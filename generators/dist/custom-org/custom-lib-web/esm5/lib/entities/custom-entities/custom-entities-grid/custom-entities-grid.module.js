/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { EntityGridModule, WebModalsModule } from "@rucken/web";
import { NgxBindIOModule } from "ngx-bind-io";
import { CustomEntityModalModule } from "../custom-entity-modal/custom-entity-modal.module";
import { CustomEntitiesGridComponent } from "./custom-entities-grid.component";
var CustomEntitiesGridModule = /** @class */ (function () {
    function CustomEntitiesGridModule() {
    }
    CustomEntitiesGridModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        WebModalsModule,
                        EntityGridModule,
                        CustomEntityModalModule,
                        NgxBindIOModule
                    ],
                    declarations: [CustomEntitiesGridComponent],
                    exports: [
                        CustomEntitiesGridComponent,
                        EntityGridModule,
                        CustomEntityModalModule
                    ]
                },] }
    ];
    return CustomEntitiesGridModule;
}());
export { CustomEntitiesGridModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLWVudGl0aWVzLWdyaWQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGN1c3RvbS1vcmcvY3VzdG9tLWxpYi13ZWIvIiwic291cmNlcyI6WyJsaWIvZW50aXRpZXMvY3VzdG9tLWVudGl0aWVzL2N1c3RvbS1lbnRpdGllcy1ncmlkL2N1c3RvbS1lbnRpdGllcy1ncmlkLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLGVBQWUsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUNoRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzlDLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBQzVGLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBRS9FO0lBQUE7SUFldUMsQ0FBQzs7Z0JBZnZDLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixlQUFlO3dCQUNmLGdCQUFnQjt3QkFDaEIsdUJBQXVCO3dCQUN2QixlQUFlO3FCQUNoQjtvQkFDRCxZQUFZLEVBQUUsQ0FBQywyQkFBMkIsQ0FBQztvQkFDM0MsT0FBTyxFQUFFO3dCQUNQLDJCQUEyQjt3QkFDM0IsZ0JBQWdCO3dCQUNoQix1QkFBdUI7cUJBQ3hCO2lCQUNGOztJQUNzQywrQkFBQztDQUFBLEFBZnhDLElBZXdDO1NBQTNCLHdCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEVudGl0eUdyaWRNb2R1bGUsIFdlYk1vZGFsc01vZHVsZSB9IGZyb20gXCJAcnVja2VuL3dlYlwiO1xuaW1wb3J0IHsgTmd4QmluZElPTW9kdWxlIH0gZnJvbSBcIm5neC1iaW5kLWlvXCI7XG5pbXBvcnQgeyBDdXN0b21FbnRpdHlNb2RhbE1vZHVsZSB9IGZyb20gXCIuLi9jdXN0b20tZW50aXR5LW1vZGFsL2N1c3RvbS1lbnRpdHktbW9kYWwubW9kdWxlXCI7XG5pbXBvcnQgeyBDdXN0b21FbnRpdGllc0dyaWRDb21wb25lbnQgfSBmcm9tIFwiLi9jdXN0b20tZW50aXRpZXMtZ3JpZC5jb21wb25lbnRcIjtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBXZWJNb2RhbHNNb2R1bGUsXG4gICAgRW50aXR5R3JpZE1vZHVsZSxcbiAgICBDdXN0b21FbnRpdHlNb2RhbE1vZHVsZSxcbiAgICBOZ3hCaW5kSU9Nb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbQ3VzdG9tRW50aXRpZXNHcmlkQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW1xuICAgIEN1c3RvbUVudGl0aWVzR3JpZENvbXBvbmVudCxcbiAgICBFbnRpdHlHcmlkTW9kdWxlLFxuICAgIEN1c3RvbUVudGl0eU1vZGFsTW9kdWxlXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgQ3VzdG9tRW50aXRpZXNHcmlkTW9kdWxlIHt9XG4iXX0=