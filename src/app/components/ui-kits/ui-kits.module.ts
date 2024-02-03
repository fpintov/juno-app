import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { NgbDropdownModule, NgbPopoverModule } from "@ng-bootstrap/ng-bootstrap";
import { SharedModule } from "../../shared/shared.module";
import { UiKitsRoutingModule } from "./ui-kits-routing.module";

import { AccordionComponent } from "./accordion/accordion.component";
import { CollapseAccordionComponent } from "./accordion/collapse-accordion/collapse-accordion.component";
import { FlushAccordionComponent } from "./accordion/flush-accordion/flush-accordion.component";
import { HorizontalAccordionComponent } from "./accordion/horizontal-accordion/horizontal-accordion.component";
import { MultipleCollapseAccordionComponent } from "./accordion/multiple-collapse-accordion/multiple-collapse-accordion.component";
import { OutlineAccordionComponent } from "./accordion/outline-accordion/outline-accordion.component";
import { SimpleAccordianComponent } from "./accordion/simple-accordian/simple-accordian.component";
import { WithIconsAccordionComponent } from "./accordion/with-icons-accordion/with-icons-accordion.component";
import { AdditionalContentComponent } from "./alert/additional-content/additional-content.component";
import { AlertComponent } from "./alert/alert.component";
import { AlertsWithTextActionsComponent } from "./alert/alerts-with-text-actions/alerts-with-text-actions.component";
import { DarkThemeComponent } from "./alert/dark-theme/dark-theme.component";
import { DismissingDarkAlertComponent } from "./alert/dismissing-dark-alert/dismissing-dark-alert.component";
import { DismissingLightAlertComponent } from "./alert/dismissing-light-alert/dismissing-light-alert.component";
import { LeftBorderAlertComponent } from "./alert/left-border-alert/left-border-alert.component";
import { LightThemeComponent } from "./alert/light-theme/light-theme.component";
import { LiveAlertComponent } from "./alert/live-alert/live-alert.component";
import { OutlineDarkLightAlertsComponent } from "./alert/outline-dark-light-alerts/outline-dark-light-alerts.component";
import { AvatarsComponent } from "./avatars/avatars.component";
import { CommonAvatarsComponent } from './avatars/common-avatars/common-avatars.component';
import { GroupingComponent } from "./avatars/grouping/grouping.component";
import { AlignmentsComponent } from "./dropdown/alignments/alignments.component";
import { BasicComponent } from "./dropdown/basic/basic.component";
import { DarkComponent } from "./dropdown/dark/dark.component";
import { DividerComponent } from "./dropdown/divider/divider.component";
import { DropdownSizingComponent } from "./dropdown/dropdown-sizing/dropdown-sizing.component";
import { DropdownComponent } from "./dropdown/dropdown.component";
import { HeadingComponent } from "./dropdown/heading/heading.component";
import { HelperCardComponent } from "./dropdown/helper-card/helper-card.component";
import { InputTypeComponent } from "./dropdown/input-type/input-type.component";
import { JustifyContentsComponent } from "./dropdown/justify-contents/justify-contents.component";
import { RoundedComponent } from "./dropdown/rounded/rounded.component";
import { SplitDropdownComponent } from "./dropdown/split-dropdown/split-dropdown.component";
import { UniqueComponent } from "./dropdown/unique/unique.component";
import { GridForColumnComponent } from "./grid/grid-for-column/grid-for-column.component";
import { GridOptionsComponent } from "./grid/grid-options/grid-options.component";
import { GridComponent } from "./grid/grid.component";
import { HorizontalAlignmentComponent } from "./grid/horizontal-alignment/horizontal-alignment.component";
import { NestingComponent } from "./grid/nesting/nesting.component";
import { OffsetComponent } from "./grid/offset/offset.component";
import { OrderComponent } from "./grid/order/order.component";
import { VerticalAlignmentComponent } from "./grid/vertical-alignment/vertical-alignment.component";
import { BorderColorComponent } from "./helper-classes/border-color/border-color.component";
import { CommanHelperClassComponent } from "./helper-classes/comman-helper-class/comman-helper-class.component";
import { CommanMarginPaddingComponent } from "./helper-classes/comman-margin-padding/comman-margin-padding.component";
import { FontSizesComponent } from "./helper-classes/font-sizes/font-sizes.component";
import { FontStyleComponent } from "./helper-classes/font-style/font-style.component";
import { FontWidthHelperComponent } from './helper-classes/font-width-helper/font-width-helper.component';
import { HelperClassesComponent } from "./helper-classes/helper-classes.component";
import { ImagesSizesComponent } from "./helper-classes/images-sizes/images-sizes.component";
import { MarginComponent } from "./helper-classes/margin/margin.component";
import { PaddingComponent } from "./helper-classes/padding/padding.component";
import { TextColorsComponent } from "./helper-classes/text-colors/text-colors.component";
import { CheckboxListComponent } from "./lists/checkbox-list/checkbox-list.component";
import { ContextualClassesComponent } from "./lists/contextual-classes/contextual-classes.component";
import { CustomContentListsComponent } from "./lists/custom-content-lists/custom-content-lists.component";
import { DisabledListsComponent } from "./lists/disabled-lists/disabled-lists.component";
import { HorizontalListsComponent } from "./lists/horizontal-lists/horizontal-lists.component";
import { JavaScriptBehaviorComponent } from "./lists/java-script-behavior/java-script-behavior.component";
import { ListsWithNumbersComponent } from "./lists/lists-with-numbers/lists-with-numbers.component";
import { ListsComponent } from "./lists/lists.component";
import { NumberedBadgeListsComponent } from "./lists/numbered-badge-lists/numbered-badge-lists.component";
import { RadiosComponent } from "./lists/radios/radios.component";
import { ScrollableListsComponent } from "./lists/scrollable-lists/scrollable-lists.component";
import { BasicModalComponent } from "./modal/basic-modal/basic-modal.component";
import { OpenModalMofiComponent } from "./modal/basic-modal/open-modal-mofi/open-modal-mofi.component";
import { ScrollingContentComponent } from "./modal/basic-modal/scrolling-content/scrolling-content.component";
import { SimpleComponent } from "./modal/basic-modal/simple/simple.component";
import { TooltipsPopoversComponent } from "./modal/basic-modal/tooltips-popovers/tooltips-popovers.component";
import { BetweenModalsComponent } from "./modal/between-modals/between-modals.component";
import { CenteredModalComponent } from "./modal/centered-modal/centered-modal.component";
import { FullscreenCommonModalComponent } from "./modal/fullscreen-modal/fullscreen-common-modal/fullscreen-common-modal.component";
import { FullscreenModalFlComponent } from "./modal/fullscreen-modal/fullscreen-modal-fl/fullscreen-modal-fl.component";
import { FullscreenModalComponent } from "./modal/fullscreen-modal/fullscreen-modal.component";
import { ModalComponent } from "./modal/modal.component";
import { BalanceModalComponent } from "./modal/mofi-custom-modals/balance-modal/balance-modal.component";
import { MofiCustomModalsComponent } from "./modal/mofi-custom-modals/mofi-custom-modals.component";
import { ProfileModalComponent } from "./modal/mofi-custom-modals/profile-modal/profile-modal.component";
import { ResultModalComponent } from "./modal/mofi-custom-modals/result-modal/result-modal.component";
import { ExtraLargeComponent } from "./modal/sizes-modal/extra-large/extra-large.component";
import { FullScreenComponent } from "./modal/sizes-modal/full-screen/full-screen.component";
import { LargeComponent } from "./modal/sizes-modal/large/large.component";
import { SizesModalComponent } from "./modal/sizes-modal/sizes-modal.component";
import { SmallComponent } from "./modal/sizes-modal/small/small.component";
import { StaticBackdropComponent } from "./modal/static-backdrop/static-backdrop.component";
import { BasicPopoverComponent } from "./popover/basic-popover/basic-popover.component";
import { PopoverDirectionComponent } from "./popover/popover-direction/popover-direction.component";
import { PopoverOffsetComponent } from "./popover/popover-offset/popover-offset.component";
import { PopoverComponent } from "./popover/popover.component";
import { BasicProgressBarsComponent } from "./progress-bar/basic-progress-bars/basic-progress-bars.component";
import { CommanProgressBarComponent } from "./progress-bar/comman-progress-bar/comman-progress-bar.component";
import { CustomHeightProgressComponent } from "./progress-bar/custom-height-progress/custom-height-progress.component";
import { CustomProgressBarsComponent } from "./progress-bar/custom-progress-bars/custom-progress-bars.component";
import { LargeProgressBarsComponent } from "./progress-bar/large-progress-bars/large-progress-bars.component";
import { MultipleBarsComponent } from "./progress-bar/multiple-bars/multiple-bars.component";
import { ProgressBarComponent } from "./progress-bar/progress-bar.component";
import { ProgressWithNumberStepsComponent } from "./progress-bar/progress-with-number-steps/progress-with-number-steps.component";
import { SmallProgressBarsComponent } from "./progress-bar/small-progress-bars/small-progress-bars.component";
import { BorderTabsComponent } from "./tabs/border-tabs/border-tabs.component";
import { IconsWithTabsComponent } from "./tabs/icons-with-tabs/icons-with-tabs.component";
import { JustifyTabsComponent } from "./tabs/justify-tabs/justify-tabs.component";
import { MaterialStyleLeftTabsComponent } from "./tabs/material-style-left-tabs/material-style-left-tabs.component";
import { MaterialStyleTabsComponent } from "./tabs/material-style-tabs/material-style-tabs.component";
import { PillsTabsComponent } from "./tabs/pills-tabs/pills-tabs.component";
import { SimpleTabsComponent } from "./tabs/simple-tabs/simple-tabs.component";
import { TabsComponent } from "./tabs/tabs.component";
import { VerticalTabsComponent } from "./tabs/vertical-tabs/vertical-tabs.component";
import { BadgeHeadingsExampleComponent } from "./tag-pills/badge-headings-example/badge-headings-example.component";
import { BadgesAsPartButtonsComponent } from "./tag-pills/badges-as-part-buttons/badges-as-part-buttons.component";
import { CommanTagPillsComponent } from "./tag-pills/comman-tag-pills/comman-tag-pills.component";
import { TagPillsComponent } from "./tag-pills/tag-pills.component";
import { BasicTooltipComponent } from "./tooltip/basic-tooltip/basic-tooltip.component";
import { ColoredTooltipComponent } from "./tooltip/colored-tooltip/colored-tooltip.component";
import { FilledTooltipComponent } from "./tooltip/filled-tooltip/filled-tooltip.component";
import { HoverEffectComponent } from "./tooltip/hover-effect/hover-effect.component";
import { TooltipDirectionsComponent } from "./tooltip/tooltip-directions/tooltip-directions.component";
import { TooltipComponent } from "./tooltip/tooltip.component";
import { BlockquotesComponent } from "./typography/blockquotes/blockquotes.component";
import { ColoredHeadingsComponent } from "./typography/colored-headings/colored-headings.component";
import { DisplayHeadingsComponent } from "./typography/display-headings/display-headings.component";
import { FontWeightComponent } from "./typography/font-weight/font-weight.component";
import { HeadingsComponent } from "./typography/headings/headings.component";
import { InlineTextElementsComponent } from "./typography/inline-text-elements/inline-text-elements.component";
import { ListingTypographyComponent } from "./typography/listing-typography/listing-typography.component";
import { TextColorComponent } from "./typography/text-color/text-color.component";
import { TypographyComponent } from "./typography/typography.component";

@NgModule({
  declarations: [
    TypographyComponent,
    HeadingsComponent,
    ColoredHeadingsComponent,
    FontWeightComponent,
    ListingTypographyComponent,
    DisplayHeadingsComponent,
    InlineTextElementsComponent,
    TextColorComponent,
    BlockquotesComponent,
    AvatarsComponent,
    GroupingComponent,
    HelperClassesComponent,
    CommanHelperClassComponent,
    BorderColorComponent,
    ImagesSizesComponent,
    FontStyleComponent,
    TextColorsComponent,
    PaddingComponent,
    CommanMarginPaddingComponent,
    MarginComponent,
    FontSizesComponent,
    GridComponent,
    GridOptionsComponent,
    GridForColumnComponent,
    VerticalAlignmentComponent,
    HorizontalAlignmentComponent,
    NestingComponent,
    OrderComponent,
    OffsetComponent,
    TagPillsComponent,
    CommanTagPillsComponent,
    BadgeHeadingsExampleComponent,
    BadgesAsPartButtonsComponent,
    ProgressBarComponent,
    CommanProgressBarComponent,
    BasicProgressBarsComponent,
    MultipleBarsComponent,
    ProgressWithNumberStepsComponent,
    CustomProgressBarsComponent,
    SmallProgressBarsComponent,
    LargeProgressBarsComponent,
    CustomHeightProgressComponent,
    ModalComponent,
    BasicModalComponent,
    SimpleComponent,
    ScrollingContentComponent,
    TooltipsPopoversComponent,
    OpenModalMofiComponent,
    SizesModalComponent,
    FullScreenComponent,
    ExtraLargeComponent,
    LargeComponent,
    SmallComponent,
    FullscreenModalComponent,
    FullscreenCommonModalComponent,
    FullscreenModalFlComponent,
    CenteredModalComponent,
    BetweenModalsComponent,
    StaticBackdropComponent,
    MofiCustomModalsComponent,
    ProfileModalComponent,
    ResultModalComponent,
    BalanceModalComponent,
    AlertComponent,
    DarkThemeComponent,
    LightThemeComponent,
    OutlineDarkLightAlertsComponent,
    AlertsWithTextActionsComponent,
    DismissingDarkAlertComponent,
    DismissingLightAlertComponent,
    LiveAlertComponent,
    LeftBorderAlertComponent,
    AdditionalContentComponent,
    PopoverComponent,
    BasicPopoverComponent,
    PopoverDirectionComponent,
    PopoverOffsetComponent,
    TooltipComponent,
    BasicTooltipComponent,
    ColoredTooltipComponent,
    TooltipDirectionsComponent,
    HoverEffectComponent,
    FilledTooltipComponent,
    DropdownComponent,
    BasicComponent,
    RoundedComponent,
    SplitDropdownComponent,
    HeadingComponent,
    InputTypeComponent,
    DarkComponent,
    UniqueComponent,
    JustifyContentsComponent,
    AlignmentsComponent,
    HelperCardComponent,
    DividerComponent,
    DropdownSizingComponent,
    AccordionComponent,
    SimpleAccordianComponent,
    FlushAccordionComponent,
    MultipleCollapseAccordionComponent,
    WithIconsAccordionComponent,
    OutlineAccordionComponent,
    HorizontalAccordionComponent,
    CollapseAccordionComponent,
    TabsComponent,
    SimpleTabsComponent,
    IconsWithTabsComponent,
    VerticalTabsComponent,
    PillsTabsComponent,
    JustifyTabsComponent,
    MaterialStyleLeftTabsComponent,
    MaterialStyleTabsComponent,
    BorderTabsComponent,
    ListsComponent,
    ContextualClassesComponent,
    HorizontalListsComponent,
    CustomContentListsComponent,
    CheckboxListComponent,
    RadiosComponent,
    ListsWithNumbersComponent,
    JavaScriptBehaviorComponent,
    NumberedBadgeListsComponent,
    DisabledListsComponent,
    ScrollableListsComponent,
    FontWidthHelperComponent,
    CommonAvatarsComponent,
  ],
  imports: [
    CommonModule,
    UiKitsRoutingModule,
    SharedModule,
    NgbPopoverModule,
    NgbDropdownModule,
  ],
})
export class UiKitsModule {}
