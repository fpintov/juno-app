import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProfileModalComponent } from './profile-modal/profile-modal.component';
import { ResultModalComponent } from './result-modal/result-modal.component';
import { BalanceModalComponent } from './balance-modal/balance-modal.component';

@Component({
  selector: 'app-mofi-custom-modals',
  templateUrl: './mofi-custom-modals.component.html',
  styleUrls: ['./mofi-custom-modals.component.scss']
})

export class MofiCustomModalsComponent {


  constructor(private modal : NgbModal){}

  profileModal(){
    this.modal.open(ProfileModalComponent ,{ centered: true })
  }

  resultModal() {
     this.modal.open(ResultModalComponent ,{ centered: true })
  }

  balanceModal() {
    this.modal.open(BalanceModalComponent ,{ centered: true })
 }

}
