import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchAdminUpdateTeacherInfoComponent } from './sch-admin-update-teacher-info.component';

describe('SchAdminUpdateTeacherInfoComponent', () => {
  let component: SchAdminUpdateTeacherInfoComponent;
  let fixture: ComponentFixture<SchAdminUpdateTeacherInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchAdminUpdateTeacherInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchAdminUpdateTeacherInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
