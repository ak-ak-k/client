import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvocaseyComponent } from './advocasey.component';

describe('AdvocaseyComponent', () => {
  let component: AdvocaseyComponent;
  let fixture: ComponentFixture<AdvocaseyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvocaseyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvocaseyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
