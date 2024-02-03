import { Component } from '@angular/core';
import { leftRinnobsData } from '../../../../shared/data/data/bonus-ui/ribbons';

@Component({
  selector: 'app-left-ribbons',
  templateUrl: './left-ribbons.component.html',
  styleUrls: ['./left-ribbons.component.scss']
})

export class LeftRibbonsComponent {

  public leftRinnobsData =leftRinnobsData;

}
