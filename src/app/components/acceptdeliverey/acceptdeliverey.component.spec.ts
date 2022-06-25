import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptdelivereyComponent } from './acceptdeliverey.component';

describe('AcceptdelivereyComponent', () => {
  let component: AcceptdelivereyComponent;
  let fixture: ComponentFixture<AcceptdelivereyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcceptdelivereyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcceptdelivereyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
