import { Component } from '@angular/core';
import * as Data from '../../../../shared/data/data/ui-kits/tab';

@Component({
  selector: 'app-material-style-tabs',
  templateUrl: './material-style-tabs.component.html',
  styleUrls: ['./material-style-tabs.component.scss']
})

export class MaterialStyleTabsComponent {

  public active = 1;
  public userDetailsData = Data.userDetailsData;
  public descriptionData = Data.descriptionData;
  public reviewData = Data.reviewData;

}
