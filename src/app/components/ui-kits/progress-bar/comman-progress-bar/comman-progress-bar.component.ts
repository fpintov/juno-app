import { Component, Input } from '@angular/core';
import * as Data from '../../../../shared/data/data/ui-kits/progres-bar';

@Component({
  selector: 'app-comman-progress-bar',
  templateUrl: './comman-progress-bar.component.html',
  styleUrls: ['./comman-progress-bar.component.scss']
})

export class CommanProgressBarComponent {

  @Input() data : Data.progresBar [];

}
