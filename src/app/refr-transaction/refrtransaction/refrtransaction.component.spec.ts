import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefrtransactionComponent } from './refrtransaction.component';

describe('RefrtransactionComponent', () => {
  let component: RefrtransactionComponent;
  let fixture: ComponentFixture<RefrtransactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RefrtransactionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RefrtransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
