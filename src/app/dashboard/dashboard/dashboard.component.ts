import {Component, OnInit} from '@angular/core';
import {DashboardFacade, MODULES} from '../../models/dashboard.facade';
import {DashboardFactory} from '../../models/dashboard.factory';
import {Dashboard} from '../../models/dashboard.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  facade: DashboardFacade;
  dashboard: Dashboard;

  constructor(private factory: DashboardFactory) {}

  ngOnInit(): void {
    this.setModAndFacade();
  }

  setModAndFacade(mod: MODULES = null) {
    this.factory.module = mod || MODULES.SALES;
    this.facade = this.factory.facade;
  }

  onSearch() {
    this.dashboard = this.facade.search({ start: '31/12/2000', end: '21/12/2112'});
  }

  onSave() {
    this.dashboard = this.facade.save(this.dashboard);
  }

  onChange() {
    this.setModAndFacade(MODULES.FLOWN);
    this.onSearch();
  }
}
