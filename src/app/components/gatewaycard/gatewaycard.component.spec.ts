import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GatewaycardComponent } from './gatewaycard.component';

describe('GatewaycardComponent', () => {
  let component: GatewaycardComponent;
  let fixture: ComponentFixture<GatewaycardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GatewaycardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GatewaycardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
