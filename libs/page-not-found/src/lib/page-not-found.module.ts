import { NgModule } from '@angular/core';
import { PageNotFoundComponent } from './page-not-found.component';
import { PageNotFoundRouting } from './page-not-found.routing';



@NgModule({
  declarations: [
    PageNotFoundComponent
  ],
  imports: [
    PageNotFoundRouting
  ],
  exports: [
    PageNotFoundComponent
  ]
})
export class PageNotFoundModule { }
