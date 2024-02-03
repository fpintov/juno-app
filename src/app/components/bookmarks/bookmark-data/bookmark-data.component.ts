import { Component, Input, SimpleChanges, ViewChild } from "@angular/core";
import * as data from "../../../shared/data/data/bookmarks/bookmark";
import { EditBookmarkComponent } from "../modal/edit-bookmark/edit-bookmark.component";

@Component({
  selector: "app-bookmark-data",
  templateUrl: "./bookmark-data.component.html",
  styleUrls: ["./bookmark-data.component.scss"],
})

export class BookmarkDataComponent {

  @Input() selectedId: number;
  public getBookmarkData: data.bookMark;
  public ViewsData = data.ViewsData;
  public tagsData = data.tagsData;
  public bookMark: data.bookmarkModel[];
  public editBookmarkData: data.bookmarkModel[];
  public listGrid: boolean = false;
  public bookmarkData: data.bookmarkModel [] =[];
  
  @ViewChild("editBookmarkModal") EditBookmarkModal: EditBookmarkComponent;

  ngOnInit() {
    this.ViewsData.map((data) => {
      if (data.active) {
        this.getBookmarkData = data;
        for (let i of data.data) {
          this.bookmarkData.push(i)
        }
      }
    })
  }

  ngOnChanges(changes: SimpleChanges) {
    let ids = changes["selectedId"]?.currentValue;
    this.ViewsData.map((data) => {
      if (data.title_id == ids) {
        this.getBookmarkData = data;
      }
    });
    let id = changes["selectedId"]?.currentValue;
    this.tagsData.map((data) => {
      if (data.title_id == id) {
        this.getBookmarkData = data;
      }
    });
  }
  
  changeGrid() {
    this.listGrid = false;
  }

  changeList() {
    this.listGrid = true;
  }

  bookMarkItem(id: number) {
    this.bookMark = this.ViewsData[0].data.filter((data) => {
      return data.id === id;
    })
    this.bookMark[0].favourite = !this.bookMark[0].favourite;
  }

  editBookmarkModel(id: number) {
    const modelData = this.bookmarkData.filter((data) => {
      return data.id === id;
    })
    this.editBookmarkData = modelData;
    this.EditBookmarkModal.openModal(this.editBookmarkData)
  }
}
