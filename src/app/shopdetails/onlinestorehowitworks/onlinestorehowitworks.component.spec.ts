import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlinestorehowitworksComponent } from './onlinestorehowitworks.component';

describe('OnlinestorehowitworksComponent', () => {
  let component: OnlinestorehowitworksComponent;
  let fixture: ComponentFixture<OnlinestorehowitworksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnlinestorehowitworksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlinestorehowitworksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
