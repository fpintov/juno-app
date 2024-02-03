import { Component } from '@angular/core';
import * as data from '../../../shared/data/data/file-maganer/file-maganer';

@Component({
  selector: 'app-right-content',
  templateUrl: './right-content.component.html',
  styleUrls: ['./right-content.component.scss']
})

export class RightContentComponent {

  public quickAccess = data.quickAccess;
  public folders = data.folders;
  public files = data.files;
}
