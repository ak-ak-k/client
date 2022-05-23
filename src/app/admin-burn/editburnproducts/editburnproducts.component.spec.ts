import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditburnproductsComponent } from './editburnproducts.component';

describe('EditburnproductsComponent', () => {
  let component: EditburnproductsComponent;
  let fixture: ComponentFixture<EditburnproductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditburnproductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditburnproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
