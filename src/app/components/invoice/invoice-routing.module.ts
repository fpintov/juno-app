import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvoiceOneComponent } from './invoice-one/invoice-one.component';
import { InvoiceTwoComponent } from './invoice-two/invoice-two.component';
import { InvoiceThreeComponent } from './invoice-three/invoice-three.component';
import { InvoiceFourComponent } from './invoice-four/invoice-four.component';
import { InvoiceFiveComponent } from './invoice-five/invoice-five.component';
import { InvoiceSixComponent } from './invoice-six/invoice-six.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'invoice-1',
        component: InvoiceOneComponent,
        data: {
          title: 'Invoice-1',
          breadcrumb: 'Invoice-1',
        }
      },
      {
        path: 'invoice-2',
        component: InvoiceTwoComponent,
        data: {
          title: 'Invoice-2',
          breadcrumb: 'Invoice-2',
        }
      },
      {
        path: 'invoice-3',
        component: InvoiceThreeComponent,
        data: {
          title: 'Invoice-3',
          breadcrumb: 'Invoice-3',
        }
      },
      {
        path: 'invoice-4',
        component: InvoiceFourComponent,
        data: {
          title: 'Invoice-4',
          breadcrumb: 'Invoice-4',
        }
      },
      {
        path: 'invoice-5',
        component: InvoiceFiveComponent,
        data: {
          title: 'Invoice-5',
          breadcrumb: 'Invoice-5',
        }
      },
      {
        path: 'invoice-6',
        component: InvoiceSixComponent,
        data: {
          title: 'Invoice',
          breadcrumb: 'Invoice',
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvoiceRoutingModule { }
