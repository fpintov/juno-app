import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-new-bookmarks',
  templateUrl: './new-bookmarks.component.html',
  styleUrls: ['./new-bookmarks.component.scss']
})

export class NewBookmarksComponent {

  constructor(public activeModal: NgbActiveModal) {}  


}
