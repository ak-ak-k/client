import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlinestoreconditionsComponent } from './onlinestoreconditions.component';

describe('OnlinestoreconditionsComponent', () => {
  let component: OnlinestoreconditionsComponent;
  let fixture: ComponentFixture<OnlinestoreconditionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnlinestoreconditionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlinestoreconditionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
