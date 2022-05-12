import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReplacedetailsComponent } from './replacedetails.component';

describe('ReplacedetailsComponent', () => {
  let component: ReplacedetailsComponent;
  let fixture: ComponentFixture<ReplacedetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReplacedetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReplacedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
