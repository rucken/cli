/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { EntityInputModule } from "@rucken/web";
import { CustomEntitiesGridModalModule } from "../custom-entities-grid-modal/custom-entities-grid-modal.module";
import { CustomEntityInputComponent } from "./custom-entity-input.component";
import { NgxBindIOModule } from "ngx-bind-io";
var CustomEntityInputModule = /** @class */ (function () {
    function CustomEntityInputModule() {
    }
    CustomEntityInputModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        EntityInputModule,
                        CustomEntitiesGridModalModule,
                        NgxBindIOModule
                    ],
                    declarations: [CustomEntityInputComponent],
                    exports: [
                        CustomEntityInputComponent,
                        EntityInputModule,
                        CustomEntitiesGridModalModule
                    ]
                },] }
    ];
    return CustomEntityInputModule;
}());
export { CustomEntityInputModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLWVudGl0eS1pbnB1dC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY3VzdG9tLW9yZy9jdXN0b20tbGliLXdlYi8iLCJzb3VyY2VzIjpbImxpYi9lbnRpdGllcy9jdXN0b20tZW50aXRpZXMvY3VzdG9tLWVudGl0eS1pbnB1dC9jdXN0b20tZW50aXR5LWlucHV0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBdUIsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUNoRCxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSxpRUFBaUUsQ0FBQztBQUNoSCxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUM3RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBRTlDO0lBQUE7SUFjc0MsQ0FBQzs7Z0JBZHRDLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixpQkFBaUI7d0JBQ2pCLDZCQUE2Qjt3QkFDN0IsZUFBZTtxQkFDaEI7b0JBQ0QsWUFBWSxFQUFFLENBQUMsMEJBQTBCLENBQUM7b0JBQzFDLE9BQU8sRUFBRTt3QkFDUCwwQkFBMEI7d0JBQzFCLGlCQUFpQjt3QkFDakIsNkJBQTZCO3FCQUM5QjtpQkFDRjs7SUFDcUMsOEJBQUM7Q0FBQSxBQWR2QyxJQWN1QztTQUExQix1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XG5pbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBFbnRpdHlJbnB1dE1vZHVsZSB9IGZyb20gXCJAcnVja2VuL3dlYlwiO1xuaW1wb3J0IHsgQ3VzdG9tRW50aXRpZXNHcmlkTW9kYWxNb2R1bGUgfSBmcm9tIFwiLi4vY3VzdG9tLWVudGl0aWVzLWdyaWQtbW9kYWwvY3VzdG9tLWVudGl0aWVzLWdyaWQtbW9kYWwubW9kdWxlXCI7XG5pbXBvcnQgeyBDdXN0b21FbnRpdHlJbnB1dENvbXBvbmVudCB9IGZyb20gXCIuL2N1c3RvbS1lbnRpdHktaW5wdXQuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBOZ3hCaW5kSU9Nb2R1bGUgfSBmcm9tIFwibmd4LWJpbmQtaW9cIjtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBFbnRpdHlJbnB1dE1vZHVsZSxcbiAgICBDdXN0b21FbnRpdGllc0dyaWRNb2RhbE1vZHVsZSxcbiAgICBOZ3hCaW5kSU9Nb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbQ3VzdG9tRW50aXR5SW5wdXRDb21wb25lbnRdLFxuICBleHBvcnRzOiBbXG4gICAgQ3VzdG9tRW50aXR5SW5wdXRDb21wb25lbnQsXG4gICAgRW50aXR5SW5wdXRNb2R1bGUsXG4gICAgQ3VzdG9tRW50aXRpZXNHcmlkTW9kYWxNb2R1bGVcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBDdXN0b21FbnRpdHlJbnB1dE1vZHVsZSB7fVxuIl19