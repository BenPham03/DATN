import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSpecializationComponent } from './update-specialization.component';

describe('UpdateSpecializationComponent', () => {
  let component: UpdateSpecializationComponent;
  let fixture: ComponentFixture<UpdateSpecializationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateSpecializationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateSpecializationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
