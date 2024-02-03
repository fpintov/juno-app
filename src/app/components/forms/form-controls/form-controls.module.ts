import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormControlsRoutingModule } from './form-controls-routing.module';
import { SharedModule } from '../../../shared/shared.module';

import { BaseInputComponent } from './base-input/base-input.component';
import { BasicFloatingInputControlComponent } from './base-input/basic-floating-input-control/basic-floating-input-control.component';
import { BasicFormComponent } from './base-input/basic-form/basic-form.component';
import { BasicHtmlInputControlComponent } from './base-input/basic-html-input-control/basic-html-input-control.component';
import { DateTimeComponent } from './base-input/basic-html-input-control/date-time/date-time.component';
import { EdgesInputStyleComponent } from './base-input/edges-input-style/edges-input-style.component';
import { FileInputComponent } from './base-input/file-input/file-input.component';
import { FlatInputStyleComponent } from './base-input/flat-input-style/flat-input-style.component';
import { FloatingFormComponent } from './base-input/floating-form/floating-form.component';
import { FormControlSizingComponent } from './base-input/form-control-sizing/form-control-sizing.component';
import { RaiseInputStyleComponent } from './base-input/raise-input-style/raise-input-style.component';
import { AnimatedButtonsComponent } from './checkbox-radio/animated-buttons/animated-buttons.component';
import { BasicRadioAndCheckboxComponent } from './checkbox-radio/basic-radio-and-checkbox/basic-radio-and-checkbox.component';
import { CheckboxRadioComponent } from './checkbox-radio/checkbox-radio.component';
import { CustomCheckboxComponent } from './checkbox-radio/custom-checkbox/custom-checkbox.component';
import { CustomRadioComponent } from './checkbox-radio/custom-radio/custom-radio.component';
import { DefaultCheckboxComponent } from './checkbox-radio/default-checkbox/default-checkbox.component';
import { DefaultRadioComponent } from './checkbox-radio/default-radio/default-radio.component';
import { DefaultSwitchesComponent } from './checkbox-radio/default-switches/default-switches.component';
import { ImagesWithCheckboxComponent } from './checkbox-radio/images-with-checkbox/images-with-checkbox.component';
import { ImagesWithRadioComponent } from './checkbox-radio/images-with-radio/images-with-radio.component';
import { InlineInputTypesComponent } from './checkbox-radio/inline-input-types/inline-input-types.component';
import { OutlinedCheckboxStylesComponent } from './checkbox-radio/outlined-checkbox-styles/outlined-checkbox-styles.component';
import { RadioToggleButtonsComponent } from './checkbox-radio/radio-toggle-buttons/radio-toggle-buttons.component';
import { BasicInputGroupsComponent } from './input-groups/basic-input-groups/basic-input-groups.component';
import { ButtonAddonsComponent } from './input-groups/button-addons/button-addons.component';
import { ButtonsWithDropdownsComponent } from './input-groups/buttons-with-dropdowns/buttons-with-dropdowns.component';
import { CheckboxesAndRadiosComponent } from './input-groups/checkboxes-and-radios/checkboxes-and-radios.component';
import { CustomFileInputComponent } from './input-groups/custom-file-input/custom-file-input.component';
import { CustomFormsComponent } from './input-groups/custom-forms/custom-forms.component';
import { InputGroupsComponent } from './input-groups/input-groups.component';
import { MultipleInputsComponent } from './input-groups/multiple-inputs/multiple-inputs.component';
import { SegmentedButtonsComponent } from './input-groups/segmented-buttons/segmented-buttons.component';
import { SizingComponent } from './input-groups/sizing/sizing.component';
import { VariationOfAddonsComponent } from './input-groups/variation-of-addons/variation-of-addons.component';
import { InputMaskComponent } from './input-mask/input-mask.component';
import { DashedBorderStyleComponent } from './mega-options/dashed-border-style/dashed-border-style.component';
import { DefaultStyleComponent } from './mega-options/default-style/default-style.component';
import { HorizontalStyleComponent } from './mega-options/horizontal-style/horizontal-style.component';
import { InlineStyleComponent } from './mega-options/inline-style/inline-style.component';
import { MegaOptionsComponent } from './mega-options/mega-options.component';
import { OfferStyleBorderComponent } from './mega-options/offer-style-border/offer-style-border.component';
import { VariationCheckboxComponent } from './mega-options/variation-checkbox/variation-checkbox.component';
import { VariationRadioComponent } from './mega-options/variation-radio/variation-radio.component';
import { VerticalStyleComponent } from './mega-options/vertical-style/vertical-style.component';
import { WithoutBordersStyleComponent } from './mega-options/without-borders-style/without-borders-style.component';
import { SelectSizingComponent } from './select-sizing/select-sizing.component';
import { BrowserDefaultsComponent } from './validation-form/browser-defaults/browser-defaults.component';
import { FormValidationsComponent } from './validation-form/form-validations/form-validations.component';
import { TooltipFormComponent } from './validation-form/tooltip-form/tooltip-form.component';
import { ValidationFormComponent } from './validation-form/validation-form.component';
import { LayoutGroupComponent } from './base-input/basic-floating-input-control/layout-group/layout-group.component';


@NgModule({
  declarations: [
    ValidationFormComponent,
    TooltipFormComponent,
    BrowserDefaultsComponent,
    BaseInputComponent,
    BasicFormComponent,
    FloatingFormComponent,
    SelectSizingComponent,
    FormControlSizingComponent,
    FileInputComponent,
    FlatInputStyleComponent,
    BasicHtmlInputControlComponent,
    BasicFloatingInputControlComponent,
    EdgesInputStyleComponent,
    RaiseInputStyleComponent,
    DateTimeComponent,
    CheckboxRadioComponent,
    DefaultCheckboxComponent,
    CustomCheckboxComponent,
    DefaultRadioComponent,
    ImagesWithCheckboxComponent,
    ImagesWithRadioComponent,
    CustomRadioComponent,
    DefaultSwitchesComponent,
    InlineInputTypesComponent,
    AnimatedButtonsComponent,
    BasicRadioAndCheckboxComponent,
    RadioToggleButtonsComponent,
    OutlinedCheckboxStylesComponent,
    InputGroupsComponent,
    ButtonAddonsComponent,
    CustomFormsComponent,
    CustomFileInputComponent,
    ButtonsWithDropdownsComponent,
    SegmentedButtonsComponent,
    CheckboxesAndRadiosComponent,
    SizingComponent,
    MultipleInputsComponent,
    BasicInputGroupsComponent,
    VariationOfAddonsComponent,
    InputMaskComponent,
    MegaOptionsComponent,
    VariationRadioComponent,
    VariationCheckboxComponent,
    DefaultStyleComponent,
    WithoutBordersStyleComponent,
    DashedBorderStyleComponent,
    OfferStyleBorderComponent,
    InlineStyleComponent,
    VerticalStyleComponent,
    HorizontalStyleComponent,
    FormValidationsComponent,
    LayoutGroupComponent,
  ],
  imports: [
    CommonModule,
    FormControlsRoutingModule,
    SharedModule,
  ]
})
export class FormControlsModule { }
