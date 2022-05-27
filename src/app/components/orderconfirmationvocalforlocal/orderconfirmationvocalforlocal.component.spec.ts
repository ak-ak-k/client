import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderconfirmationvocalforlocalComponent } from './orderconfirmationvocalforlocal.component';

describe('OrderconfirmationvocalforlocalComponent', () => {
  let component: OrderconfirmationvocalforlocalComponent;
  let fixture: ComponentFixture<OrderconfirmationvocalforlocalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderconfirmationvocalforlocalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderconfirmationvocalforlocalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
