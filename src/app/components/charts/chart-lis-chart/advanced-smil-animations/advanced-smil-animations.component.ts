import { Component } from "@angular/core";
import { chart1 } from "../../../../shared/data/chart/charts/chartlist";

@Component({
  selector: "app-advanced-smil-animations",
  templateUrl: "./advanced-smil-animations.component.html",
  styleUrls: ["./advanced-smil-animations.component.scss"],
})
export class AdvancedSMILAnimationsComponent {
  public chart1 = chart1;
}
