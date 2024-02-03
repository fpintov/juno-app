import { Component } from '@angular/core';
import * as data from '../../../../../shared/data/data/forms/form-widgets';

@Component({
  selector: 'app-rounded-touchspin',
  templateUrl: './rounded-touchspin.component.html',
  styleUrls: ['./rounded-touchspin.component.scss']
})

export class RoundedTouchspinComponent {

  public roundedTouchspin = data.roundedTouchspin;


  decrement(i : number) {
    if(this.roundedTouchspin[i].value > 0){
      this.roundedTouchspin[i].value -= 1;
    }
  }

  increment(i : number) {
    this.roundedTouchspin[i].value += 1;
  }
}
