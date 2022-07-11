import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchantwalletComponent } from './merchantwallet.component';

describe('MerchantwalletComponent', () => {
  let component: MerchantwalletComponent;
  let fixture: ComponentFixture<MerchantwalletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MerchantwalletComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MerchantwalletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
