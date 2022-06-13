import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomescreenheaderComponent } from './homescreenheader.component';

describe('HomescreenheaderComponent', () => {
  let component: HomescreenheaderComponent;
  let fixture: ComponentFixture<HomescreenheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomescreenheaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomescreenheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
