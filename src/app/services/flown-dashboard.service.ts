import { Injectable } from '@angular/core';
import {Dashboard, DatePeriod} from '../models/dashboard.model';

@Injectable({
  providedIn: 'root'
})
export class FlownDashboardService {

  private readonly dash: Dashboard = {
    id: 33,
    name: 'Flown',
    description: 'This is the famous flown dashboard -- which flew away',
    period: {
      start: '11/11/1221',
      end: '22/22/2112'
    },
    blocks: [
      {
        id: 1,
        title: 'No flight',
        items: ['Item 1', 'Item 2']
      },
      {
        id: 2,
        title: 'Cancelled',
        items: ['Item 3', 'Item 4']
      },
      {
        id: 3,
        title: 'Airport',
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
      name: 'FLOWN saved',
      description: 'This is the famous flown dashboard -- which flew away -- and blew my mind'
    };
  }

}
