import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BurnabcComponent } from './burnabc.component';

describe('BurnabcComponent', () => {
  let component: BurnabcComponent;
  let fixture: ComponentFixture<BurnabcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BurnabcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BurnabcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
