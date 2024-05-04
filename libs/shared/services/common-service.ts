import { Injectable } from "@angular/core";
import { FormControl } from "@angular/forms";
import { Observable, Subject } from "rxjs";

@Injectable({
    'providedIn':'root'
})

export class CommonService {
    public _selectedResistance:Subject<any>    = new Subject();
    public $selectedResistance:Observable<any> = this._selectedResistance.asObservable()
    
    formatObjtoArray(obj:any) {
        let convertedArr = [];
        for (let item in obj) {
            let newObj:any = {};
            newObj['label'] = item;
            newObj['value'] = obj[item]['tolerance'];
            newObj['color'] = obj[item]['hexcode'];
            convertedArr.push(newObj);
        }
        return convertedArr;
    }

    findColorFromArr(arr:any, value:string) {
        let color:string = ''
        for (let item of arr) {
            if (item.value == value) {
                color = item.color;
            }
        }
        return color;
    }

    fieldIncreament(control:string,increament:number) {
        return (Number(control) + increament).toFixed(5);
    }

    fieldDecreament(control:string, decreament:number) {
      return (Number(control) - decreament).toFixed(5);
    }
}