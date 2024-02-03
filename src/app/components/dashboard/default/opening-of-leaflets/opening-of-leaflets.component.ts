import { Component } from '@angular/core';
import * as data from '../../../../shared/data/chart/general/apex-chart';

@Component({
  selector: 'app-opening-of-leaflets',
  templateUrl: './opening-of-leaflets.component.html',
  styleUrls: ['./opening-of-leaflets.component.scss']
})

export class OpeningOfLeafletsComponent {

  public isShow:boolean = false;
  public openingOfLeaflet = data.openingOfLeaflet;

  clickOutside(): void {
    this.isShow = false;
  }
  
}
