import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewgatewaycardComponent } from './newgatewaycard.component';

describe('NewgatewaycardComponent', () => {
  let component: NewgatewaycardComponent;
  let fixture: ComponentFixture<NewgatewaycardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewgatewaycardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewgatewaycardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
