import { NgModule } from "@angular/core";
import { LineGraphComponent } from "./line-graph/line-graph.component";
import { NgxEchartsModule } from "ngx-echarts";

@NgModule({
    declarations: [
        LineGraphComponent
    ],
    imports:[
        NgxEchartsModule.forRoot({
            echarts: () => import('echarts')
        })
    ],
    exports: [
        LineGraphComponent
    ]
})

export class SharedComponentModule{

}