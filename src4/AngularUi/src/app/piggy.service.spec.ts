import { TestBed } from '@angular/core/testing';

import { PiggyService } from './piggy.service';

describe('PiggyService', () => {
  let service: PiggyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PiggyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
