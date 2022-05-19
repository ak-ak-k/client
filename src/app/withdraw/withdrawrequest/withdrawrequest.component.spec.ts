import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithdrawrequestComponent } from './withdrawrequest.component';

describe('WithdrawrequestComponent', () => {
  let component: WithdrawrequestComponent;
  let fixture: ComponentFixture<WithdrawrequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WithdrawrequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WithdrawrequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
