import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BurncashComponent } from './burncash.component';

describe('BurncashComponent', () => {
  let component: BurncashComponent;
  let fixture: ComponentFixture<BurncashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BurncashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BurncashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
