import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExculsiveproductsComponent } from './exculsiveproducts.component';

describe('ExculsiveproductsComponent', () => {
  let component: ExculsiveproductsComponent;
  let fixture: ComponentFixture<ExculsiveproductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExculsiveproductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExculsiveproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
