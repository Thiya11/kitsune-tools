import { Component, Input } from "@angular/core";

@Component({
    selector: 'lib-tab',
    template:`
    <div [hidden]="!active" class="pane">
        <ng-content></ng-content>
    </div>
    `
})

export class TabComponent {
    @Input() tabTitle: string;
    @Input() active: boolean = false;
}