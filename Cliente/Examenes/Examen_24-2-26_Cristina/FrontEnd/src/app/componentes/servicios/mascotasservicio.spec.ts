import { TestBed } from '@angular/core/testing';

import { Mascotasservicio } from './mascotasservicio';

describe('Mascotasservicio', () => {
  let service: Mascotasservicio;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Mascotasservicio);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
