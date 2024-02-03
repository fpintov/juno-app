import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-success-message',
  templateUrl: './success-message.component.html',
  styleUrls: ['./success-message.component.scss']
})

export class SuccessMessageComponent {

  successAlert() {
    Swal.fire({
      title : 'Good job!',
      text : 'You clicked the button!',
      icon : 'success',
      confirmButtonColor : 'var(--theme-deafult)',
    })
  }

}
