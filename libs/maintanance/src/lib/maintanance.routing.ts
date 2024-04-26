import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MaintananceComponent } from "./maintanance.component";

const routes:Routes = [
    {
        path:'maintenance',
        component:MaintananceComponent,
        data:[{BREAD_CRUMB_TEXT:'MAINTANANCE'}]
    }
]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class MaintananceRoutingModule {}