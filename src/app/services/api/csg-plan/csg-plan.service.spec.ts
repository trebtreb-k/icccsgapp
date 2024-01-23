import { TestBed } from '@angular/core/testing';

import { CsgPlanService } from './csg-plan.service';

describe('CsgPlanService', () => {
  let service: CsgPlanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CsgPlanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
