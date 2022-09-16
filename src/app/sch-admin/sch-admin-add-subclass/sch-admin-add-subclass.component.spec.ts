import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchAdminAddSubclassComponent } from './sch-admin-add-subclass.component';

describe('SchAdminAddSubclassComponent', () => {
  let component: SchAdminAddSubclassComponent;
  let fixture: ComponentFixture<SchAdminAddSubclassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchAdminAddSubclassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchAdminAddSubclassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
