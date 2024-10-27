import { Component } from "@angular/core";
import { SiteConfigService } from "libs/shared/services/site-config.service";

@Component ({
    selector:'lib-footer',
    templateUrl:'./footer.component.html'
})

export class FooterComponent {
    public upperNavigationURLs:any;
    public companyDetails:any;

    constructor(private siteConfigService:SiteConfigService){
        this.upperNavigationURLs = this.siteConfigService.UPPER_NAVIGATION_URL;
        this.companyDetails      = this.siteConfigService.CONFIGS;
    }

}