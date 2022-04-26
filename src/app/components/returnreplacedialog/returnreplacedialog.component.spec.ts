import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnreplacedialogComponent } from './returnreplacedialog.component';

describe('ReturnreplacedialogComponent', () => {
  let component: ReturnreplacedialogComponent;
  let fixture: ComponentFixture<ReturnreplacedialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReturnreplacedialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReturnreplacedialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
