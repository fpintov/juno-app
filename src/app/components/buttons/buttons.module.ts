import { NgModule } from "@angular/core";
import { ButtonsRoutingModule } from "./buttons-routing.module";
import { SharedModule } from "../../shared/shared.module";
import { CommonModule } from "@angular/common";

import { ButtonGroupComponent } from "./button-group/button-group.component";
import { CheckBoxButtonGroupComponent } from "./button-group/check-box-button-group/check-box-button-group.component";
import { CommanDefaultButtonGroupComponent } from "./button-group/comman-default-button-group/comman-default-button-group.component";
import { CommanOutlineButtonGroupComponent } from "./button-group/comman-outline-button-group/comman-outline-button-group.component";
import { CommonLargeButtonGroupComponent } from "./button-group/common-large-button-group/common-large-button-group.component";
import { CommonOutlineCustomButtonGroupComponent } from "./button-group/common-outline-custom-button-group/common-outline-custom-button-group.component";
import { NestingComponent } from "./button-group/nesting/nesting.component";
import { RadioButtonGroupComponent } from "./button-group/radio-button-group/radio-button-group.component";
import { VerticalComponent } from "./button-group/vertical/vertical.component";
import { ButtonsEdgeComponent } from "./buttons-edge/buttons-edge.component";
import { DefaultComponent } from "./default/default.component";
import { FlatButtonsComponent } from "./flat-buttons/flat-buttons.component";
import { RaisedButtonsComponent } from "./raised-buttons/raised-buttons.component";

@NgModule({
  declarations: [
    DefaultComponent,
    FlatButtonsComponent,
    ButtonsEdgeComponent,
    RaisedButtonsComponent,
    ButtonGroupComponent,
    CommanDefaultButtonGroupComponent,
    CommonLargeButtonGroupComponent,
    CommonOutlineCustomButtonGroupComponent,
    CommanOutlineButtonGroupComponent,
    RadioButtonGroupComponent,
    CheckBoxButtonGroupComponent,
    NestingComponent,
    VerticalComponent,
  ],
  imports: [CommonModule ,ButtonsRoutingModule, SharedModule],
})
export class ButtonsModule {}
