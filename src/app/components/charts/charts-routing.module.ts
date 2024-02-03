import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApexChartsComponent } from './apex-charts/apex-charts.component';
import { ChartJSChartComponent } from './chart-js-chart/chart-js-chart.component';
import { GoogleChartComponent } from './google-chart/google-chart.component';
import { ChartLisChartComponent } from './chart-lis-chart/chart-lis-chart.component';

const routes: Routes = [

  {
    path : '',
    children : [
      {
        path : 'apex-chart',
        component : ApexChartsComponent,
        data : {
          title : 'Apex Chart',
          breadcrumb : 'Apex Chart'
        }
      },
      {
        path : 'google-chart',
        component : GoogleChartComponent,
        data : {
          title : 'Google Chart',
          breadcrumb : 'Google Chart'
        }
      },
      {
        path : 'chartjs-chart',
        component : ChartJSChartComponent,
        data : {
          title : 'ChartJS Chart',
          breadcrumb : 'ChartJS Chart'
        }
      },
      {
        path : 'chartist-chart',
        component : ChartLisChartComponent,
        data : {
          title : 'Chartist Chart',
          breadcrumb : 'Chartist Chart'
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChartsRoutingModule { }
