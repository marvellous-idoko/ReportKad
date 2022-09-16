import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromoteStdntComponent } from './promote-stdnt.component';

describe('PromoteStdntComponent', () => {
  let component: PromoteStdntComponent;
  let fixture: ComponentFixture<PromoteStdntComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromoteStdntComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromoteStdntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
