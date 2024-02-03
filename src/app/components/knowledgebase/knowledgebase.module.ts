import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KnowledgebaseRoutingModule } from './knowledgebase-routing.module';

import { FaqModule } from '../faq/faq.module';
import { KnowledgebaseComponent } from './knowledgebase.component';
import { KnowledgebaseTopDataComponent } from './knowledgebase-top-data/knowledgebase-top-data.component';
import { BrowseArticlesCategoryComponent } from './browse-articles-category/browse-articles-category.component';
import { SharedModule } from '../../shared/shared.module';
import { KnowledgebaseFooterDataComponent } from './knowledgebase-footer-data/knowledgebase-footer-data.component';

@NgModule({
  declarations: [
    KnowledgebaseComponent,
    KnowledgebaseTopDataComponent,
    BrowseArticlesCategoryComponent,
    KnowledgebaseFooterDataComponent
  ],
  imports: [
    CommonModule,
    KnowledgebaseRoutingModule,
    FaqModule,
    SharedModule
  ]
})
export class KnowledgebaseModule { }
