import { TestBed } from '@angular/core/testing';
import { UniqueDeviceIdService } from './unique-device-id.service';

describe('UniqueDeviceIdService', () => {
  let service: UniqueDeviceIdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UniqueDeviceIdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
