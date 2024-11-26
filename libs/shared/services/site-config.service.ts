import { Injectable } from "@angular/core";

@Injectable({
    providedIn:'root'
})

export class SiteConfigService {
    public _CONFIGS: any;
    public _TEXT_CONFIGS: any;
    public _UPPER_NAVIGATION_URL:any;

    set CONFIGS(CONFIGS:any) {
        this._CONFIGS = CONFIGS;
    }

    get CONFIGS() {
        return this._CONFIGS
    }

    set TEXT_CONFIGS(TEXT_CONFIGS:any) {
        this._TEXT_CONFIGS = TEXT_CONFIGS;
    }

    get TEXT_CONFIGS() {
        return this._TEXT_CONFIGS
    }

    set UPPER_NAVIGATION_URL(UPPER_NAVIGATION:any) {
        this._UPPER_NAVIGATION_URL = UPPER_NAVIGATION;
    }

    get UPPER_NAVIGATION_URL() {
        return this._UPPER_NAVIGATION_URL;
    }

}