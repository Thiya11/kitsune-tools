import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PageNotFoundComponent } from "./page-not-found.component";

const routes:Routes = [
    {
        path: '**',
        redirectTo: '404',
        pathMatch: 'full'
    },
    {
        path: '404',
        component: PageNotFoundComponent,
        data: [{BREAD_CRUMB_TEXT:'404'}]
    }
]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class PageNotFoundRouting {}