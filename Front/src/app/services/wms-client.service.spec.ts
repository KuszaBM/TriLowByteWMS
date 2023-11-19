import { TestBed } from '@angular/core/testing';

import { WmsClientService } from './wms-client.service';

describe('WmsClientService', () => {
  let service: WmsClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WmsClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
