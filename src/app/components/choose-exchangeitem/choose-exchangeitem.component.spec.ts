import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseExchangeitemComponent } from './choose-exchangeitem.component';

describe('ChooseExchangeitemComponent', () => {
  let component: ChooseExchangeitemComponent;
  let fixture: ComponentFixture<ChooseExchangeitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChooseExchangeitemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseExchangeitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
