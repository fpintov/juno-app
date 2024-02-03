import { Component, Input } from '@angular/core';
import * as data from '../../../../../../shared/data/data/contacts/contacts';
@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss']
})


export class GeneralComponent {

  @Input() profileData: data.profileDataList;

}
