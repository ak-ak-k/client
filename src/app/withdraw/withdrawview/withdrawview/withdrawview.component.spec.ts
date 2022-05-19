import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithdrawviewComponent } from './withdrawview.component';

describe('WithdrawviewComponent', () => {
  let component: WithdrawviewComponent;
  let fixture: ComponentFixture<WithdrawviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WithdrawviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WithdrawviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
