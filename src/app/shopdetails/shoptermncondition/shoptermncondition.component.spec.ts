import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoptermnconditionComponent } from './shoptermncondition.component';

describe('ShoptermnconditionComponent', () => {
  let component: ShoptermnconditionComponent;
  let fixture: ComponentFixture<ShoptermnconditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoptermnconditionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoptermnconditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
