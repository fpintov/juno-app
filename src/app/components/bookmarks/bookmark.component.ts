import { Component, Output } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import * as data from "../../shared/data/data/bookmarks/bookmark";
import { NewBookmarksComponent } from "./modal/new-bookmarks/new-bookmarks.component";
import { CreateTagComponent } from "./modal/create-tag/create-tag.component";

@Component({
  selector: "app-bookmark",
  templateUrl: "./bookmark.component.html",
  styleUrls: ["./bookmark.component.scss"],
})
export class BookmarkComponent {
  
  public ViewsData = data.ViewsData;
  public tagsData = data.tagsData;
  public selected_id: number;
  public isOpen : boolean = false;
  public statusActive: boolean;

  constructor(private modalService: NgbModal) {}

  newBookMark() {
    const modalRef = this.modalService.open(NewBookmarksComponent, {
      size: "lg",
    });
  }

  createTag(){
    const modalRef = this.modalService.open(CreateTagComponent, {
      size: "lg",
    });
  }

  changeDataView(id: number) {
    const viewId = this.ViewsData.filter((x) => x.title_id == id);
    this.selected_id = viewId[0].title_id;
  }

  changeDataTags(id:number) {
    const tagId = this.tagsData.filter((x) => x.title_id == id);
    this.selected_id = tagId[0].title_id;
  }

  Outside(){
    this.isOpen = false;  
   }
}
