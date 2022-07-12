import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactbottomsheetComponent } from './contactbottomsheet.component';

describe('ContactbottomsheetComponent', () => {
  let component: ContactbottomsheetComponent;
  let fixture: ComponentFixture<ContactbottomsheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactbottomsheetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactbottomsheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
