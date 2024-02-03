import { Component, Input } from '@angular/core';
import * as data from '../../../../../../shared/data/data/contacts/contacts';

@Component({
  selector: 'app-persnol',
  templateUrl: './persnol.component.html',
  styleUrls: ['./persnol.component.scss']
})

export class PersnolComponent {

  @Input() profileData: data.profileDataList;

  public days = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", ]
  
  public months = ["January", "February", "March", "April", "May", "June", "July", "August", "September","October", "November", "December"]

}
