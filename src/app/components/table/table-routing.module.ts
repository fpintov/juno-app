import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicTableComponent } from './basic-table/basic-table.component';
import { TableComponentsComponent } from './table-components/table-components.component';
import { DataTablesComponent } from './data-tables/data-tables.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'bootstrap-tables/basic',
        component: BasicTableComponent,
        data: {
          title: 'Bootstrap Basic Tables',
          breadcrumb: 'Bootstrap Basic Tables',
        }
      },
      {
        path: 'bootstrap-tables/table-components',
        component: TableComponentsComponent,
        data: {
          title: 'Table Components',
          breadcrumb: 'Table Components',
        }
      },
      {
        path: 'datatable',
        component: DataTablesComponent,
        data: {
          title: 'Basic DataTables',
          breadcrumb: 'Basic DataTables',
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TableRoutingModule { }
