import { Component } from '@angular/core';
import { radio } from '../../../../shared/data/data/ui-kits/list';

@Component({
  selector: 'app-radios',
  templateUrl: './radios.component.html',
  styleUrls: ['./radios.component.scss']
})

export class RadiosComponent {

  public radio = radio;

}
