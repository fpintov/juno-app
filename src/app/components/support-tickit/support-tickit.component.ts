import { Component } from '@angular/core';
import { ticketListStatus } from '../../shared/data/data/support-tickit/support-tickit';

@Component({
  selector: 'app-support-tickit',
  templateUrl: './support-tickit.component.html',
  styleUrls: ['./support-tickit.component.scss']
})

export class SupportTickitComponent {

  public ticketListStatus = ticketListStatus;

}
