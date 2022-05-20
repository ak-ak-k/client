import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorygroupComponent } from './categorygroup.component';

describe('CategorygroupComponent', () => {
  let component: CategorygroupComponent;
  let fixture: ComponentFixture<CategorygroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategorygroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategorygroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
