import { Component, Input } from '@angular/core';
import * as data from '../../../../shared/data/data/ui-kits/tag-pills';

@Component({
  selector: 'app-comman-tag-pills',
  templateUrl: './comman-tag-pills.component.html',
  styleUrls: ['./comman-tag-pills.component.scss']
})

export class CommanTagPillsComponent {

  @Input() data : data.commonTagPills [];

}
