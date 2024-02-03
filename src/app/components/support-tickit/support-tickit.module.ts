import { CommonModule, DecimalPipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { SupportTickitRoutingModule } from './support-tickit-routing.module';

import { SupportTicketDirective } from '../../shared/directive/support-ticket.directive';
import { SupportTicketService } from '../../shared/services/support-ticket.service';
import { DataTableComponent } from './data-table/data-table.component';
import { SupportTicketListComponent } from './support-ticket-list/support-ticket-list.component';
import { SupportTickitComponent } from './support-tickit.component';

@NgModule({
  declarations: [
    SupportTickitComponent,
    SupportTicketListComponent,
    DataTableComponent,
    SupportTicketDirective,
  ],
  imports: [
    CommonModule,
    SupportTickitRoutingModule,
    SharedModule,
  ],
  providers: [SupportTicketService, DecimalPipe],

})
export class SupportTickitModule { }
