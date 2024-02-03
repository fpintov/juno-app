import { Component } from '@angular/core';
import * as Data from '../../../../shared/data/data/bonus-ui/basic-card';

@Component({
  selector: 'app-info-color-cards',
  templateUrl: './info-color-cards.component.html',
  styleUrls: ['./info-color-cards.component.scss']
})

export class InfoColorCardsComponent {

  public commonInfoColorCardData = Data.commonInfoColorCardData;


}
