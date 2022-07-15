import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvitetorefrComponent } from './invitetorefr.component';

describe('InvitetorefrComponent', () => {
  let component: InvitetorefrComponent;
  let fixture: ComponentFixture<InvitetorefrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvitetorefrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvitetorefrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
