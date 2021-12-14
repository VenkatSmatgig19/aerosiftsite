import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StdProjectsComponent } from './std-projects.component';

describe('StdProjectsComponent', () => {
  let component: StdProjectsComponent;
  let fixture: ComponentFixture<StdProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StdProjectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StdProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
