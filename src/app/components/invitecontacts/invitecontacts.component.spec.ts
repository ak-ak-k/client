import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvitecontactsComponent } from './invitecontacts.component';

describe('InvitecontactsComponent', () => {
  let component: InvitecontactsComponent;
  let fixture: ComponentFixture<InvitecontactsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvitecontactsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvitecontactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
