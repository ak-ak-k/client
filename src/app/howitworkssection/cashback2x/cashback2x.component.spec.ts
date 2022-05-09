import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cashback2xComponent } from './cashback2x.component';

describe('Cashback2xComponent', () => {
  let component: Cashback2xComponent;
  let fixture: ComponentFixture<Cashback2xComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cashback2xComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cashback2xComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
