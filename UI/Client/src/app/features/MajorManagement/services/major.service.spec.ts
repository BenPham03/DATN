import { TestBed } from '@angular/core/testing';

import { MajorService } from './major-service.service';

describe('MajorService', () => {
  let service: MajorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MajorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
