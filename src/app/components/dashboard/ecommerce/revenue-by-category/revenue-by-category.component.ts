import { Component } from '@angular/core';
  import * as data from '../../../../shared/data/chart/general/apex-chart'
@Component({
  selector: 'app-revenue-by-category',
  templateUrl: './revenue-by-category.component.html',
  styleUrls: ['./revenue-by-category.component.scss']
})

export class RevenueByCategoryComponent {
  
  public isShow : boolean = false;
  public revenueByCategory = data.revenueByCategory;

  clickOutside(): void {
    this.isShow = false;
  }

}
