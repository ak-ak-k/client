import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminburnComponent } from './adminburn.component';

describe('AdminburnComponent', () => {
  let component: AdminburnComponent;
  let fixture: ComponentFixture<AdminburnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminburnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminburnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
