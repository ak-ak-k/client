import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Orderdetail4Component } from './orderdetail4.component';

describe('Orderdetail4Component', () => {
  let component: Orderdetail4Component;
  let fixture: ComponentFixture<Orderdetail4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Orderdetail4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Orderdetail4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
