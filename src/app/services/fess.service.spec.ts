import { TestBed } from '@angular/core/testing';

import { FessService } from './fess.service';

describe('FessService', () => {
  let service: FessService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FessService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
