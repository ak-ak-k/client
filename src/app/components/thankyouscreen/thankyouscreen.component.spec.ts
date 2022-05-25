import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThankyouscreenComponent } from './thankyouscreen.component';

describe('ThankyouscreenComponent', () => {
  let component: ThankyouscreenComponent;
  let fixture: ComponentFixture<ThankyouscreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThankyouscreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThankyouscreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
