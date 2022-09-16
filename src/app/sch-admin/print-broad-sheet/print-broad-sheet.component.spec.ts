import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintBroadSheetComponent } from './print-broad-sheet.component';

describe('PrintBroadSheetComponent', () => {
  let component: PrintBroadSheetComponent;
  let fixture: ComponentFixture<PrintBroadSheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrintBroadSheetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintBroadSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
