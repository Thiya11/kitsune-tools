import { NgModule } from '@angular/core';
import { CoreComponent } from './components/core.component';
import { RouterModule } from '@angular/router';
import { OverviewComponent } from './components/overview/overview.component';
import { CoreRoutingModule } from './core-routing.module';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';



@NgModule({
  declarations: [
    SideBarComponent,
    HeaderComponent,
    CoreComponent,
    OverviewComponent,
    FooterComponent
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
