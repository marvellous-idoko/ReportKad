import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchAdminDboardComponent } from './sch-admin-dboard.component';

describe('SchAdminDboardComponent', () => {
  let component: SchAdminDboardComponent;
  let fixture: ComponentFixture<SchAdminDboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchAdminDboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchAdminDboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
