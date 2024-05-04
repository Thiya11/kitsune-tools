import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'resistanceUnit',
})

export class ResistanceUnitPipe implements PipeTransform {

    transform(value: any, ...args: any[]) {
        if (value < 1000) {
            return value + 'Ω'
        }
        if (value > 1000 && value < 10000) {
            return value / 1000 + 'kΩ'
        }
        return value.replace(/0{3}$/,'kΩ')
    }
    
}