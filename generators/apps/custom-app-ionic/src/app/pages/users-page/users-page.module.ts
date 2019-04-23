import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { UsersListModule } from "@rucken/ionic";
import { SharedModule } from "../../shared/shared.module";
import { UsersPageComponent } from "./users-page.component";
import { USERS_PAGE_ROUTES } from "./users-page.routes";

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    UsersListModule,
    RouterModule.forChild(USERS_PAGE_ROUTES)
  ],
  declarations: [UsersPageComponent]
})
export class UsersPageModule {}
