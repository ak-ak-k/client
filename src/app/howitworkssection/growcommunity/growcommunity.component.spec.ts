import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrowcommunityComponent } from './growcommunity.component';

describe('GrowcommunityComponent', () => {
  let component: GrowcommunityComponent;
  let fixture: ComponentFixture<GrowcommunityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrowcommunityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrowcommunityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
