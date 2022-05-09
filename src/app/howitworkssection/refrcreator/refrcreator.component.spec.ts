import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefrcreatorComponent } from './refrcreator.component';

describe('RefrcreatorComponent', () => {
  let component: RefrcreatorComponent;
  let fixture: ComponentFixture<RefrcreatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RefrcreatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RefrcreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
