import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionusersComponent } from './transactionusers.component';

describe('TransactionusersComponent', () => {
  let component: TransactionusersComponent;
  let fixture: ComponentFixture<TransactionusersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactionusersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionusersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
