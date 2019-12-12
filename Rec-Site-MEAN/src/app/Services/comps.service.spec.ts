import { TestBed } from '@angular/core/testing';

import { CompsService } from './comps.service';

describe('CompsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CompsService = TestBed.get(CompsService);
    expect(service).toBeTruthy();
  });
});
