import { Directive, ElementRef, Input, ChangeDetectorRef } from '@angular/core';

@Directive({ selector: '[circle-item]' })
export class CircleItemDirective {
    @Input() year: number;
    @Input() angle: number;

    constructor(private el: ElementRef, private cdRef:ChangeDetectorRef) {
       el.nativeElement.style.display = 'block';
       el.nativeElement.style.position = 'absolute';
       el.nativeElement.style.top = '50%';
       el.nativeElement.style.left = '50%';
    }

    private _distance: number = 12;
    public get distance() { return this._distance; }
    public set distance(value) { 
      this._distance = value;
      this.el.nativeElement.style.transform = `rotate(${this.angle}deg) translate(${this._distance}em) rotate(-${this.angle}deg)`;
    };
}