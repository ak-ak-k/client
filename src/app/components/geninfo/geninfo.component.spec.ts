import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeninfoComponent } from './geninfo.component';

describe('GeninfoComponent', () => {
  let component: GeninfoComponent;
  let fixture: ComponentFixture<GeninfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeninfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeninfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
