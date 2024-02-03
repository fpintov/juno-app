import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './default/default.component';
import { FlatButtonsComponent } from './flat-buttons/flat-buttons.component';
import { ButtonsEdgeComponent } from './buttons-edge/buttons-edge.component';
import { RaisedButtonsComponent } from './raised-buttons/raised-buttons.component';
import { ButtonGroupComponent } from './button-group/button-group.component';

const routes: Routes = [

  
  {
    path : '',
    children : [
      {
        path : 'default-style',
        component : DefaultComponent,
        data : {
          title : 'Default Style',
          breadcrumb : 'Default Style',
        }
      },
      {
        path : 'flat-style',
        component : FlatButtonsComponent,
        data : {
          title : 'Flat Buttons',
          breadcrumb : 'Flat Buttons',
        }
      },
      {
        path : 'edge-style',
        component : ButtonsEdgeComponent,
        data : {
          title : 'Edge Buttons',
          breadcrumb : 'Edge Buttons',
        }
      },
      {
        path : 'raised-style',
        component : RaisedButtonsComponent,
        data : {
          title : 'Raised Buttons',
          breadcrumb : 'Raised Buttons',
        }
      },
      {
        path : 'button-group',
        component : ButtonGroupComponent,
        data : {
          title : 'Button Group',
          breadcrumb : 'Button Group',
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ButtonsRoutingModule { }
