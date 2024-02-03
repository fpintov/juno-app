import { Component, Input } from '@angular/core';
import * as data  from '../../../../shared/data/data/ui-kits/helper-class';

@Component({
  selector: 'app-comman-helper-class',
  templateUrl: './comman-helper-class.component.html',
  styleUrls: ['./comman-helper-class.component.scss']
})

export class CommanHelperClassComponent {

  @Input()data : data.commonHelperClasses [];

}
