import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilewalletsComponent } from './profilewallets.component';

describe('ProfilewalletsComponent', () => {
  let component: ProfilewalletsComponent;
  let fixture: ComponentFixture<ProfilewalletsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilewalletsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilewalletsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
