import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsertranscationComponent } from './usertranscation.component';

describe('UsertranscationComponent', () => {
  let component: UsertranscationComponent;
  let fixture: ComponentFixture<UsertranscationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsertranscationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsertranscationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
