import { TestBed } from '@angular/core/testing';

import { LaunchDataService } from './launch-data.service';

describe('LaunchDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LaunchDataService = TestBed.get(LaunchDataService);
    expect(service).toBeTruthy();
  });
});
