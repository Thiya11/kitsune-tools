import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'resistanceUnit',
})

export class ResistanceUnitPipe implements PipeTransform {

    transform(value: any, ...args: any[]) {
        if (value < 1000) {
            return value + 'Ω'
        }
        if (value >= 1000 && value < 1000000) {
            return value / 1000 + 'kΩ'
        }
        if (value >= 1000000 && value < 999999999 ) {
            return value / 1000000 + 'MΩ'
        }
        return 'Exceeds the limit'
    }
    
}