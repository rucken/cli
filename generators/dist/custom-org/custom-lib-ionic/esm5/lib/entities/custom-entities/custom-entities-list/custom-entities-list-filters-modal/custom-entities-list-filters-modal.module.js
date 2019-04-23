/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { TranslateModule } from "@ngx-translate/core";
import { DirectivesModule, PipesModule } from "@rucken/core";
import { FormGroupModule, PromptFormModalModule, SelectInputModule } from "@rucken/ionic";
import { NgxBindIOModule } from "ngx-bind-io";
import { CustomEntitiesListFiltersModalComponent } from "./custom-entities-list-filters-modal.component";
import { DEFAULT_CUSTOM_ENTITIES_LIST_FILTERS_MODAL_CONFIG, CUSTOM_ENTITIES_LIST_FILTERS_MODAL_CONFIG_TOKEN } from "./custom-entities-list-filters-modal.config";
import { CustomEntitiesListFiltersModalService } from "./custom-entities-list-filters-modal.service";
var CustomEntitiesListFiltersModalModule = /** @class */ (function () {
    function CustomEntitiesListFiltersModalModule() {
    }
    /**
     * @param {?=} options
     * @return {?}
     */
    CustomEntitiesListFiltersModalModule.forRoot = /**
     * @param {?=} options
     * @return {?}
     */
    function (options) {
        return {
            ngModule: CustomEntitiesListFiltersModalModule,
            providers: [
                {
                    provide: CUSTOM_ENTITIES_LIST_FILTERS_MODAL_CONFIG_TOKEN,
                    useValue: {
                        sortField: options && options.sortField
                            ? options.sortField
                            : DEFAULT_CUSTOM_ENTITIES_LIST_FILTERS_MODAL_CONFIG.sortField,
                        sortType: options && options.sortType
                            ? options.sortType
                            : DEFAULT_CUSTOM_ENTITIES_LIST_FILTERS_MODAL_CONFIG.sortType
                    }
                },
                CustomEntitiesListFiltersModalService
            ]
        };
    };
    CustomEntitiesListFiltersModalModule.decorators = [
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
                    declarations: [CustomEntitiesListFiltersModalComponent],
                    entryComponents: [CustomEntitiesListFiltersModalComponent],
                    exports: [CustomEntitiesListFiltersModalComponent, FormGroupModule]
                },] }
    ];
    return CustomEntitiesListFiltersModalModule;
}());
export { CustomEntitiesListFiltersModalModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLWVudGl0aWVzLWxpc3QtZmlsdGVycy1tb2RhbC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY3VzdG9tLW9yZy9jdXN0b20tbGliLWlvbmljLyIsInNvdXJjZXMiOlsibGliL2VudGl0aWVzL2N1c3RvbS1lbnRpdGllcy9jdXN0b20tZW50aXRpZXMtbGlzdC9jdXN0b20tZW50aXRpZXMtbGlzdC1maWx0ZXJzLW1vZGFsL2N1c3RvbS1lbnRpdGllcy1saXN0LWZpbHRlcnMtbW9kYWwubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUF1QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsV0FBVyxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQzdELE9BQU8sRUFDTCxlQUFlLEVBQ2YscUJBQXFCLEVBQ3JCLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzlDLE9BQU8sRUFBRSx1Q0FBdUMsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQ3pHLE9BQU8sRUFDTCxpREFBaUQsRUFFakQsK0NBQStDLEVBQ2hELE1BQU0sNkNBQTZDLENBQUM7QUFDckQsT0FBTyxFQUFFLHFDQUFxQyxFQUFFLE1BQU0sOENBQThDLENBQUM7QUFFckc7SUFBQTtJQXlDQSxDQUFDOzs7OztJQXZCUSw0Q0FBTzs7OztJQUFkLFVBQ0UsT0FBK0M7UUFFL0MsT0FBTztZQUNMLFFBQVEsRUFBRSxvQ0FBb0M7WUFDOUMsU0FBUyxFQUFFO2dCQUNUO29CQUNFLE9BQU8sRUFBRSwrQ0FBK0M7b0JBQ3hELFFBQVEsRUFBRTt3QkFDUixTQUFTLEVBQ1AsT0FBTyxJQUFJLE9BQU8sQ0FBQyxTQUFTOzRCQUMxQixDQUFDLENBQUMsT0FBTyxDQUFDLFNBQVM7NEJBQ25CLENBQUMsQ0FBQyxpREFBaUQsQ0FBQyxTQUFTO3dCQUNqRSxRQUFRLEVBQ04sT0FBTyxJQUFJLE9BQU8sQ0FBQyxRQUFROzRCQUN6QixDQUFDLENBQUMsT0FBTyxDQUFDLFFBQVE7NEJBQ2xCLENBQUMsQ0FBQyxpREFBaUQsQ0FBQyxRQUFRO3FCQUNqRTtpQkFDRjtnQkFDRCxxQ0FBcUM7YUFDdEM7U0FDRixDQUFDO0lBQ0osQ0FBQzs7Z0JBeENGLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixXQUFXO3dCQUNYLGVBQWU7d0JBQ2YsbUJBQW1CO3dCQUNuQixlQUFlLENBQUMsUUFBUSxFQUFFO3dCQUMxQixnQkFBZ0I7d0JBQ2hCLFdBQVc7d0JBQ1gscUJBQXFCO3dCQUNyQixpQkFBaUI7d0JBQ2pCLGVBQWU7cUJBQ2hCO29CQUNELFlBQVksRUFBRSxDQUFDLHVDQUF1QyxDQUFDO29CQUN2RCxlQUFlLEVBQUUsQ0FBQyx1Q0FBdUMsQ0FBQztvQkFDMUQsT0FBTyxFQUFFLENBQUMsdUNBQXVDLEVBQUUsZUFBZSxDQUFDO2lCQUNwRTs7SUF5QkQsMkNBQUM7Q0FBQSxBQXpDRCxJQXlDQztTQXhCWSxvQ0FBb0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XG5pbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XG5pbXBvcnQgeyBJb25pY01vZHVsZSB9IGZyb20gXCJAaW9uaWMvYW5ndWxhclwiO1xuaW1wb3J0IHsgVHJhbnNsYXRlTW9kdWxlIH0gZnJvbSBcIkBuZ3gtdHJhbnNsYXRlL2NvcmVcIjtcbmltcG9ydCB7IERpcmVjdGl2ZXNNb2R1bGUsIFBpcGVzTW9kdWxlIH0gZnJvbSBcIkBydWNrZW4vY29yZVwiO1xuaW1wb3J0IHtcbiAgRm9ybUdyb3VwTW9kdWxlLFxuICBQcm9tcHRGb3JtTW9kYWxNb2R1bGUsXG4gIFNlbGVjdElucHV0TW9kdWxlXG59IGZyb20gXCJAcnVja2VuL2lvbmljXCI7XG5pbXBvcnQgeyBOZ3hCaW5kSU9Nb2R1bGUgfSBmcm9tIFwibmd4LWJpbmQtaW9cIjtcbmltcG9ydCB7IEN1c3RvbUVudGl0aWVzTGlzdEZpbHRlcnNNb2RhbENvbXBvbmVudCB9IGZyb20gXCIuL2N1c3RvbS1lbnRpdGllcy1saXN0LWZpbHRlcnMtbW9kYWwuY29tcG9uZW50XCI7XG5pbXBvcnQge1xuICBERUZBVUxUX0NVU1RPTV9FTlRJVElFU19MSVNUX0ZJTFRFUlNfTU9EQUxfQ09ORklHLFxuICBJQ3VzdG9tRW50aXRpZXNMaXN0RmlsdGVyc01vZGFsQ29uZmlnLFxuICBDVVNUT01fRU5USVRJRVNfTElTVF9GSUxURVJTX01PREFMX0NPTkZJR19UT0tFTlxufSBmcm9tIFwiLi9jdXN0b20tZW50aXRpZXMtbGlzdC1maWx0ZXJzLW1vZGFsLmNvbmZpZ1wiO1xuaW1wb3J0IHsgQ3VzdG9tRW50aXRpZXNMaXN0RmlsdGVyc01vZGFsU2VydmljZSB9IGZyb20gXCIuL2N1c3RvbS1lbnRpdGllcy1saXN0LWZpbHRlcnMtbW9kYWwuc2VydmljZVwiO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIElvbmljTW9kdWxlLFxuICAgIEZvcm1Hcm91cE1vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgIFRyYW5zbGF0ZU1vZHVsZS5mb3JDaGlsZCgpLFxuICAgIERpcmVjdGl2ZXNNb2R1bGUsXG4gICAgUGlwZXNNb2R1bGUsXG4gICAgUHJvbXB0Rm9ybU1vZGFsTW9kdWxlLFxuICAgIFNlbGVjdElucHV0TW9kdWxlLFxuICAgIE5neEJpbmRJT01vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtDdXN0b21FbnRpdGllc0xpc3RGaWx0ZXJzTW9kYWxDb21wb25lbnRdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtDdXN0b21FbnRpdGllc0xpc3RGaWx0ZXJzTW9kYWxDb21wb25lbnRdLFxuICBleHBvcnRzOiBbQ3VzdG9tRW50aXRpZXNMaXN0RmlsdGVyc01vZGFsQ29tcG9uZW50LCBGb3JtR3JvdXBNb2R1bGVdXG59KVxuZXhwb3J0IGNsYXNzIEN1c3RvbUVudGl0aWVzTGlzdEZpbHRlcnNNb2RhbE1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KFxuICAgIG9wdGlvbnM/OiBJQ3VzdG9tRW50aXRpZXNMaXN0RmlsdGVyc01vZGFsQ29uZmlnXG4gICk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogQ3VzdG9tRW50aXRpZXNMaXN0RmlsdGVyc01vZGFsTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBwcm92aWRlOiBDVVNUT01fRU5USVRJRVNfTElTVF9GSUxURVJTX01PREFMX0NPTkZJR19UT0tFTixcbiAgICAgICAgICB1c2VWYWx1ZToge1xuICAgICAgICAgICAgc29ydEZpZWxkOlxuICAgICAgICAgICAgICBvcHRpb25zICYmIG9wdGlvbnMuc29ydEZpZWxkXG4gICAgICAgICAgICAgICAgPyBvcHRpb25zLnNvcnRGaWVsZFxuICAgICAgICAgICAgICAgIDogREVGQVVMVF9DVVNUT01fRU5USVRJRVNfTElTVF9GSUxURVJTX01PREFMX0NPTkZJRy5zb3J0RmllbGQsXG4gICAgICAgICAgICBzb3J0VHlwZTpcbiAgICAgICAgICAgICAgb3B0aW9ucyAmJiBvcHRpb25zLnNvcnRUeXBlXG4gICAgICAgICAgICAgICAgPyBvcHRpb25zLnNvcnRUeXBlXG4gICAgICAgICAgICAgICAgOiBERUZBVUxUX0NVU1RPTV9FTlRJVElFU19MSVNUX0ZJTFRFUlNfTU9EQUxfQ09ORklHLnNvcnRUeXBlXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBDdXN0b21FbnRpdGllc0xpc3RGaWx0ZXJzTW9kYWxTZXJ2aWNlXG4gICAgICBdXG4gICAgfTtcbiAgfVxufVxuIl19