import { translate, PermissionsGuard } from "@rucken/core";
import { UsersPageComponent } from "./users-page.component";
import { MetaGuard } from "@ngx-meta/core";

export const USERS_PAGE_ROUTES = [
  {
    path: "",
    component: UsersPageComponent,
    canActivate: [PermissionsGuard, MetaGuard],
    data: {
      name: "users",
      icon: "person",
      permissions: {
        only: "read_users-frame",
        redirectTo: "/home"
      },
      meta: {
        title: translate("Users"),
        description: translate("Users page")
      }
    }
  }
];
