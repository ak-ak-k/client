import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mk1Component } from './mk1.component';

describe('Mk1Component', () => {
  let component: Mk1Component;
  let fixture: ComponentFixture<Mk1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Mk1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Mk1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
