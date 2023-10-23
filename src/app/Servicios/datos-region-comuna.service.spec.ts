import { TestBed } from '@angular/core/testing';

import { DatosRegionComunaService } from './datos-region-comuna.service';

describe('DatosRegionComunaService', () => {
  let service: DatosRegionComunaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatosRegionComunaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
