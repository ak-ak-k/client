import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersectionComponent } from './ordersection.component';

describe('OrdersectionComponent', () => {
  let component: OrdersectionComponent;
  let fixture: ComponentFixture<OrdersectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
