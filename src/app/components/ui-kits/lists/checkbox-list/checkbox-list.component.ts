import { Component } from '@angular/core';
import { chechBox } from '../../../../shared/data/data/ui-kits/list';

@Component({
  selector: 'app-checkbox-list',
  templateUrl: './checkbox-list.component.html',
  styleUrls: ['./checkbox-list.component.scss']
})

export class CheckboxListComponent {

  public chechBox = chechBox;

}
