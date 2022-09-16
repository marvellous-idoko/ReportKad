import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNavMasterComponent } from './side-nav-master.component';

describe('SideNavMasterComponent', () => {
  let component: SideNavMasterComponent;
  let fixture: ComponentFixture<SideNavMasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideNavMasterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideNavMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
