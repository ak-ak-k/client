import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelivereyComponent } from './deliverey.component';

describe('DelivereyComponent', () => {
  let component: DelivereyComponent;
  let fixture: ComponentFixture<DelivereyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DelivereyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DelivereyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
