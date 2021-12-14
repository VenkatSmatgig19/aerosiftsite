import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingIndComponent } from './training-ind.component';

describe('TrainingIndComponent', () => {
  let component: TrainingIndComponent;
  let fixture: ComponentFixture<TrainingIndComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainingIndComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingIndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
