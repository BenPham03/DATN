import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecializationManagermentComponent } from './specialization-managerment.component';

describe('SpecializationManagermentComponent', () => {
  let component: SpecializationManagermentComponent;
  let fixture: ComponentFixture<SpecializationManagermentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpecializationManagermentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecializationManagermentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
