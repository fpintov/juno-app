import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { UserProfileComponent } from "./user-profile/user-profile.component";
import { UsersEditsComponent } from "./users-edits/users-edits.component";
import { UserCardsComponent } from "./user-cards/user-cards.component";

const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "users-profile",
        component: UserProfileComponent,
        data: {
          title: "User Profile",
          breadcrumb: "User Profile",
        },
      },
      {
        path: "edit-profile",
        component: UsersEditsComponent,
        data: {
          title: "Edit Profile",
          breadcrumb: "Edit Profile",
        },
      },
      {
        path: "users-cards",
        component: UserCardsComponent,
        data: {
          title: "User Cards",
          breadcrumb: "User Cards",
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
