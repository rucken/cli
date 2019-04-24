import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CustomEntitiesListModule } from "@custom-org/custom-lib-ionic";
import { SharedModule } from "../../shared/shared.module";
import { CustomEntitiesPageComponent } from "./custom-entities-page.component";
import { CUSTOM_ENTITIES_PAGE_ROUTES } from "./custom-entities-page.routes";

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    CustomEntitiesListModule,
    RouterModule.forChild(CUSTOM_ENTITIES_PAGE_ROUTES)
  ],
  declarations: [CustomEntitiesPageComponent]
})
export class CustomEntitiesPageModule {}
