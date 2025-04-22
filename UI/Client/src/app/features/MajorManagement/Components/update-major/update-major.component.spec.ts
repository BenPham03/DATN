import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateMajorComponent } from './update-major.component';

describe('UpdateMajorComponent', () => {
  let component: UpdateMajorComponent;
  let fixture: ComponentFixture<UpdateMajorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateMajorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateMajorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
