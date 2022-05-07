import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeeasystepsComponent } from './threeeasysteps.component';

describe('ThreeeasystepsComponent', () => {
  let component: ThreeeasystepsComponent;
  let fixture: ComponentFixture<ThreeeasystepsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThreeeasystepsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreeeasystepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
