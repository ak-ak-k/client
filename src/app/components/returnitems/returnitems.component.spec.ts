import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnitemsComponent } from './returnitems.component';

describe('ReturnitemsComponent', () => {
  let component: ReturnitemsComponent;
  let fixture: ComponentFixture<ReturnitemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReturnitemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReturnitemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
