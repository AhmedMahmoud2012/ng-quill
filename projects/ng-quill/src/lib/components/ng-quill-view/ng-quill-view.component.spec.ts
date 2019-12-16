import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgQuillViewComponent } from './ng-quill-view.component';

describe('NgQuillViewComponent', () => {
  let component: NgQuillViewComponent;
  let fixture: ComponentFixture<NgQuillViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgQuillViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgQuillViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
