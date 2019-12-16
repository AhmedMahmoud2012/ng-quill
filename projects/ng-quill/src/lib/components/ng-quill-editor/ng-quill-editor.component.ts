import {
  Component,
  OnInit,
  AfterViewInit,
  Output,
  EventEmitter,
  Input,
  OnChanges,
  SimpleChanges
} from "@angular/core";
import { NgQuillService } from "../../ng-quill.service";
import { TOOLBAR } from "../../core/constants/editor.config";
declare var Quill: any;
@Component({
  selector: "ng-quill-editor",
  templateUrl: "./ng-quill-editor.component.html",
  styleUrls: ["./ng-quill-editor.component.css"]
})
export class NgQuillEditorComponent implements OnInit, AfterViewInit, OnChanges {

  editor: any;
  @Input() data: string;
  @Output() onContentChange: EventEmitter<string> = new EventEmitter();

  editorId: string = String(Math.ceil(Math.random() * 1000) + +new Date());
  constructor(private service: NgQuillService) {
  }

  ngOnInit() { }
  ngAfterViewInit(): void {
    Promise.all([
      this.service.loadCSS("quilljs"),
      this.service.loadJS("quilljs")
    ]).then(_ => {
      this.editor = new Quill(`#editor_${this.editorId}`, {
        modules: { toolbar: TOOLBAR },
        theme: "snow"
      });

      this.editor.setContents([]);
      this.editor.clipboard.dangerouslyPasteHTML(0, this.data || "");
      this.editor.on("text-change", (delta, oldDelta, source) => {
        this.onContentChange.emit(this.editor.root.innerHTML);
      });
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.editor) {
      this.editor.setContents([]);
      this.editor.clipboard.dangerouslyPasteHTML(0, this.data || "");
    }
  }
}
