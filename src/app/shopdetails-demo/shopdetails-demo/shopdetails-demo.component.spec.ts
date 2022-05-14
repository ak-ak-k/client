import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopdetailsDemoComponent } from './shopdetails-demo.component';

describe('ShopdetailsDemoComponent', () => {
  let component: ShopdetailsDemoComponent;
  let fixture: ComponentFixture<ShopdetailsDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopdetailsDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopdetailsDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
