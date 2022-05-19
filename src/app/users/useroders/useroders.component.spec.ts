import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserodersComponent } from './useroders.component';

describe('UserodersComponent', () => {
  let component: UserodersComponent;
  let fixture: ComponentFixture<UserodersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserodersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserodersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
