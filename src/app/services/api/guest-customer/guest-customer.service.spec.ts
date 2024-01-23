import { TestBed } from '@angular/core/testing';

import { GuestCustomerService } from './guest-customer.service';

describe('GuestCustomerService', () => {
  let service: GuestCustomerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GuestCustomerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
