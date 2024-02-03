import { Component } from '@angular/core';
import { Options } from 'ngx-slider-v2';

@Component({
  selector: 'app-min-max-value-slider',
  templateUrl: './min-max-value-slider.component.html',
  styleUrls: ['./min-max-value-slider.component.scss']
})

export class MinMaxValueSliderComponent {

  public value: number = 100;
  public maxvalue: number = 70;
  public options: Options = {
    floor: 0,
    ceil: 200
  };

}
