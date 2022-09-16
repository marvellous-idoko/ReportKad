import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchAdminComponent } from './sch-admin.component';

describe('SchAdminComponent', () => {
  let component: SchAdminComponent;
  let fixture: ComponentFixture<SchAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
