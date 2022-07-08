import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomercodeComponent } from './customercode.component';

describe('CustomercodeComponent', () => {
  let component: CustomercodeComponent;
  let fixture: ComponentFixture<CustomercodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomercodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomercodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
