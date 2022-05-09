import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VocallocalComponent } from './vocallocal.component';

describe('VocallocalComponent', () => {
  let component: VocallocalComponent;
  let fixture: ComponentFixture<VocallocalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VocallocalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VocallocalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
