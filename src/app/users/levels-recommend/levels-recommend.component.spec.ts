import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelsRecommendComponent } from './levels-recommend.component';

describe('LevelsRecommendComponent', () => {
  let component: LevelsRecommendComponent;
  let fixture: ComponentFixture<LevelsRecommendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LevelsRecommendComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LevelsRecommendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
