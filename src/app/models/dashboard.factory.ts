import {Inject, Injectable} from '@angular/core';
import {DASH_FACADE, DashboardFacade, MODULES} from './dashboard.facade';

@Injectable({
  providedIn: 'root'
})
export class DashboardFactory {

  // tslint:disable-next-line:variable-name
  private _module: MODULES;

  constructor(@Inject(DASH_FACADE) private facades: DashboardFacade[]) {}

  set module(mod: MODULES) {
    this._module = mod;
  }
  get module(): MODULES {
    return this._module;
  }

  get facade(): DashboardFacade {
    return this.facades
      .filter(facade => facade.supports(this.module))
      .reduce(f => f);
  }
}
