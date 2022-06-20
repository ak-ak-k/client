import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomescreenwithbackComponent } from './homescreenwithback.component';

describe('HomescreenwithbackComponent', () => {
  let component: HomescreenwithbackComponent;
  let fixture: ComponentFixture<HomescreenwithbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomescreenwithbackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomescreenwithbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
