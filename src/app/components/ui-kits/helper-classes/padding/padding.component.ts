import { Component } from "@angular/core";
import * as data from "../../../../shared/data/data/ui-kits/helper-class";

@Component({
  selector: "app-padding",
  templateUrl: "./padding.component.html",
  styleUrls: ["./padding.component.scss"],
})

export class PaddingComponent {

  public padding = data.padding;
  
}
