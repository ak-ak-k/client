import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowitworkbottompopupComponent } from './howitworkbottompopup.component';

describe('HowitworkbottompopupComponent', () => {
  let component: HowitworkbottompopupComponent;
  let fixture: ComponentFixture<HowitworkbottompopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HowitworkbottompopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HowitworkbottompopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
