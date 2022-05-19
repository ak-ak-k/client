import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithdrawupdateComponent } from './withdrawupdate.component';

describe('WithdrawupdateComponent', () => {
  let component: WithdrawupdateComponent;
  let fixture: ComponentFixture<WithdrawupdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WithdrawupdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WithdrawupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
