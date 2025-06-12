import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCurriculumSubjectComponent } from './add-curriculum-subject.component';

describe('AddCurriculumSubjectComponent', () => {
  let component: AddCurriculumSubjectComponent;
  let fixture: ComponentFixture<AddCurriculumSubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddCurriculumSubjectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCurriculumSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
