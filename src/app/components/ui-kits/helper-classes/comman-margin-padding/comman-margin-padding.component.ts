import { Component, Input } from '@angular/core';
import * as data from "../../../../shared/data/data/ui-kits/helper-class";

@Component({
  selector: 'app-comman-margin-padding',
  templateUrl: './comman-margin-padding.component.html',
  styleUrls: ['./comman-margin-padding.component.scss']
})

export class CommanMarginPaddingComponent {

  @Input() data : data.commanSide [];

}
