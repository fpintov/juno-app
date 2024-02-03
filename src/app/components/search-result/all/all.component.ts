import { Component } from "@angular/core";
import * as data from "../../../shared/data/data/search-result/search-result";
import { NgbRatingConfig } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-all",
  templateUrl: "./all.component.html",
  styleUrls: ["./all.component.scss"],
})

export class AllComponent {

  public allData = data.allData;


  constructor(public config: NgbRatingConfig) {
    config.max = 5;
    config.readonly = true;
  }

}
