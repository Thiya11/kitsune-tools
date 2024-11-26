import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PendulumSimComponent } from "./pendulum-sim.component";


const routes:Routes = [
    {
        path: 'pendulum-sim',
        component: PendulumSimComponent,
        data: [{BREAD_CRUMB_TEXT:'OHMS_CALCULATOR'}]
    }
]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class PendulumSimRouting {}