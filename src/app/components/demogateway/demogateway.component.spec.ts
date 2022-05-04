import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemogatewayComponent } from './demogateway.component';

describe('DemogatewayComponent', () => {
  let component: DemogatewayComponent;
  let fixture: ComponentFixture<DemogatewayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemogatewayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemogatewayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
