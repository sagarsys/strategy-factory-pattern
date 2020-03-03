import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {DASH_FACADE, FlownDashboardFacade, SalesDashboardFacade} from './models/dashboard.facade';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: DASH_FACADE,
      useClass: SalesDashboardFacade,
      multi: true
    },
    {
      provide: DASH_FACADE,
      useClass: FlownDashboardFacade,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
