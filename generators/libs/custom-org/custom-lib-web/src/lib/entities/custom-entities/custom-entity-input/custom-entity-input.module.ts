import { CommonModule } from "@angular/common";
import { ModuleWithProviders, NgModule } from "@angular/core";
import { EntityInputModule } from "@rucken/web";
import { CustomEntitiesGridModalModule } from "../custom-entities-grid-modal/custom-entities-grid-modal.module";
import { CustomEntityInputComponent } from "./custom-entity-input.component";
import { NgxBindIOModule } from "ngx-bind-io";

@NgModule({
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
})
export class CustomEntityInputModule {}
