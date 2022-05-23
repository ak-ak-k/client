import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineofflineconditionsComponent } from './onlineofflineconditions.component';

describe('OnlineofflineconditionsComponent', () => {
  let component: OnlineofflineconditionsComponent;
  let fixture: ComponentFixture<OnlineofflineconditionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnlineofflineconditionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlineofflineconditionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
