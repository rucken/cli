/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { TranslateModule } from "@ngx-translate/core";
import { DirectivesModule, PipesModule } from "@rucken/core";
import { FormGroupModule, PromptFormModalModule, SelectInputModule } from "@rucken/ionic";
import { NgxBindIOModule } from "ngx-bind-io";
import { CustomEntityModalComponent } from "./custom-entity-modal.component";
var CustomEntityModalModule = /** @class */ (function () {
    function CustomEntityModalModule() {
    }
    CustomEntityModalModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        IonicModule,
                        FormGroupModule,
                        ReactiveFormsModule,
                        TranslateModule.forChild(),
                        DirectivesModule,
                        PipesModule,
                        PromptFormModalModule,
                        SelectInputModule,
                        NgxBindIOModule
                    ],
                    declarations: [CustomEntityModalComponent],
                    entryComponents: [CustomEntityModalComponent],
                    exports: [CustomEntityModalComponent, FormGroupModule]
                },] }
    ];
    return CustomEntityModalModule;
}());
export { CustomEntityModalModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLWVudGl0eS1tb2RhbC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY3VzdG9tLW9yZy9jdXN0b20tbGliLWlvbmljLyIsInNvdXJjZXMiOlsibGliL2VudGl0aWVzL2N1c3RvbS1lbnRpdGllcy9jdXN0b20tZW50aXR5LW1vZGFsL2N1c3RvbS1lbnRpdHktbW9kYWwubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxXQUFXLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDN0QsT0FBTyxFQUNMLGVBQWUsRUFDZixxQkFBcUIsRUFDckIsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDOUMsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFFN0U7SUFBQTtJQWlCc0MsQ0FBQzs7Z0JBakJ0QyxRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osV0FBVzt3QkFDWCxlQUFlO3dCQUNmLG1CQUFtQjt3QkFDbkIsZUFBZSxDQUFDLFFBQVEsRUFBRTt3QkFDMUIsZ0JBQWdCO3dCQUNoQixXQUFXO3dCQUNYLHFCQUFxQjt3QkFDckIsaUJBQWlCO3dCQUNqQixlQUFlO3FCQUNoQjtvQkFDRCxZQUFZLEVBQUUsQ0FBQywwQkFBMEIsQ0FBQztvQkFDMUMsZUFBZSxFQUFFLENBQUMsMEJBQTBCLENBQUM7b0JBQzdDLE9BQU8sRUFBRSxDQUFDLDBCQUEwQixFQUFFLGVBQWUsQ0FBQztpQkFDdkQ7O0lBQ3FDLDhCQUFDO0NBQUEsQUFqQnZDLElBaUJ1QztTQUExQix1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XG5pbXBvcnQgeyBJb25pY01vZHVsZSB9IGZyb20gXCJAaW9uaWMvYW5ndWxhclwiO1xuaW1wb3J0IHsgVHJhbnNsYXRlTW9kdWxlIH0gZnJvbSBcIkBuZ3gtdHJhbnNsYXRlL2NvcmVcIjtcbmltcG9ydCB7IERpcmVjdGl2ZXNNb2R1bGUsIFBpcGVzTW9kdWxlIH0gZnJvbSBcIkBydWNrZW4vY29yZVwiO1xuaW1wb3J0IHtcbiAgRm9ybUdyb3VwTW9kdWxlLFxuICBQcm9tcHRGb3JtTW9kYWxNb2R1bGUsXG4gIFNlbGVjdElucHV0TW9kdWxlXG59IGZyb20gXCJAcnVja2VuL2lvbmljXCI7XG5pbXBvcnQgeyBOZ3hCaW5kSU9Nb2R1bGUgfSBmcm9tIFwibmd4LWJpbmQtaW9cIjtcbmltcG9ydCB7IEN1c3RvbUVudGl0eU1vZGFsQ29tcG9uZW50IH0gZnJvbSBcIi4vY3VzdG9tLWVudGl0eS1tb2RhbC5jb21wb25lbnRcIjtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBJb25pY01vZHVsZSxcbiAgICBGb3JtR3JvdXBNb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICBUcmFuc2xhdGVNb2R1bGUuZm9yQ2hpbGQoKSxcbiAgICBEaXJlY3RpdmVzTW9kdWxlLFxuICAgIFBpcGVzTW9kdWxlLFxuICAgIFByb21wdEZvcm1Nb2RhbE1vZHVsZSxcbiAgICBTZWxlY3RJbnB1dE1vZHVsZSxcbiAgICBOZ3hCaW5kSU9Nb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbQ3VzdG9tRW50aXR5TW9kYWxDb21wb25lbnRdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtDdXN0b21FbnRpdHlNb2RhbENvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtDdXN0b21FbnRpdHlNb2RhbENvbXBvbmVudCwgRm9ybUdyb3VwTW9kdWxlXVxufSlcbmV4cG9ydCBjbGFzcyBDdXN0b21FbnRpdHlNb2RhbE1vZHVsZSB7fVxuIl19