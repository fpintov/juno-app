import { Component } from '@angular/core';
import * as data from '../../../../shared/data/chart/widgets/apex-chart';

@Component({
  selector: 'app-turn-over',
  templateUrl: './turn-over.component.html',
  styleUrls: ['./turn-over.component.scss']
})

export class TurnOverComponent {

  public turnOver = data.turnOver;

}
