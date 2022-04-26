import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Orderdetail1Component } from './orderdetail1.component';

describe('Orderdetail1Component', () => {
  let component: Orderdetail1Component;
  let fixture: ComponentFixture<Orderdetail1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Orderdetail1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Orderdetail1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
