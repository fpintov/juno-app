import { Component } from '@angular/core';
import * as Data from '../../../../shared/data/data/ui-kits/typography'

@Component({
  selector: 'app-listing-typography',
  templateUrl: './listing-typography.component.html',
  styleUrls: ['./listing-typography.component.scss']
})

export class ListingTypographyComponent {
  public orderListData = Data.orderListData;
  public listingTypographyUL = Data.listingTypograhyULData;

}
