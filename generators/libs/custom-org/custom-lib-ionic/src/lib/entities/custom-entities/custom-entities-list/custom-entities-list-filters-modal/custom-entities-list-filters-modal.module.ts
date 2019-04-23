import { CommonModule } from "@angular/common";
import { ModuleWithProviders, NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { TranslateModule } from "@ngx-translate/core";
import { DirectivesModule, PipesModule } from "@rucken/core";
import {
  FormGroupModule,
  PromptFormModalModule,
  SelectInputModule
} from "@rucken/ionic";
import { NgxBindIOModule } from "ngx-bind-io";
import { CustomEntitiesListFiltersModalComponent } from "./custom-entities-list-filters-modal.component";
import {
  DEFAULT_CUSTOM_ENTITIES_LIST_FILTERS_MODAL_CONFIG,
  ICustomEntitiesListFiltersModalConfig,
  CUSTOM_ENTITIES_LIST_FILTERS_MODAL_CONFIG_TOKEN
} from "./custom-entities-list-filters-modal.config";
import { CustomEntitiesListFiltersModalService } from "./custom-entities-list-filters-modal.service";

@NgModule({
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
})
export class CustomEntitiesListFiltersModalModule {
  static forRoot(
    options?: ICustomEntitiesListFiltersModalConfig
  ): ModuleWithProviders {
    return {
      ngModule: CustomEntitiesListFiltersModalModule,
      providers: [
        {
          provide: CUSTOM_ENTITIES_LIST_FILTERS_MODAL_CONFIG_TOKEN,
          useValue: {
            sortField:
              options && options.sortField
                ? options.sortField
                : DEFAULT_CUSTOM_ENTITIES_LIST_FILTERS_MODAL_CONFIG.sortField,
            sortType:
              options && options.sortType
                ? options.sortType
                : DEFAULT_CUSTOM_ENTITIES_LIST_FILTERS_MODAL_CONFIG.sortType
          }
        },
        CustomEntitiesListFiltersModalService
      ]
    };
  }
}
