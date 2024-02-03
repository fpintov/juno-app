import { Component } from "@angular/core";
import * as Data from "../../../shared/data/data/buttons/buttons";

@Component({
  selector: "app-buttons-edge",
  templateUrl: "./buttons-edge.component.html",
  styleUrls: ["./buttons-edge.component.scss"],
})

export class ButtonsEdgeComponent {
  public edgeButtonData = Data.edgeButtonData;
  public edgeOutlinedButtonsData = Data.edgeOutlinedButtonsData ;
  public edgeGradienButtonData = Data.edgeGradienButtonData;
}
