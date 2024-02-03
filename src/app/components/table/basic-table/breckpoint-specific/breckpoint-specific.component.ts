import { Component } from '@angular/core';
import * as data from '../../../../shared/data/data/table/bootstrap-table';

@Component({
  selector: 'app-breckpoint-specific',
  templateUrl: './breckpoint-specific.component.html',
  styleUrls: ['./breckpoint-specific.component.scss']
})

export class BreckpointSpecificComponent {

  public breckpointSpecific = data.breckpointSpecific;

}
