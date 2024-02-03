import { Component } from "@angular/core";
import { barChart } from "../../../../shared/data/chart/charts/google-chart";

@Component({
  selector: "app-bar-chart2",
  templateUrl: "./bar-chart2.component.html",
  styleUrls: ["./bar-chart2.component.scss"],
})

export class BarChart2Component {

  public barChart = barChart;
  
}
