import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Orderdetail6Component } from './orderdetail6.component';

describe('Orderdetail6Component', () => {
  let component: Orderdetail6Component;
  let fixture: ComponentFixture<Orderdetail6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Orderdetail6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Orderdetail6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
