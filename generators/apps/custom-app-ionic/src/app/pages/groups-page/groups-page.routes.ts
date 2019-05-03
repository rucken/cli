import { MetaGuard } from "@ngx-meta/core";
import { PermissionsGuard, translate } from "@rucken/core";
import { GroupsPageComponent } from "./groups-page.component";

export const GROUPS_PAGE_ROUTES = [
  {
    path: "",
    component: GroupsPageComponent,
    canActivate: [PermissionsGuard, MetaGuard],
    data: {
      name: "groups",
      icon: "people",
      permissions: {
        only: "read_groups-frame",
        redirectTo: "/home"
      },
      meta: {
        title: translate("Groups"),
        description: translate("Groups page")
      }
    }
  }
];
