import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgQuillComponent } from './ng-quill.component';

describe('NgQuillComponent', () => {
  let component: NgQuillComponent;
  let fixture: ComponentFixture<NgQuillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgQuillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgQuillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
