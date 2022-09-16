import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchAdminSideNavComponent } from './sch-admin-side-nav.component';

describe('SchAdminSideNavComponent', () => {
  let component: SchAdminSideNavComponent;
  let fixture: ComponentFixture<SchAdminSideNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchAdminSideNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchAdminSideNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
