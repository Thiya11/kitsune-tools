import { Component } from "@angular/core";
import { SiteConfigService } from "libs/shared/services/site-config.service";

@Component({
    selector:'lib-header',
    templateUrl:'./header.component.html'
})

export class HeaderComponent {
    public upperNavigationURLs:any;

    constructor(private siteConfigService:SiteConfigService){
        this.upperNavigationURLs = this.siteConfigService.UPPER_NAVIGATION_URL;
    }
}