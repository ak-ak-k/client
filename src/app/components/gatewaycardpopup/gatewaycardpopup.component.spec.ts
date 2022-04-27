import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GatewaycardpopupComponent } from './gatewaycardpopup.component';

describe('GatewaycardpopupComponent', () => {
  let component: GatewaycardpopupComponent;
  let fixture: ComponentFixture<GatewaycardpopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GatewaycardpopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GatewaycardpopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
