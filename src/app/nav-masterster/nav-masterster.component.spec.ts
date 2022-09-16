import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavMastersterComponent } from './nav-masterster.component';

describe('NavMastersterComponent', () => {
  let component: NavMastersterComponent;
  let fixture: ComponentFixture<NavMastersterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavMastersterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavMastersterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
