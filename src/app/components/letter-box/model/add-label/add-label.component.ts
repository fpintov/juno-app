import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-label',
  templateUrl: './add-label.component.html',
  styleUrls: ['./add-label.component.scss']
})

export class AddLabelComponent {
  
  constructor(private modal: NgbModal) {}

  close() {
    this.modal.dismissAll();
  }

}
