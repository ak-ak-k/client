import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefrcashComponent } from './refrcash.component';

describe('RefrcashComponent', () => {
  let component: RefrcashComponent;
  let fixture: ComponentFixture<RefrcashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RefrcashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RefrcashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
