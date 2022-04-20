import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Refrcash1Component } from './refrcash1.component';

describe('Refrcash1Component', () => {
  let component: Refrcash1Component;
  let fixture: ComponentFixture<Refrcash1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Refrcash1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Refrcash1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
