import { translate, PermissionsGuard } from "@rucken/core";
import { ProfilePageComponent } from "./profile-page.component";
import { MetaGuard } from "@ngx-meta/core";

export const PROFILE_PAGE_ROUTES = [
  {
    path: "",
    component: ProfilePageComponent,
    canActivate: [PermissionsGuard, MetaGuard],
    data: {
      name: "profile",
      icon: "contact",
      permissions: {
        only: "read_profile-frame",
        redirectTo: "/home"
      },
      meta: {
        title: translate("Profile"),
        description: translate("Profile page")
      }
    }
  }
];
