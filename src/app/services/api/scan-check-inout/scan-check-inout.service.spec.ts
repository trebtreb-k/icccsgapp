import { TestBed } from '@angular/core/testing';

import { ScanCheckInoutService } from './scan-check-inout.service';

describe('ScanCheckInoutService', () => {
  let service: ScanCheckInoutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScanCheckInoutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
