import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";
import { RESISTORS_COLOR_SWATCH, RESISTOR_TOLERENCE_COLOR_SWATCH } from "libs/shared/configs/general-values";
import { CommonService } from "libs/shared/services/common-service";

@Component({
    selector:'lib-standard-resistance',
    templateUrl:'standard-resistance.html'
})

export class StandardResistanceComponent implements OnChanges {
    public ResistorColorSwatchesArr: Array<any>  = RESISTORS_COLOR_SWATCH;
    public toleranceColorSwatchesArr: Array<any> = RESISTOR_TOLERENCE_COLOR_SWATCH;
    @Input() firstRing: number;
    @Input() secondRing: number;
    @Input() thirdRing: number;
    @Input() toleranceRing: string;
    public selectedResistance: string;

    constructor(
        private commonService: CommonService,
    ) {
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (this.firstRing) {
            this.selectedResistance = String(this.firstRing) + String(this.secondRing) + '0'.repeat(this.thirdRing)
        }
        else {
            this.selectedResistance = '0';
        }
        this.commonService._selectedResistance.next(this.selectedResistance)
    }
}