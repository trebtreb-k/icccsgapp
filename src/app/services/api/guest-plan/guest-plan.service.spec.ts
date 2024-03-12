import { TestBed } from '@angular/core/testing';

import { GuestPlanService } from './guest-plan.service';

describe('GuestPlanService', () => {
  let service: GuestPlanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GuestPlanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
