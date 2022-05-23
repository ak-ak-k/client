import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoadminComponent } from './demoadmin.component';

describe('DemoadminComponent', () => {
  let component: DemoadminComponent;
  let fixture: ComponentFixture<DemoadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoadminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
