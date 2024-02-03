import { Component } from "@angular/core";
import * as data  from "../../../../shared/data/data/ui-kits/helper-class";

@Component({
  selector: "app-border-color",
  templateUrl: "./border-color.component.html",
  styleUrls: ["./border-color.component.scss"],
})

export class BorderColorComponent {

  public borderColorData = data.borderColor;
  
}
