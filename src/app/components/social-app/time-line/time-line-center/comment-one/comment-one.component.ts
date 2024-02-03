import { Component } from '@angular/core';
import * as data from "../../../../../shared/data/data/social-app/social-app";

@Component({
  selector: 'app-comment-one',
  templateUrl: './comment-one.component.html',
  styleUrls: ['./comment-one.component.scss']
})

export class CommentOneComponent {

  public commentOneData = data.commentOneData;

}
