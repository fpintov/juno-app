import { Component } from "@angular/core";
import * as data from "../.././../../../shared/data/data/forms/chechbox-radio";

@Component({
  selector: "app-default-checkbox",
  templateUrl: "./default-checkbox.component.html",
  styleUrls: ["./default-checkbox.component.scss"],
})

export class DefaultCheckboxComponent {

  public defaultCheckbox = data.defaultCheckbox;
  
}
