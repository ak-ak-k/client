import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartedrefrComponent } from './startedrefr.component';

describe('StartedrefrComponent', () => {
  let component: StartedrefrComponent;
  let fixture: ComponentFixture<StartedrefrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartedrefrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StartedrefrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
