import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BurnproductsComponent } from './burnproducts.component';

describe('BurnproductsComponent', () => {
  let component: BurnproductsComponent;
  let fixture: ComponentFixture<BurnproductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BurnproductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BurnproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
