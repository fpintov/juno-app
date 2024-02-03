import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-basic-html-input-control',
  templateUrl: './basic-html-input-control.component.html',
  styleUrls: ['./basic-html-input-control.component.scss']
})

export class BasicHtmlInputControlComponent {

  constructor(private router:Router) {}

  submit() {
    this.router.navigate(['/form-controls/base-inputs'])
  }

}
