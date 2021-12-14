import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ASAnalysisComponent } from './asanalysis.component';

describe('ASAnalysisComponent', () => {
  let component: ASAnalysisComponent;
  let fixture: ComponentFixture<ASAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ASAnalysisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ASAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
