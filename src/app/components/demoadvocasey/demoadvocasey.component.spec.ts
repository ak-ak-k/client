import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoadvocaseyComponent } from './demoadvocasey.component';

describe('DemoadvocaseyComponent', () => {
  let component: DemoadvocaseyComponent;
  let fixture: ComponentFixture<DemoadvocaseyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoadvocaseyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoadvocaseyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
