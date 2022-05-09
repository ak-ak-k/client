import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefrlevelsComponent } from './refrlevels.component';

describe('RefrlevelsComponent', () => {
  let component: RefrlevelsComponent;
  let fixture: ComponentFixture<RefrlevelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RefrlevelsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RefrlevelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
