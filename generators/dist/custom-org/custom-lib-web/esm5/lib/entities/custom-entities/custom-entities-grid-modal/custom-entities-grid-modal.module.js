/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { EntityGridModalModule } from "@rucken/web";
import { NgxBindIOModule } from "ngx-bind-io";
import { CustomEntitiesGridModule } from "../custom-entities-grid/custom-entities-grid.module";
import { CustomEntitiesGridModalComponent } from "./custom-entities-grid-modal.component";
var CustomEntitiesGridModalModule = /** @class */ (function () {
    function CustomEntitiesGridModalModule() {
    }
    CustomEntitiesGridModalModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        EntityGridModalModule,
                        CustomEntitiesGridModule,
                        NgxBindIOModule
                    ],
                    declarations: [CustomEntitiesGridModalComponent],
                    entryComponents: [CustomEntitiesGridModalComponent],
                    exports: [
                        CustomEntitiesGridModalComponent,
                        EntityGridModalModule,
                        CustomEntitiesGridModule
                    ]
                },] }
    ];
    return CustomEntitiesGridModalModule;
}());
export { CustomEntitiesGridModalModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLWVudGl0aWVzLWdyaWQtbW9kYWwubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGN1c3RvbS1vcmcvY3VzdG9tLWxpYi13ZWIvIiwic291cmNlcyI6WyJsaWIvZW50aXRpZXMvY3VzdG9tLWVudGl0aWVzL2N1c3RvbS1lbnRpdGllcy1ncmlkLW1vZGFsL2N1c3RvbS1lbnRpdGllcy1ncmlkLW1vZGFsLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ3BELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDOUMsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0scURBQXFELENBQUM7QUFDL0YsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFFMUY7SUFBQTtJQWU0QyxDQUFDOztnQkFmNUMsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxZQUFZO3dCQUNaLHFCQUFxQjt3QkFDckIsd0JBQXdCO3dCQUN4QixlQUFlO3FCQUNoQjtvQkFDRCxZQUFZLEVBQUUsQ0FBQyxnQ0FBZ0MsQ0FBQztvQkFDaEQsZUFBZSxFQUFFLENBQUMsZ0NBQWdDLENBQUM7b0JBQ25ELE9BQU8sRUFBRTt3QkFDUCxnQ0FBZ0M7d0JBQ2hDLHFCQUFxQjt3QkFDckIsd0JBQXdCO3FCQUN6QjtpQkFDRjs7SUFDMkMsb0NBQUM7Q0FBQSxBQWY3QyxJQWU2QztTQUFoQyw2QkFBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBFbnRpdHlHcmlkTW9kYWxNb2R1bGUgfSBmcm9tIFwiQHJ1Y2tlbi93ZWJcIjtcbmltcG9ydCB7IE5neEJpbmRJT01vZHVsZSB9IGZyb20gXCJuZ3gtYmluZC1pb1wiO1xuaW1wb3J0IHsgQ3VzdG9tRW50aXRpZXNHcmlkTW9kdWxlIH0gZnJvbSBcIi4uL2N1c3RvbS1lbnRpdGllcy1ncmlkL2N1c3RvbS1lbnRpdGllcy1ncmlkLm1vZHVsZVwiO1xuaW1wb3J0IHsgQ3VzdG9tRW50aXRpZXNHcmlkTW9kYWxDb21wb25lbnQgfSBmcm9tIFwiLi9jdXN0b20tZW50aXRpZXMtZ3JpZC1tb2RhbC5jb21wb25lbnRcIjtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBFbnRpdHlHcmlkTW9kYWxNb2R1bGUsXG4gICAgQ3VzdG9tRW50aXRpZXNHcmlkTW9kdWxlLFxuICAgIE5neEJpbmRJT01vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtDdXN0b21FbnRpdGllc0dyaWRNb2RhbENvbXBvbmVudF0sXG4gIGVudHJ5Q29tcG9uZW50czogW0N1c3RvbUVudGl0aWVzR3JpZE1vZGFsQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW1xuICAgIEN1c3RvbUVudGl0aWVzR3JpZE1vZGFsQ29tcG9uZW50LFxuICAgIEVudGl0eUdyaWRNb2RhbE1vZHVsZSxcbiAgICBDdXN0b21FbnRpdGllc0dyaWRNb2R1bGVcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBDdXN0b21FbnRpdGllc0dyaWRNb2RhbE1vZHVsZSB7fVxuIl19