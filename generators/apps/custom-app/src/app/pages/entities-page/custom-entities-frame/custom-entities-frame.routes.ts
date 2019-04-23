import { translate } from "@rucken/core";
import { CustomEntitiesFrameComponent } from "./custom-entities-frame.component";
import { MetaGuard } from "@ngx-meta/core";

export const CUSTOM_ENTITIES_FRAME_ROUTES = [
  {
    path: "",
    component: CustomEntitiesFrameComponent,
    canActivate: [MetaGuard],
    data: {
      name: "custom-entities",
      meta: {
        title: translate("Custom entities"),
        description: translate("Custom entities frame")
      }
    }
  }
];
