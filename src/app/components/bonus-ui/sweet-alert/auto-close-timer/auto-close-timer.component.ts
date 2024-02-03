import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-auto-close-timer',
  templateUrl: './auto-close-timer.component.html',
  styleUrls: ['./auto-close-timer.component.scss']
})

export class AutoCloseTimerComponent {
  timerAlert(){
    Swal.fire({
      title : 'Auto close alert!',
      text : 'just a wait! I will close in 30 second!',
      timer : 3000,
      showConfirmButton : false,
      background : 'rgba(49, 50, 45, 0.2)'
    })
  }
}
