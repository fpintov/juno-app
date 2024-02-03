import { Component } from "@angular/core";
import * as data from "../../../../shared/data/data/social-app/social-app";

@Component({
  selector: "app-about-center",
  templateUrl: "./about-center.component.html",
  styleUrls: ["./about-center.component.scss"],
})

export class AboutCenterComponent {

  public peopleKnowYouData = data.peopleKnowYouData;
  public hobbiedAndInterestData = data.hobbiedAndInterestData;
  public eductionData = data.eductionData;
  public activityLog = data.activityLog;
  
}
