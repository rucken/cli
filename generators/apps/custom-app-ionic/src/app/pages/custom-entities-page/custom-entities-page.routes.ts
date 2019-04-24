import { translate, PermissionsGuard } from "@rucken/core";
import { CustomEntitiesPageComponent } from "./custom-entities-page.component";
import { MetaGuard } from "@ngx-meta/core";

export const CUSTOM_ENTITIES_PAGE_ROUTES = [
  {
    path: "",
    component: CustomEntitiesPageComponent,
    canActivate: [PermissionsGuard, MetaGuard],
    data: {
      name: "custom-entities",
      icon: "list-box",
      permissions: {
        only: "read_custom-entities-frame",
        redirectTo: "/home"
      },
      meta: {
        title: translate("Custom entities"),
        description: translate("Custom entities page")
      }
    }
  }
];
