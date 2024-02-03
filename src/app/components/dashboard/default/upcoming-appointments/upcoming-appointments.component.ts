import { Component } from "@angular/core";
import * as data from "../../../../shared/data/data/dashboard/dashboard";

@Component({
  selector: "app-upcoming-appointments",
  templateUrl: "./upcoming-appointments.component.html",
  styleUrls: ["./upcoming-appointments.component.scss"],
})

export class UpcomingAppointmentsComponent {
	
  public upcomingAppointments = data.upcomingAppointments;

}
