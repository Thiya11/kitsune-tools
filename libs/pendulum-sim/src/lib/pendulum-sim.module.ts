import { NgModule } from '@angular/core';
import { PendulumSimComponent } from './pendulum-sim.component';
import { PendulumSimRouting } from './pendulum-routing.module';
import { SharedComponentModule } from "../../../shared/components/shared-component.module";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    PendulumSimComponent,
  ],
  imports: [
    PendulumSimRouting,
    SharedComponentModule,
    CommonModule,
    FormsModule
],
  exports: [
  ]
})
export class PendulumSimModule { }
