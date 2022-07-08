import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelsectionComponent } from './levelsection.component';

describe('LevelsectionComponent', () => {
  let component: LevelsectionComponent;
  let fixture: ComponentFixture<LevelsectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LevelsectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LevelsectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
