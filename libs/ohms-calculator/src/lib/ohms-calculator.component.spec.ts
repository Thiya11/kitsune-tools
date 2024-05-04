import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OhmsCalculatorComponent } from './ohms-calculator.component';

describe('OhmsCalculatorComponent', () => {
  let component: OhmsCalculatorComponent;
  let fixture: ComponentFixture<OhmsCalculatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OhmsCalculatorComponent]
    });
    fixture = TestBed.createComponent(OhmsCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
