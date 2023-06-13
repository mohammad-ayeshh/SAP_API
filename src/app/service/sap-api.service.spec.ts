import { TestBed } from '@angular/core/testing';

import { SapApiService } from './sap-api.service';

describe('SapApiService', () => {
  let service: SapApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SapApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
