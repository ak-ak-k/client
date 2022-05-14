import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfflineStoreComponent } from './offline-store.component';

describe('OfflineStoreComponent', () => {
  let component: OfflineStoreComponent;
  let fixture: ComponentFixture<OfflineStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfflineStoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfflineStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
