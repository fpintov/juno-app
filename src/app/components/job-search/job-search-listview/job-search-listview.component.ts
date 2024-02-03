import { Component } from '@angular/core';
import { jobCardsData } from '../../../shared/data/data/job-search/job-search';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-job-search-listview',
  templateUrl: './job-search-listview.component.html',
  styleUrls: ['./job-search-listview.component.scss']
})

export class JobSearchListviewComponent {

  public jobCardsData = jobCardsData;

  constructor(public config: NgbRatingConfig) {
    config.max = 5;
    config.readonly = true;
  }

}
