import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchAdminActivateAcctComponent } from './sch-admin-activate-acct.component';

describe('SchAdminActivateAcctComponent', () => {
  let component: SchAdminActivateAcctComponent;
  let fixture: ComponentFixture<SchAdminActivateAcctComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchAdminActivateAcctComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchAdminActivateAcctComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
