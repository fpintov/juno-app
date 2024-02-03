import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { BlogRoutingModule } from './blog-routing.module';

import { AddPostComponent } from './add-post/add-post.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { BlogCommentComponent } from './blog-single/blog-comment/blog-comment.component';
import { BlogSingleComponent } from './blog-single/blog-single.component';
import { NgxEditorModule } from 'ngx-editor';

@NgModule({
  declarations: [
    BlogDetailsComponent,
    BlogSingleComponent,
    AddPostComponent,
    BlogCommentComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    SharedModule,
    NgxEditorModule
  ],
  exports : [
    BlogCommentComponent
  ]
})
export class BlogModule { }
