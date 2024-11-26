import {Injectable } from "@angular/core";
import * as p5 from 'p5';

@Injectable({
    providedIn:'root'
})

export class P5Service {
    private p5Instance: p5 | null = null;

    public createSketch(sketch:(p:p5) => void, canvas:HTMLElement): void {
        this.destroySketch();
        this.p5Instance = new p5(sketch, canvas)

    }

    public destroySketch() {
        if(this.p5Instance) {
            this.p5Instance.remove();
            this.p5Instance = null;
        }
    }

}