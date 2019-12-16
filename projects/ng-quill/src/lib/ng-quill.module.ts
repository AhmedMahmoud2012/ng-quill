import { NgModule } from "@angular/core";
import { NgQuillComponent } from "./ng-quill.component";
import { NgQuillEditorComponent } from "./components";

@NgModule({
  declarations: [NgQuillComponent, NgQuillEditorComponent],
  imports: [],
  exports: [NgQuillComponent, NgQuillEditorComponent]
})
export class NgQuillModule {}
