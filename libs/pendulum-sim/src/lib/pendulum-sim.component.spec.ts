import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendulumSimComponent } from './pendulum-sim.component';

describe('PendulumSimComponent', () => {
  let component: PendulumSimComponent;
  let fixture: ComponentFixture<PendulumSimComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PendulumSimComponent]
    });
    fixture = TestBed.createComponent(PendulumSimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
