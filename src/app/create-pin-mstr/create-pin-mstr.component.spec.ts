import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePinMstrComponent } from './create-pin-mstr.component';

describe('CreatePinMstrComponent', () => {
  let component: CreatePinMstrComponent;
  let fixture: ComponentFixture<CreatePinMstrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatePinMstrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePinMstrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
