import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefrFormComponent } from './refr-form.component';

describe('RefrFormComponent', () => {
  let component: RefrFormComponent;
  let fixture: ComponentFixture<RefrFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RefrFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RefrFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
