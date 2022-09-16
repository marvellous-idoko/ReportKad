import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchAdminAddStudentComponent } from './sch-admin-add-student.component';

describe('SchAdminAddStudentComponent', () => {
  let component: SchAdminAddStudentComponent;
  let fixture: ComponentFixture<SchAdminAddStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchAdminAddStudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchAdminAddStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
