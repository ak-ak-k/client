import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Refrcash2Component } from './refrcash2.component';

describe('Refrcash2Component', () => {
  let component: Refrcash2Component;
  let fixture: ComponentFixture<Refrcash2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Refrcash2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Refrcash2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
