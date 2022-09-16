import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchAdminAddSubjectComponent } from './sch-admin-add-subject.component';

describe('SchAdminAddSubjectComponent', () => {
  let component: SchAdminAddSubjectComponent;
  let fixture: ComponentFixture<SchAdminAddSubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchAdminAddSubjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchAdminAddSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
