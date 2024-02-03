import { Component } from '@angular/core';
import { filterChackBox, filterData } from '../../../shared/data/data/job-search/job-search';

@Component({
  selector: 'app-job-filter',
  templateUrl: './job-filter.component.html',
  styleUrls: ['./job-filter.component.scss']
})

export class JobFilterComponent {

  public filterData = filterData;
  public filterChackBox = filterChackBox;
  public isCollapsed = false;
  public isOpen : boolean = false;

  Outside(){
    this.isOpen = false;  
   }

}
