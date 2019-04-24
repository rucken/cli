/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { PromptFormModalModule } from "@rucken/web";
import { NgxBindIOModule } from "ngx-bind-io";
import { BsDatepickerModule } from "ngx-bootstrap/datepicker";
import { TypeaheadModule } from "ngx-bootstrap/typeahead";
import { CustomEntityModalComponent } from "./custom-entity-modal.component";
export class CustomEntityModalModule {
}
CustomEntityModalModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    PromptFormModalModule,
                    BsDatepickerModule,
                    TypeaheadModule.forRoot(),
                    NgxBindIOModule
                ],
                declarations: [CustomEntityModalComponent],
                entryComponents: [CustomEntityModalComponent],
                exports: [
                    CustomEntityModalComponent,
                    PromptFormModalModule,
                    BsDatepickerModule
                ]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLWVudGl0eS1tb2RhbC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY3VzdG9tLW9yZy9jdXN0b20tbGliLXdlYi8iLCJzb3VyY2VzIjpbImxpYi9lbnRpdGllcy9jdXN0b20tZW50aXRpZXMvY3VzdG9tLWVudGl0eS1tb2RhbC9jdXN0b20tZW50aXR5LW1vZGFsLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ3BELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDOUMsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDOUQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzFELE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBa0I3RSxNQUFNLE9BQU8sdUJBQXVCOzs7WUFoQm5DLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWixxQkFBcUI7b0JBQ3JCLGtCQUFrQjtvQkFDbEIsZUFBZSxDQUFDLE9BQU8sRUFBRTtvQkFDekIsZUFBZTtpQkFDaEI7Z0JBQ0QsWUFBWSxFQUFFLENBQUMsMEJBQTBCLENBQUM7Z0JBQzFDLGVBQWUsRUFBRSxDQUFDLDBCQUEwQixDQUFDO2dCQUM3QyxPQUFPLEVBQUU7b0JBQ1AsMEJBQTBCO29CQUMxQixxQkFBcUI7b0JBQ3JCLGtCQUFrQjtpQkFDbkI7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFByb21wdEZvcm1Nb2RhbE1vZHVsZSB9IGZyb20gXCJAcnVja2VuL3dlYlwiO1xuaW1wb3J0IHsgTmd4QmluZElPTW9kdWxlIH0gZnJvbSBcIm5neC1iaW5kLWlvXCI7XG5pbXBvcnQgeyBCc0RhdGVwaWNrZXJNb2R1bGUgfSBmcm9tIFwibmd4LWJvb3RzdHJhcC9kYXRlcGlja2VyXCI7XG5pbXBvcnQgeyBUeXBlYWhlYWRNb2R1bGUgfSBmcm9tIFwibmd4LWJvb3RzdHJhcC90eXBlYWhlYWRcIjtcbmltcG9ydCB7IEN1c3RvbUVudGl0eU1vZGFsQ29tcG9uZW50IH0gZnJvbSBcIi4vY3VzdG9tLWVudGl0eS1tb2RhbC5jb21wb25lbnRcIjtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBQcm9tcHRGb3JtTW9kYWxNb2R1bGUsXG4gICAgQnNEYXRlcGlja2VyTW9kdWxlLFxuICAgIFR5cGVhaGVhZE1vZHVsZS5mb3JSb290KCksXG4gICAgTmd4QmluZElPTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW0N1c3RvbUVudGl0eU1vZGFsQ29tcG9uZW50XSxcbiAgZW50cnlDb21wb25lbnRzOiBbQ3VzdG9tRW50aXR5TW9kYWxDb21wb25lbnRdLFxuICBleHBvcnRzOiBbXG4gICAgQ3VzdG9tRW50aXR5TW9kYWxDb21wb25lbnQsXG4gICAgUHJvbXB0Rm9ybU1vZGFsTW9kdWxlLFxuICAgIEJzRGF0ZXBpY2tlck1vZHVsZVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIEN1c3RvbUVudGl0eU1vZGFsTW9kdWxlIHt9XG4iXX0=