import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedeemofflineComponent } from './redeemoffline.component';

describe('RedeemofflineComponent', () => {
  let component: RedeemofflineComponent;
  let fixture: ComponentFixture<RedeemofflineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedeemofflineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RedeemofflineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
