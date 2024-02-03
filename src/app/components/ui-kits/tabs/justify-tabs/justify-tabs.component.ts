import { Component } from '@angular/core';
import * as Data from '../../../../shared/data/data/ui-kits/tab';

@Component({
  selector: 'app-justify-tabs',
  templateUrl: './justify-tabs.component.html',
  styleUrls: ['./justify-tabs.component.scss']
})

export class JustifyTabsComponent {

  public active = 2;
  public justifyTabData = Data.justifyTabData;

}
