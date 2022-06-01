import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreoverviewComponent } from './storeoverview.component';

describe('StoreoverviewComponent', () => {
  let component: StoreoverviewComponent;
  let fixture: ComponentFixture<StoreoverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoreoverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreoverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
