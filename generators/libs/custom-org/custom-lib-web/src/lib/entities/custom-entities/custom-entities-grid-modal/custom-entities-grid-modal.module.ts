import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { EntityGridModalModule } from "@rucken/web";
import { NgxBindIOModule } from "ngx-bind-io";
import { CustomEntitiesGridModule } from "../custom-entities-grid/custom-entities-grid.module";
import { CustomEntitiesGridModalComponent } from "./custom-entities-grid-modal.component";

@NgModule({
  imports: [
    CommonModule,
    EntityGridModalModule,
    CustomEntitiesGridModule,
    NgxBindIOModule
  ],
  declarations: [CustomEntitiesGridModalComponent],
  entryComponents: [CustomEntitiesGridModalComponent],
  exports: [
    CustomEntitiesGridModalComponent,
    EntityGridModalModule,
    CustomEntitiesGridModule
  ]
})
export class CustomEntitiesGridModalModule {}
