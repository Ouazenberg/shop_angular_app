import { TestBed } from '@angular/core/testing';

import { UpdateCommandeService } from './update-commande.service';

describe('UpdateCommandeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UpdateCommandeService = TestBed.get(UpdateCommandeService);
    expect(service).toBeTruthy();
  });
});
