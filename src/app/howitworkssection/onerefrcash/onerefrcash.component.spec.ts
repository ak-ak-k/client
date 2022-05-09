import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnerefrcashComponent } from './onerefrcash.component';

describe('OnerefrcashComponent', () => {
  let component: OnerefrcashComponent;
  let fixture: ComponentFixture<OnerefrcashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnerefrcashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnerefrcashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
