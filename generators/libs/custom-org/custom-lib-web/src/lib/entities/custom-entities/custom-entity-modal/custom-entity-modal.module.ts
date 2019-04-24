import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { PromptFormModalModule } from "@rucken/web";
import { NgxBindIOModule } from "ngx-bind-io";
import { BsDatepickerModule } from "ngx-bootstrap/datepicker";
import { TypeaheadModule } from "ngx-bootstrap/typeahead";
import { CustomEntityModalComponent } from "./custom-entity-modal.component";

@NgModule({
  imports: [
    CommonModule,
    PromptFormModalModule,
    BsDatepickerModule,
    TypeaheadModule.forRoot(),
    NgxBindIOModule
  ],
  declarations: [CustomEntityModalComponent],
  entryComponents: [CustomEntityModalComponent],
  exports: [
    CustomEntityModalComponent,
    PromptFormModalModule,
    BsDatepickerModule
  ]
})
export class CustomEntityModalModule {}
