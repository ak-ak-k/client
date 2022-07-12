import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharingscreenComponent } from './sharingscreen.component';

describe('SharingscreenComponent', () => {
  let component: SharingscreenComponent;
  let fixture: ComponentFixture<SharingscreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharingscreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SharingscreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
