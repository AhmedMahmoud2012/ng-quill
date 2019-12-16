import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data: string = '';
  title = 'example';


  onContentChange(data) {
    this.data = data;
  }
}
