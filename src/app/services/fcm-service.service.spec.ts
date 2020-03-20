import { TestBed } from '@angular/core/testing';

import { FcmServiceService } from './fcm-service.service';

describe('FcmServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FcmServiceService = TestBed.get(FcmServiceService);
    expect(service).toBeTruthy();
  });
});
