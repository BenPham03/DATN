import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCurriculumComponent } from './update-curriculum.component';

describe('UpdateCurriculumComponent', () => {
  let component: UpdateCurriculumComponent;
  let fixture: ComponentFixture<UpdateCurriculumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateCurriculumComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateCurriculumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
