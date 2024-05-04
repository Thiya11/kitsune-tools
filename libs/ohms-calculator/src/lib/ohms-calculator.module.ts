import { NgModule } from '@angular/core';
import { OhmsCalculatorComponent } from './ohms-calculator.component';
import { OhmsCalculatorRouting } from './ohms-calculator.routing';
import { TabsModule } from 'libs/shared/components/tabs/tabs.module';
import { CommonModule } from '@angular/common';
import { ResistanceUnitPipe } from './pipes/resistance-value.pipe';
import { StandardResistanceComponent } from './standard-resistance/standard-resistance';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';


@NgModule({
  declarations: [
    OhmsCalculatorComponent,
    StandardResistanceComponent,
    ResistanceUnitPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    OhmsCalculatorRouting,
    TabsModule
  ],
  exports: [
    OhmsCalculatorComponent
  ]
})
export class OhmsCalculatorModule { }
