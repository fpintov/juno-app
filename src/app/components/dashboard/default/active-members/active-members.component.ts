import { Component } from '@angular/core';
import * as data from '../../../../shared/data/data/dashboard/dashboard';

@Component({
  selector: 'app-active-members',
  templateUrl: './active-members.component.html',
  styleUrls: ['./active-members.component.scss']
})

export class ActiveMembersComponent {
   
  public isShow:boolean = false;
  public activeMembers = data.activeMembers;

  clickOutside(): void {
    this.isShow = false;
  }

}
