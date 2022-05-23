import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfflinestoreComponent } from './offlinestore.component';

describe('OfflinestoreComponent', () => {
  let component: OfflinestoreComponent;
  let fixture: ComponentFixture<OfflinestoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfflinestoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfflinestoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
