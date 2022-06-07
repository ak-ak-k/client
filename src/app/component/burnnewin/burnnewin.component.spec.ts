import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BurnnewinComponent } from './burnnewin.component';

describe('BurnnewinComponent', () => {
  let component: BurnnewinComponent;
  let fixture: ComponentFixture<BurnnewinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BurnnewinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BurnnewinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
