import { Component } from "@angular/core";
import * as data from "../../../../shared/data/chart/general/apex-chart";

@Component({
  selector: "app-study-statistics",
  templateUrl: "./study-statistics.component.html",
  styleUrls: ["./study-statistics.component.scss"],
})

export class StudyStatisticsComponent {

  public isShow : boolean = false;
  public studyStatistics = data.studyStatistics;

  clickOutside(): void {
    this.isShow = false;
  }
  
}
