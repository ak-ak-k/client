import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogXComponent } from './dialog-x.component';

describe('DialogXComponent', () => {
  let component: DialogXComponent;
  let fixture: ComponentFixture<DialogXComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogXComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogXComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
