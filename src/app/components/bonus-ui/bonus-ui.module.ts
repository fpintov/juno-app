import { NgModule } from '@angular/core';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ImageCropperModule } from 'ngx-image-cropper';
import { SharedModule } from '../../shared/shared.module';
import { BonusUiRoutingModule } from './bonus-ui-routing.module';

import { BasicCardChildComponent } from './basic-card/basic-card-child/basic-card-child.component';
import { BasicCardComponent } from './basic-card/basic-card.component';
import { FlatCardComponent } from './basic-card/flat-card/flat-card.component';
import { IconInHeadingComponent } from './basic-card/icon-in-heading/icon-in-heading.component';
import { InfoColorCardsComponent } from './basic-card/info-color-cards/info-color-cards.component';
import { WithoutShadowCardComponent } from './basic-card/without-shadow-card/without-shadow-card.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { ColoredBreadcrumbComponent } from './breadcrumb/colored-breadcrumb/colored-breadcrumb.component';
import { DefaultBreadcrumbComponent } from './breadcrumb/default-breadcrumb/default-breadcrumb.component';
import { DividerBreadcrumbComponent } from './breadcrumb/divider-breadcrumb/divider-breadcrumb.component';
import { IconsBreadcrumbComponent } from './breadcrumb/icons-breadcrumb/icons-breadcrumb.component';
import { VariationBreadcrumbComponent } from './breadcrumb/variation-breadcrumb/variation-breadcrumb.component';
import { AbsoluteCardComponent } from './creative-cards/absolute-card/absolute-card.component';
import { BorderBottomComponent } from './creative-cards/border-bottom/border-bottom.component';
import { BorderLeftComponent } from './creative-cards/border-left/border-left.component';
import { BorderLightComponent } from './creative-cards/border-light/border-light.component';
import { BorderPrimaryStateComponent } from './creative-cards/border-primary-state/border-primary-state.component';
import { BorderSecondaryStateComponent } from './creative-cards/border-secondary-state/border-secondary-state.component';
import { BorderTopComponent } from './creative-cards/border-top/border-top.component';
import { BorderWarningStateComponent } from './creative-cards/border-warning-state/border-warning-state.component';
import { CreativeCardsComponent } from './creative-cards/creative-cards.component';
import { DefaultFileUploadComponent } from './dropzone/default-file-upload/default-file-upload.component';
import { DropzoneComponent } from './dropzone/dropzone.component';
import { ImagePreviewComponent } from './dropzone/image-preview/image-preview.component';
import { MultiFileUploadComponent } from './dropzone/multi-file-upload/multi-file-upload.component';
import { SingleFileUploadComponent } from './dropzone/single-file-upload/single-file-upload.component';
import { ImageCropperComponent } from './image-cropper/image-cropper.component';
import { AutoPlayVariantComponent } from './owl-carousel/auto-play-variant/auto-play-variant.component';
import { CrossFadeComponent } from './owl-carousel/cross-fade/cross-fade.component';
import { DarkVariantComponent } from './owl-carousel/dark-variant/dark-variant.component';
import { MouseWheelVariantComponent } from './owl-carousel/mouse-wheel-variant/mouse-wheel-variant.component';
import { OwlCarouselComponent } from './owl-carousel/owl-carousel.component';
import { SlidesOnlyComponent } from './owl-carousel/slides-only/slides-only.component';
import { WithCaptionsComponent } from './owl-carousel/with-captions/with-captions.component';
import { WithControlsComponent } from './owl-carousel/with-controls/with-controls.component';
import { WithIndicatorsComponent } from './owl-carousel/with-indicators/with-indicators.component';
import { DefaultPaginationComponent } from './paginations/default-pagination/default-pagination.component';
import { PaginationAlignmentComponent } from './paginations/pagination-alignment/pagination-alignment.component';
import { PaginationSizingComponent } from './paginations/pagination-sizing/pagination-sizing.component';
import { PaginationWithActiveComponent } from './paginations/pagination-with-active/pagination-with-active.component';
import { PaginationWithIconsComponent } from './paginations/pagination-with-icons/pagination-with-icons.component';
import { PaginationsComponent } from './paginations/paginations.component';
import { RoundedPaginationComponent } from './paginations/rounded-pagination/rounded-pagination.component';
import { CustomSliderComponent } from './range-slider/custom-slider/custom-slider.component';
import { DefaultSliderComponent } from './range-slider/default-slider/default-slider.component';
import { DisabledSliderComponent } from './range-slider/disabled-slider/disabled-slider.component';
import { MinMaxValueSliderComponent } from './range-slider/min-max-value-slider/min-max-value-slider.component';
import { PrettifyNumberSliderComponent } from './range-slider/prettify-number-slider/prettify-number-slider.component';
import { RangeSliderComponent } from './range-slider/range-slider.component';
import { CurrentRatingComponent } from './rating/current-rating/current-rating.component';
import { HorizontalRatingComponent } from './rating/horizontal-rating/horizontal-rating.component';
import { MovieRatingComponent } from './rating/movie-rating/movie-rating.component';
import { NumberRatingComponent } from './rating/number-rating/number-rating.component';
import { RatingComponent } from './rating/rating.component';
import { SquareRatingComponent } from './rating/square-rating/square-rating.component';
import { StarRatingComponent } from './rating/star-rating/star-rating.component';
import { LeftRibbonsComponent } from './ribbons/left-ribbons/left-ribbons.component';
import { RibbonsComponent } from './ribbons/ribbons.component';
import { RightRibbonsComponent } from './ribbons/right-ribbons/right-ribbons.component';
import { AJAXRequestMovieComponent } from './sweet-alert/ajax-request-movie/ajax-request-movie.component';
import { AutoCloseTimerComponent } from './sweet-alert/auto-close-timer/auto-close-timer.component';
import { BasicExampleComponent } from './sweet-alert/basic-example/basic-example.component';
import { DangerAlertComponent } from './sweet-alert/danger-alert/danger-alert.component';
import { InfoAlertComponent } from './sweet-alert/info-alert/info-alert.component';
import { PikachuAlertComponent } from './sweet-alert/pikachu-alert/pikachu-alert.component';
import { QuestionsAlertComponent } from './sweet-alert/questions-alert/questions-alert.component';
import { SuccessMessageComponent } from './sweet-alert/success-message/success-message.component';
import { SweetAlertComponent } from './sweet-alert/sweet-alert.component';
import { TitleWithTextComponent } from './sweet-alert/title-with-text/title-with-text.component';
import { UsernameAlertComponent } from './sweet-alert/username-alert/username-alert.component';
import { WarningAlertComponent } from './sweet-alert/warning-alert/warning-alert.component';
import { WarningModeComponent } from './sweet-alert/warning-mode/warning-mode.component';
import { BasicTimelineComponent } from './time-line/basic-timeline/basic-timeline.component';
import { HorizontalTimelineComponent } from './time-line/horizontal-timeline/horizontal-timeline.component';
import { HoveringTimelineComponent } from './time-line/hovering-timeline/hovering-timeline.component';
import { MofiTimelineComponent } from './time-line/mofi-timeline/mofi-timeline.component';
import { TimeLineComponent } from './time-line/time-line.component';
import { VariationTimelineComponent } from './time-line/variation-timeline/variation-timeline.component';
import { ColorsSchemesComponent } from './toasts/colors-schemes/colors-schemes.component';
import { DefaultToastComponent } from './toasts/default-toast/default-toast.component';
import { LiveToastComponent } from './toasts/live-toast/live-toast.component';
import { StackingToastsComponent } from './toasts/stacking-toasts/stacking-toasts.component';
import { ToastsComponent } from './toasts/toasts.component';
import { TranslucentToastsComponent } from './toasts/translucent-toasts/translucent-toasts.component';
import { UniqueToastComponent } from './toasts/unique-toast/unique-toast.component';
import { CommonModule } from '@angular/common';
import { DarkColorCardComponent } from './basic-card/dark-color-card/dark-color-card.component';


@NgModule({
  declarations: [
    ToastsComponent,
    LiveToastComponent,
    ColorsSchemesComponent,
    StackingToastsComponent,
    TranslucentToastsComponent,
    DefaultToastComponent,
    UniqueToastComponent,
    RatingComponent,
    NumberRatingComponent,
    MovieRatingComponent,
    SquareRatingComponent,
    StarRatingComponent,
    HorizontalRatingComponent,
    CurrentRatingComponent,
    DropzoneComponent,
    DefaultFileUploadComponent,
    ImagePreviewComponent,
    SingleFileUploadComponent,
    MultiFileUploadComponent,
    SweetAlertComponent,
    BasicExampleComponent,
    TitleWithTextComponent,
    InfoAlertComponent,
    WarningAlertComponent,
    PikachuAlertComponent,
    QuestionsAlertComponent,
    UsernameAlertComponent,
    SuccessMessageComponent,
    DangerAlertComponent,
    WarningModeComponent,
    AutoCloseTimerComponent,
    AJAXRequestMovieComponent,
    OwlCarouselComponent,
    SlidesOnlyComponent,
    WithControlsComponent,
    AutoPlayVariantComponent,
    RibbonsComponent,
    LeftRibbonsComponent,
    RightRibbonsComponent,
    PaginationsComponent,
    DefaultPaginationComponent,
    PaginationWithActiveComponent,
    PaginationWithIconsComponent,
    RoundedPaginationComponent,
    PaginationAlignmentComponent,
    PaginationSizingComponent,
    BreadcrumbComponent,
    DefaultBreadcrumbComponent,
    DividerBreadcrumbComponent,
    IconsBreadcrumbComponent,
    VariationBreadcrumbComponent,
    ColoredBreadcrumbComponent,
    RangeSliderComponent,
    DefaultSliderComponent,
    MinMaxValueSliderComponent,
    CustomSliderComponent,
    PrettifyNumberSliderComponent,
    DisabledSliderComponent,
    ImageCropperComponent,
    BasicCardComponent,
    FlatCardComponent,
    WithoutShadowCardComponent,
    IconInHeadingComponent,
    InfoColorCardsComponent,
    BasicCardChildComponent,
    CreativeCardsComponent,
    BorderLeftComponent,
    BorderLightComponent,
    BorderTopComponent,
    BorderBottomComponent,
    BorderPrimaryStateComponent,
    BorderWarningStateComponent,
    BorderSecondaryStateComponent,
    AbsoluteCardComponent,
    TimeLineComponent,
    BasicTimelineComponent,
    HoveringTimelineComponent,
    VariationTimelineComponent,
    HorizontalTimelineComponent,
    MofiTimelineComponent,
    MouseWheelVariantComponent,
    WithIndicatorsComponent,
    WithCaptionsComponent,
    CrossFadeComponent,
    DarkVariantComponent,
    DarkColorCardComponent
  ],
  imports: [
    BonusUiRoutingModule,
    CommonModule,
    SharedModule,
    FontAwesomeModule,
    ImageCropperModule,
  ]
})
export class BonusUiModule { }
