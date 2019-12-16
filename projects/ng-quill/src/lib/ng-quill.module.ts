import { NgModule } from "@angular/core";
import { NgQuillViewComponent } from './components/ng-quill-view/ng-quill-view.component';
import { NgQuillEditorComponent } from './components/ng-quill-editor/ng-quill-editor.component';

@NgModule({
  declarations: [NgQuillEditorComponent, NgQuillViewComponent],
  imports: [],
  exports: [NgQuillEditorComponent, NgQuillViewComponent]
})
export class NgQuillModule { }
