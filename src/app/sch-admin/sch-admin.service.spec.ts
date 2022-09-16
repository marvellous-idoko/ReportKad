import { TestBed } from '@angular/core/testing';

import { SchAdminService } from './sch-admin.service';

describe('SchAdminService', () => {
  let service: SchAdminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SchAdminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
