import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReplaceitemsComponent } from './replaceitems.component';

describe('ReplaceitemsComponent', () => {
  let component: ReplaceitemsComponent;
  let fixture: ComponentFixture<ReplaceitemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReplaceitemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReplaceitemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
