import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnFashionComponent } from './on-fashion.component';

describe('OnFashionComponent', () => {
  let component: OnFashionComponent;
  let fixture: ComponentFixture<OnFashionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnFashionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnFashionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
