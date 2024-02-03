import { Component } from "@angular/core";
import { Options } from "ngx-slider-v2";

@Component({
  selector: "app-prettify-number-slider",
  templateUrl: "./prettify-number-slider.component.html",
  styleUrls: ["./prettify-number-slider.component.scss"],
})

export class PrettifyNumberSliderComponent {

  public value: number = 1000;
  public options: Options = {
    floor: 1000,
    ceil: 10000,
    showTicksValues: true,
    tickStep: 3000,
    tickValueStep: 100,
  };
  
}
