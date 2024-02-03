import { Component } from "@angular/core";
import { NgxDropzoneChangeEvent } from "ngx-dropzone";
import { Editor } from "ngx-editor";

@Component({
  selector: "app-add-post",
  templateUrl: "./add-post.component.html",
  styleUrls: ["./add-post.component.scss"],
})

export class AddPostComponent {

  public files: File[] = [];
  public selectedCityIds: string[] = [];
  public selectedCityId: number = 0;
  public selectedUserIds: number[] = [];

  public cities2 = [
    { id: 1, name: "LifeStyle" },
    { id: 2, name: "Travel" },
  ];


  public editor: Editor;
  public html = '';

  ngOnInit(): void {
    this.editor = new Editor();
  }
  
  onSelect(event: NgxDropzoneChangeEvent) {
    this.files.push(...event.addedFiles);
  }

  onRemove(event: File) {
    this.files.splice(this.files.indexOf(event), 1);
  }

  ngOnDestroy(): void {
    this.editor.destroy();
  }

}
