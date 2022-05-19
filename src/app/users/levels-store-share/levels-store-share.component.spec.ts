import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelsStoreShareComponent } from './levels-store-share.component';

describe('LevelsStoreShareComponent', () => {
  let component: LevelsStoreShareComponent;
  let fixture: ComponentFixture<LevelsStoreShareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LevelsStoreShareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LevelsStoreShareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
