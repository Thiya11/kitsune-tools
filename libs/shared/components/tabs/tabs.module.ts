import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import {TabsComponent } from "./tabs.component";
import { TabComponent } from "./tab.component";

@NgModule({
    declarations: [
        TabComponent,
        TabsComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        TabComponent,
        TabsComponent
    ]
})

export class TabsModule {}