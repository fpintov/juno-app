import { Component } from '@angular/core';
import * as data from '../../../../shared/data/data/ui-kits/helper-class';

@Component({
  selector: 'app-margin',
  templateUrl: './margin.component.html',
  styleUrls: ['./margin.component.scss']
})

export class MarginComponent {

  public margin = data.margin;

}
