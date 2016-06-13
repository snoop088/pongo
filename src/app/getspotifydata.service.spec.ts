import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { GetspotifydataService } from './getspotifydata.service';

describe('Getspotifydata Service', () => {
  beforeEachProviders(() => [GetspotifydataService]);

  it('should ...',
      inject([GetspotifydataService], (service: GetspotifydataService) => {
    expect(service).toBeTruthy();
  }));
});
