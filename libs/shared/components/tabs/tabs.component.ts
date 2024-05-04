import { AfterContentInit, Component, ContentChildren, Input, QueryList } from "@angular/core";
import { TabComponent } from "./tab.component";
import { Observable, Subject } from "rxjs";
import { TabService } from "./tab.service";

@Component({
    selector:'lib-tabs',
    template:`
    <div class="tabs-container">
        <ul class="nav nav-tabs">
            <li *ngFor="let tab of tabs" class="tab" [ngClass]="{'active': tab.active === true}" (click)="selectTab(tab)">
               {{tab.tabTitle}}
            </li>
        </ul>
        <ng-content></ng-content>
    </div>
    `
})

export class TabsComponent implements AfterContentInit {
    @ContentChildren(TabComponent) tabs: QueryList<TabComponent>
    constructor(
        private tabService: TabService
    ) {}

    ngAfterContentInit(): void {
       const activeTabs = this.tabs.filter(tab => tab?.active);
       if (activeTabs.length == 0) {
         this.selectTab(this.tabs.first)
       }
    }

    selectTab(tab: TabComponent) {
        this.tabs.toArray().forEach(tab => (tab.active = false));
        tab.active = true;
        this.tabService.currentTabIndex.next(this.tabs.toArray().indexOf(tab))
    }

}