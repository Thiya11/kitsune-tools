import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TabService } from 'libs/shared/components/tabs/tab.service';
import { RESISTORS_COLOR_SWATCH, RESISTOR_TOLERENCE_COLOR_SWATCH, STANDARD_RESISTOR_VALUES, UNIT_OPTIONS } from 'libs/shared/configs/general-values';
import { CommonService } from 'libs/shared/services/common-service';

@Component({
  selector: 'lib-ohmsCalculator',
  templateUrl:'ohms-calculator.component.html'
})
export class OhmsCalculatorComponent {
  public standardResistanceValues: any        = STANDARD_RESISTOR_VALUES;
  public ResistorColorSwatchesArr: Array<any> = RESISTORS_COLOR_SWATCH;
  public toleranceColorSwatchesArr: any       = RESISTOR_TOLERENCE_COLOR_SWATCH;
  public ohmsCalcForm: FormGroup;
  public knownResistorForm: FormGroup;
  public toleranceList: any = [];
  public allStandardResistanceArr: any = [];
  private resMultiplierArr: Array<number> = [1, 10, 100, 1000, 10000];
  public firstRing: number;
  public secondRing: number;
  public thirdRing: number;
  public toleranceRing: string;
  public customFirstRing: number;
  public customSecondRing: number;
  public customThirdRing: number;
  public customToleranceRing: string;
  public knownFirstRing: number;
  public knownSecondRing: number;
  public knownThirdRing: number;
  public knownToleranceRing: string;
  public selectedStandardTolerence: string;
  public selectedCustomTolerence: string;
  public voltage: number;
  public current: number;
  public selectedResistance: number;
  public currentTab: number;
  public finalResistance: number = 0;
  public unitConversionResistor: any; 

  constructor(
    private commonService:CommonService,
    private tabService: TabService
  ) {
    this.initiateResistanceValues();
    this.initiateFormControl();
    this.toleranceList = this.commonService.formatObjtoArray(this.toleranceColorSwatchesArr);
    this.setResistanceValues(10);
    this.setCustomResistance('initiate','');
    this.selectedStandardTolerence = this.selectedCustomTolerence =  '1%';
    this.unitConversionResistor = UNIT_OPTIONS 

    this.commonService.$selectedResistance.subscribe((resistance)=>{
      this.selectedResistance = Number(resistance)
    })

    this.tabService.currentTabIndex$.subscribe(currentIndex=> {
      this.currentTab    = currentIndex;
      this.toleranceRing = this.customToleranceRing = this.commonService.findColorFromArr(this.toleranceList,'1%')
      this.f['voltage'].setValue(0);
      this.f['current'].setValue(0)
      currentIndex == 1 || currentIndex == 2 ? this.activateElements() : '';
      this.initateKnownResistorFormControls()
    })
  }

  activateElements() {
    const firstRing  = document.getElementById('Brown1');
    const secondRing = document.getElementById('Black2');
    const thirdRing  = document.getElementById('Black3');
    firstRing?.click();
    secondRing?.click();
    thirdRing?.click();
  }

  initiateResistanceValues() {
    for (let multiplier of this.resMultiplierArr) {
      let multipliedResistors: any = [];
      for (let resistor of this.standardResistanceValues) {
        let resValue = resistor.value * multiplier; 
        let resObj   = {"value": resValue, "label": String(resValue)};
        multipliedResistors.push(resObj)
      }
      this.allStandardResistanceArr.push(multipliedResistors);
    }
  }

  initateKnownResistorFormControls() {
    this.knownResistorForm = new FormGroup({
      resistance: new FormControl(10),
      resistanceRange: new FormControl(1),
    });

    this.knownResistorForm.valueChanges.subscribe((formData:any)=> {
      this.finalResistance = (Math.round(formData.resistance) * formData.resistanceRange)
       if(this.finalResistance >= 10) {
         this.setCustomResistance('first',this.finalResistance.toString()[0]);
         this.setCustomResistance('second',this.finalResistance.toString()[1]);
         this.setCustomResistance('third',this.finalResistance.toString().slice(2,this.finalResistance.toString().length).length.toString());
         this.commonService.$selectedResistance.subscribe(val=> {
          this.ohmsCalcForm.controls['voltage'].setValue((this.ohmsCalcForm.controls['current'].value * val).toFixed(5),{emitEvent:false});
         })
       }
    })
  }

  initiateFormControl() {
    this.ohmsCalcForm = new FormGroup({
      voltage: new FormControl(0),
      current: new FormControl(0)
    });
    this.calculateResistance();
  }

  calculateResistance() {
    this.ohmsCalcForm.controls['current'].valueChanges.subscribe(val=>{
      this.ohmsCalcForm.controls['voltage'].setValue((val * this.selectedResistance).toFixed(5),{emitEvent:false})
   })

   this.ohmsCalcForm.controls['voltage'].valueChanges.subscribe(val=>{
     this.ohmsCalcForm.controls['current'].setValue((val / this.selectedResistance).toFixed(5),{emitEvent:false});
   })
  }

  get f() {
    return this.ohmsCalcForm.controls
  }

  get c() {
    return this.knownResistorForm.controls
  }

  setResistanceValues(val:number) {
    let ringsArr    = String(val).split('').map(Number);
    this.firstRing  = ringsArr[0];
    this.secondRing = ringsArr[1];
    this.thirdRing  = ringsArr.slice(2).join('').length
  }

  setCustomResistance(type:string, val:string) {
    switch(type) {
      case 'first':
        this.customFirstRing = Number(val);
        break;
      case 'second':
        this.customSecondRing = Number(val);
        break;
      case 'third':
        this.customThirdRing = Number(val);
        break;
      case 'initiate':
        this.setCustomResistance('first', '1');
        this.setCustomResistance('second', '0' );
        this.setCustomResistance('third', '0')    
    }
  }

  setTolerenceValue(event: any) {
    if(this.currentTab == 0) {
      this.toleranceRing = this.commonService.findColorFromArr(this.toleranceList,event);
    }
    else if(this.currentTab == 1) {
      this.customToleranceRing = this.commonService.findColorFromArr(this.toleranceList,event);
    }
  }

  numIncreament(fieldName:string) {
    this.ohmsCalcForm.controls[fieldName].setValue(this.commonService.fieldIncreament(this.ohmsCalcForm.value[fieldName],0.00001))
  }

  numDecreament(fieldName:string) {
    this.ohmsCalcForm.controls[fieldName].setValue(this.commonService.fieldIncreament(this.ohmsCalcForm.value[fieldName],0.00001))
  }

}
