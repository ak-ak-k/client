import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WallethowitworkComponent } from './wallethowitwork.component';

describe('WallethowitworkComponent', () => {
  let component: WallethowitworkComponent;
  let fixture: ComponentFixture<WallethowitworkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WallethowitworkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WallethowitworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
