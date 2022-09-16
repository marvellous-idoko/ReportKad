import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTeacherInfoComponent } from './update-teacher-info.component';

describe('UpdateTeacherInfoComponent', () => {
  let component: UpdateTeacherInfoComponent;
  let fixture: ComponentFixture<UpdateTeacherInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateTeacherInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateTeacherInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
