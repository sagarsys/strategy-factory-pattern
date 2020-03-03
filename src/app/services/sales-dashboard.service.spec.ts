import { TestBed } from '@angular/core/testing';

import { SalesDashboardService } from './sales-dashboard.service';

describe('SalesDashboardService', () => {
  let service: SalesDashboardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SalesDashboardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
