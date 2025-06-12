import { TestBed } from '@angular/core/testing';

import { CurriculumSubjectService } from './curriculum-subject.service';

describe('CurriculumSubjectService', () => {
  let service: CurriculumSubjectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurriculumSubjectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
