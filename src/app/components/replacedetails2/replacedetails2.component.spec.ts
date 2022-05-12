import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Replacedetails2Component } from './replacedetails2.component';

describe('Replacedetails2Component', () => {
  let component: Replacedetails2Component;
  let fixture: ComponentFixture<Replacedetails2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Replacedetails2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Replacedetails2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
