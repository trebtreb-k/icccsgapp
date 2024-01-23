import { TestBed } from '@angular/core/testing';

import { CheckInoutService } from './check-inout.service';

describe('CheckInoutService', () => {
  let service: CheckInoutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CheckInoutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
