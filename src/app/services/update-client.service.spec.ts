import { TestBed } from '@angular/core/testing';

import { UpdateClientService } from './update-client.service';

describe('UpdateClientService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UpdateClientService = TestBed.get(UpdateClientService);
    expect(service).toBeTruthy();
  });
});
