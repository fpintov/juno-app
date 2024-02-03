import { Component } from '@angular/core';
import { browseArticlesData } from '../../../shared/data/data/knowladgebase/knowladgebase';

@Component({
  selector: 'app-browse-articles-category',
  templateUrl: './browse-articles-category.component.html',
  styleUrls: ['./browse-articles-category.component.scss']
})

export class BrowseArticlesCategoryComponent {

  public browseArticlesData = browseArticlesData;


}
