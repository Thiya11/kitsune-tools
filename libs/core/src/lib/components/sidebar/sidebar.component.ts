import { Component, ViewChild } from "@angular/core";

@Component({
    selector:'lib-sidebar',
    templateUrl:'./sidebar.component.html'
})

export class SideBarComponent {
    public isSideBarHidden: boolean = true;

    toggleSideBar() {
        this.isSideBarHidden = !this.isSideBarHidden
    }
}