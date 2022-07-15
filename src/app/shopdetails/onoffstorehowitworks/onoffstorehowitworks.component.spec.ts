import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnoffstorehowitworksComponent } from './onoffstorehowitworks.component';

describe('OnoffstorehowitworksComponent', () => {
  let component: OnoffstorehowitworksComponent;
  let fixture: ComponentFixture<OnoffstorehowitworksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnoffstorehowitworksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnoffstorehowitworksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
