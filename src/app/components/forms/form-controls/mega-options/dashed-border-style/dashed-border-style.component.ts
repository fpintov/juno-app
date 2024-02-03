import { Component } from '@angular/core';
import * as data from '../../../../../shared/data/data/forms/forms-controls';

@Component({
  selector: 'app-dashed-border-style',
  templateUrl: './dashed-border-style.component.html',
  styleUrls: ['./dashed-border-style.component.scss']
})

export class DashedBorderStyleComponent {
   public dashedBorderStyle = data.dashedBorderStyle;
}
