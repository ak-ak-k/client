import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfflinestorehowitworksComponent } from './offlinestorehowitworks.component';

describe('OfflinestorehowitworksComponent', () => {
  let component: OfflinestorehowitworksComponent;
  let fixture: ComponentFixture<OfflinestorehowitworksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfflinestorehowitworksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfflinestorehowitworksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
