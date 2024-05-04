import { Component } from '@angular/core';
import { MESSAGES } from 'libs/shared/configs/messages';
import { SiteConfigService } from 'libs/shared/services/site-config.service';

@Component({
  selector: 'lib-pageNotFound',
  templateUrl:'page-not-found.component.html'
})
export class PageNotFoundComponent {
  public pageNotFoundMessage: String = MESSAGES.pageNotFoundMessage;
  public homeURL: string;

  constructor(
    private siteConfigService:SiteConfigService,
  ){
    this.homeURL = this.siteConfigService.CONFIGS['homeURL']
  }

}
