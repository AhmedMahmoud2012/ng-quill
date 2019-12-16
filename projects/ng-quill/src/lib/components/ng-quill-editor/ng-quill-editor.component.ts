import {
  Component,
  OnInit,
  AfterViewInit,
  Output,
  EventEmitter,
  Input
} from "@angular/core";
import { NgQuillService } from "../../ng-quill.service";
import { TOOLBAR } from "../../core/constants/editor.config";
declare var Quill: any;
@Component({
  selector: "ng-quill-editor",
  templateUrl: "./ng-quill-editor.component.html",
  styleUrls: ["./ng-quill-editor.component.css"]
})
export class NgQuillEditorComponent implements OnInit, AfterViewInit {
  editor: any;
  @Input() data: string;
  @Output() onContentChange: EventEmitter<string> = new EventEmitter();
  constructor(private service: NgQuillService) {}

  ngOnInit() {}
  ngAfterViewInit(): void {
    Promise.all([
      this.service.loadCSS("quilljs"),
      this.service.loadJS("quilljs")
    ]).then(_ => {
      this.editor = new Quill("#editor", {
        modules: { toolbar: TOOLBAR },
        theme: "snow"
      });

      this.editor.setText(this.data || "");
      this.editor.on("text-change", (delta, oldDelta, source) => {
        this.onContentChange.emit(this.editor.root.innerHTML);
      });
    });
  }
}
