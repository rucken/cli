import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { EntityGridModule, WebModalsModule } from "@rucken/web";
import { NgxBindIOModule } from "ngx-bind-io";
import { CustomEntityModalModule } from "../custom-entity-modal/custom-entity-modal.module";
import { CustomEntitiesGridComponent } from "./custom-entities-grid.component";

@NgModule({
  imports: [
    CommonModule,
    WebModalsModule,
    EntityGridModule,
    CustomEntityModalModule,
    NgxBindIOModule
  ],
  declarations: [CustomEntitiesGridComponent],
  exports: [
    CustomEntitiesGridComponent,
    EntityGridModule,
    CustomEntityModalModule
  ]
})
export class CustomEntitiesGridModule {}
