import { Component, Input } from '@angular/core';
import { tickitListData } from '../../../shared/data/data/support-tickit/support-tickit';

@Component({
  selector: 'app-support-ticket-list',
  templateUrl: './support-ticket-list.component.html',
  styleUrls: ['./support-ticket-list.component.scss']
})

export class SupportTicketListComponent {

  @Input() data : tickitListData;

}
