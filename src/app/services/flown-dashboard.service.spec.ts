import { TestBed } from '@angular/core/testing';

import { FlownDashboardService } from './flown-dashboard.service';

describe('FlownDashboardService', () => {
  let service: FlownDashboardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlownDashboardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
