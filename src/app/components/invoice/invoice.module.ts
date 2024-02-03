import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { InvoiceRoutingModule } from './invoice-routing.module';

import { InvoiceDetalsComponent } from './invoice-five/invoice-detals/invoice-detals.component';
import { InvoiceFiveTopComponent } from './invoice-five/invoice-five-top/invoice-five-top.component';
import { InvoiceFiveComponent } from './invoice-five/invoice-five.component';
import { InvoiceFourTopComponent } from './invoice-four/invoice-four-top/invoice-four-top.component';
import { InvoiceFourComponent } from './invoice-four/invoice-four.component';
import { InvoiceOneComponent } from './invoice-one/invoice-one.component';
import { InvoiceTopComponent } from './invoice-one/invoice-top/invoice-top.component';
import { InvoiceSixComponent } from './invoice-six/invoice-six.component';
import { InvoiceTableComponent } from './invoice-six/invoice-table/invoice-table.component';
import { InvoiceThreeTopComponent } from './invoice-three/invoice-three-top/invoice-three-top.component';
import { InvoiceThreeComponent } from './invoice-three/invoice-three.component';
import { TopHeaderComponent } from './invoice-three/top-header/top-header.component';
import { InvoiceTwoBottomComponent } from './invoice-two/invoice-two-bottom/invoice-two-bottom.component';
import { InvoiceTwoTopComponent } from './invoice-two/invoice-two-top/invoice-two-top.component';
import { InvoiceTwoComponent } from './invoice-two/invoice-two.component';


@NgModule({
  declarations: [
    InvoiceOneComponent,
    InvoiceTopComponent,
    InvoiceTwoComponent,
    InvoiceTwoTopComponent,
    InvoiceTwoBottomComponent,
    InvoiceThreeComponent,
    TopHeaderComponent,
    InvoiceThreeTopComponent,
    InvoiceFourComponent,
    InvoiceFiveComponent,
    InvoiceFiveTopComponent,
    InvoiceDetalsComponent,
    InvoiceSixComponent,
    InvoiceFourTopComponent,
    InvoiceTableComponent
  ],
  imports: [
    CommonModule,
    InvoiceRoutingModule,
    SharedModule
  ]
})
export class InvoiceModule { }
