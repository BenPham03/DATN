import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurriculumManagamentComponent } from './curriculum-managament.component';

describe('CurriculumManagamentComponent', () => {
  let component: CurriculumManagamentComponent;
  let fixture: ComponentFixture<CurriculumManagamentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CurriculumManagamentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurriculumManagamentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
