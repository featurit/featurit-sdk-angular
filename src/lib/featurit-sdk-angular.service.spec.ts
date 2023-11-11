import { TestBed } from '@angular/core/testing';

import { FeaturitService } from './featurit-sdk-angular.service';

describe('FeaturitService', () => {
  let service: FeaturitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FeaturitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
