import { Component } from "@angular/core";
import { AVAILABLE_APPS } from "libs/shared/configs/general-values";

@Component({
    selector:'lib-overview',
    templateUrl:'./overview.component.html'
})

export class OverviewComponent {
    public availableApps = AVAILABLE_APPS;

}