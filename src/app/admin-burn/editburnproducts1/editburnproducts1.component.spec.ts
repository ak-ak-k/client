import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Editburnproducts1Component } from './editburnproducts1.component';

describe('Editburnproducts1Component', () => {
  let component: Editburnproducts1Component;
  let fixture: ComponentFixture<Editburnproducts1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Editburnproducts1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Editburnproducts1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
