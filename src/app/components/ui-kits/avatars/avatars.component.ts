import { Component } from '@angular/core';
import * as data from '../../../shared/data/data/ui-kits/avatars';

@Component({
  selector: 'app-avatars',
  templateUrl: './avatars.component.html',
  styleUrls: ['./avatars.component.scss']
})

export class AvatarsComponent {

  public sizingData = data.sizesAvtarData;
  public statusIndicatorData = data.statusIndicatorData;
  public shapeData = data.shapeData;
  public ratioData = data.ratioData;
 
}
