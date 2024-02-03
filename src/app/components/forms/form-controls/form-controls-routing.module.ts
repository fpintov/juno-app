import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidationFormComponent } from './validation-form/validation-form.component';
import { BaseInputComponent } from './base-input/base-input.component';
import { CheckboxRadioComponent } from './checkbox-radio/checkbox-radio.component';
import { InputGroupsComponent } from './input-groups/input-groups.component';
import { InputMaskComponent } from './input-mask/input-mask.component';
import { MegaOptionsComponent } from './mega-options/mega-options.component';

const routes: Routes = [
  {
    path : '',
    children : [
    {
        path : 'validation-forms',
        component : ValidationFormComponent,
        data : {
          title : 'Validation Form',
          breadcrumb : 'Validation Form'
        }
      },
      {
        path : 'base-inputs',
        component : BaseInputComponent,
        data : {
          title : 'Base Inputs',
          breadcrumb : 'Base Inputs'
        }
      },
      {
        path : 'checkbox-radio',
        component : CheckboxRadioComponent,
        data : {
          title : 'Checkbox & Radio',
          breadcrumb : 'Checkbox & Radio'
        }
      },
      {
        path : 'input-groups',
        component : InputGroupsComponent,
        data : {
          title : 'Input groups',
          breadcrumb : 'Input groups'
        }
      },
      {
        path : 'input-mask',
        component : InputMaskComponent,
        data : {
          title : 'Input Mask',
          breadcrumb : 'Input Mask'
        }
      },
      {
        path : 'mega-options',
        component : MegaOptionsComponent,
        data : {
          title : 'Mega Options',
          breadcrumb : 'Mega Options'
        }
      },
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class FormControlsRoutingModule { }
