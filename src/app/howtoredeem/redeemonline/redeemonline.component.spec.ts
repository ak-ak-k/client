import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedeemonlineComponent } from './redeemonline.component';

describe('RedeemonlineComponent', () => {
  let component: RedeemonlineComponent;
  let fixture: ComponentFixture<RedeemonlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedeemonlineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RedeemonlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
