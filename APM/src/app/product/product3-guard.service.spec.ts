import { TestBed, inject } from '@angular/core/testing';

import { Product3GuardService } from './product3-guard.service';

describe('Product3GuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Product3GuardService]
    });
  });

  it('should be created', inject([Product3GuardService], (service: Product3GuardService) => {
    expect(service).toBeTruthy();
  }));
});
