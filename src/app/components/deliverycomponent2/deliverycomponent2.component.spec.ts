import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Deliverycomponent2Component } from './deliverycomponent2.component';

describe('Deliverycomponent2Component', () => {
  let component: Deliverycomponent2Component;
  let fixture: ComponentFixture<Deliverycomponent2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Deliverycomponent2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Deliverycomponent2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
