/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { IonicModule } from "@ionic/angular";
import { TranslateModule } from "@ngx-translate/core";
import { PipesModule } from "@rucken/core";
import { EntityListModule, IonicModalsModule } from "@rucken/ionic";
import { NgxBindIOModule } from "ngx-bind-io";
import { CustomEntityModalModule } from "../custom-entity-modal/custom-entity-modal.module";
import { CustomEntitiesListFiltersModalModule } from "./custom-entities-list-filters-modal/custom-entities-list-filters-modal.module";
import { CustomEntitiesListComponent } from "./custom-entities-list.component";
var CustomEntitiesListModule = /** @class */ (function () {
    function CustomEntitiesListModule() {
    }
    CustomEntitiesListModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        IonicModule,
                        IonicModalsModule,
                        TranslateModule.forChild(),
                        PipesModule,
                        EntityListModule,
                        CustomEntityModalModule,
                        CustomEntitiesListFiltersModalModule,
                        RouterModule,
                        NgxBindIOModule
                    ],
                    declarations: [CustomEntitiesListComponent],
                    exports: [CustomEntitiesListComponent]
                },] }
    ];
    return CustomEntitiesListModule;
}());
export { CustomEntitiesListModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLWVudGl0aWVzLWxpc3QubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGN1c3RvbS1vcmcvY3VzdG9tLWxpYi1pb25pYy8iLCJzb3VyY2VzIjpbImxpYi9lbnRpdGllcy9jdXN0b20tZW50aXRpZXMvY3VzdG9tLWVudGl0aWVzLWxpc3QvY3VzdG9tLWVudGl0aWVzLWxpc3QubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQzNDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNwRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzlDLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBQzVGLE9BQU8sRUFBRSxvQ0FBb0MsRUFBRSxNQUFNLGdGQUFnRixDQUFDO0FBQ3RJLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBRS9FO0lBQUE7SUFnQnVDLENBQUM7O2dCQWhCdkMsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxZQUFZO3dCQUNaLFdBQVc7d0JBQ1gsaUJBQWlCO3dCQUNqQixlQUFlLENBQUMsUUFBUSxFQUFFO3dCQUMxQixXQUFXO3dCQUNYLGdCQUFnQjt3QkFDaEIsdUJBQXVCO3dCQUN2QixvQ0FBb0M7d0JBQ3BDLFlBQVk7d0JBQ1osZUFBZTtxQkFDaEI7b0JBQ0QsWUFBWSxFQUFFLENBQUMsMkJBQTJCLENBQUM7b0JBQzNDLE9BQU8sRUFBRSxDQUFDLDJCQUEyQixDQUFDO2lCQUN2Qzs7SUFDc0MsK0JBQUM7Q0FBQSxBQWhCeEMsSUFnQndDO1NBQTNCLHdCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IElvbmljTW9kdWxlIH0gZnJvbSBcIkBpb25pYy9hbmd1bGFyXCI7XG5pbXBvcnQgeyBUcmFuc2xhdGVNb2R1bGUgfSBmcm9tIFwiQG5neC10cmFuc2xhdGUvY29yZVwiO1xuaW1wb3J0IHsgUGlwZXNNb2R1bGUgfSBmcm9tIFwiQHJ1Y2tlbi9jb3JlXCI7XG5pbXBvcnQgeyBFbnRpdHlMaXN0TW9kdWxlLCBJb25pY01vZGFsc01vZHVsZSB9IGZyb20gXCJAcnVja2VuL2lvbmljXCI7XG5pbXBvcnQgeyBOZ3hCaW5kSU9Nb2R1bGUgfSBmcm9tIFwibmd4LWJpbmQtaW9cIjtcbmltcG9ydCB7IEN1c3RvbUVudGl0eU1vZGFsTW9kdWxlIH0gZnJvbSBcIi4uL2N1c3RvbS1lbnRpdHktbW9kYWwvY3VzdG9tLWVudGl0eS1tb2RhbC5tb2R1bGVcIjtcbmltcG9ydCB7IEN1c3RvbUVudGl0aWVzTGlzdEZpbHRlcnNNb2RhbE1vZHVsZSB9IGZyb20gXCIuL2N1c3RvbS1lbnRpdGllcy1saXN0LWZpbHRlcnMtbW9kYWwvY3VzdG9tLWVudGl0aWVzLWxpc3QtZmlsdGVycy1tb2RhbC5tb2R1bGVcIjtcbmltcG9ydCB7IEN1c3RvbUVudGl0aWVzTGlzdENvbXBvbmVudCB9IGZyb20gXCIuL2N1c3RvbS1lbnRpdGllcy1saXN0LmNvbXBvbmVudFwiO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIElvbmljTW9kdWxlLFxuICAgIElvbmljTW9kYWxzTW9kdWxlLFxuICAgIFRyYW5zbGF0ZU1vZHVsZS5mb3JDaGlsZCgpLFxuICAgIFBpcGVzTW9kdWxlLFxuICAgIEVudGl0eUxpc3RNb2R1bGUsXG4gICAgQ3VzdG9tRW50aXR5TW9kYWxNb2R1bGUsXG4gICAgQ3VzdG9tRW50aXRpZXNMaXN0RmlsdGVyc01vZGFsTW9kdWxlLFxuICAgIFJvdXRlck1vZHVsZSxcbiAgICBOZ3hCaW5kSU9Nb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbQ3VzdG9tRW50aXRpZXNMaXN0Q29tcG9uZW50XSxcbiAgZXhwb3J0czogW0N1c3RvbUVudGl0aWVzTGlzdENvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgQ3VzdG9tRW50aXRpZXNMaXN0TW9kdWxlIHt9XG4iXX0=