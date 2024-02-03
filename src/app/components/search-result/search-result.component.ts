import { Component } from "@angular/core";
import { th } from "date-fns/locale";

@Component({
  selector: "app-search-result",
  templateUrl: "./search-result.component.html",
  styleUrls: ["./search-result.component.scss"],
})

export class SearchResultComponent {

  public openTab: string = "all";

  tabbed(val: string) {
    this.openTab = val;
  }
  
}
