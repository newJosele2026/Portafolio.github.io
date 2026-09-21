import { TestBed } from '@angular/core/testing';

import { ServicesWompi } from './servicesWompi';

describe('Services', () => {
  let service: ServicesWompi;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicesWompi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
