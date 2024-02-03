import { Component } from "@angular/core";
import * as data from "../../../../shared/data/data/dashboard/education";
import { featuredCourse } from "../../../../shared/data/data/dashboard/education";

@Component({
  selector: "app-featured-courses",
  templateUrl: "./featured-courses.component.html",
  styleUrls: ["./featured-courses.component.scss"],
})

export class FeaturedCoursesComponent {

  public featuredCourses = data.featuredCourses;
  public isShow: boolean = false;
  public bookmarkItem : boolean = false
  public selectedId : number;
  public bookMark: featuredCourse[] ;
  
  bookMarkItem(id: number) {
    this.bookMark = this.featuredCourses.filter(data =>{
      return data.id === id;
    })
    this.bookMark[0].status = !this.bookMark[0].status;
  }
  
  clickOutside(): void {
    this.isShow = false;
  }
}
