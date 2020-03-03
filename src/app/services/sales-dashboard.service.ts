import {Injectable} from '@angular/core';
import {Dashboard, DatePeriod} from '../models/dashboard.model';


@Injectable({
  providedIn: 'root'
})
export class SalesDashboardService {

  private readonly dash: Dashboard = {
    id: 1,
    name: 'Sales',
    description: 'This is the famous sales dashboard',
    period: {
      start: '11/11/1111',
      end: '22/22/2222'
    },
    blocks: [
      {
        id: 1,
        title: 'No valo',
        items: ['Item 1', 'Item 2']
      },
      {
        id: 2,
        title: 'Taxes',
        items: ['Item 3', 'Item 4']
      },
      {
        id: 3,
        title: 'Purchases',
        items: ['Item 5', 'Item 6']
      }
    ]
  };

  constructor() {}

  search(period: DatePeriod): Dashboard {
    return {
      ...this.dash,
      period
    };
  }

  save(dashboard: Dashboard): Dashboard {
    return {
      ...dashboard,
      name: 'Sales saved'
    };
  }
}
