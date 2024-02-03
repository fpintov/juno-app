import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ContactsRoutingModule } from './contacts-routing.module';
import { SharedModule } from '../../shared/shared.module';

import { ContactsDataComponent } from './contacts-data/contacts-data.component';
import { AddressComponent } from './contacts-data/profile-data/edit-profile/address/address.component';
import { GeneralComponent } from './contacts-data/profile-data/edit-profile/general/general.component';
import { PersnolComponent } from './contacts-data/profile-data/edit-profile/persnol/persnol.component';
import { ProfileDataComponent } from './contacts-data/profile-data/profile-data.component';
import { ContactsComponent } from './contacts.component';
import { NewContactsComponent } from './modal/new-contacts/new-contacts.component';
import { PrintComponent } from './modal/print/print.component';
import { ViewCategoryComponent } from './modal/view-category/view-category.component';


@NgModule({
  declarations: [
    ContactsDataComponent,
    ContactsComponent,
    NewContactsComponent,
    ViewCategoryComponent,
    ProfileDataComponent,
    PrintComponent,
    GeneralComponent,
    PersnolComponent,
    AddressComponent
  ],
  imports: [
    CommonModule,
    ContactsRoutingModule,
    SharedModule
  ],
  providers: [
    NgbActiveModal,
  ],
})
export class ContactsModule { }
