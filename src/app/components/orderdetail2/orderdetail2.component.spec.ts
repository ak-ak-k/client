import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Orderdetail2Component } from './orderdetail2.component';

describe('Orderdetail2Component', () => {
  let component: Orderdetail2Component;
  let fixture: ComponentFixture<Orderdetail2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Orderdetail2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Orderdetail2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
