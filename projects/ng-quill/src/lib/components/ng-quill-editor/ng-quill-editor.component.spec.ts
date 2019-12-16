import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgQuillEditorComponent } from './ng-quill-editor.component';

describe('NgQuillEditorComponent', () => {
  let component: NgQuillEditorComponent;
  let fixture: ComponentFixture<NgQuillEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgQuillEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgQuillEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
