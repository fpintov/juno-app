import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TableRoutingModule } from './table-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { BasicDataTableDirective } from '../../shared/directive/basic-data-table.directive';

import { BasicTableWithBorderBottomColorComponent } from './basic-table/basic-table-with-border-bottom-color/basic-table-with-border-bottom-color.component';
import { BasicTableComponent } from './basic-table/basic-table.component';
import { BreckpointSpecificComponent } from './basic-table/breckpoint-specific/breckpoint-specific.component';
import { CaptionComponent } from './basic-table/caption/caption.component';
import { CustomTableColorStrippedComponent } from './basic-table/custom-table-color-stripped/custom-table-color-stripped.component';
import { DashedBorderComponent } from './basic-table/dashed-border/dashed-border.component';
import { HoverableRowsBorderComponent } from './basic-table/hoverable-rows-border/hoverable-rows-border.component';
import { InverseTablePrimaryBackComponent } from './basic-table/inverse-table-primary-back/inverse-table-primary-back.component';
import { InverseTableComponent } from './basic-table/inverse-table/inverse-table.component';
import { ResponsiveTablesBackgroundComponent } from './basic-table/responsive-tables-background/responsive-tables-background.component';
import { SizingTablesComponent } from './basic-table/sizing-tables/sizing-tables.component';
import { StripedRowTableComponent } from './basic-table/striped-row-table/striped-row-table.component';
import { TableHeadOptionsComponent } from './basic-table/table-head-options/table-head-options.component';
import { DataTablesComponent } from './data-tables/data-tables.component';
import { AlertsComponent } from './table-components/alerts/alerts.component';
import { BadgesComponent } from './table-components/badges/badges.component';
import { CheckboxComponent } from './table-components/checkbox/checkbox.component';
import { InputComponent } from './table-components/input/input.component';
import { ProgressbarComponent } from './table-components/progressbar/progressbar.component';
import { RadioButtonsComponent } from './table-components/radio-buttons/radio-buttons.component';
import { SelectComponent } from './table-components/select/select.component';
import { SwitchComponent } from './table-components/switch/switch.component';
import { TableComponentsComponent } from './table-components/table-components.component';
import { TooltipTriggersComponent } from './table-components/tooltip-triggers/tooltip-triggers.component';
import { UIComponentsComponent } from './table-components/ui-components/ui-components.component';


@NgModule({
  declarations: [
    BasicTableComponent,
    BasicTableWithBorderBottomColorComponent,
    InverseTableComponent,
    HoverableRowsBorderComponent,
    InverseTablePrimaryBackComponent,
    CaptionComponent,
    TableHeadOptionsComponent,
    StripedRowTableComponent,
    ResponsiveTablesBackgroundComponent,
    BreckpointSpecificComponent,
    SizingTablesComponent,
    CustomTableColorStrippedComponent,
    DashedBorderComponent,
    TableComponentsComponent,
    UIComponentsComponent,
    AlertsComponent,
    ProgressbarComponent,
    CheckboxComponent,
    RadioButtonsComponent,
    SelectComponent,
    InputComponent,
    BadgesComponent,
    TooltipTriggersComponent,
    SwitchComponent,
    DataTablesComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    TableRoutingModule,
    BasicDataTableDirective
  ]

})
export class TableModule { }
