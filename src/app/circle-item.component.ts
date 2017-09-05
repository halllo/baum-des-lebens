import { Component, Input, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'circle-item',
  templateUrl: './circle-item.component.html',
  styleUrls: ['./circle-item.component.css']
})
export class CircleItemComponent {
  @Input() private angle: number;
  @Input() year: number;
  @Input() private image: string;
  
  private _distance: number = 12;
  public get distance() { return this._distance; }
  public set distance(value) { 
    this._distance = value;
    this.cdRef.detectChanges();
  };

  constructor(private cdRef:ChangeDetectorRef) {
  }
}