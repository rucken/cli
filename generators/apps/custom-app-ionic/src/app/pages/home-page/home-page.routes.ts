import { MetaGuard } from "@ngx-meta/core";
import { translate } from "@rucken/core";
import { HomePageComponent } from "./home-page.component";

export const HOME_PAGE_ROUTES = [
  {
    path: "",
    component: HomePageComponent,
    canActivate: [MetaGuard],
    data: {
      name: "home",
      icon: "home",
      meta: {
        title: translate("Home"),
        description: translate("Home page")
      }
    }
  }
];
