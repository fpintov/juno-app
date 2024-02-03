import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-open-modal-mofi',
  templateUrl: './open-modal-mofi.component.html',
  styleUrls: ['./open-modal-mofi.component.scss']
})

export class OpenModalMofiComponent {

  constructor(private modal: NgbModal) { }

  public validate: boolean = false;

  public submit() {
    this.validate = !this.validate;

  }
}
