import { Component } from '@angular/core';
import { articlesAndVideosData, featuredTutorialData } from '../../../shared/data/data/knowladgebase/knowladgebase';

@Component({
  selector: 'app-knowledgebase-footer-data',
  templateUrl: './knowledgebase-footer-data.component.html',
  styleUrls: ['./knowledgebase-footer-data.component.scss']
})

export class KnowledgebaseFooterDataComponent {

  public featuredTutorialData = featuredTutorialData;
  public articlesAndVideosData = articlesAndVideosData;

}
