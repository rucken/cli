import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { EntitySelectModule } from "@rucken/web";
import { NgxBindIOModule } from "ngx-bind-io";
import { CustomEntitiesGridModalModule } from "../custom-entities-grid-modal/custom-entities-grid-modal.module";
import { CustomEntitySelectComponent } from "./custom-entity-select.component";

@NgModule({
  imports: [
    CommonModule,
    EntitySelectModule,
    CustomEntitiesGridModalModule,
    NgxBindIOModule
  ],
  declarations: [CustomEntitySelectComponent],
  exports: [
    CustomEntitySelectComponent,
    EntitySelectModule,
    CustomEntitiesGridModalModule
  ]
})
export class CustomEntitySelectModule {}
