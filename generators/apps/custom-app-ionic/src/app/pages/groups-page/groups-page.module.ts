import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { TranslateModule } from "@ngx-translate/core";
import { GroupsListModule } from "@rucken/ionic";
import { SharedModule } from "../../shared/shared.module";
import { GroupsPageComponent } from "./groups-page.component";
import { GROUPS_PAGE_ROUTES } from "./groups-page.routes";

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    GroupsListModule,
    RouterModule.forChild(GROUPS_PAGE_ROUTES)
  ],
  declarations: [GroupsPageComponent]
})
export class GroupsPageModule {}
