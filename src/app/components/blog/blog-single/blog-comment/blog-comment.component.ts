import { Component, Input } from '@angular/core';
import { comments } from '../../../../shared/data/data/blog/blog';

@Component({
  selector: 'app-blog-comment',
  templateUrl: './blog-comment.component.html',
  styleUrls: ['./blog-comment.component.scss']
})

export class BlogCommentComponent {

 @Input() commentsData: comments[];

}
