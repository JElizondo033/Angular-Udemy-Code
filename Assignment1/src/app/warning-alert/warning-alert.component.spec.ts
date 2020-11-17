import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WarningAlert } from './warning-alert.component';

describe('WarningAlertComponent', () => {
  let component: WarningAlert;
  let fixture: ComponentFixture<WarningAlert>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WarningAlert ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WarningAlert);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
