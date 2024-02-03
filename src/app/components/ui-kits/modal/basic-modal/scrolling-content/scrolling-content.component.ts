import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-scrolling-content',
  templateUrl: './scrolling-content.component.html',
  styleUrls: ['./scrolling-content.component.scss']
})

export class ScrollingContentComponent {

  constructor(private modal: NgbModal) { }

  close(){
    this.modal.dismissAll();
  }

}
