import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../../../shared/shared.module';
import { FormWidgetsRoutingModule } from './form-widgets-routing.module';

import { ClipBoardComponent } from './clip-board/clip-board.component';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { ColorVariantComponent } from './select-two/color-variant/color-variant.component';
import { FullColorVariantComponent } from './select-two/full-color-variant/full-color-variant.component';
import { SelectTwoComponent } from './select-two/select-two.component';
import { CommonSwitchComponent } from './switch/common-switch/common-switch.component';
import { CustomSwitchComponent } from './switch/custom-switch/custom-switch.component';
import { DisabledOutlineSwitchComponent } from './switch/disabled-outline-switch/disabled-outline-switch.component';
import { SwitchSizingComponent } from './switch/switch-sizing/switch-sizing.component';
import { SwitchWithIconsComponent } from './switch/switch-with-icons/switch-with-icons.component';
import { SwitchComponent } from './switch/switch.component';
import { VariationOfSwitchesComponent } from './switch/variation-of-switches/variation-of-switches.component';
import { ButtonsWithPrefixComponent } from './touchspin/buttons-with-prefix/buttons-with-prefix.component';
import { CommonTouchspinComponent } from './touchspin/common-touchspin/common-touchspin.component';
import { IconsWithPrefixComponent } from './touchspin/icons-with-prefix/icons-with-prefix.component';
import { RoundedTouchspinComponent } from './touchspin/rounded-touchspin/rounded-touchspin.component';
import { TouchspinComponent } from './touchspin/touchspin.component';
import { FormattedResultComponent } from './touchspin/typeahead/formatted-result/formatted-result.component';
import { GlobalComponent } from './touchspin/typeahead/global/global.component';
import { OpenOnFocusComponent } from './touchspin/typeahead/open-on-focus/open-on-focus.component';
import { PreventManualEntryComponent } from './touchspin/typeahead/prevent-manual-entry/prevent-manual-entry.component';
import { SelectOnExactComponent } from './touchspin/typeahead/select-on-exact/select-on-exact.component';
import { SimpleTypeaheadComponent } from './touchspin/typeahead/simple-typeahead/simple-typeahead.component';
import { TemplateForResultsComponent } from './touchspin/typeahead/template-for-results/template-for-results.component';
import { TypeaheadComponent } from './touchspin/typeahead/typeahead.component';
import { WikipediaSearchComponent } from './touchspin/typeahead/wikipedia-search/wikipedia-search.component';


@NgModule({
  declarations: [
    DatePickerComponent,
    TouchspinComponent,
    CommonTouchspinComponent,
    IconsWithPrefixComponent,
    ButtonsWithPrefixComponent,
    RoundedTouchspinComponent,
    SelectTwoComponent,
    ColorVariantComponent,
    FullColorVariantComponent,
    SwitchComponent,
    CustomSwitchComponent,
    CommonSwitchComponent,
    DisabledOutlineSwitchComponent,
    VariationOfSwitchesComponent,
    SwitchSizingComponent,
    SwitchWithIconsComponent,
    TypeaheadComponent,
    SimpleTypeaheadComponent,
    OpenOnFocusComponent,
    FormattedResultComponent,
    SelectOnExactComponent,
    TemplateForResultsComponent,
    PreventManualEntryComponent,
    GlobalComponent,
    WikipediaSearchComponent,
    ClipBoardComponent
  ],

  imports: [
    CommonModule,
    FormWidgetsRoutingModule,
    SharedModule,
    NgbTypeaheadModule,
  ]
})
export class FormWidgetsModule { }
