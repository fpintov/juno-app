import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SimpleComponent } from './simple/simple.component';
import { ScrollingContentComponent } from './scrolling-content/scrolling-content.component';
import { TooltipsPopoversComponent } from './tooltips-popovers/tooltips-popovers.component';
import { OpenModalMofiComponent } from './open-modal-mofi/open-modal-mofi.component';

@Component({
  selector: 'app-basic-modal',
  templateUrl: './basic-modal.component.html',
  styleUrls: ['./basic-modal.component.scss']
})

export class BasicModalComponent {

  constructor(private modal : NgbModal){}

  simpleModal(){
    this.modal.open(SimpleComponent)
  }

  scrollingModal() {
    this.modal.open(ScrollingContentComponent)
  }

  tooltipPopoverModal(){
    this.modal.open(TooltipsPopoversComponent, { centered : true })
  }

  mofiModal(){
    this.modal.open(OpenModalMofiComponent)
  }

}
