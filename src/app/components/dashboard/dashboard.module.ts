import { CommonModule, JsonPipe } from "@angular/common";
import { NgModule } from "@angular/core";
import { NgbDatepickerModule } from "@ng-bootstrap/ng-bootstrap";
import { SharedModule } from "../../shared/shared.module";
import { DahboardRoutingModule } from "./dashboard-routing.module";

import { ActiveMembersComponent } from "./default/active-members/active-members.component";
import { CustomerTransactionComponent } from "./default/customer-transaction/customer-transaction.component";
import { DefaultComponent } from "./default/default.component";
import { NotificationsComponent } from "./default/notifications/notifications.component";
import { OpeningOfLeafletsComponent } from "./default/opening-of-leaflets/opening-of-leaflets.component";
import { ProjectsDataTableComponent } from './default/projects-data-table/projects-data-table.component';
import { SalesByProductComponent } from "./default/sales-by-product/sales-by-product.component";
import { SalesStatisticComponent } from "./default/sales-statistic/sales-statistic.component";
import { ShiftsOverviewComponent } from "./default/shifts-overview/shifts-overview.component";
import { UpcomingAppointmentsComponent } from "./default/upcoming-appointments/upcoming-appointments.component";
import { CommanChartComponent } from "./ecommerce/comman-chart/comman-chart.component";
import { EcommerceComponent } from "./ecommerce/ecommerce.component";
import { ProductSliderComponent } from './ecommerce/product-slider/product-slider.component';
import { RecentCustomersComponent } from "./ecommerce/recent-customers/recent-customers.component";
import { RecentOrdersComponent } from "./ecommerce/recent-orders/recent-orders.component";
import { RevenueByCategoryComponent } from "./ecommerce/revenue-by-category/revenue-by-category.component";
import { SalesOverviewComponent } from "./ecommerce/sales-overview/sales-overview.component";
import { TopSellerComponent } from './ecommerce/top-seller/top-seller.component';
import { UserByContinentComponent } from "./ecommerce/user-by-continent/user-by-continent.component";
import { ActivelyHoursComponent } from './educations/actively-hours/actively-hours.component';
import { AssignmentsComponent } from './educations/assignments/assignments.component';
import { CommanEducationDataComponent } from './educations/comman-education-data/comman-education-data.component';
import { EducationsComponent } from './educations/educations.component';
import { EnrolledClassesComponent } from './educations/enrolled-classes/enrolled-classes.component';
import { FeaturedCoursesComponent } from './educations/featured-courses/featured-courses.component';
import { LiveMeetingComponent } from './educations/live-meeting/live-meeting.component';
import { MonthlyAttendanceReportComponent } from './educations/monthly-attendance-report/monthly-attendance-report.component';
import { ScheduleComponent } from './educations/schedule/schedule.component';
import { StudyStatisticsComponent } from './educations/study-statistics/study-statistics.component';
import { ClientsActivityComponent } from "./project/clients-activity/clients-activity.component";
import { OnlineCourseTimelineComponent } from "./project/online-course-timeline/online-course-timeline.component";
import { ProjectStatusComponent } from "./project/project-status/project-status.component";
import { ProjectComponent } from "./project/project.component";
import { ProjectsOverviewComponent } from "./project/projects-overview/projects-overview.component";
import { CommanWidgetsChartComponent } from './project/recent-projects/comman-widgets-chart/comman-widgets-chart.component';
import { RecentProjectsComponent } from "./project/recent-projects/recent-projects.component";
import { RunningEventsComponent } from "./project/running-events/running-events.component";
import { TodaysTasksComponent } from "./project/todays-tasks/todays-tasks.component";
import { TotalProjectComponent } from "./project/total-project/total-project.component";
import { UserProfileComponent } from "./project/user-profile/user-profile.component";
import { CalendarDashboardComponent } from './widgets/calendar-dashboard/calendar-dashboard.component';


@NgModule({
  declarations: [
    DefaultComponent,
    ProjectComponent,
    OpeningOfLeafletsComponent,
    ShiftsOverviewComponent,
    CustomerTransactionComponent,
    NotificationsComponent,
    UpcomingAppointmentsComponent,
    ActiveMembersComponent,
    SalesStatisticComponent,
    SalesByProductComponent,
    ProjectStatusComponent,
    RecentProjectsComponent,
    TotalProjectComponent,
    ProjectsOverviewComponent,
    ClientsActivityComponent,
    UserProfileComponent,
    TodaysTasksComponent,
    RunningEventsComponent,
    OnlineCourseTimelineComponent,
    EcommerceComponent,
    CommanChartComponent,
    RecentOrdersComponent,
    SalesOverviewComponent,
    RecentCustomersComponent,
    RevenueByCategoryComponent,
    UserByContinentComponent,
    ProjectsDataTableComponent,
    EducationsComponent,
    CommanEducationDataComponent,
    StudyStatisticsComponent,
    AssignmentsComponent,
    LiveMeetingComponent,
    ActivelyHoursComponent,
    EnrolledClassesComponent,
    FeaturedCoursesComponent,
    MonthlyAttendanceReportComponent,
    ScheduleComponent,
    CommanWidgetsChartComponent,
    ProductSliderComponent,
    TopSellerComponent,
    CalendarDashboardComponent,
  ],
  imports: [
    CommonModule,
    DahboardRoutingModule,
    NgbDatepickerModule,
    JsonPipe,
    SharedModule
  ],

  exports : [
    CommanChartComponent,
    UserProfileComponent,
    OpeningOfLeafletsComponent,
    CommanEducationDataComponent,
    UpcomingAppointmentsComponent
  ]
})
export class DahboardModule {}
