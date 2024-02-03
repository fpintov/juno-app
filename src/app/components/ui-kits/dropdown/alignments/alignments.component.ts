import { Component } from '@angular/core';
import * as Data from '../../../../shared/data/data/ui-kits/dropdown';

@Component({
  selector: 'app-alignments',
  templateUrl: './alignments.component.html',
  styleUrls: ['./alignments.component.scss']
})

export class AlignmentsComponent {

  public alignmentDropdownData = Data.alignmentDropdownData;

}
