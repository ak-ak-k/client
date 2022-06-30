import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeautyproductComponent } from './beautyproduct.component';

describe('BeautyproductComponent', () => {
  let component: BeautyproductComponent;
  let fixture: ComponentFixture<BeautyproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeautyproductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeautyproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
