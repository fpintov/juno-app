import { Component } from '@angular/core';
import { LayoutService } from '../../services/layout.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-customiser',
  templateUrl: './customiser.component.html',
  styleUrls: ['./customiser.component.scss']
})

export class CustomiserComponent {

  constructor(public layoutService : LayoutService , private modalService: NgbModal){ }
  
  Customizer(val: string) {
    this.layoutService.customizer = val;
  }

  openModal(popup: any) {
    this.modalService.open(popup, { backdropClass: 'dark-modal', centered: true });
  }

  copyText(data: any) {
    let selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = JSON.stringify(data);
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
  } 

}
