import { Component } from '@angular/core';
 import * as data from '../../../../shared/data/chart/general/apex-chart';

@Component({
  selector: 'app-monthly-attendance-report',
  templateUrl: './monthly-attendance-report.component.html',
  styleUrls: ['./monthly-attendance-report.component.scss']
})

export class MonthlyAttendanceReportComponent {

  public isShow: boolean = false;
  public monthlyReportchart = data.monthlyReportchart;

  clickOutside(): void {
    this.isShow = false;
  }

}
