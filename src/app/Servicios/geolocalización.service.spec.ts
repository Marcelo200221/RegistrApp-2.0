import { TestBed } from '@angular/core/testing';

import { GeolocalizaciónService } from './geolocalización.service';

describe('GeolocalizaciónService', () => {
  let service: GeolocalizaciónService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeolocalizaciónService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
