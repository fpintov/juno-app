import { Component } from '@angular/core';
import { jobCardsData } from '../../../shared/data/data/job-search/job-search';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-job-search-cardview',
  templateUrl: './job-search-cardview.component.html',
  styleUrls: ['./job-search-cardview.component.scss']
})

export class JobSearchCardviewComponent {

  public jobCardsData = jobCardsData;

  constructor(public config: NgbRatingConfig) {
    config.max = 5;
    config.readonly = true;
  }

}
