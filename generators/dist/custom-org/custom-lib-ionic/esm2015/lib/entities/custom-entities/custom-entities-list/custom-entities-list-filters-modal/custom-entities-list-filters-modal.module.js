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
export class CustomEntitiesListFiltersModalModule {
    /**
     * @param {?=} options
     * @return {?}
     */
    static forRoot(options) {
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
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLWVudGl0aWVzLWxpc3QtZmlsdGVycy1tb2RhbC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY3VzdG9tLW9yZy9jdXN0b20tbGliLWlvbmljLyIsInNvdXJjZXMiOlsibGliL2VudGl0aWVzL2N1c3RvbS1lbnRpdGllcy9jdXN0b20tZW50aXRpZXMtbGlzdC9jdXN0b20tZW50aXRpZXMtbGlzdC1maWx0ZXJzLW1vZGFsL2N1c3RvbS1lbnRpdGllcy1saXN0LWZpbHRlcnMtbW9kYWwubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUF1QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsV0FBVyxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQzdELE9BQU8sRUFDTCxlQUFlLEVBQ2YscUJBQXFCLEVBQ3JCLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzlDLE9BQU8sRUFBRSx1Q0FBdUMsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQ3pHLE9BQU8sRUFDTCxpREFBaUQsRUFFakQsK0NBQStDLEVBQ2hELE1BQU0sNkNBQTZDLENBQUM7QUFDckQsT0FBTyxFQUFFLHFDQUFxQyxFQUFFLE1BQU0sOENBQThDLENBQUM7QUFtQnJHLE1BQU0sT0FBTyxvQ0FBb0M7Ozs7O0lBQy9DLE1BQU0sQ0FBQyxPQUFPLENBQ1osT0FBK0M7UUFFL0MsT0FBTztZQUNMLFFBQVEsRUFBRSxvQ0FBb0M7WUFDOUMsU0FBUyxFQUFFO2dCQUNUO29CQUNFLE9BQU8sRUFBRSwrQ0FBK0M7b0JBQ3hELFFBQVEsRUFBRTt3QkFDUixTQUFTLEVBQ1AsT0FBTyxJQUFJLE9BQU8sQ0FBQyxTQUFTOzRCQUMxQixDQUFDLENBQUMsT0FBTyxDQUFDLFNBQVM7NEJBQ25CLENBQUMsQ0FBQyxpREFBaUQsQ0FBQyxTQUFTO3dCQUNqRSxRQUFRLEVBQ04sT0FBTyxJQUFJLE9BQU8sQ0FBQyxRQUFROzRCQUN6QixDQUFDLENBQUMsT0FBTyxDQUFDLFFBQVE7NEJBQ2xCLENBQUMsQ0FBQyxpREFBaUQsQ0FBQyxRQUFRO3FCQUNqRTtpQkFDRjtnQkFDRCxxQ0FBcUM7YUFDdEM7U0FDRixDQUFDO0lBQ0osQ0FBQzs7O1lBeENGLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWixXQUFXO29CQUNYLGVBQWU7b0JBQ2YsbUJBQW1CO29CQUNuQixlQUFlLENBQUMsUUFBUSxFQUFFO29CQUMxQixnQkFBZ0I7b0JBQ2hCLFdBQVc7b0JBQ1gscUJBQXFCO29CQUNyQixpQkFBaUI7b0JBQ2pCLGVBQWU7aUJBQ2hCO2dCQUNELFlBQVksRUFBRSxDQUFDLHVDQUF1QyxDQUFDO2dCQUN2RCxlQUFlLEVBQUUsQ0FBQyx1Q0FBdUMsQ0FBQztnQkFDMUQsT0FBTyxFQUFFLENBQUMsdUNBQXVDLEVBQUUsZUFBZSxDQUFDO2FBQ3BFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xuaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHsgSW9uaWNNb2R1bGUgfSBmcm9tIFwiQGlvbmljL2FuZ3VsYXJcIjtcbmltcG9ydCB7IFRyYW5zbGF0ZU1vZHVsZSB9IGZyb20gXCJAbmd4LXRyYW5zbGF0ZS9jb3JlXCI7XG5pbXBvcnQgeyBEaXJlY3RpdmVzTW9kdWxlLCBQaXBlc01vZHVsZSB9IGZyb20gXCJAcnVja2VuL2NvcmVcIjtcbmltcG9ydCB7XG4gIEZvcm1Hcm91cE1vZHVsZSxcbiAgUHJvbXB0Rm9ybU1vZGFsTW9kdWxlLFxuICBTZWxlY3RJbnB1dE1vZHVsZVxufSBmcm9tIFwiQHJ1Y2tlbi9pb25pY1wiO1xuaW1wb3J0IHsgTmd4QmluZElPTW9kdWxlIH0gZnJvbSBcIm5neC1iaW5kLWlvXCI7XG5pbXBvcnQgeyBDdXN0b21FbnRpdGllc0xpc3RGaWx0ZXJzTW9kYWxDb21wb25lbnQgfSBmcm9tIFwiLi9jdXN0b20tZW50aXRpZXMtbGlzdC1maWx0ZXJzLW1vZGFsLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtcbiAgREVGQVVMVF9DVVNUT01fRU5USVRJRVNfTElTVF9GSUxURVJTX01PREFMX0NPTkZJRyxcbiAgSUN1c3RvbUVudGl0aWVzTGlzdEZpbHRlcnNNb2RhbENvbmZpZyxcbiAgQ1VTVE9NX0VOVElUSUVTX0xJU1RfRklMVEVSU19NT0RBTF9DT05GSUdfVE9LRU5cbn0gZnJvbSBcIi4vY3VzdG9tLWVudGl0aWVzLWxpc3QtZmlsdGVycy1tb2RhbC5jb25maWdcIjtcbmltcG9ydCB7IEN1c3RvbUVudGl0aWVzTGlzdEZpbHRlcnNNb2RhbFNlcnZpY2UgfSBmcm9tIFwiLi9jdXN0b20tZW50aXRpZXMtbGlzdC1maWx0ZXJzLW1vZGFsLnNlcnZpY2VcIjtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBJb25pY01vZHVsZSxcbiAgICBGb3JtR3JvdXBNb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICBUcmFuc2xhdGVNb2R1bGUuZm9yQ2hpbGQoKSxcbiAgICBEaXJlY3RpdmVzTW9kdWxlLFxuICAgIFBpcGVzTW9kdWxlLFxuICAgIFByb21wdEZvcm1Nb2RhbE1vZHVsZSxcbiAgICBTZWxlY3RJbnB1dE1vZHVsZSxcbiAgICBOZ3hCaW5kSU9Nb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbQ3VzdG9tRW50aXRpZXNMaXN0RmlsdGVyc01vZGFsQ29tcG9uZW50XSxcbiAgZW50cnlDb21wb25lbnRzOiBbQ3VzdG9tRW50aXRpZXNMaXN0RmlsdGVyc01vZGFsQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW0N1c3RvbUVudGl0aWVzTGlzdEZpbHRlcnNNb2RhbENvbXBvbmVudCwgRm9ybUdyb3VwTW9kdWxlXVxufSlcbmV4cG9ydCBjbGFzcyBDdXN0b21FbnRpdGllc0xpc3RGaWx0ZXJzTW9kYWxNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdChcbiAgICBvcHRpb25zPzogSUN1c3RvbUVudGl0aWVzTGlzdEZpbHRlcnNNb2RhbENvbmZpZ1xuICApOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IEN1c3RvbUVudGl0aWVzTGlzdEZpbHRlcnNNb2RhbE1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7XG4gICAgICAgICAgcHJvdmlkZTogQ1VTVE9NX0VOVElUSUVTX0xJU1RfRklMVEVSU19NT0RBTF9DT05GSUdfVE9LRU4sXG4gICAgICAgICAgdXNlVmFsdWU6IHtcbiAgICAgICAgICAgIHNvcnRGaWVsZDpcbiAgICAgICAgICAgICAgb3B0aW9ucyAmJiBvcHRpb25zLnNvcnRGaWVsZFxuICAgICAgICAgICAgICAgID8gb3B0aW9ucy5zb3J0RmllbGRcbiAgICAgICAgICAgICAgICA6IERFRkFVTFRfQ1VTVE9NX0VOVElUSUVTX0xJU1RfRklMVEVSU19NT0RBTF9DT05GSUcuc29ydEZpZWxkLFxuICAgICAgICAgICAgc29ydFR5cGU6XG4gICAgICAgICAgICAgIG9wdGlvbnMgJiYgb3B0aW9ucy5zb3J0VHlwZVxuICAgICAgICAgICAgICAgID8gb3B0aW9ucy5zb3J0VHlwZVxuICAgICAgICAgICAgICAgIDogREVGQVVMVF9DVVNUT01fRU5USVRJRVNfTElTVF9GSUxURVJTX01PREFMX0NPTkZJRy5zb3J0VHlwZVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgQ3VzdG9tRW50aXRpZXNMaXN0RmlsdGVyc01vZGFsU2VydmljZVxuICAgICAgXVxuICAgIH07XG4gIH1cbn1cbiJdfQ==