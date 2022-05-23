import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BurnSectionComponent } from './burn-section.component';

describe('BurnSectionComponent', () => {
  let component: BurnSectionComponent;
  let fixture: ComponentFixture<BurnSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BurnSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BurnSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
