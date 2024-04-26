import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { SiteConfigService } from 'libs/shared/services/site-config.service';
import { CONFIGS } from './configs/config';
import { TEXT_CONFIGS } from './configs/text-config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    private titleService: Title,
    private siteConfigService: SiteConfigService
  ) {
     this.setSiteConfigs()
     this.titleService.setTitle(CONFIGS['siteName'])
  }

  setSiteConfigs() {
    this.siteConfigService.CONFIGS      = CONFIGS;
    this.siteConfigService.TEXT_CONFIGS = TEXT_CONFIGS;
  }

}
