import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurriculumSubjectManagementComponent } from './curriculum-subject-management.component';

describe('CurriculumSubjectManagementComponent', () => {
  let component: CurriculumSubjectManagementComponent;
  let fixture: ComponentFixture<CurriculumSubjectManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CurriculumSubjectManagementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurriculumSubjectManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
