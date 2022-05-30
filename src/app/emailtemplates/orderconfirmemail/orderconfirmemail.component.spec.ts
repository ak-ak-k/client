import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderconfirmemailComponent } from './orderconfirmemail.component';

describe('OrderconfirmemailComponent', () => {
  let component: OrderconfirmemailComponent;
  let fixture: ComponentFixture<OrderconfirmemailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderconfirmemailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderconfirmemailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
