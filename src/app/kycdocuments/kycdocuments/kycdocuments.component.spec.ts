import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KycdocumentsComponent } from './kycdocuments.component';

describe('KycdocumentsComponent', () => {
  let component: KycdocumentsComponent;
  let fixture: ComponentFixture<KycdocumentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KycdocumentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KycdocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
