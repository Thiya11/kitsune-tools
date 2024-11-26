import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';
import { PENDULUM_OPTIONS, PLANET_OPTIONS } from 'libs/shared/configs/general-values';
import { CommonService } from 'libs/shared/services/common-service';
import { P5Service } from 'libs/shared/services/p5.service';
import * as p5 from 'p5';

@Component({
  selector: 'lib-pendulumSim',
  templateUrl: './pendulum-sim.component.html',
})
export class PendulumSimComponent implements OnInit, AfterViewInit {
  @ViewChild('canvas') canvas: ElementRef;
  private p5Instance: p5 | null = null;
  pendulumOptions: any = PENDULUM_OPTIONS;
  planetsList: any = PLANET_OPTIONS;
  planetColor:string;
  planetGravity:string;
  graphData: any = [];
  startTime: any;
  canvasHeight: number = 400;
  canvasWidth: number = 600;
  p5Sketch: any;
  angle: number;
  angleVel: number;
  angleAcc: number;
  pendulumLength: number;
  gravity: number;
  origin: { x: number; y: number };
  bob: { x: number; y: number };
  isDragging: boolean = false;
  damping:number = 0;
  mass:number    = 2;

  @HostListener('window:resize', ['event'])
  onResize() {
    const chart = this.canvas.nativeElement;
    if(window.innerWidth < 766) {
      chart.style.width = '400px';
      chart.style.height = '500px';
      this.canvasWidth = 400;
      this.canvasHeight = 400;
      this.origin = { x: this.canvasWidth / 2, y: 0 };
    }
    else if(window.innerWidth > 766 && window.innerWidth < 1080) {
      chart.style.width = '750px';
      chart.style.height = '450px';
      this.canvasWidth = 750;
      this.canvasHeight = 450;
      this.origin = { x: this.canvasWidth / 2, y: 0 };
    }
    else if(window.innerWidth > 1081 && window.innerWidth < 1280) {
      chart.style.width = '550px';
      chart.style.height = '450px';
      this.canvasWidth = 500;
      this.canvasHeight = 450;
      this.origin = { x: this.canvasWidth / 2, y: 0 };
    } else {
      this.canvasWidth = 700;
      this.canvasHeight = 400;
      this.origin = { x: this.canvasWidth / 2, y: 0 };
    }
    this.p5Instance?.resizeCanvas(this.canvasWidth, this.canvasHeight)
  }

  constructor(
    private p5Service: P5Service,
    private commonService: CommonService
  ) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
   setTimeout(()=> {
    this.initiateP5Graph();
    this.onResize();
    this.onPlanetChange(1)
   })

    this.startTime = new Date();
    this.graphData = {
      angleData: [],
      positionData: [],
      label: [],
    };
    setInterval(() => {
      if (this.p5Sketch && this.bob) {
        this.updateGraphData();
      }
    }, 50);
  }

  onPlanetChange(event:any) {
    const elem = event === 1 ? document.querySelector('#planet_card_' + 1) : document.querySelector('#planet_card_' + event.id);
    const container = document.querySelectorAll('.planet-card');
    this.planetColor = event === 1 ? '#138dff' : event.color; 
    this.planetGravity = event === 1? `9.8 m/s<sup>2<sup>`: `${event.gravity} m/s<sup>2</sup>` 
    container.forEach((item:any)=> {
      item.classList.contains('selected') ? item.classList.remove('selected') : '';
    })
    elem?.classList.add('selected');
  }

  initiateP5Graph() {
    this.p5Sketch = (p: p5) => {
      this.angle = p.PI / 2; // Initial angle
      this.angleVel = 0; // Angular velocity
      this.angleAcc = 0; // Angular acceleration
      this.pendulumLength = 200;
      this.gravity = 0.40; // Anchor point
      let stars:any[] = []; //global variable for stars(array)
      let numStars = 400;

      p.setup = () => {
        p.createCanvas(this.canvasWidth, this.canvasHeight);
        for (let i = 0; i < numStars; i++) {
          stars[i] = p.createVector(p.random(p.width), p.random(p.height), p.random(1,6));
        }
      };

      p.draw = () => {
        p.background('#6f6c93');
        //creating starts
        p.stroke(255);
        p.fill('#fdff00');
        for (let i = 0; i < numStars; i++){
          p.ellipse(stars[i].x, stars[i].y, stars[i].z,stars[i].z);
        }
         //creating background
         p.stroke(this.planetColor);
         p.fill(this.planetColor);
         p.ellipse(350, p.height, p.height + 500, 200);

        // Calculate bob position
        this.bob = {
          x: this.origin.x + this.pendulumLength * p.sin(this.angle),
          y: this.origin.y + this.pendulumLength * p.cos(this.angle),
        };

        if (!this.isDragging) {
          // Physics calculations
          this.angleAcc = (-this.gravity / this.pendulumLength) * p.sin(this.angle); // Angular acceleration
          this.angleVel += this.angleAcc; // Angular velocity
          this.angleVel *= (1-this.damping); // Damping factor (friction-like)
          this.angle += this.angleVel; // Update angle
        } else {
          // Update angle based on mouse position while dragging
          const dx = p.mouseX - this.origin.x;
          const dy = p.mouseY - this.origin.y;

          // Constrain bob's position within the screen bounds
          const constrainedX = p.constrain(
            p.mouseX,
            this.origin.x - this.pendulumLength,
            this.origin.x + this.pendulumLength
          );
          const constrainedY = p.constrain(
            p.mouseY,
            this.origin.y,
            this.origin.y + this.pendulumLength
          );

          this.angle = Math.atan2(
            constrainedX - this.origin.x,
            constrainedY - this.origin.y
          );
        }

        // Draw pendulum
        p.stroke(255);
        p.line(this.origin.x, this.origin.y, this.bob.x, this.bob.y);
        p.fill('#3c203c');
        p.ellipse(this.bob.x, this.bob.y, 45, 45);
      };

      p.mousePressed = () => {
        const d = p.dist(p.mouseX, p.mouseY, this.bob.x, this.bob.y);
        if (d < 15) {
          // Check if mouse is near the bob
          this.isDragging = true;
          this.angleVel = 0; // Stop motion while dragging
        }
      };

      p.mouseReleased = () => {
        this.isDragging = false;
      };
    };
    this.p5Service.createSketch(this.p5Sketch, this.canvas.nativeElement);
  }

  updateGraphData() {
    const now: any = new Date();
    const t = now - this.startTime;
    const r = this.canvasWidth / 2;
    const x = this.bob.x - this.canvasWidth / 2;
    const angle = Math.acos(x / r);
    this.graphData.label.push(t);
    this.graphData.angleData.push(this.angleVel * this.pendulumLength);
    this.graphData.positionData.push(this.bob.y);

    if (this.graphData.label.length > 500) {
      this.graphData.label.shift();
      this.graphData.angleData.shift();
      this.graphData.positionData.shift();
    }

    this.commonService._pendulumGraphData.next(this.graphData);
  }
}
