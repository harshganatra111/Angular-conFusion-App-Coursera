import { TestBed } from '@angular/core/testing';

import { CorporateLeadersService } from './corporate-leaders.service';

describe('CorporateLeadersService', () => {
  let service: CorporateLeadersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CorporateLeadersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
