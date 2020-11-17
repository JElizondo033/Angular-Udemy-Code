import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessAlert } from './success-alert.component';

describe('SuccessAlertComponent', () => {
  let component: SuccessAlert;
  let fixture: ComponentFixture<SuccessAlert>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuccessAlert ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessAlert);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
