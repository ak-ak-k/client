import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaigncustomComponent } from './campaigncustom.component';

describe('CampaigncustomComponent', () => {
  let component: CampaigncustomComponent;
  let fixture: ComponentFixture<CampaigncustomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CampaigncustomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CampaigncustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
