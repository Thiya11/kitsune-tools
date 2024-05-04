import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, Subject} from "rxjs";

@Injectable({
    providedIn:'root'
})

export class TabService {
    currentTabIndex: BehaviorSubject<number>   =  new BehaviorSubject(0);
    currentTabIndex$:Observable<number> = this.currentTabIndex.asObservable();

}