import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Orderdetail5Component } from './orderdetail5.component';

describe('Orderdetail5Component', () => {
  let component: Orderdetail5Component;
  let fixture: ComponentFixture<Orderdetail5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Orderdetail5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Orderdetail5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
