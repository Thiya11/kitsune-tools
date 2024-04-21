import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MaintananceComponent } from "./maintanance.component";

const routes:Routes = [
    {
        path:'maintenance',
        component:MaintananceComponent
    }
]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class MaintananceRoutingModule {}