import {Dashboard, DatePeriod} from './dashboard.model';
import {Injectable, InjectionToken} from '@angular/core';
import {SalesDashboardService} from '../services/sales-dashboard.service';
import {FlownDashboardService} from '../services/flown-dashboard.service';

export const DASH_FACADE = 'DASH_FACADE';
const token = new InjectionToken(DASH_FACADE);

export enum MODULES {
  SALES = 'SALES',
  FLOWN = 'FLOWN'
}

export abstract class DashboardFacade {
  abstract supports(mod: MODULES): boolean;
  abstract search(query: DatePeriod): Dashboard;
  abstract save(dashboard: Dashboard): Dashboard;
}

@Injectable()
export class SalesDashboardFacade extends DashboardFacade {
  constructor(private dashboardService: SalesDashboardService) {
    super();
  }

  supports(mod: MODULES): boolean {
    return mod === MODULES.SALES;
  }

  search(query: DatePeriod): Dashboard {
    return this.dashboardService.search(query);
  }

  save(dashboard: Dashboard): Dashboard {
    return this.dashboardService.save(dashboard);
  }
}


@Injectable()
export class FlownDashboardFacade extends DashboardFacade {
  constructor(private dashboardService: FlownDashboardService) {
    super();
  }

  supports(mod: MODULES): boolean {
    return mod === MODULES.FLOWN;
  }

  search(query: DatePeriod): Dashboard {
    return this.dashboardService.search(query);
  }

  save(dashboard: Dashboard): Dashboard {
    return this.dashboardService.save(dashboard);
  }
}
