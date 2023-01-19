import { TestBed } from '@angular/core/testing';

import { SamelevelService } from './samelevel.service';

describe('SamelevelService', () => {
  let service: SamelevelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SamelevelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
