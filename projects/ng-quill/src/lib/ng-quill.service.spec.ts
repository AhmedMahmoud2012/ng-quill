import { TestBed } from '@angular/core/testing';

import { NgQuillService } from './ng-quill.service';

describe('NgQuillService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgQuillService = TestBed.get(NgQuillService);
    expect(service).toBeTruthy();
  });
});
