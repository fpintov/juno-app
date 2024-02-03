import { Component } from "@angular/core";
import { pieChart4 } from "../../../../shared/data/chart/charts/google-chart";

@Component({
  selector: "app-pie-chart4",
  templateUrl: "./pie-chart4.component.html",
  styleUrls: ["./pie-chart4.component.scss"],
})
export class PieChart4Component {
  public pieChart4 = pieChart4;
}
