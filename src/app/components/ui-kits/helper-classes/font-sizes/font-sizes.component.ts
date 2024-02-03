import { Component } from "@angular/core";
import * as data  from "../../../../shared/data/data/ui-kits/helper-class";

@Component({
  selector: "app-font-sizes",
  templateUrl: "./font-sizes.component.html",
  styleUrls: ["./font-sizes.component.scss"],
})

export class FontSizesComponent {

  public fontSizeData = data.fontSizeData;
  
}
