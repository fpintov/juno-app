import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "../../shared/shared.module";
import { UsersModule } from "../users/users.module";
import { SocialAppRoutingModule } from "./social-app-routing.module";

import { AboutCenterComponent } from "./about/about-center/about-center.component";
import { AboutComponent } from "./about/about.component";
import { PhotoComponent } from "./photo/photo.component";
import { SocialAppComponent } from "./social-app.component";
import { CommentOneComponent } from "./time-line/time-line-center/comment-one/comment-one.component";
import { CommentTwoComponent } from "./time-line/time-line-center/comment-two/comment-two.component";
import { TimeLineCenterComponent } from "./time-line/time-line-center/time-line-center.component";
import { ActivityFeedComponent } from "./time-line/time-line-left/activity-feed/activity-feed.component";
import { MutualFriendsComponent } from "./time-line/time-line-left/mutual-friends/mutual-friends.component";
import { MyProfileComponent } from "./time-line/time-line-left/my-profile/my-profile.component";
import { TimeLineLeftComponent } from "./time-line/time-line-left/time-line-left.component";
import { FollowersComponent } from "./time-line/time-line-right/followers/followers.component";
import { FollowingsComponent } from "./time-line/time-line-right/followings/followings.component";
import { FriendsComponent } from "./time-line/time-line-right/friends/friends.component";
import { LatestPhotosComponent } from "./time-line/time-line-right/latest-photos/latest-photos.component";
import { ProfileIntroComponent } from "./time-line/time-line-right/profile-intro/profile-intro.component";
import { TimeLineRightComponent } from "./time-line/time-line-right/time-line-right.component";
import { TimeLineComponent } from "./time-line/time-line.component";

@NgModule({
  declarations: [
    SocialAppComponent,
    TimeLineComponent,
    AboutComponent,
    PhotoComponent,
    TimeLineLeftComponent,
    TimeLineRightComponent,
    MyProfileComponent,
    MutualFriendsComponent,
    ActivityFeedComponent,
    TimeLineCenterComponent,
    CommentOneComponent,
    CommentTwoComponent,
    ProfileIntroComponent,
    FollowersComponent,
    FollowingsComponent,
    LatestPhotosComponent,
    FriendsComponent,
    AboutCenterComponent,
  ],

  imports: [
    CommonModule,
    SocialAppRoutingModule,
    UsersModule,
    SharedModule,
  ],
})
export class SocialAppModule {}
