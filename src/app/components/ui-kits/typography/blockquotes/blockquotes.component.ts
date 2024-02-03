import { Component } from '@angular/core';
import * as data from '../../../../shared/data/data/ui-kits/typography';

@Component({
  selector: 'app-blockquotes',
  templateUrl: './blockquotes.component.html',
  styleUrls: ['./blockquotes.component.scss']
})

export class BlockquotesComponent {

  public blockQuotesData = data.blockQuotesData;

}
