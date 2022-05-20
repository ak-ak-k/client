import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentcampaignsComponent } from './recentcampaigns.component';

describe('RecentcampaignsComponent', () => {
  let component: RecentcampaignsComponent;
  let fixture: ComponentFixture<RecentcampaignsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecentcampaignsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentcampaignsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
