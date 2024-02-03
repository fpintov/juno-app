import { Component } from '@angular/core';
import * as data  from '../../../../shared/data/data/ui-kits/list';

@Component({
  selector: 'app-contextual-classes',
  templateUrl: './contextual-classes.component.html',
  styleUrls: ['./contextual-classes.component.scss']
})

export class ContextualClassesComponent {

  public contextualClassListData = data.contextualClassListData;

}
