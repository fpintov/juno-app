import { Component } from "@angular/core";
import * as data from "../../../shared/data/data/ui-kits/helper-class";

@Component({
  selector: "app-helper-classes",
  templateUrl: "./helper-classes.component.html",
  styleUrls: ["./helper-classes.component.scss"],
})

export class HelperClassesComponent {

  public StyleBorderData = data.StyleBorderData;
  public BorderAndDisplayData = data.BorderAndDisplayData;
  public backgroundColorsData = data.backgroundColorsData;
  public SidePadding = data.SidePadding;
  public SideMargin = data.SideMargin;
  
}
