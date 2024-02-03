import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Editor } from "ngx-editor";

@Component({
  selector: "app-interview-mail",
  templateUrl: "./interview-mail.component.html",
  styleUrls: ["./interview-mail.component.scss"],
})

export class InterviewMailComponent {

  public isBookmark: boolean = false;
  public isReply: boolean = false;

  @Input() open: boolean;
  @Output() childEvent = new EventEmitter();

  public editor: Editor;
  public html = '';

  ngOnInit(): void {
    this.editor = new Editor();
  }

  clickValue(value: boolean) {
    value = false;
    this.childEvent.emit(value);
  }

  ngOnDestroy(): void {
    this.editor.destroy();
  }
}
