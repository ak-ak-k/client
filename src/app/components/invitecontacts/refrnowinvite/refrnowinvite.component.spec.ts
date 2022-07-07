import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefrnowinviteComponent } from './refrnowinvite.component';

describe('RefrnowinviteComponent', () => {
  let component: RefrnowinviteComponent;
  let fixture: ComponentFixture<RefrnowinviteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RefrnowinviteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RefrnowinviteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
