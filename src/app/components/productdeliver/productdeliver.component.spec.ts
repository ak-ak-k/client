import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductdeliverComponent } from './productdeliver.component';

describe('ProductdeliverComponent', () => {
  let component: ProductdeliverComponent;
  let fixture: ComponentFixture<ProductdeliverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductdeliverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductdeliverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
