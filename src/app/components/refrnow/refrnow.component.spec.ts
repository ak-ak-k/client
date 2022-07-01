import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefrnowComponent } from './refrnow.component';

describe('RefrnowComponent', () => {
  let component: RefrnowComponent;
  let fixture: ComponentFixture<RefrnowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RefrnowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RefrnowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
