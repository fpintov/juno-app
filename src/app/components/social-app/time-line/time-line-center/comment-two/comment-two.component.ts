import { Component } from '@angular/core';
import * as data from "../../../../../shared/data/data/social-app/social-app";

@Component({
  selector: 'app-comment-two',
  templateUrl: './comment-two.component.html',
  styleUrls: ['./comment-two.component.scss']
})

export class CommentTwoComponent {
  
  public commentTwoData = data.commentTwoData;

}
