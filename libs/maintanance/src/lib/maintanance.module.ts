import { NgModule } from '@angular/core';
import { MaintananceComponent } from './maintanance.component';
import { MaintananceRoutingModule } from './maintanance.routing';



@NgModule({
  declarations: [
    MaintananceComponent
  ],
  imports: [
    MaintananceRoutingModule
  ],
  exports: [
    MaintananceComponent
  ]
})
export class MaintananceModule { }
