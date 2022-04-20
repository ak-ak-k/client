import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalonSpaComponent } from './salon-spa.component';

describe('SalonSpaComponent', () => {
  let component: SalonSpaComponent;
  let fixture: ComponentFixture<SalonSpaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalonSpaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalonSpaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
