import { Component } from "@angular/core";
import { chart9 } from "../../../../shared/data/chart/charts/chartlist";

@Component({
  selector: "app-xreme-responsive-configuration",
  templateUrl: "./xreme-responsive-configuration.component.html",
  styleUrls: ["./xreme-responsive-configuration.component.scss"],
})
export class XremeResponsiveConfigurationComponent {
  public chart9 = chart9;
}
