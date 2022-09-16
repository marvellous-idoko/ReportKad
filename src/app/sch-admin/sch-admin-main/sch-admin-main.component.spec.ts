import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchAdminMainComponent } from './sch-admin-main.component';

describe('SchAdminMainComponent', () => {
  let component: SchAdminMainComponent;
  let fixture: ComponentFixture<SchAdminMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchAdminMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchAdminMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
