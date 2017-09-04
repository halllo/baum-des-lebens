import { Component } from '@angular/core';

@Component({
  selector: 'circle-item',
  templateUrl: './circle-item.component.html',
  styleUrls: ['./circle-item.component.css'],
  inputs: ['angle', 'distance', 'image']
})
export class CircleItemComponent {
  private angle: number;
  private distance: number;
  private image: string;

  constructor() {
  }
}