import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NgQuillModule } from "../../../ng-quill/src/public-api";
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, NgQuillModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
