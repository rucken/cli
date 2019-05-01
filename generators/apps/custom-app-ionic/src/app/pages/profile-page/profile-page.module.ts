import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ProfilePanelModule } from "@rucken/ionic";
import { SharedModule } from "../../shared/shared.module";
import { ProfilePageComponent } from "./profile-page.component";
import { PROFILE_PAGE_ROUTES } from "./profile-page.routes";

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ProfilePanelModule,
    RouterModule.forChild(PROFILE_PAGE_ROUTES)
  ],
  declarations: [ProfilePageComponent]
})
export class ProfilePageModule {}
