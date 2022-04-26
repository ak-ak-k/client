import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Orderdetail3Component } from './orderdetail3.component';

describe('Orderdetail3Component', () => {
  let component: Orderdetail3Component;
  let fixture: ComponentFixture<Orderdetail3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Orderdetail3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Orderdetail3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
