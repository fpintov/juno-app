import { Component } from '@angular/core';
import * as data from '../../../../../shared/data/data/forms/forms-controls';

@Component({
  selector: 'app-inline-style',
  templateUrl: './inline-style.component.html',
  styleUrls: ['./inline-style.component.scss']
})

export class InlineStyleComponent {

  public inliniStyle = data.inliniStyle;

}
