import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ng-quill-view',
  templateUrl: './ng-quill-view.component.html',
  styleUrls: ['./ng-quill-view.component.css'],
})
export class NgQuillViewComponent implements OnInit {
  @Input() innerHTML: string;
  constructor() { }

  ngOnInit() {
  }

}
