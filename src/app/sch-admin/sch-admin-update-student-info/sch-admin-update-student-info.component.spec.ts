import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchAdminUpdateStudentInfoComponent } from './sch-admin-update-student-info.component';

describe('SchAdminUpdateStudentInfoComponent', () => {
  let component: SchAdminUpdateStudentInfoComponent;
  let fixture: ComponentFixture<SchAdminUpdateStudentInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchAdminUpdateStudentInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchAdminUpdateStudentInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
