import { TestBed } from '@angular/core/testing';

import { PubliciteService } from './publicite.service';

describe('PublisiteService', () => {
  let service: PubliciteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PubliciteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
