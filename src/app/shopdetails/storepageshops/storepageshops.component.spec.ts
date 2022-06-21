import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StorepageshopsComponent } from './storepageshops.component';

describe('StorepageshopsComponent', () => {
  let component: StorepageshopsComponent;
  let fixture: ComponentFixture<StorepageshopsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StorepageshopsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StorepageshopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
