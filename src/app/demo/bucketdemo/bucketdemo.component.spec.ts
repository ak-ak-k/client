import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BucketdemoComponent } from './bucketdemo.component';

describe('BucketdemoComponent', () => {
  let component: BucketdemoComponent;
  let fixture: ComponentFixture<BucketdemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BucketdemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BucketdemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
