import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserViewallComponent } from './user-viewall.component';

describe('UserViewallComponent', () => {
  let component: UserViewallComponent;
  let fixture: ComponentFixture<UserViewallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserViewallComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserViewallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
