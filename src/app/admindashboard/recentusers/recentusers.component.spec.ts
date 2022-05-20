import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentusersComponent } from './recentusers.component';

describe('RecentusersComponent', () => {
  let component: RecentusersComponent;
  let fixture: ComponentFixture<RecentusersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecentusersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentusersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
