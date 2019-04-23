import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { CustomEntitiesGridModule } from "@custom-org/custom-lib-web";
import { NgxPermissionsModule } from "ngx-permissions";
import { SharedModule } from "../../../shared/shared.module";
import { CustomEntitiesFrameComponent } from "./custom-entities-frame.component";
import { CUSTOM_ENTITIES_FRAME_ROUTES } from "./custom-entities-frame.routes";

@NgModule({
  imports: [
    SharedModule,
    NgxPermissionsModule,
    RouterModule.forChild(CUSTOM_ENTITIES_FRAME_ROUTES),
    CustomEntitiesGridModule,
    FormsModule
  ],
  declarations: [CustomEntitiesFrameComponent]
})
export class CustomEntitiesFrameModule {}
