import { NgModule } from '@angular/core';
import { CoreComponent } from './components/core.component';
import { RouterModule } from '@angular/router';
import { OverviewComponent } from './components/overview/overview.component';
import { CoreRoutingModule } from './core-routing.module';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './components/sidebar/sidebar.component';



@NgModule({
  declarations: [
    SideBarComponent,
    CoreComponent,
    OverviewComponent,
  ],
  imports: [
    RouterModule,
    CommonModule,
    CoreRoutingModule
  ],
  exports: [
    CoreComponent
  ]
})
export class CoreModule { }
