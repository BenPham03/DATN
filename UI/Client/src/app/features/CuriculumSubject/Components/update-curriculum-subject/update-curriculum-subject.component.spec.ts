import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCurriculumSubjectComponent } from './update-curriculum-subject.component';

describe('UpdateCurriculumSubjectComponent', () => {
  let component: UpdateCurriculumSubjectComponent;
  let fixture: ComponentFixture<UpdateCurriculumSubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateCurriculumSubjectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateCurriculumSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
