import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Editor } from 'ngx-editor';

@Component({
  selector: 'app-add-product-details',
  templateUrl: './add-product-details.component.html',
  styleUrls: ['./add-product-details.component.scss']
})

export class AddProductDetailsComponent {

  public htmlContent = '';
  public activeStep: number = 1;
  public validate: boolean = false;

  @Output() activeSteps = new EventEmitter<number>();

  public editor: Editor;
  public html = '';

  ngOnInit(): void {
    this.editor = new Editor();
  }

  myForm = new FormGroup({
    product_Title: new FormControl("",Validators.required),

  })

  next(myForm:FormGroup) {
    this.validate = true;
    if (this.myForm.valid) {
      const number = this.activeStep + 1;
      this.activeSteps.emit(number);
    }
  }

  get productTitle() {
    return this.myForm.get('product_Title');
  }

  ngOnDestroy(): void {
    this.editor.destroy();
  }

}
