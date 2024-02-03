import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-title-with-text',
  templateUrl: './title-with-text.component.html',
  styleUrls: ['./title-with-text.component.scss']
})

export class TitleWithTextComponent {

  openAlert(){
    Swal.fire({
      title : "It's Magic!",
      text : 'Thank you for visiting Mofi theme',
      confirmButtonColor : 'var(--theme-deafult)',
    })
  }

}
