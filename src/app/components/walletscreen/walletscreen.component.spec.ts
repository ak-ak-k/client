import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WalletscreenComponent } from './walletscreen.component';

describe('WalletscreenComponent', () => {
  let component: WalletscreenComponent;
  let fixture: ComponentFixture<WalletscreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WalletscreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WalletscreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
