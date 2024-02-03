import { Component } from '@angular/core';
import { knowledgebaseData } from '../../../shared/data/data/knowladgebase/knowladgebase';

@Component({
  selector: 'app-knowledgebase-top-data',
  templateUrl: './knowledgebase-top-data.component.html',
  styleUrls: ['./knowledgebase-top-data.component.scss']
})

export class KnowledgebaseTopDataComponent {

  public knowledgebaseData = knowledgebaseData;

}
