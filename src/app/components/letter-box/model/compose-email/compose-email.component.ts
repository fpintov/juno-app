import { Component } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { Editor } from "ngx-editor";

@Component({
  selector: "app-compose-email",
  templateUrl: "./compose-email.component.html",
  styleUrls: ["./compose-email.component.scss"],
})

export class ComposeEmailComponent {
  
  public isCc: boolean = false;
  public isBcc: boolean = false;
  public editor: Editor;
  public html = '';

  constructor(private modal: NgbModal) {}

  ngOnInit(): void {
    this.editor = new Editor();
  }
  
  close() {
    this.modal.dismissAll();
  }

  ngOnDestroy(): void {
    this.editor.destroy();
  }
}
