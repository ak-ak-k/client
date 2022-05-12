import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mk2Component } from './mk2.component';

describe('Mk2Component', () => {
  let component: Mk2Component;
  let fixture: ComponentFixture<Mk2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Mk2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Mk2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
