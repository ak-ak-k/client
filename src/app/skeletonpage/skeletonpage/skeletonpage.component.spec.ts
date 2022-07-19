import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkeletonpageComponent } from './skeletonpage.component';

describe('SkeletonpageComponent', () => {
  let component: SkeletonpageComponent;
  let fixture: ComponentFixture<SkeletonpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkeletonpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkeletonpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
