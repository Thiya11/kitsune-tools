import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { MaintananceModule } from 'libs/maintanance/src/public-api';
import { PageNotFoundModule } from 'libs/page-not-found/src/public-api';
import { OhmsCalculatorModule } from 'libs/ohms-calculator/src/public-api';
import { CoreModule } from 'libs/core/src/lib/core.module';
import { PendulumSimModule } from 'libs/pendulum-sim/src/lib/pendulum-sim.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    MaintananceModule,
    OhmsCalculatorModule,
    PendulumSimModule,
    PageNotFoundModule,
  ],
  providers: [
    {provide:LocationStrategy,useClass:PathLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
