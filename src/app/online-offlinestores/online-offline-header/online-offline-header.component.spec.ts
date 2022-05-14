import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineOfflineHeaderComponent } from './online-offline-header.component';

describe('OnlineOfflineHeaderComponent', () => {
  let component: OnlineOfflineHeaderComponent;
  let fixture: ComponentFixture<OnlineOfflineHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnlineOfflineHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlineOfflineHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
