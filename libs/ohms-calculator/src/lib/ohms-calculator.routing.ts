import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { OhmsCalculatorComponent } from "./ohms-calculator.component";


const routes:Routes = [
    {
        path: 'ohms-calculator',
        component: OhmsCalculatorComponent,
        data: [{BREAD_CRUMB_TEXT:'OHMS_CALCULATOR'}]
    }
]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class OhmsCalculatorRouting {}