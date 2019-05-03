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

@NgModule({
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
})
export class CustomEntitiesListModule {}
