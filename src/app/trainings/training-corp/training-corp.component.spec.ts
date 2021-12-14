import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingCorpComponent } from './training-corp.component';

describe('TrainingCorpComponent', () => {
  let component: TrainingCorpComponent;
  let fixture: ComponentFixture<TrainingCorpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainingCorpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingCorpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
