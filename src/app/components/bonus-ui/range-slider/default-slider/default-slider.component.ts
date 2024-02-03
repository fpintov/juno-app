import { Component } from "@angular/core";
import { Options } from "ngx-slider-v2";

@Component({
  selector: "app-default-slider",
  templateUrl: "./default-slider.component.html",
  styleUrls: ["./default-slider.component.scss"],
})

export class DefaultSliderComponent {
  
  public value: number = 550;
  public options: Options = {
    floor: 100,
    ceil: 1000,
  };
}
