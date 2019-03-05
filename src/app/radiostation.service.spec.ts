import { TestBed } from '@angular/core/testing';

import { RadiostationService } from './radiostation.service';

describe('RadiostationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RadiostationService = TestBed.get(RadiostationService);
    expect(service).toBeTruthy();
  });
});
