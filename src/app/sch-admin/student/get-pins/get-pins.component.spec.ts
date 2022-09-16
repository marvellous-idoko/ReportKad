import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetPinsComponent } from './get-pins.component';

describe('GetPinsComponent', () => {
  let component: GetPinsComponent;
  let fixture: ComponentFixture<GetPinsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetPinsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetPinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
