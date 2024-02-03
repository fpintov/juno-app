import { Component } from '@angular/core';
import { customContentData } from '../../../../shared/data/data/ui-kits/list';

@Component({
  selector: 'app-custom-content-lists',
  templateUrl: './custom-content-lists.component.html',
  styleUrls: ['./custom-content-lists.component.scss']
})

export class CustomContentListsComponent {

  public customContentData = customContentData;

}
