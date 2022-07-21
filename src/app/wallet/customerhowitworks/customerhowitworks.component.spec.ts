import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerhowitworksComponent } from './customerhowitworks.component';

describe('CustomerhowitworksComponent', () => {
  let component: CustomerhowitworksComponent;
  let fixture: ComponentFixture<CustomerhowitworksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerhowitworksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerhowitworksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
