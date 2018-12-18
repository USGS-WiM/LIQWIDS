import { TestBed } from '@angular/core/testing';

import { LiqwidsService } from './liqwids.service';

describe('LiqwidsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LiqwidsService = TestBed.get(LiqwidsService);
    expect(service).toBeTruthy();
  });
});
