import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-floating-form',
  templateUrl: './floating-form.component.html',
  styleUrls: ['./floating-form.component.scss']
})

export class FloatingFormComponent {

  constructor(private router : Router) {}

  submit() {
    this.router.navigate(['/form-controls/base-inputs'])
  }

}
