import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreproductpageComponent } from './storeproductpage.component';

describe('StoreproductpageComponent', () => {
  let component: StoreproductpageComponent;
  let fixture: ComponentFixture<StoreproductpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoreproductpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreproductpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
