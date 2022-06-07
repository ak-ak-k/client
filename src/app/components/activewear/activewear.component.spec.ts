import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivewearComponent } from './activewear.component';

describe('ActivewearComponent', () => {
  let component: ActivewearComponent;
  let fixture: ComponentFixture<ActivewearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivewearComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivewearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
